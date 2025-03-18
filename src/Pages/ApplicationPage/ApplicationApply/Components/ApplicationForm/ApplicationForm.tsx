import { useForm } from "react-hook-form";
import { AppInput } from "@/shared/Components/AppInput";
import styles from "./styles.module.css";
import { AppForm } from "@/shared/Components/AppForm";
import classNames from "classnames";
import TextArea from "antd/es/input/TextArea";
import { Button } from "antd";

export const ApplicationForm = () => {
  const formApi = useForm();
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
            Телефон
            <AppInput className={styles.input} placeholder="Номер телефона" />
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
      <div
        className={classNames(styles["input-row"], styles["input-row__text"])}
      >
        <div className={styles["input-cell"]}>
          <label>
            Обращение
            <AppInput className={styles.input} placeholder="Тема" />
          </label>
        </div>
        <TextArea rows={7} placeholder="Текст обращения..." />
      </div>
      <Button variant="solid" color="blue" className={styles.button}>
        Отправить
      </Button>
    </AppForm>
  );
};
