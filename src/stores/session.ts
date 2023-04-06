import {map} from "nanostores";
import type {NavItemApp} from "../navigation";

export type SessionProps = {
  sentinelHeader: boolean;
  stateNavApp: NavItemApp | null;
};

const initSession: SessionProps = {
  sentinelHeader: true,
  stateNavApp: null,
};

export const session = map(initSession);
