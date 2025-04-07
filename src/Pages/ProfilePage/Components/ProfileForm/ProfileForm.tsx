import { AppForm } from "@/shared/Components/AppForm";
import { useForm } from "react-hook-form";
import { Button } from "antd";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { FormInput } from "@/shared/Components/AppForm/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { getUserFormSchema } from "./schema/schema";
import { useAppDispatch, useAppSelector } from "@/services/store/hooks";
import { userSelector } from "@/services/store/slices/user/selectors";
import { ProfileFormValues } from "../../types";
import {
  useGetUserMutation,
  useUpdateUserMutation,
} from "@/services/api/entities/user/api";
import styles from "./styles.module.css";
import { setUser } from "@/services/store/slices/user/state";

export const ProfileForm = () => {
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  const formApi = useForm({
    resolver: yupResolver(getUserFormSchema()),
    defaultValues: user,
  });

  const { reset } = formApi;

  const [edit, setEdit] = useState(false);

  const [getUser] = useGetUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const submit = (data: ProfileFormValues) => {
    updateUser(data);
    setEdit(false);
  };

  useEffect(() => {
    getUser()
      .unwrap()
      .then((data) => {
        dispatch(setUser(data));
        reset(data);
      });
  }, [dispatch, getUser, reset]);

  return (
    <AppForm formApi={formApi} className={styles.root} onSubmit={submit}>
      <div className={styles["input-row"]}>
        <div className={styles["input-street"]}>
          <label>
            Улица
            <FormInput
              name="address.street"
              className={styles.input}
              placeholder="Название улицы"
              readOnly={!edit}
            />
          </label>
        </div>
        <div className={styles["input-cell__address"]}>
          <label>
            Дом
            <FormInput
              name="address.house"
              className={styles.input}
              placeholder="Номер"
              readOnly={!edit}
            />
          </label>
        </div>
        <div className={styles["input-cell__address"]}>
          <label>
            Город
            <FormInput
              name="address.town"
              className={styles.input}
              placeholder="Город"
              readOnly={!edit}
            />
          </label>
        </div>
        <div className={styles["input-cell__address"]}>
          <label>
            Квартира
            <FormInput
              name="address.apartment"
              className={styles.input}
              placeholder="Номер"
              readOnly={!edit}
            />
          </label>
        </div>
      </div>
      <div className={styles["input-row"]}>
        <div className={styles["input-cell"]}>
          <label>
            Фамилия
            <FormInput
              name="lastName"
              className={styles.input}
              placeholder="Введите фамилию"
              readOnly={!edit}
            />
          </label>
        </div>
        <div className={styles["input-cell"]}>
          <label>
            Имя
            <FormInput
              name="firstName"
              className={styles.input}
              placeholder="Введите имя"
              readOnly={!edit}
            />
          </label>
        </div>
        <div className={styles["input-cell"]}>
          <label>
            Отчество
            <FormInput
              name="middleName"
              className={styles.input}
              placeholder="Введите отчество"
              readOnly={!edit}
            />
          </label>
        </div>
      </div>
      <div className={styles["input-row"]}>
        <div className={styles["input-cell"]}>
          <label>
            Номер телефона
            <FormInput
              name="phone"
              className={styles.input}
              placeholder="Введите номер"
              readOnly={!edit}
            />
          </label>
        </div>
      </div>
      {!edit ? (
        <Button
          variant="solid"
          color="blue"
          className={styles.button}
          onClick={() => setEdit(true)}
        >
          Изменить данные
        </Button>
      ) : (
        <div className={styles.controls}>
          <Button
            variant="solid"
            color="blue"
            className={styles.button}
            htmlType="submit"
          >
            Сохранить
          </Button>
          <Button
            variant="outlined"
            color="blue"
            className={classNames(styles.button, styles["button-cancel"])}
            onClick={() => setEdit(false)}
          >
            Отмена
          </Button>
        </div>
      )}
    </AppForm>
  );
};

/*

        <div className={styles["input-cell"]}>
          <label>
            Электронная почта
            <FormInput
              className={styles.input}
              placeholder="Электронная почта"
              readOnly={!edit}
            />
          </label>
        </div>
*/
