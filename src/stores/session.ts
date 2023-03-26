import {map} from "nanostores";

type SessionProps = {
  headerTransparent: boolean;
  headerForceSolid: boolean;
};

const initSession: SessionProps = {
  headerTransparent: true,
  headerForceSolid: false,
};

export const session = map(initSession);
