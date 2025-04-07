import { AppTable } from "@/shared/Components/AppTable";
import { getApplicationColumns, handleApplicationsHistory } from "../helpers";
import { applicationsSelector } from "@/services/store/slices/applications/selectors";
import { useAppSelector } from "@/services/store/hooks";
import { userSelector } from "@/services/store/slices/user/selectors";
import { ResponsiveBlockSwitcher } from "@/shared/Components/ResponsiveBlockSwitcher";
import styles from "../styles.module.css";

export const ApplicationHistory = () => {
  const data = useAppSelector(applicationsSelector);
  const user = useAppSelector(userSelector);

  return (
    <div>
      <ResponsiveBlockSwitcher
        desktop={
          <AppTable
            columns={getApplicationColumns(true)}
            dataSource={handleApplicationsHistory(user, data)}
          />
        }
        mobile={
          <AppTable
            columns={getApplicationColumns(true)}
            dataSource={handleApplicationsHistory(user, data)}
            virtual
            scroll={{ x: 342, y: 500 }}
            rootClassName={styles.table}
          />
        }
      />
    </div>
  );
};
