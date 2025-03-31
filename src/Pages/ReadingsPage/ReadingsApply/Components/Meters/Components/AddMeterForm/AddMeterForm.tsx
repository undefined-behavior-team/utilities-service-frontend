import { useForm } from "react-hook-form";
import { AppInput } from "@/shared/Components/AppInput";
import { AppForm } from "@/shared/Components/AppForm";
import { Button } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { getMeterFormSchema } from "./schema";
import { MeterFormValues } from "@/Pages/ReadingsPage/types";
import { useAddMeterMutation } from "@/services/api/entities/meters/api";
import { FormSelector } from "@/shared/Components/AppForm/FormSelector";
import { FormInput } from "@/shared/Components/AppForm/FormInput";
import styles from "./styles.module.css";
import { FC } from "react";

type Props = {
  setAddMeter: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AddMeterForm: FC<Props> = ({ setAddMeter }) => {
  const formApi = useForm({
    resolver: yupResolver(getMeterFormSchema()),
  });

  const [addMeter] = useAddMeterMutation();

  const submit = (data: MeterFormValues) => {
    addMeter(data);
    setAddMeter(false);
    window.location.reload();
  };

  return (
    <AppForm formApi={formApi} onSubmit={submit}>
      <div className={styles.root}>
        <label>
          Тип счётчика
          <FormSelector
            name="name"
            options={[
              { value: "горячая вода", label: "Горячая вода" },
              { value: "холодная вода", label: "Холодная вода" },
              { value: "газ", label: "Газ" },
              { value: "электричество", label: "Электричество" },
            ]}
            className={styles.input}
            placeholder="Выберите тип"
          />
        </label>
        <label>
          Предыдущие показания
          <AppInput
            className={styles.input}
            placeholder="Введите показания"
            disabled
          />
        </label>
        <label>
          Текущие показания
          <FormInput
            name="data"
            className={styles.input}
            placeholder="Введите показания"
          />
        </label>
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
