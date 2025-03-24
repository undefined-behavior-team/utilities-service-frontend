import type { RouteProps } from "react-router-dom";
import { appRouterPaths } from "../appRouterPaths";
import { NewsPage } from "@/Pages/NewsPage/NewsPage";

export const newsPageRoute: RouteProps = {
  path: appRouterPaths.news,
  element: <NewsPage />,
};
