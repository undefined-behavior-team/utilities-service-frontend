import { AppForm } from "@/shared/Components/AppForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getAuthAdminSchema } from "./schema";
import { useLoginAdminMutation } from "@/services/api/entities/auth/api";
import { Button } from "antd";
import { FormInput } from "@/shared/Components/AppForm/FormInput";
import { LoginFormAdminValues } from "../../types";
import { useDispatch } from "react-redux";
import { setAuthenticated, setToken } from "@/services/store/slices/auth/state";
import styles from "./styles.module.css";

export const LoginFormAdmin = () => {
  const dispatch = useDispatch();

  const formApi = useForm({
    resolver: yupResolver(getAuthAdminSchema()),
  });

  const [loginAdmin] = useLoginAdminMutation();

  const submit = (data: LoginFormAdminValues) => {
    loginAdmin(data)
      .unwrap()
      .then((data) => {
        dispatch(setToken(data.accessToken));
      })
      .then(() => {
        dispatch(setAuthenticated(true));
      });
  };

  return (
    <AppForm formApi={formApi} className={styles.root} onSubmit={submit}>
      <div className={styles["input-block"]}>
        <FormInput name="email" className={styles.input} placeholder="E-mail" />
        <FormInput
          name="password"
          className={styles.input}
          type="password"
          placeholder="Пароль"
        />
      </div>
      <div className={styles.controls}>
        <Button
          variant="solid"
          color="blue"
          className={styles.button}
          htmlType="submit"
        >
          Войти
        </Button>
      </div>
    </AppForm>
  );
};
