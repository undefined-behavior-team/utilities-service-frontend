import { AuthType } from "@/shared/types";
import { MaybeType } from "@/shared/types/utility-types";
import { PayloadAction } from "@reduxjs/toolkit";

export type AuthState = {
  authType?: MaybeType<AuthType>;
  token: MaybeType<string>;
  isAuthenticated: boolean;
  authStatus?: MaybeType<string>;
};

export type SetToken = (
  state: AuthState,
  action: PayloadAction<string>
) => void;

export type Logout = (state: AuthState, action: PayloadAction<void>) => void;

export type SetAuthenticated = (
  state: AuthState,
  action: PayloadAction<boolean>
) => void;
