import { AppTable } from "@/shared/Components/AppTable";
import { getReadingsHistoryColumns, handleReadingHistory } from "../helpers";
import { useAppSelector } from "@/services/store/hooks";
import { metersSelector } from "@/services/store/slices/meters/selectors";
import { userSelector } from "@/services/store/slices/user/selectors";

export const ReadingsHistory = () => {
  const data = useAppSelector(metersSelector);
  const user = useAppSelector(userSelector);

  return (
    <div>
      <AppTable
        columns={getReadingsHistoryColumns()}
        dataSource={handleReadingHistory(user, data)}
      />
    </div>
  );
};
