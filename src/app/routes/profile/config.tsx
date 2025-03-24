import type { RouteProps } from "react-router-dom";
import { appRouterPaths } from "../appRouterPaths";
import { ProfilePage } from "@/Pages/ProfilePage/ProfilePage";

export const profilePageRoute: RouteProps = {
  path: appRouterPaths.profile,
  element: <ProfilePage />,
};
