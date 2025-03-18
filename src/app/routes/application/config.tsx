import type { RouteProps } from "react-router-dom";
import { appRouterPaths } from "../appRouterPaths";
import { ApplicationPage } from "@/Pages/ApplicationPage/ApplicationPage";

export const applicationMainRoute: RouteProps = {
  path: appRouterPaths.application.main,
  element: <ApplicationPage />,
};
