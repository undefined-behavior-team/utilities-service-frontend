import { ColumnType } from "antd/es/table";

export const getAccrualsColumns: () => ColumnType[] = () => {
  return [
    {
      title: "Дата",
      dataIndex: ["date"],
      key: "date",
    },
    {
      title: "Операция",
      dataIndex: ["operation"],
      key: "operation",
    },
    {
      title: `Начислено (Без пени)`,
      dataIndex: ["accrued"],
      key: "accrued",
    },
    {
      title: `Оплачено (Без пени)`,
      dataIndex: ["paid"],
      key: "paid",
    },
    {
      title: "Оплачено пени",
      dataIndex: ["fine"],
      key: "fine",
    },
    {
      title: "Комиссия",
      dataIndex: ["commission"],
      key: "commission",
    },
    {
      title: `Баланс (Без пени)`,
      dataIndex: ["balance"],
      key: "balance",
    },
    {
      title: "Чек",
      dataIndex: ["check"],
      key: "check",
    },
  ];
};
