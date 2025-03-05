import type { FC, PropsWithChildren } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import styles from "./styles.module.css";

type Props = {
  to: string;
};

export const AppLink: FC<NavLinkProps & PropsWithChildren & Props> = ({
  children,
  to,
  ...props
}) => {
  return (
    <NavLink className={styles.root} to={to} {...props}>
      {children}
    </NavLink>
  );
};
