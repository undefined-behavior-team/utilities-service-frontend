import { createSlice } from "@reduxjs/toolkit";

import { reducers } from "./reducers";
import { ApplicationState } from "./types";

const initialState: ApplicationState = {
  currentApplications: [],
  selectedApplication: null,
};

export const applicationsSlice = createSlice({
  initialState,
  name: "applications",
  reducers: reducers,
});

export const { setApplications, setSelectedApplication } =
  applicationsSlice.actions;
