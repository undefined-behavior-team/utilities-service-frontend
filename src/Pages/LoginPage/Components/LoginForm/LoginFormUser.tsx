import { AppForm } from "@/shared/Components/AppForm";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getAuthUserSchema } from "./schema";
import {
  useCodeMutation,
  useLoginMutation,
} from "@/services/api/entities/auth/api";
import { Button } from "antd";
import { FormInput } from "@/shared/Components/AppForm/FormInput";
import { LoginFormUserValues } from "../../types";
import { setAuthenticated, setToken } from "@/services/store/slices/auth/state";
import { setLoginStep } from "@/services/store/slices/login/state";
import styles from "./styles.module.css";
import { useAppDispatch } from "@/services/store/hooks";
import { useGetUserMutation } from "@/services/api/entities/user/api";
import { setUser } from "@/services/store/slices/user/state";

type Props = {
  loginStep: number;
};

export const LoginFormUser: FC<Props> = ({ loginStep }) => {
  const dispatch = useAppDispatch();

  const formApi = useForm({
    resolver: yupResolver(getAuthUserSchema()),
    context: { loginStep },
    mode: "onSubmit",
  });

  const [requestCode] = useCodeMutation();
  const [login] = useLoginMutation();

  const [getUser] = useGetUserMutation();

  const [step, setStep] = useState(true);

  const submit = (data: LoginFormUserValues) => {
    switch (loginStep) {
      case 1: {
        setStep(false);
        dispatch(setLoginStep(2));
        return requestCode({ email: data.email });
      }
      case 2: {
        const validData = {
          ...data,
          code: data.code as string,
        };
        return login(validData)
          .unwrap()
          .then((data) => {
            dispatch(setToken(data.accessToken));
            dispatch(setLoginStep(0));
            dispatch(setAuthenticated(true));
          })
          .then(() => {
            getUser()
              .unwrap()
              .then((data) => {
                dispatch(setUser(data));
              });
          });
      }
    }
  };

  const getLoginFormContent = () => {
    switch (loginStep) {
      case 1: {
        return (
          <>
            <label>
              E-mail
              <div className={styles["input-block"]}>
                <FormInput
                  name="email"
                  className={styles.input}
                  placeholder="E-mail"
                />
              </div>
            </label>
            <Button
              variant="solid"
              color="blue"
              className={styles.button}
              htmlType="submit"
            >
              Войти
            </Button>
          </>
        );
      }
      case 2: {
        return (
          <>
            <label>
              Код из письма
              <FormInput
                formNoValidate={step}
                name="code"
                className={styles.input}
                placeholder="Код"
              />
            </label>
            <Button
              variant="solid"
              color="blue"
              className={styles.button}
              htmlType="submit"
            >
              Войти
            </Button>
          </>
        );
      }
    }
  };

  return (
    <AppForm formApi={formApi} className={styles.root} onSubmit={submit}>
      {getLoginFormContent()}
    </AppForm>
  );
};
