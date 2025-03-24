import type { RouteProps } from "react-router-dom";
import { appRouterPaths } from "../../appRouterPaths";
import { AccrualsYear } from "@/Pages/AccrualsPage/AccrualsYear/AccrualsYear";

export const accrualsYearRoute: RouteProps = {
  path: appRouterPaths.accruals.year,
  element: <AccrualsYear />,
};
