import { useForm } from "react-hook-form";
import { AppForm } from "@/shared/Components/AppForm";
import classNames from "classnames";
import { Button } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { getApplicationSchema } from "./schema";
import { userSelector } from "@/services/store/slices/user/selectors";
import { useAppDispatch, useAppSelector } from "@/services/store/hooks";
import { ApplicationFormValues } from "@/Pages/ApplicationPage/types";
import { useAddApplicationMutation } from "@/services/api/entities/application/api";
import {
  useGetUserMutation,
  useUpdateUserMutation,
} from "@/services/api/entities/user/api";
import { useEffect } from "react";
import { setUser } from "@/services/store/slices/user/state";
import { FormInput } from "@/shared/Components/AppForm/FormInput";
import { FormTextArea } from "@/shared/Components/AppForm/FormTextArea";
import styles from "./styles.module.css";

export const ApplicationForm = () => {
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  const formApi = useForm({
    resolver: yupResolver(getApplicationSchema()),
    defaultValues: {
      user: user,
    },
  });

  const { reset } = formApi;

  const [addApplication] = useAddApplicationMutation();
  const [getUser] = useGetUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const submit = (data: ApplicationFormValues) => {
    updateUser({ ...user, ...data.user });
    addApplication(data.application);
  };

  useEffect(() => {
    getUser()
      .unwrap()
      .then((data) => {
        dispatch(setUser(data));
        reset({
          user: data,
        });
      });
  }, [dispatch, getUser, reset]);

  return (
    <AppForm formApi={formApi} className={styles.root} onSubmit={submit}>
      <div className={styles["input-row"]}>
        <div className={styles["input-street"]}>
          <label>
            Улица
            <FormInput
              name="user.address.street"
              className={styles.input}
              placeholder="Название улицы"
            />
          </label>
        </div>
        <div className={styles["input-cell__address"]}>
          <label>
            Дом
            <FormInput
              name="user.address.house"
              className={styles.input}
              placeholder="Номер"
            />
          </label>
        </div>
        <div className={styles["input-cell__address"]}>
          <label>
            Город
            <FormInput
              name="user.address.town"
              className={styles.input}
              placeholder="Город"
            />
          </label>
        </div>
        <div className={styles["input-cell__address"]}>
          <label>
            Квартира
            <FormInput
              name="user.address.apartment"
              className={styles.input}
              placeholder="Номер"
            />
          </label>
        </div>
      </div>
      <div className={styles["input-row"]}>
        <div className={styles["input-cell"]}>
          <label>
            Фамилия
            <FormInput
              name="user.lastName"
              className={styles.input}
              placeholder="Введите фамилию"
            />
          </label>
        </div>
        <div className={styles["input-cell"]}>
          <label>
            Имя
            <FormInput
              name="user.firstName"
              className={styles.input}
              placeholder="Введите имя"
            />
          </label>
        </div>
        <div className={styles["input-cell"]}>
          <label>
            Отчество
            <FormInput
              name="user.middleName"
              className={styles.input}
              placeholder="Введите отчество"
            />
          </label>
        </div>
      </div>
      <div className={styles["input-row"]}>
        <div className={styles["input-cell"]}>
          <label>
            Телефон
            <FormInput
              name="user.phone"
              className={styles.input}
              placeholder="Номер телефона"
            />
          </label>
        </div>
        <div className={styles["input-cell"]}>
          <label>
            Электронная почта
            <FormInput
              className={styles.input}
              placeholder="Электронная почта"
            />
          </label>
        </div>
      </div>
      <div
        className={classNames(styles["input-row"], styles["input-row__text"])}
      >
        <div className={styles["input-cell"]}>
          <label>
            Обращение
            <FormInput
              name="application.name"
              className={styles.input}
              placeholder="Тема"
            />
          </label>
        </div>
        <FormTextArea
          name="application.description"
          rows={7}
          placeholder="Текст обращения..."
        />
      </div>
      <Button
        htmlType="submit"
        variant="solid"
        color="blue"
        className={styles.button}
      >
        Отправить
      </Button>
    </AppForm>
  );
};
