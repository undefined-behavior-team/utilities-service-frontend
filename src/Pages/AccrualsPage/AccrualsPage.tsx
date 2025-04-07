import { Tabs } from "antd";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { useAppDispatch } from "@/services/store/hooks";
import { useGetPaymentsMutation } from "@/services/api/entities/payments/api";
import { useEffect } from "react";
import { setPayments } from "@/services/store/slices/payments/state";

export const AccrualsPage = () => {
  const navigate = useNavigate();
  const { year } = useParams(); //as unknown as string;

  const data = ["2025"];

  const dispatch = useAppDispatch();

  const [getPayments] = useGetPaymentsMutation();

  useEffect(() => {
    getPayments()
      .unwrap()
      .then((data) => dispatch(setPayments(data)));
  }, [dispatch, getPayments]);

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
