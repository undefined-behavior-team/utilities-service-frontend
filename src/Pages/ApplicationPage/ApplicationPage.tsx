import { Tabs } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { getPath } from "@/shared/utils";
import { useAppDispatch } from "@/services/store/hooks";
import { useGetApplicationsMutation } from "@/services/api/entities/application/api";
import { useEffect } from "react";
import { setApplications } from "@/services/store/slices/applications/state";

export const ApplicationPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [getApplications] = useGetApplicationsMutation();

  useEffect(() => {
    getApplications()
      .unwrap()
      .then((data) => dispatch(setApplications(data)));
  }, [dispatch, getApplications]);

  return (
    <div className={styles.root}>
      <Tabs
        onChange={(e) => navigate(e)}
        activeKey={getPath()}
        items={[
          {
            key: "apply",
            label: <div className={styles["tabs-item"]}>Создание заявки</div>,
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
