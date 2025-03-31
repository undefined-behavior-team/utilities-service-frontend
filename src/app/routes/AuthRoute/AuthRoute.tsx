import { Navigate } from "react-router-dom";

import type { FC, PropsWithChildren } from "react";
import { useAppSelector } from "@/services/store/hooks";
import { isAuthenticatedSelector } from "@/services/store/slices/auth/selectors";
import { authTypeSelector } from "@/services/store/slices/login/selectors";
import { appRouterPaths } from "../appRouterPaths";

export const AuthRoute: FC<PropsWithChildren> = ({ children }) => {
  const isAuthenticated = useAppSelector(isAuthenticatedSelector);
  const authType = useAppSelector(authTypeSelector);

  if (!isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <Navigate
      to={
        authType === "ADMIN"
          ? appRouterPaths.admin.main
          : appRouterPaths.readings.apply
      }
      replace
    />
  );
};
