import { AppTable } from "@/shared/Components/AppTable";
import { getApplicationColumns, handleApplicationsHistory } from "../helpers";
import { applicationsSelector } from "@/services/store/slices/applications/selectors";
import { useAppSelector } from "@/services/store/hooks";
import { userSelector } from "@/services/store/slices/user/selectors";

export const ApplicationHistory = () => {
  const data = useAppSelector(applicationsSelector);
  const user = useAppSelector(userSelector);

  return (
    <div>
      <AppTable
        columns={getApplicationColumns()}
        dataSource={handleApplicationsHistory(user, data)}
      />
    </div>
  );
};
