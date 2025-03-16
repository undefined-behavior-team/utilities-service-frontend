import {
  ColdWaterIcon,
  ElectricityIcon,
  GasIcon,
  HotWaterIcon,
  QuestionMarkIcon,
} from "@/shared/icons";
import { MeterTypes } from "@/shared/types";
import { ColumnType } from "antd/es/table";

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

export const getReadingsHistoryColumns: () => ColumnType[] = () => {
  return [
    {
      title: "Дата",
      dataIndex: ["readingsDate"],
      key: "date",
    },
    {
      title: "Тип счётчика",
      dataIndex: ["counterType"],
      key: "counterType",
      render: (value) => getTypeText(value),
    },
    {
      title: "Показания",
      dataIndex: ["readings"],
      key: "readings",
    },
    {
      title: "Адрес",
      dataIndex: ["address"],
      key: "address",
    },
  ];
};
