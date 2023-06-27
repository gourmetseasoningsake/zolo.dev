import {ErrorCause, Result} from "../types";

export interface DatabaseContainer<T> {
  value?: D1PreparedStatement;
  defaultValues?: any;
  readonly prepare: <T>({
    query,
    defaultValues,
  }: {
    query: string;
    defaultValues?: T;
  }) => Omit<DatabaseContainer<T>, "defaultValues" | "prepare" | "run">;
  readonly bind: (
    values: T,
  ) => Omit<
    DatabaseContainer<T>,
    "defaultValues" | "bind" | "batch" | "prepare" | "all"
  >;
  readonly batch: (valuesList: T[]) => Promise<Result<D1Result<unknown>[]>>;
  readonly run: () => Promise<Result<D1Result<unknown>>>;
  readonly all: () => Promise<Result<D1Result<unknown>>>;
}

/**
 * NB: This function relies on ordered object entries to bind parameters to db statements.
 * Should it become apparent that support for named parameter bindings is going to take too long, consider Maps.
 * Check support here: https://developers.cloudflare.com/d1/platform/client-api/#parameter-binding.
 */
export function makeD1Database(db: D1Database): DatabaseContainer<any> {
  function of(
    container: DatabaseContainer<any> | {value: undefined; defaultValues: {}},
  ): DatabaseContainer<any> {
    return {
      value: container.value,
      defaultValues: container.defaultValues,
      prepare: <T>({
        query,
        defaultValues,
      }: {
        query: string;
        defaultValues?: T;
      }) => {
        (container as DatabaseContainer<T>).value = db.prepare(query);
        container.defaultValues = defaultValues;
        return of(container);
      },
      bind: (values = {}) => {
        container.value = container.value?.bind(
          ...Object.values({...container.defaultValues, ...values}),
        );
        return of(container);
      },
      batch: async (valuesList) => {
        let error: ErrorCause[] = [];
        try {
          const stmt = container.value;
          if (stmt) {
            const result = await db.batch(
              valuesList.map((values) => {
                return stmt.bind(
                  ...Object.values({...container.defaultValues, ...values}),
                );
              }),
            );
            return {result};
          }
          error.push({
            id_: "api#6",
            key: "stmt",
            value: JSON.stringify(container.value),
            message: "must be a valid prepared statement",
          });
        } catch (err) {
          error.push({
            id_: "api#7",
            message: err instanceof Error ? err.message : "unknown",
          });
        }
        return {error};
      },
      run: async () => {
        let error: ErrorCause[] = [];
        try {
          const result = await container.value?.run();
          return {result};
        } catch (err) {
          error.push({
            id_: "api#8",
            message: err instanceof Error ? err.message : "unknown",
          });
        }
        return {error};
      },
      all: async () => {
        let error: ErrorCause[] = [];
        try {
          const result = await container.value?.all();
          return {result};
        } catch (err) {
          error.push({
            id_: "api#9",
            message: err instanceof Error ? err.message : "unknown",
          });
        }
        return {error};
      },
    };
  }

  return of({
    value: undefined,
    defaultValues: {},
  });
}
