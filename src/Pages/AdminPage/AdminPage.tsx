import { Button } from "antd";
import { useEffect, useState } from "react";
import { MaybeType } from "@/shared/types/utility-types";
import { AdminAction } from "./types";
import { AdminForm } from "./Components/AdminForm/AdminForm";
import { LoginIcon } from "@/shared/icons";
import { logout } from "@/services/store/slices/auth/state";
import { useAppDispatch, useAppSelector } from "@/services/store/hooks";
import { tokenSelector } from "@/services/store/slices/auth/selectors";
import { jwtDecode } from "jwt-decode";
import { Application, TokenData } from "@/shared/types";
import { AppTable } from "@/shared/Components/AppTable";
import { getApplicationColumns } from "../ApplicationPage/helpers";
import {
  setApplications,
  setSelectedApplication,
} from "@/services/store/slices/applications/state";
import { ApplicationModal } from "./Components/ApplicationModal/ApplicationModal";
import { useGetApplicationsHomeownerMutation } from "@/services/api/entities/application/api";
import { applicationsSelector } from "@/services/store/slices/applications/selectors";
import styles from "./styles.module.css";

export const AdminPage = () => {
  const [chosen, setChosen] = useState(false);
  const [actionType, setActionType] = useState(null as MaybeType<AdminAction>);
  const [showModal, setShowModal] = useState(false);

  const token = useAppSelector(tokenSelector);
  const applications = useAppSelector(applicationsSelector);
  const dispatch = useAppDispatch();

  const [getApplications] = useGetApplicationsHomeownerMutation();

  const handleReturn = () => {
    setActionType(null);
    setChosen(false);
  };

  const onRowClick = (record: Application) => {
    dispatch(setSelectedApplication(record));
    setShowModal(true);
  };

  useEffect(() => {
    getApplications()
      .unwrap()
      .then((data) => {
        dispatch(setApplications(data));
      });
  }, [dispatch, getApplications]);

  const getContent = () => {
    const data = jwtDecode(token ?? "") as TokenData;
    const role = data.role;

    switch (role) {
      case "HOMEOWNER": {
        return (
          <AppTable
            columns={getApplicationColumns()}
            onRow={(record) => ({
              onClick: () => onRowClick(record as Application),
            })}
            dataSource={applications}
            className={styles.form}
          />
        );
      }
      default: {
        return (
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
        );
      }
    }
  };

  return (
    <>
      <div
        onClick={() => {
          dispatch(logout());
        }}
        className={styles.logout}
      >
        Выйти
        <LoginIcon />
      </div>
      <div className={styles.root}>
        {!chosen && getContent()}
        {chosen && (
          <div className={styles.return} onClick={handleReturn}>
            Назад
          </div>
        )}
        <AdminForm actionType={actionType} handleReturn={handleReturn} />
      </div>
      <ApplicationModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onCancel={() => setShowModal(false)}
        destroyOnClose
        closable
      />
    </>
  );
};
