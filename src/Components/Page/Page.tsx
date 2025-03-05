import { AppHeader } from "../AppHeader/AppHeader";
import { Outlet } from "react-router-dom";

export const Page = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
};
