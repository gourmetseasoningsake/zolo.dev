export type ErrorCause = {
  id_: string;
  key?: string;
  value?: string;
  message: string;
};

export type Result<T> = {
  error?: ErrorCause[];
  result?: T;
};
