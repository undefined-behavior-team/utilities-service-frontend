import { SetApplications, SetSelectedApplication } from "./types";

const setApplications: SetApplications = (state, action) => {
  state.currentApplications = action.payload;
};

const setSelectedApplication: SetSelectedApplication = (state, action) => {
  state.selectedApplication = action.payload;
};

export const reducers = {
  setApplications,
  setSelectedApplication,
};
