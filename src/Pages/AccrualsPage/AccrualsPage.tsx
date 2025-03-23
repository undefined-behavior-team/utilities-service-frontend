import { Tabs } from "antd";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import styles from "./styles.module.css";

export const AccrualsPage = () => {
  const navigate = useNavigate();
  const { year } = useParams(); //as unknown as string;

  const data = ["2023", "2024", "2025"];

  return (
    <div className={styles.root}>
      <Tabs
        onChange={(e) => navigate(e)}
        activeKey={year ?? " "}
        items={data.reverse().map((item) => {
          return { key: item, label: item };
        })}
      />
      {!year && (
        <div className={styles["select-year"]}>
          Выберите год, чтобы увидеть историю начислений
        </div>
      )}
      <Outlet />
    </div>
  );
};
