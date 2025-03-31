import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./types";
import { reducers } from "./reducers";

const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: reducers,
});

export const { setToken, logout, setAuthenticated } = authSlice.actions;
