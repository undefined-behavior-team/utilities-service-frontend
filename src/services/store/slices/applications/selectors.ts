import { RootState } from "../../hooks";

export const applicationsSelector = (state: RootState) =>
  state.applications.currentApplications;

export const selectedApplicationSelector = (state: RootState) =>
  state.applications.selectedApplication;
