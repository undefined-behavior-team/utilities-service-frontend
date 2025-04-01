import { RootState } from "../../hooks";

export const applicationsSelector = (state: RootState) =>
  state.applications.currentApplications;
