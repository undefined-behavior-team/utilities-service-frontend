import { createSlice } from "@reduxjs/toolkit";

import { reducers } from "./reducers";
import { MetersState } from "./types";

const initialState: MetersState = {
  currentMeters: [],
};

export const metersSlice = createSlice({
  initialState,
  name: "meters",
  reducers: reducers,
});

export const { setMeters } = metersSlice.actions;
