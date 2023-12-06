export type T = {
  id: string;
  title: string;
  dueOn?: string | null;
};

export const tableName = "Milestones";

export const createOrUpdateAllStmt: {query: string; defaultValues: T} = {
  query: `
    INSERT INTO ${tableName} (
      id,
      title,
      dueOn
    ) VALUES (?1, ?2, ?3) ON CONFLICT (id) DO UPDATE SET
      title=excluded.title,
      dueOn=excluded.dueOn;
    `,
  defaultValues: {
    id: "",
    title: "",
    dueOn: null,
  },
};
