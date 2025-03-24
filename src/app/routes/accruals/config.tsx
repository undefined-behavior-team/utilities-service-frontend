import type { RouteProps } from "react-router-dom";
import { appRouterPaths } from "../appRouterPaths";
import { AccrualsPage } from "@/Pages/AccrualsPage/AccrualsPage";

export const accrualsRoute: RouteProps = {
  path: appRouterPaths.accruals.main,
  element: <AccrualsPage />,
};
