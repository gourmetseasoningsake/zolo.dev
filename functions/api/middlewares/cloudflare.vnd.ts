import {Fetcher} from "../utils";

type MakeCloudflareFetcherFnParam = {
  baseUrl: string;
};

export interface CloudflareFetcher {
  getCerts: () => Promise<any>;
  getIdentity: (token: string) => Promise<any>;
}

export function makeCloudflareFetcher({
  baseUrl,
}: MakeCloudflareFetcherFnParam): CloudflareFetcher {
  const fetcher = Fetcher.make({
    baseUrl,
  });

  return {
    getCerts: () => fetcher("GET /cdn-cgi/access/certs"),
    getIdentity: (token) =>
      fetcher("GET /cdn-cgi/access/get-identity", {
        headers: {
          cookie: `CF_Authorization=${token}`,
        },
      }),
  };
}
