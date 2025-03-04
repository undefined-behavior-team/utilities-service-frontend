import type { RouteProps } from "react-router-dom";
import { appRouterPaths } from "../../appRouterPaths";
import { ReadingsApply } from "../../../../Pages/ReadingsPage/ReadingsApply/ReadingsApply";

export const readingsApplyRoute: RouteProps = {
  path: appRouterPaths.readings.apply,
  element: <ReadingsApply />,
};
