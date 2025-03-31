import { AuthType } from "@/shared/types";
import { MaybeType } from "@/shared/types/utility-types";
import { PayloadAction } from "@reduxjs/toolkit";

export type LoginState = {
  authType: MaybeType<AuthType>;
  loginStep: number;
};

export type SetAuthType = (
  state: LoginState,
  action: PayloadAction<MaybeType<AuthType>>
) => void;

export type SetLoginStep = (
  state: LoginState,
  action: PayloadAction<number>
) => void;
