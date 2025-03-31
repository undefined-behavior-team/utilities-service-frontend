import { AuthType } from "@/shared/types";
import { MaybeType } from "@/shared/types/utility-types";
import { FC } from "react";
import { LoginFormAdmin } from "./LoginFormAdmin";
import { LoginFormUser } from "./LoginFormUser";

type Props = {
  authType: MaybeType<AuthType>;
  loginStep: number;
};

export const LoginForm: FC<Props> = ({ authType, loginStep }) => {
  switch (authType) {
    case "ADMIN": {
      return <LoginFormAdmin />;
    }
    case "USER": {
      return <LoginFormUser loginStep={loginStep} />;
    }
  }
};
