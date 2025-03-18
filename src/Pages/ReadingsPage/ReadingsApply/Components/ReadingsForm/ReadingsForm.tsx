import { useForm } from "react-hook-form";
import { AppInput } from "@/shared/Components/AppInput";
import styles from "./styles.module.css";
import { AppForm } from "@/shared/Components/AppForm";

export const ReadingsForm = () => {
  const formApi = useForm();
  return (
    <AppForm formApi={formApi}>
      <div className={styles.root}>
        <div className={styles["input-street"]}>
          <label>
            Улица
            <AppInput className={styles.input} placeholder="Название улицы" />
          </label>
        </div>
        <div className={styles["input-cell"]}>
          <label>
            Дом
            <AppInput className={styles.input} placeholder="Номер" />
          </label>
        </div>
        <div className={styles["input-cell"]}>
          <label>
            Корпус
            <AppInput className={styles.input} placeholder="Номер" />
          </label>
        </div>
        <div className={styles["input-cell"]}>
          <label>
            Квартира
            <AppInput className={styles.input} placeholder="Номер" />
          </label>
        </div>
      </div>
    </AppForm>
  );
};
