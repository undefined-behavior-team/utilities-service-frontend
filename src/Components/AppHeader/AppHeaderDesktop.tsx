import styles from "./styles.module.css";
import { NavList } from "./Components/NavList/NavList";
import { RightSection } from "./Components/RightSection/RightSection";
import { LeftSection } from "./Components/LeftSection/LeftSection";

export const AppHeaderDesktop = () => {
  return (
    <div className={styles.root}>
      <LeftSection />
      <NavList />
      <RightSection />
    </div>
  );
};
