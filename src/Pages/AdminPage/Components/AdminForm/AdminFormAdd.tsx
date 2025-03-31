import { AppForm } from "@/shared/Components/AppForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "antd";
import { FormInput } from "@/shared/Components/AppForm/FormInput";
import { getAdminAddSchema } from "./schema";
import { AdminAddFormValues } from "../../types";
import { useAddAdminMutation } from "@/services/api/entities/admin/api";
import styles from "./styles.module.css";
import { FC } from "react";

type Props = {
  handleReturn: () => void;
};

export const AdminFormAdd: FC<Props> = ({ handleReturn }) => {
  const formApi = useForm({
    resolver: yupResolver(getAdminAddSchema()),
    defaultValues: {
      isAdmin: false,
    },
  });

  const [addAdmin] = useAddAdminMutation();

  const submit = (data: AdminAddFormValues) => {
    addAdmin(data)
      .unwrap()
      .then((data) => {
        console.log("data", data);
        handleReturn();
      });
  };

  return (
    <AppForm formApi={formApi} className={styles.root} onSubmit={submit}>
      <div className={styles["input-block"]}>
        <FormInput name="email" className={styles.input} placeholder="E-mail" />
        <FormInput
          name="name"
          className={styles.input}
          placeholder="Имя"
          suffix={false}
        />
        <FormInput
          name="password"
          type="password"
          className={styles.input}
          placeholder="Пароль"
        />
        <FormInput
          name="address"
          className={styles.input}
          placeholder="Адрес"
        />
        <FormInput
          name="phone"
          className={styles.input}
          placeholder="Номер телефона"
        />
        <label className={styles["checkbox-wrapper"]}>
          Администратор
          <FormInput
            name="isAdmin"
            type="checkbox"
            className={styles.checkbox}
          />
        </label>
      </div>
      <Button
        variant="solid"
        color="blue"
        className={styles.button}
        htmlType="submit"
      >
        Добавить
      </Button>
    </AppForm>
  );
};
