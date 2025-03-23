import { NavLink } from "react-router-dom";
import { ProfileIcon } from "@/shared/icons";
import styles from "./styles.module.css";
import { appRouterPaths } from "@/app/routes/appRouterPaths";

export const RightSection = () => {
  return (
    <div className={styles.root}>
      <ProfileIcon />
      <NavLink className={styles.link} to={appRouterPaths.profile}>
        Профиль
      </NavLink>
    </div>
  );
};
