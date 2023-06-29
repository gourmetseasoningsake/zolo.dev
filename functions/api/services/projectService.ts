import type {Context} from "hono";
import type {
  Issue as GithubIssue,
  OrganizationQuery as GithubOrganizationQuery,
  ProjectV2 as GithubProjectV2,
  ProjectV2Field as GithubProjectV2Field,
  Repository as GithubRepository,
  User as GithubUser,
} from "../types/github.gql";
import type {ErrorCause, Result} from "../types";
import {Str} from "../utils";
import {Repository, Milestone, ProjectItem} from "../db";
import {Bindings} from "../[[route]]";

type GithubOrganizationResponse = {
  data: GithubOrganizationQuery;
};

export function getAllProjectItems(ctx: Context<Bindings>) {
  return ProjectItem.getAllProjectItems(ctx);
}

export async function createOrUpdateProject(ctx: Context<Bindings>) {
  const organization = await ctx.env.GithubFetcher.getOrganization("zolosake");
  // const result_ = githubRepositoriesAndCollaboratorsFromOrganization(organization);

  // 1. create or update Collaborators
  // ...

  // 2. create or update ProjectItems
  // ->
  const result = projectItemsFromGithubOrganization(organization);
  if (result.result) {
    return ProjectItem.createOrUpdateAllProjectItems(ctx, result.result);
  }
  return result;
}

function githubRepositoriesAndCollaboratorsFromOrganization(
  data: GithubOrganizationResponse,
): Result<[GithubRepository[], GithubUser[]]> {
  let error: ErrorCause[] = [];

  const githubRepositories = data?.data.organization?.repositories
    .nodes as GithubRepository[];
  if (!(githubRepositories && githubRepositories.length)) {
    error.push({
      id_: "api#1",
      key: "repos",
      value: JSON.stringify(githubRepositories),
      message: "must be an array",
    });
  }

  const githubCollaborators = githubRepositories?.reduce<GithubUser[]>(
    (a, githubRepository) => {
      if (githubRepository?.collaborators?.nodes) {
        return [...a, ...githubRepository.collaborators.nodes] as GithubUser[];
      }
      return a;
    },
    [],
  );

  if (!(githubCollaborators && githubCollaborators.length)) {
    error.push({
      id_: "api#2",
      key: "repos",
      value: JSON.stringify(githubCollaborators),
      message: "must be an array",
    });
  }

  if (error.length) {
    return {error};
  }

  return {result: [githubRepositories, githubCollaborators]};
}

