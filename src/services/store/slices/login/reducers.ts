import { SetAuthType, SetLoginStep } from "./types";

const setAuthType: SetAuthType = (state, action) => {
  state.authType = action.payload;
};

const setLoginStep: SetLoginStep = (state, action) => {
  state.loginStep = action.payload;
};

export const reducers = {
  setAuthType,
  setLoginStep,
};
