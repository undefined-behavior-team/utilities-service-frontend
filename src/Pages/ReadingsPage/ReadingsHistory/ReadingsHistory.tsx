import { AppTable } from "@/shared/Components/AppTable";
import { getReadingsHistoryColumns, handleReadingHistory } from "../helpers";
import { useAppSelector } from "@/services/store/hooks";
import { metersSelector } from "@/services/store/slices/meters/selectors";
import { userSelector } from "@/services/store/slices/user/selectors";
import { ResponsiveBlockSwitcher } from "@/shared/Components/ResponsiveBlockSwitcher";
import styles from "../styles.module.css";

export const ReadingsHistory = () => {
  const data = useAppSelector(metersSelector);
  const user = useAppSelector(userSelector);

  return (
    <div>
      <ResponsiveBlockSwitcher
        desktop={
          <AppTable
            columns={getReadingsHistoryColumns()}
            dataSource={handleReadingHistory(user, data)}
          />
        }
        mobile={
          <AppTable
            columns={getReadingsHistoryColumns()}
            dataSource={handleReadingHistory(user, data)}
            virtual
            scroll={{ x: 342, y: 500 }}
            rootClassName={styles.table}
          />
        }
      />
    </div>
  );
};
