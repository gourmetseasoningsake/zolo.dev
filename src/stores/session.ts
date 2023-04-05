import type {NavItemApp} from "../contents";
import {map} from "nanostores";

export type SessionProps = {
  sentinelHeader: boolean;
  stateNavApp: NavItemApp | null;
};

const initSession: SessionProps = {
  sentinelHeader: true,
  stateNavApp: null,
};

export const session = map(initSession);
