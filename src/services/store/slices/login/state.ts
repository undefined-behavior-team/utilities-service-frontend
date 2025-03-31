import { createSlice } from "@reduxjs/toolkit";
import { LoginState } from "./types";
import { reducers } from "./reducers";

const initialState: LoginState = {
  authType: null,
  loginStep: 0,
};

export const loginSlice = createSlice({
  initialState,
  name: "login",
  reducers: reducers,
});

export const { setAuthType, setLoginStep } = loginSlice.actions;
