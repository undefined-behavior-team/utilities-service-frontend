import type { RouteProps } from "react-router-dom";
import { appRouterPaths } from "../../appRouterPaths";
import { ReadingsHistory } from "../../../../Pages/ReadingsPage/ReadingsHistory/ReadingsHistory";

export const readingsHistoryRoute: RouteProps = {
  path: appRouterPaths.readings.history,
  element: <ReadingsHistory />,
};
