import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AppForm } from "@/shared/Components/AppForm";
import { Button } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { getReadingsFormSchema } from "./schema";
import { useAppDispatch, useAppSelector } from "@/services/store/hooks";
import { userSelector } from "@/services/store/slices/user/selectors";
import {
  useGetUserMutation,
  useUpdateUserMutation,
} from "@/services/api/entities/user/api";
import { setUser } from "@/services/store/slices/user/state";
import styles from "./styles.module.css";
import { ReadingsFormValues } from "@/Pages/ReadingsPage/types";
import { FormInput } from "@/shared/Components/AppForm/FormInput";

export const ReadingsForm = () => {
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  const formApi = useForm({
    resolver: yupResolver(getReadingsFormSchema()),
    defaultValues: { address: { ...user.address } },
  });

  const { reset } = formApi;

  const [getUser] = useGetUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const submit = (data: ReadingsFormValues) => {
    updateUser({ ...user, ...data });
  };

  useEffect(() => {
    getUser()
      .unwrap()
      .then((data) => {
        dispatch(setUser(data));
        reset({ address: { ...data.address } });
      });
  }, [dispatch, getUser, reset]);

  return (
    <AppForm formApi={formApi} onSubmit={submit}>
      <div className={styles.root}>
        <div className={styles["input-street"]}>
          <label>
            Улица
            <FormInput
              name="address.street"
              className={styles.input}
              placeholder="Название улицы"
            />
          </label>
        </div>
        <div className={styles["input-cell"]}>
          <label>
            Дом
            <FormInput
              name="address.house"
              className={styles.input}
              placeholder="Номер"
            />
          </label>
        </div>
        <div className={styles["input-cell"]}>
          <label>
            Город
            <FormInput
              name="address.town"
              className={styles.input}
              placeholder="Город"
            />
          </label>
        </div>
        <div className={styles["input-cell"]}>
          <label>
            Квартира
            <FormInput
              name="address.apartment"
              className={styles.input}
              placeholder="Номер"
            />
          </label>
        </div>
      </div>
      <div className={styles.submit}>
        <Button
          htmlType="submit"
          variant="solid"
          color="blue"
          className={styles.button}
        >
          Обновить
        </Button>
      </div>
    </AppForm>
  );
};
