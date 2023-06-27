export type T = {
  id: string;
  name: string;
  url: string;
};

export const tableName = "Repositories";

export const createOrUpdateAllStmt: {query: string; defaultValues: T} = {
  query: `
    INSERT INTO ${tableName} (
      id,
      name,
      url
    ) VALUES (?1, ?2, ?3) ON CONFLICT (id) DO UPDATE SET
      name=excluded.name,
      url=excluded.url;
    `,
  defaultValues: {
    id: "",
    name: "",
    url: "",
  },
};
