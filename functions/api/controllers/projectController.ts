import {Context} from "hono";
import {ProjectService} from "../services";
import {Bindings} from "../[[route]]";

export async function getAllProjectItems(ctx: Context<Bindings>) {
  const result = await ProjectService.getAllProjectItems(ctx);
  if (result.result) {
    return ctx.json(result.result);
  }
  return ctx.json(result, 500);
}

export async function createOrUpdateProject(ctx: Context<Bindings>) {
  const result = await ProjectService.createOrUpdateProject(ctx);
  if (result.result) {
    return ctx.text(`POST ${ctx.req.path}`);
  }
  return ctx.text(`POST ${ctx.req.path}`, 500);
}
