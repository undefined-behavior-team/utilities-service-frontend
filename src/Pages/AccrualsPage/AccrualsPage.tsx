import { Button, Modal, Tabs } from "antd";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "@/services/store/hooks";
import {
  useAddPaymentMutation,
  useGetPaymentsMutation,
} from "@/services/api/entities/payments/api";
import { useEffect, useState } from "react";
import { setPayments } from "@/services/store/slices/payments/state";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormInput } from "@/shared/Components/AppForm/FormInput";
import { AppForm } from "@/shared/Components/AppForm";
import { getAccrualsFormSchema } from "./schema";
import { AccrualsFormValues } from "./types";
import styles from "./styles.module.css";

export const AccrualsPage = () => {
  const navigate = useNavigate();
  const { year } = useParams(); //as unknown as string;
  const [open, setOpen] = useState(false);

  const data = ["2025"];

  const formApi = useForm({
    resolver: yupResolver(getAccrualsFormSchema()),
  });

  const dispatch = useAppDispatch();

  const [getPayments] = useGetPaymentsMutation();
  const [addPayment] = useAddPaymentMutation();

  const submit = (data: AccrualsFormValues) => {
    addPayment(data);
    setOpen(false);
  };

  useEffect(() => {
    getPayments()
      .unwrap()
      .then((data) => dispatch(setPayments(data)));
  }, [dispatch, getPayments]);

  return (
    <div className={styles.root}>
      <Button onClick={() => setOpen(true)}>Добавить платёж</Button>
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
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        destroyOnClose
        closable
        footer={false}
      >
        <AppForm formApi={formApi} onSubmit={submit}>
          <div className={styles.modal}>
            <div className={styles["input-cell"]}>
              <label>
                Операция
                <FormInput
                  name="paymentMethod"
                  className={styles.input}
                  placeholder="Операция"
                />
              </label>
            </div>
            <div className={styles["input-cell"]}>
              <label>
                Сумма
                <FormInput
                  name="amount"
                  className={styles.input}
                  placeholder="Сумма"
                />
              </label>
            </div>
            <div className={styles["input-cell"]}>
              <label>
                Статус
                <FormInput
                  name="status"
                  className={styles.input}
                  placeholder="Статус"
                />
              </label>
            </div>
            <div className={styles.submit}>
              <Button
                htmlType="submit"
                variant="solid"
                color="blue"
                className={styles.button}
              >
                Добавить
              </Button>
            </div>
          </div>
        </AppForm>
      </Modal>
    </div>
  );
};
