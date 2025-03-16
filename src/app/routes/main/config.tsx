import type { RouteProps } from "react-router-dom";
import { MainPage } from "@/Pages/MainPage/MainPage";
import { appRouterPaths } from "../appRouterPaths";

export const mainPageRoute: RouteProps = {
  path: appRouterPaths.main,
  element: <MainPage />,
};
