import type { RouteProps } from "react-router-dom";
import { appRouterPaths } from "../../appRouterPaths";
import { ApplicationHistory } from "@/Pages/ApplicationPage/ApplicationHistory/ApplicationHistory";

export const applicationHistoryRoute: RouteProps = {
  path: appRouterPaths.application.history,
  element: <ApplicationHistory />,
};
