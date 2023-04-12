import {nanoquery} from "@nanostores/query";

type makeFetcherParam = {
  baseUrl: string;
} & RequestInit;

export function makeFetcher({baseUrl, ...init}: makeFetcherParam) {
  return nanoquery({
    fetcher: (...keys: string[]) =>
      fetch([baseUrl, ...keys].join(""), init).then((resp) => resp.json()),
  });
}
