import styles from "./styles.module.css";
import { Drawer } from "antd";
import {
  CETLogoTransparentIcon,
  LoginIcon,
  LogoIcon,
  MenuIcon,
  ProfileIcon,
} from "@/shared/icons";
import { NavLink } from "react-router-dom";
import { navLinks } from "./constants";
import classNames from "classnames";
import { appRouterPaths } from "@/app/routes/appRouterPaths";
import { useAppDispatch } from "@/services/store/hooks";
import { logout } from "@/services/store/slices/auth/state";
import { useState } from "react";

export const AppHeaderMobile = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  return (
    <div className={styles["icon-mobile"]}>
      <CETLogoTransparentIcon width={80} height={56} />
      <MenuIcon
        className={styles["menu-icon"]}
        width={35}
        height={35}
        onClick={() => setOpen(true)}
      />
      <Drawer
        width={window.innerWidth * 0.5}
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        destroyOnClose
        title={<div className={styles["drawer-header"]}>Меню</div>}
        closeIcon={false}
      >
        <div className={styles["content-wrapper"]}>
          <div className={styles["root-mobile"]} onClick={() => setOpen(false)}>
            <NavLink className={styles.link} to={appRouterPaths.profile}>
              <div className={styles["profile-mobile"]}>
                <ProfileIcon width={30} height={30} />
                Профиль
              </div>
            </NavLink>
            <div className={styles.nav}>
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
            </div>
            <div
              onClick={() => dispatch(logout())}
              className={styles["logout-mobile"]}
            >
              <LoginIcon width={30} height={30} className={styles.logout} />
              Выйти
            </div>
          </div>
          <div className={styles["drawer-footer"]}>
            <LogoIcon width={77} height={78} />
            <div>
              <a
                href="https://github.com/undefined-behavior-team"
                className={styles["link-credits"]}
                target="_blank"
              >
                "Undefined Behaviour Team"
              </a>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

/*

<Dropdown
        dropdownRender={() => (
          <div className={styles["root-mobile"]}>
            <NavLink className={styles.link} to={appRouterPaths.profile}>
              <div className={styles["profile-mobile"]}>
                <ProfileIcon width={30} height={30} />
                Профиль
              </div>
            </NavLink>
            <div className={styles.separator} />
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
            <div className={styles.separator} />
            <div
              onClick={() => dispatch(logout())}
              className={styles["logout-mobile"]}
            >
              <LoginIcon width={30} height={30} className={styles.logout} />
              Выйти
            </div>
          </div>
        )}
      >
        <MenuIcon className={styles["menu-icon"]} width={35} height={35} />
      </Dropdown>

*/
