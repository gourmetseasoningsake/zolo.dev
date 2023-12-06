import type {GithubFetcher} from "./middlewares/github.vnd";
import type {CloudflareFetcher} from "./middlewares/cloudflare.vnd";
import type {DatabaseContainer} from "./db/database";
import {Hono} from "hono";
import {cors} from "hono/cors";
import {handle} from "hono/cloudflare-pages";
import {ProjectMiddleware} from "./middlewares";
import {ProjectController} from "./controllers";

export type Bindings = {
  Bindings: {
    ALLOW_ORIGIN: string;
    GH_API_ACCESS_TOKEN: string;
    GH_API_URL: string;
    GH_API_TIMEZONE: string;
    GH_APP_NAME: string;
    CF_TEAM_DOMAIN: string;
    CF_PORTAL_AUD_TAG: string;
    DB: D1Database;
    Database: DatabaseContainer<any>;
    GithubFetcher: GithubFetcher;
    CloudflareFetcher: CloudflareFetcher;
    Identity: number;
  };
  Variables: {};
};

const app = new Hono<Bindings>().basePath("/api");

app.use("/*", async (ctx, next) => {
  await cors({
    origin: ctx.env.ALLOW_ORIGIN.split(","),
  })(ctx, next);
});

app.use("/project/*", async (ctx, next) => {
  return ProjectMiddleware.makeProjectMiddleware({
    database: ctx.env.DB,
    githubFetcher: {
      baseUrl: ctx.env.GH_API_URL,
      userAgent: ctx.env.GH_APP_NAME,
      token: ctx.env.GH_API_ACCESS_TOKEN,
    },
    cloudflareFetcher: {
      baseUrl: ctx.env.CF_TEAM_DOMAIN,
    },
    verifier: {
      audience: ctx.env.CF_PORTAL_AUD_TAG,
      issuer: ctx.env.CF_TEAM_DOMAIN,
    },
  })(ctx, next);
});

app.get("/ping", (ctx) => ctx.text("GET /api/ping"));
app.post("/project", ProjectController.createOrUpdateProject);
app.get("/project/items", ProjectController.getAllProjectItems);
export const onRequest = handle(app);
