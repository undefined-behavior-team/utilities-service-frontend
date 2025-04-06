import { CETLogoTransparentIcon } from "@/shared/icons";
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
  }, [chosen, dispatch]);

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <CETLogoTransparentIcon width={267} height={187} />
        {!chosen && (
          <div className={styles.controls}>
            <Button
              color="geekblue"
              variant="solid"
              className={classNames(styles.button, styles["button-admin"])}
              onClick={handleAdminLogin}
            >
              Войти как администратор
            </Button>
            <Button
              color="cyan"
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
      <footer className={styles.footer}>
        <hr className={styles.separator} />
        <p>
          Выполнено командой{" "}
          <a
            href="https://github.com/undefined-behavior-team"
            className={styles.link}
            target="_blank"
          >
            "Undefined Behaviour Team"
          </a>
          (Леликов Иван, Ефимов Дмитрий, Кузьмин Артём, Мараев Александр, Лушин
          Евгений)
        </p>
      </footer>
    </div>
  );
};
