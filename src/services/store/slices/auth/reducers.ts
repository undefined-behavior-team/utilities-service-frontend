import { Logout, SetAuthenticated, SetToken } from "./types";

const setToken: SetToken = (state, action) => {
  state.token = action.payload;
};

const logout: Logout = (state) => {
  state.token = null;
  state.authType = null;
  state.isAuthenticated = false;
};

const setAuthenticated: SetAuthenticated = (state, action) => {
  state.isAuthenticated = action.payload;
};

export const reducers = {
  setToken,
  logout,
  setAuthenticated,
};
