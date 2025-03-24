import { AppTable } from "@/shared/Components/AppTable";
import { useParams } from "react-router-dom";
import { getAccrualsColumns } from "../helpers";
import { mockupData2023, mockupData2024, mockupData2025 } from "../const";

export const AccrualsYear = () => {
  const { year } = useParams();
  console.log("params", year);
  const getDataSource = () => {
    switch (year) {
      case "2025": {
        return mockupData2025;
      }
      case "2024": {
        return mockupData2024;
      }
      case "2023": {
        return mockupData2023;
      }
    }
  };
  return (
    <div>
      <AppTable columns={getAccrualsColumns()} dataSource={getDataSource()} />
    </div>
  );
};
