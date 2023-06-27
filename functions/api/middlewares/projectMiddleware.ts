import type {MiddlewareHandler} from "hono";
import {makeGithubFetcher} from "./github.vnd";
import {makeCloudflareFetcher} from "./cloudflare.vnd";
import {makeD1Database} from "../db/database";
import {Verifier} from "./";

type ProjectFnOptions = {
  database: D1Database;
  githubFetcher: {
    baseUrl: string;
    userAgent: string;
    token: string;
  };
  cloudflareFetcher: {
    baseUrl: string;
  };
  verifier: {
    audience: string;
    issuer: string;
  };
};

export function makeProjectMiddleware({
  database,
  githubFetcher,
  cloudflareFetcher,
  verifier,
}: ProjectFnOptions): MiddlewareHandler {
  return async function (ctx, next) {
    ctx.env.Database = makeD1Database(database);
    ctx.env.GithubFetcher = makeGithubFetcher(githubFetcher);
    ctx.env.CloudflareFetcher = makeCloudflareFetcher(cloudflareFetcher);

    if (!(ctx.env.ENVIRONMENT === "development")) {
      try {
        const {token} = ctx.req.cookie();

        const certs = await ctx.env.CloudflareFetcher.getCerts();
        const result = await Verifier.verifyJWT({
          publicCerts: certs.public_certs,
          audience: verifier.audience,
          issuer: verifier.issuer,
          token,
        });

        if (result.result) {
          // NB: besides identity.identity.id, the gh user id, also returns names of accessible gh orgs
          // just in case you would like to scale to more orgs.
          const identity = await ctx.env.CloudflareFetcher.getIdentity(token);
          ctx.env.Identity = identity.identity.id;
        }

        return ctx.json({result}, 401);
      } catch (err) {
        return ctx.json(
          {error: err instanceof Error ? err.message : "unknown"},
          401,
        );
      }
    } else {
      ctx.env.Identity = 66337164; // NB: this is the id of the test user jimfeld (j@imfeld.xyz)
    }

    await next();
  };
}
