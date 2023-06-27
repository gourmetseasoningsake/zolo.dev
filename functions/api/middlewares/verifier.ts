import type {JWTVerifyResult} from "jose";
import type {ErrorCause, Result} from "../types";
import * as jose from "jose";

type PublicCert = {
  kid: string;
  cert: string;
};

type VerifyJWTParam = {
  publicCerts: PublicCert[];
  token: string;
  issuer: string;
  audience: string;
};

export async function verifyJWT({
  publicCerts,
  token,
  issuer,
  audience,
}: VerifyJWTParam): Promise<Result<JWTVerifyResult>> {
  let error: ErrorCause[] = [];
  let result: JWTVerifyResult;

  try {
    const header = jose.decodeProtectedHeader(token) as {
      kid: string;
      alg: string;
    };
    const cert = findCertByKid(publicCerts, header.kid);
    const publicKey = await jose.importX509(cert, header.alg);
    const jwtVerifyResult = await jose.jwtVerify(token, publicKey, {
      issuer,
      audience,
    });
    return {result: jwtVerifyResult};
  } catch (err) {
    const message =
      err instanceof Error
        ? err.message
        : "failed to validate with provided token, issuer and audience";
    error.push({
      id_: "api#0",
      key: "token,issuer,audience",
      value: [token.slice(0, 16), issuer, audience.slice(0, 8)].join("..., "),
      message,
    });
  }

  return {error};
}

function findCertByKid(certs: PublicCert[], kid_: string): string {
  const cert = certs.find(({kid}) => kid === kid_);
  if (cert?.cert) {
    return cert.cert;
  } else {
    throw Error(`could not match a cert with provided kid ${kid_}`);
  }
}