function projectItemsFromGithubOrganization(
  data: GithubOrganizationResponse,
): Result<[Repository.T[], Milestone.T[], ProjectItem.T[]]> {
  let error: ErrorCause[] = [];

  const githubRepositories = data?.data.organization?.repositories.nodes;

  if (!githubRepositories) {
    error.push({
      id_: "api#1",
      key: "repos",
      value: JSON.stringify(githubRepositories),
      message: "must be an array",
    });
    return {
      error,
    };
  }

  let repositories: Repository.T[] = [];

  const githubProjectsV2 = githubRepositories.reduce<
    (GithubProjectV2 & {repositoryId: string})[]
  >((a, githubRepository) => {
    if (
      !(githubRepository?.id && githubRepository.name && githubRepository.url)
    ) {
      error.push({
        id_: "api#2",
        key: "repo",
        value: JSON.stringify(githubRepository),
        message: "must have an id, a name and an url",
      });
      return a;
    }

    repositories.push({
      id: githubRepository.id,
      name: githubRepository.name,
      url: githubRepository.url,
    });

    if (!githubRepository?.projectsV2.nodes) {
      error.push({
        id_: "api#3",
        key: "projectV2",
        value: JSON.stringify(githubRepository?.projectsV2.nodes),
        message: "must be an array",
      });
      return a;
    }

    const projects = githubRepository.projectsV2.nodes.reduce<
      (GithubProjectV2 & {repositoryId: string})[]
    >((a, githubProjectV2) => {
      if (githubProjectV2) {
        return [
          ...a,
          {...githubProjectV2, repositoryId: githubRepository.id},
        ] as (GithubProjectV2 & {
          repositoryId: string;
        })[];
      }
      return a;
    }, []);

    return [...a, ...projects];
  }, []);

  if (!githubProjectsV2.length) {
    error.push({
      id_: "api#4",
      key: "projects",
      value: String(githubProjectsV2.length),
      message: "must have at least one project",
    });
    return {
      error,
    };
  }

  let milestones: Milestone.T[] = [];

  const projectItems = githubProjectsV2.reduce<ProjectItem.T[]>(
    (a, githubProjectV2) => {
      if (!githubProjectV2.items.nodes) {
        return a;
      }

      const itemsAsTs = githubProjectV2.items.nodes.reduce<ProjectItem.T[]>(
        (a, githubProjectV2Item) => {
          if (!githubProjectV2Item) {
            return a;
          }

          const issue = githubProjectV2Item.content as GithubIssue;
          const itemAsT =
            githubProjectV2Item.fieldValues.nodes?.reduce<ProjectItem.T>(
              (a, githubProjectV2ItemFieldValue) => {
                switch (githubProjectV2ItemFieldValue?.__typename) {
                  case "ProjectV2ItemFieldTextValue": {
                    const githubProjectV2Field =
                      githubProjectV2ItemFieldValue.field as GithubProjectV2Field;
                    const fieldName = Str.toCamelCase(
                      githubProjectV2Field.name,
                    );
                    return {
                      ...a,
                      [fieldName]: githubProjectV2ItemFieldValue.text,
                    };
                  }
                  case "ProjectV2ItemFieldNumberValue": {
                    const githubProjectV2Field =
                      githubProjectV2ItemFieldValue.field as GithubProjectV2Field;
                    const fieldName = Str.toCamelCase(
                      githubProjectV2Field.name,
                    );
                    return {
                      ...a,
                      [fieldName]: githubProjectV2ItemFieldValue.number,
                    };
                  }
                  case "ProjectV2ItemFieldDateValue": {
                    const githubProjectV2Field =
                      githubProjectV2ItemFieldValue.field as GithubProjectV2Field;
                    const fieldName = Str.toCamelCase(
                      githubProjectV2Field.name,
                    );
                    return {
                      ...a,
                      [fieldName]: githubProjectV2ItemFieldValue.date,
                    };
                  }
                  case "ProjectV2ItemFieldSingleSelectValue": {
                    const githubProjectV2Field =
                      githubProjectV2ItemFieldValue.field as GithubProjectV2Field;
                    const fieldName = Str.toCamelCase(
                      githubProjectV2Field.name,
                    );
                    return {
                      ...a,
                      [fieldName]: githubProjectV2ItemFieldValue.name,
                    };
                  }
                  case "ProjectV2ItemFieldMilestoneValue": {
                    const githubProjectV2Field =
                      githubProjectV2ItemFieldValue.field as GithubProjectV2Field;
                    const fieldName = Str.toCamelCase(
                      githubProjectV2Field.name,
                    );
                    if (githubProjectV2ItemFieldValue.milestone) {
                      milestones.push(githubProjectV2ItemFieldValue.milestone);
                      return {
                        ...a,
                        milestoneId: githubProjectV2ItemFieldValue.milestone.id,
                      };
                    }
                  }
                  default: {
                    return a;
                  }
                }
              },
              {
                id: githubProjectV2Item.id,
                repositoryId: githubProjectV2.repositoryId,
                issue: issue.url,
              } as ProjectItem.T,
            );

          return [...a, itemAsT] as ProjectItem.T[];
        },
        [],
      );

      return [...a, ...itemsAsTs];
    },
    [],
  );

  if (!error.length && Boolean(projectItems?.length)) {
    return {result: [repositories, milestones, projectItems]};
  }

  return {error};
}
