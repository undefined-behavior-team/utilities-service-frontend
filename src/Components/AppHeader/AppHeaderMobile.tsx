import styles from "./styles.module.css";
import { Dropdown } from "antd";
import { LoginIcon, MenuIcon, ProfileIcon } from "@/shared/icons";
import { NavLink } from "react-router-dom";
import { navLinks } from "./constants";
import classNames from "classnames";
import { appRouterPaths } from "@/app/routes/appRouterPaths";
import { useAppDispatch } from "@/services/store/hooks";
import { logout } from "@/services/store/slices/auth/state";

export const AppHeaderMobile = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles["icon-mobile"]}>
      <Dropdown
        dropdownRender={() => (
          <div className={styles["root-mobile"]}>
            <NavLink className={styles.link} to={appRouterPaths.profile}>
              <div className={styles["profile-mobile"]}>
                <ProfileIcon width={20} height={20} />
                Профиль
              </div>
            </NavLink>
            {navLinks.map((item) => {
              return (
                <NavLink className={styles.link} to={item.path}>
                  {({ isActive }) => {
                    return (
                      <div
                        className={classNames(styles.link, {
                          [styles["link-active"]]: isActive,
                        })}
                      >
                        {item.label}
                      </div>
                    );
                  }}
                </NavLink>
              );
            })}
            <div
              onClick={() => dispatch(logout())}
              className={styles["logout-mobile"]}
            >
              <LoginIcon width={20} height={20} className={styles.logout} />
              Выйти
            </div>
          </div>
        )}
      >
        <MenuIcon />
      </Dropdown>
    </div>
  );
};
