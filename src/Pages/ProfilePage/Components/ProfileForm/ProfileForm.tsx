import { AppForm } from "@/shared/Components/AppForm";
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";
import { AppInput } from "@/shared/Components/AppInput";
import { Button } from "antd";
import { useState } from "react";
import classNames from "classnames";

export const ProfileForm = () => {
  const formApi = useForm();
  const [edit, setEdit] = useState(false);

  return (
    <AppForm formApi={formApi} className={styles.root}>
      <div className={styles["input-row"]}>
        <div className={styles["input-street"]}>
          <label>
            Улица
            <AppInput className={styles.input} placeholder="Название улицы" />
          </label>
        </div>
        <div className={styles["input-cell__address"]}>
          <label>
            Дом
            <AppInput className={styles.input} placeholder="Номер" />
          </label>
        </div>
        <div className={styles["input-cell__address"]}>
          <label>
            Корпус
            <AppInput className={styles.input} placeholder="Номер" />
          </label>
        </div>
        <div className={styles["input-cell__address"]}>
          <label>
            Квартира
            <AppInput className={styles.input} placeholder="Номер" />
          </label>
        </div>
      </div>
      <div className={styles["input-row"]}>
        <div className={styles["input-cell"]}>
          <label>
            Фамилия
            <AppInput className={styles.input} placeholder="Введите фамилию" />
          </label>
        </div>
        <div className={styles["input-cell"]}>
          <label>
            Имя
            <AppInput className={styles.input} placeholder="Введите имя" />
          </label>
        </div>
        <div className={styles["input-cell"]}>
          <label>
            Отчество
            <AppInput className={styles.input} placeholder="Введите отчество" />
          </label>
        </div>
      </div>
      <div className={styles["input-row"]}>
        <div className={styles["input-cell"]}>
          <label>
            № Лицевого счета
            <AppInput className={styles.input} placeholder="Введите номер" />
          </label>
        </div>
        <div className={styles["input-cell"]}>
          <label>
            Электронная почта
            <AppInput
              className={styles.input}
              placeholder="Электронная почта"
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
            onClick={() => setEdit(false)}
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
