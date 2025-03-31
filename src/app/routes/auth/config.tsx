import { RouteProps } from "react-router-dom";
import { appRouterPaths } from "../appRouterPaths";
import { LoginPage } from "@/Pages/LoginPage/LoginPage";

export const authPageRoute: RouteProps = {
  path: appRouterPaths.auth,
  element: <LoginPage />,
};
