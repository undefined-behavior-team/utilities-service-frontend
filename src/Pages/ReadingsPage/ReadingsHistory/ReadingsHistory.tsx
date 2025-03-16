import { AppTable } from "@/shared/Components/AppTable";
import { getReadingsHistoryColumns } from "../helpers";

export const ReadingsHistory = () => {
  const data = [
    {
      id: "8",
      readingsDate: "01.01.2025",
      counterType: "COLD_WATER",
      readings: 0,
      address: " ",
    },
    {
      id: "7",
      readingsDate: "01.01.2025",
      counterType: "GAS",
      readings: 123,
      address: " ",
    },
    {
      id: "6",
      readingsDate: "01.01.2025",
      counterType: "GAS",
      readings: 321,
      address: " ",
    },
    {
      id: "5",
      readingsDate: "01.01.2025",
      counterType: "ELECTRICITY",
      readings: 0,
      address: " ",
    },
    {
      id: "4",
      readingsDate: "01.01.2025",
      counterType: "GAS",
      readings: 100,
      address: " ",
    },
    {
      id: "3",
      readingsDate: "01.01.2025",
      counterType: "GAS",
      readings: 100,
      address: " ",
    },
    {
      id: "2",
      readingsDate: "01.01.2025",
      counterType: "GAS",
      readings: 100,
      address: " ",
    },
    {
      id: "1",
      readingsDate: "01.01.2025",
      counterType: "GAS",
      readings: 100,
      address: " ",
    },
  ];

  return (
    <div>
      <AppTable columns={getReadingsHistoryColumns()} dataSource={data} />
    </div>
  );
};
