import { ColumnType } from "antd/es/table";

export const getAccrualsColumns: () => ColumnType[] = () => {
  return [
    {
      title: "Дата",
      dataIndex: ["createdAt"],
      key: "date",
    },
    {
      title: "Операция",
      dataIndex: ["paymentMethod"],
      key: "operation",
    },
    {
      title: `Начислено (Без пени)`,
      dataIndex: ["accrued"],
      key: "accrued",
    },
    {
      title: `Оплачено (Без пени)`,
      dataIndex: ["amount"],
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
      title: "Статус",
      dataIndex: ["status"],
      key: "status",
    },
  ];
};

export const getAccrualsColumnsMobile: () => ColumnType[] = () => {
  return [
    {
      title: "Дата",
      dataIndex: ["createdAt"],
      key: "date",
    },
    {
      title: "Операция",
      dataIndex: ["paymentMethod"],
      key: "operation",
    },
    {
      title: `Оплачено`,
      dataIndex: ["amount"],
      key: "paid",
    },
    {
      title: `Баланс`,
      dataIndex: ["balance"],
      key: "balance",
    },
    {
      title: "Статус",
      dataIndex: ["status"],
      key: "status",
    },
  ];
};
