import { RootState } from "../../hooks";

export const tokenSelector = (state: RootState) => state.auth.token;

export const isAuthenticatedSelector = (state: RootState) =>
  state.auth.isAuthenticated;
