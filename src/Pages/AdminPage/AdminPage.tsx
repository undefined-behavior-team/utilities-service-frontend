import { Button } from "antd";
import { useState } from "react";
import { MaybeType } from "@/shared/types/utility-types";
import { AdminAction } from "./types";
import { AdminForm } from "./Components/AdminForm/AdminForm";
import styles from "./styles.module.css";
import { LoginIcon } from "@/shared/icons";
import { logout } from "@/services/store/slices/auth/state";
import { useDispatch } from "react-redux";

export const AdminPage = () => {
  const [chosen, setChosen] = useState(false);
  const [actionType, setActionType] = useState(null as MaybeType<AdminAction>);
  const dispatch = useDispatch();

  const handleReturn = () => {
    setActionType(null);
    setChosen(false);
  };

  return (
    <>
      <div className={styles.logout}>
        Выйти
        <LoginIcon
          onClick={() => {
            dispatch(logout());
          }}
        />
      </div>
      <div className={styles.root}>
        {!chosen && (
          <div className={styles.controls}>
            <Button
              variant="solid"
              className={styles.button}
              onClick={() => {
                setActionType("ADD");
                setChosen(true);
              }}
            >
              Добавить администратора/ТСЖ
            </Button>
            <Button
              variant="solid"
              className={styles.button}
              onClick={() => {
                setActionType("LINK");
                setChosen(true);
              }}
            >
              Добавить клиента к ТСЖ
            </Button>
          </div>
        )}
        {chosen && (
          <div className={styles.return} onClick={handleReturn}>
            Назад
          </div>
        )}
        <AdminForm actionType={actionType} handleReturn={handleReturn} />
      </div>
    </>
  );
};
