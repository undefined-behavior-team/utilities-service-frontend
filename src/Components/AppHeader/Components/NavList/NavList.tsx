import { navLinks } from "../../constants";
import { NavButton } from "../NavButton/NavButton";
import styles from "./styles.module.css";

export const NavList = () => {
  return (
    <div className={styles.root}>
      {navLinks.map((item) => (
        <NavButton path={item.path}>{item.label}</NavButton>
      ))}
    </div>
  );
};
