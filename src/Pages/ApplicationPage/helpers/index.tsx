import { Application, User } from "@/shared/types";
import { Tag } from "antd";
import { ColumnType } from "antd/es/table";
import styles from "../styles.module.css";
import { ApplicationsHistory } from "../types";

export const getStatusTag = (status: number) => {
  switch (status) {
    case 0: {
      return (
        <Tag className={styles["tag-status"]} color="blue">
          Новая
        </Tag>
      );
    }
    case 1: {
      return (
        <Tag className={styles["tag-status"]} color="orange">
          Принята
        </Tag>
      );
    }
    case 2: {
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

export const getApplicationColumns: (user?: boolean) => ColumnType[] = (
  user = false
) => {
  const userColumns = user
    ? [
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
      ]
    : [];

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
    ...userColumns,
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
