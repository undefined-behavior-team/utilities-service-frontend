import { RootState } from "../../hooks";

export const authTypeSelector = (state: RootState) => state.login.authType;

export const loginStepSelector = (state: RootState) => state.login.loginStep;
