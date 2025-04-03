import { CETLogoIcon } from "@/shared/icons";
import { useAppDispatch, useAppSelector } from "@/services/store/hooks";
import {
  authTypeSelector,
  loginStepSelector,
} from "@/services/store/slices/login/selectors";
import { LoginForm } from "./Components/LoginForm/LoginForm";
import { Button } from "antd";
import classNames from "classnames";
import { setAuthType, setLoginStep } from "@/services/store/slices/login/state";
import { AUTH_TYPES } from "@/shared/constants";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export const LoginPage = () => {
  const authType = useAppSelector(authTypeSelector);
  const loginStep = useAppSelector(loginStepSelector);

  const [chosen, setChosen] = useState(false);

  const dispatch = useAppDispatch();

  const handleAdminLogin = () => {
    setChosen(true);
    dispatch(setAuthType(AUTH_TYPES.ADMIN));
  };

  const handleUserLogin = () => {
    setChosen(true);
    dispatch(setAuthType(AUTH_TYPES.USER));
    dispatch(setLoginStep(1));
  };

  const handleReturn = () => {
    dispatch(setAuthType(null));
    dispatch(setLoginStep(0));
    setChosen(false);
  };

  useEffect(() => {
    if (!chosen) {
      dispatch(setAuthType(null));
    }
  }, []);

  return (
    <div className={styles.root}>
      <CETLogoIcon width={286} height={200} />
      {!chosen && (
        <div className={styles.controls}>
          <Button
            color="red"
            variant="solid"
            className={classNames(styles.button, styles["button-admin"])}
            onClick={handleAdminLogin}
          >
            Войти как администратор
          </Button>
          <Button
            color="blue"
            variant="solid"
            className={classNames(styles.button, styles["button-user"])}
            onClick={handleUserLogin}
          >
            Войти как пользователь
          </Button>
        </div>
      )}
      {chosen && (
        <div className={styles.return} onClick={handleReturn}>
          ← Назад
        </div>
      )}
      <LoginForm authType={authType} loginStep={loginStep} />
    </div>
  );
};
