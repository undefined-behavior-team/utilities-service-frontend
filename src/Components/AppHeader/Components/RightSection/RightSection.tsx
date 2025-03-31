import { NavLink } from "react-router-dom";
import { LoginIcon, ProfileIcon } from "@/shared/icons";
import styles from "./styles.module.css";
import { appRouterPaths } from "@/app/routes/appRouterPaths";
import { useAppDispatch } from "@/services/store/hooks";
import { logout } from "@/services/store/slices/auth/state";

export const RightSection = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.root}>
      <div className={styles.profile}>
        <NavLink className={styles.link} to={appRouterPaths.profile}>
          <ProfileIcon />
          Профиль
        </NavLink>
      </div>
      <LoginIcon className={styles.logout} onClick={() => dispatch(logout())} />
    </div>
  );
};
