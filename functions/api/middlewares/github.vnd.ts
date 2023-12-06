import type {OrganizationQuery} from "../types/github.gql";
import {Fetcher} from "../utils";

type MakeFetcherFnParam = {
  baseUrl: string;
  userAgent: string;
  token: string;
};

export type GithubOrganizationResponse = {
  data: OrganizationQuery;
};

export interface GithubFetcher {
  getOrganization: (name: string) => Promise<GithubOrganizationResponse>;
}

export function makeGithubFetcher({
  baseUrl,
  userAgent,
  token,
}: MakeFetcherFnParam): GithubFetcher {
  const fetcher = Fetcher.make({
    baseUrl,
    headers: {
      "User-Agent": userAgent,
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return {
    getOrganization: (name) => {
      const query = `
        query Organization($org: String!) {
          organization(login: $org) {
            repositories(first:30, privacy:PRIVATE) {
              nodes {
                id
                name
                url
                projectsV2(first:10) {
                  nodes {
                    items(first:50) {
                      nodes {
                        id
                        content {
                          ... on Issue {
                            number
                            url
                            state
                          }
                        }
                        fieldValues(first:20) {
                          nodes {
                            ... on ProjectV2ItemFieldDateValue {
                              __typename
                              date
                              field {
                                ... on ProjectV2Field {
                                  name
                                }
                              }
                            }
                            ... on ProjectV2ItemFieldMilestoneValue {
                              __typename
                              milestone {
                                id
                                title
                                dueOn
                              }
                              field {
                                ... on ProjectV2Field {
                                  name
                                }
                              }
                            }
                            ... on ProjectV2ItemFieldTextValue {
                              __typename
                              text
                              field {
                                ... on ProjectV2Field {
                                  name
                                }
                              }
                            }
                            ... on ProjectV2ItemFieldSingleSelectValue {
                              __typename
                              name
                              field {
                                ... on ProjectV2SingleSelectField {
                                  name
                                }
                              }
                            }
                            ... on ProjectV2ItemFieldNumberValue {
                              __typename
                              number
                              field {
                                ... on ProjectV2Field {
                                  name
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                collaborators(first:30) {
                  nodes {
                    login
                    name
                    avatarUrl
                    databaseId
                  }
                }
              }
            }
          }
        }`;

      return fetcher("POST /graphql", {
        body: JSON.stringify({
          query,
          variables: {
            org: name,
          },
        }),
      });
    },
  };
}
