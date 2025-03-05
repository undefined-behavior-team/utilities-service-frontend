import React, { PropsWithChildren } from "react";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

type Props = {
  path: string;
};

export const NavButton: React.FC<PropsWithChildren & Props> = ({
  children,
  path,
}) => {
  return (
    <div className={styles.root}>
      <NavLink className={styles.link} to={path}>
        {children}
      </NavLink>
    </div>
  );
};
