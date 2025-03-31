import { Application, Status, User } from "@/shared/types";
import { Tag } from "antd";
import { ColumnType } from "antd/es/table";
import styles from "../styles.module.css";
import { ApplicationsHistory } from "../types";

export const getStatusTag = (status: Status) => {
  switch (status) {
    case "NEW": {
      return (
        <Tag className={styles["tag-status"]} color="blue">
          Новая
        </Tag>
      );
    }
    case "RECEIVED": {
      return (
        <Tag className={styles["tag-status"]} color="orange">
          Принята
        </Tag>
      );
    }
    case "DONE": {
      return (
        <Tag className={styles["tag-status"]} color="green">
          Выполнена
        </Tag>
      );
    }
    default: {
      return (
        <Tag className={styles["tag-status"]} color="blue">
          Новая
        </Tag>
      );
    }
  }
};

export const getApplicationColumns: () => ColumnType[] = () => {
  return [
    {
      title: "Дата",
      dataIndex: ["createdAt"],
      key: "date",
    },
    {
      title: "Статус",
      dataIndex: ["status"],
      key: "status",
      render: (value) => {
        return (
          <div className={styles["field-status"]}>{getStatusTag(value)}</div>
        );
      },
    },
    {
      title: "Тема",
      dataIndex: ["name"],
      key: "topic",
    },
    {
      title: "ФИО",
      dataIndex: ["fullName"],
      key: "person",
    },
    {
      title: "Адрес",
      dataIndex: ["address"],
      key: "address",
    },
  ];
};

export const handleApplicationsHistory = (user: User, data: Application[]) => {
  const history: ApplicationsHistory[] = [...data];
  const address = Object.values(user.address)
    .filter((value) => value)
    .join(", ");
  const fullName = `${user.firstName} ${user.middleName} ${user.lastName}`;
  return history.map((item) => {
    return (item = { ...item, address: address, fullName: fullName });
  });
};
