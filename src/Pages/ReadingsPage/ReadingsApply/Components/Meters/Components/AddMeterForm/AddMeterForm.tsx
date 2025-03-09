import { useForm } from "react-hook-form";
import { AppInput } from "@/shared/Components/AppInput";
import { AppForm } from "@/shared/Components/AppForm";
import styles from "./styles.module.css";
import { AppSelector } from "@/shared/Components/AppSelector";
import { Button } from "antd";

export const AddMeterForm = () => {
  const formApi = useForm();
  return (
    <AppForm formApi={formApi}>
      <div className={styles.root}>
        <label>
          Тип счётчика
          <AppSelector
            options={[
              { value: "HOT_WATER", label: "Горячая вода" },
              { value: "COLD_WATER", label: "Холодная вода" },
              { value: "GAS", label: "Газ" },
            ]}
            className={styles.input}
            placeholder="Выберите тип"
          />
        </label>
        <label>
          Предыдущие показания
          <AppInput className={styles.input} placeholder="Введите показания" />
        </label>
        <label>
          Текущие показания
          <AppInput className={styles.input} placeholder="Введите показания" />
        </label>
      </div>
      <Button variant="solid" color="blue" className={styles.button}>
        Отправить
      </Button>
    </AppForm>
  );
};
