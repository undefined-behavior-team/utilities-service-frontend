import type { RouteProps } from "react-router-dom";

import { appRouterPaths } from "../appRouterPaths";
import { MainPage } from "../../../Pages/MainPage/MainPage";

export const mainPageRoute: RouteProps = {
  path: appRouterPaths.main,
  element: <MainPage />,
};
