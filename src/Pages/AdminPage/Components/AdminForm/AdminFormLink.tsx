import { AppForm } from "@/shared/Components/AppForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "antd";
import { FormInput } from "@/shared/Components/AppForm/FormInput";
import { getAdminLinkSchema } from "./schema";
import styles from "./styles.module.css";
import { AdminLinkFormValues } from "../../types";
import { useLinkClientMutation } from "@/services/api/entities/admin/api";
import { FC } from "react";

type Props = {
  handleReturn: () => void;
};

export const AdminFormLink: FC<Props> = ({ handleReturn }) => {
  const formApi = useForm({
    resolver: yupResolver(getAdminLinkSchema()),
  });

  const [linkClient] = useLinkClientMutation();

  const submit = (data: AdminLinkFormValues) => {
    linkClient(data)
      .unwrap()
      .then((data) => {
        console.log("data", data);
        handleReturn();
      });
  };

  return (
    <AppForm formApi={formApi} className={styles.root} onSubmit={submit}>
      <div className={styles["input-block"]}>
        <FormInput
          name="emailHomeOwner"
          className={styles.input}
          placeholder="E-mail ТСЖ"
        />
        <FormInput
          name="emailClient"
          className={styles.input}
          placeholder="E-mail клиента"
        />
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
