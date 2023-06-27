import {Context} from "hono";
import {Repository, Milestone} from "./";
import {ErrorCause, Result} from "../types";
import {Bindings} from "../[[route]]";

export type T = {
  id: string;
  repositoryId: string;
  title: string;
  issue?: string | null;
  status?: string | null;
  milestoneId?: string | null;
  fulfillmentStart?: string | null;
  fulfillmentTarget?: string | null;
  charge?: "to be charged" | "charged" | null;
  c10?: number | null;
  c20?: number | null;
  c30?: number | null;
  c35?: number | null;
  c40?: number | null;
  c50?: number | null;
  invoiceId?: string | null;
};

export const tableName = "ProjectItems";

export const createOrUpdateAllStmt: {query: string; defaultValues: T} = {
  query: `
    INSERT INTO ${tableName} (
      id,
      repositoryId,
      title,
      issue,
      status,
      milestoneId,
      fulfillmentStart,
      fulfillmentTarget,
      charge,
      c10,
      c20,
      c30,
      c35,
      c40,
      c50,
      invoiceId
    ) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, ?14, ?15, ?16) ON CONFLICT (id) DO UPDATE SET
      repositoryId=excluded.repositoryId,
      title=excluded.title,
      issue=excluded.issue,
      status=excluded.status,
      milestoneId=excluded.milestoneId,
      fulfillmentStart=excluded.fulfillmentStart,
      fulfillmentTarget=excluded.fulfillmentTarget,
      charge=excluded.charge,
      c10=excluded.c10,
      c20=excluded.c20,
      c30=excluded.c30,
      c35=excluded.c35,
      c40=excluded.c40,
      c50=excluded.c50,
      invoiceId=excluded.invoiceId;
    `,
  defaultValues: {
    id: "",
    repositoryId: "",
    title: "",
    issue: null,
    status: null,
    milestoneId: null,
    fulfillmentStart: null,
    fulfillmentTarget: null,
    charge: null,
    c10: null,
    c20: null,
    c30: null,
    c35: null,
    c40: null,
    c50: null,
    invoiceId: null,
  },
};

export const getAllStmt: {query: string} = {
  query: `SELECT * FROM ${tableName} LIMIT 100;`,
};

export async function createOrUpdateAllProjectItems(
  ctx: Context<Bindings>,
  [repositories, milestones, projectItems]: [
    Repository.T[],
    Milestone.T[],
    T[],
  ],
): Promise<Result<D1Result<unknown>[]>> {
  return Promise.all([
    ctx.env.Database.prepare<Repository.T>(
      Repository.createOrUpdateAllStmt,
    ).batch(repositories),
    ctx.env.Database.prepare<Milestone.T>(
      Milestone.createOrUpdateAllStmt,
    ).batch(milestones),
  ]).then(([repositoryResult, milestoneResult]) => {
    let error: ErrorCause[] = [];

    if (repositoryResult.error) {
      error.push(...repositoryResult.error);
    }

    if (milestoneResult.error) {
      error.push(...milestoneResult.error);
    }

    if (error.length) {
      return {error};
    }

    return ctx.env.Database.prepare<T>(createOrUpdateAllStmt).batch(
      projectItems,
    );
  });
}

export function getAllProjectItems(
  ctx: Context<Bindings>,
): Promise<Result<D1Result<unknown>>> {
  return ctx.env.Database.prepare(getAllStmt).all();
}
