import { createSlice } from "@reduxjs/toolkit";

import { reducers } from "./reducers";
import { ApplicationState } from "./types";

const initialState: ApplicationState = {
  currentApplications: [],
};

export const applicationsSlice = createSlice({
  initialState,
  name: "applications",
  reducers: reducers,
});

export const { setApplications } = applicationsSlice.actions;
