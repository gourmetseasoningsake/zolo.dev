type ParamMakeFn = {
  baseUrl: string;
} & RequestInit;

export type FetcherFn = (
  methodAndPath: string,
  init?: RequestInit,
) => Promise<any>;

export function make({baseUrl, ...baseInit}: ParamMakeFn): FetcherFn {
  return (methodAndPath: string, init?: RequestInit) => {
    const [method, path] = methodAndPath.split(" ");
    return fetch(`${baseUrl}${path}`, {...baseInit, ...init, method}).then(
      (resp) => resp.json(),
    );
  };
}
