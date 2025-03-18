import { Status } from "@/shared/types";
import { Tag } from "antd";
import { ColumnType } from "antd/es/table";
import styles from "../styles.module.css";

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
      dataIndex: ["date"],
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
      dataIndex: ["topic"],
      key: "topic",
    },
    {
      title: "ФИО",
      dataIndex: ["person"],
      key: "person",
    },
    {
      title: "Адрес",
      dataIndex: ["address"],
      key: "address",
    },
  ];
};
