import type { RouteProps } from "react-router-dom";
import { appRouterPaths } from "../appRouterPaths";
import { ReadingsPage } from "@/Pages/ReadingsPage/ReadingsPage";

export const readingsMainRoute: RouteProps = {
  path: appRouterPaths.readings.main,
  element: <ReadingsPage />,
};
