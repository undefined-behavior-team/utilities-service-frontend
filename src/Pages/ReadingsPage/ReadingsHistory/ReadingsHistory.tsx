import { AppTable } from "@/shared/Components/AppTable";
import { getReadingsHistoryColumns } from "../helpers";

export const ReadingsHistory = () => {
  const data = [
    {
      id: "8",
      readingsDate: "01.01.2025",
      counterType: "COLD_WATER",
      readings: 0,
      adress: " ",
    },
    {
      id: "7",
      readingsDate: "01.01.2025",
      counterType: "GAS",
      readings: 123,
      adress: " ",
    },
    {
      id: "6",
      readingsDate: "01.01.2025",
      counterType: "GAS",
      readings: 321,
      adress: " ",
    },
    {
      id: "5",
      readingsDate: "01.01.2025",
      counterType: "ELECTRICITY",
      readings: 0,
      adress: " ",
    },
    {
      id: "4",
      readingsDate: "01.01.2025",
      counterType: "GAS",
      readings: 100,
      adress: " ",
    },
    {
      id: "3",
      readingsDate: "01.01.2025",
      counterType: "GAS",
      readings: 100,
      adress: " ",
    },
    {
      id: "2",
      readingsDate: "01.01.2025",
      counterType: "GAS",
      readings: 100,
      adress: " ",
    },
    {
      id: "1",
      readingsDate: "01.01.2025",
      counterType: "GAS",
      readings: 100,
      adress: " ",
    },
  ];

  return (
    <div>
      <AppTable columns={getReadingsHistoryColumns()} dataSource={data} />
    </div>
  );
};
