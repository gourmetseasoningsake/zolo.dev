import {makeFetcher} from "./fetcher";

interface User {
  name: string;
}

const [createFetcherStore, _createMutatorStore] = makeFetcher({
  baseUrl: import.meta.env.PUBLIC_API,
});

export const user = createFetcherStore<User>(["/github/user"]);
