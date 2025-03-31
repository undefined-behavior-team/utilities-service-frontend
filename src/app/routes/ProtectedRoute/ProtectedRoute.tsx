import { Navigate } from "react-router-dom";
import type { FC, PropsWithChildren } from "react";
import { useAppSelector } from "@/services/store/hooks";
import { isAuthenticatedSelector } from "@/services/store/slices/auth/selectors";
import { appRouterPaths } from "../appRouterPaths";

export const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const isAuthenticated = useAppSelector(isAuthenticatedSelector);

  if (!isAuthenticated) {
    return <Navigate to={appRouterPaths.auth} replace />;
  }

  return <>{children}</>;
};
