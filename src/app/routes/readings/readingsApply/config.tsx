import type { RouteProps } from "react-router-dom";
import { ReadingsHistory } from "@/Pages/ReadingsPage/ReadingsHistory/ReadingsHistory";
import { appRouterPaths } from "../../appRouterPaths";

export const readingsHistoryRoute: RouteProps = {
  path: appRouterPaths.readings.history,
  element: <ReadingsHistory />,
};
