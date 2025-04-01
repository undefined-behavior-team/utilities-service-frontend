import { SetApplications } from "./types";

const setApplications: SetApplications = (state, action) => {
  state.currentApplications = action.payload;
};

export const reducers = {
  setApplications,
};
