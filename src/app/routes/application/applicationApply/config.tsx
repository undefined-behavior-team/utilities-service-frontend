import type { RouteProps } from "react-router-dom";
import { appRouterPaths } from "../../appRouterPaths";
import { ApplicationApply } from "@/Pages/ApplicationPage/ApplicationApply/ApplicationApply";

export const applicationApplyRoute: RouteProps = {
  path: appRouterPaths.application.apply,
  element: <ApplicationApply />,
};
