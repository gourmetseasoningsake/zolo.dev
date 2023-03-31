import {map} from "nanostores";

export type SessionProps = {
  sentinelHeaderBelow: boolean;
  sentinelHeadingAbove: boolean;
};

const initSession: SessionProps = {
  sentinelHeaderBelow: true,
  sentinelHeadingAbove: true,
};

export const session = map(initSession);
