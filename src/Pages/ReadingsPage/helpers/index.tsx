import {
  ColdWaterIcon,
  ElectricityIcon,
  GasIcon,
  HotWaterIcon,
  QuestionMarkIcon,
} from "@/shared/icons";
import { Meter, MeterTypes, User } from "@/shared/types";
import { ColumnType } from "antd/es/table";
import { ReadingsHistory } from "../types";

export const getTypeIcon = (meterType?: MeterTypes) => {
  switch (meterType) {
    case "COLD_WATER": {
      return <ColdWaterIcon />;
    }
    case "HOT_WATER": {
      return <HotWaterIcon />;
    }
    case "GAS": {
      return <GasIcon />;
    }
    case "ELECTRICITY": {
      return <ElectricityIcon />;
    }
    default: {
      return <QuestionMarkIcon />;
    }
  }
};

export const getTypeText = (meterType?: MeterTypes) => {
  switch (meterType) {
    case "COLD_WATER": {
      return "Холодная вода";
    }
    case "HOT_WATER": {
      return "Горячая вода";
    }
    case "GAS": {
      return "Газ";
    }
    case "ELECTRICITY": {
      return "Электричество";
    }
    default: {
      return "Показания";
    }
  }
};

export const getCountText = (meterType?: MeterTypes) => {
  switch (meterType) {
    case "COLD_WATER": {
      return "м³";
    }
    case "HOT_WATER": {
      return "м³";
    }
    case "GAS": {
      return "м³";
    }
    case "ELECTRICITY": {
      return "кВт·ч";
    }
    default: {
      return "м³";
    }
  }
};

export const getReadingsHistoryColumns: () => ColumnType[] = () => {
  return [
    {
      title: "Дата",
      dataIndex: ["createdAt"],
      key: "date",
    },
    {
      title: "Тип счётчика",
      dataIndex: ["meterType"],
      key: "counterType",
      render: (value) => getTypeText(value),
    },
    {
      title: "Показания",
      dataIndex: ["meterCount"],
      key: "readings",
    },
    {
      title: "Адрес",
      dataIndex: ["address"],
      key: "address",
    },
  ];
};

export const handleReadingHistory = (user: User, data: Meter[]) => {
  const history: ReadingsHistory[] = [...data];
  const address = Object.values(user.address)
    .filter((value) => value)
    .join(", ");
  return history.map((item) => {
    return (item = { ...item, address: address });
  });
};
