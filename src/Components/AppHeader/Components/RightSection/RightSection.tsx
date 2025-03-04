import { NavLink } from "react-router-dom";
import { ProfileIcon } from "../../../../shared/icons";
import styles from "./styles.module.css";

export const RightSection = () => {
  return (
    <div className={styles.root}>
      <ProfileIcon />
      <NavLink className={styles.link} to={"/"}>
        Профиль
      </NavLink>
    </div>
  );
};
