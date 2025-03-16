import { Tabs } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { getPath } from "@/shared/utils";

export const ReadingsPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.root}>
      <Tabs
        onChange={(e) => navigate(e)}
        activeKey={getPath()}
        items={[
          {
            key: "apply",
            label: <div className={styles["tabs-item"]}>Подать показания</div>,
          },
          {
            key: "history",
            label: <div className={styles["tabs-item"]}>История</div>,
          },
        ]}
      />
      <Outlet />
    </div>
  );
};

/**
 *       <Segmented
        options={[
          {
            label: <div>Подать показания</div>,
            value: "apply",
          },
          {
            label: <div>История</div>,
            value: "history",
          },
        ]}
        onChange={(e) => navigate(e)}
      />
 */
