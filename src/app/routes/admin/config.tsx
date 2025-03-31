import { RouteProps } from "react-router-dom";
import { appRouterPaths } from "../appRouterPaths";
import { AdminPage } from "@/Pages/AdminPage/AdminPage";

export const adminPageRoute: RouteProps = {
  path: appRouterPaths.admin.main,
  element: <AdminPage />,
};
