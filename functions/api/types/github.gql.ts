export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Base64String: any;
  BigInt: any;
  Date: any;
  DateTime: any;
  GitObjectID: any;
  GitSSHRemote: any;
  GitTimestamp: any;
  HTML: any;
  PreciseDateTime: any;
  URI: any;
  X509Certificate: any;
};

export type AbortQueuedMigrationsInput = {
  ownerId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type AbortQueuedMigrationsPayload = {
  __typename?: "AbortQueuedMigrationsPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  success?: Maybe<Scalars["Boolean"]>;
};

export type AcceptEnterpriseAdministratorInvitationInput = {
  invitationId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type AcceptEnterpriseAdministratorInvitationPayload = {
  __typename?: "AcceptEnterpriseAdministratorInvitationPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  invitation?: Maybe<EnterpriseAdministratorInvitation>;
  message?: Maybe<Scalars["String"]>;
};

export type AcceptTopicSuggestionInput = {
  repositoryId: Scalars["ID"];
  name: Scalars["String"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type AcceptTopicSuggestionPayload = {
  __typename?: "AcceptTopicSuggestionPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  topic?: Maybe<Topic>;
};

export type Actor = {
  avatarUrl: Scalars["URI"];
  login: Scalars["String"];
  resourcePath: Scalars["URI"];
  url: Scalars["URI"];
};

export type ActorAvatarUrlArgs = {
  size?: InputMaybe<Scalars["Int"]>;
};

export type ActorLocation = {
  __typename?: "ActorLocation";
  city?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  countryCode?: Maybe<Scalars["String"]>;
  region?: Maybe<Scalars["String"]>;
  regionCode?: Maybe<Scalars["String"]>;
};

export enum ActorType {
  User = "USER",
  Team = "TEAM",
}

export type AddAssigneesToAssignableInput = {
  assignableId: Scalars["ID"];
  assigneeIds: Array<Scalars["ID"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type AddAssigneesToAssignablePayload = {
  __typename?: "AddAssigneesToAssignablePayload";
  assignable?: Maybe<Assignable>;
  clientMutationId?: Maybe<Scalars["String"]>;
};

export type AddCommentInput = {
  subjectId: Scalars["ID"];
  body: Scalars["String"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type AddCommentPayload = {
  __typename?: "AddCommentPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  commentEdge?: Maybe<IssueCommentEdge>;
  subject?: Maybe<Node>;
  timelineEdge?: Maybe<IssueTimelineItemEdge>;
};

export type AddDiscussionCommentInput = {
  discussionId: Scalars["ID"];
  replyToId?: InputMaybe<Scalars["ID"]>;
  body: Scalars["String"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type AddDiscussionCommentPayload = {
  __typename?: "AddDiscussionCommentPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  comment?: Maybe<DiscussionComment>;
};

export type AddDiscussionPollVoteInput = {
  pollOptionId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type AddDiscussionPollVotePayload = {
  __typename?: "AddDiscussionPollVotePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  pollOption?: Maybe<DiscussionPollOption>;
};

export type AddEnterpriseOrganizationMemberInput = {
  enterpriseId: Scalars["ID"];
  organizationId: Scalars["ID"];
  userIds: Array<Scalars["ID"]>;
  role?: InputMaybe<OrganizationMemberRole>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type AddEnterpriseOrganizationMemberPayload = {
  __typename?: "AddEnterpriseOrganizationMemberPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  users?: Maybe<Array<User>>;
};

export type AddEnterpriseSupportEntitlementInput = {
  enterpriseId: Scalars["ID"];
  login: Scalars["String"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type AddEnterpriseSupportEntitlementPayload = {
  __typename?: "AddEnterpriseSupportEntitlementPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  message?: Maybe<Scalars["String"]>;
};

export type AddLabelsToLabelableInput = {
  labelableId: Scalars["ID"];
  labelIds: Array<Scalars["ID"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type AddLabelsToLabelablePayload = {
  __typename?: "AddLabelsToLabelablePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  labelable?: Maybe<Labelable>;
};

export type AddProjectCardInput = {
  projectColumnId: Scalars["ID"];
  contentId?: InputMaybe<Scalars["ID"]>;
  note?: InputMaybe<Scalars["String"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type AddProjectCardPayload = {
  __typename?: "AddProjectCardPayload";
  cardEdge?: Maybe<ProjectCardEdge>;
  clientMutationId?: Maybe<Scalars["String"]>;
  projectColumn?: Maybe<ProjectColumn>;
};

export type AddProjectColumnInput = {
  projectId: Scalars["ID"];
  name: Scalars["String"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type AddProjectColumnPayload = {
  __typename?: "AddProjectColumnPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  columnEdge?: Maybe<ProjectColumnEdge>;
  project?: Maybe<Project>;
};

export type AddProjectV2DraftIssueInput = {
  projectId: Scalars["ID"];
  title: Scalars["String"];
  body?: InputMaybe<Scalars["String"]>;
  assigneeIds?: InputMaybe<Array<Scalars["ID"]>>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type AddProjectV2DraftIssuePayload = {
  __typename?: "AddProjectV2DraftIssuePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  projectItem?: Maybe<ProjectV2Item>;
};

export type AddProjectV2ItemByIdInput = {
  projectId: Scalars["ID"];
  contentId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type AddProjectV2ItemByIdPayload = {
  __typename?: "AddProjectV2ItemByIdPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  item?: Maybe<ProjectV2Item>;
};

export type AddPullRequestReviewCommentInput = {
  pullRequestId?: InputMaybe<Scalars["ID"]>;
  pullRequestReviewId?: InputMaybe<Scalars["ID"]>;
  commitOID?: InputMaybe<Scalars["GitObjectID"]>;
  body?: InputMaybe<Scalars["String"]>;
  path?: InputMaybe<Scalars["String"]>;
  position?: InputMaybe<Scalars["Int"]>;
  inReplyTo?: InputMaybe<Scalars["ID"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type AddPullRequestReviewCommentPayload = {
  __typename?: "AddPullRequestReviewCommentPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  comment?: Maybe<PullRequestReviewComment>;
  commentEdge?: Maybe<PullRequestReviewCommentEdge>;
};

export type AddPullRequestReviewInput = {
  pullRequestId: Scalars["ID"];
  commitOID?: InputMaybe<Scalars["GitObjectID"]>;
  body?: InputMaybe<Scalars["String"]>;
  event?: InputMaybe<PullRequestReviewEvent>;
  comments?: InputMaybe<Array<InputMaybe<DraftPullRequestReviewComment>>>;
  threads?: InputMaybe<Array<InputMaybe<DraftPullRequestReviewThread>>>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type AddPullRequestReviewPayload = {
  __typename?: "AddPullRequestReviewPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  pullRequestReview?: Maybe<PullRequestReview>;
  reviewEdge?: Maybe<PullRequestReviewEdge>;
};

export type AddPullRequestReviewThreadInput = {
  path: Scalars["String"];
  body: Scalars["String"];
  pullRequestId?: InputMaybe<Scalars["ID"]>;
  pullRequestReviewId?: InputMaybe<Scalars["ID"]>;
  line?: InputMaybe<Scalars["Int"]>;
  side?: InputMaybe<DiffSide>;
  startLine?: InputMaybe<Scalars["Int"]>;
  startSide?: InputMaybe<DiffSide>;
  subjectType?: InputMaybe<PullRequestReviewThreadSubjectType>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type AddPullRequestReviewThreadPayload = {
  __typename?: "AddPullRequestReviewThreadPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  thread?: Maybe<PullRequestReviewThread>;
};

export type AddReactionInput = {
  subjectId: Scalars["ID"];
  content: ReactionContent;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type AddReactionPayload = {
  __typename?: "AddReactionPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  reaction?: Maybe<Reaction>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  subject?: Maybe<Reactable>;
};

export type AddStarInput = {
  starrableId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type AddStarPayload = {
  __typename?: "AddStarPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  starrable?: Maybe<Starrable>;
};

export type AddUpvoteInput = {
  subjectId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type AddUpvotePayload = {
  __typename?: "AddUpvotePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  subject?: Maybe<Votable>;
};

export type AddVerifiableDomainInput = {
  ownerId: Scalars["ID"];
  domain: Scalars["URI"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type AddVerifiableDomainPayload = {
  __typename?: "AddVerifiableDomainPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  domain?: Maybe<VerifiableDomain>;
};

export type AddedToMergeQueueEvent = Node & {
  __typename?: "AddedToMergeQueueEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  enqueuer?: Maybe<User>;
  id: Scalars["ID"];
  mergeQueue?: Maybe<MergeQueue>;
  pullRequest?: Maybe<PullRequest>;
};

export type AddedToProjectEvent = Node & {
  __typename?: "AddedToProjectEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

export type AnnouncementBanner = {
  announcement?: Maybe<Scalars["String"]>;
  announcementExpiresAt?: Maybe<Scalars["DateTime"]>;
  announcementUserDismissible?: Maybe<Scalars["Boolean"]>;
};

export type App = Node & {
  __typename?: "App";
  createdAt: Scalars["DateTime"];
  databaseId?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  ipAllowListEntries: IpAllowListEntryConnection;
  logoBackgroundColor: Scalars["String"];
  logoUrl: Scalars["URI"];
  name: Scalars["String"];
  slug: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  url: Scalars["URI"];
};

export type AppIpAllowListEntriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<IpAllowListEntryOrder>;
};

export type AppLogoUrlArgs = {
  size?: InputMaybe<Scalars["Int"]>;
};

export type ApproveDeploymentsInput = {
  workflowRunId: Scalars["ID"];
  environmentIds: Array<Scalars["ID"]>;
  comment?: InputMaybe<Scalars["String"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type ApproveDeploymentsPayload = {
  __typename?: "ApproveDeploymentsPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  deployments?: Maybe<Array<Deployment>>;
};

export type ApproveVerifiableDomainInput = {
  id: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type ApproveVerifiableDomainPayload = {
  __typename?: "ApproveVerifiableDomainPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  domain?: Maybe<VerifiableDomain>;
};

export type ArchiveProjectV2ItemInput = {
  projectId: Scalars["ID"];
  itemId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type ArchiveProjectV2ItemPayload = {
  __typename?: "ArchiveProjectV2ItemPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  item?: Maybe<ProjectV2Item>;
};

export type ArchiveRepositoryInput = {
  repositoryId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type ArchiveRepositoryPayload = {
  __typename?: "ArchiveRepositoryPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  repository?: Maybe<Repository>;
};

export type Assignable = {
  assignees: UserConnection;
};

export type AssignableAssigneesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type AssignedEvent = Node & {
  __typename?: "AssignedEvent";
  actor?: Maybe<Actor>;
  assignable: Assignable;
  assignee?: Maybe<Assignee>;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  /** @deprecated Assignees can now be mannequins. Use the `assignee` field instead. Removal on 2020-01-01 UTC. */
  user?: Maybe<User>;
};

export type Assignee = Bot | Mannequin | Organization | User;

export type AuditEntry = {
  action: Scalars["String"];
  actor?: Maybe<AuditEntryActor>;
  actorIp?: Maybe<Scalars["String"]>;
  actorLocation?: Maybe<ActorLocation>;
  actorLogin?: Maybe<Scalars["String"]>;
  actorResourcePath?: Maybe<Scalars["URI"]>;
  actorUrl?: Maybe<Scalars["URI"]>;
  createdAt: Scalars["PreciseDateTime"];
  operationType?: Maybe<OperationType>;
  user?: Maybe<User>;
  userLogin?: Maybe<Scalars["String"]>;
  userResourcePath?: Maybe<Scalars["URI"]>;
  userUrl?: Maybe<Scalars["URI"]>;
};

export type AuditEntryActor = Bot | Organization | User;

export type AuditLogOrder = {
  field?: InputMaybe<AuditLogOrderField>;
  direction?: InputMaybe<OrderDirection>;
};

export enum AuditLogOrderField {
  CreatedAt = "CREATED_AT",
}

export type AutoMergeDisabledEvent = Node & {
  __typename?: "AutoMergeDisabledEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  disabler?: Maybe<User>;
  id: Scalars["ID"];
  pullRequest?: Maybe<PullRequest>;
  reason?: Maybe<Scalars["String"]>;
  reasonCode?: Maybe<Scalars["String"]>;
};

export type AutoMergeEnabledEvent = Node & {
  __typename?: "AutoMergeEnabledEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  enabler?: Maybe<User>;
  id: Scalars["ID"];
  pullRequest?: Maybe<PullRequest>;
};

export type AutoMergeRequest = {
  __typename?: "AutoMergeRequest";
  authorEmail?: Maybe<Scalars["String"]>;
  commitBody?: Maybe<Scalars["String"]>;
  commitHeadline?: Maybe<Scalars["String"]>;
  enabledAt?: Maybe<Scalars["DateTime"]>;
  enabledBy?: Maybe<Actor>;
  mergeMethod: PullRequestMergeMethod;
  pullRequest: PullRequest;
};

export type AutoRebaseEnabledEvent = Node & {
  __typename?: "AutoRebaseEnabledEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  enabler?: Maybe<User>;
  id: Scalars["ID"];
  pullRequest?: Maybe<PullRequest>;
};

export type AutoSquashEnabledEvent = Node & {
  __typename?: "AutoSquashEnabledEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  enabler?: Maybe<User>;
  id: Scalars["ID"];
  pullRequest?: Maybe<PullRequest>;
};

export type AutomaticBaseChangeFailedEvent = Node & {
  __typename?: "AutomaticBaseChangeFailedEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  newBase: Scalars["String"];
  oldBase: Scalars["String"];
  pullRequest: PullRequest;
};

export type AutomaticBaseChangeSucceededEvent = Node & {
  __typename?: "AutomaticBaseChangeSucceededEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  newBase: Scalars["String"];
  oldBase: Scalars["String"];
  pullRequest: PullRequest;
};

export type BaseRefChangedEvent = Node & {
  __typename?: "BaseRefChangedEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  currentRefName: Scalars["String"];
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  previousRefName: Scalars["String"];
  pullRequest: PullRequest;
};

export type BaseRefDeletedEvent = Node & {
  __typename?: "BaseRefDeletedEvent";
  actor?: Maybe<Actor>;
  baseRefName?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  pullRequest?: Maybe<PullRequest>;
};

export type BaseRefForcePushedEvent = Node & {
  __typename?: "BaseRefForcePushedEvent";
  actor?: Maybe<Actor>;
  afterCommit?: Maybe<Commit>;
  beforeCommit?: Maybe<Commit>;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  pullRequest: PullRequest;
  ref?: Maybe<Ref>;
};

export type Blame = {
  __typename?: "Blame";
  ranges: Array<BlameRange>;
};

export type BlameRange = {
  __typename?: "BlameRange";
  age: Scalars["Int"];
  commit: Commit;
  endingLine: Scalars["Int"];
  startingLine: Scalars["Int"];
};

export type Blob = GitObject &
  Node & {
    __typename?: "Blob";
    abbreviatedOid: Scalars["String"];
    byteSize: Scalars["Int"];
    commitResourcePath: Scalars["URI"];
    commitUrl: Scalars["URI"];
    id: Scalars["ID"];
    isBinary?: Maybe<Scalars["Boolean"]>;
    isTruncated: Scalars["Boolean"];
    oid: Scalars["GitObjectID"];
    repository: Repository;
    text?: Maybe<Scalars["String"]>;
  };

export type Bot = Node &
  Actor &
  UniformResourceLocatable & {
    __typename?: "Bot";
    avatarUrl: Scalars["URI"];
    createdAt: Scalars["DateTime"];
    databaseId?: Maybe<Scalars["Int"]>;
    id: Scalars["ID"];
    login: Scalars["String"];
    resourcePath: Scalars["URI"];
    updatedAt: Scalars["DateTime"];
    url: Scalars["URI"];
  };

export type BotAvatarUrlArgs = {
  size?: InputMaybe<Scalars["Int"]>;
};

export type BranchActorAllowanceActor = App | Team | User;

export type BranchProtectionRule = Node & {
  __typename?: "BranchProtectionRule";
  allowsDeletions: Scalars["Boolean"];
  allowsForcePushes: Scalars["Boolean"];
  blocksCreations: Scalars["Boolean"];
  branchProtectionRuleConflicts: BranchProtectionRuleConflictConnection;
  bypassForcePushAllowances: BypassForcePushAllowanceConnection;
  bypassPullRequestAllowances: BypassPullRequestAllowanceConnection;
  creator?: Maybe<Actor>;
  databaseId?: Maybe<Scalars["Int"]>;
  dismissesStaleReviews: Scalars["Boolean"];
  id: Scalars["ID"];
  isAdminEnforced: Scalars["Boolean"];
  lockAllowsFetchAndMerge: Scalars["Boolean"];
  lockBranch: Scalars["Boolean"];
  matchingRefs: RefConnection;
  pattern: Scalars["String"];
  pushAllowances: PushAllowanceConnection;
  repository?: Maybe<Repository>;
  requireLastPushApproval: Scalars["Boolean"];
  requiredApprovingReviewCount?: Maybe<Scalars["Int"]>;
  requiredDeploymentEnvironments?: Maybe<Array<Maybe<Scalars["String"]>>>;
  requiredStatusCheckContexts?: Maybe<Array<Maybe<Scalars["String"]>>>;
  requiredStatusChecks?: Maybe<Array<RequiredStatusCheckDescription>>;
  requiresApprovingReviews: Scalars["Boolean"];
  requiresCodeOwnerReviews: Scalars["Boolean"];
  requiresCommitSignatures: Scalars["Boolean"];
  requiresConversationResolution: Scalars["Boolean"];
  requiresDeployments: Scalars["Boolean"];
  requiresLinearHistory: Scalars["Boolean"];
  requiresStatusChecks: Scalars["Boolean"];
  requiresStrictStatusChecks: Scalars["Boolean"];
  restrictsPushes: Scalars["Boolean"];
  restrictsReviewDismissals: Scalars["Boolean"];
  reviewDismissalAllowances: ReviewDismissalAllowanceConnection;
};

export type BranchProtectionRuleBranchProtectionRuleConflictsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type BranchProtectionRuleBypassForcePushAllowancesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type BranchProtectionRuleBypassPullRequestAllowancesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type BranchProtectionRuleMatchingRefsArgs = {
  query?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type BranchProtectionRulePushAllowancesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type BranchProtectionRuleReviewDismissalAllowancesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type BranchProtectionRuleConflict = {
  __typename?: "BranchProtectionRuleConflict";
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  conflictingBranchProtectionRule?: Maybe<BranchProtectionRule>;
  ref?: Maybe<Ref>;
};

export type BranchProtectionRuleConflictConnection = {
  __typename?: "BranchProtectionRuleConflictConnection";
  edges?: Maybe<Array<Maybe<BranchProtectionRuleConflictEdge>>>;
  nodes?: Maybe<Array<Maybe<BranchProtectionRuleConflict>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type BranchProtectionRuleConflictEdge = {
  __typename?: "BranchProtectionRuleConflictEdge";
  cursor: Scalars["String"];
  node?: Maybe<BranchProtectionRuleConflict>;
};

export type BranchProtectionRuleConnection = {
  __typename?: "BranchProtectionRuleConnection";
  edges?: Maybe<Array<Maybe<BranchProtectionRuleEdge>>>;
  nodes?: Maybe<Array<Maybe<BranchProtectionRule>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type BranchProtectionRuleEdge = {
  __typename?: "BranchProtectionRuleEdge";
  cursor: Scalars["String"];
  node?: Maybe<BranchProtectionRule>;
};

export type BulkSponsorship = {
  sponsorableId?: InputMaybe<Scalars["ID"]>;
  sponsorableLogin?: InputMaybe<Scalars["String"]>;
  amount: Scalars["Int"];
};

export type BypassForcePushAllowance = Node & {
  __typename?: "BypassForcePushAllowance";
  actor?: Maybe<BranchActorAllowanceActor>;
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  id: Scalars["ID"];
};

export type BypassForcePushAllowanceConnection = {
  __typename?: "BypassForcePushAllowanceConnection";
  edges?: Maybe<Array<Maybe<BypassForcePushAllowanceEdge>>>;
  nodes?: Maybe<Array<Maybe<BypassForcePushAllowance>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type BypassForcePushAllowanceEdge = {
  __typename?: "BypassForcePushAllowanceEdge";
  cursor: Scalars["String"];
  node?: Maybe<BypassForcePushAllowance>;
};

export type BypassPullRequestAllowance = Node & {
  __typename?: "BypassPullRequestAllowance";
  actor?: Maybe<BranchActorAllowanceActor>;
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  id: Scalars["ID"];
};

export type BypassPullRequestAllowanceConnection = {
  __typename?: "BypassPullRequestAllowanceConnection";
  edges?: Maybe<Array<Maybe<BypassPullRequestAllowanceEdge>>>;
  nodes?: Maybe<Array<Maybe<BypassPullRequestAllowance>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type BypassPullRequestAllowanceEdge = {
  __typename?: "BypassPullRequestAllowanceEdge";
  cursor: Scalars["String"];
  node?: Maybe<BypassPullRequestAllowance>;
};

export type Cvss = {
  __typename?: "CVSS";
  score: Scalars["Float"];
  vectorString?: Maybe<Scalars["String"]>;
};

export type Cwe = Node & {
  __typename?: "CWE";
  cweId: Scalars["String"];
  description: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type CweConnection = {
  __typename?: "CWEConnection";
  edges?: Maybe<Array<Maybe<CweEdge>>>;
  nodes?: Maybe<Array<Maybe<Cwe>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type CweEdge = {
  __typename?: "CWEEdge";
  cursor: Scalars["String"];
  node?: Maybe<Cwe>;
};

export type CancelEnterpriseAdminInvitationInput = {
  invitationId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CancelEnterpriseAdminInvitationPayload = {
  __typename?: "CancelEnterpriseAdminInvitationPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  invitation?: Maybe<EnterpriseAdministratorInvitation>;
  message?: Maybe<Scalars["String"]>;
};

export type CancelSponsorshipInput = {
  sponsorId?: InputMaybe<Scalars["ID"]>;
  sponsorLogin?: InputMaybe<Scalars["String"]>;
  sponsorableId?: InputMaybe<Scalars["ID"]>;
  sponsorableLogin?: InputMaybe<Scalars["String"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CancelSponsorshipPayload = {
  __typename?: "CancelSponsorshipPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  sponsorsTier?: Maybe<SponsorsTier>;
};

export type ChangeUserStatusInput = {
  emoji?: InputMaybe<Scalars["String"]>;
  message?: InputMaybe<Scalars["String"]>;
  organizationId?: InputMaybe<Scalars["ID"]>;
  limitedAvailability?: InputMaybe<Scalars["Boolean"]>;
  expiresAt?: InputMaybe<Scalars["DateTime"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type ChangeUserStatusPayload = {
  __typename?: "ChangeUserStatusPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  status?: Maybe<UserStatus>;
};

export type CheckAnnotation = {
  __typename?: "CheckAnnotation";
  annotationLevel?: Maybe<CheckAnnotationLevel>;
  blobUrl: Scalars["URI"];
  databaseId?: Maybe<Scalars["Int"]>;
  location: CheckAnnotationSpan;
  message: Scalars["String"];
  path: Scalars["String"];
  rawDetails?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type CheckAnnotationConnection = {
  __typename?: "CheckAnnotationConnection";
  edges?: Maybe<Array<Maybe<CheckAnnotationEdge>>>;
  nodes?: Maybe<Array<Maybe<CheckAnnotation>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type CheckAnnotationData = {
  path: Scalars["String"];
  location: CheckAnnotationRange;
  annotationLevel: CheckAnnotationLevel;
  message: Scalars["String"];
  title?: InputMaybe<Scalars["String"]>;
  rawDetails?: InputMaybe<Scalars["String"]>;
};

export type CheckAnnotationEdge = {
  __typename?: "CheckAnnotationEdge";
  cursor: Scalars["String"];
  node?: Maybe<CheckAnnotation>;
};

export enum CheckAnnotationLevel {
  Failure = "FAILURE",
  Notice = "NOTICE",
  Warning = "WARNING",
}

export type CheckAnnotationPosition = {
  __typename?: "CheckAnnotationPosition";
  column?: Maybe<Scalars["Int"]>;
  line: Scalars["Int"];
};

export type CheckAnnotationRange = {
  startLine: Scalars["Int"];
  startColumn?: InputMaybe<Scalars["Int"]>;
  endLine: Scalars["Int"];
  endColumn?: InputMaybe<Scalars["Int"]>;
};

export type CheckAnnotationSpan = {
  __typename?: "CheckAnnotationSpan";
  end: CheckAnnotationPosition;
  start: CheckAnnotationPosition;
};

export enum CheckConclusionState {
  ActionRequired = "ACTION_REQUIRED",
  TimedOut = "TIMED_OUT",
  Cancelled = "CANCELLED",
  Failure = "FAILURE",
  Success = "SUCCESS",
  Neutral = "NEUTRAL",
  Skipped = "SKIPPED",
  StartupFailure = "STARTUP_FAILURE",
  Stale = "STALE",
}

export type CheckRun = Node &
  UniformResourceLocatable &
  RequirableByPullRequest & {
    __typename?: "CheckRun";
    annotations?: Maybe<CheckAnnotationConnection>;
    checkSuite: CheckSuite;
    completedAt?: Maybe<Scalars["DateTime"]>;
    conclusion?: Maybe<CheckConclusionState>;
    databaseId?: Maybe<Scalars["Int"]>;
    deployment?: Maybe<Deployment>;
    detailsUrl?: Maybe<Scalars["URI"]>;
    externalId?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    isRequired: Scalars["Boolean"];
    name: Scalars["String"];
    pendingDeploymentRequest?: Maybe<DeploymentRequest>;
    permalink: Scalars["URI"];
    repository: Repository;
    resourcePath: Scalars["URI"];
    startedAt?: Maybe<Scalars["DateTime"]>;
    status: CheckStatusState;
    steps?: Maybe<CheckStepConnection>;
    summary?: Maybe<Scalars["String"]>;
    text?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    url: Scalars["URI"];
  };

export type CheckRunAnnotationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type CheckRunIsRequiredArgs = {
  pullRequestId?: InputMaybe<Scalars["ID"]>;
  pullRequestNumber?: InputMaybe<Scalars["Int"]>;
};

export type CheckRunStepsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  number?: InputMaybe<Scalars["Int"]>;
};

export type CheckRunAction = {
  label: Scalars["String"];
  description: Scalars["String"];
  identifier: Scalars["String"];
};

export type CheckRunConnection = {
  __typename?: "CheckRunConnection";
  edges?: Maybe<Array<Maybe<CheckRunEdge>>>;
  nodes?: Maybe<Array<Maybe<CheckRun>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type CheckRunEdge = {
  __typename?: "CheckRunEdge";
  cursor: Scalars["String"];
  node?: Maybe<CheckRun>;
};

export type CheckRunFilter = {
  checkType?: InputMaybe<CheckRunType>;
  appId?: InputMaybe<Scalars["Int"]>;
  checkName?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<CheckStatusState>;
  statuses?: InputMaybe<Array<CheckStatusState>>;
  conclusions?: InputMaybe<Array<CheckConclusionState>>;
};

export type CheckRunOutput = {
  title: Scalars["String"];
  summary: Scalars["String"];
  text?: InputMaybe<Scalars["String"]>;
  annotations?: InputMaybe<Array<CheckAnnotationData>>;
  images?: InputMaybe<Array<CheckRunOutputImage>>;
};

export type CheckRunOutputImage = {
  alt: Scalars["String"];
  imageUrl: Scalars["URI"];
  caption?: InputMaybe<Scalars["String"]>;
};

export enum CheckRunState {
  ActionRequired = "ACTION_REQUIRED",
  Cancelled = "CANCELLED",
  Completed = "COMPLETED",
  Failure = "FAILURE",
  InProgress = "IN_PROGRESS",
  Neutral = "NEUTRAL",
  Pending = "PENDING",
  Queued = "QUEUED",
  Skipped = "SKIPPED",
  Stale = "STALE",
  StartupFailure = "STARTUP_FAILURE",
  Success = "SUCCESS",
  TimedOut = "TIMED_OUT",
  Waiting = "WAITING",
}

export type CheckRunStateCount = {
  __typename?: "CheckRunStateCount";
  count: Scalars["Int"];
  state: CheckRunState;
};

export enum CheckRunType {
  All = "ALL",
  Latest = "LATEST",
}

export enum CheckStatusState {
  Queued = "QUEUED",
  InProgress = "IN_PROGRESS",
  Completed = "COMPLETED",
  Waiting = "WAITING",
  Pending = "PENDING",
  Requested = "REQUESTED",
}

export type CheckStep = {
  __typename?: "CheckStep";
  completedAt?: Maybe<Scalars["DateTime"]>;
  conclusion?: Maybe<CheckConclusionState>;
  externalId?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  number: Scalars["Int"];
  secondsToCompletion?: Maybe<Scalars["Int"]>;
  startedAt?: Maybe<Scalars["DateTime"]>;
  status: CheckStatusState;
};

export type CheckStepConnection = {
  __typename?: "CheckStepConnection";
  edges?: Maybe<Array<Maybe<CheckStepEdge>>>;
  nodes?: Maybe<Array<Maybe<CheckStep>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type CheckStepEdge = {
  __typename?: "CheckStepEdge";
  cursor: Scalars["String"];
  node?: Maybe<CheckStep>;
};

export type CheckSuite = Node & {
  __typename?: "CheckSuite";
  app?: Maybe<App>;
  branch?: Maybe<Ref>;
  checkRuns?: Maybe<CheckRunConnection>;
  commit: Commit;
  conclusion?: Maybe<CheckConclusionState>;
  createdAt: Scalars["DateTime"];
  creator?: Maybe<User>;
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  matchingPullRequests?: Maybe<PullRequestConnection>;
  push?: Maybe<Push>;
  repository: Repository;
  resourcePath: Scalars["URI"];
  status: CheckStatusState;
  updatedAt: Scalars["DateTime"];
  url: Scalars["URI"];
  workflowRun?: Maybe<WorkflowRun>;
};

export type CheckSuiteCheckRunsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  filterBy?: InputMaybe<CheckRunFilter>;
};

export type CheckSuiteMatchingPullRequestsArgs = {
  states?: InputMaybe<Array<PullRequestState>>;
  labels?: InputMaybe<Array<Scalars["String"]>>;
  headRefName?: InputMaybe<Scalars["String"]>;
  baseRefName?: InputMaybe<Scalars["String"]>;
  orderBy?: InputMaybe<IssueOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type CheckSuiteAutoTriggerPreference = {
  appId: Scalars["ID"];
  setting: Scalars["Boolean"];
};

export type CheckSuiteConnection = {
  __typename?: "CheckSuiteConnection";
  edges?: Maybe<Array<Maybe<CheckSuiteEdge>>>;
  nodes?: Maybe<Array<Maybe<CheckSuite>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type CheckSuiteEdge = {
  __typename?: "CheckSuiteEdge";
  cursor: Scalars["String"];
  node?: Maybe<CheckSuite>;
};

export type CheckSuiteFilter = {
  appId?: InputMaybe<Scalars["Int"]>;
  checkName?: InputMaybe<Scalars["String"]>;
};

export type Claimable = Mannequin | User;

export type ClearLabelsFromLabelableInput = {
  labelableId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type ClearLabelsFromLabelablePayload = {
  __typename?: "ClearLabelsFromLabelablePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  labelable?: Maybe<Labelable>;
};

export type ClearProjectV2ItemFieldValueInput = {
  projectId: Scalars["ID"];
  itemId: Scalars["ID"];
  fieldId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type ClearProjectV2ItemFieldValuePayload = {
  __typename?: "ClearProjectV2ItemFieldValuePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  projectV2Item?: Maybe<ProjectV2Item>;
};

export type CloneProjectInput = {
  targetOwnerId: Scalars["ID"];
  sourceId: Scalars["ID"];
  includeWorkflows: Scalars["Boolean"];
  name: Scalars["String"];
  body?: InputMaybe<Scalars["String"]>;
  public?: InputMaybe<Scalars["Boolean"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CloneProjectPayload = {
  __typename?: "CloneProjectPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  jobStatusId?: Maybe<Scalars["String"]>;
  project?: Maybe<Project>;
};

export type CloneTemplateRepositoryInput = {
  repositoryId: Scalars["ID"];
  name: Scalars["String"];
  ownerId: Scalars["ID"];
  description?: InputMaybe<Scalars["String"]>;
  visibility: RepositoryVisibility;
  includeAllBranches?: InputMaybe<Scalars["Boolean"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CloneTemplateRepositoryPayload = {
  __typename?: "CloneTemplateRepositoryPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  repository?: Maybe<Repository>;
};

export type Closable = {
  closed: Scalars["Boolean"];
  closedAt?: Maybe<Scalars["DateTime"]>;
  viewerCanClose: Scalars["Boolean"];
  viewerCanReopen: Scalars["Boolean"];
};

export type CloseDiscussionInput = {
  discussionId: Scalars["ID"];
  reason?: InputMaybe<DiscussionCloseReason>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CloseDiscussionPayload = {
  __typename?: "CloseDiscussionPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  discussion?: Maybe<Discussion>;
};

export type CloseIssueInput = {
  issueId: Scalars["ID"];
  stateReason?: InputMaybe<IssueClosedStateReason>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CloseIssuePayload = {
  __typename?: "CloseIssuePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  issue?: Maybe<Issue>;
};

export type ClosePullRequestInput = {
  pullRequestId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type ClosePullRequestPayload = {
  __typename?: "ClosePullRequestPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  pullRequest?: Maybe<PullRequest>;
};

export type ClosedEvent = Node &
  UniformResourceLocatable & {
    __typename?: "ClosedEvent";
    actor?: Maybe<Actor>;
    closable: Closable;
    closer?: Maybe<Closer>;
    createdAt: Scalars["DateTime"];
    id: Scalars["ID"];
    resourcePath: Scalars["URI"];
    stateReason?: Maybe<IssueStateReason>;
    url: Scalars["URI"];
  };

export type Closer = Commit | PullRequest;

export type CodeOfConduct = Node & {
  __typename?: "CodeOfConduct";
  body?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  key: Scalars["String"];
  name: Scalars["String"];
  resourcePath?: Maybe<Scalars["URI"]>;
  url?: Maybe<Scalars["URI"]>;
};

export enum CollaboratorAffiliation {
  Outside = "OUTSIDE",
  Direct = "DIRECT",
  All = "ALL",
}

export type Comment = {
  author?: Maybe<Actor>;
  authorAssociation: CommentAuthorAssociation;
  body: Scalars["String"];
  bodyHTML: Scalars["HTML"];
  bodyText: Scalars["String"];
  createdAt: Scalars["DateTime"];
  createdViaEmail: Scalars["Boolean"];
  editor?: Maybe<Actor>;
  id: Scalars["ID"];
  includesCreatedEdit: Scalars["Boolean"];
  lastEditedAt?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt: Scalars["DateTime"];
  userContentEdits?: Maybe<UserContentEditConnection>;
  viewerDidAuthor: Scalars["Boolean"];
};

export type CommentUserContentEditsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export enum CommentAuthorAssociation {
  Member = "MEMBER",
  Owner = "OWNER",
  Mannequin = "MANNEQUIN",
  Collaborator = "COLLABORATOR",
  Contributor = "CONTRIBUTOR",
  FirstTimeContributor = "FIRST_TIME_CONTRIBUTOR",
  FirstTimer = "FIRST_TIMER",
  None = "NONE",
}

export enum CommentCannotUpdateReason {
  Archived = "ARCHIVED",
  InsufficientAccess = "INSUFFICIENT_ACCESS",
  Locked = "LOCKED",
  LoginRequired = "LOGIN_REQUIRED",
  Maintenance = "MAINTENANCE",
  VerifiedEmailRequired = "VERIFIED_EMAIL_REQUIRED",
  Denied = "DENIED",
}

export type CommentDeletedEvent = Node & {
  __typename?: "CommentDeletedEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  databaseId?: Maybe<Scalars["Int"]>;
  deletedCommentAuthor?: Maybe<Actor>;
  id: Scalars["ID"];
};

export type Commit = Node &
  GitObject &
  Subscribable &
  UniformResourceLocatable & {
    __typename?: "Commit";
    abbreviatedOid: Scalars["String"];
    additions: Scalars["Int"];
    associatedPullRequests?: Maybe<PullRequestConnection>;
    author?: Maybe<GitActor>;
    authoredByCommitter: Scalars["Boolean"];
    authoredDate: Scalars["DateTime"];
    authors: GitActorConnection;
    blame: Blame;
    /** @deprecated `changedFiles` will be removed. Use `changedFilesIfAvailable` instead. Removal on 2023-01-01 UTC. */
    changedFiles: Scalars["Int"];
    changedFilesIfAvailable?: Maybe<Scalars["Int"]>;
    checkSuites?: Maybe<CheckSuiteConnection>;
    comments: CommitCommentConnection;
    commitResourcePath: Scalars["URI"];
    commitUrl: Scalars["URI"];
    committedDate: Scalars["DateTime"];
    committedViaWeb: Scalars["Boolean"];
    committer?: Maybe<GitActor>;
    deletions: Scalars["Int"];
    deployments?: Maybe<DeploymentConnection>;
    file?: Maybe<TreeEntry>;
    history: CommitHistoryConnection;
    id: Scalars["ID"];
    message: Scalars["String"];
    messageBody: Scalars["String"];
    messageBodyHTML: Scalars["HTML"];
    messageHeadline: Scalars["String"];
    messageHeadlineHTML: Scalars["HTML"];
    oid: Scalars["GitObjectID"];
    onBehalfOf?: Maybe<Organization>;
    parents: CommitConnection;
    /** @deprecated `pushedDate` is no longer supported. Removal on 2023-07-01 UTC. */
    pushedDate?: Maybe<Scalars["DateTime"]>;
    repository: Repository;
    resourcePath: Scalars["URI"];
    signature?: Maybe<GitSignature>;
    status?: Maybe<Status>;
    statusCheckRollup?: Maybe<StatusCheckRollup>;
    submodules: SubmoduleConnection;
    tarballUrl: Scalars["URI"];
    tree: Tree;
    treeResourcePath: Scalars["URI"];
    treeUrl: Scalars["URI"];
    url: Scalars["URI"];
    viewerCanSubscribe: Scalars["Boolean"];
    viewerSubscription?: Maybe<SubscriptionState>;
    zipballUrl: Scalars["URI"];
  };

export type CommitAssociatedPullRequestsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PullRequestOrder>;
};

export type CommitAuthorsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type CommitBlameArgs = {
  path: Scalars["String"];
};

export type CommitCheckSuitesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  filterBy?: InputMaybe<CheckSuiteFilter>;
};

export type CommitCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type CommitDeploymentsArgs = {
  environments?: InputMaybe<Array<Scalars["String"]>>;
  orderBy?: InputMaybe<DeploymentOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type CommitFileArgs = {
  path: Scalars["String"];
};

export type CommitHistoryArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  path?: InputMaybe<Scalars["String"]>;
  author?: InputMaybe<CommitAuthor>;
  since?: InputMaybe<Scalars["GitTimestamp"]>;
  until?: InputMaybe<Scalars["GitTimestamp"]>;
};

export type CommitParentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type CommitSubmodulesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type CommitAuthor = {
  id?: InputMaybe<Scalars["ID"]>;
  emails?: InputMaybe<Array<Scalars["String"]>>;
};

export type CommitComment = Node &
  Comment &
  Deletable &
  Minimizable &
  Updatable &
  UpdatableComment &
  Reactable &
  RepositoryNode & {
    __typename?: "CommitComment";
    author?: Maybe<Actor>;
    authorAssociation: CommentAuthorAssociation;
    body: Scalars["String"];
    bodyHTML: Scalars["HTML"];
    bodyText: Scalars["String"];
    commit?: Maybe<Commit>;
    createdAt: Scalars["DateTime"];
    createdViaEmail: Scalars["Boolean"];
    databaseId?: Maybe<Scalars["Int"]>;
    editor?: Maybe<Actor>;
    id: Scalars["ID"];
    includesCreatedEdit: Scalars["Boolean"];
    isMinimized: Scalars["Boolean"];
    lastEditedAt?: Maybe<Scalars["DateTime"]>;
    minimizedReason?: Maybe<Scalars["String"]>;
    path?: Maybe<Scalars["String"]>;
    position?: Maybe<Scalars["Int"]>;
    publishedAt?: Maybe<Scalars["DateTime"]>;
    reactionGroups?: Maybe<Array<ReactionGroup>>;
    reactions: ReactionConnection;
    repository: Repository;
    resourcePath: Scalars["URI"];
    updatedAt: Scalars["DateTime"];
    url: Scalars["URI"];
    userContentEdits?: Maybe<UserContentEditConnection>;
    viewerCanDelete: Scalars["Boolean"];
    viewerCanMinimize: Scalars["Boolean"];
    viewerCanReact: Scalars["Boolean"];
    viewerCanUpdate: Scalars["Boolean"];
    viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
    viewerDidAuthor: Scalars["Boolean"];
  };

export type CommitCommentReactionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  content?: InputMaybe<ReactionContent>;
  orderBy?: InputMaybe<ReactionOrder>;
};

export type CommitCommentUserContentEditsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type CommitCommentConnection = {
  __typename?: "CommitCommentConnection";
  edges?: Maybe<Array<Maybe<CommitCommentEdge>>>;
  nodes?: Maybe<Array<Maybe<CommitComment>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type CommitCommentEdge = {
  __typename?: "CommitCommentEdge";
  cursor: Scalars["String"];
  node?: Maybe<CommitComment>;
};

export type CommitCommentThread = Node &
  RepositoryNode & {
    __typename?: "CommitCommentThread";
    comments: CommitCommentConnection;
    commit?: Maybe<Commit>;
    id: Scalars["ID"];
    path?: Maybe<Scalars["String"]>;
    position?: Maybe<Scalars["Int"]>;
    repository: Repository;
  };

export type CommitCommentThreadCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type CommitConnection = {
  __typename?: "CommitConnection";
  edges?: Maybe<Array<Maybe<CommitEdge>>>;
  nodes?: Maybe<Array<Maybe<Commit>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type CommitContributionOrder = {
  field: CommitContributionOrderField;
  direction: OrderDirection;
};

export enum CommitContributionOrderField {
  OccurredAt = "OCCURRED_AT",
  CommitCount = "COMMIT_COUNT",
}

export type CommitContributionsByRepository = {
  __typename?: "CommitContributionsByRepository";
  contributions: CreatedCommitContributionConnection;
  repository: Repository;
  resourcePath: Scalars["URI"];
  url: Scalars["URI"];
};

export type CommitContributionsByRepositoryContributionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CommitContributionOrder>;
};

export type CommitEdge = {
  __typename?: "CommitEdge";
  cursor: Scalars["String"];
  node?: Maybe<Commit>;
};

export type CommitHistoryConnection = {
  __typename?: "CommitHistoryConnection";
  edges?: Maybe<Array<Maybe<CommitEdge>>>;
  nodes?: Maybe<Array<Maybe<Commit>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type CommitMessage = {
  headline: Scalars["String"];
  body?: InputMaybe<Scalars["String"]>;
};

export type CommittableBranch = {
  id?: InputMaybe<Scalars["ID"]>;
  repositoryNameWithOwner?: InputMaybe<Scalars["String"]>;
  branchName?: InputMaybe<Scalars["String"]>;
};

export type Comparison = Node & {
  __typename?: "Comparison";
  aheadBy: Scalars["Int"];
  baseTarget: GitObject;
  behindBy: Scalars["Int"];
  commits: ComparisonCommitConnection;
  headTarget: GitObject;
  id: Scalars["ID"];
  status: ComparisonStatus;
};

export type ComparisonCommitsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type ComparisonCommitConnection = {
  __typename?: "ComparisonCommitConnection";
  authorCount: Scalars["Int"];
  edges?: Maybe<Array<Maybe<CommitEdge>>>;
  nodes?: Maybe<Array<Maybe<Commit>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export enum ComparisonStatus {
  Diverged = "DIVERGED",
  Ahead = "AHEAD",
  Behind = "BEHIND",
  Identical = "IDENTICAL",
}

export type ConnectedEvent = Node & {
  __typename?: "ConnectedEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  isCrossRepository: Scalars["Boolean"];
  source: ReferencedSubject;
  subject: ReferencedSubject;
};

export type Contribution = {
  isRestricted: Scalars["Boolean"];
  occurredAt: Scalars["DateTime"];
  resourcePath: Scalars["URI"];
  url: Scalars["URI"];
  user: User;
};

export type ContributionCalendar = {
  __typename?: "ContributionCalendar";
  colors: Array<Scalars["String"]>;
  isHalloween: Scalars["Boolean"];
  months: Array<ContributionCalendarMonth>;
  totalContributions: Scalars["Int"];
  weeks: Array<ContributionCalendarWeek>;
};

export type ContributionCalendarDay = {
  __typename?: "ContributionCalendarDay";
  color: Scalars["String"];
  contributionCount: Scalars["Int"];
  contributionLevel: ContributionLevel;
  date: Scalars["Date"];
  weekday: Scalars["Int"];
};

export type ContributionCalendarMonth = {
  __typename?: "ContributionCalendarMonth";
  firstDay: Scalars["Date"];
  name: Scalars["String"];
  totalWeeks: Scalars["Int"];
  year: Scalars["Int"];
};

export type ContributionCalendarWeek = {
  __typename?: "ContributionCalendarWeek";
  contributionDays: Array<ContributionCalendarDay>;
  firstDay: Scalars["Date"];
};

export enum ContributionLevel {
  None = "NONE",
  FirstQuartile = "FIRST_QUARTILE",
  SecondQuartile = "SECOND_QUARTILE",
  ThirdQuartile = "THIRD_QUARTILE",
  FourthQuartile = "FOURTH_QUARTILE",
}

export type ContributionOrder = {
  direction: OrderDirection;
};

export type ContributionsCollection = {
  __typename?: "ContributionsCollection";
  commitContributionsByRepository: Array<CommitContributionsByRepository>;
  contributionCalendar: ContributionCalendar;
  contributionYears: Array<Scalars["Int"]>;
  doesEndInCurrentMonth: Scalars["Boolean"];
  earliestRestrictedContributionDate?: Maybe<Scalars["Date"]>;
  endedAt: Scalars["DateTime"];
  firstIssueContribution?: Maybe<CreatedIssueOrRestrictedContribution>;
  firstPullRequestContribution?: Maybe<CreatedPullRequestOrRestrictedContribution>;
  firstRepositoryContribution?: Maybe<CreatedRepositoryOrRestrictedContribution>;
  hasActivityInThePast: Scalars["Boolean"];
  hasAnyContributions: Scalars["Boolean"];
  hasAnyRestrictedContributions: Scalars["Boolean"];
  isSingleDay: Scalars["Boolean"];
  issueContributions: CreatedIssueContributionConnection;
  issueContributionsByRepository: Array<IssueContributionsByRepository>;
  joinedGitHubContribution?: Maybe<JoinedGitHubContribution>;
  latestRestrictedContributionDate?: Maybe<Scalars["Date"]>;
  mostRecentCollectionWithActivity?: Maybe<ContributionsCollection>;
  mostRecentCollectionWithoutActivity?: Maybe<ContributionsCollection>;
  popularIssueContribution?: Maybe<CreatedIssueContribution>;
  popularPullRequestContribution?: Maybe<CreatedPullRequestContribution>;
  pullRequestContributions: CreatedPullRequestContributionConnection;
  pullRequestContributionsByRepository: Array<PullRequestContributionsByRepository>;
  pullRequestReviewContributions: CreatedPullRequestReviewContributionConnection;
  pullRequestReviewContributionsByRepository: Array<PullRequestReviewContributionsByRepository>;
  repositoryContributions: CreatedRepositoryContributionConnection;
  restrictedContributionsCount: Scalars["Int"];
  startedAt: Scalars["DateTime"];
  totalCommitContributions: Scalars["Int"];
  totalIssueContributions: Scalars["Int"];
  totalPullRequestContributions: Scalars["Int"];
  totalPullRequestReviewContributions: Scalars["Int"];
  totalRepositoriesWithContributedCommits: Scalars["Int"];
  totalRepositoriesWithContributedIssues: Scalars["Int"];
  totalRepositoriesWithContributedPullRequestReviews: Scalars["Int"];
  totalRepositoriesWithContributedPullRequests: Scalars["Int"];
  totalRepositoryContributions: Scalars["Int"];
  user: User;
};

export type ContributionsCollectionCommitContributionsByRepositoryArgs = {
  maxRepositories?: InputMaybe<Scalars["Int"]>;
};

export type ContributionsCollectionIssueContributionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  excludeFirst?: InputMaybe<Scalars["Boolean"]>;
  excludePopular?: InputMaybe<Scalars["Boolean"]>;
  orderBy?: InputMaybe<ContributionOrder>;
};

export type ContributionsCollectionIssueContributionsByRepositoryArgs = {
  maxRepositories?: InputMaybe<Scalars["Int"]>;
  excludeFirst?: InputMaybe<Scalars["Boolean"]>;
  excludePopular?: InputMaybe<Scalars["Boolean"]>;
};

export type ContributionsCollectionPullRequestContributionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  excludeFirst?: InputMaybe<Scalars["Boolean"]>;
  excludePopular?: InputMaybe<Scalars["Boolean"]>;
  orderBy?: InputMaybe<ContributionOrder>;
};

export type ContributionsCollectionPullRequestContributionsByRepositoryArgs = {
  maxRepositories?: InputMaybe<Scalars["Int"]>;
  excludeFirst?: InputMaybe<Scalars["Boolean"]>;
  excludePopular?: InputMaybe<Scalars["Boolean"]>;
};

export type ContributionsCollectionPullRequestReviewContributionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ContributionOrder>;
};

export type ContributionsCollectionPullRequestReviewContributionsByRepositoryArgs =
  {
    maxRepositories?: InputMaybe<Scalars["Int"]>;
  };

export type ContributionsCollectionRepositoryContributionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  excludeFirst?: InputMaybe<Scalars["Boolean"]>;
  orderBy?: InputMaybe<ContributionOrder>;
};

export type ContributionsCollectionTotalIssueContributionsArgs = {
  excludeFirst?: InputMaybe<Scalars["Boolean"]>;
  excludePopular?: InputMaybe<Scalars["Boolean"]>;
};

export type ContributionsCollectionTotalPullRequestContributionsArgs = {
  excludeFirst?: InputMaybe<Scalars["Boolean"]>;
  excludePopular?: InputMaybe<Scalars["Boolean"]>;
};

export type ContributionsCollectionTotalRepositoriesWithContributedIssuesArgs =
  {
    excludeFirst?: InputMaybe<Scalars["Boolean"]>;
    excludePopular?: InputMaybe<Scalars["Boolean"]>;
  };

export type ContributionsCollectionTotalRepositoriesWithContributedPullRequestsArgs =
  {
    excludeFirst?: InputMaybe<Scalars["Boolean"]>;
    excludePopular?: InputMaybe<Scalars["Boolean"]>;
  };

export type ContributionsCollectionTotalRepositoryContributionsArgs = {
  excludeFirst?: InputMaybe<Scalars["Boolean"]>;
};

export type ConvertProjectCardNoteToIssueInput = {
  projectCardId: Scalars["ID"];
  repositoryId: Scalars["ID"];
  title?: InputMaybe<Scalars["String"]>;
  body?: InputMaybe<Scalars["String"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type ConvertProjectCardNoteToIssuePayload = {
  __typename?: "ConvertProjectCardNoteToIssuePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  projectCard?: Maybe<ProjectCard>;
};

export type ConvertPullRequestToDraftInput = {
  pullRequestId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type ConvertPullRequestToDraftPayload = {
  __typename?: "ConvertPullRequestToDraftPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  pullRequest?: Maybe<PullRequest>;
};

export type ConvertToDraftEvent = Node &
  UniformResourceLocatable & {
    __typename?: "ConvertToDraftEvent";
    actor?: Maybe<Actor>;
    createdAt: Scalars["DateTime"];
    id: Scalars["ID"];
    pullRequest: PullRequest;
    resourcePath: Scalars["URI"];
    url: Scalars["URI"];
  };

export type ConvertedNoteToIssueEvent = Node & {
  __typename?: "ConvertedNoteToIssueEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

export type ConvertedToDiscussionEvent = Node & {
  __typename?: "ConvertedToDiscussionEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  discussion?: Maybe<Discussion>;
  id: Scalars["ID"];
};

export type CopyProjectV2Input = {
  projectId: Scalars["ID"];
  ownerId: Scalars["ID"];
  title: Scalars["String"];
  includeDraftIssues?: InputMaybe<Scalars["Boolean"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CopyProjectV2Payload = {
  __typename?: "CopyProjectV2Payload";
  clientMutationId?: Maybe<Scalars["String"]>;
  projectV2?: Maybe<ProjectV2>;
};

export type CreateAttributionInvitationInput = {
  ownerId: Scalars["ID"];
  sourceId: Scalars["ID"];
  targetId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CreateAttributionInvitationPayload = {
  __typename?: "CreateAttributionInvitationPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  owner?: Maybe<Organization>;
  source?: Maybe<Claimable>;
  target?: Maybe<Claimable>;
};

export type CreateBranchProtectionRuleInput = {
  repositoryId: Scalars["ID"];
  pattern: Scalars["String"];
  requiresApprovingReviews?: InputMaybe<Scalars["Boolean"]>;
  requiredApprovingReviewCount?: InputMaybe<Scalars["Int"]>;
  requiresCommitSignatures?: InputMaybe<Scalars["Boolean"]>;
  requiresLinearHistory?: InputMaybe<Scalars["Boolean"]>;
  blocksCreations?: InputMaybe<Scalars["Boolean"]>;
  allowsForcePushes?: InputMaybe<Scalars["Boolean"]>;
  allowsDeletions?: InputMaybe<Scalars["Boolean"]>;
  isAdminEnforced?: InputMaybe<Scalars["Boolean"]>;
  requiresStatusChecks?: InputMaybe<Scalars["Boolean"]>;
  requiresStrictStatusChecks?: InputMaybe<Scalars["Boolean"]>;
  requiresCodeOwnerReviews?: InputMaybe<Scalars["Boolean"]>;
  dismissesStaleReviews?: InputMaybe<Scalars["Boolean"]>;
  restrictsReviewDismissals?: InputMaybe<Scalars["Boolean"]>;
  reviewDismissalActorIds?: InputMaybe<Array<Scalars["ID"]>>;
  bypassPullRequestActorIds?: InputMaybe<Array<Scalars["ID"]>>;
  bypassForcePushActorIds?: InputMaybe<Array<Scalars["ID"]>>;
  restrictsPushes?: InputMaybe<Scalars["Boolean"]>;
  pushActorIds?: InputMaybe<Array<Scalars["ID"]>>;
  requiredStatusCheckContexts?: InputMaybe<Array<Scalars["String"]>>;
  requiredStatusChecks?: InputMaybe<Array<RequiredStatusCheckInput>>;
  requiresDeployments?: InputMaybe<Scalars["Boolean"]>;
  requiredDeploymentEnvironments?: InputMaybe<Array<Scalars["String"]>>;
  requiresConversationResolution?: InputMaybe<Scalars["Boolean"]>;
  requireLastPushApproval?: InputMaybe<Scalars["Boolean"]>;
  lockBranch?: InputMaybe<Scalars["Boolean"]>;
  lockAllowsFetchAndMerge?: InputMaybe<Scalars["Boolean"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CreateBranchProtectionRulePayload = {
  __typename?: "CreateBranchProtectionRulePayload";
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  clientMutationId?: Maybe<Scalars["String"]>;
};

export type CreateCheckRunInput = {
  repositoryId: Scalars["ID"];
  name: Scalars["String"];
  headSha: Scalars["GitObjectID"];
  detailsUrl?: InputMaybe<Scalars["URI"]>;
  externalId?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<RequestableCheckStatusState>;
  startedAt?: InputMaybe<Scalars["DateTime"]>;
  conclusion?: InputMaybe<CheckConclusionState>;
  completedAt?: InputMaybe<Scalars["DateTime"]>;
  output?: InputMaybe<CheckRunOutput>;
  actions?: InputMaybe<Array<CheckRunAction>>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CreateCheckRunPayload = {
  __typename?: "CreateCheckRunPayload";
  checkRun?: Maybe<CheckRun>;
  clientMutationId?: Maybe<Scalars["String"]>;
};

export type CreateCheckSuiteInput = {
  repositoryId: Scalars["ID"];
  headSha: Scalars["GitObjectID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CreateCheckSuitePayload = {
  __typename?: "CreateCheckSuitePayload";
  checkSuite?: Maybe<CheckSuite>;
  clientMutationId?: Maybe<Scalars["String"]>;
};

export type CreateCommitOnBranchInput = {
  branch: CommittableBranch;
  fileChanges?: InputMaybe<FileChanges>;
  message: CommitMessage;
  expectedHeadOid: Scalars["GitObjectID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CreateCommitOnBranchPayload = {
  __typename?: "CreateCommitOnBranchPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  commit?: Maybe<Commit>;
  ref?: Maybe<Ref>;
};

export type CreateDiscussionInput = {
  repositoryId: Scalars["ID"];
  title: Scalars["String"];
  body: Scalars["String"];
  categoryId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CreateDiscussionPayload = {
  __typename?: "CreateDiscussionPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  discussion?: Maybe<Discussion>;
};

export type CreateEnterpriseOrganizationInput = {
  enterpriseId: Scalars["ID"];
  login: Scalars["String"];
  profileName: Scalars["String"];
  billingEmail: Scalars["String"];
  adminLogins: Array<Scalars["String"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CreateEnterpriseOrganizationPayload = {
  __typename?: "CreateEnterpriseOrganizationPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  enterprise?: Maybe<Enterprise>;
  organization?: Maybe<Organization>;
};

export type CreateEnvironmentInput = {
  repositoryId: Scalars["ID"];
  name: Scalars["String"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CreateEnvironmentPayload = {
  __typename?: "CreateEnvironmentPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  environment?: Maybe<Environment>;
};

export type CreateIpAllowListEntryInput = {
  ownerId: Scalars["ID"];
  allowListValue: Scalars["String"];
  name?: InputMaybe<Scalars["String"]>;
  isActive: Scalars["Boolean"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CreateIpAllowListEntryPayload = {
  __typename?: "CreateIpAllowListEntryPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  ipAllowListEntry?: Maybe<IpAllowListEntry>;
};

export type CreateIssueInput = {
  repositoryId: Scalars["ID"];
  title: Scalars["String"];
  body?: InputMaybe<Scalars["String"]>;
  assigneeIds?: InputMaybe<Array<Scalars["ID"]>>;
  milestoneId?: InputMaybe<Scalars["ID"]>;
  labelIds?: InputMaybe<Array<Scalars["ID"]>>;
  projectIds?: InputMaybe<Array<Scalars["ID"]>>;
  issueTemplate?: InputMaybe<Scalars["String"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CreateIssuePayload = {
  __typename?: "CreateIssuePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  issue?: Maybe<Issue>;
};

export type CreateLinkedBranchInput = {
  issueId: Scalars["ID"];
  oid: Scalars["GitObjectID"];
  name?: InputMaybe<Scalars["String"]>;
  repositoryId?: InputMaybe<Scalars["ID"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CreateLinkedBranchPayload = {
  __typename?: "CreateLinkedBranchPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  linkedBranch?: Maybe<LinkedBranch>;
};

export type CreateMigrationSourceInput = {
  name: Scalars["String"];
  url?: InputMaybe<Scalars["String"]>;
  accessToken?: InputMaybe<Scalars["String"]>;
  type: MigrationSourceType;
  ownerId: Scalars["ID"];
  githubPat?: InputMaybe<Scalars["String"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CreateMigrationSourcePayload = {
  __typename?: "CreateMigrationSourcePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  migrationSource?: Maybe<MigrationSource>;
};

export type CreateProjectInput = {
  ownerId: Scalars["ID"];
  name: Scalars["String"];
  body?: InputMaybe<Scalars["String"]>;
  template?: InputMaybe<ProjectTemplate>;
  repositoryIds?: InputMaybe<Array<Scalars["ID"]>>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CreateProjectPayload = {
  __typename?: "CreateProjectPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  project?: Maybe<Project>;
};

export type CreateProjectV2FieldInput = {
  projectId: Scalars["ID"];
  dataType: ProjectV2CustomFieldType;
  name: Scalars["String"];
  singleSelectOptions?: InputMaybe<
    Array<ProjectV2SingleSelectFieldOptionInput>
  >;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CreateProjectV2FieldPayload = {
  __typename?: "CreateProjectV2FieldPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  projectV2Field?: Maybe<ProjectV2FieldConfiguration>;
};

export type CreateProjectV2Input = {
  ownerId: Scalars["ID"];
  title: Scalars["String"];
  repositoryId?: InputMaybe<Scalars["ID"]>;
  teamId?: InputMaybe<Scalars["ID"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CreateProjectV2Payload = {
  __typename?: "CreateProjectV2Payload";
  clientMutationId?: Maybe<Scalars["String"]>;
  projectV2?: Maybe<ProjectV2>;
};

export type CreatePullRequestInput = {
  repositoryId: Scalars["ID"];
  baseRefName: Scalars["String"];
  headRefName: Scalars["String"];
  headRepositoryId?: InputMaybe<Scalars["ID"]>;
  title: Scalars["String"];
  body?: InputMaybe<Scalars["String"]>;
  maintainerCanModify?: InputMaybe<Scalars["Boolean"]>;
  draft?: InputMaybe<Scalars["Boolean"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CreatePullRequestPayload = {
  __typename?: "CreatePullRequestPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  pullRequest?: Maybe<PullRequest>;
};

export type CreateRefInput = {
  repositoryId: Scalars["ID"];
  name: Scalars["String"];
  oid: Scalars["GitObjectID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CreateRefPayload = {
  __typename?: "CreateRefPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  ref?: Maybe<Ref>;
};

export type CreateRepositoryInput = {
  name: Scalars["String"];
  ownerId?: InputMaybe<Scalars["ID"]>;
  description?: InputMaybe<Scalars["String"]>;
  visibility: RepositoryVisibility;
  template?: InputMaybe<Scalars["Boolean"]>;
  homepageUrl?: InputMaybe<Scalars["URI"]>;
  hasWikiEnabled?: InputMaybe<Scalars["Boolean"]>;
  hasIssuesEnabled?: InputMaybe<Scalars["Boolean"]>;
  teamId?: InputMaybe<Scalars["ID"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CreateRepositoryPayload = {
  __typename?: "CreateRepositoryPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  repository?: Maybe<Repository>;
};

export type CreateSponsorsListingInput = {
  sponsorableLogin?: InputMaybe<Scalars["String"]>;
  fiscalHostLogin?: InputMaybe<Scalars["String"]>;
  fiscallyHostedProjectProfileUrl?: InputMaybe<Scalars["String"]>;
  billingCountryOrRegionCode?: InputMaybe<SponsorsCountryOrRegionCode>;
  residenceCountryOrRegionCode?: InputMaybe<SponsorsCountryOrRegionCode>;
  contactEmail?: InputMaybe<Scalars["String"]>;
  fullDescription?: InputMaybe<Scalars["String"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CreateSponsorsListingPayload = {
  __typename?: "CreateSponsorsListingPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  sponsorsListing?: Maybe<SponsorsListing>;
};

export type CreateSponsorsTierInput = {
  sponsorableId?: InputMaybe<Scalars["ID"]>;
  sponsorableLogin?: InputMaybe<Scalars["String"]>;
  amount: Scalars["Int"];
  isRecurring?: InputMaybe<Scalars["Boolean"]>;
  repositoryId?: InputMaybe<Scalars["ID"]>;
  repositoryOwnerLogin?: InputMaybe<Scalars["String"]>;
  repositoryName?: InputMaybe<Scalars["String"]>;
  welcomeMessage?: InputMaybe<Scalars["String"]>;
  description: Scalars["String"];
  publish?: InputMaybe<Scalars["Boolean"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CreateSponsorsTierPayload = {
  __typename?: "CreateSponsorsTierPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  sponsorsTier?: Maybe<SponsorsTier>;
};

export type CreateSponsorshipInput = {
  sponsorId?: InputMaybe<Scalars["ID"]>;
  sponsorLogin?: InputMaybe<Scalars["String"]>;
  sponsorableId?: InputMaybe<Scalars["ID"]>;
  sponsorableLogin?: InputMaybe<Scalars["String"]>;
  tierId?: InputMaybe<Scalars["ID"]>;
  amount?: InputMaybe<Scalars["Int"]>;
  isRecurring?: InputMaybe<Scalars["Boolean"]>;
  receiveEmails?: InputMaybe<Scalars["Boolean"]>;
  privacyLevel?: InputMaybe<SponsorshipPrivacy>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CreateSponsorshipPayload = {
  __typename?: "CreateSponsorshipPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  sponsorship?: Maybe<Sponsorship>;
};

export type CreateSponsorshipsInput = {
  sponsorLogin: Scalars["String"];
  sponsorships: Array<BulkSponsorship>;
  receiveEmails?: InputMaybe<Scalars["Boolean"]>;
  privacyLevel?: InputMaybe<SponsorshipPrivacy>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CreateSponsorshipsPayload = {
  __typename?: "CreateSponsorshipsPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  sponsorables?: Maybe<Array<Sponsorable>>;
};

export type CreateTeamDiscussionCommentInput = {
  discussionId: Scalars["ID"];
  body: Scalars["String"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CreateTeamDiscussionCommentPayload = {
  __typename?: "CreateTeamDiscussionCommentPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  teamDiscussionComment?: Maybe<TeamDiscussionComment>;
};

export type CreateTeamDiscussionInput = {
  teamId: Scalars["ID"];
  title: Scalars["String"];
  body: Scalars["String"];
  private?: InputMaybe<Scalars["Boolean"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type CreateTeamDiscussionPayload = {
  __typename?: "CreateTeamDiscussionPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  teamDiscussion?: Maybe<TeamDiscussion>;
};

export type CreatedCommitContribution = Contribution & {
  __typename?: "CreatedCommitContribution";
  commitCount: Scalars["Int"];
  isRestricted: Scalars["Boolean"];
  occurredAt: Scalars["DateTime"];
  repository: Repository;
  resourcePath: Scalars["URI"];
  url: Scalars["URI"];
  user: User;
};

export type CreatedCommitContributionConnection = {
  __typename?: "CreatedCommitContributionConnection";
  edges?: Maybe<Array<Maybe<CreatedCommitContributionEdge>>>;
  nodes?: Maybe<Array<Maybe<CreatedCommitContribution>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type CreatedCommitContributionEdge = {
  __typename?: "CreatedCommitContributionEdge";
  cursor: Scalars["String"];
  node?: Maybe<CreatedCommitContribution>;
};

export type CreatedIssueContribution = Contribution & {
  __typename?: "CreatedIssueContribution";
  isRestricted: Scalars["Boolean"];
  issue: Issue;
  occurredAt: Scalars["DateTime"];
  resourcePath: Scalars["URI"];
  url: Scalars["URI"];
  user: User;
};

export type CreatedIssueContributionConnection = {
  __typename?: "CreatedIssueContributionConnection";
  edges?: Maybe<Array<Maybe<CreatedIssueContributionEdge>>>;
  nodes?: Maybe<Array<Maybe<CreatedIssueContribution>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type CreatedIssueContributionEdge = {
  __typename?: "CreatedIssueContributionEdge";
  cursor: Scalars["String"];
  node?: Maybe<CreatedIssueContribution>;
};

export type CreatedIssueOrRestrictedContribution =
  | CreatedIssueContribution
  | RestrictedContribution;

export type CreatedPullRequestContribution = Contribution & {
  __typename?: "CreatedPullRequestContribution";
  isRestricted: Scalars["Boolean"];
  occurredAt: Scalars["DateTime"];
  pullRequest: PullRequest;
  resourcePath: Scalars["URI"];
  url: Scalars["URI"];
  user: User;
};

export type CreatedPullRequestContributionConnection = {
  __typename?: "CreatedPullRequestContributionConnection";
  edges?: Maybe<Array<Maybe<CreatedPullRequestContributionEdge>>>;
  nodes?: Maybe<Array<Maybe<CreatedPullRequestContribution>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type CreatedPullRequestContributionEdge = {
  __typename?: "CreatedPullRequestContributionEdge";
  cursor: Scalars["String"];
  node?: Maybe<CreatedPullRequestContribution>;
};

export type CreatedPullRequestOrRestrictedContribution =
  | CreatedPullRequestContribution
  | RestrictedContribution;

export type CreatedPullRequestReviewContribution = Contribution & {
  __typename?: "CreatedPullRequestReviewContribution";
  isRestricted: Scalars["Boolean"];
  occurredAt: Scalars["DateTime"];
  pullRequest: PullRequest;
  pullRequestReview: PullRequestReview;
  repository: Repository;
  resourcePath: Scalars["URI"];
  url: Scalars["URI"];
  user: User;
};

export type CreatedPullRequestReviewContributionConnection = {
  __typename?: "CreatedPullRequestReviewContributionConnection";
  edges?: Maybe<Array<Maybe<CreatedPullRequestReviewContributionEdge>>>;
  nodes?: Maybe<Array<Maybe<CreatedPullRequestReviewContribution>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type CreatedPullRequestReviewContributionEdge = {
  __typename?: "CreatedPullRequestReviewContributionEdge";
  cursor: Scalars["String"];
  node?: Maybe<CreatedPullRequestReviewContribution>;
};

export type CreatedRepositoryContribution = Contribution & {
  __typename?: "CreatedRepositoryContribution";
  isRestricted: Scalars["Boolean"];
  occurredAt: Scalars["DateTime"];
  repository: Repository;
  resourcePath: Scalars["URI"];
  url: Scalars["URI"];
  user: User;
};

export type CreatedRepositoryContributionConnection = {
  __typename?: "CreatedRepositoryContributionConnection";
  edges?: Maybe<Array<Maybe<CreatedRepositoryContributionEdge>>>;
  nodes?: Maybe<Array<Maybe<CreatedRepositoryContribution>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type CreatedRepositoryContributionEdge = {
  __typename?: "CreatedRepositoryContributionEdge";
  cursor: Scalars["String"];
  node?: Maybe<CreatedRepositoryContribution>;
};

export type CreatedRepositoryOrRestrictedContribution =
  | CreatedRepositoryContribution
  | RestrictedContribution;

export type CrossReferencedEvent = UniformResourceLocatable &
  Node & {
    __typename?: "CrossReferencedEvent";
    actor?: Maybe<Actor>;
    createdAt: Scalars["DateTime"];
    id: Scalars["ID"];
    isCrossRepository: Scalars["Boolean"];
    referencedAt: Scalars["DateTime"];
    resourcePath: Scalars["URI"];
    source: ReferencedSubject;
    target: ReferencedSubject;
    url: Scalars["URI"];
    willCloseTarget: Scalars["Boolean"];
  };

export type DeclineTopicSuggestionInput = {
  repositoryId: Scalars["ID"];
  name: Scalars["String"];
  reason: TopicSuggestionDeclineReason;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DeclineTopicSuggestionPayload = {
  __typename?: "DeclineTopicSuggestionPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  topic?: Maybe<Topic>;
};

export enum DefaultRepositoryPermissionField {
  None = "NONE",
  Read = "READ",
  Write = "WRITE",
  Admin = "ADMIN",
}

export type Deletable = {
  viewerCanDelete: Scalars["Boolean"];
};

export type DeleteBranchProtectionRuleInput = {
  branchProtectionRuleId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DeleteBranchProtectionRulePayload = {
  __typename?: "DeleteBranchProtectionRulePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
};

export type DeleteDeploymentInput = {
  id: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DeleteDeploymentPayload = {
  __typename?: "DeleteDeploymentPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
};

export type DeleteDiscussionCommentInput = {
  id: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DeleteDiscussionCommentPayload = {
  __typename?: "DeleteDiscussionCommentPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  comment?: Maybe<DiscussionComment>;
};

export type DeleteDiscussionInput = {
  id: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DeleteDiscussionPayload = {
  __typename?: "DeleteDiscussionPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  discussion?: Maybe<Discussion>;
};

export type DeleteEnvironmentInput = {
  id: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DeleteEnvironmentPayload = {
  __typename?: "DeleteEnvironmentPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
};

export type DeleteIpAllowListEntryInput = {
  ipAllowListEntryId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DeleteIpAllowListEntryPayload = {
  __typename?: "DeleteIpAllowListEntryPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  ipAllowListEntry?: Maybe<IpAllowListEntry>;
};

export type DeleteIssueCommentInput = {
  id: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DeleteIssueCommentPayload = {
  __typename?: "DeleteIssueCommentPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
};

export type DeleteIssueInput = {
  issueId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DeleteIssuePayload = {
  __typename?: "DeleteIssuePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  repository?: Maybe<Repository>;
};

export type DeleteLinkedBranchInput = {
  linkedBranchId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DeleteLinkedBranchPayload = {
  __typename?: "DeleteLinkedBranchPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  issue?: Maybe<Issue>;
};

export type DeleteProjectCardInput = {
  cardId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DeleteProjectCardPayload = {
  __typename?: "DeleteProjectCardPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  column?: Maybe<ProjectColumn>;
  deletedCardId?: Maybe<Scalars["ID"]>;
};

export type DeleteProjectColumnInput = {
  columnId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DeleteProjectColumnPayload = {
  __typename?: "DeleteProjectColumnPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  deletedColumnId?: Maybe<Scalars["ID"]>;
  project?: Maybe<Project>;
};

export type DeleteProjectInput = {
  projectId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DeleteProjectPayload = {
  __typename?: "DeleteProjectPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  owner?: Maybe<ProjectOwner>;
};

export type DeleteProjectV2FieldInput = {
  fieldId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DeleteProjectV2FieldPayload = {
  __typename?: "DeleteProjectV2FieldPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  projectV2Field?: Maybe<ProjectV2FieldConfiguration>;
};

export type DeleteProjectV2Input = {
  projectId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DeleteProjectV2ItemInput = {
  projectId: Scalars["ID"];
  itemId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DeleteProjectV2ItemPayload = {
  __typename?: "DeleteProjectV2ItemPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  deletedItemId?: Maybe<Scalars["ID"]>;
};

export type DeleteProjectV2Payload = {
  __typename?: "DeleteProjectV2Payload";
  clientMutationId?: Maybe<Scalars["String"]>;
  projectV2?: Maybe<ProjectV2>;
};

export type DeleteProjectV2WorkflowInput = {
  workflowId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DeleteProjectV2WorkflowPayload = {
  __typename?: "DeleteProjectV2WorkflowPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  deletedWorkflowId?: Maybe<Scalars["ID"]>;
  projectV2?: Maybe<ProjectV2>;
};

export type DeletePullRequestReviewCommentInput = {
  id: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DeletePullRequestReviewCommentPayload = {
  __typename?: "DeletePullRequestReviewCommentPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  pullRequestReview?: Maybe<PullRequestReview>;
  pullRequestReviewComment?: Maybe<PullRequestReviewComment>;
};

export type DeletePullRequestReviewInput = {
  pullRequestReviewId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DeletePullRequestReviewPayload = {
  __typename?: "DeletePullRequestReviewPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  pullRequestReview?: Maybe<PullRequestReview>;
};

export type DeleteRefInput = {
  refId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DeleteRefPayload = {
  __typename?: "DeleteRefPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
};

export type DeleteTeamDiscussionCommentInput = {
  id: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DeleteTeamDiscussionCommentPayload = {
  __typename?: "DeleteTeamDiscussionCommentPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
};

export type DeleteTeamDiscussionInput = {
  id: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DeleteTeamDiscussionPayload = {
  __typename?: "DeleteTeamDiscussionPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
};

export type DeleteVerifiableDomainInput = {
  id: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DeleteVerifiableDomainPayload = {
  __typename?: "DeleteVerifiableDomainPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  owner?: Maybe<VerifiableDomainOwner>;
};

export type DemilestonedEvent = Node & {
  __typename?: "DemilestonedEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  milestoneTitle: Scalars["String"];
  subject: MilestoneItem;
};

export type DependabotUpdate = RepositoryNode & {
  __typename?: "DependabotUpdate";
  error?: Maybe<DependabotUpdateError>;
  pullRequest?: Maybe<PullRequest>;
  repository: Repository;
};

export type DependabotUpdateError = {
  __typename?: "DependabotUpdateError";
  body: Scalars["String"];
  errorType: Scalars["String"];
  title: Scalars["String"];
};

export enum DependencyGraphEcosystem {
  Rubygems = "RUBYGEMS",
  Npm = "NPM",
  Pip = "PIP",
  Maven = "MAVEN",
  Nuget = "NUGET",
  Composer = "COMPOSER",
  Go = "GO",
  Actions = "ACTIONS",
  Rust = "RUST",
  Pub = "PUB",
}

export type DeployKey = Node & {
  __typename?: "DeployKey";
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  key: Scalars["String"];
  readOnly: Scalars["Boolean"];
  title: Scalars["String"];
  verified: Scalars["Boolean"];
};

export type DeployKeyConnection = {
  __typename?: "DeployKeyConnection";
  edges?: Maybe<Array<Maybe<DeployKeyEdge>>>;
  nodes?: Maybe<Array<Maybe<DeployKey>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DeployKeyEdge = {
  __typename?: "DeployKeyEdge";
  cursor: Scalars["String"];
  node?: Maybe<DeployKey>;
};

export type DeployedEvent = Node & {
  __typename?: "DeployedEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  databaseId?: Maybe<Scalars["Int"]>;
  deployment: Deployment;
  id: Scalars["ID"];
  pullRequest: PullRequest;
  ref?: Maybe<Ref>;
};

export type Deployment = Node & {
  __typename?: "Deployment";
  commit?: Maybe<Commit>;
  commitOid: Scalars["String"];
  createdAt: Scalars["DateTime"];
  creator: Actor;
  databaseId?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["String"]>;
  environment?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  latestEnvironment?: Maybe<Scalars["String"]>;
  latestStatus?: Maybe<DeploymentStatus>;
  originalEnvironment?: Maybe<Scalars["String"]>;
  payload?: Maybe<Scalars["String"]>;
  ref?: Maybe<Ref>;
  repository: Repository;
  state?: Maybe<DeploymentState>;
  statuses?: Maybe<DeploymentStatusConnection>;
  task?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
};

export type DeploymentStatusesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type DeploymentConnection = {
  __typename?: "DeploymentConnection";
  edges?: Maybe<Array<Maybe<DeploymentEdge>>>;
  nodes?: Maybe<Array<Maybe<Deployment>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DeploymentEdge = {
  __typename?: "DeploymentEdge";
  cursor: Scalars["String"];
  node?: Maybe<Deployment>;
};

export type DeploymentEnvironmentChangedEvent = Node & {
  __typename?: "DeploymentEnvironmentChangedEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  deploymentStatus: DeploymentStatus;
  id: Scalars["ID"];
  pullRequest: PullRequest;
};

export type DeploymentOrder = {
  field: DeploymentOrderField;
  direction: OrderDirection;
};

export enum DeploymentOrderField {
  CreatedAt = "CREATED_AT",
}

export type DeploymentProtectionRule = {
  __typename?: "DeploymentProtectionRule";
  databaseId?: Maybe<Scalars["Int"]>;
  reviewers: DeploymentReviewerConnection;
  timeout: Scalars["Int"];
  type: DeploymentProtectionRuleType;
};

export type DeploymentProtectionRuleReviewersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type DeploymentProtectionRuleConnection = {
  __typename?: "DeploymentProtectionRuleConnection";
  edges?: Maybe<Array<Maybe<DeploymentProtectionRuleEdge>>>;
  nodes?: Maybe<Array<Maybe<DeploymentProtectionRule>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DeploymentProtectionRuleEdge = {
  __typename?: "DeploymentProtectionRuleEdge";
  cursor: Scalars["String"];
  node?: Maybe<DeploymentProtectionRule>;
};

export enum DeploymentProtectionRuleType {
  RequiredReviewers = "REQUIRED_REVIEWERS",
  WaitTimer = "WAIT_TIMER",
}

export type DeploymentRequest = {
  __typename?: "DeploymentRequest";
  currentUserCanApprove: Scalars["Boolean"];
  environment: Environment;
  reviewers: DeploymentReviewerConnection;
  waitTimer: Scalars["Int"];
  waitTimerStartedAt?: Maybe<Scalars["DateTime"]>;
};

export type DeploymentRequestReviewersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type DeploymentRequestConnection = {
  __typename?: "DeploymentRequestConnection";
  edges?: Maybe<Array<Maybe<DeploymentRequestEdge>>>;
  nodes?: Maybe<Array<Maybe<DeploymentRequest>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DeploymentRequestEdge = {
  __typename?: "DeploymentRequestEdge";
  cursor: Scalars["String"];
  node?: Maybe<DeploymentRequest>;
};

export type DeploymentReview = Node & {
  __typename?: "DeploymentReview";
  comment: Scalars["String"];
  databaseId?: Maybe<Scalars["Int"]>;
  environments: EnvironmentConnection;
  id: Scalars["ID"];
  state: DeploymentReviewState;
  user: User;
};

export type DeploymentReviewEnvironmentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type DeploymentReviewConnection = {
  __typename?: "DeploymentReviewConnection";
  edges?: Maybe<Array<Maybe<DeploymentReviewEdge>>>;
  nodes?: Maybe<Array<Maybe<DeploymentReview>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DeploymentReviewEdge = {
  __typename?: "DeploymentReviewEdge";
  cursor: Scalars["String"];
  node?: Maybe<DeploymentReview>;
};

export enum DeploymentReviewState {
  Approved = "APPROVED",
  Rejected = "REJECTED",
}

export type DeploymentReviewer = Team | User;

export type DeploymentReviewerConnection = {
  __typename?: "DeploymentReviewerConnection";
  edges?: Maybe<Array<Maybe<DeploymentReviewerEdge>>>;
  nodes?: Maybe<Array<Maybe<DeploymentReviewer>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DeploymentReviewerEdge = {
  __typename?: "DeploymentReviewerEdge";
  cursor: Scalars["String"];
  node?: Maybe<DeploymentReviewer>;
};

export enum DeploymentState {
  Abandoned = "ABANDONED",
  Active = "ACTIVE",
  Destroyed = "DESTROYED",
  Error = "ERROR",
  Failure = "FAILURE",
  Inactive = "INACTIVE",
  Pending = "PENDING",
  Success = "SUCCESS",
  Queued = "QUEUED",
  InProgress = "IN_PROGRESS",
  Waiting = "WAITING",
}

export type DeploymentStatus = Node & {
  __typename?: "DeploymentStatus";
  createdAt: Scalars["DateTime"];
  creator: Actor;
  deployment: Deployment;
  description?: Maybe<Scalars["String"]>;
  environmentUrl?: Maybe<Scalars["URI"]>;
  id: Scalars["ID"];
  logUrl?: Maybe<Scalars["URI"]>;
  state: DeploymentStatusState;
  updatedAt: Scalars["DateTime"];
};

export type DeploymentStatusConnection = {
  __typename?: "DeploymentStatusConnection";
  edges?: Maybe<Array<Maybe<DeploymentStatusEdge>>>;
  nodes?: Maybe<Array<Maybe<DeploymentStatus>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DeploymentStatusEdge = {
  __typename?: "DeploymentStatusEdge";
  cursor: Scalars["String"];
  node?: Maybe<DeploymentStatus>;
};

export enum DeploymentStatusState {
  Pending = "PENDING",
  Success = "SUCCESS",
  Failure = "FAILURE",
  Inactive = "INACTIVE",
  Error = "ERROR",
  Queued = "QUEUED",
  InProgress = "IN_PROGRESS",
  Waiting = "WAITING",
}

export type DequeuePullRequestInput = {
  id: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DequeuePullRequestPayload = {
  __typename?: "DequeuePullRequestPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  mergeQueueEntry?: Maybe<MergeQueueEntry>;
};

export enum DiffSide {
  Left = "LEFT",
  Right = "RIGHT",
}

export type DisablePullRequestAutoMergeInput = {
  pullRequestId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DisablePullRequestAutoMergePayload = {
  __typename?: "DisablePullRequestAutoMergePayload";
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<Scalars["String"]>;
  pullRequest?: Maybe<PullRequest>;
};

export type DisconnectedEvent = Node & {
  __typename?: "DisconnectedEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  isCrossRepository: Scalars["Boolean"];
  source: ReferencedSubject;
  subject: ReferencedSubject;
};

export type Discussion = Closable &
  Comment &
  Updatable &
  Deletable &
  Labelable &
  Lockable &
  RepositoryNode &
  Subscribable &
  Reactable &
  Votable &
  Node & {
    __typename?: "Discussion";
    activeLockReason?: Maybe<LockReason>;
    answer?: Maybe<DiscussionComment>;
    answerChosenAt?: Maybe<Scalars["DateTime"]>;
    answerChosenBy?: Maybe<Actor>;
    author?: Maybe<Actor>;
    authorAssociation: CommentAuthorAssociation;
    body: Scalars["String"];
    bodyHTML: Scalars["HTML"];
    bodyText: Scalars["String"];
    category: DiscussionCategory;
    closed: Scalars["Boolean"];
    closedAt?: Maybe<Scalars["DateTime"]>;
    comments: DiscussionCommentConnection;
    createdAt: Scalars["DateTime"];
    createdViaEmail: Scalars["Boolean"];
    databaseId?: Maybe<Scalars["Int"]>;
    editor?: Maybe<Actor>;
    id: Scalars["ID"];
    includesCreatedEdit: Scalars["Boolean"];
    labels?: Maybe<LabelConnection>;
    lastEditedAt?: Maybe<Scalars["DateTime"]>;
    locked: Scalars["Boolean"];
    number: Scalars["Int"];
    poll?: Maybe<DiscussionPoll>;
    publishedAt?: Maybe<Scalars["DateTime"]>;
    reactionGroups?: Maybe<Array<ReactionGroup>>;
    reactions: ReactionConnection;
    repository: Repository;
    resourcePath: Scalars["URI"];
    stateReason?: Maybe<DiscussionStateReason>;
    title: Scalars["String"];
    updatedAt: Scalars["DateTime"];
    upvoteCount: Scalars["Int"];
    url: Scalars["URI"];
    userContentEdits?: Maybe<UserContentEditConnection>;
    viewerCanClose: Scalars["Boolean"];
    viewerCanDelete: Scalars["Boolean"];
    viewerCanReact: Scalars["Boolean"];
    viewerCanReopen: Scalars["Boolean"];
    viewerCanSubscribe: Scalars["Boolean"];
    viewerCanUpdate: Scalars["Boolean"];
    viewerCanUpvote: Scalars["Boolean"];
    viewerDidAuthor: Scalars["Boolean"];
    viewerHasUpvoted: Scalars["Boolean"];
    viewerSubscription?: Maybe<SubscriptionState>;
  };

export type DiscussionCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type DiscussionLabelsArgs = {
  orderBy?: InputMaybe<LabelOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type DiscussionReactionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  content?: InputMaybe<ReactionContent>;
  orderBy?: InputMaybe<ReactionOrder>;
};

export type DiscussionUserContentEditsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type DiscussionCategory = Node &
  RepositoryNode & {
    __typename?: "DiscussionCategory";
    createdAt: Scalars["DateTime"];
    description?: Maybe<Scalars["String"]>;
    emoji: Scalars["String"];
    emojiHTML: Scalars["HTML"];
    id: Scalars["ID"];
    isAnswerable: Scalars["Boolean"];
    name: Scalars["String"];
    repository: Repository;
    slug: Scalars["String"];
    updatedAt: Scalars["DateTime"];
  };

export type DiscussionCategoryConnection = {
  __typename?: "DiscussionCategoryConnection";
  edges?: Maybe<Array<Maybe<DiscussionCategoryEdge>>>;
  nodes?: Maybe<Array<Maybe<DiscussionCategory>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DiscussionCategoryEdge = {
  __typename?: "DiscussionCategoryEdge";
  cursor: Scalars["String"];
  node?: Maybe<DiscussionCategory>;
};

export enum DiscussionCloseReason {
  Resolved = "RESOLVED",
  Outdated = "OUTDATED",
  Duplicate = "DUPLICATE",
}

export type DiscussionComment = Comment &
  Deletable &
  Minimizable &
  Updatable &
  UpdatableComment &
  Reactable &
  Votable &
  Node & {
    __typename?: "DiscussionComment";
    author?: Maybe<Actor>;
    authorAssociation: CommentAuthorAssociation;
    body: Scalars["String"];
    bodyHTML: Scalars["HTML"];
    bodyText: Scalars["String"];
    createdAt: Scalars["DateTime"];
    createdViaEmail: Scalars["Boolean"];
    databaseId?: Maybe<Scalars["Int"]>;
    deletedAt?: Maybe<Scalars["DateTime"]>;
    discussion?: Maybe<Discussion>;
    editor?: Maybe<Actor>;
    id: Scalars["ID"];
    includesCreatedEdit: Scalars["Boolean"];
    isAnswer: Scalars["Boolean"];
    isMinimized: Scalars["Boolean"];
    lastEditedAt?: Maybe<Scalars["DateTime"]>;
    minimizedReason?: Maybe<Scalars["String"]>;
    publishedAt?: Maybe<Scalars["DateTime"]>;
    reactionGroups?: Maybe<Array<ReactionGroup>>;
    reactions: ReactionConnection;
    replies: DiscussionCommentConnection;
    replyTo?: Maybe<DiscussionComment>;
    resourcePath: Scalars["URI"];
    updatedAt: Scalars["DateTime"];
    upvoteCount: Scalars["Int"];
    url: Scalars["URI"];
    userContentEdits?: Maybe<UserContentEditConnection>;
    viewerCanDelete: Scalars["Boolean"];
    viewerCanMarkAsAnswer: Scalars["Boolean"];
    viewerCanMinimize: Scalars["Boolean"];
    viewerCanReact: Scalars["Boolean"];
    viewerCanUnmarkAsAnswer: Scalars["Boolean"];
    viewerCanUpdate: Scalars["Boolean"];
    viewerCanUpvote: Scalars["Boolean"];
    viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
    viewerDidAuthor: Scalars["Boolean"];
    viewerHasUpvoted: Scalars["Boolean"];
  };

export type DiscussionCommentReactionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  content?: InputMaybe<ReactionContent>;
  orderBy?: InputMaybe<ReactionOrder>;
};

export type DiscussionCommentRepliesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type DiscussionCommentUserContentEditsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type DiscussionCommentConnection = {
  __typename?: "DiscussionCommentConnection";
  edges?: Maybe<Array<Maybe<DiscussionCommentEdge>>>;
  nodes?: Maybe<Array<Maybe<DiscussionComment>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DiscussionCommentEdge = {
  __typename?: "DiscussionCommentEdge";
  cursor: Scalars["String"];
  node?: Maybe<DiscussionComment>;
};

export type DiscussionConnection = {
  __typename?: "DiscussionConnection";
  edges?: Maybe<Array<Maybe<DiscussionEdge>>>;
  nodes?: Maybe<Array<Maybe<Discussion>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DiscussionEdge = {
  __typename?: "DiscussionEdge";
  cursor: Scalars["String"];
  node?: Maybe<Discussion>;
};

export type DiscussionOrder = {
  field: DiscussionOrderField;
  direction: OrderDirection;
};

export enum DiscussionOrderField {
  CreatedAt = "CREATED_AT",
  UpdatedAt = "UPDATED_AT",
}

export type DiscussionPoll = Node & {
  __typename?: "DiscussionPoll";
  discussion?: Maybe<Discussion>;
  id: Scalars["ID"];
  options?: Maybe<DiscussionPollOptionConnection>;
  question: Scalars["String"];
  totalVoteCount: Scalars["Int"];
  viewerCanVote: Scalars["Boolean"];
  viewerHasVoted: Scalars["Boolean"];
};

export type DiscussionPollOptionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DiscussionPollOptionOrder>;
};

export type DiscussionPollOption = Node & {
  __typename?: "DiscussionPollOption";
  id: Scalars["ID"];
  option: Scalars["String"];
  poll?: Maybe<DiscussionPoll>;
  totalVoteCount: Scalars["Int"];
  viewerHasVoted: Scalars["Boolean"];
};

export type DiscussionPollOptionConnection = {
  __typename?: "DiscussionPollOptionConnection";
  edges?: Maybe<Array<Maybe<DiscussionPollOptionEdge>>>;
  nodes?: Maybe<Array<Maybe<DiscussionPollOption>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type DiscussionPollOptionEdge = {
  __typename?: "DiscussionPollOptionEdge";
  cursor: Scalars["String"];
  node?: Maybe<DiscussionPollOption>;
};

export type DiscussionPollOptionOrder = {
  field: DiscussionPollOptionOrderField;
  direction: OrderDirection;
};

export enum DiscussionPollOptionOrderField {
  AuthoredOrder = "AUTHORED_ORDER",
  VoteCount = "VOTE_COUNT",
}

export enum DiscussionState {
  Open = "OPEN",
  Closed = "CLOSED",
}

export enum DiscussionStateReason {
  Resolved = "RESOLVED",
  Outdated = "OUTDATED",
  Duplicate = "DUPLICATE",
  Reopened = "REOPENED",
}

export type DismissPullRequestReviewInput = {
  pullRequestReviewId: Scalars["ID"];
  message: Scalars["String"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DismissPullRequestReviewPayload = {
  __typename?: "DismissPullRequestReviewPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  pullRequestReview?: Maybe<PullRequestReview>;
};

export enum DismissReason {
  FixStarted = "FIX_STARTED",
  NoBandwidth = "NO_BANDWIDTH",
  TolerableRisk = "TOLERABLE_RISK",
  Inaccurate = "INACCURATE",
  NotUsed = "NOT_USED",
}

export type DismissRepositoryVulnerabilityAlertInput = {
  repositoryVulnerabilityAlertId: Scalars["ID"];
  dismissReason: DismissReason;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type DismissRepositoryVulnerabilityAlertPayload = {
  __typename?: "DismissRepositoryVulnerabilityAlertPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  repositoryVulnerabilityAlert?: Maybe<RepositoryVulnerabilityAlert>;
};

export type DraftIssue = Node & {
  __typename?: "DraftIssue";
  assignees: UserConnection;
  body: Scalars["String"];
  bodyHTML: Scalars["HTML"];
  bodyText: Scalars["String"];
  createdAt: Scalars["DateTime"];
  creator?: Maybe<Actor>;
  id: Scalars["ID"];
  projectV2Items: ProjectV2ItemConnection;
  projectsV2: ProjectV2Connection;
  title: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type DraftIssueAssigneesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type DraftIssueProjectV2ItemsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type DraftIssueProjectsV2Args = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type DraftPullRequestReviewComment = {
  path: Scalars["String"];
  position: Scalars["Int"];
  body: Scalars["String"];
};

export type DraftPullRequestReviewThread = {
  path: Scalars["String"];
  line: Scalars["Int"];
  side?: InputMaybe<DiffSide>;
  startLine?: InputMaybe<Scalars["Int"]>;
  startSide?: InputMaybe<DiffSide>;
  body: Scalars["String"];
};

export type EnablePullRequestAutoMergeInput = {
  pullRequestId: Scalars["ID"];
  commitHeadline?: InputMaybe<Scalars["String"]>;
  commitBody?: InputMaybe<Scalars["String"]>;
  mergeMethod?: InputMaybe<PullRequestMergeMethod>;
  authorEmail?: InputMaybe<Scalars["String"]>;
  expectedHeadOid?: InputMaybe<Scalars["GitObjectID"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type EnablePullRequestAutoMergePayload = {
  __typename?: "EnablePullRequestAutoMergePayload";
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<Scalars["String"]>;
  pullRequest?: Maybe<PullRequest>;
};

export type EnqueuePullRequestInput = {
  pullRequestId: Scalars["ID"];
  jump?: InputMaybe<Scalars["Boolean"]>;
  expectedHeadOid?: InputMaybe<Scalars["GitObjectID"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type EnqueuePullRequestPayload = {
  __typename?: "EnqueuePullRequestPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  mergeQueueEntry?: Maybe<MergeQueueEntry>;
};

export type Enterprise = Node &
  AnnouncementBanner & {
    __typename?: "Enterprise";
    announcement?: Maybe<Scalars["String"]>;
    announcementExpiresAt?: Maybe<Scalars["DateTime"]>;
    announcementUserDismissible?: Maybe<Scalars["Boolean"]>;
    avatarUrl: Scalars["URI"];
    billingInfo?: Maybe<EnterpriseBillingInfo>;
    createdAt: Scalars["DateTime"];
    databaseId?: Maybe<Scalars["Int"]>;
    description?: Maybe<Scalars["String"]>;
    descriptionHTML: Scalars["HTML"];
    id: Scalars["ID"];
    location?: Maybe<Scalars["String"]>;
    members: EnterpriseMemberConnection;
    name: Scalars["String"];
    organizations: OrganizationConnection;
    ownerInfo?: Maybe<EnterpriseOwnerInfo>;
    resourcePath: Scalars["URI"];
    slug: Scalars["String"];
    url: Scalars["URI"];
    viewerIsAdmin: Scalars["Boolean"];
    websiteUrl?: Maybe<Scalars["URI"]>;
  };

export type EnterpriseAvatarUrlArgs = {
  size?: InputMaybe<Scalars["Int"]>;
};

export type EnterpriseMembersArgs = {
  organizationLogins?: InputMaybe<Array<Scalars["String"]>>;
  query?: InputMaybe<Scalars["String"]>;
  orderBy?: InputMaybe<EnterpriseMemberOrder>;
  role?: InputMaybe<EnterpriseUserAccountMembershipRole>;
  deployment?: InputMaybe<EnterpriseUserDeployment>;
  hasTwoFactorEnabled?: InputMaybe<Scalars["Boolean"]>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type EnterpriseOrganizationsArgs = {
  query?: InputMaybe<Scalars["String"]>;
  viewerOrganizationRole?: InputMaybe<RoleInOrganization>;
  orderBy?: InputMaybe<OrganizationOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type EnterpriseAdministratorConnection = {
  __typename?: "EnterpriseAdministratorConnection";
  edges?: Maybe<Array<Maybe<EnterpriseAdministratorEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EnterpriseAdministratorEdge = {
  __typename?: "EnterpriseAdministratorEdge";
  cursor: Scalars["String"];
  node?: Maybe<User>;
  role: EnterpriseAdministratorRole;
};

export type EnterpriseAdministratorInvitation = Node & {
  __typename?: "EnterpriseAdministratorInvitation";
  createdAt: Scalars["DateTime"];
  email?: Maybe<Scalars["String"]>;
  enterprise: Enterprise;
  id: Scalars["ID"];
  invitee?: Maybe<User>;
  inviter?: Maybe<User>;
  role: EnterpriseAdministratorRole;
};

export type EnterpriseAdministratorInvitationConnection = {
  __typename?: "EnterpriseAdministratorInvitationConnection";
  edges?: Maybe<Array<Maybe<EnterpriseAdministratorInvitationEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseAdministratorInvitation>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EnterpriseAdministratorInvitationEdge = {
  __typename?: "EnterpriseAdministratorInvitationEdge";
  cursor: Scalars["String"];
  node?: Maybe<EnterpriseAdministratorInvitation>;
};

export type EnterpriseAdministratorInvitationOrder = {
  field: EnterpriseAdministratorInvitationOrderField;
  direction: OrderDirection;
};

export enum EnterpriseAdministratorInvitationOrderField {
  CreatedAt = "CREATED_AT",
}

export enum EnterpriseAdministratorRole {
  Owner = "OWNER",
  BillingManager = "BILLING_MANAGER",
}

export enum EnterpriseAllowPrivateRepositoryForkingPolicyValue {
  EnterpriseOrganizations = "ENTERPRISE_ORGANIZATIONS",
  SameOrganization = "SAME_ORGANIZATION",
  SameOrganizationUserAccounts = "SAME_ORGANIZATION_USER_ACCOUNTS",
  EnterpriseOrganizationsUserAccounts = "ENTERPRISE_ORGANIZATIONS_USER_ACCOUNTS",
  UserAccounts = "USER_ACCOUNTS",
  Everywhere = "EVERYWHERE",
}

export type EnterpriseAuditEntryData = {
  enterpriseResourcePath?: Maybe<Scalars["URI"]>;
  enterpriseSlug?: Maybe<Scalars["String"]>;
  enterpriseUrl?: Maybe<Scalars["URI"]>;
};

export type EnterpriseBillingInfo = {
  __typename?: "EnterpriseBillingInfo";
  allLicensableUsersCount: Scalars["Int"];
  assetPacks: Scalars["Int"];
  bandwidthQuota: Scalars["Float"];
  bandwidthUsage: Scalars["Float"];
  bandwidthUsagePercentage: Scalars["Int"];
  storageQuota: Scalars["Float"];
  storageUsage: Scalars["Float"];
  storageUsagePercentage: Scalars["Int"];
  totalAvailableLicenses: Scalars["Int"];
  totalLicenses: Scalars["Int"];
};

export enum EnterpriseDefaultRepositoryPermissionSettingValue {
  NoPolicy = "NO_POLICY",
  Admin = "ADMIN",
  Write = "WRITE",
  Read = "READ",
  None = "NONE",
}

export enum EnterpriseEnabledDisabledSettingValue {
  Enabled = "ENABLED",
  Disabled = "DISABLED",
  NoPolicy = "NO_POLICY",
}

export enum EnterpriseEnabledSettingValue {
  Enabled = "ENABLED",
  NoPolicy = "NO_POLICY",
}

export type EnterpriseFailedInvitationConnection = {
  __typename?: "EnterpriseFailedInvitationConnection";
  edges?: Maybe<Array<Maybe<EnterpriseFailedInvitationEdge>>>;
  nodes?: Maybe<Array<Maybe<OrganizationInvitation>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
  totalUniqueUserCount: Scalars["Int"];
};

export type EnterpriseFailedInvitationEdge = {
  __typename?: "EnterpriseFailedInvitationEdge";
  cursor: Scalars["String"];
  node?: Maybe<OrganizationInvitation>;
};

export type EnterpriseIdentityProvider = Node & {
  __typename?: "EnterpriseIdentityProvider";
  digestMethod?: Maybe<SamlDigestAlgorithm>;
  enterprise?: Maybe<Enterprise>;
  externalIdentities: ExternalIdentityConnection;
  id: Scalars["ID"];
  idpCertificate?: Maybe<Scalars["X509Certificate"]>;
  issuer?: Maybe<Scalars["String"]>;
  recoveryCodes?: Maybe<Array<Scalars["String"]>>;
  signatureMethod?: Maybe<SamlSignatureAlgorithm>;
  ssoUrl?: Maybe<Scalars["URI"]>;
};

export type EnterpriseIdentityProviderExternalIdentitiesArgs = {
  membersOnly?: InputMaybe<Scalars["Boolean"]>;
  login?: InputMaybe<Scalars["String"]>;
  userName?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type EnterpriseMember = EnterpriseUserAccount | User;

export type EnterpriseMemberConnection = {
  __typename?: "EnterpriseMemberConnection";
  edges?: Maybe<Array<Maybe<EnterpriseMemberEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseMember>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EnterpriseMemberEdge = {
  __typename?: "EnterpriseMemberEdge";
  cursor: Scalars["String"];
  node?: Maybe<EnterpriseMember>;
};

export type EnterpriseMemberOrder = {
  field: EnterpriseMemberOrderField;
  direction: OrderDirection;
};

export enum EnterpriseMemberOrderField {
  Login = "LOGIN",
  CreatedAt = "CREATED_AT",
}

export enum EnterpriseMembersCanCreateRepositoriesSettingValue {
  NoPolicy = "NO_POLICY",
  All = "ALL",
  Public = "PUBLIC",
  Private = "PRIVATE",
  Disabled = "DISABLED",
}

export enum EnterpriseMembersCanMakePurchasesSettingValue {
  Enabled = "ENABLED",
  Disabled = "DISABLED",
}

export type EnterpriseOrganizationMembershipConnection = {
  __typename?: "EnterpriseOrganizationMembershipConnection";
  edges?: Maybe<Array<Maybe<EnterpriseOrganizationMembershipEdge>>>;
  nodes?: Maybe<Array<Maybe<Organization>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EnterpriseOrganizationMembershipEdge = {
  __typename?: "EnterpriseOrganizationMembershipEdge";
  cursor: Scalars["String"];
  node?: Maybe<Organization>;
  role: EnterpriseUserAccountMembershipRole;
};

export type EnterpriseOutsideCollaboratorConnection = {
  __typename?: "EnterpriseOutsideCollaboratorConnection";
  edges?: Maybe<Array<Maybe<EnterpriseOutsideCollaboratorEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EnterpriseOutsideCollaboratorEdge = {
  __typename?: "EnterpriseOutsideCollaboratorEdge";
  cursor: Scalars["String"];
  node?: Maybe<User>;
  repositories: EnterpriseRepositoryInfoConnection;
};

export type EnterpriseOutsideCollaboratorEdgeRepositoriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RepositoryOrder>;
};

export type EnterpriseOwnerInfo = {
  __typename?: "EnterpriseOwnerInfo";
  admins: EnterpriseAdministratorConnection;
  affiliatedUsersWithTwoFactorDisabled: UserConnection;
  affiliatedUsersWithTwoFactorDisabledExist: Scalars["Boolean"];
  allowPrivateRepositoryForkingSetting: EnterpriseEnabledDisabledSettingValue;
  allowPrivateRepositoryForkingSettingOrganizations: OrganizationConnection;
  allowPrivateRepositoryForkingSettingPolicyValue?: Maybe<EnterpriseAllowPrivateRepositoryForkingPolicyValue>;
  defaultRepositoryPermissionSetting: EnterpriseDefaultRepositoryPermissionSettingValue;
  defaultRepositoryPermissionSettingOrganizations: OrganizationConnection;
  domains: VerifiableDomainConnection;
  enterpriseServerInstallations: EnterpriseServerInstallationConnection;
  failedInvitations: EnterpriseFailedInvitationConnection;
  ipAllowListEnabledSetting: IpAllowListEnabledSettingValue;
  ipAllowListEntries: IpAllowListEntryConnection;
  ipAllowListForInstalledAppsEnabledSetting: IpAllowListForInstalledAppsEnabledSettingValue;
  isUpdatingDefaultRepositoryPermission: Scalars["Boolean"];
  isUpdatingTwoFactorRequirement: Scalars["Boolean"];
  membersCanChangeRepositoryVisibilitySetting: EnterpriseEnabledDisabledSettingValue;
  membersCanChangeRepositoryVisibilitySettingOrganizations: OrganizationConnection;
  membersCanCreateInternalRepositoriesSetting?: Maybe<Scalars["Boolean"]>;
  membersCanCreatePrivateRepositoriesSetting?: Maybe<Scalars["Boolean"]>;
  membersCanCreatePublicRepositoriesSetting?: Maybe<Scalars["Boolean"]>;
  membersCanCreateRepositoriesSetting?: Maybe<EnterpriseMembersCanCreateRepositoriesSettingValue>;
  membersCanCreateRepositoriesSettingOrganizations: OrganizationConnection;
  membersCanDeleteIssuesSetting: EnterpriseEnabledDisabledSettingValue;
  membersCanDeleteIssuesSettingOrganizations: OrganizationConnection;
  membersCanDeleteRepositoriesSetting: EnterpriseEnabledDisabledSettingValue;
  membersCanDeleteRepositoriesSettingOrganizations: OrganizationConnection;
  membersCanInviteCollaboratorsSetting: EnterpriseEnabledDisabledSettingValue;
  membersCanInviteCollaboratorsSettingOrganizations: OrganizationConnection;
  membersCanMakePurchasesSetting: EnterpriseMembersCanMakePurchasesSettingValue;
  membersCanUpdateProtectedBranchesSetting: EnterpriseEnabledDisabledSettingValue;
  membersCanUpdateProtectedBranchesSettingOrganizations: OrganizationConnection;
  membersCanViewDependencyInsightsSetting: EnterpriseEnabledDisabledSettingValue;
  membersCanViewDependencyInsightsSettingOrganizations: OrganizationConnection;
  notificationDeliveryRestrictionEnabledSetting: NotificationRestrictionSettingValue;
  oidcProvider?: Maybe<OidcProvider>;
  organizationProjectsSetting: EnterpriseEnabledDisabledSettingValue;
  organizationProjectsSettingOrganizations: OrganizationConnection;
  outsideCollaborators: EnterpriseOutsideCollaboratorConnection;
  pendingAdminInvitations: EnterpriseAdministratorInvitationConnection;
  pendingCollaboratorInvitations: RepositoryInvitationConnection;
  pendingMemberInvitations: EnterprisePendingMemberInvitationConnection;
  repositoryProjectsSetting: EnterpriseEnabledDisabledSettingValue;
  repositoryProjectsSettingOrganizations: OrganizationConnection;
  samlIdentityProvider?: Maybe<EnterpriseIdentityProvider>;
  samlIdentityProviderSettingOrganizations: OrganizationConnection;
  supportEntitlements: EnterpriseMemberConnection;
  teamDiscussionsSetting: EnterpriseEnabledDisabledSettingValue;
  teamDiscussionsSettingOrganizations: OrganizationConnection;
  twoFactorRequiredSetting: EnterpriseEnabledSettingValue;
  twoFactorRequiredSettingOrganizations: OrganizationConnection;
};

export type EnterpriseOwnerInfoAdminsArgs = {
  organizationLogins?: InputMaybe<Array<Scalars["String"]>>;
  query?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<EnterpriseAdministratorRole>;
  orderBy?: InputMaybe<EnterpriseMemberOrder>;
  hasTwoFactorEnabled?: InputMaybe<Scalars["Boolean"]>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type EnterpriseOwnerInfoAffiliatedUsersWithTwoFactorDisabledArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type EnterpriseOwnerInfoAllowPrivateRepositoryForkingSettingOrganizationsArgs =
  {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    value: Scalars["Boolean"];
    orderBy?: InputMaybe<OrganizationOrder>;
  };

export type EnterpriseOwnerInfoDefaultRepositoryPermissionSettingOrganizationsArgs =
  {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    value: DefaultRepositoryPermissionField;
    orderBy?: InputMaybe<OrganizationOrder>;
  };

export type EnterpriseOwnerInfoDomainsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  isVerified?: InputMaybe<Scalars["Boolean"]>;
  isApproved?: InputMaybe<Scalars["Boolean"]>;
  orderBy?: InputMaybe<VerifiableDomainOrder>;
};

export type EnterpriseOwnerInfoEnterpriseServerInstallationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  connectedOnly?: InputMaybe<Scalars["Boolean"]>;
  orderBy?: InputMaybe<EnterpriseServerInstallationOrder>;
};

export type EnterpriseOwnerInfoFailedInvitationsArgs = {
  query?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type EnterpriseOwnerInfoIpAllowListEntriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<IpAllowListEntryOrder>;
};

export type EnterpriseOwnerInfoMembersCanChangeRepositoryVisibilitySettingOrganizationsArgs =
  {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    value: Scalars["Boolean"];
    orderBy?: InputMaybe<OrganizationOrder>;
  };

export type EnterpriseOwnerInfoMembersCanCreateRepositoriesSettingOrganizationsArgs =
  {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    value: OrganizationMembersCanCreateRepositoriesSettingValue;
    orderBy?: InputMaybe<OrganizationOrder>;
  };

export type EnterpriseOwnerInfoMembersCanDeleteIssuesSettingOrganizationsArgs =
  {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    value: Scalars["Boolean"];
    orderBy?: InputMaybe<OrganizationOrder>;
  };

export type EnterpriseOwnerInfoMembersCanDeleteRepositoriesSettingOrganizationsArgs =
  {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    value: Scalars["Boolean"];
    orderBy?: InputMaybe<OrganizationOrder>;
  };

export type EnterpriseOwnerInfoMembersCanInviteCollaboratorsSettingOrganizationsArgs =
  {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    value: Scalars["Boolean"];
    orderBy?: InputMaybe<OrganizationOrder>;
  };

export type EnterpriseOwnerInfoMembersCanUpdateProtectedBranchesSettingOrganizationsArgs =
  {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    value: Scalars["Boolean"];
    orderBy?: InputMaybe<OrganizationOrder>;
  };

export type EnterpriseOwnerInfoMembersCanViewDependencyInsightsSettingOrganizationsArgs =
  {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    value: Scalars["Boolean"];
    orderBy?: InputMaybe<OrganizationOrder>;
  };

export type EnterpriseOwnerInfoOrganizationProjectsSettingOrganizationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  value: Scalars["Boolean"];
  orderBy?: InputMaybe<OrganizationOrder>;
};

export type EnterpriseOwnerInfoOutsideCollaboratorsArgs = {
  login?: InputMaybe<Scalars["String"]>;
  query?: InputMaybe<Scalars["String"]>;
  orderBy?: InputMaybe<EnterpriseMemberOrder>;
  visibility?: InputMaybe<RepositoryVisibility>;
  hasTwoFactorEnabled?: InputMaybe<Scalars["Boolean"]>;
  organizationLogins?: InputMaybe<Array<Scalars["String"]>>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type EnterpriseOwnerInfoPendingAdminInvitationsArgs = {
  query?: InputMaybe<Scalars["String"]>;
  orderBy?: InputMaybe<EnterpriseAdministratorInvitationOrder>;
  role?: InputMaybe<EnterpriseAdministratorRole>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type EnterpriseOwnerInfoPendingCollaboratorInvitationsArgs = {
  query?: InputMaybe<Scalars["String"]>;
  orderBy?: InputMaybe<RepositoryInvitationOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type EnterpriseOwnerInfoPendingMemberInvitationsArgs = {
  query?: InputMaybe<Scalars["String"]>;
  organizationLogins?: InputMaybe<Array<Scalars["String"]>>;
  invitationSource?: InputMaybe<OrganizationInvitationSource>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type EnterpriseOwnerInfoRepositoryProjectsSettingOrganizationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  value: Scalars["Boolean"];
  orderBy?: InputMaybe<OrganizationOrder>;
};

export type EnterpriseOwnerInfoSamlIdentityProviderSettingOrganizationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  value: IdentityProviderConfigurationState;
  orderBy?: InputMaybe<OrganizationOrder>;
};

export type EnterpriseOwnerInfoSupportEntitlementsArgs = {
  orderBy?: InputMaybe<EnterpriseMemberOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type EnterpriseOwnerInfoTeamDiscussionsSettingOrganizationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  value: Scalars["Boolean"];
  orderBy?: InputMaybe<OrganizationOrder>;
};

export type EnterpriseOwnerInfoTwoFactorRequiredSettingOrganizationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  value: Scalars["Boolean"];
  orderBy?: InputMaybe<OrganizationOrder>;
};

export type EnterprisePendingMemberInvitationConnection = {
  __typename?: "EnterprisePendingMemberInvitationConnection";
  edges?: Maybe<Array<Maybe<EnterprisePendingMemberInvitationEdge>>>;
  nodes?: Maybe<Array<Maybe<OrganizationInvitation>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
  totalUniqueUserCount: Scalars["Int"];
};

export type EnterprisePendingMemberInvitationEdge = {
  __typename?: "EnterprisePendingMemberInvitationEdge";
  cursor: Scalars["String"];
  node?: Maybe<OrganizationInvitation>;
};

export type EnterpriseRepositoryInfo = Node & {
  __typename?: "EnterpriseRepositoryInfo";
  id: Scalars["ID"];
  isPrivate: Scalars["Boolean"];
  name: Scalars["String"];
  nameWithOwner: Scalars["String"];
};

export type EnterpriseRepositoryInfoConnection = {
  __typename?: "EnterpriseRepositoryInfoConnection";
  edges?: Maybe<Array<Maybe<EnterpriseRepositoryInfoEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseRepositoryInfo>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EnterpriseRepositoryInfoEdge = {
  __typename?: "EnterpriseRepositoryInfoEdge";
  cursor: Scalars["String"];
  node?: Maybe<EnterpriseRepositoryInfo>;
};

export type EnterpriseServerInstallation = Node & {
  __typename?: "EnterpriseServerInstallation";
  createdAt: Scalars["DateTime"];
  customerName: Scalars["String"];
  hostName: Scalars["String"];
  id: Scalars["ID"];
  isConnected: Scalars["Boolean"];
  updatedAt: Scalars["DateTime"];
  userAccounts: EnterpriseServerUserAccountConnection;
  userAccountsUploads: EnterpriseServerUserAccountsUploadConnection;
};

export type EnterpriseServerInstallationUserAccountsArgs = {
  orderBy?: InputMaybe<EnterpriseServerUserAccountOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type EnterpriseServerInstallationUserAccountsUploadsArgs = {
  orderBy?: InputMaybe<EnterpriseServerUserAccountsUploadOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type EnterpriseServerInstallationConnection = {
  __typename?: "EnterpriseServerInstallationConnection";
  edges?: Maybe<Array<Maybe<EnterpriseServerInstallationEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseServerInstallation>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EnterpriseServerInstallationEdge = {
  __typename?: "EnterpriseServerInstallationEdge";
  cursor: Scalars["String"];
  node?: Maybe<EnterpriseServerInstallation>;
};

export type EnterpriseServerInstallationMembershipConnection = {
  __typename?: "EnterpriseServerInstallationMembershipConnection";
  edges?: Maybe<Array<Maybe<EnterpriseServerInstallationMembershipEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseServerInstallation>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EnterpriseServerInstallationMembershipEdge = {
  __typename?: "EnterpriseServerInstallationMembershipEdge";
  cursor: Scalars["String"];
  node?: Maybe<EnterpriseServerInstallation>;
  role: EnterpriseUserAccountMembershipRole;
};

export type EnterpriseServerInstallationOrder = {
  field: EnterpriseServerInstallationOrderField;
  direction: OrderDirection;
};

export enum EnterpriseServerInstallationOrderField {
  HostName = "HOST_NAME",
  CustomerName = "CUSTOMER_NAME",
  CreatedAt = "CREATED_AT",
}

export type EnterpriseServerUserAccount = Node & {
  __typename?: "EnterpriseServerUserAccount";
  createdAt: Scalars["DateTime"];
  emails: EnterpriseServerUserAccountEmailConnection;
  enterpriseServerInstallation: EnterpriseServerInstallation;
  id: Scalars["ID"];
  isSiteAdmin: Scalars["Boolean"];
  login: Scalars["String"];
  profileName?: Maybe<Scalars["String"]>;
  remoteCreatedAt: Scalars["DateTime"];
  remoteUserId: Scalars["Int"];
  updatedAt: Scalars["DateTime"];
};

export type EnterpriseServerUserAccountEmailsArgs = {
  orderBy?: InputMaybe<EnterpriseServerUserAccountEmailOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type EnterpriseServerUserAccountConnection = {
  __typename?: "EnterpriseServerUserAccountConnection";
  edges?: Maybe<Array<Maybe<EnterpriseServerUserAccountEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseServerUserAccount>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EnterpriseServerUserAccountEdge = {
  __typename?: "EnterpriseServerUserAccountEdge";
  cursor: Scalars["String"];
  node?: Maybe<EnterpriseServerUserAccount>;
};

export type EnterpriseServerUserAccountEmail = Node & {
  __typename?: "EnterpriseServerUserAccountEmail";
  createdAt: Scalars["DateTime"];
  email: Scalars["String"];
  id: Scalars["ID"];
  isPrimary: Scalars["Boolean"];
  updatedAt: Scalars["DateTime"];
  userAccount: EnterpriseServerUserAccount;
};

export type EnterpriseServerUserAccountEmailConnection = {
  __typename?: "EnterpriseServerUserAccountEmailConnection";
  edges?: Maybe<Array<Maybe<EnterpriseServerUserAccountEmailEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseServerUserAccountEmail>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EnterpriseServerUserAccountEmailEdge = {
  __typename?: "EnterpriseServerUserAccountEmailEdge";
  cursor: Scalars["String"];
  node?: Maybe<EnterpriseServerUserAccountEmail>;
};

export type EnterpriseServerUserAccountEmailOrder = {
  field: EnterpriseServerUserAccountEmailOrderField;
  direction: OrderDirection;
};

export enum EnterpriseServerUserAccountEmailOrderField {
  Email = "EMAIL",
}

export type EnterpriseServerUserAccountOrder = {
  field: EnterpriseServerUserAccountOrderField;
  direction: OrderDirection;
};

export enum EnterpriseServerUserAccountOrderField {
  Login = "LOGIN",
  RemoteCreatedAt = "REMOTE_CREATED_AT",
}

export type EnterpriseServerUserAccountsUpload = Node & {
  __typename?: "EnterpriseServerUserAccountsUpload";
  createdAt: Scalars["DateTime"];
  enterprise: Enterprise;
  enterpriseServerInstallation: EnterpriseServerInstallation;
  id: Scalars["ID"];
  name: Scalars["String"];
  syncState: EnterpriseServerUserAccountsUploadSyncState;
  updatedAt: Scalars["DateTime"];
};

export type EnterpriseServerUserAccountsUploadConnection = {
  __typename?: "EnterpriseServerUserAccountsUploadConnection";
  edges?: Maybe<Array<Maybe<EnterpriseServerUserAccountsUploadEdge>>>;
  nodes?: Maybe<Array<Maybe<EnterpriseServerUserAccountsUpload>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EnterpriseServerUserAccountsUploadEdge = {
  __typename?: "EnterpriseServerUserAccountsUploadEdge";
  cursor: Scalars["String"];
  node?: Maybe<EnterpriseServerUserAccountsUpload>;
};

export type EnterpriseServerUserAccountsUploadOrder = {
  field: EnterpriseServerUserAccountsUploadOrderField;
  direction: OrderDirection;
};

export enum EnterpriseServerUserAccountsUploadOrderField {
  CreatedAt = "CREATED_AT",
}

export enum EnterpriseServerUserAccountsUploadSyncState {
  Pending = "PENDING",
  Success = "SUCCESS",
  Failure = "FAILURE",
}

export type EnterpriseUserAccount = Actor &
  Node & {
    __typename?: "EnterpriseUserAccount";
    avatarUrl: Scalars["URI"];
    createdAt: Scalars["DateTime"];
    enterprise: Enterprise;
    enterpriseInstallations: EnterpriseServerInstallationMembershipConnection;
    id: Scalars["ID"];
    login: Scalars["String"];
    name?: Maybe<Scalars["String"]>;
    organizations: EnterpriseOrganizationMembershipConnection;
    resourcePath: Scalars["URI"];
    updatedAt: Scalars["DateTime"];
    url: Scalars["URI"];
    user?: Maybe<User>;
  };

export type EnterpriseUserAccountAvatarUrlArgs = {
  size?: InputMaybe<Scalars["Int"]>;
};

export type EnterpriseUserAccountEnterpriseInstallationsArgs = {
  query?: InputMaybe<Scalars["String"]>;
  orderBy?: InputMaybe<EnterpriseServerInstallationOrder>;
  role?: InputMaybe<EnterpriseUserAccountMembershipRole>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type EnterpriseUserAccountOrganizationsArgs = {
  query?: InputMaybe<Scalars["String"]>;
  orderBy?: InputMaybe<OrganizationOrder>;
  role?: InputMaybe<EnterpriseUserAccountMembershipRole>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export enum EnterpriseUserAccountMembershipRole {
  Member = "MEMBER",
  Owner = "OWNER",
  Unaffiliated = "UNAFFILIATED",
}

export enum EnterpriseUserDeployment {
  Cloud = "CLOUD",
  Server = "SERVER",
}

export type Environment = Node & {
  __typename?: "Environment";
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  protectionRules: DeploymentProtectionRuleConnection;
};

export type EnvironmentProtectionRulesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type EnvironmentConnection = {
  __typename?: "EnvironmentConnection";
  edges?: Maybe<Array<Maybe<EnvironmentEdge>>>;
  nodes?: Maybe<Array<Maybe<Environment>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type EnvironmentEdge = {
  __typename?: "EnvironmentEdge";
  cursor: Scalars["String"];
  node?: Maybe<Environment>;
};

export type ExternalIdentity = Node & {
  __typename?: "ExternalIdentity";
  guid: Scalars["String"];
  id: Scalars["ID"];
  organizationInvitation?: Maybe<OrganizationInvitation>;
  samlIdentity?: Maybe<ExternalIdentitySamlAttributes>;
  scimIdentity?: Maybe<ExternalIdentityScimAttributes>;
  user?: Maybe<User>;
};

export type ExternalIdentityAttribute = {
  __typename?: "ExternalIdentityAttribute";
  metadata?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  value: Scalars["String"];
};

export type ExternalIdentityConnection = {
  __typename?: "ExternalIdentityConnection";
  edges?: Maybe<Array<Maybe<ExternalIdentityEdge>>>;
  nodes?: Maybe<Array<Maybe<ExternalIdentity>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ExternalIdentityEdge = {
  __typename?: "ExternalIdentityEdge";
  cursor: Scalars["String"];
  node?: Maybe<ExternalIdentity>;
};

export type ExternalIdentitySamlAttributes = {
  __typename?: "ExternalIdentitySamlAttributes";
  attributes: Array<ExternalIdentityAttribute>;
  emails?: Maybe<Array<UserEmailMetadata>>;
  familyName?: Maybe<Scalars["String"]>;
  givenName?: Maybe<Scalars["String"]>;
  groups?: Maybe<Array<Scalars["String"]>>;
  nameId?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
};

export type ExternalIdentityScimAttributes = {
  __typename?: "ExternalIdentityScimAttributes";
  emails?: Maybe<Array<UserEmailMetadata>>;
  familyName?: Maybe<Scalars["String"]>;
  givenName?: Maybe<Scalars["String"]>;
  groups?: Maybe<Array<Scalars["String"]>>;
  username?: Maybe<Scalars["String"]>;
};

export type FileAddition = {
  path: Scalars["String"];
  contents: Scalars["Base64String"];
};

export type FileChanges = {
  deletions?: InputMaybe<Array<FileDeletion>>;
  additions?: InputMaybe<Array<FileAddition>>;
};

export type FileDeletion = {
  path: Scalars["String"];
};

export enum FileViewedState {
  Dismissed = "DISMISSED",
  Viewed = "VIEWED",
  Unviewed = "UNVIEWED",
}

export type FollowOrganizationInput = {
  organizationId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type FollowOrganizationPayload = {
  __typename?: "FollowOrganizationPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  organization?: Maybe<Organization>;
};

export type FollowUserInput = {
  userId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type FollowUserPayload = {
  __typename?: "FollowUserPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export type FollowerConnection = {
  __typename?: "FollowerConnection";
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type FollowingConnection = {
  __typename?: "FollowingConnection";
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type FundingLink = {
  __typename?: "FundingLink";
  platform: FundingPlatform;
  url: Scalars["URI"];
};

export enum FundingPlatform {
  Github = "GITHUB",
  Patreon = "PATREON",
  OpenCollective = "OPEN_COLLECTIVE",
  KoFi = "KO_FI",
  Tidelift = "TIDELIFT",
  CommunityBridge = "COMMUNITY_BRIDGE",
  Liberapay = "LIBERAPAY",
  Issuehunt = "ISSUEHUNT",
  Otechie = "OTECHIE",
  LfxCrowdfunding = "LFX_CROWDFUNDING",
  Custom = "CUSTOM",
}

export type GenericHovercardContext = HovercardContext & {
  __typename?: "GenericHovercardContext";
  message: Scalars["String"];
  octicon: Scalars["String"];
};

export type Gist = Node &
  Starrable &
  UniformResourceLocatable & {
    __typename?: "Gist";
    comments: GistCommentConnection;
    createdAt: Scalars["DateTime"];
    description?: Maybe<Scalars["String"]>;
    files?: Maybe<Array<Maybe<GistFile>>>;
    forks: GistConnection;
    id: Scalars["ID"];
    isFork: Scalars["Boolean"];
    isPublic: Scalars["Boolean"];
    name: Scalars["String"];
    owner?: Maybe<RepositoryOwner>;
    pushedAt?: Maybe<Scalars["DateTime"]>;
    resourcePath: Scalars["URI"];
    stargazerCount: Scalars["Int"];
    stargazers: StargazerConnection;
    updatedAt: Scalars["DateTime"];
    url: Scalars["URI"];
    viewerHasStarred: Scalars["Boolean"];
  };

export type GistCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type GistFilesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  oid?: InputMaybe<Scalars["GitObjectID"]>;
};

export type GistForksArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<GistOrder>;
};

export type GistStargazersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<StarOrder>;
};

export type GistComment = Node &
  Comment &
  Deletable &
  Minimizable &
  Updatable &
  UpdatableComment & {
    __typename?: "GistComment";
    author?: Maybe<Actor>;
    authorAssociation: CommentAuthorAssociation;
    body: Scalars["String"];
    bodyHTML: Scalars["HTML"];
    bodyText: Scalars["String"];
    createdAt: Scalars["DateTime"];
    createdViaEmail: Scalars["Boolean"];
    databaseId?: Maybe<Scalars["Int"]>;
    editor?: Maybe<Actor>;
    gist: Gist;
    id: Scalars["ID"];
    includesCreatedEdit: Scalars["Boolean"];
    isMinimized: Scalars["Boolean"];
    lastEditedAt?: Maybe<Scalars["DateTime"]>;
    minimizedReason?: Maybe<Scalars["String"]>;
    publishedAt?: Maybe<Scalars["DateTime"]>;
    updatedAt: Scalars["DateTime"];
    userContentEdits?: Maybe<UserContentEditConnection>;
    viewerCanDelete: Scalars["Boolean"];
    viewerCanMinimize: Scalars["Boolean"];
    viewerCanUpdate: Scalars["Boolean"];
    viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
    viewerDidAuthor: Scalars["Boolean"];
  };

export type GistCommentUserContentEditsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type GistCommentConnection = {
  __typename?: "GistCommentConnection";
  edges?: Maybe<Array<Maybe<GistCommentEdge>>>;
  nodes?: Maybe<Array<Maybe<GistComment>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type GistCommentEdge = {
  __typename?: "GistCommentEdge";
  cursor: Scalars["String"];
  node?: Maybe<GistComment>;
};

export type GistConnection = {
  __typename?: "GistConnection";
  edges?: Maybe<Array<Maybe<GistEdge>>>;
  nodes?: Maybe<Array<Maybe<Gist>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type GistEdge = {
  __typename?: "GistEdge";
  cursor: Scalars["String"];
  node?: Maybe<Gist>;
};

export type GistFile = {
  __typename?: "GistFile";
  encodedName?: Maybe<Scalars["String"]>;
  encoding?: Maybe<Scalars["String"]>;
  extension?: Maybe<Scalars["String"]>;
  isImage: Scalars["Boolean"];
  isTruncated: Scalars["Boolean"];
  language?: Maybe<Language>;
  name?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Int"]>;
  text?: Maybe<Scalars["String"]>;
};

export type GistFileTextArgs = {
  truncate?: InputMaybe<Scalars["Int"]>;
};

export type GistOrder = {
  field: GistOrderField;
  direction: OrderDirection;
};

export enum GistOrderField {
  CreatedAt = "CREATED_AT",
  UpdatedAt = "UPDATED_AT",
  PushedAt = "PUSHED_AT",
}

export enum GistPrivacy {
  Public = "PUBLIC",
  Secret = "SECRET",
  All = "ALL",
}

export type GitActor = {
  __typename?: "GitActor";
  avatarUrl: Scalars["URI"];
  date?: Maybe<Scalars["GitTimestamp"]>;
  email?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export type GitActorAvatarUrlArgs = {
  size?: InputMaybe<Scalars["Int"]>;
};

export type GitActorConnection = {
  __typename?: "GitActorConnection";
  edges?: Maybe<Array<Maybe<GitActorEdge>>>;
  nodes?: Maybe<Array<Maybe<GitActor>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type GitActorEdge = {
  __typename?: "GitActorEdge";
  cursor: Scalars["String"];
  node?: Maybe<GitActor>;
};

export type GitHubMetadata = {
  __typename?: "GitHubMetadata";
  gitHubServicesSha: Scalars["GitObjectID"];
  gitIpAddresses?: Maybe<Array<Scalars["String"]>>;
  hookIpAddresses?: Maybe<Array<Scalars["String"]>>;
  importerIpAddresses?: Maybe<Array<Scalars["String"]>>;
  isPasswordAuthenticationVerifiable: Scalars["Boolean"];
  pagesIpAddresses?: Maybe<Array<Scalars["String"]>>;
};

export type GitObject = {
  abbreviatedOid: Scalars["String"];
  commitResourcePath: Scalars["URI"];
  commitUrl: Scalars["URI"];
  id: Scalars["ID"];
  oid: Scalars["GitObjectID"];
  repository: Repository;
};

export type GitSignature = {
  email: Scalars["String"];
  isValid: Scalars["Boolean"];
  payload: Scalars["String"];
  signature: Scalars["String"];
  signer?: Maybe<User>;
  state: GitSignatureState;
  wasSignedByGitHub: Scalars["Boolean"];
};

export enum GitSignatureState {
  Valid = "VALID",
  Invalid = "INVALID",
  MalformedSig = "MALFORMED_SIG",
  UnknownKey = "UNKNOWN_KEY",
  BadEmail = "BAD_EMAIL",
  UnverifiedEmail = "UNVERIFIED_EMAIL",
  NoUser = "NO_USER",
  UnknownSigType = "UNKNOWN_SIG_TYPE",
  Unsigned = "UNSIGNED",
  GpgverifyUnavailable = "GPGVERIFY_UNAVAILABLE",
  GpgverifyError = "GPGVERIFY_ERROR",
  NotSigningKey = "NOT_SIGNING_KEY",
  ExpiredKey = "EXPIRED_KEY",
  OcspPending = "OCSP_PENDING",
  OcspError = "OCSP_ERROR",
  BadCert = "BAD_CERT",
  OcspRevoked = "OCSP_REVOKED",
}

export type GpgSignature = GitSignature & {
  __typename?: "GpgSignature";
  email: Scalars["String"];
  isValid: Scalars["Boolean"];
  keyId?: Maybe<Scalars["String"]>;
  payload: Scalars["String"];
  signature: Scalars["String"];
  signer?: Maybe<User>;
  state: GitSignatureState;
  wasSignedByGitHub: Scalars["Boolean"];
};

export type GrantEnterpriseOrganizationsMigratorRoleInput = {
  enterpriseId: Scalars["ID"];
  login: Scalars["String"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type GrantEnterpriseOrganizationsMigratorRolePayload = {
  __typename?: "GrantEnterpriseOrganizationsMigratorRolePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  organizations?: Maybe<OrganizationConnection>;
};

export type GrantEnterpriseOrganizationsMigratorRolePayloadOrganizationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type GrantMigratorRoleInput = {
  organizationId: Scalars["ID"];
  actor: Scalars["String"];
  actorType: ActorType;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type GrantMigratorRolePayload = {
  __typename?: "GrantMigratorRolePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  success?: Maybe<Scalars["Boolean"]>;
};

export type HeadRefDeletedEvent = Node & {
  __typename?: "HeadRefDeletedEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  headRef?: Maybe<Ref>;
  headRefName: Scalars["String"];
  id: Scalars["ID"];
  pullRequest: PullRequest;
};

export type HeadRefForcePushedEvent = Node & {
  __typename?: "HeadRefForcePushedEvent";
  actor?: Maybe<Actor>;
  afterCommit?: Maybe<Commit>;
  beforeCommit?: Maybe<Commit>;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  pullRequest: PullRequest;
  ref?: Maybe<Ref>;
};

export type HeadRefRestoredEvent = Node & {
  __typename?: "HeadRefRestoredEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  pullRequest: PullRequest;
};

export type Hovercard = {
  __typename?: "Hovercard";
  contexts: Array<HovercardContext>;
};

export type HovercardContext = {
  message: Scalars["String"];
  octicon: Scalars["String"];
};

export enum IdentityProviderConfigurationState {
  Enforced = "ENFORCED",
  Configured = "CONFIGURED",
  Unconfigured = "UNCONFIGURED",
}

export type InviteEnterpriseAdminInput = {
  enterpriseId: Scalars["ID"];
  invitee?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<EnterpriseAdministratorRole>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type InviteEnterpriseAdminPayload = {
  __typename?: "InviteEnterpriseAdminPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  invitation?: Maybe<EnterpriseAdministratorInvitation>;
};

export enum IpAllowListEnabledSettingValue {
  Enabled = "ENABLED",
  Disabled = "DISABLED",
}

export type IpAllowListEntry = Node & {
  __typename?: "IpAllowListEntry";
  allowListValue: Scalars["String"];
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  name?: Maybe<Scalars["String"]>;
  owner: IpAllowListOwner;
  updatedAt: Scalars["DateTime"];
};

export type IpAllowListEntryConnection = {
  __typename?: "IpAllowListEntryConnection";
  edges?: Maybe<Array<Maybe<IpAllowListEntryEdge>>>;
  nodes?: Maybe<Array<Maybe<IpAllowListEntry>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type IpAllowListEntryEdge = {
  __typename?: "IpAllowListEntryEdge";
  cursor: Scalars["String"];
  node?: Maybe<IpAllowListEntry>;
};

export type IpAllowListEntryOrder = {
  field: IpAllowListEntryOrderField;
  direction: OrderDirection;
};

export enum IpAllowListEntryOrderField {
  CreatedAt = "CREATED_AT",
  AllowListValue = "ALLOW_LIST_VALUE",
}

export enum IpAllowListForInstalledAppsEnabledSettingValue {
  Enabled = "ENABLED",
  Disabled = "DISABLED",
}

export type IpAllowListOwner = App | Enterprise | Organization;

export type Issue = Node &
  Assignable &
  Closable &
  Comment &
  Updatable &
  UpdatableComment &
  Labelable &
  Lockable &
  Reactable &
  RepositoryNode &
  Subscribable &
  UniformResourceLocatable &
  ProjectV2Owner & {
    __typename?: "Issue";
    activeLockReason?: Maybe<LockReason>;
    assignees: UserConnection;
    author?: Maybe<Actor>;
    authorAssociation: CommentAuthorAssociation;
    body: Scalars["String"];
    bodyHTML: Scalars["HTML"];
    bodyResourcePath: Scalars["URI"];
    bodyText: Scalars["String"];
    bodyUrl: Scalars["URI"];
    closed: Scalars["Boolean"];
    closedAt?: Maybe<Scalars["DateTime"]>;
    comments: IssueCommentConnection;
    createdAt: Scalars["DateTime"];
    createdViaEmail: Scalars["Boolean"];
    databaseId?: Maybe<Scalars["Int"]>;
    editor?: Maybe<Actor>;
    fullDatabaseId?: Maybe<Scalars["BigInt"]>;
    hovercard: Hovercard;
    id: Scalars["ID"];
    includesCreatedEdit: Scalars["Boolean"];
    isPinned?: Maybe<Scalars["Boolean"]>;
    isReadByViewer?: Maybe<Scalars["Boolean"]>;
    labels?: Maybe<LabelConnection>;
    lastEditedAt?: Maybe<Scalars["DateTime"]>;
    linkedBranches: LinkedBranchConnection;
    locked: Scalars["Boolean"];
    milestone?: Maybe<Milestone>;
    number: Scalars["Int"];
    participants: UserConnection;
    projectCards: ProjectCardConnection;
    projectItems: ProjectV2ItemConnection;
    projectV2?: Maybe<ProjectV2>;
    projectsV2: ProjectV2Connection;
    publishedAt?: Maybe<Scalars["DateTime"]>;
    reactionGroups?: Maybe<Array<ReactionGroup>>;
    reactions: ReactionConnection;
    repository: Repository;
    resourcePath: Scalars["URI"];
    state: IssueState;
    stateReason?: Maybe<IssueStateReason>;
    /** @deprecated `timeline` will be removed Use Issue.timelineItems instead. Removal on 2020-10-01 UTC. */
    timeline: IssueTimelineConnection;
    timelineItems: IssueTimelineItemsConnection;
    title: Scalars["String"];
    titleHTML: Scalars["String"];
    trackedInIssues: IssueConnection;
    trackedIssues: IssueConnection;
    trackedIssuesCount: Scalars["Int"];
    updatedAt: Scalars["DateTime"];
    url: Scalars["URI"];
    userContentEdits?: Maybe<UserContentEditConnection>;
    viewerCanClose: Scalars["Boolean"];
    viewerCanReact: Scalars["Boolean"];
    viewerCanReopen: Scalars["Boolean"];
    viewerCanSubscribe: Scalars["Boolean"];
    viewerCanUpdate: Scalars["Boolean"];
    viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
    viewerDidAuthor: Scalars["Boolean"];
    viewerSubscription?: Maybe<SubscriptionState>;
  };

export type IssueAssigneesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type IssueCommentsArgs = {
  orderBy?: InputMaybe<IssueCommentOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type IssueHovercardArgs = {
  includeNotificationContexts?: InputMaybe<Scalars["Boolean"]>;
};

export type IssueLabelsArgs = {
  orderBy?: InputMaybe<LabelOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type IssueLinkedBranchesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type IssueParticipantsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type IssueProjectCardsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  archivedStates?: InputMaybe<Array<InputMaybe<ProjectCardArchivedState>>>;
};

export type IssueProjectItemsArgs = {
  includeArchived?: InputMaybe<Scalars["Boolean"]>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type IssueProjectV2Args = {
  number: Scalars["Int"];
};

export type IssueProjectsV2Args = {
  query?: InputMaybe<Scalars["String"]>;
  orderBy?: InputMaybe<ProjectV2Order>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type IssueReactionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  content?: InputMaybe<ReactionContent>;
  orderBy?: InputMaybe<ReactionOrder>;
};

export type IssueTimelineArgs = {
  since?: InputMaybe<Scalars["DateTime"]>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type IssueTimelineItemsArgs = {
  since?: InputMaybe<Scalars["DateTime"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  itemTypes?: InputMaybe<Array<IssueTimelineItemsItemType>>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type IssueTrackedInIssuesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type IssueTrackedIssuesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type IssueTrackedIssuesCountArgs = {
  states?: InputMaybe<Array<InputMaybe<TrackedIssueStates>>>;
};

export type IssueUserContentEditsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export enum IssueClosedStateReason {
  Completed = "COMPLETED",
  NotPlanned = "NOT_PLANNED",
}

export type IssueComment = Node &
  Comment &
  Deletable &
  Minimizable &
  Updatable &
  UpdatableComment &
  Reactable &
  RepositoryNode & {
    __typename?: "IssueComment";
    author?: Maybe<Actor>;
    authorAssociation: CommentAuthorAssociation;
    body: Scalars["String"];
    bodyHTML: Scalars["HTML"];
    bodyText: Scalars["String"];
    createdAt: Scalars["DateTime"];
    createdViaEmail: Scalars["Boolean"];
    databaseId?: Maybe<Scalars["Int"]>;
    editor?: Maybe<Actor>;
    fullDatabaseId?: Maybe<Scalars["BigInt"]>;
    id: Scalars["ID"];
    includesCreatedEdit: Scalars["Boolean"];
    isMinimized: Scalars["Boolean"];
    issue: Issue;
    lastEditedAt?: Maybe<Scalars["DateTime"]>;
    minimizedReason?: Maybe<Scalars["String"]>;
    publishedAt?: Maybe<Scalars["DateTime"]>;
    pullRequest?: Maybe<PullRequest>;
    reactionGroups?: Maybe<Array<ReactionGroup>>;
    reactions: ReactionConnection;
    repository: Repository;
    resourcePath: Scalars["URI"];
    updatedAt: Scalars["DateTime"];
    url: Scalars["URI"];
    userContentEdits?: Maybe<UserContentEditConnection>;
    viewerCanDelete: Scalars["Boolean"];
    viewerCanMinimize: Scalars["Boolean"];
    viewerCanReact: Scalars["Boolean"];
    viewerCanUpdate: Scalars["Boolean"];
    viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
    viewerDidAuthor: Scalars["Boolean"];
  };

export type IssueCommentReactionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  content?: InputMaybe<ReactionContent>;
  orderBy?: InputMaybe<ReactionOrder>;
};

export type IssueCommentUserContentEditsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type IssueCommentConnection = {
  __typename?: "IssueCommentConnection";
  edges?: Maybe<Array<Maybe<IssueCommentEdge>>>;
  nodes?: Maybe<Array<Maybe<IssueComment>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type IssueCommentEdge = {
  __typename?: "IssueCommentEdge";
  cursor: Scalars["String"];
  node?: Maybe<IssueComment>;
};

export type IssueCommentOrder = {
  field: IssueCommentOrderField;
  direction: OrderDirection;
};

export enum IssueCommentOrderField {
  UpdatedAt = "UPDATED_AT",
}

export type IssueConnection = {
  __typename?: "IssueConnection";
  edges?: Maybe<Array<Maybe<IssueEdge>>>;
  nodes?: Maybe<Array<Maybe<Issue>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type IssueContributionsByRepository = {
  __typename?: "IssueContributionsByRepository";
  contributions: CreatedIssueContributionConnection;
  repository: Repository;
};

export type IssueContributionsByRepositoryContributionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ContributionOrder>;
};

export type IssueEdge = {
  __typename?: "IssueEdge";
  cursor: Scalars["String"];
  node?: Maybe<Issue>;
};

export type IssueFilters = {
  assignee?: InputMaybe<Scalars["String"]>;
  createdBy?: InputMaybe<Scalars["String"]>;
  labels?: InputMaybe<Array<Scalars["String"]>>;
  mentioned?: InputMaybe<Scalars["String"]>;
  milestone?: InputMaybe<Scalars["String"]>;
  milestoneNumber?: InputMaybe<Scalars["String"]>;
  since?: InputMaybe<Scalars["DateTime"]>;
  states?: InputMaybe<Array<IssueState>>;
  viewerSubscribed?: InputMaybe<Scalars["Boolean"]>;
};

export type IssueOrPullRequest = Issue | PullRequest;

export type IssueOrder = {
  field: IssueOrderField;
  direction: OrderDirection;
};

export enum IssueOrderField {
  CreatedAt = "CREATED_AT",
  UpdatedAt = "UPDATED_AT",
  Comments = "COMMENTS",
}

export enum IssueState {
  Open = "OPEN",
  Closed = "CLOSED",
}

export enum IssueStateReason {
  Reopened = "REOPENED",
  NotPlanned = "NOT_PLANNED",
  Completed = "COMPLETED",
}

export type IssueTemplate = {
  __typename?: "IssueTemplate";
  about?: Maybe<Scalars["String"]>;
  body?: Maybe<Scalars["String"]>;
  filename: Scalars["String"];
  name: Scalars["String"];
  title?: Maybe<Scalars["String"]>;
};

export type IssueTimelineConnection = {
  __typename?: "IssueTimelineConnection";
  edges?: Maybe<Array<Maybe<IssueTimelineItemEdge>>>;
  nodes?: Maybe<Array<Maybe<IssueTimelineItem>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type IssueTimelineItem =
  | AssignedEvent
  | ClosedEvent
  | Commit
  | CrossReferencedEvent
  | DemilestonedEvent
  | IssueComment
  | LabeledEvent
  | LockedEvent
  | MilestonedEvent
  | ReferencedEvent
  | RenamedTitleEvent
  | ReopenedEvent
  | SubscribedEvent
  | TransferredEvent
  | UnassignedEvent
  | UnlabeledEvent
  | UnlockedEvent
  | UnsubscribedEvent
  | UserBlockedEvent;

export type IssueTimelineItemEdge = {
  __typename?: "IssueTimelineItemEdge";
  cursor: Scalars["String"];
  node?: Maybe<IssueTimelineItem>;
};

export type IssueTimelineItems =
  | AddedToProjectEvent
  | AssignedEvent
  | ClosedEvent
  | CommentDeletedEvent
  | ConnectedEvent
  | ConvertedNoteToIssueEvent
  | ConvertedToDiscussionEvent
  | CrossReferencedEvent
  | DemilestonedEvent
  | DisconnectedEvent
  | IssueComment
  | LabeledEvent
  | LockedEvent
  | MarkedAsDuplicateEvent
  | MentionedEvent
  | MilestonedEvent
  | MovedColumnsInProjectEvent
  | PinnedEvent
  | ReferencedEvent
  | RemovedFromProjectEvent
  | RenamedTitleEvent
  | ReopenedEvent
  | SubscribedEvent
  | TransferredEvent
  | UnassignedEvent
  | UnlabeledEvent
  | UnlockedEvent
  | UnmarkedAsDuplicateEvent
  | UnpinnedEvent
  | UnsubscribedEvent
  | UserBlockedEvent;

export type IssueTimelineItemsConnection = {
  __typename?: "IssueTimelineItemsConnection";
  edges?: Maybe<Array<Maybe<IssueTimelineItemsEdge>>>;
  filteredCount: Scalars["Int"];
  nodes?: Maybe<Array<Maybe<IssueTimelineItems>>>;
  pageCount: Scalars["Int"];
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
  updatedAt: Scalars["DateTime"];
};

export type IssueTimelineItemsEdge = {
  __typename?: "IssueTimelineItemsEdge";
  cursor: Scalars["String"];
  node?: Maybe<IssueTimelineItems>;
};

export enum IssueTimelineItemsItemType {
  IssueComment = "ISSUE_COMMENT",
  CrossReferencedEvent = "CROSS_REFERENCED_EVENT",
  AddedToProjectEvent = "ADDED_TO_PROJECT_EVENT",
  AssignedEvent = "ASSIGNED_EVENT",
  ClosedEvent = "CLOSED_EVENT",
  CommentDeletedEvent = "COMMENT_DELETED_EVENT",
  ConnectedEvent = "CONNECTED_EVENT",
  ConvertedNoteToIssueEvent = "CONVERTED_NOTE_TO_ISSUE_EVENT",
  ConvertedToDiscussionEvent = "CONVERTED_TO_DISCUSSION_EVENT",
  DemilestonedEvent = "DEMILESTONED_EVENT",
  DisconnectedEvent = "DISCONNECTED_EVENT",
  LabeledEvent = "LABELED_EVENT",
  LockedEvent = "LOCKED_EVENT",
  MarkedAsDuplicateEvent = "MARKED_AS_DUPLICATE_EVENT",
  MentionedEvent = "MENTIONED_EVENT",
  MilestonedEvent = "MILESTONED_EVENT",
  MovedColumnsInProjectEvent = "MOVED_COLUMNS_IN_PROJECT_EVENT",
  PinnedEvent = "PINNED_EVENT",
  ReferencedEvent = "REFERENCED_EVENT",
  RemovedFromProjectEvent = "REMOVED_FROM_PROJECT_EVENT",
  RenamedTitleEvent = "RENAMED_TITLE_EVENT",
  ReopenedEvent = "REOPENED_EVENT",
  SubscribedEvent = "SUBSCRIBED_EVENT",
  TransferredEvent = "TRANSFERRED_EVENT",
  UnassignedEvent = "UNASSIGNED_EVENT",
  UnlabeledEvent = "UNLABELED_EVENT",
  UnlockedEvent = "UNLOCKED_EVENT",
  UserBlockedEvent = "USER_BLOCKED_EVENT",
  UnmarkedAsDuplicateEvent = "UNMARKED_AS_DUPLICATE_EVENT",
  UnpinnedEvent = "UNPINNED_EVENT",
  UnsubscribedEvent = "UNSUBSCRIBED_EVENT",
}

export type JoinedGitHubContribution = Contribution & {
  __typename?: "JoinedGitHubContribution";
  isRestricted: Scalars["Boolean"];
  occurredAt: Scalars["DateTime"];
  resourcePath: Scalars["URI"];
  url: Scalars["URI"];
  user: User;
};

export type Label = Node & {
  __typename?: "Label";
  color: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isDefault: Scalars["Boolean"];
  issues: IssueConnection;
  name: Scalars["String"];
  pullRequests: PullRequestConnection;
  repository: Repository;
  resourcePath: Scalars["URI"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  url: Scalars["URI"];
};

export type LabelIssuesArgs = {
  orderBy?: InputMaybe<IssueOrder>;
  labels?: InputMaybe<Array<Scalars["String"]>>;
  states?: InputMaybe<Array<IssueState>>;
  filterBy?: InputMaybe<IssueFilters>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type LabelPullRequestsArgs = {
  states?: InputMaybe<Array<PullRequestState>>;
  labels?: InputMaybe<Array<Scalars["String"]>>;
  headRefName?: InputMaybe<Scalars["String"]>;
  baseRefName?: InputMaybe<Scalars["String"]>;
  orderBy?: InputMaybe<IssueOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type LabelConnection = {
  __typename?: "LabelConnection";
  edges?: Maybe<Array<Maybe<LabelEdge>>>;
  nodes?: Maybe<Array<Maybe<Label>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type LabelEdge = {
  __typename?: "LabelEdge";
  cursor: Scalars["String"];
  node?: Maybe<Label>;
};

export type LabelOrder = {
  field: LabelOrderField;
  direction: OrderDirection;
};

export enum LabelOrderField {
  Name = "NAME",
  CreatedAt = "CREATED_AT",
}

export type Labelable = {
  labels?: Maybe<LabelConnection>;
};

export type LabelableLabelsArgs = {
  orderBy?: InputMaybe<LabelOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type LabeledEvent = Node & {
  __typename?: "LabeledEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  label: Label;
  labelable: Labelable;
};

export type Language = Node & {
  __typename?: "Language";
  color?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type LanguageConnection = {
  __typename?: "LanguageConnection";
  edges?: Maybe<Array<Maybe<LanguageEdge>>>;
  nodes?: Maybe<Array<Maybe<Language>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
  totalSize: Scalars["Int"];
};

export type LanguageEdge = {
  __typename?: "LanguageEdge";
  cursor: Scalars["String"];
  node: Language;
  size: Scalars["Int"];
};

export type LanguageOrder = {
  field: LanguageOrderField;
  direction: OrderDirection;
};

export enum LanguageOrderField {
  Size = "SIZE",
}

export type License = Node & {
  __typename?: "License";
  body: Scalars["String"];
  conditions: Array<Maybe<LicenseRule>>;
  description?: Maybe<Scalars["String"]>;
  featured: Scalars["Boolean"];
  hidden: Scalars["Boolean"];
  id: Scalars["ID"];
  implementation?: Maybe<Scalars["String"]>;
  key: Scalars["String"];
  limitations: Array<Maybe<LicenseRule>>;
  name: Scalars["String"];
  nickname?: Maybe<Scalars["String"]>;
  permissions: Array<Maybe<LicenseRule>>;
  pseudoLicense: Scalars["Boolean"];
  spdxId?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["URI"]>;
};

export type LicenseRule = {
  __typename?: "LicenseRule";
  description: Scalars["String"];
  key: Scalars["String"];
  label: Scalars["String"];
};

export type LinkProjectV2ToRepositoryInput = {
  projectId: Scalars["ID"];
  repositoryId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type LinkProjectV2ToRepositoryPayload = {
  __typename?: "LinkProjectV2ToRepositoryPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  repository?: Maybe<Repository>;
};

export type LinkProjectV2ToTeamInput = {
  projectId: Scalars["ID"];
  teamId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type LinkProjectV2ToTeamPayload = {
  __typename?: "LinkProjectV2ToTeamPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  team?: Maybe<Team>;
};

export type LinkRepositoryToProjectInput = {
  projectId: Scalars["ID"];
  repositoryId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type LinkRepositoryToProjectPayload = {
  __typename?: "LinkRepositoryToProjectPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  project?: Maybe<Project>;
  repository?: Maybe<Repository>;
};

export type LinkedBranch = Node & {
  __typename?: "LinkedBranch";
  id: Scalars["ID"];
  ref?: Maybe<Ref>;
};

export type LinkedBranchConnection = {
  __typename?: "LinkedBranchConnection";
  edges?: Maybe<Array<Maybe<LinkedBranchEdge>>>;
  nodes?: Maybe<Array<Maybe<LinkedBranch>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type LinkedBranchEdge = {
  __typename?: "LinkedBranchEdge";
  cursor: Scalars["String"];
  node?: Maybe<LinkedBranch>;
};

export type LockLockableInput = {
  lockableId: Scalars["ID"];
  lockReason?: InputMaybe<LockReason>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type LockLockablePayload = {
  __typename?: "LockLockablePayload";
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<Scalars["String"]>;
  lockedRecord?: Maybe<Lockable>;
};

export enum LockReason {
  OffTopic = "OFF_TOPIC",
  TooHeated = "TOO_HEATED",
  Resolved = "RESOLVED",
  Spam = "SPAM",
}

export type Lockable = {
  activeLockReason?: Maybe<LockReason>;
  locked: Scalars["Boolean"];
};

export type LockedEvent = Node & {
  __typename?: "LockedEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  lockReason?: Maybe<LockReason>;
  lockable: Lockable;
};

export type Mannequin = Node &
  Actor &
  UniformResourceLocatable & {
    __typename?: "Mannequin";
    avatarUrl: Scalars["URI"];
    claimant?: Maybe<User>;
    createdAt: Scalars["DateTime"];
    databaseId?: Maybe<Scalars["Int"]>;
    email?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    login: Scalars["String"];
    resourcePath: Scalars["URI"];
    updatedAt: Scalars["DateTime"];
    url: Scalars["URI"];
  };

export type MannequinAvatarUrlArgs = {
  size?: InputMaybe<Scalars["Int"]>;
};

export type MannequinConnection = {
  __typename?: "MannequinConnection";
  edges?: Maybe<Array<Maybe<MannequinEdge>>>;
  nodes?: Maybe<Array<Maybe<Mannequin>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type MannequinEdge = {
  __typename?: "MannequinEdge";
  cursor: Scalars["String"];
  node?: Maybe<Mannequin>;
};

export type MannequinOrder = {
  field: MannequinOrderField;
  direction: OrderDirection;
};

export enum MannequinOrderField {
  Login = "LOGIN",
  CreatedAt = "CREATED_AT",
}

export type MarkDiscussionCommentAsAnswerInput = {
  id: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type MarkDiscussionCommentAsAnswerPayload = {
  __typename?: "MarkDiscussionCommentAsAnswerPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  discussion?: Maybe<Discussion>;
};

export type MarkFileAsViewedInput = {
  pullRequestId: Scalars["ID"];
  path: Scalars["String"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type MarkFileAsViewedPayload = {
  __typename?: "MarkFileAsViewedPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  pullRequest?: Maybe<PullRequest>;
};

export type MarkPullRequestReadyForReviewInput = {
  pullRequestId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type MarkPullRequestReadyForReviewPayload = {
  __typename?: "MarkPullRequestReadyForReviewPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  pullRequest?: Maybe<PullRequest>;
};

export type MarkedAsDuplicateEvent = Node & {
  __typename?: "MarkedAsDuplicateEvent";
  actor?: Maybe<Actor>;
  canonical?: Maybe<IssueOrPullRequest>;
  createdAt: Scalars["DateTime"];
  duplicate?: Maybe<IssueOrPullRequest>;
  id: Scalars["ID"];
  isCrossRepository: Scalars["Boolean"];
};

export type MarketplaceCategory = Node & {
  __typename?: "MarketplaceCategory";
  description?: Maybe<Scalars["String"]>;
  howItWorks?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  primaryListingCount: Scalars["Int"];
  resourcePath: Scalars["URI"];
  secondaryListingCount: Scalars["Int"];
  slug: Scalars["String"];
  url: Scalars["URI"];
};

export type MarketplaceListing = Node & {
  __typename?: "MarketplaceListing";
  app?: Maybe<App>;
  companyUrl?: Maybe<Scalars["URI"]>;
  configurationResourcePath: Scalars["URI"];
  configurationUrl: Scalars["URI"];
  documentationUrl?: Maybe<Scalars["URI"]>;
  extendedDescription?: Maybe<Scalars["String"]>;
  extendedDescriptionHTML: Scalars["HTML"];
  fullDescription: Scalars["String"];
  fullDescriptionHTML: Scalars["HTML"];
  hasPublishedFreeTrialPlans: Scalars["Boolean"];
  hasTermsOfService: Scalars["Boolean"];
  hasVerifiedOwner: Scalars["Boolean"];
  howItWorks?: Maybe<Scalars["String"]>;
  howItWorksHTML: Scalars["HTML"];
  id: Scalars["ID"];
  installationUrl?: Maybe<Scalars["URI"]>;
  installedForViewer: Scalars["Boolean"];
  isArchived: Scalars["Boolean"];
  isDraft: Scalars["Boolean"];
  isPaid: Scalars["Boolean"];
  isPublic: Scalars["Boolean"];
  isRejected: Scalars["Boolean"];
  isUnverified: Scalars["Boolean"];
  isUnverifiedPending: Scalars["Boolean"];
  isVerificationPendingFromDraft: Scalars["Boolean"];
  isVerificationPendingFromUnverified: Scalars["Boolean"];
  isVerified: Scalars["Boolean"];
  logoBackgroundColor: Scalars["String"];
  logoUrl?: Maybe<Scalars["URI"]>;
  name: Scalars["String"];
  normalizedShortDescription: Scalars["String"];
  pricingUrl?: Maybe<Scalars["URI"]>;
  primaryCategory: MarketplaceCategory;
  privacyPolicyUrl: Scalars["URI"];
  resourcePath: Scalars["URI"];
  screenshotUrls: Array<Maybe<Scalars["String"]>>;
  secondaryCategory?: Maybe<MarketplaceCategory>;
  shortDescription: Scalars["String"];
  slug: Scalars["String"];
  statusUrl?: Maybe<Scalars["URI"]>;
  supportEmail?: Maybe<Scalars["String"]>;
  supportUrl: Scalars["URI"];
  termsOfServiceUrl?: Maybe<Scalars["URI"]>;
  url: Scalars["URI"];
  viewerCanAddPlans: Scalars["Boolean"];
  viewerCanApprove: Scalars["Boolean"];
  viewerCanDelist: Scalars["Boolean"];
  viewerCanEdit: Scalars["Boolean"];
  viewerCanEditCategories: Scalars["Boolean"];
  viewerCanEditPlans: Scalars["Boolean"];
  viewerCanRedraft: Scalars["Boolean"];
  viewerCanReject: Scalars["Boolean"];
  viewerCanRequestApproval: Scalars["Boolean"];
  viewerHasPurchased: Scalars["Boolean"];
  viewerHasPurchasedForAllOrganizations: Scalars["Boolean"];
  viewerIsListingAdmin: Scalars["Boolean"];
};

export type MarketplaceListingLogoUrlArgs = {
  size?: InputMaybe<Scalars["Int"]>;
};

export type MarketplaceListingConnection = {
  __typename?: "MarketplaceListingConnection";
  edges?: Maybe<Array<Maybe<MarketplaceListingEdge>>>;
  nodes?: Maybe<Array<Maybe<MarketplaceListing>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type MarketplaceListingEdge = {
  __typename?: "MarketplaceListingEdge";
  cursor: Scalars["String"];
  node?: Maybe<MarketplaceListing>;
};

export type MemberStatusable = {
  memberStatuses: UserStatusConnection;
};

export type MemberStatusableMemberStatusesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UserStatusOrder>;
};

export type MembersCanDeleteReposClearAuditEntry = Node &
  AuditEntry &
  EnterpriseAuditEntryData &
  OrganizationAuditEntryData & {
    __typename?: "MembersCanDeleteReposClearAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    enterpriseResourcePath?: Maybe<Scalars["URI"]>;
    enterpriseSlug?: Maybe<Scalars["String"]>;
    enterpriseUrl?: Maybe<Scalars["URI"]>;
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type MembersCanDeleteReposDisableAuditEntry = Node &
  AuditEntry &
  EnterpriseAuditEntryData &
  OrganizationAuditEntryData & {
    __typename?: "MembersCanDeleteReposDisableAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    enterpriseResourcePath?: Maybe<Scalars["URI"]>;
    enterpriseSlug?: Maybe<Scalars["String"]>;
    enterpriseUrl?: Maybe<Scalars["URI"]>;
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type MembersCanDeleteReposEnableAuditEntry = Node &
  AuditEntry &
  EnterpriseAuditEntryData &
  OrganizationAuditEntryData & {
    __typename?: "MembersCanDeleteReposEnableAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    enterpriseResourcePath?: Maybe<Scalars["URI"]>;
    enterpriseSlug?: Maybe<Scalars["String"]>;
    enterpriseUrl?: Maybe<Scalars["URI"]>;
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type MentionedEvent = Node & {
  __typename?: "MentionedEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

export type MergeBranchInput = {
  repositoryId: Scalars["ID"];
  base: Scalars["String"];
  head: Scalars["String"];
  commitMessage?: InputMaybe<Scalars["String"]>;
  authorEmail?: InputMaybe<Scalars["String"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type MergeBranchPayload = {
  __typename?: "MergeBranchPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  mergeCommit?: Maybe<Commit>;
};

export enum MergeCommitMessage {
  PrTitle = "PR_TITLE",
  PrBody = "PR_BODY",
  Blank = "BLANK",
}

export enum MergeCommitTitle {
  PrTitle = "PR_TITLE",
  MergeMessage = "MERGE_MESSAGE",
}

export type MergePullRequestInput = {
  pullRequestId: Scalars["ID"];
  commitHeadline?: InputMaybe<Scalars["String"]>;
  commitBody?: InputMaybe<Scalars["String"]>;
  expectedHeadOid?: InputMaybe<Scalars["GitObjectID"]>;
  mergeMethod?: InputMaybe<PullRequestMergeMethod>;
  authorEmail?: InputMaybe<Scalars["String"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type MergePullRequestPayload = {
  __typename?: "MergePullRequestPayload";
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<Scalars["String"]>;
  pullRequest?: Maybe<PullRequest>;
};

export type MergeQueue = Node & {
  __typename?: "MergeQueue";
  configuration?: Maybe<MergeQueueConfiguration>;
  entries?: Maybe<MergeQueueEntryConnection>;
  id: Scalars["ID"];
  nextEntryEstimatedTimeToMerge?: Maybe<Scalars["Int"]>;
  repository?: Maybe<Repository>;
  resourcePath: Scalars["URI"];
  url: Scalars["URI"];
};

export type MergeQueueEntriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type MergeQueueConfiguration = {
  __typename?: "MergeQueueConfiguration";
  checkResponseTimeout?: Maybe<Scalars["Int"]>;
  maximumEntriesToBuild?: Maybe<Scalars["Int"]>;
  maximumEntriesToMerge?: Maybe<Scalars["Int"]>;
  mergeMethod?: Maybe<PullRequestMergeMethod>;
  mergingStrategy?: Maybe<MergeQueueMergingStrategy>;
  minimumEntriesToMerge?: Maybe<Scalars["Int"]>;
  minimumEntriesToMergeWaitTime?: Maybe<Scalars["Int"]>;
};

export type MergeQueueEntry = Node & {
  __typename?: "MergeQueueEntry";
  baseCommit?: Maybe<Commit>;
  enqueuedAt: Scalars["DateTime"];
  enqueuer: Actor;
  estimatedTimeToMerge?: Maybe<Scalars["Int"]>;
  headCommit?: Maybe<Commit>;
  id: Scalars["ID"];
  jump: Scalars["Boolean"];
  mergeQueue?: Maybe<MergeQueue>;
  position: Scalars["Int"];
  pullRequest?: Maybe<PullRequest>;
  solo: Scalars["Boolean"];
  state: MergeQueueEntryState;
};

export type MergeQueueEntryConnection = {
  __typename?: "MergeQueueEntryConnection";
  edges?: Maybe<Array<Maybe<MergeQueueEntryEdge>>>;
  nodes?: Maybe<Array<Maybe<MergeQueueEntry>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type MergeQueueEntryEdge = {
  __typename?: "MergeQueueEntryEdge";
  cursor: Scalars["String"];
  node?: Maybe<MergeQueueEntry>;
};

export enum MergeQueueEntryState {
  Queued = "QUEUED",
  AwaitingChecks = "AWAITING_CHECKS",
  Mergeable = "MERGEABLE",
  Unmergeable = "UNMERGEABLE",
  Locked = "LOCKED",
}

export enum MergeQueueMergingStrategy {
  Allgreen = "ALLGREEN",
  Headgreen = "HEADGREEN",
}

export enum MergeableState {
  Mergeable = "MERGEABLE",
  Conflicting = "CONFLICTING",
  Unknown = "UNKNOWN",
}

export type MergedEvent = Node &
  UniformResourceLocatable & {
    __typename?: "MergedEvent";
    actor?: Maybe<Actor>;
    commit?: Maybe<Commit>;
    createdAt: Scalars["DateTime"];
    id: Scalars["ID"];
    mergeRef?: Maybe<Ref>;
    mergeRefName: Scalars["String"];
    pullRequest: PullRequest;
    resourcePath: Scalars["URI"];
    url: Scalars["URI"];
  };

export type Migration = {
  continueOnError: Scalars["Boolean"];
  createdAt: Scalars["DateTime"];
  databaseId?: Maybe<Scalars["String"]>;
  failureReason?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  migrationLogUrl?: Maybe<Scalars["URI"]>;
  migrationSource: MigrationSource;
  repositoryName: Scalars["String"];
  sourceUrl: Scalars["URI"];
  state: MigrationState;
};

export type MigrationSource = Node & {
  __typename?: "MigrationSource";
  id: Scalars["ID"];
  name: Scalars["String"];
  type: MigrationSourceType;
  url: Scalars["URI"];
};

export enum MigrationSourceType {
  AzureDevops = "AZURE_DEVOPS",
  BitbucketServer = "BITBUCKET_SERVER",
  GithubArchive = "GITHUB_ARCHIVE",
}

export enum MigrationState {
  NotStarted = "NOT_STARTED",
  Queued = "QUEUED",
  InProgress = "IN_PROGRESS",
  Succeeded = "SUCCEEDED",
  Failed = "FAILED",
  PendingValidation = "PENDING_VALIDATION",
  FailedValidation = "FAILED_VALIDATION",
}

export type Milestone = Node &
  Closable &
  UniformResourceLocatable & {
    __typename?: "Milestone";
    closed: Scalars["Boolean"];
    closedAt?: Maybe<Scalars["DateTime"]>;
    createdAt: Scalars["DateTime"];
    creator?: Maybe<Actor>;
    description?: Maybe<Scalars["String"]>;
    dueOn?: Maybe<Scalars["DateTime"]>;
    id: Scalars["ID"];
    issues: IssueConnection;
    number: Scalars["Int"];
    progressPercentage: Scalars["Float"];
    pullRequests: PullRequestConnection;
    repository: Repository;
    resourcePath: Scalars["URI"];
    state: MilestoneState;
    title: Scalars["String"];
    updatedAt: Scalars["DateTime"];
    url: Scalars["URI"];
    viewerCanClose: Scalars["Boolean"];
    viewerCanReopen: Scalars["Boolean"];
  };

export type MilestoneIssuesArgs = {
  orderBy?: InputMaybe<IssueOrder>;
  labels?: InputMaybe<Array<Scalars["String"]>>;
  states?: InputMaybe<Array<IssueState>>;
  filterBy?: InputMaybe<IssueFilters>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type MilestonePullRequestsArgs = {
  states?: InputMaybe<Array<PullRequestState>>;
  labels?: InputMaybe<Array<Scalars["String"]>>;
  headRefName?: InputMaybe<Scalars["String"]>;
  baseRefName?: InputMaybe<Scalars["String"]>;
  orderBy?: InputMaybe<IssueOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type MilestoneConnection = {
  __typename?: "MilestoneConnection";
  edges?: Maybe<Array<Maybe<MilestoneEdge>>>;
  nodes?: Maybe<Array<Maybe<Milestone>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type MilestoneEdge = {
  __typename?: "MilestoneEdge";
  cursor: Scalars["String"];
  node?: Maybe<Milestone>;
};

export type MilestoneItem = Issue | PullRequest;

export type MilestoneOrder = {
  field: MilestoneOrderField;
  direction: OrderDirection;
};

export enum MilestoneOrderField {
  DueDate = "DUE_DATE",
  CreatedAt = "CREATED_AT",
  UpdatedAt = "UPDATED_AT",
  Number = "NUMBER",
}

export enum MilestoneState {
  Open = "OPEN",
  Closed = "CLOSED",
}

export type MilestonedEvent = Node & {
  __typename?: "MilestonedEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  milestoneTitle: Scalars["String"];
  subject: MilestoneItem;
};

export type Minimizable = {
  isMinimized: Scalars["Boolean"];
  minimizedReason?: Maybe<Scalars["String"]>;
  viewerCanMinimize: Scalars["Boolean"];
};

export type MinimizeCommentInput = {
  subjectId: Scalars["ID"];
  classifier: ReportedContentClassifiers;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type MinimizeCommentPayload = {
  __typename?: "MinimizeCommentPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  minimizedComment?: Maybe<Minimizable>;
};

export type MoveProjectCardInput = {
  cardId: Scalars["ID"];
  columnId: Scalars["ID"];
  afterCardId?: InputMaybe<Scalars["ID"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type MoveProjectCardPayload = {
  __typename?: "MoveProjectCardPayload";
  cardEdge?: Maybe<ProjectCardEdge>;
  clientMutationId?: Maybe<Scalars["String"]>;
};

export type MoveProjectColumnInput = {
  columnId: Scalars["ID"];
  afterColumnId?: InputMaybe<Scalars["ID"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type MoveProjectColumnPayload = {
  __typename?: "MoveProjectColumnPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  columnEdge?: Maybe<ProjectColumnEdge>;
};

export type MovedColumnsInProjectEvent = Node & {
  __typename?: "MovedColumnsInProjectEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

export type Mutation = {
  __typename?: "Mutation";
  abortQueuedMigrations?: Maybe<AbortQueuedMigrationsPayload>;
  acceptEnterpriseAdministratorInvitation?: Maybe<AcceptEnterpriseAdministratorInvitationPayload>;
  acceptTopicSuggestion?: Maybe<AcceptTopicSuggestionPayload>;
  addAssigneesToAssignable?: Maybe<AddAssigneesToAssignablePayload>;
  addComment?: Maybe<AddCommentPayload>;
  addDiscussionComment?: Maybe<AddDiscussionCommentPayload>;
  addDiscussionPollVote?: Maybe<AddDiscussionPollVotePayload>;
  addEnterpriseOrganizationMember?: Maybe<AddEnterpriseOrganizationMemberPayload>;
  addEnterpriseSupportEntitlement?: Maybe<AddEnterpriseSupportEntitlementPayload>;
  addLabelsToLabelable?: Maybe<AddLabelsToLabelablePayload>;
  addProjectCard?: Maybe<AddProjectCardPayload>;
  addProjectColumn?: Maybe<AddProjectColumnPayload>;
  addProjectV2DraftIssue?: Maybe<AddProjectV2DraftIssuePayload>;
  addProjectV2ItemById?: Maybe<AddProjectV2ItemByIdPayload>;
  addPullRequestReview?: Maybe<AddPullRequestReviewPayload>;
  addPullRequestReviewComment?: Maybe<AddPullRequestReviewCommentPayload>;
  addPullRequestReviewThread?: Maybe<AddPullRequestReviewThreadPayload>;
  addReaction?: Maybe<AddReactionPayload>;
  addStar?: Maybe<AddStarPayload>;
  addUpvote?: Maybe<AddUpvotePayload>;
  addVerifiableDomain?: Maybe<AddVerifiableDomainPayload>;
  approveDeployments?: Maybe<ApproveDeploymentsPayload>;
  approveVerifiableDomain?: Maybe<ApproveVerifiableDomainPayload>;
  archiveProjectV2Item?: Maybe<ArchiveProjectV2ItemPayload>;
  archiveRepository?: Maybe<ArchiveRepositoryPayload>;
  cancelEnterpriseAdminInvitation?: Maybe<CancelEnterpriseAdminInvitationPayload>;
  cancelSponsorship?: Maybe<CancelSponsorshipPayload>;
  changeUserStatus?: Maybe<ChangeUserStatusPayload>;
  clearLabelsFromLabelable?: Maybe<ClearLabelsFromLabelablePayload>;
  clearProjectV2ItemFieldValue?: Maybe<ClearProjectV2ItemFieldValuePayload>;
  cloneProject?: Maybe<CloneProjectPayload>;
  cloneTemplateRepository?: Maybe<CloneTemplateRepositoryPayload>;
  closeDiscussion?: Maybe<CloseDiscussionPayload>;
  closeIssue?: Maybe<CloseIssuePayload>;
  closePullRequest?: Maybe<ClosePullRequestPayload>;
  convertProjectCardNoteToIssue?: Maybe<ConvertProjectCardNoteToIssuePayload>;
  convertPullRequestToDraft?: Maybe<ConvertPullRequestToDraftPayload>;
  copyProjectV2?: Maybe<CopyProjectV2Payload>;
  createAttributionInvitation?: Maybe<CreateAttributionInvitationPayload>;
  createBranchProtectionRule?: Maybe<CreateBranchProtectionRulePayload>;
  createCheckRun?: Maybe<CreateCheckRunPayload>;
  createCheckSuite?: Maybe<CreateCheckSuitePayload>;
  createCommitOnBranch?: Maybe<CreateCommitOnBranchPayload>;
  createDiscussion?: Maybe<CreateDiscussionPayload>;
  createEnterpriseOrganization?: Maybe<CreateEnterpriseOrganizationPayload>;
  createEnvironment?: Maybe<CreateEnvironmentPayload>;
  createIpAllowListEntry?: Maybe<CreateIpAllowListEntryPayload>;
  createIssue?: Maybe<CreateIssuePayload>;
  createLinkedBranch?: Maybe<CreateLinkedBranchPayload>;
  createMigrationSource?: Maybe<CreateMigrationSourcePayload>;
  createProject?: Maybe<CreateProjectPayload>;
  createProjectV2?: Maybe<CreateProjectV2Payload>;
  createProjectV2Field?: Maybe<CreateProjectV2FieldPayload>;
  createPullRequest?: Maybe<CreatePullRequestPayload>;
  createRef?: Maybe<CreateRefPayload>;
  createRepository?: Maybe<CreateRepositoryPayload>;
  createSponsorsListing?: Maybe<CreateSponsorsListingPayload>;
  createSponsorsTier?: Maybe<CreateSponsorsTierPayload>;
  createSponsorship?: Maybe<CreateSponsorshipPayload>;
  createSponsorships?: Maybe<CreateSponsorshipsPayload>;
  createTeamDiscussion?: Maybe<CreateTeamDiscussionPayload>;
  createTeamDiscussionComment?: Maybe<CreateTeamDiscussionCommentPayload>;
  declineTopicSuggestion?: Maybe<DeclineTopicSuggestionPayload>;
  deleteBranchProtectionRule?: Maybe<DeleteBranchProtectionRulePayload>;
  deleteDeployment?: Maybe<DeleteDeploymentPayload>;
  deleteDiscussion?: Maybe<DeleteDiscussionPayload>;
  deleteDiscussionComment?: Maybe<DeleteDiscussionCommentPayload>;
  deleteEnvironment?: Maybe<DeleteEnvironmentPayload>;
  deleteIpAllowListEntry?: Maybe<DeleteIpAllowListEntryPayload>;
  deleteIssue?: Maybe<DeleteIssuePayload>;
  deleteIssueComment?: Maybe<DeleteIssueCommentPayload>;
  deleteLinkedBranch?: Maybe<DeleteLinkedBranchPayload>;
  deleteProject?: Maybe<DeleteProjectPayload>;
  deleteProjectCard?: Maybe<DeleteProjectCardPayload>;
  deleteProjectColumn?: Maybe<DeleteProjectColumnPayload>;
  deleteProjectV2?: Maybe<DeleteProjectV2Payload>;
  deleteProjectV2Field?: Maybe<DeleteProjectV2FieldPayload>;
  deleteProjectV2Item?: Maybe<DeleteProjectV2ItemPayload>;
  deleteProjectV2Workflow?: Maybe<DeleteProjectV2WorkflowPayload>;
  deletePullRequestReview?: Maybe<DeletePullRequestReviewPayload>;
  deletePullRequestReviewComment?: Maybe<DeletePullRequestReviewCommentPayload>;
  deleteRef?: Maybe<DeleteRefPayload>;
  deleteTeamDiscussion?: Maybe<DeleteTeamDiscussionPayload>;
  deleteTeamDiscussionComment?: Maybe<DeleteTeamDiscussionCommentPayload>;
  deleteVerifiableDomain?: Maybe<DeleteVerifiableDomainPayload>;
  dequeuePullRequest?: Maybe<DequeuePullRequestPayload>;
  disablePullRequestAutoMerge?: Maybe<DisablePullRequestAutoMergePayload>;
  dismissPullRequestReview?: Maybe<DismissPullRequestReviewPayload>;
  dismissRepositoryVulnerabilityAlert?: Maybe<DismissRepositoryVulnerabilityAlertPayload>;
  enablePullRequestAutoMerge?: Maybe<EnablePullRequestAutoMergePayload>;
  enqueuePullRequest?: Maybe<EnqueuePullRequestPayload>;
  followOrganization?: Maybe<FollowOrganizationPayload>;
  followUser?: Maybe<FollowUserPayload>;
  grantEnterpriseOrganizationsMigratorRole?: Maybe<GrantEnterpriseOrganizationsMigratorRolePayload>;
  grantMigratorRole?: Maybe<GrantMigratorRolePayload>;
  inviteEnterpriseAdmin?: Maybe<InviteEnterpriseAdminPayload>;
  linkProjectV2ToRepository?: Maybe<LinkProjectV2ToRepositoryPayload>;
  linkProjectV2ToTeam?: Maybe<LinkProjectV2ToTeamPayload>;
  linkRepositoryToProject?: Maybe<LinkRepositoryToProjectPayload>;
  lockLockable?: Maybe<LockLockablePayload>;
  markDiscussionCommentAsAnswer?: Maybe<MarkDiscussionCommentAsAnswerPayload>;
  markFileAsViewed?: Maybe<MarkFileAsViewedPayload>;
  markPullRequestReadyForReview?: Maybe<MarkPullRequestReadyForReviewPayload>;
  mergeBranch?: Maybe<MergeBranchPayload>;
  mergePullRequest?: Maybe<MergePullRequestPayload>;
  minimizeComment?: Maybe<MinimizeCommentPayload>;
  moveProjectCard?: Maybe<MoveProjectCardPayload>;
  moveProjectColumn?: Maybe<MoveProjectColumnPayload>;
  pinIssue?: Maybe<PinIssuePayload>;
  publishSponsorsTier?: Maybe<PublishSponsorsTierPayload>;
  regenerateEnterpriseIdentityProviderRecoveryCodes?: Maybe<RegenerateEnterpriseIdentityProviderRecoveryCodesPayload>;
  regenerateVerifiableDomainToken?: Maybe<RegenerateVerifiableDomainTokenPayload>;
  rejectDeployments?: Maybe<RejectDeploymentsPayload>;
  removeAssigneesFromAssignable?: Maybe<RemoveAssigneesFromAssignablePayload>;
  removeEnterpriseAdmin?: Maybe<RemoveEnterpriseAdminPayload>;
  removeEnterpriseIdentityProvider?: Maybe<RemoveEnterpriseIdentityProviderPayload>;
  removeEnterpriseMember?: Maybe<RemoveEnterpriseMemberPayload>;
  removeEnterpriseOrganization?: Maybe<RemoveEnterpriseOrganizationPayload>;
  removeEnterpriseSupportEntitlement?: Maybe<RemoveEnterpriseSupportEntitlementPayload>;
  removeLabelsFromLabelable?: Maybe<RemoveLabelsFromLabelablePayload>;
  removeOutsideCollaborator?: Maybe<RemoveOutsideCollaboratorPayload>;
  removeReaction?: Maybe<RemoveReactionPayload>;
  removeStar?: Maybe<RemoveStarPayload>;
  removeUpvote?: Maybe<RemoveUpvotePayload>;
  reopenDiscussion?: Maybe<ReopenDiscussionPayload>;
  reopenIssue?: Maybe<ReopenIssuePayload>;
  reopenPullRequest?: Maybe<ReopenPullRequestPayload>;
  requestReviews?: Maybe<RequestReviewsPayload>;
  rerequestCheckSuite?: Maybe<RerequestCheckSuitePayload>;
  resolveReviewThread?: Maybe<ResolveReviewThreadPayload>;
  retireSponsorsTier?: Maybe<RetireSponsorsTierPayload>;
  revertPullRequest?: Maybe<RevertPullRequestPayload>;
  revokeEnterpriseOrganizationsMigratorRole?: Maybe<RevokeEnterpriseOrganizationsMigratorRolePayload>;
  revokeMigratorRole?: Maybe<RevokeMigratorRolePayload>;
  setEnterpriseIdentityProvider?: Maybe<SetEnterpriseIdentityProviderPayload>;
  setOrganizationInteractionLimit?: Maybe<SetOrganizationInteractionLimitPayload>;
  setRepositoryInteractionLimit?: Maybe<SetRepositoryInteractionLimitPayload>;
  setUserInteractionLimit?: Maybe<SetUserInteractionLimitPayload>;
  startOrganizationMigration?: Maybe<StartOrganizationMigrationPayload>;
  startRepositoryMigration?: Maybe<StartRepositoryMigrationPayload>;
  submitPullRequestReview?: Maybe<SubmitPullRequestReviewPayload>;
  transferEnterpriseOrganization?: Maybe<TransferEnterpriseOrganizationPayload>;
  transferIssue?: Maybe<TransferIssuePayload>;
  unarchiveProjectV2Item?: Maybe<UnarchiveProjectV2ItemPayload>;
  unarchiveRepository?: Maybe<UnarchiveRepositoryPayload>;
  unfollowOrganization?: Maybe<UnfollowOrganizationPayload>;
  unfollowUser?: Maybe<UnfollowUserPayload>;
  unlinkProjectV2FromRepository?: Maybe<UnlinkProjectV2FromRepositoryPayload>;
  unlinkProjectV2FromTeam?: Maybe<UnlinkProjectV2FromTeamPayload>;
  unlinkRepositoryFromProject?: Maybe<UnlinkRepositoryFromProjectPayload>;
  unlockLockable?: Maybe<UnlockLockablePayload>;
  unmarkDiscussionCommentAsAnswer?: Maybe<UnmarkDiscussionCommentAsAnswerPayload>;
  unmarkFileAsViewed?: Maybe<UnmarkFileAsViewedPayload>;
  unmarkIssueAsDuplicate?: Maybe<UnmarkIssueAsDuplicatePayload>;
  unminimizeComment?: Maybe<UnminimizeCommentPayload>;
  unpinIssue?: Maybe<UnpinIssuePayload>;
  unresolveReviewThread?: Maybe<UnresolveReviewThreadPayload>;
  updateBranchProtectionRule?: Maybe<UpdateBranchProtectionRulePayload>;
  updateCheckRun?: Maybe<UpdateCheckRunPayload>;
  updateCheckSuitePreferences?: Maybe<UpdateCheckSuitePreferencesPayload>;
  updateDiscussion?: Maybe<UpdateDiscussionPayload>;
  updateDiscussionComment?: Maybe<UpdateDiscussionCommentPayload>;
  updateEnterpriseAdministratorRole?: Maybe<UpdateEnterpriseAdministratorRolePayload>;
  updateEnterpriseAllowPrivateRepositoryForkingSetting?: Maybe<UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload>;
  updateEnterpriseDefaultRepositoryPermissionSetting?: Maybe<UpdateEnterpriseDefaultRepositoryPermissionSettingPayload>;
  updateEnterpriseMembersCanChangeRepositoryVisibilitySetting?: Maybe<UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload>;
  updateEnterpriseMembersCanCreateRepositoriesSetting?: Maybe<UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload>;
  updateEnterpriseMembersCanDeleteIssuesSetting?: Maybe<UpdateEnterpriseMembersCanDeleteIssuesSettingPayload>;
  updateEnterpriseMembersCanDeleteRepositoriesSetting?: Maybe<UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload>;
  updateEnterpriseMembersCanInviteCollaboratorsSetting?: Maybe<UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload>;
  updateEnterpriseMembersCanMakePurchasesSetting?: Maybe<UpdateEnterpriseMembersCanMakePurchasesSettingPayload>;
  updateEnterpriseMembersCanUpdateProtectedBranchesSetting?: Maybe<UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload>;
  updateEnterpriseMembersCanViewDependencyInsightsSetting?: Maybe<UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload>;
  updateEnterpriseOrganizationProjectsSetting?: Maybe<UpdateEnterpriseOrganizationProjectsSettingPayload>;
  updateEnterpriseOwnerOrganizationRole?: Maybe<UpdateEnterpriseOwnerOrganizationRolePayload>;
  updateEnterpriseProfile?: Maybe<UpdateEnterpriseProfilePayload>;
  updateEnterpriseRepositoryProjectsSetting?: Maybe<UpdateEnterpriseRepositoryProjectsSettingPayload>;
  updateEnterpriseTeamDiscussionsSetting?: Maybe<UpdateEnterpriseTeamDiscussionsSettingPayload>;
  updateEnterpriseTwoFactorAuthenticationRequiredSetting?: Maybe<UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload>;
  updateEnvironment?: Maybe<UpdateEnvironmentPayload>;
  updateIpAllowListEnabledSetting?: Maybe<UpdateIpAllowListEnabledSettingPayload>;
  updateIpAllowListEntry?: Maybe<UpdateIpAllowListEntryPayload>;
  updateIpAllowListForInstalledAppsEnabledSetting?: Maybe<UpdateIpAllowListForInstalledAppsEnabledSettingPayload>;
  updateIssue?: Maybe<UpdateIssuePayload>;
  updateIssueComment?: Maybe<UpdateIssueCommentPayload>;
  updateNotificationRestrictionSetting?: Maybe<UpdateNotificationRestrictionSettingPayload>;
  updateOrganizationAllowPrivateRepositoryForkingSetting?: Maybe<UpdateOrganizationAllowPrivateRepositoryForkingSettingPayload>;
  updateOrganizationWebCommitSignoffSetting?: Maybe<UpdateOrganizationWebCommitSignoffSettingPayload>;
  updateProject?: Maybe<UpdateProjectPayload>;
  updateProjectCard?: Maybe<UpdateProjectCardPayload>;
  updateProjectColumn?: Maybe<UpdateProjectColumnPayload>;
  updateProjectV2?: Maybe<UpdateProjectV2Payload>;
  updateProjectV2DraftIssue?: Maybe<UpdateProjectV2DraftIssuePayload>;
  updateProjectV2ItemFieldValue?: Maybe<UpdateProjectV2ItemFieldValuePayload>;
  updateProjectV2ItemPosition?: Maybe<UpdateProjectV2ItemPositionPayload>;
  updatePullRequest?: Maybe<UpdatePullRequestPayload>;
  updatePullRequestBranch?: Maybe<UpdatePullRequestBranchPayload>;
  updatePullRequestReview?: Maybe<UpdatePullRequestReviewPayload>;
  updatePullRequestReviewComment?: Maybe<UpdatePullRequestReviewCommentPayload>;
  updateRef?: Maybe<UpdateRefPayload>;
  updateRepository?: Maybe<UpdateRepositoryPayload>;
  updateRepositoryWebCommitSignoffSetting?: Maybe<UpdateRepositoryWebCommitSignoffSettingPayload>;
  updateSponsorshipPreferences?: Maybe<UpdateSponsorshipPreferencesPayload>;
  updateSubscription?: Maybe<UpdateSubscriptionPayload>;
  updateTeamDiscussion?: Maybe<UpdateTeamDiscussionPayload>;
  updateTeamDiscussionComment?: Maybe<UpdateTeamDiscussionCommentPayload>;
  updateTeamsRepository?: Maybe<UpdateTeamsRepositoryPayload>;
  updateTopics?: Maybe<UpdateTopicsPayload>;
  verifyVerifiableDomain?: Maybe<VerifyVerifiableDomainPayload>;
};

export type MutationAbortQueuedMigrationsArgs = {
  input: AbortQueuedMigrationsInput;
};

export type MutationAcceptEnterpriseAdministratorInvitationArgs = {
  input: AcceptEnterpriseAdministratorInvitationInput;
};

export type MutationAcceptTopicSuggestionArgs = {
  input: AcceptTopicSuggestionInput;
};

export type MutationAddAssigneesToAssignableArgs = {
  input: AddAssigneesToAssignableInput;
};

export type MutationAddCommentArgs = {
  input: AddCommentInput;
};

export type MutationAddDiscussionCommentArgs = {
  input: AddDiscussionCommentInput;
};

export type MutationAddDiscussionPollVoteArgs = {
  input: AddDiscussionPollVoteInput;
};

export type MutationAddEnterpriseOrganizationMemberArgs = {
  input: AddEnterpriseOrganizationMemberInput;
};

export type MutationAddEnterpriseSupportEntitlementArgs = {
  input: AddEnterpriseSupportEntitlementInput;
};

export type MutationAddLabelsToLabelableArgs = {
  input: AddLabelsToLabelableInput;
};

export type MutationAddProjectCardArgs = {
  input: AddProjectCardInput;
};

export type MutationAddProjectColumnArgs = {
  input: AddProjectColumnInput;
};

export type MutationAddProjectV2DraftIssueArgs = {
  input: AddProjectV2DraftIssueInput;
};

export type MutationAddProjectV2ItemByIdArgs = {
  input: AddProjectV2ItemByIdInput;
};

export type MutationAddPullRequestReviewArgs = {
  input: AddPullRequestReviewInput;
};

export type MutationAddPullRequestReviewCommentArgs = {
  input: AddPullRequestReviewCommentInput;
};

export type MutationAddPullRequestReviewThreadArgs = {
  input: AddPullRequestReviewThreadInput;
};

export type MutationAddReactionArgs = {
  input: AddReactionInput;
};

export type MutationAddStarArgs = {
  input: AddStarInput;
};

export type MutationAddUpvoteArgs = {
  input: AddUpvoteInput;
};

export type MutationAddVerifiableDomainArgs = {
  input: AddVerifiableDomainInput;
};

export type MutationApproveDeploymentsArgs = {
  input: ApproveDeploymentsInput;
};

export type MutationApproveVerifiableDomainArgs = {
  input: ApproveVerifiableDomainInput;
};

export type MutationArchiveProjectV2ItemArgs = {
  input: ArchiveProjectV2ItemInput;
};

export type MutationArchiveRepositoryArgs = {
  input: ArchiveRepositoryInput;
};

export type MutationCancelEnterpriseAdminInvitationArgs = {
  input: CancelEnterpriseAdminInvitationInput;
};

export type MutationCancelSponsorshipArgs = {
  input: CancelSponsorshipInput;
};

export type MutationChangeUserStatusArgs = {
  input: ChangeUserStatusInput;
};

export type MutationClearLabelsFromLabelableArgs = {
  input: ClearLabelsFromLabelableInput;
};

export type MutationClearProjectV2ItemFieldValueArgs = {
  input: ClearProjectV2ItemFieldValueInput;
};

export type MutationCloneProjectArgs = {
  input: CloneProjectInput;
};

export type MutationCloneTemplateRepositoryArgs = {
  input: CloneTemplateRepositoryInput;
};

export type MutationCloseDiscussionArgs = {
  input: CloseDiscussionInput;
};

export type MutationCloseIssueArgs = {
  input: CloseIssueInput;
};

export type MutationClosePullRequestArgs = {
  input: ClosePullRequestInput;
};

export type MutationConvertProjectCardNoteToIssueArgs = {
  input: ConvertProjectCardNoteToIssueInput;
};

export type MutationConvertPullRequestToDraftArgs = {
  input: ConvertPullRequestToDraftInput;
};

export type MutationCopyProjectV2Args = {
  input: CopyProjectV2Input;
};

export type MutationCreateAttributionInvitationArgs = {
  input: CreateAttributionInvitationInput;
};

export type MutationCreateBranchProtectionRuleArgs = {
  input: CreateBranchProtectionRuleInput;
};

export type MutationCreateCheckRunArgs = {
  input: CreateCheckRunInput;
};

export type MutationCreateCheckSuiteArgs = {
  input: CreateCheckSuiteInput;
};

export type MutationCreateCommitOnBranchArgs = {
  input: CreateCommitOnBranchInput;
};

export type MutationCreateDiscussionArgs = {
  input: CreateDiscussionInput;
};

export type MutationCreateEnterpriseOrganizationArgs = {
  input: CreateEnterpriseOrganizationInput;
};

export type MutationCreateEnvironmentArgs = {
  input: CreateEnvironmentInput;
};

export type MutationCreateIpAllowListEntryArgs = {
  input: CreateIpAllowListEntryInput;
};

export type MutationCreateIssueArgs = {
  input: CreateIssueInput;
};

export type MutationCreateLinkedBranchArgs = {
  input: CreateLinkedBranchInput;
};

export type MutationCreateMigrationSourceArgs = {
  input: CreateMigrationSourceInput;
};

export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};

export type MutationCreateProjectV2Args = {
  input: CreateProjectV2Input;
};

export type MutationCreateProjectV2FieldArgs = {
  input: CreateProjectV2FieldInput;
};

export type MutationCreatePullRequestArgs = {
  input: CreatePullRequestInput;
};

export type MutationCreateRefArgs = {
  input: CreateRefInput;
};

export type MutationCreateRepositoryArgs = {
  input: CreateRepositoryInput;
};

export type MutationCreateSponsorsListingArgs = {
  input: CreateSponsorsListingInput;
};

export type MutationCreateSponsorsTierArgs = {
  input: CreateSponsorsTierInput;
};

export type MutationCreateSponsorshipArgs = {
  input: CreateSponsorshipInput;
};

export type MutationCreateSponsorshipsArgs = {
  input: CreateSponsorshipsInput;
};

export type MutationCreateTeamDiscussionArgs = {
  input: CreateTeamDiscussionInput;
};

export type MutationCreateTeamDiscussionCommentArgs = {
  input: CreateTeamDiscussionCommentInput;
};

export type MutationDeclineTopicSuggestionArgs = {
  input: DeclineTopicSuggestionInput;
};

export type MutationDeleteBranchProtectionRuleArgs = {
  input: DeleteBranchProtectionRuleInput;
};

export type MutationDeleteDeploymentArgs = {
  input: DeleteDeploymentInput;
};

export type MutationDeleteDiscussionArgs = {
  input: DeleteDiscussionInput;
};

export type MutationDeleteDiscussionCommentArgs = {
  input: DeleteDiscussionCommentInput;
};

export type MutationDeleteEnvironmentArgs = {
  input: DeleteEnvironmentInput;
};

export type MutationDeleteIpAllowListEntryArgs = {
  input: DeleteIpAllowListEntryInput;
};

export type MutationDeleteIssueArgs = {
  input: DeleteIssueInput;
};

export type MutationDeleteIssueCommentArgs = {
  input: DeleteIssueCommentInput;
};

export type MutationDeleteLinkedBranchArgs = {
  input: DeleteLinkedBranchInput;
};

export type MutationDeleteProjectArgs = {
  input: DeleteProjectInput;
};

export type MutationDeleteProjectCardArgs = {
  input: DeleteProjectCardInput;
};

export type MutationDeleteProjectColumnArgs = {
  input: DeleteProjectColumnInput;
};

export type MutationDeleteProjectV2Args = {
  input: DeleteProjectV2Input;
};

export type MutationDeleteProjectV2FieldArgs = {
  input: DeleteProjectV2FieldInput;
};

export type MutationDeleteProjectV2ItemArgs = {
  input: DeleteProjectV2ItemInput;
};

export type MutationDeleteProjectV2WorkflowArgs = {
  input: DeleteProjectV2WorkflowInput;
};

export type MutationDeletePullRequestReviewArgs = {
  input: DeletePullRequestReviewInput;
};

export type MutationDeletePullRequestReviewCommentArgs = {
  input: DeletePullRequestReviewCommentInput;
};

export type MutationDeleteRefArgs = {
  input: DeleteRefInput;
};

export type MutationDeleteTeamDiscussionArgs = {
  input: DeleteTeamDiscussionInput;
};

export type MutationDeleteTeamDiscussionCommentArgs = {
  input: DeleteTeamDiscussionCommentInput;
};

export type MutationDeleteVerifiableDomainArgs = {
  input: DeleteVerifiableDomainInput;
};

export type MutationDequeuePullRequestArgs = {
  input: DequeuePullRequestInput;
};

export type MutationDisablePullRequestAutoMergeArgs = {
  input: DisablePullRequestAutoMergeInput;
};

export type MutationDismissPullRequestReviewArgs = {
  input: DismissPullRequestReviewInput;
};

export type MutationDismissRepositoryVulnerabilityAlertArgs = {
  input: DismissRepositoryVulnerabilityAlertInput;
};

export type MutationEnablePullRequestAutoMergeArgs = {
  input: EnablePullRequestAutoMergeInput;
};

export type MutationEnqueuePullRequestArgs = {
  input: EnqueuePullRequestInput;
};

export type MutationFollowOrganizationArgs = {
  input: FollowOrganizationInput;
};

export type MutationFollowUserArgs = {
  input: FollowUserInput;
};

export type MutationGrantEnterpriseOrganizationsMigratorRoleArgs = {
  input: GrantEnterpriseOrganizationsMigratorRoleInput;
};

export type MutationGrantMigratorRoleArgs = {
  input: GrantMigratorRoleInput;
};

export type MutationInviteEnterpriseAdminArgs = {
  input: InviteEnterpriseAdminInput;
};

export type MutationLinkProjectV2ToRepositoryArgs = {
  input: LinkProjectV2ToRepositoryInput;
};

export type MutationLinkProjectV2ToTeamArgs = {
  input: LinkProjectV2ToTeamInput;
};

export type MutationLinkRepositoryToProjectArgs = {
  input: LinkRepositoryToProjectInput;
};

export type MutationLockLockableArgs = {
  input: LockLockableInput;
};

export type MutationMarkDiscussionCommentAsAnswerArgs = {
  input: MarkDiscussionCommentAsAnswerInput;
};

export type MutationMarkFileAsViewedArgs = {
  input: MarkFileAsViewedInput;
};

export type MutationMarkPullRequestReadyForReviewArgs = {
  input: MarkPullRequestReadyForReviewInput;
};

export type MutationMergeBranchArgs = {
  input: MergeBranchInput;
};

export type MutationMergePullRequestArgs = {
  input: MergePullRequestInput;
};

export type MutationMinimizeCommentArgs = {
  input: MinimizeCommentInput;
};

export type MutationMoveProjectCardArgs = {
  input: MoveProjectCardInput;
};

export type MutationMoveProjectColumnArgs = {
  input: MoveProjectColumnInput;
};

export type MutationPinIssueArgs = {
  input: PinIssueInput;
};

export type MutationPublishSponsorsTierArgs = {
  input: PublishSponsorsTierInput;
};

export type MutationRegenerateEnterpriseIdentityProviderRecoveryCodesArgs = {
  input: RegenerateEnterpriseIdentityProviderRecoveryCodesInput;
};

export type MutationRegenerateVerifiableDomainTokenArgs = {
  input: RegenerateVerifiableDomainTokenInput;
};

export type MutationRejectDeploymentsArgs = {
  input: RejectDeploymentsInput;
};

export type MutationRemoveAssigneesFromAssignableArgs = {
  input: RemoveAssigneesFromAssignableInput;
};

export type MutationRemoveEnterpriseAdminArgs = {
  input: RemoveEnterpriseAdminInput;
};

export type MutationRemoveEnterpriseIdentityProviderArgs = {
  input: RemoveEnterpriseIdentityProviderInput;
};

export type MutationRemoveEnterpriseMemberArgs = {
  input: RemoveEnterpriseMemberInput;
};

export type MutationRemoveEnterpriseOrganizationArgs = {
  input: RemoveEnterpriseOrganizationInput;
};

export type MutationRemoveEnterpriseSupportEntitlementArgs = {
  input: RemoveEnterpriseSupportEntitlementInput;
};

export type MutationRemoveLabelsFromLabelableArgs = {
  input: RemoveLabelsFromLabelableInput;
};

export type MutationRemoveOutsideCollaboratorArgs = {
  input: RemoveOutsideCollaboratorInput;
};

export type MutationRemoveReactionArgs = {
  input: RemoveReactionInput;
};

export type MutationRemoveStarArgs = {
  input: RemoveStarInput;
};

export type MutationRemoveUpvoteArgs = {
  input: RemoveUpvoteInput;
};

export type MutationReopenDiscussionArgs = {
  input: ReopenDiscussionInput;
};

export type MutationReopenIssueArgs = {
  input: ReopenIssueInput;
};

export type MutationReopenPullRequestArgs = {
  input: ReopenPullRequestInput;
};

export type MutationRequestReviewsArgs = {
  input: RequestReviewsInput;
};

export type MutationRerequestCheckSuiteArgs = {
  input: RerequestCheckSuiteInput;
};

export type MutationResolveReviewThreadArgs = {
  input: ResolveReviewThreadInput;
};

export type MutationRetireSponsorsTierArgs = {
  input: RetireSponsorsTierInput;
};

export type MutationRevertPullRequestArgs = {
  input: RevertPullRequestInput;
};

export type MutationRevokeEnterpriseOrganizationsMigratorRoleArgs = {
  input: RevokeEnterpriseOrganizationsMigratorRoleInput;
};

export type MutationRevokeMigratorRoleArgs = {
  input: RevokeMigratorRoleInput;
};

export type MutationSetEnterpriseIdentityProviderArgs = {
  input: SetEnterpriseIdentityProviderInput;
};

export type MutationSetOrganizationInteractionLimitArgs = {
  input: SetOrganizationInteractionLimitInput;
};

export type MutationSetRepositoryInteractionLimitArgs = {
  input: SetRepositoryInteractionLimitInput;
};

export type MutationSetUserInteractionLimitArgs = {
  input: SetUserInteractionLimitInput;
};

export type MutationStartOrganizationMigrationArgs = {
  input: StartOrganizationMigrationInput;
};

export type MutationStartRepositoryMigrationArgs = {
  input: StartRepositoryMigrationInput;
};

export type MutationSubmitPullRequestReviewArgs = {
  input: SubmitPullRequestReviewInput;
};

export type MutationTransferEnterpriseOrganizationArgs = {
  input: TransferEnterpriseOrganizationInput;
};

export type MutationTransferIssueArgs = {
  input: TransferIssueInput;
};

export type MutationUnarchiveProjectV2ItemArgs = {
  input: UnarchiveProjectV2ItemInput;
};

export type MutationUnarchiveRepositoryArgs = {
  input: UnarchiveRepositoryInput;
};

export type MutationUnfollowOrganizationArgs = {
  input: UnfollowOrganizationInput;
};

export type MutationUnfollowUserArgs = {
  input: UnfollowUserInput;
};

export type MutationUnlinkProjectV2FromRepositoryArgs = {
  input: UnlinkProjectV2FromRepositoryInput;
};

export type MutationUnlinkProjectV2FromTeamArgs = {
  input: UnlinkProjectV2FromTeamInput;
};

export type MutationUnlinkRepositoryFromProjectArgs = {
  input: UnlinkRepositoryFromProjectInput;
};

export type MutationUnlockLockableArgs = {
  input: UnlockLockableInput;
};

export type MutationUnmarkDiscussionCommentAsAnswerArgs = {
  input: UnmarkDiscussionCommentAsAnswerInput;
};

export type MutationUnmarkFileAsViewedArgs = {
  input: UnmarkFileAsViewedInput;
};

export type MutationUnmarkIssueAsDuplicateArgs = {
  input: UnmarkIssueAsDuplicateInput;
};

export type MutationUnminimizeCommentArgs = {
  input: UnminimizeCommentInput;
};

export type MutationUnpinIssueArgs = {
  input: UnpinIssueInput;
};

export type MutationUnresolveReviewThreadArgs = {
  input: UnresolveReviewThreadInput;
};

export type MutationUpdateBranchProtectionRuleArgs = {
  input: UpdateBranchProtectionRuleInput;
};

export type MutationUpdateCheckRunArgs = {
  input: UpdateCheckRunInput;
};

export type MutationUpdateCheckSuitePreferencesArgs = {
  input: UpdateCheckSuitePreferencesInput;
};

export type MutationUpdateDiscussionArgs = {
  input: UpdateDiscussionInput;
};

export type MutationUpdateDiscussionCommentArgs = {
  input: UpdateDiscussionCommentInput;
};

export type MutationUpdateEnterpriseAdministratorRoleArgs = {
  input: UpdateEnterpriseAdministratorRoleInput;
};

export type MutationUpdateEnterpriseAllowPrivateRepositoryForkingSettingArgs = {
  input: UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput;
};

export type MutationUpdateEnterpriseDefaultRepositoryPermissionSettingArgs = {
  input: UpdateEnterpriseDefaultRepositoryPermissionSettingInput;
};

export type MutationUpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingArgs =
  {
    input: UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput;
  };

export type MutationUpdateEnterpriseMembersCanCreateRepositoriesSettingArgs = {
  input: UpdateEnterpriseMembersCanCreateRepositoriesSettingInput;
};

export type MutationUpdateEnterpriseMembersCanDeleteIssuesSettingArgs = {
  input: UpdateEnterpriseMembersCanDeleteIssuesSettingInput;
};

export type MutationUpdateEnterpriseMembersCanDeleteRepositoriesSettingArgs = {
  input: UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput;
};

export type MutationUpdateEnterpriseMembersCanInviteCollaboratorsSettingArgs = {
  input: UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput;
};

export type MutationUpdateEnterpriseMembersCanMakePurchasesSettingArgs = {
  input: UpdateEnterpriseMembersCanMakePurchasesSettingInput;
};

export type MutationUpdateEnterpriseMembersCanUpdateProtectedBranchesSettingArgs =
  {
    input: UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput;
  };

export type MutationUpdateEnterpriseMembersCanViewDependencyInsightsSettingArgs =
  {
    input: UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput;
  };

export type MutationUpdateEnterpriseOrganizationProjectsSettingArgs = {
  input: UpdateEnterpriseOrganizationProjectsSettingInput;
};

export type MutationUpdateEnterpriseOwnerOrganizationRoleArgs = {
  input: UpdateEnterpriseOwnerOrganizationRoleInput;
};

export type MutationUpdateEnterpriseProfileArgs = {
  input: UpdateEnterpriseProfileInput;
};

export type MutationUpdateEnterpriseRepositoryProjectsSettingArgs = {
  input: UpdateEnterpriseRepositoryProjectsSettingInput;
};

export type MutationUpdateEnterpriseTeamDiscussionsSettingArgs = {
  input: UpdateEnterpriseTeamDiscussionsSettingInput;
};

export type MutationUpdateEnterpriseTwoFactorAuthenticationRequiredSettingArgs =
  {
    input: UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput;
  };

export type MutationUpdateEnvironmentArgs = {
  input: UpdateEnvironmentInput;
};

export type MutationUpdateIpAllowListEnabledSettingArgs = {
  input: UpdateIpAllowListEnabledSettingInput;
};

export type MutationUpdateIpAllowListEntryArgs = {
  input: UpdateIpAllowListEntryInput;
};

export type MutationUpdateIpAllowListForInstalledAppsEnabledSettingArgs = {
  input: UpdateIpAllowListForInstalledAppsEnabledSettingInput;
};

export type MutationUpdateIssueArgs = {
  input: UpdateIssueInput;
};

export type MutationUpdateIssueCommentArgs = {
  input: UpdateIssueCommentInput;
};

export type MutationUpdateNotificationRestrictionSettingArgs = {
  input: UpdateNotificationRestrictionSettingInput;
};

export type MutationUpdateOrganizationAllowPrivateRepositoryForkingSettingArgs =
  {
    input: UpdateOrganizationAllowPrivateRepositoryForkingSettingInput;
  };

export type MutationUpdateOrganizationWebCommitSignoffSettingArgs = {
  input: UpdateOrganizationWebCommitSignoffSettingInput;
};

export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};

export type MutationUpdateProjectCardArgs = {
  input: UpdateProjectCardInput;
};

export type MutationUpdateProjectColumnArgs = {
  input: UpdateProjectColumnInput;
};

export type MutationUpdateProjectV2Args = {
  input: UpdateProjectV2Input;
};

export type MutationUpdateProjectV2DraftIssueArgs = {
  input: UpdateProjectV2DraftIssueInput;
};

export type MutationUpdateProjectV2ItemFieldValueArgs = {
  input: UpdateProjectV2ItemFieldValueInput;
};

export type MutationUpdateProjectV2ItemPositionArgs = {
  input: UpdateProjectV2ItemPositionInput;
};

export type MutationUpdatePullRequestArgs = {
  input: UpdatePullRequestInput;
};

export type MutationUpdatePullRequestBranchArgs = {
  input: UpdatePullRequestBranchInput;
};

export type MutationUpdatePullRequestReviewArgs = {
  input: UpdatePullRequestReviewInput;
};

export type MutationUpdatePullRequestReviewCommentArgs = {
  input: UpdatePullRequestReviewCommentInput;
};

export type MutationUpdateRefArgs = {
  input: UpdateRefInput;
};

export type MutationUpdateRepositoryArgs = {
  input: UpdateRepositoryInput;
};

export type MutationUpdateRepositoryWebCommitSignoffSettingArgs = {
  input: UpdateRepositoryWebCommitSignoffSettingInput;
};

export type MutationUpdateSponsorshipPreferencesArgs = {
  input: UpdateSponsorshipPreferencesInput;
};

export type MutationUpdateSubscriptionArgs = {
  input: UpdateSubscriptionInput;
};

export type MutationUpdateTeamDiscussionArgs = {
  input: UpdateTeamDiscussionInput;
};

export type MutationUpdateTeamDiscussionCommentArgs = {
  input: UpdateTeamDiscussionCommentInput;
};

export type MutationUpdateTeamsRepositoryArgs = {
  input: UpdateTeamsRepositoryInput;
};

export type MutationUpdateTopicsArgs = {
  input: UpdateTopicsInput;
};

export type MutationVerifyVerifiableDomainArgs = {
  input: VerifyVerifiableDomainInput;
};

export type Node = {
  id: Scalars["ID"];
};

export enum NotificationRestrictionSettingValue {
  Enabled = "ENABLED",
  Disabled = "DISABLED",
}

export type OidcProvider = Node & {
  __typename?: "OIDCProvider";
  enterprise?: Maybe<Enterprise>;
  externalIdentities: ExternalIdentityConnection;
  id: Scalars["ID"];
  providerType: OidcProviderType;
  tenantId: Scalars["String"];
};

export type OidcProviderExternalIdentitiesArgs = {
  membersOnly?: InputMaybe<Scalars["Boolean"]>;
  login?: InputMaybe<Scalars["String"]>;
  userName?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export enum OidcProviderType {
  Aad = "AAD",
}

export type OauthApplicationAuditEntryData = {
  oauthApplicationName?: Maybe<Scalars["String"]>;
  oauthApplicationResourcePath?: Maybe<Scalars["URI"]>;
  oauthApplicationUrl?: Maybe<Scalars["URI"]>;
};

export type OauthApplicationCreateAuditEntry = Node &
  AuditEntry &
  OauthApplicationAuditEntryData &
  OrganizationAuditEntryData & {
    __typename?: "OauthApplicationCreateAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    applicationUrl?: Maybe<Scalars["URI"]>;
    callbackUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    oauthApplicationName?: Maybe<Scalars["String"]>;
    oauthApplicationResourcePath?: Maybe<Scalars["URI"]>;
    oauthApplicationUrl?: Maybe<Scalars["URI"]>;
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    rateLimit?: Maybe<Scalars["Int"]>;
    state?: Maybe<OauthApplicationCreateAuditEntryState>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export enum OauthApplicationCreateAuditEntryState {
  Active = "ACTIVE",
  Suspended = "SUSPENDED",
  PendingDeletion = "PENDING_DELETION",
}

export enum OperationType {
  Access = "ACCESS",
  Authentication = "AUTHENTICATION",
  Create = "CREATE",
  Modify = "MODIFY",
  Remove = "REMOVE",
  Restore = "RESTORE",
  Transfer = "TRANSFER",
}

export enum OrderDirection {
  Asc = "ASC",
  Desc = "DESC",
}

export type OrgAddBillingManagerAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData & {
    __typename?: "OrgAddBillingManagerAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    invitationEmail?: Maybe<Scalars["String"]>;
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type OrgAddMemberAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData & {
    __typename?: "OrgAddMemberAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    permission?: Maybe<OrgAddMemberAuditEntryPermission>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export enum OrgAddMemberAuditEntryPermission {
  Read = "READ",
  Admin = "ADMIN",
}

export type OrgBlockUserAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData & {
    __typename?: "OrgBlockUserAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    blockedUser?: Maybe<User>;
    blockedUserName?: Maybe<Scalars["String"]>;
    blockedUserResourcePath?: Maybe<Scalars["URI"]>;
    blockedUserUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type OrgConfigDisableCollaboratorsOnlyAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData & {
    __typename?: "OrgConfigDisableCollaboratorsOnlyAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type OrgConfigEnableCollaboratorsOnlyAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData & {
    __typename?: "OrgConfigEnableCollaboratorsOnlyAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type OrgCreateAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData & {
    __typename?: "OrgCreateAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    billingPlan?: Maybe<OrgCreateAuditEntryBillingPlan>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export enum OrgCreateAuditEntryBillingPlan {
  Free = "FREE",
  Business = "BUSINESS",
  BusinessPlus = "BUSINESS_PLUS",
  Unlimited = "UNLIMITED",
  TieredPerSeat = "TIERED_PER_SEAT",
}

export type OrgDisableOauthAppRestrictionsAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData & {
    __typename?: "OrgDisableOauthAppRestrictionsAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type OrgDisableSamlAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData & {
    __typename?: "OrgDisableSamlAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    digestMethodUrl?: Maybe<Scalars["URI"]>;
    id: Scalars["ID"];
    issuerUrl?: Maybe<Scalars["URI"]>;
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    signatureMethodUrl?: Maybe<Scalars["URI"]>;
    singleSignOnUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type OrgDisableTwoFactorRequirementAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData & {
    __typename?: "OrgDisableTwoFactorRequirementAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type OrgEnableOauthAppRestrictionsAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData & {
    __typename?: "OrgEnableOauthAppRestrictionsAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type OrgEnableSamlAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData & {
    __typename?: "OrgEnableSamlAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    digestMethodUrl?: Maybe<Scalars["URI"]>;
    id: Scalars["ID"];
    issuerUrl?: Maybe<Scalars["URI"]>;
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    signatureMethodUrl?: Maybe<Scalars["URI"]>;
    singleSignOnUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type OrgEnableTwoFactorRequirementAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData & {
    __typename?: "OrgEnableTwoFactorRequirementAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type OrgEnterpriseOwnerOrder = {
  field: OrgEnterpriseOwnerOrderField;
  direction: OrderDirection;
};

export enum OrgEnterpriseOwnerOrderField {
  Login = "LOGIN",
}

export type OrgInviteMemberAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData & {
    __typename?: "OrgInviteMemberAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    email?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationInvitation?: Maybe<OrganizationInvitation>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type OrgInviteToBusinessAuditEntry = Node &
  AuditEntry &
  EnterpriseAuditEntryData &
  OrganizationAuditEntryData & {
    __typename?: "OrgInviteToBusinessAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    enterpriseResourcePath?: Maybe<Scalars["URI"]>;
    enterpriseSlug?: Maybe<Scalars["String"]>;
    enterpriseUrl?: Maybe<Scalars["URI"]>;
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type OrgOauthAppAccessApprovedAuditEntry = Node &
  AuditEntry &
  OauthApplicationAuditEntryData &
  OrganizationAuditEntryData & {
    __typename?: "OrgOauthAppAccessApprovedAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    oauthApplicationName?: Maybe<Scalars["String"]>;
    oauthApplicationResourcePath?: Maybe<Scalars["URI"]>;
    oauthApplicationUrl?: Maybe<Scalars["URI"]>;
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type OrgOauthAppAccessDeniedAuditEntry = Node &
  AuditEntry &
  OauthApplicationAuditEntryData &
  OrganizationAuditEntryData & {
    __typename?: "OrgOauthAppAccessDeniedAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    oauthApplicationName?: Maybe<Scalars["String"]>;
    oauthApplicationResourcePath?: Maybe<Scalars["URI"]>;
    oauthApplicationUrl?: Maybe<Scalars["URI"]>;
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type OrgOauthAppAccessRequestedAuditEntry = Node &
  AuditEntry &
  OauthApplicationAuditEntryData &
  OrganizationAuditEntryData & {
    __typename?: "OrgOauthAppAccessRequestedAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    oauthApplicationName?: Maybe<Scalars["String"]>;
    oauthApplicationResourcePath?: Maybe<Scalars["URI"]>;
    oauthApplicationUrl?: Maybe<Scalars["URI"]>;
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type OrgRemoveBillingManagerAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData & {
    __typename?: "OrgRemoveBillingManagerAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    reason?: Maybe<OrgRemoveBillingManagerAuditEntryReason>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export enum OrgRemoveBillingManagerAuditEntryReason {
  TwoFactorRequirementNonCompliance = "TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE",
  SamlExternalIdentityMissing = "SAML_EXTERNAL_IDENTITY_MISSING",
  SamlSsoEnforcementRequiresExternalIdentity = "SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY",
}

export type OrgRemoveMemberAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData & {
    __typename?: "OrgRemoveMemberAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    membershipTypes?: Maybe<Array<OrgRemoveMemberAuditEntryMembershipType>>;
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    reason?: Maybe<OrgRemoveMemberAuditEntryReason>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export enum OrgRemoveMemberAuditEntryMembershipType {
  Suspended = "SUSPENDED",
  DirectMember = "DIRECT_MEMBER",
  Admin = "ADMIN",
  BillingManager = "BILLING_MANAGER",
  Unaffiliated = "UNAFFILIATED",
  OutsideCollaborator = "OUTSIDE_COLLABORATOR",
}

export enum OrgRemoveMemberAuditEntryReason {
  TwoFactorRequirementNonCompliance = "TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE",
  SamlExternalIdentityMissing = "SAML_EXTERNAL_IDENTITY_MISSING",
  SamlSsoEnforcementRequiresExternalIdentity = "SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY",
  UserAccountDeleted = "USER_ACCOUNT_DELETED",
  TwoFactorAccountRecovery = "TWO_FACTOR_ACCOUNT_RECOVERY",
}

export type OrgRemoveOutsideCollaboratorAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData & {
    __typename?: "OrgRemoveOutsideCollaboratorAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    membershipTypes?: Maybe<
      Array<OrgRemoveOutsideCollaboratorAuditEntryMembershipType>
    >;
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    reason?: Maybe<OrgRemoveOutsideCollaboratorAuditEntryReason>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export enum OrgRemoveOutsideCollaboratorAuditEntryMembershipType {
  OutsideCollaborator = "OUTSIDE_COLLABORATOR",
  Unaffiliated = "UNAFFILIATED",
  BillingManager = "BILLING_MANAGER",
}

export enum OrgRemoveOutsideCollaboratorAuditEntryReason {
  TwoFactorRequirementNonCompliance = "TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE",
  SamlExternalIdentityMissing = "SAML_EXTERNAL_IDENTITY_MISSING",
}

export type OrgRestoreMemberAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData & {
    __typename?: "OrgRestoreMemberAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    restoredCustomEmailRoutingsCount?: Maybe<Scalars["Int"]>;
    restoredIssueAssignmentsCount?: Maybe<Scalars["Int"]>;
    restoredMemberships?: Maybe<Array<OrgRestoreMemberAuditEntryMembership>>;
    restoredMembershipsCount?: Maybe<Scalars["Int"]>;
    restoredRepositoriesCount?: Maybe<Scalars["Int"]>;
    restoredRepositoryStarsCount?: Maybe<Scalars["Int"]>;
    restoredRepositoryWatchesCount?: Maybe<Scalars["Int"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type OrgRestoreMemberAuditEntryMembership =
  | OrgRestoreMemberMembershipOrganizationAuditEntryData
  | OrgRestoreMemberMembershipRepositoryAuditEntryData
  | OrgRestoreMemberMembershipTeamAuditEntryData;

export type OrgRestoreMemberMembershipOrganizationAuditEntryData =
  OrganizationAuditEntryData & {
    __typename?: "OrgRestoreMemberMembershipOrganizationAuditEntryData";
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
  };

export type OrgRestoreMemberMembershipRepositoryAuditEntryData =
  RepositoryAuditEntryData & {
    __typename?: "OrgRestoreMemberMembershipRepositoryAuditEntryData";
    repository?: Maybe<Repository>;
    repositoryName?: Maybe<Scalars["String"]>;
    repositoryResourcePath?: Maybe<Scalars["URI"]>;
    repositoryUrl?: Maybe<Scalars["URI"]>;
  };

export type OrgRestoreMemberMembershipTeamAuditEntryData =
  TeamAuditEntryData & {
    __typename?: "OrgRestoreMemberMembershipTeamAuditEntryData";
    team?: Maybe<Team>;
    teamName?: Maybe<Scalars["String"]>;
    teamResourcePath?: Maybe<Scalars["URI"]>;
    teamUrl?: Maybe<Scalars["URI"]>;
  };

export type OrgUnblockUserAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData & {
    __typename?: "OrgUnblockUserAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    blockedUser?: Maybe<User>;
    blockedUserName?: Maybe<Scalars["String"]>;
    blockedUserResourcePath?: Maybe<Scalars["URI"]>;
    blockedUserUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type OrgUpdateDefaultRepositoryPermissionAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData & {
    __typename?: "OrgUpdateDefaultRepositoryPermissionAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    permission?: Maybe<OrgUpdateDefaultRepositoryPermissionAuditEntryPermission>;
    permissionWas?: Maybe<OrgUpdateDefaultRepositoryPermissionAuditEntryPermission>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export enum OrgUpdateDefaultRepositoryPermissionAuditEntryPermission {
  Read = "READ",
  Write = "WRITE",
  Admin = "ADMIN",
  None = "NONE",
}

export type OrgUpdateMemberAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData & {
    __typename?: "OrgUpdateMemberAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    permission?: Maybe<OrgUpdateMemberAuditEntryPermission>;
    permissionWas?: Maybe<OrgUpdateMemberAuditEntryPermission>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export enum OrgUpdateMemberAuditEntryPermission {
  Read = "READ",
  Admin = "ADMIN",
}

export type OrgUpdateMemberRepositoryCreationPermissionAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData & {
    __typename?: "OrgUpdateMemberRepositoryCreationPermissionAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    canCreateRepositories?: Maybe<Scalars["Boolean"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
    visibility?: Maybe<OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility>;
  };

export enum OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility {
  All = "ALL",
  Public = "PUBLIC",
  None = "NONE",
  Private = "PRIVATE",
  Internal = "INTERNAL",
  PublicInternal = "PUBLIC_INTERNAL",
  PrivateInternal = "PRIVATE_INTERNAL",
  PublicPrivate = "PUBLIC_PRIVATE",
}

export type OrgUpdateMemberRepositoryInvitationPermissionAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData & {
    __typename?: "OrgUpdateMemberRepositoryInvitationPermissionAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    canInviteOutsideCollaboratorsToRepositories?: Maybe<Scalars["Boolean"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type Organization = Node &
  Actor &
  PackageOwner &
  ProjectOwner &
  ProjectV2Owner &
  ProjectV2Recent &
  RepositoryDiscussionAuthor &
  RepositoryDiscussionCommentAuthor &
  RepositoryOwner &
  UniformResourceLocatable &
  MemberStatusable &
  ProfileOwner &
  Sponsorable &
  AnnouncementBanner & {
    __typename?: "Organization";
    announcement?: Maybe<Scalars["String"]>;
    announcementExpiresAt?: Maybe<Scalars["DateTime"]>;
    announcementUserDismissible?: Maybe<Scalars["Boolean"]>;
    anyPinnableItems: Scalars["Boolean"];
    auditLog: OrganizationAuditEntryConnection;
    avatarUrl: Scalars["URI"];
    createdAt: Scalars["DateTime"];
    databaseId?: Maybe<Scalars["Int"]>;
    description?: Maybe<Scalars["String"]>;
    descriptionHTML?: Maybe<Scalars["String"]>;
    domains?: Maybe<VerifiableDomainConnection>;
    email?: Maybe<Scalars["String"]>;
    enterpriseOwners: OrganizationEnterpriseOwnerConnection;
    estimatedNextSponsorsPayoutInCents: Scalars["Int"];
    hasSponsorsListing: Scalars["Boolean"];
    id: Scalars["ID"];
    interactionAbility?: Maybe<RepositoryInteractionAbility>;
    ipAllowListEnabledSetting: IpAllowListEnabledSettingValue;
    ipAllowListEntries: IpAllowListEntryConnection;
    ipAllowListForInstalledAppsEnabledSetting: IpAllowListForInstalledAppsEnabledSettingValue;
    isSponsoredBy: Scalars["Boolean"];
    isSponsoringViewer: Scalars["Boolean"];
    isVerified: Scalars["Boolean"];
    itemShowcase: ProfileItemShowcase;
    location?: Maybe<Scalars["String"]>;
    login: Scalars["String"];
    mannequins: MannequinConnection;
    memberStatuses: UserStatusConnection;
    membersCanForkPrivateRepositories: Scalars["Boolean"];
    membersWithRole: OrganizationMemberConnection;
    monthlyEstimatedSponsorsIncomeInCents: Scalars["Int"];
    name?: Maybe<Scalars["String"]>;
    newTeamResourcePath: Scalars["URI"];
    newTeamUrl: Scalars["URI"];
    notificationDeliveryRestrictionEnabledSetting: NotificationRestrictionSettingValue;
    organizationBillingEmail?: Maybe<Scalars["String"]>;
    packages: PackageConnection;
    pendingMembers: UserConnection;
    pinnableItems: PinnableItemConnection;
    pinnedItems: PinnableItemConnection;
    pinnedItemsRemaining: Scalars["Int"];
    project?: Maybe<Project>;
    projectV2?: Maybe<ProjectV2>;
    projects: ProjectConnection;
    projectsResourcePath: Scalars["URI"];
    projectsUrl: Scalars["URI"];
    projectsV2: ProjectV2Connection;
    recentProjects: ProjectV2Connection;
    repositories: RepositoryConnection;
    repository?: Maybe<Repository>;
    repositoryDiscussionComments: DiscussionCommentConnection;
    repositoryDiscussions: DiscussionConnection;
    repositoryMigrations: RepositoryMigrationConnection;
    requiresTwoFactorAuthentication?: Maybe<Scalars["Boolean"]>;
    resourcePath: Scalars["URI"];
    samlIdentityProvider?: Maybe<OrganizationIdentityProvider>;
    sponsoring: SponsorConnection;
    sponsors: SponsorConnection;
    sponsorsActivities: SponsorsActivityConnection;
    sponsorsListing?: Maybe<SponsorsListing>;
    sponsorshipForViewerAsSponsor?: Maybe<Sponsorship>;
    sponsorshipForViewerAsSponsorable?: Maybe<Sponsorship>;
    sponsorshipNewsletters: SponsorshipNewsletterConnection;
    sponsorshipsAsMaintainer: SponsorshipConnection;
    sponsorshipsAsSponsor: SponsorshipConnection;
    team?: Maybe<Team>;
    teams: TeamConnection;
    teamsResourcePath: Scalars["URI"];
    teamsUrl: Scalars["URI"];
    totalSponsorshipAmountAsSponsorInCents?: Maybe<Scalars["Int"]>;
    twitterUsername?: Maybe<Scalars["String"]>;
    updatedAt: Scalars["DateTime"];
    url: Scalars["URI"];
    viewerCanAdminister: Scalars["Boolean"];
    viewerCanChangePinnedItems: Scalars["Boolean"];
    viewerCanCreateProjects: Scalars["Boolean"];
    viewerCanCreateRepositories: Scalars["Boolean"];
    viewerCanCreateTeams: Scalars["Boolean"];
    viewerCanSponsor: Scalars["Boolean"];
    viewerIsAMember: Scalars["Boolean"];
    viewerIsFollowing: Scalars["Boolean"];
    viewerIsSponsoring: Scalars["Boolean"];
    webCommitSignoffRequired: Scalars["Boolean"];
    websiteUrl?: Maybe<Scalars["URI"]>;
  };

export type OrganizationAnyPinnableItemsArgs = {
  type?: InputMaybe<PinnableItemType>;
};

export type OrganizationAuditLogArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  query?: InputMaybe<Scalars["String"]>;
  orderBy?: InputMaybe<AuditLogOrder>;
};

export type OrganizationAvatarUrlArgs = {
  size?: InputMaybe<Scalars["Int"]>;
};

export type OrganizationDomainsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  isVerified?: InputMaybe<Scalars["Boolean"]>;
  isApproved?: InputMaybe<Scalars["Boolean"]>;
  orderBy?: InputMaybe<VerifiableDomainOrder>;
};

export type OrganizationEnterpriseOwnersArgs = {
  query?: InputMaybe<Scalars["String"]>;
  organizationRole?: InputMaybe<RoleInOrganization>;
  orderBy?: InputMaybe<OrgEnterpriseOwnerOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type OrganizationIpAllowListEntriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<IpAllowListEntryOrder>;
};

export type OrganizationIsSponsoredByArgs = {
  accountLogin: Scalars["String"];
};

export type OrganizationMannequinsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MannequinOrder>;
};

export type OrganizationMemberStatusesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UserStatusOrder>;
};

export type OrganizationMembersWithRoleArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type OrganizationPackagesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  names?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  repositoryId?: InputMaybe<Scalars["ID"]>;
  packageType?: InputMaybe<PackageType>;
  orderBy?: InputMaybe<PackageOrder>;
};

export type OrganizationPendingMembersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type OrganizationPinnableItemsArgs = {
  types?: InputMaybe<Array<PinnableItemType>>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type OrganizationPinnedItemsArgs = {
  types?: InputMaybe<Array<PinnableItemType>>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type OrganizationProjectArgs = {
  number: Scalars["Int"];
};

export type OrganizationProjectV2Args = {
  number: Scalars["Int"];
};

export type OrganizationProjectsArgs = {
  orderBy?: InputMaybe<ProjectOrder>;
  search?: InputMaybe<Scalars["String"]>;
  states?: InputMaybe<Array<ProjectState>>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type OrganizationProjectsV2Args = {
  query?: InputMaybe<Scalars["String"]>;
  orderBy?: InputMaybe<ProjectV2Order>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type OrganizationRecentProjectsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type OrganizationRepositoriesArgs = {
  privacy?: InputMaybe<RepositoryPrivacy>;
  orderBy?: InputMaybe<RepositoryOrder>;
  affiliations?: InputMaybe<Array<InputMaybe<RepositoryAffiliation>>>;
  ownerAffiliations?: InputMaybe<Array<InputMaybe<RepositoryAffiliation>>>;
  isLocked?: InputMaybe<Scalars["Boolean"]>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  isFork?: InputMaybe<Scalars["Boolean"]>;
};

export type OrganizationRepositoryArgs = {
  name: Scalars["String"];
  followRenames?: InputMaybe<Scalars["Boolean"]>;
};

export type OrganizationRepositoryDiscussionCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  repositoryId?: InputMaybe<Scalars["ID"]>;
  onlyAnswers?: InputMaybe<Scalars["Boolean"]>;
};

export type OrganizationRepositoryDiscussionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DiscussionOrder>;
  repositoryId?: InputMaybe<Scalars["ID"]>;
  answered?: InputMaybe<Scalars["Boolean"]>;
  states?: InputMaybe<Array<DiscussionState>>;
};

export type OrganizationRepositoryMigrationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  state?: InputMaybe<MigrationState>;
  repositoryName?: InputMaybe<Scalars["String"]>;
  orderBy?: InputMaybe<RepositoryMigrationOrder>;
};

export type OrganizationSponsoringArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SponsorOrder>;
};

export type OrganizationSponsorsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  tierId?: InputMaybe<Scalars["ID"]>;
  orderBy?: InputMaybe<SponsorOrder>;
};

export type OrganizationSponsorsActivitiesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  period?: InputMaybe<SponsorsActivityPeriod>;
  since?: InputMaybe<Scalars["DateTime"]>;
  until?: InputMaybe<Scalars["DateTime"]>;
  orderBy?: InputMaybe<SponsorsActivityOrder>;
  actions?: InputMaybe<Array<SponsorsActivityAction>>;
  includeAsSponsor?: InputMaybe<Scalars["Boolean"]>;
};

export type OrganizationSponsorshipForViewerAsSponsorArgs = {
  activeOnly?: InputMaybe<Scalars["Boolean"]>;
};

export type OrganizationSponsorshipForViewerAsSponsorableArgs = {
  activeOnly?: InputMaybe<Scalars["Boolean"]>;
};

export type OrganizationSponsorshipNewslettersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SponsorshipNewsletterOrder>;
};

export type OrganizationSponsorshipsAsMaintainerArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  includePrivate?: InputMaybe<Scalars["Boolean"]>;
  orderBy?: InputMaybe<SponsorshipOrder>;
  activeOnly?: InputMaybe<Scalars["Boolean"]>;
};

export type OrganizationSponsorshipsAsSponsorArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SponsorshipOrder>;
  maintainerLogins?: InputMaybe<Array<Scalars["String"]>>;
  activeOnly?: InputMaybe<Scalars["Boolean"]>;
};

export type OrganizationTeamArgs = {
  slug: Scalars["String"];
};

export type OrganizationTeamsArgs = {
  privacy?: InputMaybe<TeamPrivacy>;
  notificationSetting?: InputMaybe<TeamNotificationSetting>;
  role?: InputMaybe<TeamRole>;
  query?: InputMaybe<Scalars["String"]>;
  userLogins?: InputMaybe<Array<Scalars["String"]>>;
  orderBy?: InputMaybe<TeamOrder>;
  ldapMapped?: InputMaybe<Scalars["Boolean"]>;
  rootTeamsOnly?: InputMaybe<Scalars["Boolean"]>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type OrganizationTotalSponsorshipAmountAsSponsorInCentsArgs = {
  since?: InputMaybe<Scalars["DateTime"]>;
  until?: InputMaybe<Scalars["DateTime"]>;
  sponsorableLogins?: InputMaybe<Array<Scalars["String"]>>;
};

export type OrganizationAuditEntry =
  | MembersCanDeleteReposClearAuditEntry
  | MembersCanDeleteReposDisableAuditEntry
  | MembersCanDeleteReposEnableAuditEntry
  | OauthApplicationCreateAuditEntry
  | OrgAddBillingManagerAuditEntry
  | OrgAddMemberAuditEntry
  | OrgBlockUserAuditEntry
  | OrgConfigDisableCollaboratorsOnlyAuditEntry
  | OrgConfigEnableCollaboratorsOnlyAuditEntry
  | OrgCreateAuditEntry
  | OrgDisableOauthAppRestrictionsAuditEntry
  | OrgDisableSamlAuditEntry
  | OrgDisableTwoFactorRequirementAuditEntry
  | OrgEnableOauthAppRestrictionsAuditEntry
  | OrgEnableSamlAuditEntry
  | OrgEnableTwoFactorRequirementAuditEntry
  | OrgInviteMemberAuditEntry
  | OrgInviteToBusinessAuditEntry
  | OrgOauthAppAccessApprovedAuditEntry
  | OrgOauthAppAccessDeniedAuditEntry
  | OrgOauthAppAccessRequestedAuditEntry
  | OrgRemoveBillingManagerAuditEntry
  | OrgRemoveMemberAuditEntry
  | OrgRemoveOutsideCollaboratorAuditEntry
  | OrgRestoreMemberAuditEntry
  | OrgUnblockUserAuditEntry
  | OrgUpdateDefaultRepositoryPermissionAuditEntry
  | OrgUpdateMemberAuditEntry
  | OrgUpdateMemberRepositoryCreationPermissionAuditEntry
  | OrgUpdateMemberRepositoryInvitationPermissionAuditEntry
  | PrivateRepositoryForkingDisableAuditEntry
  | PrivateRepositoryForkingEnableAuditEntry
  | RepoAccessAuditEntry
  | RepoAddMemberAuditEntry
  | RepoAddTopicAuditEntry
  | RepoArchivedAuditEntry
  | RepoChangeMergeSettingAuditEntry
  | RepoConfigDisableAnonymousGitAccessAuditEntry
  | RepoConfigDisableCollaboratorsOnlyAuditEntry
  | RepoConfigDisableContributorsOnlyAuditEntry
  | RepoConfigDisableSockpuppetDisallowedAuditEntry
  | RepoConfigEnableAnonymousGitAccessAuditEntry
  | RepoConfigEnableCollaboratorsOnlyAuditEntry
  | RepoConfigEnableContributorsOnlyAuditEntry
  | RepoConfigEnableSockpuppetDisallowedAuditEntry
  | RepoConfigLockAnonymousGitAccessAuditEntry
  | RepoConfigUnlockAnonymousGitAccessAuditEntry
  | RepoCreateAuditEntry
  | RepoDestroyAuditEntry
  | RepoRemoveMemberAuditEntry
  | RepoRemoveTopicAuditEntry
  | RepositoryVisibilityChangeDisableAuditEntry
  | RepositoryVisibilityChangeEnableAuditEntry
  | TeamAddMemberAuditEntry
  | TeamAddRepositoryAuditEntry
  | TeamChangeParentTeamAuditEntry
  | TeamRemoveMemberAuditEntry
  | TeamRemoveRepositoryAuditEntry;

export type OrganizationAuditEntryConnection = {
  __typename?: "OrganizationAuditEntryConnection";
  edges?: Maybe<Array<Maybe<OrganizationAuditEntryEdge>>>;
  nodes?: Maybe<Array<Maybe<OrganizationAuditEntry>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type OrganizationAuditEntryData = {
  organization?: Maybe<Organization>;
  organizationName?: Maybe<Scalars["String"]>;
  organizationResourcePath?: Maybe<Scalars["URI"]>;
  organizationUrl?: Maybe<Scalars["URI"]>;
};

export type OrganizationAuditEntryEdge = {
  __typename?: "OrganizationAuditEntryEdge";
  cursor: Scalars["String"];
  node?: Maybe<OrganizationAuditEntry>;
};

export type OrganizationConnection = {
  __typename?: "OrganizationConnection";
  edges?: Maybe<Array<Maybe<OrganizationEdge>>>;
  nodes?: Maybe<Array<Maybe<Organization>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type OrganizationEdge = {
  __typename?: "OrganizationEdge";
  cursor: Scalars["String"];
  node?: Maybe<Organization>;
};

export type OrganizationEnterpriseOwnerConnection = {
  __typename?: "OrganizationEnterpriseOwnerConnection";
  edges?: Maybe<Array<Maybe<OrganizationEnterpriseOwnerEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type OrganizationEnterpriseOwnerEdge = {
  __typename?: "OrganizationEnterpriseOwnerEdge";
  cursor: Scalars["String"];
  node?: Maybe<User>;
  organizationRole: RoleInOrganization;
};

export type OrganizationIdentityProvider = Node & {
  __typename?: "OrganizationIdentityProvider";
  digestMethod?: Maybe<Scalars["URI"]>;
  externalIdentities: ExternalIdentityConnection;
  id: Scalars["ID"];
  idpCertificate?: Maybe<Scalars["X509Certificate"]>;
  issuer?: Maybe<Scalars["String"]>;
  organization?: Maybe<Organization>;
  signatureMethod?: Maybe<Scalars["URI"]>;
  ssoUrl?: Maybe<Scalars["URI"]>;
};

export type OrganizationIdentityProviderExternalIdentitiesArgs = {
  membersOnly?: InputMaybe<Scalars["Boolean"]>;
  login?: InputMaybe<Scalars["String"]>;
  userName?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type OrganizationInvitation = Node & {
  __typename?: "OrganizationInvitation";
  createdAt: Scalars["DateTime"];
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  invitationSource: OrganizationInvitationSource;
  invitationType: OrganizationInvitationType;
  invitee?: Maybe<User>;
  inviter: User;
  organization: Organization;
  role: OrganizationInvitationRole;
};

export type OrganizationInvitationConnection = {
  __typename?: "OrganizationInvitationConnection";
  edges?: Maybe<Array<Maybe<OrganizationInvitationEdge>>>;
  nodes?: Maybe<Array<Maybe<OrganizationInvitation>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type OrganizationInvitationEdge = {
  __typename?: "OrganizationInvitationEdge";
  cursor: Scalars["String"];
  node?: Maybe<OrganizationInvitation>;
};

export enum OrganizationInvitationRole {
  DirectMember = "DIRECT_MEMBER",
  Admin = "ADMIN",
  BillingManager = "BILLING_MANAGER",
  Reinstate = "REINSTATE",
}

export enum OrganizationInvitationSource {
  Unknown = "UNKNOWN",
  Member = "MEMBER",
  Scim = "SCIM",
}

export enum OrganizationInvitationType {
  User = "USER",
  Email = "EMAIL",
}

export type OrganizationMemberConnection = {
  __typename?: "OrganizationMemberConnection";
  edges?: Maybe<Array<Maybe<OrganizationMemberEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type OrganizationMemberEdge = {
  __typename?: "OrganizationMemberEdge";
  cursor: Scalars["String"];
  hasTwoFactorEnabled?: Maybe<Scalars["Boolean"]>;
  node?: Maybe<User>;
  role?: Maybe<OrganizationMemberRole>;
};

export enum OrganizationMemberRole {
  Member = "MEMBER",
  Admin = "ADMIN",
}

export enum OrganizationMembersCanCreateRepositoriesSettingValue {
  All = "ALL",
  Private = "PRIVATE",
  Internal = "INTERNAL",
  Disabled = "DISABLED",
}

export type OrganizationMigration = Node & {
  __typename?: "OrganizationMigration";
  createdAt: Scalars["DateTime"];
  databaseId?: Maybe<Scalars["String"]>;
  failureReason?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  remainingRepositoriesCount?: Maybe<Scalars["Int"]>;
  sourceOrgName: Scalars["String"];
  sourceOrgUrl: Scalars["URI"];
  state: OrganizationMigrationState;
  targetOrgName: Scalars["String"];
  totalRepositoriesCount?: Maybe<Scalars["Int"]>;
};

export enum OrganizationMigrationState {
  NotStarted = "NOT_STARTED",
  Queued = "QUEUED",
  InProgress = "IN_PROGRESS",
  PreRepoMigration = "PRE_REPO_MIGRATION",
  RepoMigration = "REPO_MIGRATION",
  PostRepoMigration = "POST_REPO_MIGRATION",
  Succeeded = "SUCCEEDED",
  Failed = "FAILED",
}

export type OrganizationOrUser = Organization | User;

export type OrganizationOrder = {
  field: OrganizationOrderField;
  direction: OrderDirection;
};

export enum OrganizationOrderField {
  CreatedAt = "CREATED_AT",
  Login = "LOGIN",
}

export type OrganizationTeamsHovercardContext = HovercardContext & {
  __typename?: "OrganizationTeamsHovercardContext";
  message: Scalars["String"];
  octicon: Scalars["String"];
  relevantTeams: TeamConnection;
  teamsResourcePath: Scalars["URI"];
  teamsUrl: Scalars["URI"];
  totalTeamCount: Scalars["Int"];
};

export type OrganizationTeamsHovercardContextRelevantTeamsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type OrganizationsHovercardContext = HovercardContext & {
  __typename?: "OrganizationsHovercardContext";
  message: Scalars["String"];
  octicon: Scalars["String"];
  relevantOrganizations: OrganizationConnection;
  totalOrganizationCount: Scalars["Int"];
};

export type OrganizationsHovercardContextRelevantOrganizationsArgs = {
  orderBy?: InputMaybe<OrganizationOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type Package = Node & {
  __typename?: "Package";
  id: Scalars["ID"];
  latestVersion?: Maybe<PackageVersion>;
  name: Scalars["String"];
  packageType: PackageType;
  repository?: Maybe<Repository>;
  statistics?: Maybe<PackageStatistics>;
  version?: Maybe<PackageVersion>;
  versions: PackageVersionConnection;
};

export type PackageVersionArgs = {
  version: Scalars["String"];
};

export type PackageVersionsArgs = {
  orderBy?: InputMaybe<PackageVersionOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PackageConnection = {
  __typename?: "PackageConnection";
  edges?: Maybe<Array<Maybe<PackageEdge>>>;
  nodes?: Maybe<Array<Maybe<Package>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PackageEdge = {
  __typename?: "PackageEdge";
  cursor: Scalars["String"];
  node?: Maybe<Package>;
};

export type PackageFile = Node & {
  __typename?: "PackageFile";
  id: Scalars["ID"];
  md5?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  packageVersion?: Maybe<PackageVersion>;
  sha1?: Maybe<Scalars["String"]>;
  sha256?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Int"]>;
  updatedAt: Scalars["DateTime"];
  url?: Maybe<Scalars["URI"]>;
};

export type PackageFileConnection = {
  __typename?: "PackageFileConnection";
  edges?: Maybe<Array<Maybe<PackageFileEdge>>>;
  nodes?: Maybe<Array<Maybe<PackageFile>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PackageFileEdge = {
  __typename?: "PackageFileEdge";
  cursor: Scalars["String"];
  node?: Maybe<PackageFile>;
};

export type PackageFileOrder = {
  field?: InputMaybe<PackageFileOrderField>;
  direction?: InputMaybe<OrderDirection>;
};

export enum PackageFileOrderField {
  CreatedAt = "CREATED_AT",
}

export type PackageOrder = {
  field?: InputMaybe<PackageOrderField>;
  direction?: InputMaybe<OrderDirection>;
};

export enum PackageOrderField {
  CreatedAt = "CREATED_AT",
}

export type PackageOwner = {
  id: Scalars["ID"];
  packages: PackageConnection;
};

export type PackageOwnerPackagesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  names?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  repositoryId?: InputMaybe<Scalars["ID"]>;
  packageType?: InputMaybe<PackageType>;
  orderBy?: InputMaybe<PackageOrder>;
};

export type PackageStatistics = {
  __typename?: "PackageStatistics";
  downloadsTotalCount: Scalars["Int"];
};

export type PackageTag = Node & {
  __typename?: "PackageTag";
  id: Scalars["ID"];
  name: Scalars["String"];
  version?: Maybe<PackageVersion>;
};

export enum PackageType {
  /** @deprecated NPM will be removed from this enum as this type will be migrated to only be used by the Packages REST API. Removal on 2022-11-21 UTC. */
  Npm = "NPM",
  /** @deprecated RUBYGEMS will be removed from this enum as this type will be migrated to only be used by the Packages REST API. Removal on 2022-12-28 UTC. */
  Rubygems = "RUBYGEMS",
  /** @deprecated MAVEN will be removed from this enum as this type will be migrated to only be used by the Packages REST API. Removal on 2023-02-10 UTC. */
  Maven = "MAVEN",
  /** @deprecated DOCKER will be removed from this enum as this type will be migrated to only be used by the Packages REST API. Removal on 2021-06-21 UTC. */
  Docker = "DOCKER",
  Debian = "DEBIAN",
  /** @deprecated NUGET will be removed from this enum as this type will be migrated to only be used by the Packages REST API. Removal on 2022-11-21 UTC. */
  Nuget = "NUGET",
  Pypi = "PYPI",
}

export type PackageVersion = Node & {
  __typename?: "PackageVersion";
  files: PackageFileConnection;
  id: Scalars["ID"];
  package?: Maybe<Package>;
  platform?: Maybe<Scalars["String"]>;
  preRelease: Scalars["Boolean"];
  readme?: Maybe<Scalars["String"]>;
  release?: Maybe<Release>;
  statistics?: Maybe<PackageVersionStatistics>;
  summary?: Maybe<Scalars["String"]>;
  version: Scalars["String"];
};

export type PackageVersionFilesArgs = {
  orderBy?: InputMaybe<PackageFileOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PackageVersionConnection = {
  __typename?: "PackageVersionConnection";
  edges?: Maybe<Array<Maybe<PackageVersionEdge>>>;
  nodes?: Maybe<Array<Maybe<PackageVersion>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PackageVersionEdge = {
  __typename?: "PackageVersionEdge";
  cursor: Scalars["String"];
  node?: Maybe<PackageVersion>;
};

export type PackageVersionOrder = {
  field?: InputMaybe<PackageVersionOrderField>;
  direction?: InputMaybe<OrderDirection>;
};

export enum PackageVersionOrderField {
  CreatedAt = "CREATED_AT",
}

export type PackageVersionStatistics = {
  __typename?: "PackageVersionStatistics";
  downloadsTotalCount: Scalars["Int"];
};

export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]>;
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  startCursor?: Maybe<Scalars["String"]>;
};

export enum PatchStatus {
  Added = "ADDED",
  Deleted = "DELETED",
  Renamed = "RENAMED",
  Copied = "COPIED",
  Modified = "MODIFIED",
  Changed = "CHANGED",
}

export type PermissionGranter = Organization | Repository | Team;

export type PermissionSource = {
  __typename?: "PermissionSource";
  organization: Organization;
  permission: DefaultRepositoryPermissionField;
  source: PermissionGranter;
};

export type PinIssueInput = {
  issueId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type PinIssuePayload = {
  __typename?: "PinIssuePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  issue?: Maybe<Issue>;
};

export type PinnableItem = Gist | Repository;

export type PinnableItemConnection = {
  __typename?: "PinnableItemConnection";
  edges?: Maybe<Array<Maybe<PinnableItemEdge>>>;
  nodes?: Maybe<Array<Maybe<PinnableItem>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PinnableItemEdge = {
  __typename?: "PinnableItemEdge";
  cursor: Scalars["String"];
  node?: Maybe<PinnableItem>;
};

export enum PinnableItemType {
  Repository = "REPOSITORY",
  Gist = "GIST",
  Issue = "ISSUE",
  Project = "PROJECT",
  PullRequest = "PULL_REQUEST",
  User = "USER",
  Organization = "ORGANIZATION",
  Team = "TEAM",
}

export type PinnedDiscussion = Node &
  RepositoryNode & {
    __typename?: "PinnedDiscussion";
    createdAt: Scalars["DateTime"];
    databaseId?: Maybe<Scalars["Int"]>;
    discussion: Discussion;
    gradientStopColors: Array<Scalars["String"]>;
    id: Scalars["ID"];
    pattern: PinnedDiscussionPattern;
    pinnedBy: Actor;
    preconfiguredGradient?: Maybe<PinnedDiscussionGradient>;
    repository: Repository;
    updatedAt: Scalars["DateTime"];
  };

export type PinnedDiscussionConnection = {
  __typename?: "PinnedDiscussionConnection";
  edges?: Maybe<Array<Maybe<PinnedDiscussionEdge>>>;
  nodes?: Maybe<Array<Maybe<PinnedDiscussion>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PinnedDiscussionEdge = {
  __typename?: "PinnedDiscussionEdge";
  cursor: Scalars["String"];
  node?: Maybe<PinnedDiscussion>;
};

export enum PinnedDiscussionGradient {
  RedOrange = "RED_ORANGE",
  BlueMint = "BLUE_MINT",
  BluePurple = "BLUE_PURPLE",
  PinkBlue = "PINK_BLUE",
  PurpleCoral = "PURPLE_CORAL",
}

export enum PinnedDiscussionPattern {
  DotFill = "DOT_FILL",
  Plus = "PLUS",
  Zap = "ZAP",
  ChevronUp = "CHEVRON_UP",
  Dot = "DOT",
  HeartFill = "HEART_FILL",
}

export type PinnedEvent = Node & {
  __typename?: "PinnedEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  issue: Issue;
};

export type PinnedIssue = Node & {
  __typename?: "PinnedIssue";
  databaseId?: Maybe<Scalars["Int"]>;
  fullDatabaseId?: Maybe<Scalars["BigInt"]>;
  id: Scalars["ID"];
  issue: Issue;
  pinnedBy: Actor;
  repository: Repository;
};

export type PinnedIssueConnection = {
  __typename?: "PinnedIssueConnection";
  edges?: Maybe<Array<Maybe<PinnedIssueEdge>>>;
  nodes?: Maybe<Array<Maybe<PinnedIssue>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PinnedIssueEdge = {
  __typename?: "PinnedIssueEdge";
  cursor: Scalars["String"];
  node?: Maybe<PinnedIssue>;
};

export type PrivateRepositoryForkingDisableAuditEntry = Node &
  AuditEntry &
  EnterpriseAuditEntryData &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "PrivateRepositoryForkingDisableAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    enterpriseResourcePath?: Maybe<Scalars["URI"]>;
    enterpriseSlug?: Maybe<Scalars["String"]>;
    enterpriseUrl?: Maybe<Scalars["URI"]>;
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    repository?: Maybe<Repository>;
    repositoryName?: Maybe<Scalars["String"]>;
    repositoryResourcePath?: Maybe<Scalars["URI"]>;
    repositoryUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type PrivateRepositoryForkingEnableAuditEntry = Node &
  AuditEntry &
  EnterpriseAuditEntryData &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "PrivateRepositoryForkingEnableAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    enterpriseResourcePath?: Maybe<Scalars["URI"]>;
    enterpriseSlug?: Maybe<Scalars["String"]>;
    enterpriseUrl?: Maybe<Scalars["URI"]>;
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    repository?: Maybe<Repository>;
    repositoryName?: Maybe<Scalars["String"]>;
    repositoryResourcePath?: Maybe<Scalars["URI"]>;
    repositoryUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type ProfileItemShowcase = {
  __typename?: "ProfileItemShowcase";
  hasPinnedItems: Scalars["Boolean"];
  items: PinnableItemConnection;
};

export type ProfileItemShowcaseItemsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type ProfileOwner = {
  anyPinnableItems: Scalars["Boolean"];
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  itemShowcase: ProfileItemShowcase;
  location?: Maybe<Scalars["String"]>;
  login: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  pinnableItems: PinnableItemConnection;
  pinnedItems: PinnableItemConnection;
  pinnedItemsRemaining: Scalars["Int"];
  viewerCanChangePinnedItems: Scalars["Boolean"];
  websiteUrl?: Maybe<Scalars["URI"]>;
};

export type ProfileOwnerAnyPinnableItemsArgs = {
  type?: InputMaybe<PinnableItemType>;
};

export type ProfileOwnerPinnableItemsArgs = {
  types?: InputMaybe<Array<PinnableItemType>>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type ProfileOwnerPinnedItemsArgs = {
  types?: InputMaybe<Array<PinnableItemType>>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type Project = Node &
  Closable &
  Updatable & {
    __typename?: "Project";
    body?: Maybe<Scalars["String"]>;
    bodyHTML: Scalars["HTML"];
    closed: Scalars["Boolean"];
    closedAt?: Maybe<Scalars["DateTime"]>;
    columns: ProjectColumnConnection;
    createdAt: Scalars["DateTime"];
    creator?: Maybe<Actor>;
    databaseId?: Maybe<Scalars["Int"]>;
    id: Scalars["ID"];
    name: Scalars["String"];
    number: Scalars["Int"];
    owner: ProjectOwner;
    pendingCards: ProjectCardConnection;
    progress: ProjectProgress;
    resourcePath: Scalars["URI"];
    state: ProjectState;
    updatedAt: Scalars["DateTime"];
    url: Scalars["URI"];
    viewerCanClose: Scalars["Boolean"];
    viewerCanReopen: Scalars["Boolean"];
    viewerCanUpdate: Scalars["Boolean"];
  };

export type ProjectColumnsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type ProjectPendingCardsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  archivedStates?: InputMaybe<Array<InputMaybe<ProjectCardArchivedState>>>;
};

export type ProjectCard = Node & {
  __typename?: "ProjectCard";
  column?: Maybe<ProjectColumn>;
  content?: Maybe<ProjectCardItem>;
  createdAt: Scalars["DateTime"];
  creator?: Maybe<Actor>;
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  isArchived: Scalars["Boolean"];
  note?: Maybe<Scalars["String"]>;
  project: Project;
  resourcePath: Scalars["URI"];
  state?: Maybe<ProjectCardState>;
  updatedAt: Scalars["DateTime"];
  url: Scalars["URI"];
};

export enum ProjectCardArchivedState {
  Archived = "ARCHIVED",
  NotArchived = "NOT_ARCHIVED",
}

export type ProjectCardConnection = {
  __typename?: "ProjectCardConnection";
  edges?: Maybe<Array<Maybe<ProjectCardEdge>>>;
  nodes?: Maybe<Array<Maybe<ProjectCard>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ProjectCardEdge = {
  __typename?: "ProjectCardEdge";
  cursor: Scalars["String"];
  node?: Maybe<ProjectCard>;
};

export type ProjectCardItem = Issue | PullRequest;

export enum ProjectCardState {
  ContentOnly = "CONTENT_ONLY",
  NoteOnly = "NOTE_ONLY",
  Redacted = "REDACTED",
}

export type ProjectColumn = Node & {
  __typename?: "ProjectColumn";
  cards: ProjectCardConnection;
  createdAt: Scalars["DateTime"];
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  project: Project;
  purpose?: Maybe<ProjectColumnPurpose>;
  resourcePath: Scalars["URI"];
  updatedAt: Scalars["DateTime"];
  url: Scalars["URI"];
};

export type ProjectColumnCardsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  archivedStates?: InputMaybe<Array<InputMaybe<ProjectCardArchivedState>>>;
};

export type ProjectColumnConnection = {
  __typename?: "ProjectColumnConnection";
  edges?: Maybe<Array<Maybe<ProjectColumnEdge>>>;
  nodes?: Maybe<Array<Maybe<ProjectColumn>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ProjectColumnEdge = {
  __typename?: "ProjectColumnEdge";
  cursor: Scalars["String"];
  node?: Maybe<ProjectColumn>;
};

export enum ProjectColumnPurpose {
  Todo = "TODO",
  InProgress = "IN_PROGRESS",
  Done = "DONE",
}

export type ProjectConnection = {
  __typename?: "ProjectConnection";
  edges?: Maybe<Array<Maybe<ProjectEdge>>>;
  nodes?: Maybe<Array<Maybe<Project>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ProjectEdge = {
  __typename?: "ProjectEdge";
  cursor: Scalars["String"];
  node?: Maybe<Project>;
};

export type ProjectOrder = {
  field: ProjectOrderField;
  direction: OrderDirection;
};

export enum ProjectOrderField {
  CreatedAt = "CREATED_AT",
  UpdatedAt = "UPDATED_AT",
  Name = "NAME",
}

export type ProjectOwner = {
  id: Scalars["ID"];
  project?: Maybe<Project>;
  projects: ProjectConnection;
  projectsResourcePath: Scalars["URI"];
  projectsUrl: Scalars["URI"];
  viewerCanCreateProjects: Scalars["Boolean"];
};

export type ProjectOwnerProjectArgs = {
  number: Scalars["Int"];
};

export type ProjectOwnerProjectsArgs = {
  orderBy?: InputMaybe<ProjectOrder>;
  search?: InputMaybe<Scalars["String"]>;
  states?: InputMaybe<Array<ProjectState>>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type ProjectProgress = {
  __typename?: "ProjectProgress";
  doneCount: Scalars["Int"];
  donePercentage: Scalars["Float"];
  enabled: Scalars["Boolean"];
  inProgressCount: Scalars["Int"];
  inProgressPercentage: Scalars["Float"];
  todoCount: Scalars["Int"];
  todoPercentage: Scalars["Float"];
};

export enum ProjectState {
  Open = "OPEN",
  Closed = "CLOSED",
}

export enum ProjectTemplate {
  BasicKanban = "BASIC_KANBAN",
  AutomatedKanbanV2 = "AUTOMATED_KANBAN_V2",
  AutomatedReviewsKanban = "AUTOMATED_REVIEWS_KANBAN",
  BugTriage = "BUG_TRIAGE",
}

export type ProjectV2 = Closable &
  Updatable &
  Node & {
    __typename?: "ProjectV2";
    closed: Scalars["Boolean"];
    closedAt?: Maybe<Scalars["DateTime"]>;
    createdAt: Scalars["DateTime"];
    creator?: Maybe<Actor>;
    databaseId?: Maybe<Scalars["Int"]>;
    field?: Maybe<ProjectV2FieldConfiguration>;
    fields: ProjectV2FieldConfigurationConnection;
    id: Scalars["ID"];
    items: ProjectV2ItemConnection;
    number: Scalars["Int"];
    owner: ProjectV2Owner;
    public: Scalars["Boolean"];
    readme?: Maybe<Scalars["String"]>;
    repositories: RepositoryConnection;
    resourcePath: Scalars["URI"];
    shortDescription?: Maybe<Scalars["String"]>;
    teams: TeamConnection;
    template: Scalars["Boolean"];
    title: Scalars["String"];
    updatedAt: Scalars["DateTime"];
    url: Scalars["URI"];
    view?: Maybe<ProjectV2View>;
    viewerCanClose: Scalars["Boolean"];
    viewerCanReopen: Scalars["Boolean"];
    viewerCanUpdate: Scalars["Boolean"];
    views: ProjectV2ViewConnection;
    workflow?: Maybe<ProjectV2Workflow>;
    workflows: ProjectV2WorkflowConnection;
  };

export type ProjectV2FieldArgs = {
  name: Scalars["String"];
};

export type ProjectV2FieldsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProjectV2FieldOrder>;
};

export type ProjectV2ItemsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProjectV2ItemOrder>;
};

export type ProjectV2RepositoriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RepositoryOrder>;
};

export type ProjectV2TeamsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TeamOrder>;
};

export type ProjectV2ViewArgs = {
  number: Scalars["Int"];
};

export type ProjectV2ViewsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProjectV2ViewOrder>;
};

export type ProjectV2WorkflowArgs = {
  number: Scalars["Int"];
};

export type ProjectV2WorkflowsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProjectV2WorkflowOrder>;
};

export type ProjectV2Connection = {
  __typename?: "ProjectV2Connection";
  edges?: Maybe<Array<Maybe<ProjectV2Edge>>>;
  nodes?: Maybe<Array<Maybe<ProjectV2>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export enum ProjectV2CustomFieldType {
  Text = "TEXT",
  SingleSelect = "SINGLE_SELECT",
  Number = "NUMBER",
  Date = "DATE",
}

export type ProjectV2Edge = {
  __typename?: "ProjectV2Edge";
  cursor: Scalars["String"];
  node?: Maybe<ProjectV2>;
};

export type ProjectV2Field = ProjectV2FieldCommon &
  Node & {
    __typename?: "ProjectV2Field";
    createdAt: Scalars["DateTime"];
    dataType: ProjectV2FieldType;
    databaseId?: Maybe<Scalars["Int"]>;
    id: Scalars["ID"];
    name: Scalars["String"];
    project: ProjectV2;
    updatedAt: Scalars["DateTime"];
  };

export type ProjectV2FieldCommon = {
  createdAt: Scalars["DateTime"];
  dataType: ProjectV2FieldType;
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  project: ProjectV2;
  updatedAt: Scalars["DateTime"];
};

export type ProjectV2FieldConfiguration =
  | ProjectV2Field
  | ProjectV2IterationField
  | ProjectV2SingleSelectField;

export type ProjectV2FieldConfigurationConnection = {
  __typename?: "ProjectV2FieldConfigurationConnection";
  edges?: Maybe<Array<Maybe<ProjectV2FieldConfigurationEdge>>>;
  nodes?: Maybe<Array<Maybe<ProjectV2FieldConfiguration>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ProjectV2FieldConfigurationEdge = {
  __typename?: "ProjectV2FieldConfigurationEdge";
  cursor: Scalars["String"];
  node?: Maybe<ProjectV2FieldConfiguration>;
};

export type ProjectV2FieldConnection = {
  __typename?: "ProjectV2FieldConnection";
  edges?: Maybe<Array<Maybe<ProjectV2FieldEdge>>>;
  nodes?: Maybe<Array<Maybe<ProjectV2Field>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ProjectV2FieldEdge = {
  __typename?: "ProjectV2FieldEdge";
  cursor: Scalars["String"];
  node?: Maybe<ProjectV2Field>;
};

export type ProjectV2FieldOrder = {
  field: ProjectV2FieldOrderField;
  direction: OrderDirection;
};

export enum ProjectV2FieldOrderField {
  Position = "POSITION",
  CreatedAt = "CREATED_AT",
  Name = "NAME",
}

export enum ProjectV2FieldType {
  Assignees = "ASSIGNEES",
  LinkedPullRequests = "LINKED_PULL_REQUESTS",
  Reviewers = "REVIEWERS",
  Labels = "LABELS",
  Milestone = "MILESTONE",
  Repository = "REPOSITORY",
  Title = "TITLE",
  Text = "TEXT",
  SingleSelect = "SINGLE_SELECT",
  Number = "NUMBER",
  Date = "DATE",
  Iteration = "ITERATION",
  Tracks = "TRACKS",
  TrackedBy = "TRACKED_BY",
}

export type ProjectV2FieldValue = {
  text?: InputMaybe<Scalars["String"]>;
  number?: InputMaybe<Scalars["Float"]>;
  date?: InputMaybe<Scalars["Date"]>;
  singleSelectOptionId?: InputMaybe<Scalars["String"]>;
  iterationId?: InputMaybe<Scalars["String"]>;
};

export type ProjectV2Filters = {
  state?: InputMaybe<ProjectV2State>;
};

export type ProjectV2Item = Node & {
  __typename?: "ProjectV2Item";
  content?: Maybe<ProjectV2ItemContent>;
  createdAt: Scalars["DateTime"];
  creator?: Maybe<Actor>;
  databaseId?: Maybe<Scalars["Int"]>;
  fieldValueByName?: Maybe<ProjectV2ItemFieldValue>;
  fieldValues: ProjectV2ItemFieldValueConnection;
  id: Scalars["ID"];
  isArchived: Scalars["Boolean"];
  project: ProjectV2;
  type: ProjectV2ItemType;
  updatedAt: Scalars["DateTime"];
};

export type ProjectV2ItemFieldValueByNameArgs = {
  name: Scalars["String"];
};

export type ProjectV2ItemFieldValuesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProjectV2ItemFieldValueOrder>;
};

export type ProjectV2ItemConnection = {
  __typename?: "ProjectV2ItemConnection";
  edges?: Maybe<Array<Maybe<ProjectV2ItemEdge>>>;
  nodes?: Maybe<Array<Maybe<ProjectV2Item>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ProjectV2ItemContent = DraftIssue | Issue | PullRequest;

export type ProjectV2ItemEdge = {
  __typename?: "ProjectV2ItemEdge";
  cursor: Scalars["String"];
  node?: Maybe<ProjectV2Item>;
};

export type ProjectV2ItemFieldDateValue = ProjectV2ItemFieldValueCommon &
  Node & {
    __typename?: "ProjectV2ItemFieldDateValue";
    createdAt: Scalars["DateTime"];
    creator?: Maybe<Actor>;
    databaseId?: Maybe<Scalars["Int"]>;
    date?: Maybe<Scalars["Date"]>;
    field: ProjectV2FieldConfiguration;
    id: Scalars["ID"];
    item: ProjectV2Item;
    updatedAt: Scalars["DateTime"];
  };

export type ProjectV2ItemFieldIterationValue = ProjectV2ItemFieldValueCommon &
  Node & {
    __typename?: "ProjectV2ItemFieldIterationValue";
    createdAt: Scalars["DateTime"];
    creator?: Maybe<Actor>;
    databaseId?: Maybe<Scalars["Int"]>;
    duration: Scalars["Int"];
    field: ProjectV2FieldConfiguration;
    id: Scalars["ID"];
    item: ProjectV2Item;
    iterationId: Scalars["String"];
    startDate: Scalars["Date"];
    title: Scalars["String"];
    titleHTML: Scalars["String"];
    updatedAt: Scalars["DateTime"];
  };

export type ProjectV2ItemFieldLabelValue = {
  __typename?: "ProjectV2ItemFieldLabelValue";
  field: ProjectV2FieldConfiguration;
  labels?: Maybe<LabelConnection>;
};

export type ProjectV2ItemFieldLabelValueLabelsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type ProjectV2ItemFieldMilestoneValue = {
  __typename?: "ProjectV2ItemFieldMilestoneValue";
  field: ProjectV2FieldConfiguration;
  milestone?: Maybe<Milestone>;
};

export type ProjectV2ItemFieldNumberValue = ProjectV2ItemFieldValueCommon &
  Node & {
    __typename?: "ProjectV2ItemFieldNumberValue";
    createdAt: Scalars["DateTime"];
    creator?: Maybe<Actor>;
    databaseId?: Maybe<Scalars["Int"]>;
    field: ProjectV2FieldConfiguration;
    id: Scalars["ID"];
    item: ProjectV2Item;
    number?: Maybe<Scalars["Float"]>;
    updatedAt: Scalars["DateTime"];
  };

export type ProjectV2ItemFieldPullRequestValue = {
  __typename?: "ProjectV2ItemFieldPullRequestValue";
  field: ProjectV2FieldConfiguration;
  pullRequests?: Maybe<PullRequestConnection>;
};

export type ProjectV2ItemFieldPullRequestValuePullRequestsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PullRequestOrder>;
};

export type ProjectV2ItemFieldRepositoryValue = {
  __typename?: "ProjectV2ItemFieldRepositoryValue";
  field: ProjectV2FieldConfiguration;
  repository?: Maybe<Repository>;
};

export type ProjectV2ItemFieldReviewerValue = {
  __typename?: "ProjectV2ItemFieldReviewerValue";
  field: ProjectV2FieldConfiguration;
  reviewers?: Maybe<RequestedReviewerConnection>;
};

export type ProjectV2ItemFieldReviewerValueReviewersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type ProjectV2ItemFieldSingleSelectValue =
  ProjectV2ItemFieldValueCommon &
    Node & {
      __typename?: "ProjectV2ItemFieldSingleSelectValue";
      createdAt: Scalars["DateTime"];
      creator?: Maybe<Actor>;
      databaseId?: Maybe<Scalars["Int"]>;
      field: ProjectV2FieldConfiguration;
      id: Scalars["ID"];
      item: ProjectV2Item;
      name?: Maybe<Scalars["String"]>;
      nameHTML?: Maybe<Scalars["String"]>;
      optionId?: Maybe<Scalars["String"]>;
      updatedAt: Scalars["DateTime"];
    };

export type ProjectV2ItemFieldTextValue = ProjectV2ItemFieldValueCommon &
  Node & {
    __typename?: "ProjectV2ItemFieldTextValue";
    createdAt: Scalars["DateTime"];
    creator?: Maybe<Actor>;
    databaseId?: Maybe<Scalars["Int"]>;
    field: ProjectV2FieldConfiguration;
    id: Scalars["ID"];
    item: ProjectV2Item;
    text?: Maybe<Scalars["String"]>;
    updatedAt: Scalars["DateTime"];
  };

export type ProjectV2ItemFieldUserValue = {
  __typename?: "ProjectV2ItemFieldUserValue";
  field: ProjectV2FieldConfiguration;
  users?: Maybe<UserConnection>;
};

export type ProjectV2ItemFieldUserValueUsersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type ProjectV2ItemFieldValue =
  | ProjectV2ItemFieldDateValue
  | ProjectV2ItemFieldIterationValue
  | ProjectV2ItemFieldLabelValue
  | ProjectV2ItemFieldMilestoneValue
  | ProjectV2ItemFieldNumberValue
  | ProjectV2ItemFieldPullRequestValue
  | ProjectV2ItemFieldRepositoryValue
  | ProjectV2ItemFieldReviewerValue
  | ProjectV2ItemFieldSingleSelectValue
  | ProjectV2ItemFieldTextValue
  | ProjectV2ItemFieldUserValue;

export type ProjectV2ItemFieldValueCommon = {
  createdAt: Scalars["DateTime"];
  creator?: Maybe<Actor>;
  databaseId?: Maybe<Scalars["Int"]>;
  field: ProjectV2FieldConfiguration;
  id: Scalars["ID"];
  item: ProjectV2Item;
  updatedAt: Scalars["DateTime"];
};

export type ProjectV2ItemFieldValueConnection = {
  __typename?: "ProjectV2ItemFieldValueConnection";
  edges?: Maybe<Array<Maybe<ProjectV2ItemFieldValueEdge>>>;
  nodes?: Maybe<Array<Maybe<ProjectV2ItemFieldValue>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ProjectV2ItemFieldValueEdge = {
  __typename?: "ProjectV2ItemFieldValueEdge";
  cursor: Scalars["String"];
  node?: Maybe<ProjectV2ItemFieldValue>;
};

export type ProjectV2ItemFieldValueOrder = {
  field: ProjectV2ItemFieldValueOrderField;
  direction: OrderDirection;
};

export enum ProjectV2ItemFieldValueOrderField {
  Position = "POSITION",
}

export type ProjectV2ItemOrder = {
  field: ProjectV2ItemOrderField;
  direction: OrderDirection;
};

export enum ProjectV2ItemOrderField {
  Position = "POSITION",
}

export enum ProjectV2ItemType {
  Issue = "ISSUE",
  PullRequest = "PULL_REQUEST",
  DraftIssue = "DRAFT_ISSUE",
  Redacted = "REDACTED",
}

export type ProjectV2IterationField = ProjectV2FieldCommon &
  Node & {
    __typename?: "ProjectV2IterationField";
    configuration: ProjectV2IterationFieldConfiguration;
    createdAt: Scalars["DateTime"];
    dataType: ProjectV2FieldType;
    databaseId?: Maybe<Scalars["Int"]>;
    id: Scalars["ID"];
    name: Scalars["String"];
    project: ProjectV2;
    updatedAt: Scalars["DateTime"];
  };

export type ProjectV2IterationFieldConfiguration = {
  __typename?: "ProjectV2IterationFieldConfiguration";
  completedIterations: Array<ProjectV2IterationFieldIteration>;
  duration: Scalars["Int"];
  iterations: Array<ProjectV2IterationFieldIteration>;
  startDay: Scalars["Int"];
};

export type ProjectV2IterationFieldIteration = {
  __typename?: "ProjectV2IterationFieldIteration";
  duration: Scalars["Int"];
  id: Scalars["String"];
  startDate: Scalars["Date"];
  title: Scalars["String"];
  titleHTML: Scalars["String"];
};

export type ProjectV2Order = {
  field: ProjectV2OrderField;
  direction: OrderDirection;
};

export enum ProjectV2OrderField {
  Title = "TITLE",
  Number = "NUMBER",
  UpdatedAt = "UPDATED_AT",
  CreatedAt = "CREATED_AT",
}

export type ProjectV2Owner = {
  id: Scalars["ID"];
  projectV2?: Maybe<ProjectV2>;
  projectsV2: ProjectV2Connection;
};

export type ProjectV2OwnerProjectV2Args = {
  number: Scalars["Int"];
};

export type ProjectV2OwnerProjectsV2Args = {
  query?: InputMaybe<Scalars["String"]>;
  orderBy?: InputMaybe<ProjectV2Order>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type ProjectV2Recent = {
  recentProjects: ProjectV2Connection;
};

export type ProjectV2RecentRecentProjectsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type ProjectV2SingleSelectField = ProjectV2FieldCommon &
  Node & {
    __typename?: "ProjectV2SingleSelectField";
    createdAt: Scalars["DateTime"];
    dataType: ProjectV2FieldType;
    databaseId?: Maybe<Scalars["Int"]>;
    id: Scalars["ID"];
    name: Scalars["String"];
    options: Array<ProjectV2SingleSelectFieldOption>;
    project: ProjectV2;
    updatedAt: Scalars["DateTime"];
  };

export type ProjectV2SingleSelectFieldOption = {
  __typename?: "ProjectV2SingleSelectFieldOption";
  id: Scalars["String"];
  name: Scalars["String"];
  nameHTML: Scalars["String"];
};

export enum ProjectV2SingleSelectFieldOptionColor {
  Gray = "GRAY",
  Blue = "BLUE",
  Green = "GREEN",
  Yellow = "YELLOW",
  Orange = "ORANGE",
  Red = "RED",
  Pink = "PINK",
  Purple = "PURPLE",
}

export type ProjectV2SingleSelectFieldOptionInput = {
  name: Scalars["String"];
  color: ProjectV2SingleSelectFieldOptionColor;
  description: Scalars["String"];
};

export type ProjectV2SortBy = {
  __typename?: "ProjectV2SortBy";
  direction: OrderDirection;
  field: ProjectV2Field;
};

export type ProjectV2SortByConnection = {
  __typename?: "ProjectV2SortByConnection";
  edges?: Maybe<Array<Maybe<ProjectV2SortByEdge>>>;
  nodes?: Maybe<Array<Maybe<ProjectV2SortBy>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ProjectV2SortByEdge = {
  __typename?: "ProjectV2SortByEdge";
  cursor: Scalars["String"];
  node?: Maybe<ProjectV2SortBy>;
};

export type ProjectV2SortByField = {
  __typename?: "ProjectV2SortByField";
  direction: OrderDirection;
  field: ProjectV2FieldConfiguration;
};

export type ProjectV2SortByFieldConnection = {
  __typename?: "ProjectV2SortByFieldConnection";
  edges?: Maybe<Array<Maybe<ProjectV2SortByFieldEdge>>>;
  nodes?: Maybe<Array<Maybe<ProjectV2SortByField>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ProjectV2SortByFieldEdge = {
  __typename?: "ProjectV2SortByFieldEdge";
  cursor: Scalars["String"];
  node?: Maybe<ProjectV2SortByField>;
};

export enum ProjectV2State {
  Open = "OPEN",
  Closed = "CLOSED",
}

export type ProjectV2View = Node & {
  __typename?: "ProjectV2View";
  createdAt: Scalars["DateTime"];
  databaseId?: Maybe<Scalars["Int"]>;
  fields?: Maybe<ProjectV2FieldConfigurationConnection>;
  filter?: Maybe<Scalars["String"]>;
  /** @deprecated The `ProjectV2View#order_by` API is deprecated in favour of the more capable `ProjectV2View#group_by_field` API. Check out the `ProjectV2View#group_by_fields` API as an example for the more capable alternative. Removal on 2023-04-01 UTC. */
  groupBy?: Maybe<ProjectV2FieldConnection>;
  groupByFields?: Maybe<ProjectV2FieldConfigurationConnection>;
  id: Scalars["ID"];
  layout: ProjectV2ViewLayout;
  name: Scalars["String"];
  number: Scalars["Int"];
  project: ProjectV2;
  /** @deprecated The `ProjectV2View#sort_by` API is deprecated in favour of the more capable `ProjectV2View#sort_by_fields` API. Check out the `ProjectV2View#sort_by_fields` API as an example for the more capable alternative. Removal on 2023-04-01 UTC. */
  sortBy?: Maybe<ProjectV2SortByConnection>;
  sortByFields?: Maybe<ProjectV2SortByFieldConnection>;
  updatedAt: Scalars["DateTime"];
  /** @deprecated The `ProjectV2View#vertical_group_by` API is deprecated in favour of the more capable `ProjectV2View#vertical_group_by_fields` API. Check out the `ProjectV2View#vertical_group_by_fields` API as an example for the more capable alternative. Removal on 2023-04-01 UTC. */
  verticalGroupBy?: Maybe<ProjectV2FieldConnection>;
  verticalGroupByFields?: Maybe<ProjectV2FieldConfigurationConnection>;
  /** @deprecated The `ProjectV2View#visibleFields` API is deprecated in favour of the more capable `ProjectV2View#fields` API. Check out the `ProjectV2View#fields` API as an example for the more capable alternative. Removal on 2023-01-01 UTC. */
  visibleFields?: Maybe<ProjectV2FieldConnection>;
};

export type ProjectV2ViewFieldsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProjectV2FieldOrder>;
};

export type ProjectV2ViewGroupByArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProjectV2FieldOrder>;
};

export type ProjectV2ViewGroupByFieldsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProjectV2FieldOrder>;
};

export type ProjectV2ViewSortByArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type ProjectV2ViewSortByFieldsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type ProjectV2ViewVerticalGroupByArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProjectV2FieldOrder>;
};

export type ProjectV2ViewVerticalGroupByFieldsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProjectV2FieldOrder>;
};

export type ProjectV2ViewVisibleFieldsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProjectV2FieldOrder>;
};

export type ProjectV2ViewConnection = {
  __typename?: "ProjectV2ViewConnection";
  edges?: Maybe<Array<Maybe<ProjectV2ViewEdge>>>;
  nodes?: Maybe<Array<Maybe<ProjectV2View>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ProjectV2ViewEdge = {
  __typename?: "ProjectV2ViewEdge";
  cursor: Scalars["String"];
  node?: Maybe<ProjectV2View>;
};

export enum ProjectV2ViewLayout {
  BoardLayout = "BOARD_LAYOUT",
  TableLayout = "TABLE_LAYOUT",
  RoadmapLayout = "ROADMAP_LAYOUT",
}

export type ProjectV2ViewOrder = {
  field: ProjectV2ViewOrderField;
  direction: OrderDirection;
};

export enum ProjectV2ViewOrderField {
  Position = "POSITION",
  CreatedAt = "CREATED_AT",
  Name = "NAME",
}

export type ProjectV2Workflow = Node & {
  __typename?: "ProjectV2Workflow";
  createdAt: Scalars["DateTime"];
  databaseId?: Maybe<Scalars["Int"]>;
  enabled: Scalars["Boolean"];
  id: Scalars["ID"];
  name: Scalars["String"];
  number: Scalars["Int"];
  project: ProjectV2;
  updatedAt: Scalars["DateTime"];
};

export type ProjectV2WorkflowConnection = {
  __typename?: "ProjectV2WorkflowConnection";
  edges?: Maybe<Array<Maybe<ProjectV2WorkflowEdge>>>;
  nodes?: Maybe<Array<Maybe<ProjectV2Workflow>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ProjectV2WorkflowEdge = {
  __typename?: "ProjectV2WorkflowEdge";
  cursor: Scalars["String"];
  node?: Maybe<ProjectV2Workflow>;
};

export type ProjectV2WorkflowOrder = {
  field: ProjectV2WorkflowsOrderField;
  direction: OrderDirection;
};

export enum ProjectV2WorkflowsOrderField {
  Name = "NAME",
  Number = "NUMBER",
  UpdatedAt = "UPDATED_AT",
  CreatedAt = "CREATED_AT",
}

export type PublicKey = Node & {
  __typename?: "PublicKey";
  accessedAt?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  fingerprint: Scalars["String"];
  id: Scalars["ID"];
  isReadOnly?: Maybe<Scalars["Boolean"]>;
  key: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type PublicKeyConnection = {
  __typename?: "PublicKeyConnection";
  edges?: Maybe<Array<Maybe<PublicKeyEdge>>>;
  nodes?: Maybe<Array<Maybe<PublicKey>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PublicKeyEdge = {
  __typename?: "PublicKeyEdge";
  cursor: Scalars["String"];
  node?: Maybe<PublicKey>;
};

export type PublishSponsorsTierInput = {
  tierId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type PublishSponsorsTierPayload = {
  __typename?: "PublishSponsorsTierPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  sponsorsTier?: Maybe<SponsorsTier>;
};

export type PullRequest = Node &
  Assignable &
  Closable &
  Comment &
  Updatable &
  UpdatableComment &
  Labelable &
  Lockable &
  Reactable &
  RepositoryNode &
  Subscribable &
  UniformResourceLocatable &
  ProjectV2Owner & {
    __typename?: "PullRequest";
    activeLockReason?: Maybe<LockReason>;
    additions: Scalars["Int"];
    assignees: UserConnection;
    author?: Maybe<Actor>;
    authorAssociation: CommentAuthorAssociation;
    autoMergeRequest?: Maybe<AutoMergeRequest>;
    baseRef?: Maybe<Ref>;
    baseRefName: Scalars["String"];
    baseRefOid: Scalars["GitObjectID"];
    baseRepository?: Maybe<Repository>;
    body: Scalars["String"];
    bodyHTML: Scalars["HTML"];
    bodyText: Scalars["String"];
    changedFiles: Scalars["Int"];
    checksResourcePath: Scalars["URI"];
    checksUrl: Scalars["URI"];
    closed: Scalars["Boolean"];
    closedAt?: Maybe<Scalars["DateTime"]>;
    closingIssuesReferences?: Maybe<IssueConnection>;
    comments: IssueCommentConnection;
    commits: PullRequestCommitConnection;
    createdAt: Scalars["DateTime"];
    createdViaEmail: Scalars["Boolean"];
    databaseId?: Maybe<Scalars["Int"]>;
    deletions: Scalars["Int"];
    editor?: Maybe<Actor>;
    files?: Maybe<PullRequestChangedFileConnection>;
    headRef?: Maybe<Ref>;
    headRefName: Scalars["String"];
    headRefOid: Scalars["GitObjectID"];
    headRepository?: Maybe<Repository>;
    headRepositoryOwner?: Maybe<RepositoryOwner>;
    hovercard: Hovercard;
    id: Scalars["ID"];
    includesCreatedEdit: Scalars["Boolean"];
    isCrossRepository: Scalars["Boolean"];
    isDraft: Scalars["Boolean"];
    isReadByViewer?: Maybe<Scalars["Boolean"]>;
    labels?: Maybe<LabelConnection>;
    lastEditedAt?: Maybe<Scalars["DateTime"]>;
    latestOpinionatedReviews?: Maybe<PullRequestReviewConnection>;
    latestReviews?: Maybe<PullRequestReviewConnection>;
    locked: Scalars["Boolean"];
    maintainerCanModify: Scalars["Boolean"];
    mergeCommit?: Maybe<Commit>;
    mergeQueueEntry?: Maybe<MergeQueueEntry>;
    mergeable: MergeableState;
    merged: Scalars["Boolean"];
    mergedAt?: Maybe<Scalars["DateTime"]>;
    mergedBy?: Maybe<Actor>;
    milestone?: Maybe<Milestone>;
    number: Scalars["Int"];
    participants: UserConnection;
    permalink: Scalars["URI"];
    potentialMergeCommit?: Maybe<Commit>;
    projectCards: ProjectCardConnection;
    projectItems: ProjectV2ItemConnection;
    projectV2?: Maybe<ProjectV2>;
    projectsV2: ProjectV2Connection;
    publishedAt?: Maybe<Scalars["DateTime"]>;
    reactionGroups?: Maybe<Array<ReactionGroup>>;
    reactions: ReactionConnection;
    repository: Repository;
    resourcePath: Scalars["URI"];
    revertResourcePath: Scalars["URI"];
    revertUrl: Scalars["URI"];
    reviewDecision?: Maybe<PullRequestReviewDecision>;
    reviewRequests?: Maybe<ReviewRequestConnection>;
    reviewThreads: PullRequestReviewThreadConnection;
    reviews?: Maybe<PullRequestReviewConnection>;
    state: PullRequestState;
    suggestedReviewers: Array<Maybe<SuggestedReviewer>>;
    /** @deprecated `timeline` will be removed Use PullRequest.timelineItems instead. Removal on 2020-10-01 UTC. */
    timeline: PullRequestTimelineConnection;
    timelineItems: PullRequestTimelineItemsConnection;
    title: Scalars["String"];
    titleHTML: Scalars["HTML"];
    totalCommentsCount?: Maybe<Scalars["Int"]>;
    updatedAt: Scalars["DateTime"];
    url: Scalars["URI"];
    userContentEdits?: Maybe<UserContentEditConnection>;
    viewerCanApplySuggestion: Scalars["Boolean"];
    viewerCanClose: Scalars["Boolean"];
    viewerCanDeleteHeadRef: Scalars["Boolean"];
    viewerCanDisableAutoMerge: Scalars["Boolean"];
    viewerCanEditFiles: Scalars["Boolean"];
    viewerCanEnableAutoMerge: Scalars["Boolean"];
    viewerCanMergeAsAdmin: Scalars["Boolean"];
    viewerCanReact: Scalars["Boolean"];
    viewerCanReopen: Scalars["Boolean"];
    viewerCanSubscribe: Scalars["Boolean"];
    viewerCanUpdate: Scalars["Boolean"];
    viewerCanUpdateBranch: Scalars["Boolean"];
    viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
    viewerDidAuthor: Scalars["Boolean"];
    viewerLatestReview?: Maybe<PullRequestReview>;
    viewerLatestReviewRequest?: Maybe<ReviewRequest>;
    viewerMergeBodyText: Scalars["String"];
    viewerMergeHeadlineText: Scalars["String"];
    viewerSubscription?: Maybe<SubscriptionState>;
  };

export type PullRequestAssigneesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PullRequestClosingIssuesReferencesArgs = {
  userLinkedOnly?: InputMaybe<Scalars["Boolean"]>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<IssueOrder>;
};

export type PullRequestCommentsArgs = {
  orderBy?: InputMaybe<IssueCommentOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PullRequestCommitsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PullRequestFilesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PullRequestHovercardArgs = {
  includeNotificationContexts?: InputMaybe<Scalars["Boolean"]>;
};

export type PullRequestLabelsArgs = {
  orderBy?: InputMaybe<LabelOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PullRequestLatestOpinionatedReviewsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  writersOnly?: InputMaybe<Scalars["Boolean"]>;
};

export type PullRequestLatestReviewsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PullRequestParticipantsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PullRequestProjectCardsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  archivedStates?: InputMaybe<Array<InputMaybe<ProjectCardArchivedState>>>;
};

export type PullRequestProjectItemsArgs = {
  includeArchived?: InputMaybe<Scalars["Boolean"]>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PullRequestProjectV2Args = {
  number: Scalars["Int"];
};

export type PullRequestProjectsV2Args = {
  query?: InputMaybe<Scalars["String"]>;
  orderBy?: InputMaybe<ProjectV2Order>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PullRequestReactionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  content?: InputMaybe<ReactionContent>;
  orderBy?: InputMaybe<ReactionOrder>;
};

export type PullRequestReviewRequestsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PullRequestReviewThreadsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PullRequestReviewsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  states?: InputMaybe<Array<PullRequestReviewState>>;
  author?: InputMaybe<Scalars["String"]>;
};

export type PullRequestTimelineArgs = {
  since?: InputMaybe<Scalars["DateTime"]>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PullRequestTimelineItemsArgs = {
  since?: InputMaybe<Scalars["DateTime"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  itemTypes?: InputMaybe<Array<PullRequestTimelineItemsItemType>>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PullRequestUserContentEditsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PullRequestViewerMergeBodyTextArgs = {
  mergeType?: InputMaybe<PullRequestMergeMethod>;
};

export type PullRequestViewerMergeHeadlineTextArgs = {
  mergeType?: InputMaybe<PullRequestMergeMethod>;
};

export type PullRequestChangedFile = {
  __typename?: "PullRequestChangedFile";
  additions: Scalars["Int"];
  changeType: PatchStatus;
  deletions: Scalars["Int"];
  path: Scalars["String"];
  viewerViewedState: FileViewedState;
};

export type PullRequestChangedFileConnection = {
  __typename?: "PullRequestChangedFileConnection";
  edges?: Maybe<Array<Maybe<PullRequestChangedFileEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequestChangedFile>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PullRequestChangedFileEdge = {
  __typename?: "PullRequestChangedFileEdge";
  cursor: Scalars["String"];
  node?: Maybe<PullRequestChangedFile>;
};

export type PullRequestCommit = Node &
  UniformResourceLocatable & {
    __typename?: "PullRequestCommit";
    commit: Commit;
    id: Scalars["ID"];
    pullRequest: PullRequest;
    resourcePath: Scalars["URI"];
    url: Scalars["URI"];
  };

export type PullRequestCommitCommentThread = RepositoryNode &
  Node & {
    __typename?: "PullRequestCommitCommentThread";
    comments: CommitCommentConnection;
    commit: Commit;
    id: Scalars["ID"];
    path?: Maybe<Scalars["String"]>;
    position?: Maybe<Scalars["Int"]>;
    pullRequest: PullRequest;
    repository: Repository;
  };

export type PullRequestCommitCommentThreadCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PullRequestCommitConnection = {
  __typename?: "PullRequestCommitConnection";
  edges?: Maybe<Array<Maybe<PullRequestCommitEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequestCommit>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PullRequestCommitEdge = {
  __typename?: "PullRequestCommitEdge";
  cursor: Scalars["String"];
  node?: Maybe<PullRequestCommit>;
};

export type PullRequestConnection = {
  __typename?: "PullRequestConnection";
  edges?: Maybe<Array<Maybe<PullRequestEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequest>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PullRequestContributionsByRepository = {
  __typename?: "PullRequestContributionsByRepository";
  contributions: CreatedPullRequestContributionConnection;
  repository: Repository;
};

export type PullRequestContributionsByRepositoryContributionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ContributionOrder>;
};

export type PullRequestEdge = {
  __typename?: "PullRequestEdge";
  cursor: Scalars["String"];
  node?: Maybe<PullRequest>;
};

export enum PullRequestMergeMethod {
  Merge = "MERGE",
  Squash = "SQUASH",
  Rebase = "REBASE",
}

export type PullRequestOrder = {
  field: PullRequestOrderField;
  direction: OrderDirection;
};

export enum PullRequestOrderField {
  CreatedAt = "CREATED_AT",
  UpdatedAt = "UPDATED_AT",
}

export type PullRequestReview = Node &
  Comment &
  Deletable &
  Updatable &
  UpdatableComment &
  Reactable &
  RepositoryNode & {
    __typename?: "PullRequestReview";
    author?: Maybe<Actor>;
    authorAssociation: CommentAuthorAssociation;
    authorCanPushToRepository: Scalars["Boolean"];
    body: Scalars["String"];
    bodyHTML: Scalars["HTML"];
    bodyText: Scalars["String"];
    comments: PullRequestReviewCommentConnection;
    commit?: Maybe<Commit>;
    createdAt: Scalars["DateTime"];
    createdViaEmail: Scalars["Boolean"];
    databaseId?: Maybe<Scalars["Int"]>;
    editor?: Maybe<Actor>;
    id: Scalars["ID"];
    includesCreatedEdit: Scalars["Boolean"];
    lastEditedAt?: Maybe<Scalars["DateTime"]>;
    onBehalfOf: TeamConnection;
    publishedAt?: Maybe<Scalars["DateTime"]>;
    pullRequest: PullRequest;
    reactionGroups?: Maybe<Array<ReactionGroup>>;
    reactions: ReactionConnection;
    repository: Repository;
    resourcePath: Scalars["URI"];
    state: PullRequestReviewState;
    submittedAt?: Maybe<Scalars["DateTime"]>;
    updatedAt: Scalars["DateTime"];
    url: Scalars["URI"];
    userContentEdits?: Maybe<UserContentEditConnection>;
    viewerCanDelete: Scalars["Boolean"];
    viewerCanReact: Scalars["Boolean"];
    viewerCanUpdate: Scalars["Boolean"];
    viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
    viewerDidAuthor: Scalars["Boolean"];
  };

export type PullRequestReviewCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PullRequestReviewOnBehalfOfArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PullRequestReviewReactionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  content?: InputMaybe<ReactionContent>;
  orderBy?: InputMaybe<ReactionOrder>;
};

export type PullRequestReviewUserContentEditsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PullRequestReviewComment = Node &
  Comment &
  Deletable &
  Minimizable &
  Updatable &
  UpdatableComment &
  Reactable &
  RepositoryNode & {
    __typename?: "PullRequestReviewComment";
    author?: Maybe<Actor>;
    authorAssociation: CommentAuthorAssociation;
    body: Scalars["String"];
    bodyHTML: Scalars["HTML"];
    bodyText: Scalars["String"];
    commit?: Maybe<Commit>;
    createdAt: Scalars["DateTime"];
    createdViaEmail: Scalars["Boolean"];
    databaseId?: Maybe<Scalars["Int"]>;
    diffHunk: Scalars["String"];
    draftedAt: Scalars["DateTime"];
    editor?: Maybe<Actor>;
    id: Scalars["ID"];
    includesCreatedEdit: Scalars["Boolean"];
    isMinimized: Scalars["Boolean"];
    lastEditedAt?: Maybe<Scalars["DateTime"]>;
    line?: Maybe<Scalars["Int"]>;
    minimizedReason?: Maybe<Scalars["String"]>;
    originalCommit?: Maybe<Commit>;
    originalLine?: Maybe<Scalars["Int"]>;
    /** @deprecated We are phasing out diff-relative positioning for PR comments Removal on 2023-10-01 UTC. */
    originalPosition: Scalars["Int"];
    originalStartLine?: Maybe<Scalars["Int"]>;
    outdated: Scalars["Boolean"];
    path: Scalars["String"];
    /** @deprecated We are phasing out diff-relative positioning for PR comments Use the `line` and `startLine` fields instead, which are file line numbers instead of diff line numbers Removal on 2023-10-01 UTC. */
    position?: Maybe<Scalars["Int"]>;
    publishedAt?: Maybe<Scalars["DateTime"]>;
    pullRequest: PullRequest;
    pullRequestReview?: Maybe<PullRequestReview>;
    reactionGroups?: Maybe<Array<ReactionGroup>>;
    reactions: ReactionConnection;
    replyTo?: Maybe<PullRequestReviewComment>;
    repository: Repository;
    resourcePath: Scalars["URI"];
    startLine?: Maybe<Scalars["Int"]>;
    state: PullRequestReviewCommentState;
    subjectType: PullRequestReviewThreadSubjectType;
    updatedAt: Scalars["DateTime"];
    url: Scalars["URI"];
    userContentEdits?: Maybe<UserContentEditConnection>;
    viewerCanDelete: Scalars["Boolean"];
    viewerCanMinimize: Scalars["Boolean"];
    viewerCanReact: Scalars["Boolean"];
    viewerCanUpdate: Scalars["Boolean"];
    viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
    viewerDidAuthor: Scalars["Boolean"];
  };

export type PullRequestReviewCommentReactionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  content?: InputMaybe<ReactionContent>;
  orderBy?: InputMaybe<ReactionOrder>;
};

export type PullRequestReviewCommentUserContentEditsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type PullRequestReviewCommentConnection = {
  __typename?: "PullRequestReviewCommentConnection";
  edges?: Maybe<Array<Maybe<PullRequestReviewCommentEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequestReviewComment>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PullRequestReviewCommentEdge = {
  __typename?: "PullRequestReviewCommentEdge";
  cursor: Scalars["String"];
  node?: Maybe<PullRequestReviewComment>;
};

export enum PullRequestReviewCommentState {
  Pending = "PENDING",
  Submitted = "SUBMITTED",
}

export type PullRequestReviewConnection = {
  __typename?: "PullRequestReviewConnection";
  edges?: Maybe<Array<Maybe<PullRequestReviewEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequestReview>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PullRequestReviewContributionsByRepository = {
  __typename?: "PullRequestReviewContributionsByRepository";
  contributions: CreatedPullRequestReviewContributionConnection;
  repository: Repository;
};

export type PullRequestReviewContributionsByRepositoryContributionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ContributionOrder>;
};

export enum PullRequestReviewDecision {
  ChangesRequested = "CHANGES_REQUESTED",
  Approved = "APPROVED",
  ReviewRequired = "REVIEW_REQUIRED",
}

export type PullRequestReviewEdge = {
  __typename?: "PullRequestReviewEdge";
  cursor: Scalars["String"];
  node?: Maybe<PullRequestReview>;
};

export enum PullRequestReviewEvent {
  Comment = "COMMENT",
  Approve = "APPROVE",
  RequestChanges = "REQUEST_CHANGES",
  Dismiss = "DISMISS",
}

export enum PullRequestReviewState {
  Pending = "PENDING",
  Commented = "COMMENTED",
  Approved = "APPROVED",
  ChangesRequested = "CHANGES_REQUESTED",
  Dismissed = "DISMISSED",
}

export type PullRequestReviewThread = Node & {
  __typename?: "PullRequestReviewThread";
  comments: PullRequestReviewCommentConnection;
  diffSide: DiffSide;
  id: Scalars["ID"];
  isCollapsed: Scalars["Boolean"];
  isOutdated: Scalars["Boolean"];
  isResolved: Scalars["Boolean"];
  line?: Maybe<Scalars["Int"]>;
  originalLine?: Maybe<Scalars["Int"]>;
  originalStartLine?: Maybe<Scalars["Int"]>;
  path: Scalars["String"];
  pullRequest: PullRequest;
  repository: Repository;
  resolvedBy?: Maybe<User>;
  startDiffSide?: Maybe<DiffSide>;
  startLine?: Maybe<Scalars["Int"]>;
  subjectType: PullRequestReviewThreadSubjectType;
  viewerCanReply: Scalars["Boolean"];
  viewerCanResolve: Scalars["Boolean"];
  viewerCanUnresolve: Scalars["Boolean"];
};

export type PullRequestReviewThreadCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type PullRequestReviewThreadConnection = {
  __typename?: "PullRequestReviewThreadConnection";
  edges?: Maybe<Array<Maybe<PullRequestReviewThreadEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequestReviewThread>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PullRequestReviewThreadEdge = {
  __typename?: "PullRequestReviewThreadEdge";
  cursor: Scalars["String"];
  node?: Maybe<PullRequestReviewThread>;
};

export enum PullRequestReviewThreadSubjectType {
  Line = "LINE",
  File = "FILE",
}

export type PullRequestRevisionMarker = {
  __typename?: "PullRequestRevisionMarker";
  createdAt: Scalars["DateTime"];
  lastSeenCommit: Commit;
  pullRequest: PullRequest;
};

export enum PullRequestState {
  Open = "OPEN",
  Closed = "CLOSED",
  Merged = "MERGED",
}

export type PullRequestTemplate = {
  __typename?: "PullRequestTemplate";
  body?: Maybe<Scalars["String"]>;
  filename?: Maybe<Scalars["String"]>;
  repository: Repository;
};

export type PullRequestThread = Node & {
  __typename?: "PullRequestThread";
  comments: PullRequestReviewCommentConnection;
  diffSide: DiffSide;
  id: Scalars["ID"];
  isCollapsed: Scalars["Boolean"];
  isOutdated: Scalars["Boolean"];
  isResolved: Scalars["Boolean"];
  line?: Maybe<Scalars["Int"]>;
  pullRequest: PullRequest;
  repository: Repository;
  resolvedBy?: Maybe<User>;
  startDiffSide?: Maybe<DiffSide>;
  startLine?: Maybe<Scalars["Int"]>;
  viewerCanReply: Scalars["Boolean"];
  viewerCanResolve: Scalars["Boolean"];
  viewerCanUnresolve: Scalars["Boolean"];
};

export type PullRequestThreadCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type PullRequestTimelineConnection = {
  __typename?: "PullRequestTimelineConnection";
  edges?: Maybe<Array<Maybe<PullRequestTimelineItemEdge>>>;
  nodes?: Maybe<Array<Maybe<PullRequestTimelineItem>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PullRequestTimelineItem =
  | AssignedEvent
  | BaseRefDeletedEvent
  | BaseRefForcePushedEvent
  | ClosedEvent
  | Commit
  | CommitCommentThread
  | CrossReferencedEvent
  | DemilestonedEvent
  | DeployedEvent
  | DeploymentEnvironmentChangedEvent
  | HeadRefDeletedEvent
  | HeadRefForcePushedEvent
  | HeadRefRestoredEvent
  | IssueComment
  | LabeledEvent
  | LockedEvent
  | MergedEvent
  | MilestonedEvent
  | PullRequestReview
  | PullRequestReviewComment
  | PullRequestReviewThread
  | ReferencedEvent
  | RenamedTitleEvent
  | ReopenedEvent
  | ReviewDismissedEvent
  | ReviewRequestRemovedEvent
  | ReviewRequestedEvent
  | SubscribedEvent
  | UnassignedEvent
  | UnlabeledEvent
  | UnlockedEvent
  | UnsubscribedEvent
  | UserBlockedEvent;

export type PullRequestTimelineItemEdge = {
  __typename?: "PullRequestTimelineItemEdge";
  cursor: Scalars["String"];
  node?: Maybe<PullRequestTimelineItem>;
};

export type PullRequestTimelineItems =
  | AddedToMergeQueueEvent
  | AddedToProjectEvent
  | AssignedEvent
  | AutoMergeDisabledEvent
  | AutoMergeEnabledEvent
  | AutoRebaseEnabledEvent
  | AutoSquashEnabledEvent
  | AutomaticBaseChangeFailedEvent
  | AutomaticBaseChangeSucceededEvent
  | BaseRefChangedEvent
  | BaseRefDeletedEvent
  | BaseRefForcePushedEvent
  | ClosedEvent
  | CommentDeletedEvent
  | ConnectedEvent
  | ConvertToDraftEvent
  | ConvertedNoteToIssueEvent
  | ConvertedToDiscussionEvent
  | CrossReferencedEvent
  | DemilestonedEvent
  | DeployedEvent
  | DeploymentEnvironmentChangedEvent
  | DisconnectedEvent
  | HeadRefDeletedEvent
  | HeadRefForcePushedEvent
  | HeadRefRestoredEvent
  | IssueComment
  | LabeledEvent
  | LockedEvent
  | MarkedAsDuplicateEvent
  | MentionedEvent
  | MergedEvent
  | MilestonedEvent
  | MovedColumnsInProjectEvent
  | PinnedEvent
  | PullRequestCommit
  | PullRequestCommitCommentThread
  | PullRequestReview
  | PullRequestReviewThread
  | PullRequestRevisionMarker
  | ReadyForReviewEvent
  | ReferencedEvent
  | RemovedFromMergeQueueEvent
  | RemovedFromProjectEvent
  | RenamedTitleEvent
  | ReopenedEvent
  | ReviewDismissedEvent
  | ReviewRequestRemovedEvent
  | ReviewRequestedEvent
  | SubscribedEvent
  | TransferredEvent
  | UnassignedEvent
  | UnlabeledEvent
  | UnlockedEvent
  | UnmarkedAsDuplicateEvent
  | UnpinnedEvent
  | UnsubscribedEvent
  | UserBlockedEvent;

export type PullRequestTimelineItemsConnection = {
  __typename?: "PullRequestTimelineItemsConnection";
  edges?: Maybe<Array<Maybe<PullRequestTimelineItemsEdge>>>;
  filteredCount: Scalars["Int"];
  nodes?: Maybe<Array<Maybe<PullRequestTimelineItems>>>;
  pageCount: Scalars["Int"];
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
  updatedAt: Scalars["DateTime"];
};

export type PullRequestTimelineItemsEdge = {
  __typename?: "PullRequestTimelineItemsEdge";
  cursor: Scalars["String"];
  node?: Maybe<PullRequestTimelineItems>;
};

export enum PullRequestTimelineItemsItemType {
  PullRequestCommit = "PULL_REQUEST_COMMIT",
  PullRequestCommitCommentThread = "PULL_REQUEST_COMMIT_COMMENT_THREAD",
  PullRequestReview = "PULL_REQUEST_REVIEW",
  PullRequestReviewThread = "PULL_REQUEST_REVIEW_THREAD",
  PullRequestRevisionMarker = "PULL_REQUEST_REVISION_MARKER",
  AutomaticBaseChangeFailedEvent = "AUTOMATIC_BASE_CHANGE_FAILED_EVENT",
  AutomaticBaseChangeSucceededEvent = "AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT",
  AutoMergeDisabledEvent = "AUTO_MERGE_DISABLED_EVENT",
  AutoMergeEnabledEvent = "AUTO_MERGE_ENABLED_EVENT",
  AutoRebaseEnabledEvent = "AUTO_REBASE_ENABLED_EVENT",
  AutoSquashEnabledEvent = "AUTO_SQUASH_ENABLED_EVENT",
  BaseRefChangedEvent = "BASE_REF_CHANGED_EVENT",
  BaseRefForcePushedEvent = "BASE_REF_FORCE_PUSHED_EVENT",
  BaseRefDeletedEvent = "BASE_REF_DELETED_EVENT",
  DeployedEvent = "DEPLOYED_EVENT",
  DeploymentEnvironmentChangedEvent = "DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT",
  HeadRefDeletedEvent = "HEAD_REF_DELETED_EVENT",
  HeadRefForcePushedEvent = "HEAD_REF_FORCE_PUSHED_EVENT",
  HeadRefRestoredEvent = "HEAD_REF_RESTORED_EVENT",
  MergedEvent = "MERGED_EVENT",
  ReviewDismissedEvent = "REVIEW_DISMISSED_EVENT",
  ReviewRequestedEvent = "REVIEW_REQUESTED_EVENT",
  ReviewRequestRemovedEvent = "REVIEW_REQUEST_REMOVED_EVENT",
  ReadyForReviewEvent = "READY_FOR_REVIEW_EVENT",
  ConvertToDraftEvent = "CONVERT_TO_DRAFT_EVENT",
  AddedToMergeQueueEvent = "ADDED_TO_MERGE_QUEUE_EVENT",
  RemovedFromMergeQueueEvent = "REMOVED_FROM_MERGE_QUEUE_EVENT",
  IssueComment = "ISSUE_COMMENT",
  CrossReferencedEvent = "CROSS_REFERENCED_EVENT",
  AddedToProjectEvent = "ADDED_TO_PROJECT_EVENT",
  AssignedEvent = "ASSIGNED_EVENT",
  ClosedEvent = "CLOSED_EVENT",
  CommentDeletedEvent = "COMMENT_DELETED_EVENT",
  ConnectedEvent = "CONNECTED_EVENT",
  ConvertedNoteToIssueEvent = "CONVERTED_NOTE_TO_ISSUE_EVENT",
  ConvertedToDiscussionEvent = "CONVERTED_TO_DISCUSSION_EVENT",
  DemilestonedEvent = "DEMILESTONED_EVENT",
  DisconnectedEvent = "DISCONNECTED_EVENT",
  LabeledEvent = "LABELED_EVENT",
  LockedEvent = "LOCKED_EVENT",
  MarkedAsDuplicateEvent = "MARKED_AS_DUPLICATE_EVENT",
  MentionedEvent = "MENTIONED_EVENT",
  MilestonedEvent = "MILESTONED_EVENT",
  MovedColumnsInProjectEvent = "MOVED_COLUMNS_IN_PROJECT_EVENT",
  PinnedEvent = "PINNED_EVENT",
  ReferencedEvent = "REFERENCED_EVENT",
  RemovedFromProjectEvent = "REMOVED_FROM_PROJECT_EVENT",
  RenamedTitleEvent = "RENAMED_TITLE_EVENT",
  ReopenedEvent = "REOPENED_EVENT",
  SubscribedEvent = "SUBSCRIBED_EVENT",
  TransferredEvent = "TRANSFERRED_EVENT",
  UnassignedEvent = "UNASSIGNED_EVENT",
  UnlabeledEvent = "UNLABELED_EVENT",
  UnlockedEvent = "UNLOCKED_EVENT",
  UserBlockedEvent = "USER_BLOCKED_EVENT",
  UnmarkedAsDuplicateEvent = "UNMARKED_AS_DUPLICATE_EVENT",
  UnpinnedEvent = "UNPINNED_EVENT",
  UnsubscribedEvent = "UNSUBSCRIBED_EVENT",
}

export enum PullRequestUpdateState {
  Open = "OPEN",
  Closed = "CLOSED",
}

export type Push = Node & {
  __typename?: "Push";
  id: Scalars["ID"];
  nextSha?: Maybe<Scalars["GitObjectID"]>;
  permalink: Scalars["URI"];
  previousSha?: Maybe<Scalars["GitObjectID"]>;
  pusher: Actor;
  repository: Repository;
};

export type PushAllowance = Node & {
  __typename?: "PushAllowance";
  actor?: Maybe<PushAllowanceActor>;
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  id: Scalars["ID"];
};

export type PushAllowanceActor = App | Team | User;

export type PushAllowanceConnection = {
  __typename?: "PushAllowanceConnection";
  edges?: Maybe<Array<Maybe<PushAllowanceEdge>>>;
  nodes?: Maybe<Array<Maybe<PushAllowance>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type PushAllowanceEdge = {
  __typename?: "PushAllowanceEdge";
  cursor: Scalars["String"];
  node?: Maybe<PushAllowance>;
};

export type Query = {
  __typename?: "Query";
  codeOfConduct?: Maybe<CodeOfConduct>;
  codesOfConduct?: Maybe<Array<Maybe<CodeOfConduct>>>;
  enterprise?: Maybe<Enterprise>;
  enterpriseAdministratorInvitation?: Maybe<EnterpriseAdministratorInvitation>;
  enterpriseAdministratorInvitationByToken?: Maybe<EnterpriseAdministratorInvitation>;
  license?: Maybe<License>;
  licenses: Array<Maybe<License>>;
  marketplaceCategories: Array<MarketplaceCategory>;
  marketplaceCategory?: Maybe<MarketplaceCategory>;
  marketplaceListing?: Maybe<MarketplaceListing>;
  marketplaceListings: MarketplaceListingConnection;
  meta: GitHubMetadata;
  node?: Maybe<Node>;
  nodes: Array<Maybe<Node>>;
  organization?: Maybe<Organization>;
  rateLimit?: Maybe<RateLimit>;
  relay: Query;
  repository?: Maybe<Repository>;
  repositoryOwner?: Maybe<RepositoryOwner>;
  resource?: Maybe<UniformResourceLocatable>;
  search: SearchResultItemConnection;
  securityAdvisories: SecurityAdvisoryConnection;
  securityAdvisory?: Maybe<SecurityAdvisory>;
  securityVulnerabilities: SecurityVulnerabilityConnection;
  sponsorables: SponsorableItemConnection;
  topic?: Maybe<Topic>;
  user?: Maybe<User>;
  viewer: User;
};

export type QueryCodeOfConductArgs = {
  key: Scalars["String"];
};

export type QueryEnterpriseArgs = {
  slug: Scalars["String"];
  invitationToken?: InputMaybe<Scalars["String"]>;
};

export type QueryEnterpriseAdministratorInvitationArgs = {
  userLogin: Scalars["String"];
  enterpriseSlug: Scalars["String"];
  role: EnterpriseAdministratorRole;
};

export type QueryEnterpriseAdministratorInvitationByTokenArgs = {
  invitationToken: Scalars["String"];
};

export type QueryLicenseArgs = {
  key: Scalars["String"];
};

export type QueryMarketplaceCategoriesArgs = {
  includeCategories?: InputMaybe<Array<Scalars["String"]>>;
  excludeEmpty?: InputMaybe<Scalars["Boolean"]>;
  excludeSubcategories?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryMarketplaceCategoryArgs = {
  slug: Scalars["String"];
  useTopicAliases?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryMarketplaceListingArgs = {
  slug: Scalars["String"];
};

export type QueryMarketplaceListingsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  categorySlug?: InputMaybe<Scalars["String"]>;
  useTopicAliases?: InputMaybe<Scalars["Boolean"]>;
  viewerCanAdmin?: InputMaybe<Scalars["Boolean"]>;
  adminId?: InputMaybe<Scalars["ID"]>;
  organizationId?: InputMaybe<Scalars["ID"]>;
  allStates?: InputMaybe<Scalars["Boolean"]>;
  slugs?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  primaryCategoryOnly?: InputMaybe<Scalars["Boolean"]>;
  withFreeTrialsOnly?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryNodeArgs = {
  id: Scalars["ID"];
};

export type QueryNodesArgs = {
  ids: Array<Scalars["ID"]>;
};

export type QueryOrganizationArgs = {
  login: Scalars["String"];
};

export type QueryRateLimitArgs = {
  dryRun?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryRepositoryArgs = {
  owner: Scalars["String"];
  name: Scalars["String"];
  followRenames?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryRepositoryOwnerArgs = {
  login: Scalars["String"];
};

export type QueryResourceArgs = {
  url: Scalars["URI"];
};

export type QuerySearchArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  query: Scalars["String"];
  type: SearchType;
};

export type QuerySecurityAdvisoriesArgs = {
  orderBy?: InputMaybe<SecurityAdvisoryOrder>;
  identifier?: InputMaybe<SecurityAdvisoryIdentifierFilter>;
  publishedSince?: InputMaybe<Scalars["DateTime"]>;
  updatedSince?: InputMaybe<Scalars["DateTime"]>;
  classifications?: InputMaybe<Array<SecurityAdvisoryClassification>>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type QuerySecurityAdvisoryArgs = {
  ghsaId: Scalars["String"];
};

export type QuerySecurityVulnerabilitiesArgs = {
  orderBy?: InputMaybe<SecurityVulnerabilityOrder>;
  ecosystem?: InputMaybe<SecurityAdvisoryEcosystem>;
  package?: InputMaybe<Scalars["String"]>;
  severities?: InputMaybe<Array<SecurityAdvisorySeverity>>;
  classifications?: InputMaybe<Array<SecurityAdvisoryClassification>>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type QuerySponsorablesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SponsorableOrder>;
  onlyDependencies?: InputMaybe<Scalars["Boolean"]>;
  orgLoginForDependencies?: InputMaybe<Scalars["String"]>;
  dependencyEcosystem?: InputMaybe<SecurityAdvisoryEcosystem>;
  ecosystem?: InputMaybe<DependencyGraphEcosystem>;
};

export type QueryTopicArgs = {
  name: Scalars["String"];
};

export type QueryUserArgs = {
  login: Scalars["String"];
};

export type RateLimit = {
  __typename?: "RateLimit";
  cost: Scalars["Int"];
  limit: Scalars["Int"];
  nodeCount: Scalars["Int"];
  remaining: Scalars["Int"];
  resetAt: Scalars["DateTime"];
  used: Scalars["Int"];
};

export type Reactable = {
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  reactions: ReactionConnection;
  viewerCanReact: Scalars["Boolean"];
};

export type ReactableReactionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  content?: InputMaybe<ReactionContent>;
  orderBy?: InputMaybe<ReactionOrder>;
};

export type ReactingUserConnection = {
  __typename?: "ReactingUserConnection";
  edges?: Maybe<Array<Maybe<ReactingUserEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ReactingUserEdge = {
  __typename?: "ReactingUserEdge";
  cursor: Scalars["String"];
  node: User;
  reactedAt: Scalars["DateTime"];
};

export type Reaction = Node & {
  __typename?: "Reaction";
  content: ReactionContent;
  createdAt: Scalars["DateTime"];
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  reactable: Reactable;
  user?: Maybe<User>;
};

export type ReactionConnection = {
  __typename?: "ReactionConnection";
  edges?: Maybe<Array<Maybe<ReactionEdge>>>;
  nodes?: Maybe<Array<Maybe<Reaction>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
  viewerHasReacted: Scalars["Boolean"];
};

export enum ReactionContent {
  ThumbsUp = "THUMBS_UP",
  ThumbsDown = "THUMBS_DOWN",
  Laugh = "LAUGH",
  Hooray = "HOORAY",
  Confused = "CONFUSED",
  Heart = "HEART",
  Rocket = "ROCKET",
  Eyes = "EYES",
}

export type ReactionEdge = {
  __typename?: "ReactionEdge";
  cursor: Scalars["String"];
  node?: Maybe<Reaction>;
};

export type ReactionGroup = {
  __typename?: "ReactionGroup";
  content: ReactionContent;
  createdAt?: Maybe<Scalars["DateTime"]>;
  reactors: ReactorConnection;
  subject: Reactable;
  /** @deprecated Reactors can now be mannequins, bots, and organizations. Use the `reactors` field instead. Removal on 2021-10-01 UTC. */
  users: ReactingUserConnection;
  viewerHasReacted: Scalars["Boolean"];
};

export type ReactionGroupReactorsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type ReactionGroupUsersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type ReactionOrder = {
  field: ReactionOrderField;
  direction: OrderDirection;
};

export enum ReactionOrderField {
  CreatedAt = "CREATED_AT",
}

export type Reactor = Bot | Mannequin | Organization | User;

export type ReactorConnection = {
  __typename?: "ReactorConnection";
  edges?: Maybe<Array<Maybe<ReactorEdge>>>;
  nodes?: Maybe<Array<Maybe<Reactor>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ReactorEdge = {
  __typename?: "ReactorEdge";
  cursor: Scalars["String"];
  node: Reactor;
  reactedAt: Scalars["DateTime"];
};

export type ReadyForReviewEvent = Node &
  UniformResourceLocatable & {
    __typename?: "ReadyForReviewEvent";
    actor?: Maybe<Actor>;
    createdAt: Scalars["DateTime"];
    id: Scalars["ID"];
    pullRequest: PullRequest;
    resourcePath: Scalars["URI"];
    url: Scalars["URI"];
  };

export type Ref = Node & {
  __typename?: "Ref";
  associatedPullRequests: PullRequestConnection;
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  compare?: Maybe<Comparison>;
  id: Scalars["ID"];
  name: Scalars["String"];
  prefix: Scalars["String"];
  refUpdateRule?: Maybe<RefUpdateRule>;
  repository: Repository;
  target?: Maybe<GitObject>;
};

export type RefAssociatedPullRequestsArgs = {
  states?: InputMaybe<Array<PullRequestState>>;
  labels?: InputMaybe<Array<Scalars["String"]>>;
  headRefName?: InputMaybe<Scalars["String"]>;
  baseRefName?: InputMaybe<Scalars["String"]>;
  orderBy?: InputMaybe<IssueOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type RefCompareArgs = {
  headRef: Scalars["String"];
};

export type RefConnection = {
  __typename?: "RefConnection";
  edges?: Maybe<Array<Maybe<RefEdge>>>;
  nodes?: Maybe<Array<Maybe<Ref>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type RefEdge = {
  __typename?: "RefEdge";
  cursor: Scalars["String"];
  node?: Maybe<Ref>;
};

export type RefOrder = {
  field: RefOrderField;
  direction: OrderDirection;
};

export enum RefOrderField {
  TagCommitDate = "TAG_COMMIT_DATE",
  Alphabetical = "ALPHABETICAL",
}

export type RefUpdateRule = {
  __typename?: "RefUpdateRule";
  allowsDeletions: Scalars["Boolean"];
  allowsForcePushes: Scalars["Boolean"];
  blocksCreations: Scalars["Boolean"];
  pattern: Scalars["String"];
  requiredApprovingReviewCount?: Maybe<Scalars["Int"]>;
  requiredStatusCheckContexts?: Maybe<Array<Maybe<Scalars["String"]>>>;
  requiresCodeOwnerReviews: Scalars["Boolean"];
  requiresConversationResolution: Scalars["Boolean"];
  requiresLinearHistory: Scalars["Boolean"];
  requiresSignatures: Scalars["Boolean"];
  viewerAllowedToDismissReviews: Scalars["Boolean"];
  viewerCanPush: Scalars["Boolean"];
};

export type ReferencedEvent = Node & {
  __typename?: "ReferencedEvent";
  actor?: Maybe<Actor>;
  commit?: Maybe<Commit>;
  commitRepository: Repository;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  isCrossRepository: Scalars["Boolean"];
  isDirectReference: Scalars["Boolean"];
  subject: ReferencedSubject;
};

export type ReferencedSubject = Issue | PullRequest;

export type RegenerateEnterpriseIdentityProviderRecoveryCodesInput = {
  enterpriseId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type RegenerateEnterpriseIdentityProviderRecoveryCodesPayload = {
  __typename?: "RegenerateEnterpriseIdentityProviderRecoveryCodesPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  identityProvider?: Maybe<EnterpriseIdentityProvider>;
};

export type RegenerateVerifiableDomainTokenInput = {
  id: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type RegenerateVerifiableDomainTokenPayload = {
  __typename?: "RegenerateVerifiableDomainTokenPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  verificationToken?: Maybe<Scalars["String"]>;
};

export type RejectDeploymentsInput = {
  workflowRunId: Scalars["ID"];
  environmentIds: Array<Scalars["ID"]>;
  comment?: InputMaybe<Scalars["String"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type RejectDeploymentsPayload = {
  __typename?: "RejectDeploymentsPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  deployments?: Maybe<Array<Deployment>>;
};

export type Release = Node &
  UniformResourceLocatable &
  Reactable & {
    __typename?: "Release";
    author?: Maybe<User>;
    createdAt: Scalars["DateTime"];
    databaseId?: Maybe<Scalars["Int"]>;
    description?: Maybe<Scalars["String"]>;
    descriptionHTML?: Maybe<Scalars["HTML"]>;
    id: Scalars["ID"];
    isDraft: Scalars["Boolean"];
    isLatest: Scalars["Boolean"];
    isPrerelease: Scalars["Boolean"];
    mentions?: Maybe<UserConnection>;
    name?: Maybe<Scalars["String"]>;
    publishedAt?: Maybe<Scalars["DateTime"]>;
    reactionGroups?: Maybe<Array<ReactionGroup>>;
    reactions: ReactionConnection;
    releaseAssets: ReleaseAssetConnection;
    repository: Repository;
    resourcePath: Scalars["URI"];
    shortDescriptionHTML?: Maybe<Scalars["HTML"]>;
    tag?: Maybe<Ref>;
    tagCommit?: Maybe<Commit>;
    tagName: Scalars["String"];
    updatedAt: Scalars["DateTime"];
    url: Scalars["URI"];
    viewerCanReact: Scalars["Boolean"];
  };

export type ReleaseMentionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type ReleaseReactionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  content?: InputMaybe<ReactionContent>;
  orderBy?: InputMaybe<ReactionOrder>;
};

export type ReleaseReleaseAssetsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type ReleaseShortDescriptionHtmlArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
};

export type ReleaseAsset = Node & {
  __typename?: "ReleaseAsset";
  contentType: Scalars["String"];
  createdAt: Scalars["DateTime"];
  downloadCount: Scalars["Int"];
  downloadUrl: Scalars["URI"];
  id: Scalars["ID"];
  name: Scalars["String"];
  release?: Maybe<Release>;
  size: Scalars["Int"];
  updatedAt: Scalars["DateTime"];
  uploadedBy: User;
  url: Scalars["URI"];
};

export type ReleaseAssetConnection = {
  __typename?: "ReleaseAssetConnection";
  edges?: Maybe<Array<Maybe<ReleaseAssetEdge>>>;
  nodes?: Maybe<Array<Maybe<ReleaseAsset>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ReleaseAssetEdge = {
  __typename?: "ReleaseAssetEdge";
  cursor: Scalars["String"];
  node?: Maybe<ReleaseAsset>;
};

export type ReleaseConnection = {
  __typename?: "ReleaseConnection";
  edges?: Maybe<Array<Maybe<ReleaseEdge>>>;
  nodes?: Maybe<Array<Maybe<Release>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ReleaseEdge = {
  __typename?: "ReleaseEdge";
  cursor: Scalars["String"];
  node?: Maybe<Release>;
};

export type ReleaseOrder = {
  field: ReleaseOrderField;
  direction: OrderDirection;
};

export enum ReleaseOrderField {
  CreatedAt = "CREATED_AT",
  Name = "NAME",
}

export type RemoveAssigneesFromAssignableInput = {
  assignableId: Scalars["ID"];
  assigneeIds: Array<Scalars["ID"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type RemoveAssigneesFromAssignablePayload = {
  __typename?: "RemoveAssigneesFromAssignablePayload";
  assignable?: Maybe<Assignable>;
  clientMutationId?: Maybe<Scalars["String"]>;
};

export type RemoveEnterpriseAdminInput = {
  enterpriseId: Scalars["ID"];
  login: Scalars["String"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type RemoveEnterpriseAdminPayload = {
  __typename?: "RemoveEnterpriseAdminPayload";
  admin?: Maybe<User>;
  clientMutationId?: Maybe<Scalars["String"]>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars["String"]>;
  viewer?: Maybe<User>;
};

export type RemoveEnterpriseIdentityProviderInput = {
  enterpriseId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type RemoveEnterpriseIdentityProviderPayload = {
  __typename?: "RemoveEnterpriseIdentityProviderPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  identityProvider?: Maybe<EnterpriseIdentityProvider>;
};

export type RemoveEnterpriseMemberInput = {
  enterpriseId: Scalars["ID"];
  userId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type RemoveEnterpriseMemberPayload = {
  __typename?: "RemoveEnterpriseMemberPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  enterprise?: Maybe<Enterprise>;
  user?: Maybe<User>;
  viewer?: Maybe<User>;
};

export type RemoveEnterpriseOrganizationInput = {
  enterpriseId: Scalars["ID"];
  organizationId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type RemoveEnterpriseOrganizationPayload = {
  __typename?: "RemoveEnterpriseOrganizationPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  enterprise?: Maybe<Enterprise>;
  organization?: Maybe<Organization>;
  viewer?: Maybe<User>;
};

export type RemoveEnterpriseSupportEntitlementInput = {
  enterpriseId: Scalars["ID"];
  login: Scalars["String"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type RemoveEnterpriseSupportEntitlementPayload = {
  __typename?: "RemoveEnterpriseSupportEntitlementPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  message?: Maybe<Scalars["String"]>;
};

export type RemoveLabelsFromLabelableInput = {
  labelableId: Scalars["ID"];
  labelIds: Array<Scalars["ID"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type RemoveLabelsFromLabelablePayload = {
  __typename?: "RemoveLabelsFromLabelablePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  labelable?: Maybe<Labelable>;
};

export type RemoveOutsideCollaboratorInput = {
  userId: Scalars["ID"];
  organizationId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type RemoveOutsideCollaboratorPayload = {
  __typename?: "RemoveOutsideCollaboratorPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  removedUser?: Maybe<User>;
};

export type RemoveReactionInput = {
  subjectId: Scalars["ID"];
  content: ReactionContent;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type RemoveReactionPayload = {
  __typename?: "RemoveReactionPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  reaction?: Maybe<Reaction>;
  reactionGroups?: Maybe<Array<ReactionGroup>>;
  subject?: Maybe<Reactable>;
};

export type RemoveStarInput = {
  starrableId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type RemoveStarPayload = {
  __typename?: "RemoveStarPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  starrable?: Maybe<Starrable>;
};

export type RemoveUpvoteInput = {
  subjectId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type RemoveUpvotePayload = {
  __typename?: "RemoveUpvotePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  subject?: Maybe<Votable>;
};

export type RemovedFromMergeQueueEvent = Node & {
  __typename?: "RemovedFromMergeQueueEvent";
  actor?: Maybe<Actor>;
  beforeCommit?: Maybe<Commit>;
  createdAt: Scalars["DateTime"];
  enqueuer?: Maybe<User>;
  id: Scalars["ID"];
  mergeQueue?: Maybe<MergeQueue>;
  pullRequest?: Maybe<PullRequest>;
  reason?: Maybe<Scalars["String"]>;
};

export type RemovedFromProjectEvent = Node & {
  __typename?: "RemovedFromProjectEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
};

export type RenamedTitleEvent = Node & {
  __typename?: "RenamedTitleEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  currentTitle: Scalars["String"];
  id: Scalars["ID"];
  previousTitle: Scalars["String"];
  subject: RenamedTitleSubject;
};

export type RenamedTitleSubject = Issue | PullRequest;

export type ReopenDiscussionInput = {
  discussionId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type ReopenDiscussionPayload = {
  __typename?: "ReopenDiscussionPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  discussion?: Maybe<Discussion>;
};

export type ReopenIssueInput = {
  issueId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type ReopenIssuePayload = {
  __typename?: "ReopenIssuePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  issue?: Maybe<Issue>;
};

export type ReopenPullRequestInput = {
  pullRequestId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type ReopenPullRequestPayload = {
  __typename?: "ReopenPullRequestPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  pullRequest?: Maybe<PullRequest>;
};

export type ReopenedEvent = Node & {
  __typename?: "ReopenedEvent";
  actor?: Maybe<Actor>;
  closable: Closable;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  stateReason?: Maybe<IssueStateReason>;
};

export type RepoAccessAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoAccessAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    repository?: Maybe<Repository>;
    repositoryName?: Maybe<Scalars["String"]>;
    repositoryResourcePath?: Maybe<Scalars["URI"]>;
    repositoryUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
    visibility?: Maybe<RepoAccessAuditEntryVisibility>;
  };

export enum RepoAccessAuditEntryVisibility {
  Internal = "INTERNAL",
  Private = "PRIVATE",
  Public = "PUBLIC",
}

export type RepoAddMemberAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoAddMemberAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    repository?: Maybe<Repository>;
    repositoryName?: Maybe<Scalars["String"]>;
    repositoryResourcePath?: Maybe<Scalars["URI"]>;
    repositoryUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
    visibility?: Maybe<RepoAddMemberAuditEntryVisibility>;
  };

export enum RepoAddMemberAuditEntryVisibility {
  Internal = "INTERNAL",
  Private = "PRIVATE",
  Public = "PUBLIC",
}

export type RepoAddTopicAuditEntry = Node &
  AuditEntry &
  RepositoryAuditEntryData &
  OrganizationAuditEntryData &
  TopicAuditEntryData & {
    __typename?: "RepoAddTopicAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    repository?: Maybe<Repository>;
    repositoryName?: Maybe<Scalars["String"]>;
    repositoryResourcePath?: Maybe<Scalars["URI"]>;
    repositoryUrl?: Maybe<Scalars["URI"]>;
    topic?: Maybe<Topic>;
    topicName?: Maybe<Scalars["String"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type RepoArchivedAuditEntry = Node &
  AuditEntry &
  RepositoryAuditEntryData &
  OrganizationAuditEntryData & {
    __typename?: "RepoArchivedAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    repository?: Maybe<Repository>;
    repositoryName?: Maybe<Scalars["String"]>;
    repositoryResourcePath?: Maybe<Scalars["URI"]>;
    repositoryUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
    visibility?: Maybe<RepoArchivedAuditEntryVisibility>;
  };

export enum RepoArchivedAuditEntryVisibility {
  Internal = "INTERNAL",
  Private = "PRIVATE",
  Public = "PUBLIC",
}

export type RepoChangeMergeSettingAuditEntry = Node &
  AuditEntry &
  RepositoryAuditEntryData &
  OrganizationAuditEntryData & {
    __typename?: "RepoChangeMergeSettingAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    isEnabled?: Maybe<Scalars["Boolean"]>;
    mergeType?: Maybe<RepoChangeMergeSettingAuditEntryMergeType>;
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    repository?: Maybe<Repository>;
    repositoryName?: Maybe<Scalars["String"]>;
    repositoryResourcePath?: Maybe<Scalars["URI"]>;
    repositoryUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export enum RepoChangeMergeSettingAuditEntryMergeType {
  Merge = "MERGE",
  Rebase = "REBASE",
  Squash = "SQUASH",
}

export type RepoConfigDisableAnonymousGitAccessAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoConfigDisableAnonymousGitAccessAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    repository?: Maybe<Repository>;
    repositoryName?: Maybe<Scalars["String"]>;
    repositoryResourcePath?: Maybe<Scalars["URI"]>;
    repositoryUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type RepoConfigDisableCollaboratorsOnlyAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoConfigDisableCollaboratorsOnlyAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    repository?: Maybe<Repository>;
    repositoryName?: Maybe<Scalars["String"]>;
    repositoryResourcePath?: Maybe<Scalars["URI"]>;
    repositoryUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type RepoConfigDisableContributorsOnlyAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoConfigDisableContributorsOnlyAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    repository?: Maybe<Repository>;
    repositoryName?: Maybe<Scalars["String"]>;
    repositoryResourcePath?: Maybe<Scalars["URI"]>;
    repositoryUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type RepoConfigDisableSockpuppetDisallowedAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoConfigDisableSockpuppetDisallowedAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    repository?: Maybe<Repository>;
    repositoryName?: Maybe<Scalars["String"]>;
    repositoryResourcePath?: Maybe<Scalars["URI"]>;
    repositoryUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type RepoConfigEnableAnonymousGitAccessAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoConfigEnableAnonymousGitAccessAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    repository?: Maybe<Repository>;
    repositoryName?: Maybe<Scalars["String"]>;
    repositoryResourcePath?: Maybe<Scalars["URI"]>;
    repositoryUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type RepoConfigEnableCollaboratorsOnlyAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoConfigEnableCollaboratorsOnlyAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    repository?: Maybe<Repository>;
    repositoryName?: Maybe<Scalars["String"]>;
    repositoryResourcePath?: Maybe<Scalars["URI"]>;
    repositoryUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type RepoConfigEnableContributorsOnlyAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoConfigEnableContributorsOnlyAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    repository?: Maybe<Repository>;
    repositoryName?: Maybe<Scalars["String"]>;
    repositoryResourcePath?: Maybe<Scalars["URI"]>;
    repositoryUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type RepoConfigEnableSockpuppetDisallowedAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoConfigEnableSockpuppetDisallowedAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    repository?: Maybe<Repository>;
    repositoryName?: Maybe<Scalars["String"]>;
    repositoryResourcePath?: Maybe<Scalars["URI"]>;
    repositoryUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type RepoConfigLockAnonymousGitAccessAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoConfigLockAnonymousGitAccessAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    repository?: Maybe<Repository>;
    repositoryName?: Maybe<Scalars["String"]>;
    repositoryResourcePath?: Maybe<Scalars["URI"]>;
    repositoryUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type RepoConfigUnlockAnonymousGitAccessAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoConfigUnlockAnonymousGitAccessAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    repository?: Maybe<Repository>;
    repositoryName?: Maybe<Scalars["String"]>;
    repositoryResourcePath?: Maybe<Scalars["URI"]>;
    repositoryUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type RepoCreateAuditEntry = Node &
  AuditEntry &
  RepositoryAuditEntryData &
  OrganizationAuditEntryData & {
    __typename?: "RepoCreateAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    forkParentName?: Maybe<Scalars["String"]>;
    forkSourceName?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    repository?: Maybe<Repository>;
    repositoryName?: Maybe<Scalars["String"]>;
    repositoryResourcePath?: Maybe<Scalars["URI"]>;
    repositoryUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
    visibility?: Maybe<RepoCreateAuditEntryVisibility>;
  };

export enum RepoCreateAuditEntryVisibility {
  Internal = "INTERNAL",
  Private = "PRIVATE",
  Public = "PUBLIC",
}

export type RepoDestroyAuditEntry = Node &
  AuditEntry &
  RepositoryAuditEntryData &
  OrganizationAuditEntryData & {
    __typename?: "RepoDestroyAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    repository?: Maybe<Repository>;
    repositoryName?: Maybe<Scalars["String"]>;
    repositoryResourcePath?: Maybe<Scalars["URI"]>;
    repositoryUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
    visibility?: Maybe<RepoDestroyAuditEntryVisibility>;
  };

export enum RepoDestroyAuditEntryVisibility {
  Internal = "INTERNAL",
  Private = "PRIVATE",
  Public = "PUBLIC",
}

export type RepoRemoveMemberAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData & {
    __typename?: "RepoRemoveMemberAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    repository?: Maybe<Repository>;
    repositoryName?: Maybe<Scalars["String"]>;
    repositoryResourcePath?: Maybe<Scalars["URI"]>;
    repositoryUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
    visibility?: Maybe<RepoRemoveMemberAuditEntryVisibility>;
  };

export enum RepoRemoveMemberAuditEntryVisibility {
  Internal = "INTERNAL",
  Private = "PRIVATE",
  Public = "PUBLIC",
}

export type RepoRemoveTopicAuditEntry = Node &
  AuditEntry &
  RepositoryAuditEntryData &
  OrganizationAuditEntryData &
  TopicAuditEntryData & {
    __typename?: "RepoRemoveTopicAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    repository?: Maybe<Repository>;
    repositoryName?: Maybe<Scalars["String"]>;
    repositoryResourcePath?: Maybe<Scalars["URI"]>;
    repositoryUrl?: Maybe<Scalars["URI"]>;
    topic?: Maybe<Topic>;
    topicName?: Maybe<Scalars["String"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export enum ReportedContentClassifiers {
  Spam = "SPAM",
  Abuse = "ABUSE",
  OffTopic = "OFF_TOPIC",
  Outdated = "OUTDATED",
  Duplicate = "DUPLICATE",
  Resolved = "RESOLVED",
}

export type Repository = Node &
  ProjectV2Recent &
  ProjectOwner &
  PackageOwner &
  Subscribable &
  Starrable &
  UniformResourceLocatable &
  RepositoryInfo & {
    __typename?: "Repository";
    allowUpdateBranch: Scalars["Boolean"];
    archivedAt?: Maybe<Scalars["DateTime"]>;
    assignableUsers: UserConnection;
    autoMergeAllowed: Scalars["Boolean"];
    branchProtectionRules: BranchProtectionRuleConnection;
    codeOfConduct?: Maybe<CodeOfConduct>;
    codeowners?: Maybe<RepositoryCodeowners>;
    collaborators?: Maybe<RepositoryCollaboratorConnection>;
    commitComments: CommitCommentConnection;
    contactLinks?: Maybe<Array<RepositoryContactLink>>;
    createdAt: Scalars["DateTime"];
    databaseId?: Maybe<Scalars["Int"]>;
    defaultBranchRef?: Maybe<Ref>;
    deleteBranchOnMerge: Scalars["Boolean"];
    deployKeys: DeployKeyConnection;
    deployments: DeploymentConnection;
    description?: Maybe<Scalars["String"]>;
    descriptionHTML: Scalars["HTML"];
    discussion?: Maybe<Discussion>;
    discussionCategories: DiscussionCategoryConnection;
    discussionCategory?: Maybe<DiscussionCategory>;
    discussions: DiscussionConnection;
    diskUsage?: Maybe<Scalars["Int"]>;
    environment?: Maybe<Environment>;
    environments: EnvironmentConnection;
    forkCount: Scalars["Int"];
    forkingAllowed: Scalars["Boolean"];
    forks: RepositoryConnection;
    fundingLinks: Array<FundingLink>;
    hasDiscussionsEnabled: Scalars["Boolean"];
    hasIssuesEnabled: Scalars["Boolean"];
    hasProjectsEnabled: Scalars["Boolean"];
    hasVulnerabilityAlertsEnabled: Scalars["Boolean"];
    hasWikiEnabled: Scalars["Boolean"];
    homepageUrl?: Maybe<Scalars["URI"]>;
    id: Scalars["ID"];
    interactionAbility?: Maybe<RepositoryInteractionAbility>;
    isArchived: Scalars["Boolean"];
    isBlankIssuesEnabled: Scalars["Boolean"];
    isDisabled: Scalars["Boolean"];
    isEmpty: Scalars["Boolean"];
    isFork: Scalars["Boolean"];
    isInOrganization: Scalars["Boolean"];
    isLocked: Scalars["Boolean"];
    isMirror: Scalars["Boolean"];
    isPrivate: Scalars["Boolean"];
    isSecurityPolicyEnabled?: Maybe<Scalars["Boolean"]>;
    isTemplate: Scalars["Boolean"];
    isUserConfigurationRepository: Scalars["Boolean"];
    issue?: Maybe<Issue>;
    issueOrPullRequest?: Maybe<IssueOrPullRequest>;
    issueTemplates?: Maybe<Array<IssueTemplate>>;
    issues: IssueConnection;
    label?: Maybe<Label>;
    labels?: Maybe<LabelConnection>;
    languages?: Maybe<LanguageConnection>;
    latestRelease?: Maybe<Release>;
    licenseInfo?: Maybe<License>;
    lockReason?: Maybe<RepositoryLockReason>;
    mentionableUsers: UserConnection;
    mergeCommitAllowed: Scalars["Boolean"];
    mergeCommitMessage: MergeCommitMessage;
    mergeCommitTitle: MergeCommitTitle;
    mergeQueue?: Maybe<MergeQueue>;
    milestone?: Maybe<Milestone>;
    milestones?: Maybe<MilestoneConnection>;
    mirrorUrl?: Maybe<Scalars["URI"]>;
    name: Scalars["String"];
    nameWithOwner: Scalars["String"];
    object?: Maybe<GitObject>;
    openGraphImageUrl: Scalars["URI"];
    owner: RepositoryOwner;
    packages: PackageConnection;
    parent?: Maybe<Repository>;
    pinnedDiscussions: PinnedDiscussionConnection;
    pinnedIssues?: Maybe<PinnedIssueConnection>;
    primaryLanguage?: Maybe<Language>;
    project?: Maybe<Project>;
    projectV2?: Maybe<ProjectV2>;
    projects: ProjectConnection;
    projectsResourcePath: Scalars["URI"];
    projectsUrl: Scalars["URI"];
    projectsV2: ProjectV2Connection;
    pullRequest?: Maybe<PullRequest>;
    pullRequestTemplates?: Maybe<Array<PullRequestTemplate>>;
    pullRequests: PullRequestConnection;
    pushedAt?: Maybe<Scalars["DateTime"]>;
    rebaseMergeAllowed: Scalars["Boolean"];
    recentProjects: ProjectV2Connection;
    ref?: Maybe<Ref>;
    refs?: Maybe<RefConnection>;
    release?: Maybe<Release>;
    releases: ReleaseConnection;
    repositoryTopics: RepositoryTopicConnection;
    resourcePath: Scalars["URI"];
    securityPolicyUrl?: Maybe<Scalars["URI"]>;
    shortDescriptionHTML: Scalars["HTML"];
    squashMergeAllowed: Scalars["Boolean"];
    squashMergeCommitMessage: SquashMergeCommitMessage;
    squashMergeCommitTitle: SquashMergeCommitTitle;
    /** @deprecated `squashPrTitleUsedAsDefault` will be removed. Use `Repository.squashMergeCommitTitle` instead. Removal on 2023-04-01 UTC. */
    squashPrTitleUsedAsDefault: Scalars["Boolean"];
    sshUrl: Scalars["GitSSHRemote"];
    stargazerCount: Scalars["Int"];
    stargazers: StargazerConnection;
    submodules: SubmoduleConnection;
    tempCloneToken?: Maybe<Scalars["String"]>;
    templateRepository?: Maybe<Repository>;
    updatedAt: Scalars["DateTime"];
    url: Scalars["URI"];
    usesCustomOpenGraphImage: Scalars["Boolean"];
    viewerCanAdminister: Scalars["Boolean"];
    viewerCanCreateProjects: Scalars["Boolean"];
    viewerCanSubscribe: Scalars["Boolean"];
    viewerCanUpdateTopics: Scalars["Boolean"];
    viewerDefaultCommitEmail?: Maybe<Scalars["String"]>;
    viewerDefaultMergeMethod: PullRequestMergeMethod;
    viewerHasStarred: Scalars["Boolean"];
    viewerPermission?: Maybe<RepositoryPermission>;
    viewerPossibleCommitEmails?: Maybe<Array<Scalars["String"]>>;
    viewerSubscription?: Maybe<SubscriptionState>;
    visibility: RepositoryVisibility;
    vulnerabilityAlert?: Maybe<RepositoryVulnerabilityAlert>;
    vulnerabilityAlerts?: Maybe<RepositoryVulnerabilityAlertConnection>;
    watchers: UserConnection;
    webCommitSignoffRequired: Scalars["Boolean"];
  };

export type RepositoryAssignableUsersArgs = {
  query?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type RepositoryBranchProtectionRulesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type RepositoryCodeownersArgs = {
  refName?: InputMaybe<Scalars["String"]>;
};

export type RepositoryCollaboratorsArgs = {
  affiliation?: InputMaybe<CollaboratorAffiliation>;
  login?: InputMaybe<Scalars["String"]>;
  query?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type RepositoryCommitCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type RepositoryDeployKeysArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type RepositoryDeploymentsArgs = {
  environments?: InputMaybe<Array<Scalars["String"]>>;
  orderBy?: InputMaybe<DeploymentOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type RepositoryDiscussionArgs = {
  number: Scalars["Int"];
};

export type RepositoryDiscussionCategoriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  filterByAssignable?: InputMaybe<Scalars["Boolean"]>;
};

export type RepositoryDiscussionCategoryArgs = {
  slug: Scalars["String"];
};

export type RepositoryDiscussionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  categoryId?: InputMaybe<Scalars["ID"]>;
  states?: InputMaybe<Array<DiscussionState>>;
  orderBy?: InputMaybe<DiscussionOrder>;
};

export type RepositoryEnvironmentArgs = {
  name: Scalars["String"];
};

export type RepositoryEnvironmentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type RepositoryForksArgs = {
  privacy?: InputMaybe<RepositoryPrivacy>;
  orderBy?: InputMaybe<RepositoryOrder>;
  affiliations?: InputMaybe<Array<InputMaybe<RepositoryAffiliation>>>;
  ownerAffiliations?: InputMaybe<Array<InputMaybe<RepositoryAffiliation>>>;
  isLocked?: InputMaybe<Scalars["Boolean"]>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type RepositoryIssueArgs = {
  number: Scalars["Int"];
};

export type RepositoryIssueOrPullRequestArgs = {
  number: Scalars["Int"];
};

export type RepositoryIssuesArgs = {
  orderBy?: InputMaybe<IssueOrder>;
  labels?: InputMaybe<Array<Scalars["String"]>>;
  states?: InputMaybe<Array<IssueState>>;
  filterBy?: InputMaybe<IssueFilters>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type RepositoryLabelArgs = {
  name: Scalars["String"];
};

export type RepositoryLabelsArgs = {
  orderBy?: InputMaybe<LabelOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  query?: InputMaybe<Scalars["String"]>;
};

export type RepositoryLanguagesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LanguageOrder>;
};

export type RepositoryMentionableUsersArgs = {
  query?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type RepositoryMergeQueueArgs = {
  branch?: InputMaybe<Scalars["String"]>;
};

export type RepositoryMilestoneArgs = {
  number: Scalars["Int"];
};

export type RepositoryMilestonesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  states?: InputMaybe<Array<MilestoneState>>;
  orderBy?: InputMaybe<MilestoneOrder>;
  query?: InputMaybe<Scalars["String"]>;
};

export type RepositoryObjectArgs = {
  oid?: InputMaybe<Scalars["GitObjectID"]>;
  expression?: InputMaybe<Scalars["String"]>;
};

export type RepositoryPackagesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  names?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  repositoryId?: InputMaybe<Scalars["ID"]>;
  packageType?: InputMaybe<PackageType>;
  orderBy?: InputMaybe<PackageOrder>;
};

export type RepositoryPinnedDiscussionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type RepositoryPinnedIssuesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type RepositoryProjectArgs = {
  number: Scalars["Int"];
};

export type RepositoryProjectV2Args = {
  number: Scalars["Int"];
};

export type RepositoryProjectsArgs = {
  orderBy?: InputMaybe<ProjectOrder>;
  search?: InputMaybe<Scalars["String"]>;
  states?: InputMaybe<Array<ProjectState>>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type RepositoryProjectsV2Args = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  query?: InputMaybe<Scalars["String"]>;
  orderBy?: InputMaybe<ProjectV2Order>;
};

export type RepositoryPullRequestArgs = {
  number: Scalars["Int"];
};

export type RepositoryPullRequestsArgs = {
  states?: InputMaybe<Array<PullRequestState>>;
  labels?: InputMaybe<Array<Scalars["String"]>>;
  headRefName?: InputMaybe<Scalars["String"]>;
  baseRefName?: InputMaybe<Scalars["String"]>;
  orderBy?: InputMaybe<IssueOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type RepositoryRecentProjectsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type RepositoryRefArgs = {
  qualifiedName: Scalars["String"];
};

export type RepositoryRefsArgs = {
  query?: InputMaybe<Scalars["String"]>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  refPrefix: Scalars["String"];
  direction?: InputMaybe<OrderDirection>;
  orderBy?: InputMaybe<RefOrder>;
};

export type RepositoryReleaseArgs = {
  tagName: Scalars["String"];
};

export type RepositoryReleasesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ReleaseOrder>;
};

export type RepositoryRepositoryTopicsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type RepositoryShortDescriptionHtmlArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
};

export type RepositoryStargazersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<StarOrder>;
};

export type RepositorySubmodulesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type RepositoryVulnerabilityAlertArgs = {
  number: Scalars["Int"];
};

export type RepositoryVulnerabilityAlertsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  states?: InputMaybe<Array<RepositoryVulnerabilityAlertState>>;
  dependencyScopes?: InputMaybe<
    Array<RepositoryVulnerabilityAlertDependencyScope>
  >;
};

export type RepositoryWatchersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export enum RepositoryAffiliation {
  Owner = "OWNER",
  Collaborator = "COLLABORATOR",
  OrganizationMember = "ORGANIZATION_MEMBER",
}

export type RepositoryAuditEntryData = {
  repository?: Maybe<Repository>;
  repositoryName?: Maybe<Scalars["String"]>;
  repositoryResourcePath?: Maybe<Scalars["URI"]>;
  repositoryUrl?: Maybe<Scalars["URI"]>;
};

export type RepositoryCodeowners = {
  __typename?: "RepositoryCodeowners";
  errors: Array<RepositoryCodeownersError>;
};

export type RepositoryCodeownersError = {
  __typename?: "RepositoryCodeownersError";
  column: Scalars["Int"];
  kind: Scalars["String"];
  line: Scalars["Int"];
  message: Scalars["String"];
  path: Scalars["String"];
  source: Scalars["String"];
  suggestion?: Maybe<Scalars["String"]>;
};

export type RepositoryCollaboratorConnection = {
  __typename?: "RepositoryCollaboratorConnection";
  edges?: Maybe<Array<Maybe<RepositoryCollaboratorEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type RepositoryCollaboratorEdge = {
  __typename?: "RepositoryCollaboratorEdge";
  cursor: Scalars["String"];
  node: User;
  permission: RepositoryPermission;
  permissionSources?: Maybe<Array<PermissionSource>>;
};

export type RepositoryConnection = {
  __typename?: "RepositoryConnection";
  edges?: Maybe<Array<Maybe<RepositoryEdge>>>;
  nodes?: Maybe<Array<Maybe<Repository>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
  totalDiskUsage: Scalars["Int"];
};

export type RepositoryContactLink = {
  __typename?: "RepositoryContactLink";
  about: Scalars["String"];
  name: Scalars["String"];
  url: Scalars["URI"];
};

export enum RepositoryContributionType {
  Commit = "COMMIT",
  Issue = "ISSUE",
  PullRequest = "PULL_REQUEST",
  Repository = "REPOSITORY",
  PullRequestReview = "PULL_REQUEST_REVIEW",
}

export type RepositoryDiscussionAuthor = {
  repositoryDiscussions: DiscussionConnection;
};

export type RepositoryDiscussionAuthorRepositoryDiscussionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DiscussionOrder>;
  repositoryId?: InputMaybe<Scalars["ID"]>;
  answered?: InputMaybe<Scalars["Boolean"]>;
  states?: InputMaybe<Array<DiscussionState>>;
};

export type RepositoryDiscussionCommentAuthor = {
  repositoryDiscussionComments: DiscussionCommentConnection;
};

export type RepositoryDiscussionCommentAuthorRepositoryDiscussionCommentsArgs =
  {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
    repositoryId?: InputMaybe<Scalars["ID"]>;
    onlyAnswers?: InputMaybe<Scalars["Boolean"]>;
  };

export type RepositoryEdge = {
  __typename?: "RepositoryEdge";
  cursor: Scalars["String"];
  node?: Maybe<Repository>;
};

export type RepositoryInfo = {
  archivedAt?: Maybe<Scalars["DateTime"]>;
  createdAt: Scalars["DateTime"];
  description?: Maybe<Scalars["String"]>;
  descriptionHTML: Scalars["HTML"];
  forkCount: Scalars["Int"];
  hasDiscussionsEnabled: Scalars["Boolean"];
  hasIssuesEnabled: Scalars["Boolean"];
  hasProjectsEnabled: Scalars["Boolean"];
  hasWikiEnabled: Scalars["Boolean"];
  homepageUrl?: Maybe<Scalars["URI"]>;
  isArchived: Scalars["Boolean"];
  isFork: Scalars["Boolean"];
  isInOrganization: Scalars["Boolean"];
  isLocked: Scalars["Boolean"];
  isMirror: Scalars["Boolean"];
  isPrivate: Scalars["Boolean"];
  isTemplate: Scalars["Boolean"];
  licenseInfo?: Maybe<License>;
  lockReason?: Maybe<RepositoryLockReason>;
  mirrorUrl?: Maybe<Scalars["URI"]>;
  name: Scalars["String"];
  nameWithOwner: Scalars["String"];
  openGraphImageUrl: Scalars["URI"];
  owner: RepositoryOwner;
  pushedAt?: Maybe<Scalars["DateTime"]>;
  resourcePath: Scalars["URI"];
  shortDescriptionHTML: Scalars["HTML"];
  updatedAt: Scalars["DateTime"];
  url: Scalars["URI"];
  usesCustomOpenGraphImage: Scalars["Boolean"];
  visibility: RepositoryVisibility;
};

export type RepositoryInfoShortDescriptionHtmlArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
};

export type RepositoryInteractionAbility = {
  __typename?: "RepositoryInteractionAbility";
  expiresAt?: Maybe<Scalars["DateTime"]>;
  limit: RepositoryInteractionLimit;
  origin: RepositoryInteractionLimitOrigin;
};

export enum RepositoryInteractionLimit {
  ExistingUsers = "EXISTING_USERS",
  ContributorsOnly = "CONTRIBUTORS_ONLY",
  CollaboratorsOnly = "COLLABORATORS_ONLY",
  NoLimit = "NO_LIMIT",
}

export enum RepositoryInteractionLimitExpiry {
  OneDay = "ONE_DAY",
  ThreeDays = "THREE_DAYS",
  OneWeek = "ONE_WEEK",
  OneMonth = "ONE_MONTH",
  SixMonths = "SIX_MONTHS",
}

export enum RepositoryInteractionLimitOrigin {
  Repository = "REPOSITORY",
  Organization = "ORGANIZATION",
  User = "USER",
}

export type RepositoryInvitation = Node & {
  __typename?: "RepositoryInvitation";
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  invitee?: Maybe<User>;
  inviter: User;
  permalink: Scalars["URI"];
  permission: RepositoryPermission;
  repository?: Maybe<RepositoryInfo>;
};

export type RepositoryInvitationConnection = {
  __typename?: "RepositoryInvitationConnection";
  edges?: Maybe<Array<Maybe<RepositoryInvitationEdge>>>;
  nodes?: Maybe<Array<Maybe<RepositoryInvitation>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type RepositoryInvitationEdge = {
  __typename?: "RepositoryInvitationEdge";
  cursor: Scalars["String"];
  node?: Maybe<RepositoryInvitation>;
};

export type RepositoryInvitationOrder = {
  field: RepositoryInvitationOrderField;
  direction: OrderDirection;
};

export enum RepositoryInvitationOrderField {
  CreatedAt = "CREATED_AT",
}

export enum RepositoryLockReason {
  Moving = "MOVING",
  Billing = "BILLING",
  Rename = "RENAME",
  Migrating = "MIGRATING",
  TradeRestriction = "TRADE_RESTRICTION",
}

export type RepositoryMigration = Node &
  Migration & {
    __typename?: "RepositoryMigration";
    continueOnError: Scalars["Boolean"];
    createdAt: Scalars["DateTime"];
    databaseId?: Maybe<Scalars["String"]>;
    failureReason?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    migrationLogUrl?: Maybe<Scalars["URI"]>;
    migrationSource: MigrationSource;
    repositoryName: Scalars["String"];
    sourceUrl: Scalars["URI"];
    state: MigrationState;
  };

export type RepositoryMigrationConnection = {
  __typename?: "RepositoryMigrationConnection";
  edges?: Maybe<Array<Maybe<RepositoryMigrationEdge>>>;
  nodes?: Maybe<Array<Maybe<RepositoryMigration>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type RepositoryMigrationEdge = {
  __typename?: "RepositoryMigrationEdge";
  cursor: Scalars["String"];
  node?: Maybe<RepositoryMigration>;
};

export type RepositoryMigrationOrder = {
  field: RepositoryMigrationOrderField;
  direction: RepositoryMigrationOrderDirection;
};

export enum RepositoryMigrationOrderDirection {
  Asc = "ASC",
  Desc = "DESC",
}

export enum RepositoryMigrationOrderField {
  CreatedAt = "CREATED_AT",
}

export type RepositoryNode = {
  repository: Repository;
};

export type RepositoryOrder = {
  field: RepositoryOrderField;
  direction: OrderDirection;
};

export enum RepositoryOrderField {
  CreatedAt = "CREATED_AT",
  UpdatedAt = "UPDATED_AT",
  PushedAt = "PUSHED_AT",
  Name = "NAME",
  Stargazers = "STARGAZERS",
}

export type RepositoryOwner = {
  avatarUrl: Scalars["URI"];
  id: Scalars["ID"];
  login: Scalars["String"];
  repositories: RepositoryConnection;
  repository?: Maybe<Repository>;
  resourcePath: Scalars["URI"];
  url: Scalars["URI"];
};

export type RepositoryOwnerAvatarUrlArgs = {
  size?: InputMaybe<Scalars["Int"]>;
};

export type RepositoryOwnerRepositoriesArgs = {
  privacy?: InputMaybe<RepositoryPrivacy>;
  orderBy?: InputMaybe<RepositoryOrder>;
  affiliations?: InputMaybe<Array<InputMaybe<RepositoryAffiliation>>>;
  ownerAffiliations?: InputMaybe<Array<InputMaybe<RepositoryAffiliation>>>;
  isLocked?: InputMaybe<Scalars["Boolean"]>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  isFork?: InputMaybe<Scalars["Boolean"]>;
};

export type RepositoryOwnerRepositoryArgs = {
  name: Scalars["String"];
  followRenames?: InputMaybe<Scalars["Boolean"]>;
};

export enum RepositoryPermission {
  Admin = "ADMIN",
  Maintain = "MAINTAIN",
  Write = "WRITE",
  Triage = "TRIAGE",
  Read = "READ",
}

export enum RepositoryPrivacy {
  Public = "PUBLIC",
  Private = "PRIVATE",
}

export type RepositoryTopic = Node &
  UniformResourceLocatable & {
    __typename?: "RepositoryTopic";
    id: Scalars["ID"];
    resourcePath: Scalars["URI"];
    topic: Topic;
    url: Scalars["URI"];
  };

export type RepositoryTopicConnection = {
  __typename?: "RepositoryTopicConnection";
  edges?: Maybe<Array<Maybe<RepositoryTopicEdge>>>;
  nodes?: Maybe<Array<Maybe<RepositoryTopic>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type RepositoryTopicEdge = {
  __typename?: "RepositoryTopicEdge";
  cursor: Scalars["String"];
  node?: Maybe<RepositoryTopic>;
};

export enum RepositoryVisibility {
  Private = "PRIVATE",
  Public = "PUBLIC",
  Internal = "INTERNAL",
}

export type RepositoryVisibilityChangeDisableAuditEntry = Node &
  AuditEntry &
  EnterpriseAuditEntryData &
  OrganizationAuditEntryData & {
    __typename?: "RepositoryVisibilityChangeDisableAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    enterpriseResourcePath?: Maybe<Scalars["URI"]>;
    enterpriseSlug?: Maybe<Scalars["String"]>;
    enterpriseUrl?: Maybe<Scalars["URI"]>;
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type RepositoryVisibilityChangeEnableAuditEntry = Node &
  AuditEntry &
  EnterpriseAuditEntryData &
  OrganizationAuditEntryData & {
    __typename?: "RepositoryVisibilityChangeEnableAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    enterpriseResourcePath?: Maybe<Scalars["URI"]>;
    enterpriseSlug?: Maybe<Scalars["String"]>;
    enterpriseUrl?: Maybe<Scalars["URI"]>;
    id: Scalars["ID"];
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type RepositoryVulnerabilityAlert = Node &
  RepositoryNode & {
    __typename?: "RepositoryVulnerabilityAlert";
    autoDismissedAt?: Maybe<Scalars["DateTime"]>;
    createdAt: Scalars["DateTime"];
    dependabotUpdate?: Maybe<DependabotUpdate>;
    dependencyScope?: Maybe<RepositoryVulnerabilityAlertDependencyScope>;
    dismissComment?: Maybe<Scalars["String"]>;
    dismissReason?: Maybe<Scalars["String"]>;
    dismissedAt?: Maybe<Scalars["DateTime"]>;
    dismisser?: Maybe<User>;
    fixedAt?: Maybe<Scalars["DateTime"]>;
    id: Scalars["ID"];
    number: Scalars["Int"];
    repository: Repository;
    securityAdvisory?: Maybe<SecurityAdvisory>;
    securityVulnerability?: Maybe<SecurityVulnerability>;
    state: RepositoryVulnerabilityAlertState;
    vulnerableManifestFilename: Scalars["String"];
    vulnerableManifestPath: Scalars["String"];
    vulnerableRequirements?: Maybe<Scalars["String"]>;
  };

export type RepositoryVulnerabilityAlertConnection = {
  __typename?: "RepositoryVulnerabilityAlertConnection";
  edges?: Maybe<Array<Maybe<RepositoryVulnerabilityAlertEdge>>>;
  nodes?: Maybe<Array<Maybe<RepositoryVulnerabilityAlert>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export enum RepositoryVulnerabilityAlertDependencyScope {
  Runtime = "RUNTIME",
  Development = "DEVELOPMENT",
}

export type RepositoryVulnerabilityAlertEdge = {
  __typename?: "RepositoryVulnerabilityAlertEdge";
  cursor: Scalars["String"];
  node?: Maybe<RepositoryVulnerabilityAlert>;
};

export enum RepositoryVulnerabilityAlertState {
  Open = "OPEN",
  Fixed = "FIXED",
  Dismissed = "DISMISSED",
  AutoDismissed = "AUTO_DISMISSED",
}

export type RequestReviewsInput = {
  pullRequestId: Scalars["ID"];
  userIds?: InputMaybe<Array<Scalars["ID"]>>;
  teamIds?: InputMaybe<Array<Scalars["ID"]>>;
  union?: InputMaybe<Scalars["Boolean"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type RequestReviewsPayload = {
  __typename?: "RequestReviewsPayload";
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<Scalars["String"]>;
  pullRequest?: Maybe<PullRequest>;
  requestedReviewersEdge?: Maybe<UserEdge>;
};

export enum RequestableCheckStatusState {
  Queued = "QUEUED",
  InProgress = "IN_PROGRESS",
  Completed = "COMPLETED",
  Waiting = "WAITING",
  Pending = "PENDING",
}

export type RequestedReviewer = Mannequin | Team | User;

export type RequestedReviewerConnection = {
  __typename?: "RequestedReviewerConnection";
  edges?: Maybe<Array<Maybe<RequestedReviewerEdge>>>;
  nodes?: Maybe<Array<Maybe<RequestedReviewer>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type RequestedReviewerEdge = {
  __typename?: "RequestedReviewerEdge";
  cursor: Scalars["String"];
  node?: Maybe<RequestedReviewer>;
};

export type RequirableByPullRequest = {
  isRequired: Scalars["Boolean"];
};

export type RequirableByPullRequestIsRequiredArgs = {
  pullRequestId?: InputMaybe<Scalars["ID"]>;
  pullRequestNumber?: InputMaybe<Scalars["Int"]>;
};

export type RequiredStatusCheckDescription = {
  __typename?: "RequiredStatusCheckDescription";
  app?: Maybe<App>;
  context: Scalars["String"];
};

export type RequiredStatusCheckInput = {
  context: Scalars["String"];
  appId?: InputMaybe<Scalars["ID"]>;
};

export type RerequestCheckSuiteInput = {
  repositoryId: Scalars["ID"];
  checkSuiteId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type RerequestCheckSuitePayload = {
  __typename?: "RerequestCheckSuitePayload";
  checkSuite?: Maybe<CheckSuite>;
  clientMutationId?: Maybe<Scalars["String"]>;
};

export type ResolveReviewThreadInput = {
  threadId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type ResolveReviewThreadPayload = {
  __typename?: "ResolveReviewThreadPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  thread?: Maybe<PullRequestReviewThread>;
};

export type RestrictedContribution = Contribution & {
  __typename?: "RestrictedContribution";
  isRestricted: Scalars["Boolean"];
  occurredAt: Scalars["DateTime"];
  resourcePath: Scalars["URI"];
  url: Scalars["URI"];
  user: User;
};

export type RetireSponsorsTierInput = {
  tierId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type RetireSponsorsTierPayload = {
  __typename?: "RetireSponsorsTierPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  sponsorsTier?: Maybe<SponsorsTier>;
};

export type RevertPullRequestInput = {
  pullRequestId: Scalars["ID"];
  title?: InputMaybe<Scalars["String"]>;
  body?: InputMaybe<Scalars["String"]>;
  draft?: InputMaybe<Scalars["Boolean"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type RevertPullRequestPayload = {
  __typename?: "RevertPullRequestPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  pullRequest?: Maybe<PullRequest>;
  revertPullRequest?: Maybe<PullRequest>;
};

export type ReviewDismissalAllowance = Node & {
  __typename?: "ReviewDismissalAllowance";
  actor?: Maybe<ReviewDismissalAllowanceActor>;
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  id: Scalars["ID"];
};

export type ReviewDismissalAllowanceActor = App | Team | User;

export type ReviewDismissalAllowanceConnection = {
  __typename?: "ReviewDismissalAllowanceConnection";
  edges?: Maybe<Array<Maybe<ReviewDismissalAllowanceEdge>>>;
  nodes?: Maybe<Array<Maybe<ReviewDismissalAllowance>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ReviewDismissalAllowanceEdge = {
  __typename?: "ReviewDismissalAllowanceEdge";
  cursor: Scalars["String"];
  node?: Maybe<ReviewDismissalAllowance>;
};

export type ReviewDismissedEvent = Node &
  UniformResourceLocatable & {
    __typename?: "ReviewDismissedEvent";
    actor?: Maybe<Actor>;
    createdAt: Scalars["DateTime"];
    databaseId?: Maybe<Scalars["Int"]>;
    dismissalMessage?: Maybe<Scalars["String"]>;
    dismissalMessageHTML?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    previousReviewState: PullRequestReviewState;
    pullRequest: PullRequest;
    pullRequestCommit?: Maybe<PullRequestCommit>;
    resourcePath: Scalars["URI"];
    review?: Maybe<PullRequestReview>;
    url: Scalars["URI"];
  };

export type ReviewRequest = Node & {
  __typename?: "ReviewRequest";
  asCodeOwner: Scalars["Boolean"];
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  pullRequest: PullRequest;
  requestedReviewer?: Maybe<RequestedReviewer>;
};

export type ReviewRequestConnection = {
  __typename?: "ReviewRequestConnection";
  edges?: Maybe<Array<Maybe<ReviewRequestEdge>>>;
  nodes?: Maybe<Array<Maybe<ReviewRequest>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type ReviewRequestEdge = {
  __typename?: "ReviewRequestEdge";
  cursor: Scalars["String"];
  node?: Maybe<ReviewRequest>;
};

export type ReviewRequestRemovedEvent = Node & {
  __typename?: "ReviewRequestRemovedEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  pullRequest: PullRequest;
  requestedReviewer?: Maybe<RequestedReviewer>;
};

export type ReviewRequestedEvent = Node & {
  __typename?: "ReviewRequestedEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  pullRequest: PullRequest;
  requestedReviewer?: Maybe<RequestedReviewer>;
};

export type ReviewStatusHovercardContext = HovercardContext & {
  __typename?: "ReviewStatusHovercardContext";
  message: Scalars["String"];
  octicon: Scalars["String"];
  reviewDecision?: Maybe<PullRequestReviewDecision>;
};

export type RevokeEnterpriseOrganizationsMigratorRoleInput = {
  enterpriseId: Scalars["ID"];
  login: Scalars["String"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type RevokeEnterpriseOrganizationsMigratorRolePayload = {
  __typename?: "RevokeEnterpriseOrganizationsMigratorRolePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  organizations?: Maybe<OrganizationConnection>;
};

export type RevokeEnterpriseOrganizationsMigratorRolePayloadOrganizationsArgs =
  {
    after?: InputMaybe<Scalars["String"]>;
    before?: InputMaybe<Scalars["String"]>;
    first?: InputMaybe<Scalars["Int"]>;
    last?: InputMaybe<Scalars["Int"]>;
  };

export type RevokeMigratorRoleInput = {
  organizationId: Scalars["ID"];
  actor: Scalars["String"];
  actorType: ActorType;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type RevokeMigratorRolePayload = {
  __typename?: "RevokeMigratorRolePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  success?: Maybe<Scalars["Boolean"]>;
};

export enum RoleInOrganization {
  Owner = "OWNER",
  DirectMember = "DIRECT_MEMBER",
  Unaffiliated = "UNAFFILIATED",
}

export enum SamlDigestAlgorithm {
  Sha1 = "SHA1",
  Sha256 = "SHA256",
  Sha384 = "SHA384",
  Sha512 = "SHA512",
}

export enum SamlSignatureAlgorithm {
  RsaSha1 = "RSA_SHA1",
  RsaSha256 = "RSA_SHA256",
  RsaSha384 = "RSA_SHA384",
  RsaSha512 = "RSA_SHA512",
}

export type SavedReply = Node & {
  __typename?: "SavedReply";
  body: Scalars["String"];
  bodyHTML: Scalars["HTML"];
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  title: Scalars["String"];
  user?: Maybe<Actor>;
};

export type SavedReplyConnection = {
  __typename?: "SavedReplyConnection";
  edges?: Maybe<Array<Maybe<SavedReplyEdge>>>;
  nodes?: Maybe<Array<Maybe<SavedReply>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type SavedReplyEdge = {
  __typename?: "SavedReplyEdge";
  cursor: Scalars["String"];
  node?: Maybe<SavedReply>;
};

export type SavedReplyOrder = {
  field: SavedReplyOrderField;
  direction: OrderDirection;
};

export enum SavedReplyOrderField {
  UpdatedAt = "UPDATED_AT",
}

export type SearchResultItem =
  | App
  | Discussion
  | Issue
  | MarketplaceListing
  | Organization
  | PullRequest
  | Repository
  | User;

export type SearchResultItemConnection = {
  __typename?: "SearchResultItemConnection";
  codeCount: Scalars["Int"];
  discussionCount: Scalars["Int"];
  edges?: Maybe<Array<Maybe<SearchResultItemEdge>>>;
  issueCount: Scalars["Int"];
  nodes?: Maybe<Array<Maybe<SearchResultItem>>>;
  pageInfo: PageInfo;
  repositoryCount: Scalars["Int"];
  userCount: Scalars["Int"];
  wikiCount: Scalars["Int"];
};

export type SearchResultItemEdge = {
  __typename?: "SearchResultItemEdge";
  cursor: Scalars["String"];
  node?: Maybe<SearchResultItem>;
  textMatches?: Maybe<Array<Maybe<TextMatch>>>;
};

export enum SearchType {
  Issue = "ISSUE",
  Repository = "REPOSITORY",
  User = "USER",
  Discussion = "DISCUSSION",
}

export type SecurityAdvisory = Node & {
  __typename?: "SecurityAdvisory";
  classification: SecurityAdvisoryClassification;
  cvss: Cvss;
  cwes: CweConnection;
  databaseId?: Maybe<Scalars["Int"]>;
  description: Scalars["String"];
  ghsaId: Scalars["String"];
  id: Scalars["ID"];
  identifiers: Array<SecurityAdvisoryIdentifier>;
  notificationsPermalink?: Maybe<Scalars["URI"]>;
  origin: Scalars["String"];
  permalink?: Maybe<Scalars["URI"]>;
  publishedAt: Scalars["DateTime"];
  references: Array<SecurityAdvisoryReference>;
  severity: SecurityAdvisorySeverity;
  summary: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  vulnerabilities: SecurityVulnerabilityConnection;
  withdrawnAt?: Maybe<Scalars["DateTime"]>;
};

export type SecurityAdvisoryCwesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type SecurityAdvisoryVulnerabilitiesArgs = {
  orderBy?: InputMaybe<SecurityVulnerabilityOrder>;
  ecosystem?: InputMaybe<SecurityAdvisoryEcosystem>;
  package?: InputMaybe<Scalars["String"]>;
  severities?: InputMaybe<Array<SecurityAdvisorySeverity>>;
  classifications?: InputMaybe<Array<SecurityAdvisoryClassification>>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export enum SecurityAdvisoryClassification {
  General = "GENERAL",
  Malware = "MALWARE",
}

export type SecurityAdvisoryConnection = {
  __typename?: "SecurityAdvisoryConnection";
  edges?: Maybe<Array<Maybe<SecurityAdvisoryEdge>>>;
  nodes?: Maybe<Array<Maybe<SecurityAdvisory>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export enum SecurityAdvisoryEcosystem {
  Composer = "COMPOSER",
  Erlang = "ERLANG",
  Actions = "ACTIONS",
  Go = "GO",
  Maven = "MAVEN",
  Npm = "NPM",
  Nuget = "NUGET",
  Pip = "PIP",
  Pub = "PUB",
  Rubygems = "RUBYGEMS",
  Rust = "RUST",
}

export type SecurityAdvisoryEdge = {
  __typename?: "SecurityAdvisoryEdge";
  cursor: Scalars["String"];
  node?: Maybe<SecurityAdvisory>;
};

export type SecurityAdvisoryIdentifier = {
  __typename?: "SecurityAdvisoryIdentifier";
  type: Scalars["String"];
  value: Scalars["String"];
};

export type SecurityAdvisoryIdentifierFilter = {
  type: SecurityAdvisoryIdentifierType;
  value: Scalars["String"];
};

export enum SecurityAdvisoryIdentifierType {
  Cve = "CVE",
  Ghsa = "GHSA",
}

export type SecurityAdvisoryOrder = {
  field: SecurityAdvisoryOrderField;
  direction: OrderDirection;
};

export enum SecurityAdvisoryOrderField {
  PublishedAt = "PUBLISHED_AT",
  UpdatedAt = "UPDATED_AT",
}

export type SecurityAdvisoryPackage = {
  __typename?: "SecurityAdvisoryPackage";
  ecosystem: SecurityAdvisoryEcosystem;
  name: Scalars["String"];
};

export type SecurityAdvisoryPackageVersion = {
  __typename?: "SecurityAdvisoryPackageVersion";
  identifier: Scalars["String"];
};

export type SecurityAdvisoryReference = {
  __typename?: "SecurityAdvisoryReference";
  url: Scalars["URI"];
};

export enum SecurityAdvisorySeverity {
  Low = "LOW",
  Moderate = "MODERATE",
  High = "HIGH",
  Critical = "CRITICAL",
}

export type SecurityVulnerability = {
  __typename?: "SecurityVulnerability";
  advisory: SecurityAdvisory;
  firstPatchedVersion?: Maybe<SecurityAdvisoryPackageVersion>;
  package: SecurityAdvisoryPackage;
  severity: SecurityAdvisorySeverity;
  updatedAt: Scalars["DateTime"];
  vulnerableVersionRange: Scalars["String"];
};

export type SecurityVulnerabilityConnection = {
  __typename?: "SecurityVulnerabilityConnection";
  edges?: Maybe<Array<Maybe<SecurityVulnerabilityEdge>>>;
  nodes?: Maybe<Array<Maybe<SecurityVulnerability>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type SecurityVulnerabilityEdge = {
  __typename?: "SecurityVulnerabilityEdge";
  cursor: Scalars["String"];
  node?: Maybe<SecurityVulnerability>;
};

export type SecurityVulnerabilityOrder = {
  field: SecurityVulnerabilityOrderField;
  direction: OrderDirection;
};

export enum SecurityVulnerabilityOrderField {
  UpdatedAt = "UPDATED_AT",
}

export type SetEnterpriseIdentityProviderInput = {
  enterpriseId: Scalars["ID"];
  ssoUrl: Scalars["URI"];
  issuer?: InputMaybe<Scalars["String"]>;
  idpCertificate: Scalars["String"];
  signatureMethod: SamlSignatureAlgorithm;
  digestMethod: SamlDigestAlgorithm;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type SetEnterpriseIdentityProviderPayload = {
  __typename?: "SetEnterpriseIdentityProviderPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  identityProvider?: Maybe<EnterpriseIdentityProvider>;
};

export type SetOrganizationInteractionLimitInput = {
  organizationId: Scalars["ID"];
  limit: RepositoryInteractionLimit;
  expiry?: InputMaybe<RepositoryInteractionLimitExpiry>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type SetOrganizationInteractionLimitPayload = {
  __typename?: "SetOrganizationInteractionLimitPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  organization?: Maybe<Organization>;
};

export type SetRepositoryInteractionLimitInput = {
  repositoryId: Scalars["ID"];
  limit: RepositoryInteractionLimit;
  expiry?: InputMaybe<RepositoryInteractionLimitExpiry>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type SetRepositoryInteractionLimitPayload = {
  __typename?: "SetRepositoryInteractionLimitPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  repository?: Maybe<Repository>;
};

export type SetUserInteractionLimitInput = {
  userId: Scalars["ID"];
  limit: RepositoryInteractionLimit;
  expiry?: InputMaybe<RepositoryInteractionLimitExpiry>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type SetUserInteractionLimitPayload = {
  __typename?: "SetUserInteractionLimitPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export type SmimeSignature = GitSignature & {
  __typename?: "SmimeSignature";
  email: Scalars["String"];
  isValid: Scalars["Boolean"];
  payload: Scalars["String"];
  signature: Scalars["String"];
  signer?: Maybe<User>;
  state: GitSignatureState;
  wasSignedByGitHub: Scalars["Boolean"];
};

export type SocialAccount = {
  __typename?: "SocialAccount";
  displayName: Scalars["String"];
  provider: SocialAccountProvider;
  url: Scalars["URI"];
};

export type SocialAccountConnection = {
  __typename?: "SocialAccountConnection";
  edges?: Maybe<Array<Maybe<SocialAccountEdge>>>;
  nodes?: Maybe<Array<Maybe<SocialAccount>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type SocialAccountEdge = {
  __typename?: "SocialAccountEdge";
  cursor: Scalars["String"];
  node?: Maybe<SocialAccount>;
};

export enum SocialAccountProvider {
  Generic = "GENERIC",
  Facebook = "FACEBOOK",
  Hometown = "HOMETOWN",
  Instagram = "INSTAGRAM",
  Linkedin = "LINKEDIN",
  Mastodon = "MASTODON",
  Reddit = "REDDIT",
  Twitch = "TWITCH",
  Twitter = "TWITTER",
  Youtube = "YOUTUBE",
}

export type Sponsor = Organization | User;

export type SponsorConnection = {
  __typename?: "SponsorConnection";
  edges?: Maybe<Array<Maybe<SponsorEdge>>>;
  nodes?: Maybe<Array<Maybe<Sponsor>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type SponsorEdge = {
  __typename?: "SponsorEdge";
  cursor: Scalars["String"];
  node?: Maybe<Sponsor>;
};

export type SponsorOrder = {
  field: SponsorOrderField;
  direction: OrderDirection;
};

export enum SponsorOrderField {
  Login = "LOGIN",
  Relevance = "RELEVANCE",
}

export type Sponsorable = {
  estimatedNextSponsorsPayoutInCents: Scalars["Int"];
  hasSponsorsListing: Scalars["Boolean"];
  isSponsoredBy: Scalars["Boolean"];
  isSponsoringViewer: Scalars["Boolean"];
  monthlyEstimatedSponsorsIncomeInCents: Scalars["Int"];
  sponsoring: SponsorConnection;
  sponsors: SponsorConnection;
  sponsorsActivities: SponsorsActivityConnection;
  sponsorsListing?: Maybe<SponsorsListing>;
  sponsorshipForViewerAsSponsor?: Maybe<Sponsorship>;
  sponsorshipForViewerAsSponsorable?: Maybe<Sponsorship>;
  sponsorshipNewsletters: SponsorshipNewsletterConnection;
  sponsorshipsAsMaintainer: SponsorshipConnection;
  sponsorshipsAsSponsor: SponsorshipConnection;
  totalSponsorshipAmountAsSponsorInCents?: Maybe<Scalars["Int"]>;
  viewerCanSponsor: Scalars["Boolean"];
  viewerIsSponsoring: Scalars["Boolean"];
};

export type SponsorableIsSponsoredByArgs = {
  accountLogin: Scalars["String"];
};

export type SponsorableSponsoringArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SponsorOrder>;
};

export type SponsorableSponsorsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  tierId?: InputMaybe<Scalars["ID"]>;
  orderBy?: InputMaybe<SponsorOrder>;
};

export type SponsorableSponsorsActivitiesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  period?: InputMaybe<SponsorsActivityPeriod>;
  since?: InputMaybe<Scalars["DateTime"]>;
  until?: InputMaybe<Scalars["DateTime"]>;
  orderBy?: InputMaybe<SponsorsActivityOrder>;
  actions?: InputMaybe<Array<SponsorsActivityAction>>;
  includeAsSponsor?: InputMaybe<Scalars["Boolean"]>;
};

export type SponsorableSponsorshipForViewerAsSponsorArgs = {
  activeOnly?: InputMaybe<Scalars["Boolean"]>;
};

export type SponsorableSponsorshipForViewerAsSponsorableArgs = {
  activeOnly?: InputMaybe<Scalars["Boolean"]>;
};

export type SponsorableSponsorshipNewslettersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SponsorshipNewsletterOrder>;
};

export type SponsorableSponsorshipsAsMaintainerArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  includePrivate?: InputMaybe<Scalars["Boolean"]>;
  orderBy?: InputMaybe<SponsorshipOrder>;
  activeOnly?: InputMaybe<Scalars["Boolean"]>;
};

export type SponsorableSponsorshipsAsSponsorArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SponsorshipOrder>;
  maintainerLogins?: InputMaybe<Array<Scalars["String"]>>;
  activeOnly?: InputMaybe<Scalars["Boolean"]>;
};

export type SponsorableTotalSponsorshipAmountAsSponsorInCentsArgs = {
  since?: InputMaybe<Scalars["DateTime"]>;
  until?: InputMaybe<Scalars["DateTime"]>;
  sponsorableLogins?: InputMaybe<Array<Scalars["String"]>>;
};

export type SponsorableItem = Organization | User;

export type SponsorableItemConnection = {
  __typename?: "SponsorableItemConnection";
  edges?: Maybe<Array<Maybe<SponsorableItemEdge>>>;
  nodes?: Maybe<Array<Maybe<SponsorableItem>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type SponsorableItemEdge = {
  __typename?: "SponsorableItemEdge";
  cursor: Scalars["String"];
  node?: Maybe<SponsorableItem>;
};

export type SponsorableOrder = {
  field: SponsorableOrderField;
  direction: OrderDirection;
};

export enum SponsorableOrderField {
  Login = "LOGIN",
}

export type SponsorsActivity = Node & {
  __typename?: "SponsorsActivity";
  action: SponsorsActivityAction;
  id: Scalars["ID"];
  previousSponsorsTier?: Maybe<SponsorsTier>;
  sponsor?: Maybe<Sponsor>;
  sponsorable: Sponsorable;
  sponsorsTier?: Maybe<SponsorsTier>;
  timestamp?: Maybe<Scalars["DateTime"]>;
  viaBulkSponsorship: Scalars["Boolean"];
};

export enum SponsorsActivityAction {
  NewSponsorship = "NEW_SPONSORSHIP",
  CancelledSponsorship = "CANCELLED_SPONSORSHIP",
  TierChange = "TIER_CHANGE",
  Refund = "REFUND",
  PendingChange = "PENDING_CHANGE",
  SponsorMatchDisabled = "SPONSOR_MATCH_DISABLED",
}

export type SponsorsActivityConnection = {
  __typename?: "SponsorsActivityConnection";
  edges?: Maybe<Array<Maybe<SponsorsActivityEdge>>>;
  nodes?: Maybe<Array<Maybe<SponsorsActivity>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type SponsorsActivityEdge = {
  __typename?: "SponsorsActivityEdge";
  cursor: Scalars["String"];
  node?: Maybe<SponsorsActivity>;
};

export type SponsorsActivityOrder = {
  field: SponsorsActivityOrderField;
  direction: OrderDirection;
};

export enum SponsorsActivityOrderField {
  Timestamp = "TIMESTAMP",
}

export enum SponsorsActivityPeriod {
  Day = "DAY",
  Week = "WEEK",
  Month = "MONTH",
  All = "ALL",
}

export enum SponsorsCountryOrRegionCode {
  Af = "AF",
  Ax = "AX",
  Al = "AL",
  Dz = "DZ",
  As = "AS",
  Ad = "AD",
  Ao = "AO",
  Ai = "AI",
  Aq = "AQ",
  Ag = "AG",
  Ar = "AR",
  Am = "AM",
  Aw = "AW",
  Au = "AU",
  At = "AT",
  Az = "AZ",
  Bs = "BS",
  Bh = "BH",
  Bd = "BD",
  Bb = "BB",
  By = "BY",
  Be = "BE",
  Bz = "BZ",
  Bj = "BJ",
  Bm = "BM",
  Bt = "BT",
  Bo = "BO",
  Bq = "BQ",
  Ba = "BA",
  Bw = "BW",
  Bv = "BV",
  Br = "BR",
  Io = "IO",
  Bn = "BN",
  Bg = "BG",
  Bf = "BF",
  Bi = "BI",
  Kh = "KH",
  Cm = "CM",
  Ca = "CA",
  Cv = "CV",
  Ky = "KY",
  Cf = "CF",
  Td = "TD",
  Cl = "CL",
  Cn = "CN",
  Cx = "CX",
  Cc = "CC",
  Co = "CO",
  Km = "KM",
  Cg = "CG",
  Cd = "CD",
  Ck = "CK",
  Cr = "CR",
  Ci = "CI",
  Hr = "HR",
  Cw = "CW",
  Cy = "CY",
  Cz = "CZ",
  Dk = "DK",
  Dj = "DJ",
  Dm = "DM",
  Do = "DO",
  Ec = "EC",
  Eg = "EG",
  Sv = "SV",
  Gq = "GQ",
  Er = "ER",
  Ee = "EE",
  Et = "ET",
  Fk = "FK",
  Fo = "FO",
  Fj = "FJ",
  Fi = "FI",
  Fr = "FR",
  Gf = "GF",
  Pf = "PF",
  Tf = "TF",
  Ga = "GA",
  Gm = "GM",
  Ge = "GE",
  De = "DE",
  Gh = "GH",
  Gi = "GI",
  Gr = "GR",
  Gl = "GL",
  Gd = "GD",
  Gp = "GP",
  Gu = "GU",
  Gt = "GT",
  Gg = "GG",
  Gn = "GN",
  Gw = "GW",
  Gy = "GY",
  Ht = "HT",
  Hm = "HM",
  Hn = "HN",
  Hk = "HK",
  Hu = "HU",
  Is = "IS",
  In = "IN",
  Id = "ID",
  Ir = "IR",
  Iq = "IQ",
  Ie = "IE",
  Im = "IM",
  Il = "IL",
  It = "IT",
  Jm = "JM",
  Jp = "JP",
  Je = "JE",
  Jo = "JO",
  Kz = "KZ",
  Ke = "KE",
  Ki = "KI",
  Kr = "KR",
  Kw = "KW",
  Kg = "KG",
  La = "LA",
  Lv = "LV",
  Lb = "LB",
  Ls = "LS",
  Lr = "LR",
  Ly = "LY",
  Li = "LI",
  Lt = "LT",
  Lu = "LU",
  Mo = "MO",
  Mk = "MK",
  Mg = "MG",
  Mw = "MW",
  My = "MY",
  Mv = "MV",
  Ml = "ML",
  Mt = "MT",
  Mh = "MH",
  Mq = "MQ",
  Mr = "MR",
  Mu = "MU",
  Yt = "YT",
  Mx = "MX",
  Fm = "FM",
  Md = "MD",
  Mc = "MC",
  Mn = "MN",
  Me = "ME",
  Ms = "MS",
  Ma = "MA",
  Mz = "MZ",
  Mm = "MM",
  Na = "NA",
  Nr = "NR",
  Np = "NP",
  Nl = "NL",
  Nc = "NC",
  Nz = "NZ",
  Ni = "NI",
  Ne = "NE",
  Ng = "NG",
  Nu = "NU",
  Nf = "NF",
  Mp = "MP",
  No = "NO",
  Om = "OM",
  Pk = "PK",
  Pw = "PW",
  Ps = "PS",
  Pa = "PA",
  Pg = "PG",
  Py = "PY",
  Pe = "PE",
  Ph = "PH",
  Pn = "PN",
  Pl = "PL",
  Pt = "PT",
  Pr = "PR",
  Qa = "QA",
  Re = "RE",
  Ro = "RO",
  Ru = "RU",
  Rw = "RW",
  Bl = "BL",
  Sh = "SH",
  Kn = "KN",
  Lc = "LC",
  Mf = "MF",
  Pm = "PM",
  Vc = "VC",
  Ws = "WS",
  Sm = "SM",
  St = "ST",
  Sa = "SA",
  Sn = "SN",
  Rs = "RS",
  Sc = "SC",
  Sl = "SL",
  Sg = "SG",
  Sx = "SX",
  Sk = "SK",
  Si = "SI",
  Sb = "SB",
  So = "SO",
  Za = "ZA",
  Gs = "GS",
  Ss = "SS",
  Es = "ES",
  Lk = "LK",
  Sd = "SD",
  Sr = "SR",
  Sj = "SJ",
  Sz = "SZ",
  Se = "SE",
  Ch = "CH",
  Tw = "TW",
  Tj = "TJ",
  Tz = "TZ",
  Th = "TH",
  Tl = "TL",
  Tg = "TG",
  Tk = "TK",
  To = "TO",
  Tt = "TT",
  Tn = "TN",
  Tr = "TR",
  Tm = "TM",
  Tc = "TC",
  Tv = "TV",
  Ug = "UG",
  Ua = "UA",
  Ae = "AE",
  Gb = "GB",
  Um = "UM",
  Us = "US",
  Uy = "UY",
  Uz = "UZ",
  Vu = "VU",
  Va = "VA",
  Ve = "VE",
  Vn = "VN",
  Vg = "VG",
  Vi = "VI",
  Wf = "WF",
  Eh = "EH",
  Ye = "YE",
  Zm = "ZM",
  Zw = "ZW",
}

export type SponsorsGoal = {
  __typename?: "SponsorsGoal";
  description?: Maybe<Scalars["String"]>;
  kind: SponsorsGoalKind;
  percentComplete: Scalars["Int"];
  targetValue: Scalars["Int"];
  title: Scalars["String"];
};

export enum SponsorsGoalKind {
  TotalSponsorsCount = "TOTAL_SPONSORS_COUNT",
  MonthlySponsorshipAmount = "MONTHLY_SPONSORSHIP_AMOUNT",
}

export type SponsorsListing = Node & {
  __typename?: "SponsorsListing";
  activeGoal?: Maybe<SponsorsGoal>;
  activeStripeConnectAccount?: Maybe<StripeConnectAccount>;
  billingCountryOrRegion?: Maybe<Scalars["String"]>;
  contactEmailAddress?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  dashboardResourcePath: Scalars["URI"];
  dashboardUrl: Scalars["URI"];
  featuredItems: Array<SponsorsListingFeaturedItem>;
  fiscalHost?: Maybe<Organization>;
  fullDescription: Scalars["String"];
  fullDescriptionHTML: Scalars["HTML"];
  id: Scalars["ID"];
  isPublic: Scalars["Boolean"];
  name: Scalars["String"];
  nextPayoutDate?: Maybe<Scalars["Date"]>;
  residenceCountryOrRegion?: Maybe<Scalars["String"]>;
  resourcePath: Scalars["URI"];
  shortDescription: Scalars["String"];
  slug: Scalars["String"];
  sponsorable: Sponsorable;
  tiers?: Maybe<SponsorsTierConnection>;
  url: Scalars["URI"];
};

export type SponsorsListingFeaturedItemsArgs = {
  featureableTypes?: InputMaybe<
    Array<SponsorsListingFeaturedItemFeatureableType>
  >;
};

export type SponsorsListingTiersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SponsorsTierOrder>;
  includeUnpublished?: InputMaybe<Scalars["Boolean"]>;
};

export type SponsorsListingFeatureableItem = Repository | User;

export type SponsorsListingFeaturedItem = Node & {
  __typename?: "SponsorsListingFeaturedItem";
  createdAt: Scalars["DateTime"];
  description?: Maybe<Scalars["String"]>;
  featureable: SponsorsListingFeatureableItem;
  id: Scalars["ID"];
  position: Scalars["Int"];
  sponsorsListing: SponsorsListing;
  updatedAt: Scalars["DateTime"];
};

export enum SponsorsListingFeaturedItemFeatureableType {
  Repository = "REPOSITORY",
  User = "USER",
}

export type SponsorsTier = Node & {
  __typename?: "SponsorsTier";
  adminInfo?: Maybe<SponsorsTierAdminInfo>;
  closestLesserValueTier?: Maybe<SponsorsTier>;
  createdAt: Scalars["DateTime"];
  description: Scalars["String"];
  descriptionHTML: Scalars["HTML"];
  id: Scalars["ID"];
  isCustomAmount: Scalars["Boolean"];
  isOneTime: Scalars["Boolean"];
  monthlyPriceInCents: Scalars["Int"];
  monthlyPriceInDollars: Scalars["Int"];
  name: Scalars["String"];
  sponsorsListing: SponsorsListing;
  updatedAt: Scalars["DateTime"];
};

export type SponsorsTierAdminInfo = {
  __typename?: "SponsorsTierAdminInfo";
  isDraft: Scalars["Boolean"];
  isPublished: Scalars["Boolean"];
  isRetired: Scalars["Boolean"];
  sponsorships: SponsorshipConnection;
};

export type SponsorsTierAdminInfoSponsorshipsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  includePrivate?: InputMaybe<Scalars["Boolean"]>;
  orderBy?: InputMaybe<SponsorshipOrder>;
};

export type SponsorsTierConnection = {
  __typename?: "SponsorsTierConnection";
  edges?: Maybe<Array<Maybe<SponsorsTierEdge>>>;
  nodes?: Maybe<Array<Maybe<SponsorsTier>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type SponsorsTierEdge = {
  __typename?: "SponsorsTierEdge";
  cursor: Scalars["String"];
  node?: Maybe<SponsorsTier>;
};

export type SponsorsTierOrder = {
  field: SponsorsTierOrderField;
  direction: OrderDirection;
};

export enum SponsorsTierOrderField {
  CreatedAt = "CREATED_AT",
  MonthlyPriceInCents = "MONTHLY_PRICE_IN_CENTS",
}

export type Sponsorship = Node & {
  __typename?: "Sponsorship";
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  isOneTimePayment: Scalars["Boolean"];
  isSponsorOptedIntoEmail?: Maybe<Scalars["Boolean"]>;
  /** @deprecated `Sponsorship.maintainer` will be removed. Use `Sponsorship.sponsorable` instead. Removal on 2020-04-01 UTC. */
  maintainer: User;
  privacyLevel: SponsorshipPrivacy;
  /** @deprecated `Sponsorship.sponsor` will be removed. Use `Sponsorship.sponsorEntity` instead. Removal on 2020-10-01 UTC. */
  sponsor?: Maybe<User>;
  sponsorEntity?: Maybe<Sponsor>;
  sponsorable: Sponsorable;
  tier?: Maybe<SponsorsTier>;
  tierSelectedAt?: Maybe<Scalars["DateTime"]>;
};

export type SponsorshipConnection = {
  __typename?: "SponsorshipConnection";
  edges?: Maybe<Array<Maybe<SponsorshipEdge>>>;
  nodes?: Maybe<Array<Maybe<Sponsorship>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
  totalRecurringMonthlyPriceInCents: Scalars["Int"];
  totalRecurringMonthlyPriceInDollars: Scalars["Int"];
};

export type SponsorshipEdge = {
  __typename?: "SponsorshipEdge";
  cursor: Scalars["String"];
  node?: Maybe<Sponsorship>;
};

export type SponsorshipNewsletter = Node & {
  __typename?: "SponsorshipNewsletter";
  author?: Maybe<User>;
  body: Scalars["String"];
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  isPublished: Scalars["Boolean"];
  sponsorable: Sponsorable;
  subject: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type SponsorshipNewsletterConnection = {
  __typename?: "SponsorshipNewsletterConnection";
  edges?: Maybe<Array<Maybe<SponsorshipNewsletterEdge>>>;
  nodes?: Maybe<Array<Maybe<SponsorshipNewsletter>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type SponsorshipNewsletterEdge = {
  __typename?: "SponsorshipNewsletterEdge";
  cursor: Scalars["String"];
  node?: Maybe<SponsorshipNewsletter>;
};

export type SponsorshipNewsletterOrder = {
  field: SponsorshipNewsletterOrderField;
  direction: OrderDirection;
};

export enum SponsorshipNewsletterOrderField {
  CreatedAt = "CREATED_AT",
}

export type SponsorshipOrder = {
  field: SponsorshipOrderField;
  direction: OrderDirection;
};

export enum SponsorshipOrderField {
  CreatedAt = "CREATED_AT",
}

export enum SponsorshipPrivacy {
  Public = "PUBLIC",
  Private = "PRIVATE",
}

export enum SquashMergeCommitMessage {
  PrBody = "PR_BODY",
  CommitMessages = "COMMIT_MESSAGES",
  Blank = "BLANK",
}

export enum SquashMergeCommitTitle {
  PrTitle = "PR_TITLE",
  CommitOrPrTitle = "COMMIT_OR_PR_TITLE",
}

export type SshSignature = GitSignature & {
  __typename?: "SshSignature";
  email: Scalars["String"];
  isValid: Scalars["Boolean"];
  keyFingerprint?: Maybe<Scalars["String"]>;
  payload: Scalars["String"];
  signature: Scalars["String"];
  signer?: Maybe<User>;
  state: GitSignatureState;
  wasSignedByGitHub: Scalars["Boolean"];
};

export type StarOrder = {
  field: StarOrderField;
  direction: OrderDirection;
};

export enum StarOrderField {
  StarredAt = "STARRED_AT",
}

export type StargazerConnection = {
  __typename?: "StargazerConnection";
  edges?: Maybe<Array<Maybe<StargazerEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type StargazerEdge = {
  __typename?: "StargazerEdge";
  cursor: Scalars["String"];
  node: User;
  starredAt: Scalars["DateTime"];
};

export type Starrable = {
  id: Scalars["ID"];
  stargazerCount: Scalars["Int"];
  stargazers: StargazerConnection;
  viewerHasStarred: Scalars["Boolean"];
};

export type StarrableStargazersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<StarOrder>;
};

export type StarredRepositoryConnection = {
  __typename?: "StarredRepositoryConnection";
  edges?: Maybe<Array<Maybe<StarredRepositoryEdge>>>;
  isOverLimit: Scalars["Boolean"];
  nodes?: Maybe<Array<Maybe<Repository>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type StarredRepositoryEdge = {
  __typename?: "StarredRepositoryEdge";
  cursor: Scalars["String"];
  node: Repository;
  starredAt: Scalars["DateTime"];
};

export type StartOrganizationMigrationInput = {
  sourceOrgUrl: Scalars["URI"];
  targetOrgName: Scalars["String"];
  targetEnterpriseId: Scalars["ID"];
  sourceAccessToken: Scalars["String"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type StartOrganizationMigrationPayload = {
  __typename?: "StartOrganizationMigrationPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  orgMigration?: Maybe<OrganizationMigration>;
};

export type StartRepositoryMigrationInput = {
  sourceId: Scalars["ID"];
  ownerId: Scalars["ID"];
  sourceRepositoryUrl?: InputMaybe<Scalars["URI"]>;
  repositoryName: Scalars["String"];
  continueOnError?: InputMaybe<Scalars["Boolean"]>;
  gitArchiveUrl?: InputMaybe<Scalars["String"]>;
  metadataArchiveUrl?: InputMaybe<Scalars["String"]>;
  accessToken?: InputMaybe<Scalars["String"]>;
  githubPat?: InputMaybe<Scalars["String"]>;
  skipReleases?: InputMaybe<Scalars["Boolean"]>;
  targetRepoVisibility?: InputMaybe<Scalars["String"]>;
  lockSource?: InputMaybe<Scalars["Boolean"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type StartRepositoryMigrationPayload = {
  __typename?: "StartRepositoryMigrationPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  repositoryMigration?: Maybe<RepositoryMigration>;
};

export type Status = Node & {
  __typename?: "Status";
  combinedContexts: StatusCheckRollupContextConnection;
  commit?: Maybe<Commit>;
  context?: Maybe<StatusContext>;
  contexts: Array<StatusContext>;
  id: Scalars["ID"];
  state: StatusState;
};

export type StatusCombinedContextsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type StatusContextArgs = {
  name: Scalars["String"];
};

export type StatusCheckRollup = Node & {
  __typename?: "StatusCheckRollup";
  commit?: Maybe<Commit>;
  contexts: StatusCheckRollupContextConnection;
  id: Scalars["ID"];
  state: StatusState;
};

export type StatusCheckRollupContextsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type StatusCheckRollupContext = CheckRun | StatusContext;

export type StatusCheckRollupContextConnection = {
  __typename?: "StatusCheckRollupContextConnection";
  checkRunCount: Scalars["Int"];
  checkRunCountsByState?: Maybe<Array<CheckRunStateCount>>;
  edges?: Maybe<Array<Maybe<StatusCheckRollupContextEdge>>>;
  nodes?: Maybe<Array<Maybe<StatusCheckRollupContext>>>;
  pageInfo: PageInfo;
  statusContextCount: Scalars["Int"];
  statusContextCountsByState?: Maybe<Array<StatusContextStateCount>>;
  totalCount: Scalars["Int"];
};

export type StatusCheckRollupContextEdge = {
  __typename?: "StatusCheckRollupContextEdge";
  cursor: Scalars["String"];
  node?: Maybe<StatusCheckRollupContext>;
};

export type StatusContext = RequirableByPullRequest &
  Node & {
    __typename?: "StatusContext";
    avatarUrl?: Maybe<Scalars["URI"]>;
    commit?: Maybe<Commit>;
    context: Scalars["String"];
    createdAt: Scalars["DateTime"];
    creator?: Maybe<Actor>;
    description?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    isRequired: Scalars["Boolean"];
    state: StatusState;
    targetUrl?: Maybe<Scalars["URI"]>;
  };

export type StatusContextAvatarUrlArgs = {
  size?: InputMaybe<Scalars["Int"]>;
};

export type StatusContextIsRequiredArgs = {
  pullRequestId?: InputMaybe<Scalars["ID"]>;
  pullRequestNumber?: InputMaybe<Scalars["Int"]>;
};

export type StatusContextStateCount = {
  __typename?: "StatusContextStateCount";
  count: Scalars["Int"];
  state: StatusState;
};

export enum StatusState {
  Expected = "EXPECTED",
  Error = "ERROR",
  Failure = "FAILURE",
  Pending = "PENDING",
  Success = "SUCCESS",
}

export type StripeConnectAccount = {
  __typename?: "StripeConnectAccount";
  accountId: Scalars["String"];
  billingCountryOrRegion?: Maybe<Scalars["String"]>;
  countryOrRegion?: Maybe<Scalars["String"]>;
  isActive: Scalars["Boolean"];
  sponsorsListing: SponsorsListing;
  stripeDashboardUrl: Scalars["URI"];
};

export type SubmitPullRequestReviewInput = {
  pullRequestId?: InputMaybe<Scalars["ID"]>;
  pullRequestReviewId?: InputMaybe<Scalars["ID"]>;
  event: PullRequestReviewEvent;
  body?: InputMaybe<Scalars["String"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type SubmitPullRequestReviewPayload = {
  __typename?: "SubmitPullRequestReviewPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  pullRequestReview?: Maybe<PullRequestReview>;
};

export type Submodule = {
  __typename?: "Submodule";
  branch?: Maybe<Scalars["String"]>;
  gitUrl: Scalars["URI"];
  name: Scalars["String"];
  nameRaw: Scalars["Base64String"];
  path: Scalars["String"];
  pathRaw: Scalars["Base64String"];
  subprojectCommitOid?: Maybe<Scalars["GitObjectID"]>;
};

export type SubmoduleConnection = {
  __typename?: "SubmoduleConnection";
  edges?: Maybe<Array<Maybe<SubmoduleEdge>>>;
  nodes?: Maybe<Array<Maybe<Submodule>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type SubmoduleEdge = {
  __typename?: "SubmoduleEdge";
  cursor: Scalars["String"];
  node?: Maybe<Submodule>;
};

export type Subscribable = {
  id: Scalars["ID"];
  viewerCanSubscribe: Scalars["Boolean"];
  viewerSubscription?: Maybe<SubscriptionState>;
};

export type SubscribedEvent = Node & {
  __typename?: "SubscribedEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  subscribable: Subscribable;
};

export enum SubscriptionState {
  Unsubscribed = "UNSUBSCRIBED",
  Subscribed = "SUBSCRIBED",
  Ignored = "IGNORED",
}

export type SuggestedReviewer = {
  __typename?: "SuggestedReviewer";
  isAuthor: Scalars["Boolean"];
  isCommenter: Scalars["Boolean"];
  reviewer: User;
};

export type Tag = Node &
  GitObject & {
    __typename?: "Tag";
    abbreviatedOid: Scalars["String"];
    commitResourcePath: Scalars["URI"];
    commitUrl: Scalars["URI"];
    id: Scalars["ID"];
    message?: Maybe<Scalars["String"]>;
    name: Scalars["String"];
    oid: Scalars["GitObjectID"];
    repository: Repository;
    tagger?: Maybe<GitActor>;
    target: GitObject;
  };

export type Team = Node &
  Subscribable &
  MemberStatusable & {
    __typename?: "Team";
    ancestors: TeamConnection;
    avatarUrl?: Maybe<Scalars["URI"]>;
    childTeams: TeamConnection;
    combinedSlug: Scalars["String"];
    createdAt: Scalars["DateTime"];
    databaseId?: Maybe<Scalars["Int"]>;
    description?: Maybe<Scalars["String"]>;
    discussion?: Maybe<TeamDiscussion>;
    discussions: TeamDiscussionConnection;
    discussionsResourcePath: Scalars["URI"];
    discussionsUrl: Scalars["URI"];
    editTeamResourcePath: Scalars["URI"];
    editTeamUrl: Scalars["URI"];
    id: Scalars["ID"];
    invitations?: Maybe<OrganizationInvitationConnection>;
    memberStatuses: UserStatusConnection;
    members: TeamMemberConnection;
    membersResourcePath: Scalars["URI"];
    membersUrl: Scalars["URI"];
    name: Scalars["String"];
    newTeamResourcePath: Scalars["URI"];
    newTeamUrl: Scalars["URI"];
    notificationSetting: TeamNotificationSetting;
    organization: Organization;
    parentTeam?: Maybe<Team>;
    privacy: TeamPrivacy;
    projectV2?: Maybe<ProjectV2>;
    projectsV2: ProjectV2Connection;
    repositories: TeamRepositoryConnection;
    repositoriesResourcePath: Scalars["URI"];
    repositoriesUrl: Scalars["URI"];
    resourcePath: Scalars["URI"];
    slug: Scalars["String"];
    teamsResourcePath: Scalars["URI"];
    teamsUrl: Scalars["URI"];
    updatedAt: Scalars["DateTime"];
    url: Scalars["URI"];
    viewerCanAdminister: Scalars["Boolean"];
    viewerCanSubscribe: Scalars["Boolean"];
    viewerSubscription?: Maybe<SubscriptionState>;
  };

export type TeamAncestorsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type TeamAvatarUrlArgs = {
  size?: InputMaybe<Scalars["Int"]>;
};

export type TeamChildTeamsArgs = {
  orderBy?: InputMaybe<TeamOrder>;
  userLogins?: InputMaybe<Array<Scalars["String"]>>;
  immediateOnly?: InputMaybe<Scalars["Boolean"]>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type TeamDiscussionArgs = {
  number: Scalars["Int"];
};

export type TeamDiscussionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  isPinned?: InputMaybe<Scalars["Boolean"]>;
  orderBy?: InputMaybe<TeamDiscussionOrder>;
};

export type TeamInvitationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type TeamMemberStatusesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<UserStatusOrder>;
};

export type TeamMembersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  query?: InputMaybe<Scalars["String"]>;
  membership?: InputMaybe<TeamMembershipType>;
  role?: InputMaybe<TeamMemberRole>;
  orderBy?: InputMaybe<TeamMemberOrder>;
};

export type TeamProjectV2Args = {
  number: Scalars["Int"];
};

export type TeamProjectsV2Args = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ProjectV2Order>;
  filterBy?: InputMaybe<ProjectV2Filters>;
  query?: InputMaybe<Scalars["String"]>;
};

export type TeamRepositoriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  query?: InputMaybe<Scalars["String"]>;
  orderBy?: InputMaybe<TeamRepositoryOrder>;
};

export type TeamAddMemberAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData &
  TeamAuditEntryData & {
    __typename?: "TeamAddMemberAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    isLdapMapped?: Maybe<Scalars["Boolean"]>;
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    team?: Maybe<Team>;
    teamName?: Maybe<Scalars["String"]>;
    teamResourcePath?: Maybe<Scalars["URI"]>;
    teamUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type TeamAddRepositoryAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData &
  TeamAuditEntryData & {
    __typename?: "TeamAddRepositoryAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    isLdapMapped?: Maybe<Scalars["Boolean"]>;
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    repository?: Maybe<Repository>;
    repositoryName?: Maybe<Scalars["String"]>;
    repositoryResourcePath?: Maybe<Scalars["URI"]>;
    repositoryUrl?: Maybe<Scalars["URI"]>;
    team?: Maybe<Team>;
    teamName?: Maybe<Scalars["String"]>;
    teamResourcePath?: Maybe<Scalars["URI"]>;
    teamUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type TeamAuditEntryData = {
  team?: Maybe<Team>;
  teamName?: Maybe<Scalars["String"]>;
  teamResourcePath?: Maybe<Scalars["URI"]>;
  teamUrl?: Maybe<Scalars["URI"]>;
};

export type TeamChangeParentTeamAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData &
  TeamAuditEntryData & {
    __typename?: "TeamChangeParentTeamAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    isLdapMapped?: Maybe<Scalars["Boolean"]>;
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    parentTeam?: Maybe<Team>;
    parentTeamName?: Maybe<Scalars["String"]>;
    parentTeamNameWas?: Maybe<Scalars["String"]>;
    parentTeamResourcePath?: Maybe<Scalars["URI"]>;
    parentTeamUrl?: Maybe<Scalars["URI"]>;
    parentTeamWas?: Maybe<Team>;
    parentTeamWasResourcePath?: Maybe<Scalars["URI"]>;
    parentTeamWasUrl?: Maybe<Scalars["URI"]>;
    team?: Maybe<Team>;
    teamName?: Maybe<Scalars["String"]>;
    teamResourcePath?: Maybe<Scalars["URI"]>;
    teamUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type TeamConnection = {
  __typename?: "TeamConnection";
  edges?: Maybe<Array<Maybe<TeamEdge>>>;
  nodes?: Maybe<Array<Maybe<Team>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type TeamDiscussion = Node &
  Comment &
  Deletable &
  Reactable &
  Subscribable &
  UniformResourceLocatable &
  Updatable &
  UpdatableComment & {
    __typename?: "TeamDiscussion";
    author?: Maybe<Actor>;
    authorAssociation: CommentAuthorAssociation;
    body: Scalars["String"];
    bodyHTML: Scalars["HTML"];
    bodyText: Scalars["String"];
    bodyVersion: Scalars["String"];
    comments: TeamDiscussionCommentConnection;
    commentsResourcePath: Scalars["URI"];
    commentsUrl: Scalars["URI"];
    createdAt: Scalars["DateTime"];
    createdViaEmail: Scalars["Boolean"];
    databaseId?: Maybe<Scalars["Int"]>;
    editor?: Maybe<Actor>;
    id: Scalars["ID"];
    includesCreatedEdit: Scalars["Boolean"];
    isPinned: Scalars["Boolean"];
    isPrivate: Scalars["Boolean"];
    lastEditedAt?: Maybe<Scalars["DateTime"]>;
    number: Scalars["Int"];
    publishedAt?: Maybe<Scalars["DateTime"]>;
    reactionGroups?: Maybe<Array<ReactionGroup>>;
    reactions: ReactionConnection;
    resourcePath: Scalars["URI"];
    team: Team;
    title: Scalars["String"];
    updatedAt: Scalars["DateTime"];
    url: Scalars["URI"];
    userContentEdits?: Maybe<UserContentEditConnection>;
    viewerCanDelete: Scalars["Boolean"];
    viewerCanPin: Scalars["Boolean"];
    viewerCanReact: Scalars["Boolean"];
    viewerCanSubscribe: Scalars["Boolean"];
    viewerCanUpdate: Scalars["Boolean"];
    viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
    viewerDidAuthor: Scalars["Boolean"];
    viewerSubscription?: Maybe<SubscriptionState>;
  };

export type TeamDiscussionCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TeamDiscussionCommentOrder>;
  fromComment?: InputMaybe<Scalars["Int"]>;
};

export type TeamDiscussionReactionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  content?: InputMaybe<ReactionContent>;
  orderBy?: InputMaybe<ReactionOrder>;
};

export type TeamDiscussionUserContentEditsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type TeamDiscussionComment = Node &
  Comment &
  Deletable &
  Reactable &
  UniformResourceLocatable &
  Updatable &
  UpdatableComment & {
    __typename?: "TeamDiscussionComment";
    author?: Maybe<Actor>;
    authorAssociation: CommentAuthorAssociation;
    body: Scalars["String"];
    bodyHTML: Scalars["HTML"];
    bodyText: Scalars["String"];
    bodyVersion: Scalars["String"];
    createdAt: Scalars["DateTime"];
    createdViaEmail: Scalars["Boolean"];
    databaseId?: Maybe<Scalars["Int"]>;
    discussion: TeamDiscussion;
    editor?: Maybe<Actor>;
    id: Scalars["ID"];
    includesCreatedEdit: Scalars["Boolean"];
    lastEditedAt?: Maybe<Scalars["DateTime"]>;
    number: Scalars["Int"];
    publishedAt?: Maybe<Scalars["DateTime"]>;
    reactionGroups?: Maybe<Array<ReactionGroup>>;
    reactions: ReactionConnection;
    resourcePath: Scalars["URI"];
    updatedAt: Scalars["DateTime"];
    url: Scalars["URI"];
    userContentEdits?: Maybe<UserContentEditConnection>;
    viewerCanDelete: Scalars["Boolean"];
    viewerCanReact: Scalars["Boolean"];
    viewerCanUpdate: Scalars["Boolean"];
    viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
    viewerDidAuthor: Scalars["Boolean"];
  };

export type TeamDiscussionCommentReactionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  content?: InputMaybe<ReactionContent>;
  orderBy?: InputMaybe<ReactionOrder>;
};

export type TeamDiscussionCommentUserContentEditsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type TeamDiscussionCommentConnection = {
  __typename?: "TeamDiscussionCommentConnection";
  edges?: Maybe<Array<Maybe<TeamDiscussionCommentEdge>>>;
  nodes?: Maybe<Array<Maybe<TeamDiscussionComment>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type TeamDiscussionCommentEdge = {
  __typename?: "TeamDiscussionCommentEdge";
  cursor: Scalars["String"];
  node?: Maybe<TeamDiscussionComment>;
};

export type TeamDiscussionCommentOrder = {
  field: TeamDiscussionCommentOrderField;
  direction: OrderDirection;
};

export enum TeamDiscussionCommentOrderField {
  Number = "NUMBER",
}

export type TeamDiscussionConnection = {
  __typename?: "TeamDiscussionConnection";
  edges?: Maybe<Array<Maybe<TeamDiscussionEdge>>>;
  nodes?: Maybe<Array<Maybe<TeamDiscussion>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type TeamDiscussionEdge = {
  __typename?: "TeamDiscussionEdge";
  cursor: Scalars["String"];
  node?: Maybe<TeamDiscussion>;
};

export type TeamDiscussionOrder = {
  field: TeamDiscussionOrderField;
  direction: OrderDirection;
};

export enum TeamDiscussionOrderField {
  CreatedAt = "CREATED_AT",
}

export type TeamEdge = {
  __typename?: "TeamEdge";
  cursor: Scalars["String"];
  node?: Maybe<Team>;
};

export type TeamMemberConnection = {
  __typename?: "TeamMemberConnection";
  edges?: Maybe<Array<Maybe<TeamMemberEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type TeamMemberEdge = {
  __typename?: "TeamMemberEdge";
  cursor: Scalars["String"];
  memberAccessResourcePath: Scalars["URI"];
  memberAccessUrl: Scalars["URI"];
  node: User;
  role: TeamMemberRole;
};

export type TeamMemberOrder = {
  field: TeamMemberOrderField;
  direction: OrderDirection;
};

export enum TeamMemberOrderField {
  Login = "LOGIN",
  CreatedAt = "CREATED_AT",
}

export enum TeamMemberRole {
  Maintainer = "MAINTAINER",
  Member = "MEMBER",
}

export enum TeamMembershipType {
  Immediate = "IMMEDIATE",
  ChildTeam = "CHILD_TEAM",
  All = "ALL",
}

export enum TeamNotificationSetting {
  NotificationsEnabled = "NOTIFICATIONS_ENABLED",
  NotificationsDisabled = "NOTIFICATIONS_DISABLED",
}

export type TeamOrder = {
  field: TeamOrderField;
  direction: OrderDirection;
};

export enum TeamOrderField {
  Name = "NAME",
}

export enum TeamPrivacy {
  Secret = "SECRET",
  Visible = "VISIBLE",
}

export type TeamRemoveMemberAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData &
  TeamAuditEntryData & {
    __typename?: "TeamRemoveMemberAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    isLdapMapped?: Maybe<Scalars["Boolean"]>;
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    team?: Maybe<Team>;
    teamName?: Maybe<Scalars["String"]>;
    teamResourcePath?: Maybe<Scalars["URI"]>;
    teamUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type TeamRemoveRepositoryAuditEntry = Node &
  AuditEntry &
  OrganizationAuditEntryData &
  RepositoryAuditEntryData &
  TeamAuditEntryData & {
    __typename?: "TeamRemoveRepositoryAuditEntry";
    action: Scalars["String"];
    actor?: Maybe<AuditEntryActor>;
    actorIp?: Maybe<Scalars["String"]>;
    actorLocation?: Maybe<ActorLocation>;
    actorLogin?: Maybe<Scalars["String"]>;
    actorResourcePath?: Maybe<Scalars["URI"]>;
    actorUrl?: Maybe<Scalars["URI"]>;
    createdAt: Scalars["PreciseDateTime"];
    id: Scalars["ID"];
    isLdapMapped?: Maybe<Scalars["Boolean"]>;
    operationType?: Maybe<OperationType>;
    organization?: Maybe<Organization>;
    organizationName?: Maybe<Scalars["String"]>;
    organizationResourcePath?: Maybe<Scalars["URI"]>;
    organizationUrl?: Maybe<Scalars["URI"]>;
    repository?: Maybe<Repository>;
    repositoryName?: Maybe<Scalars["String"]>;
    repositoryResourcePath?: Maybe<Scalars["URI"]>;
    repositoryUrl?: Maybe<Scalars["URI"]>;
    team?: Maybe<Team>;
    teamName?: Maybe<Scalars["String"]>;
    teamResourcePath?: Maybe<Scalars["URI"]>;
    teamUrl?: Maybe<Scalars["URI"]>;
    user?: Maybe<User>;
    userLogin?: Maybe<Scalars["String"]>;
    userResourcePath?: Maybe<Scalars["URI"]>;
    userUrl?: Maybe<Scalars["URI"]>;
  };

export type TeamRepositoryConnection = {
  __typename?: "TeamRepositoryConnection";
  edges?: Maybe<Array<Maybe<TeamRepositoryEdge>>>;
  nodes?: Maybe<Array<Maybe<Repository>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type TeamRepositoryEdge = {
  __typename?: "TeamRepositoryEdge";
  cursor: Scalars["String"];
  node: Repository;
  permission: RepositoryPermission;
};

export type TeamRepositoryOrder = {
  field: TeamRepositoryOrderField;
  direction: OrderDirection;
};

export enum TeamRepositoryOrderField {
  CreatedAt = "CREATED_AT",
  UpdatedAt = "UPDATED_AT",
  PushedAt = "PUSHED_AT",
  Name = "NAME",
  Permission = "PERMISSION",
  Stargazers = "STARGAZERS",
}

export enum TeamRole {
  Admin = "ADMIN",
  Member = "MEMBER",
}

export type TextMatch = {
  __typename?: "TextMatch";
  fragment: Scalars["String"];
  highlights: Array<TextMatchHighlight>;
  property: Scalars["String"];
};

export type TextMatchHighlight = {
  __typename?: "TextMatchHighlight";
  beginIndice: Scalars["Int"];
  endIndice: Scalars["Int"];
  text: Scalars["String"];
};

export type Topic = Node &
  Starrable & {
    __typename?: "Topic";
    id: Scalars["ID"];
    name: Scalars["String"];
    relatedTopics: Array<Topic>;
    repositories: RepositoryConnection;
    stargazerCount: Scalars["Int"];
    stargazers: StargazerConnection;
    viewerHasStarred: Scalars["Boolean"];
  };

export type TopicRelatedTopicsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
};

export type TopicRepositoriesArgs = {
  privacy?: InputMaybe<RepositoryPrivacy>;
  orderBy?: InputMaybe<RepositoryOrder>;
  affiliations?: InputMaybe<Array<InputMaybe<RepositoryAffiliation>>>;
  ownerAffiliations?: InputMaybe<Array<InputMaybe<RepositoryAffiliation>>>;
  isLocked?: InputMaybe<Scalars["Boolean"]>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  sponsorableOnly?: InputMaybe<Scalars["Boolean"]>;
};

export type TopicStargazersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<StarOrder>;
};

export type TopicAuditEntryData = {
  topic?: Maybe<Topic>;
  topicName?: Maybe<Scalars["String"]>;
};

export enum TopicSuggestionDeclineReason {
  NotRelevant = "NOT_RELEVANT",
  TooSpecific = "TOO_SPECIFIC",
  PersonalPreference = "PERSONAL_PREFERENCE",
  TooGeneral = "TOO_GENERAL",
}

export enum TrackedIssueStates {
  Open = "OPEN",
  Closed = "CLOSED",
}

export type TransferEnterpriseOrganizationInput = {
  organizationId: Scalars["ID"];
  destinationEnterpriseId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type TransferEnterpriseOrganizationPayload = {
  __typename?: "TransferEnterpriseOrganizationPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  organization?: Maybe<Organization>;
};

export type TransferIssueInput = {
  issueId: Scalars["ID"];
  repositoryId: Scalars["ID"];
  createLabelsIfMissing?: InputMaybe<Scalars["Boolean"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type TransferIssuePayload = {
  __typename?: "TransferIssuePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  issue?: Maybe<Issue>;
};

export type TransferredEvent = Node & {
  __typename?: "TransferredEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  fromRepository?: Maybe<Repository>;
  id: Scalars["ID"];
  issue: Issue;
};

export type Tree = Node &
  GitObject & {
    __typename?: "Tree";
    abbreviatedOid: Scalars["String"];
    commitResourcePath: Scalars["URI"];
    commitUrl: Scalars["URI"];
    entries?: Maybe<Array<TreeEntry>>;
    id: Scalars["ID"];
    oid: Scalars["GitObjectID"];
    repository: Repository;
  };

export type TreeEntry = {
  __typename?: "TreeEntry";
  extension?: Maybe<Scalars["String"]>;
  isGenerated: Scalars["Boolean"];
  language?: Maybe<Language>;
  lineCount?: Maybe<Scalars["Int"]>;
  mode: Scalars["Int"];
  name: Scalars["String"];
  nameRaw: Scalars["Base64String"];
  object?: Maybe<GitObject>;
  oid: Scalars["GitObjectID"];
  path?: Maybe<Scalars["String"]>;
  pathRaw?: Maybe<Scalars["Base64String"]>;
  repository: Repository;
  size: Scalars["Int"];
  submodule?: Maybe<Submodule>;
  type: Scalars["String"];
};

export type UnarchiveProjectV2ItemInput = {
  projectId: Scalars["ID"];
  itemId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UnarchiveProjectV2ItemPayload = {
  __typename?: "UnarchiveProjectV2ItemPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  item?: Maybe<ProjectV2Item>;
};

export type UnarchiveRepositoryInput = {
  repositoryId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UnarchiveRepositoryPayload = {
  __typename?: "UnarchiveRepositoryPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  repository?: Maybe<Repository>;
};

export type UnassignedEvent = Node & {
  __typename?: "UnassignedEvent";
  actor?: Maybe<Actor>;
  assignable: Assignable;
  assignee?: Maybe<Assignee>;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  /** @deprecated Assignees can now be mannequins. Use the `assignee` field instead. Removal on 2020-01-01 UTC. */
  user?: Maybe<User>;
};

export type UnfollowOrganizationInput = {
  organizationId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UnfollowOrganizationPayload = {
  __typename?: "UnfollowOrganizationPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  organization?: Maybe<Organization>;
};

export type UnfollowUserInput = {
  userId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UnfollowUserPayload = {
  __typename?: "UnfollowUserPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export type UniformResourceLocatable = {
  resourcePath: Scalars["URI"];
  url: Scalars["URI"];
};

export type UnknownSignature = GitSignature & {
  __typename?: "UnknownSignature";
  email: Scalars["String"];
  isValid: Scalars["Boolean"];
  payload: Scalars["String"];
  signature: Scalars["String"];
  signer?: Maybe<User>;
  state: GitSignatureState;
  wasSignedByGitHub: Scalars["Boolean"];
};

export type UnlabeledEvent = Node & {
  __typename?: "UnlabeledEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  label: Label;
  labelable: Labelable;
};

export type UnlinkProjectV2FromRepositoryInput = {
  projectId: Scalars["ID"];
  repositoryId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UnlinkProjectV2FromRepositoryPayload = {
  __typename?: "UnlinkProjectV2FromRepositoryPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  repository?: Maybe<Repository>;
};

export type UnlinkProjectV2FromTeamInput = {
  projectId: Scalars["ID"];
  teamId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UnlinkProjectV2FromTeamPayload = {
  __typename?: "UnlinkProjectV2FromTeamPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  team?: Maybe<Team>;
};

export type UnlinkRepositoryFromProjectInput = {
  projectId: Scalars["ID"];
  repositoryId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UnlinkRepositoryFromProjectPayload = {
  __typename?: "UnlinkRepositoryFromProjectPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  project?: Maybe<Project>;
  repository?: Maybe<Repository>;
};

export type UnlockLockableInput = {
  lockableId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UnlockLockablePayload = {
  __typename?: "UnlockLockablePayload";
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<Scalars["String"]>;
  unlockedRecord?: Maybe<Lockable>;
};

export type UnlockedEvent = Node & {
  __typename?: "UnlockedEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  lockable: Lockable;
};

export type UnmarkDiscussionCommentAsAnswerInput = {
  id: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UnmarkDiscussionCommentAsAnswerPayload = {
  __typename?: "UnmarkDiscussionCommentAsAnswerPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  discussion?: Maybe<Discussion>;
};

export type UnmarkFileAsViewedInput = {
  pullRequestId: Scalars["ID"];
  path: Scalars["String"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UnmarkFileAsViewedPayload = {
  __typename?: "UnmarkFileAsViewedPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  pullRequest?: Maybe<PullRequest>;
};

export type UnmarkIssueAsDuplicateInput = {
  duplicateId: Scalars["ID"];
  canonicalId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UnmarkIssueAsDuplicatePayload = {
  __typename?: "UnmarkIssueAsDuplicatePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  duplicate?: Maybe<IssueOrPullRequest>;
};

export type UnmarkedAsDuplicateEvent = Node & {
  __typename?: "UnmarkedAsDuplicateEvent";
  actor?: Maybe<Actor>;
  canonical?: Maybe<IssueOrPullRequest>;
  createdAt: Scalars["DateTime"];
  duplicate?: Maybe<IssueOrPullRequest>;
  id: Scalars["ID"];
  isCrossRepository: Scalars["Boolean"];
};

export type UnminimizeCommentInput = {
  subjectId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UnminimizeCommentPayload = {
  __typename?: "UnminimizeCommentPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  unminimizedComment?: Maybe<Minimizable>;
};

export type UnpinIssueInput = {
  issueId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UnpinIssuePayload = {
  __typename?: "UnpinIssuePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  issue?: Maybe<Issue>;
};

export type UnpinnedEvent = Node & {
  __typename?: "UnpinnedEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  issue: Issue;
};

export type UnresolveReviewThreadInput = {
  threadId: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UnresolveReviewThreadPayload = {
  __typename?: "UnresolveReviewThreadPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  thread?: Maybe<PullRequestReviewThread>;
};

export type UnsubscribedEvent = Node & {
  __typename?: "UnsubscribedEvent";
  actor?: Maybe<Actor>;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  subscribable: Subscribable;
};

export type Updatable = {
  viewerCanUpdate: Scalars["Boolean"];
};

export type UpdatableComment = {
  viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
};

export type UpdateBranchProtectionRuleInput = {
  branchProtectionRuleId: Scalars["ID"];
  pattern?: InputMaybe<Scalars["String"]>;
  requiresApprovingReviews?: InputMaybe<Scalars["Boolean"]>;
  requiredApprovingReviewCount?: InputMaybe<Scalars["Int"]>;
  requiresCommitSignatures?: InputMaybe<Scalars["Boolean"]>;
  requiresLinearHistory?: InputMaybe<Scalars["Boolean"]>;
  blocksCreations?: InputMaybe<Scalars["Boolean"]>;
  allowsForcePushes?: InputMaybe<Scalars["Boolean"]>;
  allowsDeletions?: InputMaybe<Scalars["Boolean"]>;
  isAdminEnforced?: InputMaybe<Scalars["Boolean"]>;
  requiresStatusChecks?: InputMaybe<Scalars["Boolean"]>;
  requiresStrictStatusChecks?: InputMaybe<Scalars["Boolean"]>;
  requiresCodeOwnerReviews?: InputMaybe<Scalars["Boolean"]>;
  dismissesStaleReviews?: InputMaybe<Scalars["Boolean"]>;
  restrictsReviewDismissals?: InputMaybe<Scalars["Boolean"]>;
  reviewDismissalActorIds?: InputMaybe<Array<Scalars["ID"]>>;
  bypassPullRequestActorIds?: InputMaybe<Array<Scalars["ID"]>>;
  bypassForcePushActorIds?: InputMaybe<Array<Scalars["ID"]>>;
  restrictsPushes?: InputMaybe<Scalars["Boolean"]>;
  pushActorIds?: InputMaybe<Array<Scalars["ID"]>>;
  requiredStatusCheckContexts?: InputMaybe<Array<Scalars["String"]>>;
  requiredStatusChecks?: InputMaybe<Array<RequiredStatusCheckInput>>;
  requiresDeployments?: InputMaybe<Scalars["Boolean"]>;
  requiredDeploymentEnvironments?: InputMaybe<Array<Scalars["String"]>>;
  requiresConversationResolution?: InputMaybe<Scalars["Boolean"]>;
  requireLastPushApproval?: InputMaybe<Scalars["Boolean"]>;
  lockBranch?: InputMaybe<Scalars["Boolean"]>;
  lockAllowsFetchAndMerge?: InputMaybe<Scalars["Boolean"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateBranchProtectionRulePayload = {
  __typename?: "UpdateBranchProtectionRulePayload";
  branchProtectionRule?: Maybe<BranchProtectionRule>;
  clientMutationId?: Maybe<Scalars["String"]>;
};

export type UpdateCheckRunInput = {
  repositoryId: Scalars["ID"];
  checkRunId: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
  detailsUrl?: InputMaybe<Scalars["URI"]>;
  externalId?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<RequestableCheckStatusState>;
  startedAt?: InputMaybe<Scalars["DateTime"]>;
  conclusion?: InputMaybe<CheckConclusionState>;
  completedAt?: InputMaybe<Scalars["DateTime"]>;
  output?: InputMaybe<CheckRunOutput>;
  actions?: InputMaybe<Array<CheckRunAction>>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateCheckRunPayload = {
  __typename?: "UpdateCheckRunPayload";
  checkRun?: Maybe<CheckRun>;
  clientMutationId?: Maybe<Scalars["String"]>;
};

export type UpdateCheckSuitePreferencesInput = {
  repositoryId: Scalars["ID"];
  autoTriggerPreferences: Array<CheckSuiteAutoTriggerPreference>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateCheckSuitePreferencesPayload = {
  __typename?: "UpdateCheckSuitePreferencesPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  repository?: Maybe<Repository>;
};

export type UpdateDiscussionCommentInput = {
  commentId: Scalars["ID"];
  body: Scalars["String"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateDiscussionCommentPayload = {
  __typename?: "UpdateDiscussionCommentPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  comment?: Maybe<DiscussionComment>;
};

export type UpdateDiscussionInput = {
  discussionId: Scalars["ID"];
  title?: InputMaybe<Scalars["String"]>;
  body?: InputMaybe<Scalars["String"]>;
  categoryId?: InputMaybe<Scalars["ID"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateDiscussionPayload = {
  __typename?: "UpdateDiscussionPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  discussion?: Maybe<Discussion>;
};

export type UpdateEnterpriseAdministratorRoleInput = {
  enterpriseId: Scalars["ID"];
  login: Scalars["String"];
  role: EnterpriseAdministratorRole;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateEnterpriseAdministratorRolePayload = {
  __typename?: "UpdateEnterpriseAdministratorRolePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  message?: Maybe<Scalars["String"]>;
};

export type UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput = {
  enterpriseId: Scalars["ID"];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  policyValue?: InputMaybe<EnterpriseAllowPrivateRepositoryForkingPolicyValue>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload = {
  __typename?: "UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars["String"]>;
};

export type UpdateEnterpriseDefaultRepositoryPermissionSettingInput = {
  enterpriseId: Scalars["ID"];
  settingValue: EnterpriseDefaultRepositoryPermissionSettingValue;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateEnterpriseDefaultRepositoryPermissionSettingPayload = {
  __typename?: "UpdateEnterpriseDefaultRepositoryPermissionSettingPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars["String"]>;
};

export type UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput = {
  enterpriseId: Scalars["ID"];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload =
  {
    __typename?: "UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload";
    clientMutationId?: Maybe<Scalars["String"]>;
    enterprise?: Maybe<Enterprise>;
    message?: Maybe<Scalars["String"]>;
  };

export type UpdateEnterpriseMembersCanCreateRepositoriesSettingInput = {
  enterpriseId: Scalars["ID"];
  settingValue?: InputMaybe<EnterpriseMembersCanCreateRepositoriesSettingValue>;
  membersCanCreateRepositoriesPolicyEnabled?: InputMaybe<Scalars["Boolean"]>;
  membersCanCreatePublicRepositories?: InputMaybe<Scalars["Boolean"]>;
  membersCanCreatePrivateRepositories?: InputMaybe<Scalars["Boolean"]>;
  membersCanCreateInternalRepositories?: InputMaybe<Scalars["Boolean"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload = {
  __typename?: "UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars["String"]>;
};

export type UpdateEnterpriseMembersCanDeleteIssuesSettingInput = {
  enterpriseId: Scalars["ID"];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateEnterpriseMembersCanDeleteIssuesSettingPayload = {
  __typename?: "UpdateEnterpriseMembersCanDeleteIssuesSettingPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars["String"]>;
};

export type UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput = {
  enterpriseId: Scalars["ID"];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload = {
  __typename?: "UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars["String"]>;
};

export type UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput = {
  enterpriseId: Scalars["ID"];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload = {
  __typename?: "UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars["String"]>;
};

export type UpdateEnterpriseMembersCanMakePurchasesSettingInput = {
  enterpriseId: Scalars["ID"];
  settingValue: EnterpriseMembersCanMakePurchasesSettingValue;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateEnterpriseMembersCanMakePurchasesSettingPayload = {
  __typename?: "UpdateEnterpriseMembersCanMakePurchasesSettingPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars["String"]>;
};

export type UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput = {
  enterpriseId: Scalars["ID"];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload = {
  __typename?: "UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars["String"]>;
};

export type UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput = {
  enterpriseId: Scalars["ID"];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload = {
  __typename?: "UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars["String"]>;
};

export type UpdateEnterpriseOrganizationProjectsSettingInput = {
  enterpriseId: Scalars["ID"];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateEnterpriseOrganizationProjectsSettingPayload = {
  __typename?: "UpdateEnterpriseOrganizationProjectsSettingPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars["String"]>;
};

export type UpdateEnterpriseOwnerOrganizationRoleInput = {
  enterpriseId: Scalars["ID"];
  organizationId: Scalars["ID"];
  organizationRole: RoleInOrganization;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateEnterpriseOwnerOrganizationRolePayload = {
  __typename?: "UpdateEnterpriseOwnerOrganizationRolePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  message?: Maybe<Scalars["String"]>;
};

export type UpdateEnterpriseProfileInput = {
  enterpriseId: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  websiteUrl?: InputMaybe<Scalars["String"]>;
  location?: InputMaybe<Scalars["String"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateEnterpriseProfilePayload = {
  __typename?: "UpdateEnterpriseProfilePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  enterprise?: Maybe<Enterprise>;
};

export type UpdateEnterpriseRepositoryProjectsSettingInput = {
  enterpriseId: Scalars["ID"];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateEnterpriseRepositoryProjectsSettingPayload = {
  __typename?: "UpdateEnterpriseRepositoryProjectsSettingPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars["String"]>;
};

export type UpdateEnterpriseTeamDiscussionsSettingInput = {
  enterpriseId: Scalars["ID"];
  settingValue: EnterpriseEnabledDisabledSettingValue;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateEnterpriseTeamDiscussionsSettingPayload = {
  __typename?: "UpdateEnterpriseTeamDiscussionsSettingPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars["String"]>;
};

export type UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput = {
  enterpriseId: Scalars["ID"];
  settingValue: EnterpriseEnabledSettingValue;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload = {
  __typename?: "UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  enterprise?: Maybe<Enterprise>;
  message?: Maybe<Scalars["String"]>;
};

export type UpdateEnvironmentInput = {
  environmentId: Scalars["ID"];
  waitTimer?: InputMaybe<Scalars["Int"]>;
  reviewers?: InputMaybe<Array<Scalars["ID"]>>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateEnvironmentPayload = {
  __typename?: "UpdateEnvironmentPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  environment?: Maybe<Environment>;
};

export type UpdateIpAllowListEnabledSettingInput = {
  ownerId: Scalars["ID"];
  settingValue: IpAllowListEnabledSettingValue;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateIpAllowListEnabledSettingPayload = {
  __typename?: "UpdateIpAllowListEnabledSettingPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  owner?: Maybe<IpAllowListOwner>;
};

export type UpdateIpAllowListEntryInput = {
  ipAllowListEntryId: Scalars["ID"];
  allowListValue: Scalars["String"];
  name?: InputMaybe<Scalars["String"]>;
  isActive: Scalars["Boolean"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateIpAllowListEntryPayload = {
  __typename?: "UpdateIpAllowListEntryPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  ipAllowListEntry?: Maybe<IpAllowListEntry>;
};

export type UpdateIpAllowListForInstalledAppsEnabledSettingInput = {
  ownerId: Scalars["ID"];
  settingValue: IpAllowListForInstalledAppsEnabledSettingValue;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateIpAllowListForInstalledAppsEnabledSettingPayload = {
  __typename?: "UpdateIpAllowListForInstalledAppsEnabledSettingPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  owner?: Maybe<IpAllowListOwner>;
};

export type UpdateIssueCommentInput = {
  id: Scalars["ID"];
  body: Scalars["String"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateIssueCommentPayload = {
  __typename?: "UpdateIssueCommentPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  issueComment?: Maybe<IssueComment>;
};

export type UpdateIssueInput = {
  id: Scalars["ID"];
  title?: InputMaybe<Scalars["String"]>;
  body?: InputMaybe<Scalars["String"]>;
  assigneeIds?: InputMaybe<Array<Scalars["ID"]>>;
  milestoneId?: InputMaybe<Scalars["ID"]>;
  labelIds?: InputMaybe<Array<Scalars["ID"]>>;
  state?: InputMaybe<IssueState>;
  projectIds?: InputMaybe<Array<Scalars["ID"]>>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateIssuePayload = {
  __typename?: "UpdateIssuePayload";
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<Scalars["String"]>;
  issue?: Maybe<Issue>;
};

export type UpdateNotificationRestrictionSettingInput = {
  ownerId: Scalars["ID"];
  settingValue: NotificationRestrictionSettingValue;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateNotificationRestrictionSettingPayload = {
  __typename?: "UpdateNotificationRestrictionSettingPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  owner?: Maybe<VerifiableDomainOwner>;
};

export type UpdateOrganizationAllowPrivateRepositoryForkingSettingInput = {
  organizationId: Scalars["ID"];
  forkingEnabled: Scalars["Boolean"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateOrganizationAllowPrivateRepositoryForkingSettingPayload = {
  __typename?: "UpdateOrganizationAllowPrivateRepositoryForkingSettingPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  message?: Maybe<Scalars["String"]>;
  organization?: Maybe<Organization>;
};

export type UpdateOrganizationWebCommitSignoffSettingInput = {
  organizationId: Scalars["ID"];
  webCommitSignoffRequired: Scalars["Boolean"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateOrganizationWebCommitSignoffSettingPayload = {
  __typename?: "UpdateOrganizationWebCommitSignoffSettingPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  message?: Maybe<Scalars["String"]>;
  organization?: Maybe<Organization>;
};

export type UpdateProjectCardInput = {
  projectCardId: Scalars["ID"];
  isArchived?: InputMaybe<Scalars["Boolean"]>;
  note?: InputMaybe<Scalars["String"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateProjectCardPayload = {
  __typename?: "UpdateProjectCardPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  projectCard?: Maybe<ProjectCard>;
};

export type UpdateProjectColumnInput = {
  projectColumnId: Scalars["ID"];
  name: Scalars["String"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateProjectColumnPayload = {
  __typename?: "UpdateProjectColumnPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  projectColumn?: Maybe<ProjectColumn>;
};

export type UpdateProjectInput = {
  projectId: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
  body?: InputMaybe<Scalars["String"]>;
  state?: InputMaybe<ProjectState>;
  public?: InputMaybe<Scalars["Boolean"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateProjectPayload = {
  __typename?: "UpdateProjectPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  project?: Maybe<Project>;
};

export type UpdateProjectV2DraftIssueInput = {
  draftIssueId: Scalars["ID"];
  title?: InputMaybe<Scalars["String"]>;
  body?: InputMaybe<Scalars["String"]>;
  assigneeIds?: InputMaybe<Array<Scalars["ID"]>>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateProjectV2DraftIssuePayload = {
  __typename?: "UpdateProjectV2DraftIssuePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  draftIssue?: Maybe<DraftIssue>;
};

export type UpdateProjectV2Input = {
  projectId: Scalars["ID"];
  title?: InputMaybe<Scalars["String"]>;
  shortDescription?: InputMaybe<Scalars["String"]>;
  readme?: InputMaybe<Scalars["String"]>;
  closed?: InputMaybe<Scalars["Boolean"]>;
  public?: InputMaybe<Scalars["Boolean"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateProjectV2ItemFieldValueInput = {
  projectId: Scalars["ID"];
  itemId: Scalars["ID"];
  fieldId: Scalars["ID"];
  value: ProjectV2FieldValue;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateProjectV2ItemFieldValuePayload = {
  __typename?: "UpdateProjectV2ItemFieldValuePayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  projectV2Item?: Maybe<ProjectV2Item>;
};

export type UpdateProjectV2ItemPositionInput = {
  projectId: Scalars["ID"];
  itemId: Scalars["ID"];
  afterId?: InputMaybe<Scalars["ID"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateProjectV2ItemPositionPayload = {
  __typename?: "UpdateProjectV2ItemPositionPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  items?: Maybe<ProjectV2ItemConnection>;
};

export type UpdateProjectV2ItemPositionPayloadItemsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UpdateProjectV2Payload = {
  __typename?: "UpdateProjectV2Payload";
  clientMutationId?: Maybe<Scalars["String"]>;
  projectV2?: Maybe<ProjectV2>;
};

export type UpdatePullRequestBranchInput = {
  pullRequestId: Scalars["ID"];
  expectedHeadOid?: InputMaybe<Scalars["GitObjectID"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdatePullRequestBranchPayload = {
  __typename?: "UpdatePullRequestBranchPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  pullRequest?: Maybe<PullRequest>;
};

export type UpdatePullRequestInput = {
  pullRequestId: Scalars["ID"];
  baseRefName?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  body?: InputMaybe<Scalars["String"]>;
  state?: InputMaybe<PullRequestUpdateState>;
  maintainerCanModify?: InputMaybe<Scalars["Boolean"]>;
  assigneeIds?: InputMaybe<Array<Scalars["ID"]>>;
  milestoneId?: InputMaybe<Scalars["ID"]>;
  labelIds?: InputMaybe<Array<Scalars["ID"]>>;
  projectIds?: InputMaybe<Array<Scalars["ID"]>>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdatePullRequestPayload = {
  __typename?: "UpdatePullRequestPayload";
  actor?: Maybe<Actor>;
  clientMutationId?: Maybe<Scalars["String"]>;
  pullRequest?: Maybe<PullRequest>;
};

export type UpdatePullRequestReviewCommentInput = {
  pullRequestReviewCommentId: Scalars["ID"];
  body: Scalars["String"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdatePullRequestReviewCommentPayload = {
  __typename?: "UpdatePullRequestReviewCommentPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  pullRequestReviewComment?: Maybe<PullRequestReviewComment>;
};

export type UpdatePullRequestReviewInput = {
  pullRequestReviewId: Scalars["ID"];
  body: Scalars["String"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdatePullRequestReviewPayload = {
  __typename?: "UpdatePullRequestReviewPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  pullRequestReview?: Maybe<PullRequestReview>;
};

export type UpdateRefInput = {
  refId: Scalars["ID"];
  oid: Scalars["GitObjectID"];
  force?: InputMaybe<Scalars["Boolean"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateRefPayload = {
  __typename?: "UpdateRefPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  ref?: Maybe<Ref>;
};

export type UpdateRepositoryInput = {
  repositoryId: Scalars["ID"];
  name?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  template?: InputMaybe<Scalars["Boolean"]>;
  homepageUrl?: InputMaybe<Scalars["URI"]>;
  hasWikiEnabled?: InputMaybe<Scalars["Boolean"]>;
  hasIssuesEnabled?: InputMaybe<Scalars["Boolean"]>;
  hasProjectsEnabled?: InputMaybe<Scalars["Boolean"]>;
  hasDiscussionsEnabled?: InputMaybe<Scalars["Boolean"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateRepositoryPayload = {
  __typename?: "UpdateRepositoryPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  repository?: Maybe<Repository>;
};

export type UpdateRepositoryWebCommitSignoffSettingInput = {
  repositoryId: Scalars["ID"];
  webCommitSignoffRequired: Scalars["Boolean"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateRepositoryWebCommitSignoffSettingPayload = {
  __typename?: "UpdateRepositoryWebCommitSignoffSettingPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  message?: Maybe<Scalars["String"]>;
  repository?: Maybe<Repository>;
};

export type UpdateSponsorshipPreferencesInput = {
  sponsorId?: InputMaybe<Scalars["ID"]>;
  sponsorLogin?: InputMaybe<Scalars["String"]>;
  sponsorableId?: InputMaybe<Scalars["ID"]>;
  sponsorableLogin?: InputMaybe<Scalars["String"]>;
  receiveEmails?: InputMaybe<Scalars["Boolean"]>;
  privacyLevel?: InputMaybe<SponsorshipPrivacy>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateSponsorshipPreferencesPayload = {
  __typename?: "UpdateSponsorshipPreferencesPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  sponsorship?: Maybe<Sponsorship>;
};

export type UpdateSubscriptionInput = {
  subscribableId: Scalars["ID"];
  state: SubscriptionState;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateSubscriptionPayload = {
  __typename?: "UpdateSubscriptionPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  subscribable?: Maybe<Subscribable>;
};

export type UpdateTeamDiscussionCommentInput = {
  id: Scalars["ID"];
  body: Scalars["String"];
  bodyVersion?: InputMaybe<Scalars["String"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateTeamDiscussionCommentPayload = {
  __typename?: "UpdateTeamDiscussionCommentPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  teamDiscussionComment?: Maybe<TeamDiscussionComment>;
};

export type UpdateTeamDiscussionInput = {
  id: Scalars["ID"];
  title?: InputMaybe<Scalars["String"]>;
  body?: InputMaybe<Scalars["String"]>;
  bodyVersion?: InputMaybe<Scalars["String"]>;
  pinned?: InputMaybe<Scalars["Boolean"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateTeamDiscussionPayload = {
  __typename?: "UpdateTeamDiscussionPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  teamDiscussion?: Maybe<TeamDiscussion>;
};

export type UpdateTeamsRepositoryInput = {
  repositoryId: Scalars["ID"];
  teamIds: Array<Scalars["ID"]>;
  permission: RepositoryPermission;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateTeamsRepositoryPayload = {
  __typename?: "UpdateTeamsRepositoryPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  repository?: Maybe<Repository>;
  teams?: Maybe<Array<Team>>;
};

export type UpdateTopicsInput = {
  repositoryId: Scalars["ID"];
  topicNames: Array<Scalars["String"]>;
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type UpdateTopicsPayload = {
  __typename?: "UpdateTopicsPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  invalidTopicNames?: Maybe<Array<Scalars["String"]>>;
  repository?: Maybe<Repository>;
};

export type User = Node &
  Actor &
  PackageOwner &
  ProjectOwner &
  ProjectV2Owner &
  ProjectV2Recent &
  RepositoryDiscussionAuthor &
  RepositoryDiscussionCommentAuthor &
  RepositoryOwner &
  UniformResourceLocatable &
  ProfileOwner &
  Sponsorable & {
    __typename?: "User";
    anyPinnableItems: Scalars["Boolean"];
    avatarUrl: Scalars["URI"];
    bio?: Maybe<Scalars["String"]>;
    bioHTML: Scalars["HTML"];
    canReceiveOrganizationEmailsWhenNotificationsRestricted: Scalars["Boolean"];
    commitComments: CommitCommentConnection;
    company?: Maybe<Scalars["String"]>;
    companyHTML: Scalars["HTML"];
    contributionsCollection: ContributionsCollection;
    createdAt: Scalars["DateTime"];
    databaseId?: Maybe<Scalars["Int"]>;
    email: Scalars["String"];
    estimatedNextSponsorsPayoutInCents: Scalars["Int"];
    followers: FollowerConnection;
    following: FollowingConnection;
    gist?: Maybe<Gist>;
    gistComments: GistCommentConnection;
    gists: GistConnection;
    hasSponsorsListing: Scalars["Boolean"];
    hovercard: Hovercard;
    id: Scalars["ID"];
    interactionAbility?: Maybe<RepositoryInteractionAbility>;
    isBountyHunter: Scalars["Boolean"];
    isCampusExpert: Scalars["Boolean"];
    isDeveloperProgramMember: Scalars["Boolean"];
    isEmployee: Scalars["Boolean"];
    isFollowingViewer: Scalars["Boolean"];
    isGitHubStar: Scalars["Boolean"];
    isHireable: Scalars["Boolean"];
    isSiteAdmin: Scalars["Boolean"];
    isSponsoredBy: Scalars["Boolean"];
    isSponsoringViewer: Scalars["Boolean"];
    isViewer: Scalars["Boolean"];
    issueComments: IssueCommentConnection;
    issues: IssueConnection;
    itemShowcase: ProfileItemShowcase;
    location?: Maybe<Scalars["String"]>;
    login: Scalars["String"];
    monthlyEstimatedSponsorsIncomeInCents: Scalars["Int"];
    name?: Maybe<Scalars["String"]>;
    organization?: Maybe<Organization>;
    organizationVerifiedDomainEmails: Array<Scalars["String"]>;
    organizations: OrganizationConnection;
    packages: PackageConnection;
    pinnableItems: PinnableItemConnection;
    pinnedItems: PinnableItemConnection;
    pinnedItemsRemaining: Scalars["Int"];
    project?: Maybe<Project>;
    projectV2?: Maybe<ProjectV2>;
    projects: ProjectConnection;
    projectsResourcePath: Scalars["URI"];
    projectsUrl: Scalars["URI"];
    projectsV2: ProjectV2Connection;
    pronouns?: Maybe<Scalars["String"]>;
    publicKeys: PublicKeyConnection;
    pullRequests: PullRequestConnection;
    recentProjects: ProjectV2Connection;
    repositories: RepositoryConnection;
    repositoriesContributedTo: RepositoryConnection;
    repository?: Maybe<Repository>;
    repositoryDiscussionComments: DiscussionCommentConnection;
    repositoryDiscussions: DiscussionConnection;
    resourcePath: Scalars["URI"];
    savedReplies?: Maybe<SavedReplyConnection>;
    socialAccounts: SocialAccountConnection;
    sponsoring: SponsorConnection;
    sponsors: SponsorConnection;
    sponsorsActivities: SponsorsActivityConnection;
    sponsorsListing?: Maybe<SponsorsListing>;
    sponsorshipForViewerAsSponsor?: Maybe<Sponsorship>;
    sponsorshipForViewerAsSponsorable?: Maybe<Sponsorship>;
    sponsorshipNewsletters: SponsorshipNewsletterConnection;
    sponsorshipsAsMaintainer: SponsorshipConnection;
    sponsorshipsAsSponsor: SponsorshipConnection;
    starredRepositories: StarredRepositoryConnection;
    status?: Maybe<UserStatus>;
    topRepositories: RepositoryConnection;
    totalSponsorshipAmountAsSponsorInCents?: Maybe<Scalars["Int"]>;
    twitterUsername?: Maybe<Scalars["String"]>;
    updatedAt: Scalars["DateTime"];
    url: Scalars["URI"];
    viewerCanChangePinnedItems: Scalars["Boolean"];
    viewerCanCreateProjects: Scalars["Boolean"];
    viewerCanFollow: Scalars["Boolean"];
    viewerCanSponsor: Scalars["Boolean"];
    viewerIsFollowing: Scalars["Boolean"];
    viewerIsSponsoring: Scalars["Boolean"];
    watching: RepositoryConnection;
    websiteUrl?: Maybe<Scalars["URI"]>;
  };

export type UserAnyPinnableItemsArgs = {
  type?: InputMaybe<PinnableItemType>;
};

export type UserAvatarUrlArgs = {
  size?: InputMaybe<Scalars["Int"]>;
};

export type UserCanReceiveOrganizationEmailsWhenNotificationsRestrictedArgs = {
  login: Scalars["String"];
};

export type UserCommitCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UserContributionsCollectionArgs = {
  organizationID?: InputMaybe<Scalars["ID"]>;
  from?: InputMaybe<Scalars["DateTime"]>;
  to?: InputMaybe<Scalars["DateTime"]>;
};

export type UserFollowersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UserFollowingArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UserGistArgs = {
  name: Scalars["String"];
};

export type UserGistCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UserGistsArgs = {
  privacy?: InputMaybe<GistPrivacy>;
  orderBy?: InputMaybe<GistOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UserHovercardArgs = {
  primarySubjectId?: InputMaybe<Scalars["ID"]>;
};

export type UserIsSponsoredByArgs = {
  accountLogin: Scalars["String"];
};

export type UserIssueCommentsArgs = {
  orderBy?: InputMaybe<IssueCommentOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UserIssuesArgs = {
  orderBy?: InputMaybe<IssueOrder>;
  labels?: InputMaybe<Array<Scalars["String"]>>;
  states?: InputMaybe<Array<IssueState>>;
  filterBy?: InputMaybe<IssueFilters>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UserOrganizationArgs = {
  login: Scalars["String"];
};

export type UserOrganizationVerifiedDomainEmailsArgs = {
  login: Scalars["String"];
};

export type UserOrganizationsArgs = {
  orderBy?: InputMaybe<OrganizationOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UserPackagesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  names?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  repositoryId?: InputMaybe<Scalars["ID"]>;
  packageType?: InputMaybe<PackageType>;
  orderBy?: InputMaybe<PackageOrder>;
};

export type UserPinnableItemsArgs = {
  types?: InputMaybe<Array<PinnableItemType>>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UserPinnedItemsArgs = {
  types?: InputMaybe<Array<PinnableItemType>>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UserProjectArgs = {
  number: Scalars["Int"];
};

export type UserProjectV2Args = {
  number: Scalars["Int"];
};

export type UserProjectsArgs = {
  orderBy?: InputMaybe<ProjectOrder>;
  search?: InputMaybe<Scalars["String"]>;
  states?: InputMaybe<Array<ProjectState>>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UserProjectsV2Args = {
  query?: InputMaybe<Scalars["String"]>;
  orderBy?: InputMaybe<ProjectV2Order>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UserPublicKeysArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UserPullRequestsArgs = {
  states?: InputMaybe<Array<PullRequestState>>;
  labels?: InputMaybe<Array<Scalars["String"]>>;
  headRefName?: InputMaybe<Scalars["String"]>;
  baseRefName?: InputMaybe<Scalars["String"]>;
  orderBy?: InputMaybe<IssueOrder>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UserRecentProjectsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UserRepositoriesArgs = {
  privacy?: InputMaybe<RepositoryPrivacy>;
  orderBy?: InputMaybe<RepositoryOrder>;
  affiliations?: InputMaybe<Array<InputMaybe<RepositoryAffiliation>>>;
  ownerAffiliations?: InputMaybe<Array<InputMaybe<RepositoryAffiliation>>>;
  isLocked?: InputMaybe<Scalars["Boolean"]>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  isFork?: InputMaybe<Scalars["Boolean"]>;
};

export type UserRepositoriesContributedToArgs = {
  privacy?: InputMaybe<RepositoryPrivacy>;
  orderBy?: InputMaybe<RepositoryOrder>;
  isLocked?: InputMaybe<Scalars["Boolean"]>;
  includeUserRepositories?: InputMaybe<Scalars["Boolean"]>;
  contributionTypes?: InputMaybe<Array<InputMaybe<RepositoryContributionType>>>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UserRepositoryArgs = {
  name: Scalars["String"];
  followRenames?: InputMaybe<Scalars["Boolean"]>;
};

export type UserRepositoryDiscussionCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  repositoryId?: InputMaybe<Scalars["ID"]>;
  onlyAnswers?: InputMaybe<Scalars["Boolean"]>;
};

export type UserRepositoryDiscussionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DiscussionOrder>;
  repositoryId?: InputMaybe<Scalars["ID"]>;
  answered?: InputMaybe<Scalars["Boolean"]>;
  states?: InputMaybe<Array<DiscussionState>>;
};

export type UserSavedRepliesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SavedReplyOrder>;
};

export type UserSocialAccountsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UserSponsoringArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SponsorOrder>;
};

export type UserSponsorsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  tierId?: InputMaybe<Scalars["ID"]>;
  orderBy?: InputMaybe<SponsorOrder>;
};

export type UserSponsorsActivitiesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  period?: InputMaybe<SponsorsActivityPeriod>;
  since?: InputMaybe<Scalars["DateTime"]>;
  until?: InputMaybe<Scalars["DateTime"]>;
  orderBy?: InputMaybe<SponsorsActivityOrder>;
  actions?: InputMaybe<Array<SponsorsActivityAction>>;
  includeAsSponsor?: InputMaybe<Scalars["Boolean"]>;
};

export type UserSponsorshipForViewerAsSponsorArgs = {
  activeOnly?: InputMaybe<Scalars["Boolean"]>;
};

export type UserSponsorshipForViewerAsSponsorableArgs = {
  activeOnly?: InputMaybe<Scalars["Boolean"]>;
};

export type UserSponsorshipNewslettersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SponsorshipNewsletterOrder>;
};

export type UserSponsorshipsAsMaintainerArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  includePrivate?: InputMaybe<Scalars["Boolean"]>;
  orderBy?: InputMaybe<SponsorshipOrder>;
  activeOnly?: InputMaybe<Scalars["Boolean"]>;
};

export type UserSponsorshipsAsSponsorArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SponsorshipOrder>;
  maintainerLogins?: InputMaybe<Array<Scalars["String"]>>;
  activeOnly?: InputMaybe<Scalars["Boolean"]>;
};

export type UserStarredRepositoriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  ownedByViewer?: InputMaybe<Scalars["Boolean"]>;
  orderBy?: InputMaybe<StarOrder>;
};

export type UserTopRepositoriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy: RepositoryOrder;
  since?: InputMaybe<Scalars["DateTime"]>;
};

export type UserTotalSponsorshipAmountAsSponsorInCentsArgs = {
  since?: InputMaybe<Scalars["DateTime"]>;
  until?: InputMaybe<Scalars["DateTime"]>;
  sponsorableLogins?: InputMaybe<Array<Scalars["String"]>>;
};

export type UserWatchingArgs = {
  privacy?: InputMaybe<RepositoryPrivacy>;
  orderBy?: InputMaybe<RepositoryOrder>;
  affiliations?: InputMaybe<Array<InputMaybe<RepositoryAffiliation>>>;
  ownerAffiliations?: InputMaybe<Array<InputMaybe<RepositoryAffiliation>>>;
  isLocked?: InputMaybe<Scalars["Boolean"]>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export enum UserBlockDuration {
  OneDay = "ONE_DAY",
  ThreeDays = "THREE_DAYS",
  OneWeek = "ONE_WEEK",
  OneMonth = "ONE_MONTH",
  Permanent = "PERMANENT",
}

export type UserBlockedEvent = Node & {
  __typename?: "UserBlockedEvent";
  actor?: Maybe<Actor>;
  blockDuration: UserBlockDuration;
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  subject?: Maybe<User>;
};

export type UserConnection = {
  __typename?: "UserConnection";
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type UserContentEdit = Node & {
  __typename?: "UserContentEdit";
  createdAt: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Actor>;
  diff?: Maybe<Scalars["String"]>;
  editedAt: Scalars["DateTime"];
  editor?: Maybe<Actor>;
  id: Scalars["ID"];
  updatedAt: Scalars["DateTime"];
};

export type UserContentEditConnection = {
  __typename?: "UserContentEditConnection";
  edges?: Maybe<Array<Maybe<UserContentEditEdge>>>;
  nodes?: Maybe<Array<Maybe<UserContentEdit>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type UserContentEditEdge = {
  __typename?: "UserContentEditEdge";
  cursor: Scalars["String"];
  node?: Maybe<UserContentEdit>;
};

export type UserEdge = {
  __typename?: "UserEdge";
  cursor: Scalars["String"];
  node?: Maybe<User>;
};

export type UserEmailMetadata = {
  __typename?: "UserEmailMetadata";
  primary?: Maybe<Scalars["Boolean"]>;
  type?: Maybe<Scalars["String"]>;
  value: Scalars["String"];
};

export type UserStatus = Node & {
  __typename?: "UserStatus";
  createdAt: Scalars["DateTime"];
  emoji?: Maybe<Scalars["String"]>;
  emojiHTML?: Maybe<Scalars["HTML"]>;
  expiresAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  indicatesLimitedAvailability: Scalars["Boolean"];
  message?: Maybe<Scalars["String"]>;
  organization?: Maybe<Organization>;
  updatedAt: Scalars["DateTime"];
  user: User;
};

export type UserStatusConnection = {
  __typename?: "UserStatusConnection";
  edges?: Maybe<Array<Maybe<UserStatusEdge>>>;
  nodes?: Maybe<Array<Maybe<UserStatus>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type UserStatusEdge = {
  __typename?: "UserStatusEdge";
  cursor: Scalars["String"];
  node?: Maybe<UserStatus>;
};

export type UserStatusOrder = {
  field: UserStatusOrderField;
  direction: OrderDirection;
};

export enum UserStatusOrderField {
  UpdatedAt = "UPDATED_AT",
}

export type VerifiableDomain = Node & {
  __typename?: "VerifiableDomain";
  createdAt: Scalars["DateTime"];
  databaseId?: Maybe<Scalars["Int"]>;
  dnsHostName?: Maybe<Scalars["URI"]>;
  domain: Scalars["URI"];
  hasFoundHostName: Scalars["Boolean"];
  hasFoundVerificationToken: Scalars["Boolean"];
  id: Scalars["ID"];
  isApproved: Scalars["Boolean"];
  isRequiredForPolicyEnforcement: Scalars["Boolean"];
  isVerified: Scalars["Boolean"];
  owner: VerifiableDomainOwner;
  punycodeEncodedDomain: Scalars["URI"];
  tokenExpirationTime?: Maybe<Scalars["DateTime"]>;
  updatedAt: Scalars["DateTime"];
  verificationToken?: Maybe<Scalars["String"]>;
};

export type VerifiableDomainConnection = {
  __typename?: "VerifiableDomainConnection";
  edges?: Maybe<Array<Maybe<VerifiableDomainEdge>>>;
  nodes?: Maybe<Array<Maybe<VerifiableDomain>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type VerifiableDomainEdge = {
  __typename?: "VerifiableDomainEdge";
  cursor: Scalars["String"];
  node?: Maybe<VerifiableDomain>;
};

export type VerifiableDomainOrder = {
  field: VerifiableDomainOrderField;
  direction: OrderDirection;
};

export enum VerifiableDomainOrderField {
  Domain = "DOMAIN",
  CreatedAt = "CREATED_AT",
}

export type VerifiableDomainOwner = Enterprise | Organization;

export type VerifyVerifiableDomainInput = {
  id: Scalars["ID"];
  clientMutationId?: InputMaybe<Scalars["String"]>;
};

export type VerifyVerifiableDomainPayload = {
  __typename?: "VerifyVerifiableDomainPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
  domain?: Maybe<VerifiableDomain>;
};

export type ViewerHovercardContext = HovercardContext & {
  __typename?: "ViewerHovercardContext";
  message: Scalars["String"];
  octicon: Scalars["String"];
  viewer: User;
};

export type Votable = {
  upvoteCount: Scalars["Int"];
  viewerCanUpvote: Scalars["Boolean"];
  viewerHasUpvoted: Scalars["Boolean"];
};

export type Workflow = Node & {
  __typename?: "Workflow";
  createdAt: Scalars["DateTime"];
  databaseId?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  runs: WorkflowRunConnection;
  state: WorkflowState;
  updatedAt: Scalars["DateTime"];
};

export type WorkflowRunsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<WorkflowRunOrder>;
};

export type WorkflowRun = Node &
  UniformResourceLocatable & {
    __typename?: "WorkflowRun";
    checkSuite: CheckSuite;
    createdAt: Scalars["DateTime"];
    databaseId?: Maybe<Scalars["Int"]>;
    deploymentReviews: DeploymentReviewConnection;
    event: Scalars["String"];
    id: Scalars["ID"];
    pendingDeploymentRequests: DeploymentRequestConnection;
    resourcePath: Scalars["URI"];
    runNumber: Scalars["Int"];
    updatedAt: Scalars["DateTime"];
    url: Scalars["URI"];
    workflow: Workflow;
  };

export type WorkflowRunDeploymentReviewsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type WorkflowRunPendingDeploymentRequestsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type WorkflowRunConnection = {
  __typename?: "WorkflowRunConnection";
  edges?: Maybe<Array<Maybe<WorkflowRunEdge>>>;
  nodes?: Maybe<Array<Maybe<WorkflowRun>>>;
  pageInfo: PageInfo;
  totalCount: Scalars["Int"];
};

export type WorkflowRunEdge = {
  __typename?: "WorkflowRunEdge";
  cursor: Scalars["String"];
  node?: Maybe<WorkflowRun>;
};

export type WorkflowRunOrder = {
  field: WorkflowRunOrderField;
  direction: OrderDirection;
};

export enum WorkflowRunOrderField {
  CreatedAt = "CREATED_AT",
}

export enum WorkflowState {
  Active = "ACTIVE",
  Deleted = "DELETED",
  DisabledFork = "DISABLED_FORK",
  DisabledInactivity = "DISABLED_INACTIVITY",
  DisabledManually = "DISABLED_MANUALLY",
}

export type OrganizationQueryVariables = Exact<{
  org: Scalars["String"];
}>;

export type OrganizationQuery = {
  __typename?: "Query";
  organization?: {
    __typename?: "Organization";
    repositories: {
      __typename?: "RepositoryConnection";
      nodes?: Array<{
        __typename?: "Repository";
        id: string;
        name: string;
        url: any;
        projectsV2: {
          __typename?: "ProjectV2Connection";
          nodes?: Array<{
            __typename?: "ProjectV2";
            items: {
              __typename?: "ProjectV2ItemConnection";
              nodes?: Array<{
                __typename?: "ProjectV2Item";
                id: string;
                content?:
                  | {__typename?: "DraftIssue"}
                  | {
                      __typename?: "Issue";
                      number: number;
                      url: any;
                      state: IssueState;
                      assignees: {
                        __typename?: "UserConnection";
                        nodes?: Array<{
                          __typename?: "User";
                          id: string;
                          name?: string | null;
                          login: string;
                        } | null> | null;
                      };
                      labels?: {
                        __typename?: "LabelConnection";
                        nodes?: Array<{
                          __typename?: "Label";
                          id: string;
                          name: string;
                        } | null> | null;
                      } | null;
                    }
                  | {__typename?: "PullRequest"}
                  | null;
                fieldValues: {
                  __typename?: "ProjectV2ItemFieldValueConnection";
                  nodes?: Array<
                    | {
                        __typename: "ProjectV2ItemFieldDateValue";
                        date?: any | null;
                        field:
                          | {__typename?: "ProjectV2Field"; name: string}
                          | {__typename?: "ProjectV2IterationField"}
                          | {__typename?: "ProjectV2SingleSelectField"};
                      }
                    | {__typename?: "ProjectV2ItemFieldIterationValue"}
                    | {__typename?: "ProjectV2ItemFieldLabelValue"}
                    | {
                        __typename: "ProjectV2ItemFieldMilestoneValue";
                        milestone?: {
                          __typename?: "Milestone";
                          id: string;
                          title: string;
                          dueOn?: any | null;
                        } | null;
                        field:
                          | {__typename?: "ProjectV2Field"; name: string}
                          | {__typename?: "ProjectV2IterationField"}
                          | {__typename?: "ProjectV2SingleSelectField"};
                      }
                    | {
                        __typename: "ProjectV2ItemFieldNumberValue";
                        number?: number | null;
                        field:
                          | {__typename?: "ProjectV2Field"; name: string}
                          | {__typename?: "ProjectV2IterationField"}
                          | {__typename?: "ProjectV2SingleSelectField"};
                      }
                    | {__typename?: "ProjectV2ItemFieldPullRequestValue"}
                    | {__typename?: "ProjectV2ItemFieldRepositoryValue"}
                    | {__typename?: "ProjectV2ItemFieldReviewerValue"}
                    | {
                        __typename: "ProjectV2ItemFieldSingleSelectValue";
                        name?: string | null;
                        field:
                          | {__typename?: "ProjectV2Field"}
                          | {__typename?: "ProjectV2IterationField"}
                          | {
                              __typename?: "ProjectV2SingleSelectField";
                              name: string;
                            };
                      }
                    | {
                        __typename: "ProjectV2ItemFieldTextValue";
                        text?: string | null;
                        field:
                          | {__typename?: "ProjectV2Field"; name: string}
                          | {__typename?: "ProjectV2IterationField"}
                          | {__typename?: "ProjectV2SingleSelectField"};
                      }
                    | {__typename?: "ProjectV2ItemFieldUserValue"}
                    | null
                  > | null;
                };
              } | null> | null;
            };
          } | null> | null;
        };
        collaborators?: {
          __typename?: "RepositoryCollaboratorConnection";
          nodes?: Array<{
            __typename?: "User";
            login: string;
            name?: string | null;
            avatarUrl: any;
            databaseId?: number | null;
          } | null> | null;
        } | null;
      } | null> | null;
    };
  } | null;
};
