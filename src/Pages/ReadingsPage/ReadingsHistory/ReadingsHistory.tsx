import { AppTable } from "@/shared/Components/AppTable";
import { getReadingsHistoryColumns } from "../helpers";
import { useAppSelector } from "@/services/store/hooks";
import { metersSelector } from "@/services/store/slices/meters/selectors";

export const ReadingsHistory = () => {
  const data = useAppSelector(metersSelector);

  //const data = meters.map

  return (
    <div>
      <AppTable columns={getReadingsHistoryColumns()} dataSource={data} />
    </div>
  );
};
