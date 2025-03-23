import type { RouteProps } from "react-router-dom";
import { appRouterPaths } from "../appRouterPaths";
import { ServicesPage } from "@/Pages/ServicesPage/ServicesPage";

export const servicesPageRoute: RouteProps = {
  path: appRouterPaths.services,
  element: <ServicesPage />,
};
