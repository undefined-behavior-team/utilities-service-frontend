import { Meter } from "@/shared/types";

export const dataMeters: Meter[] = [
  {
    id: "1",
    meterType: "COLD_WATER",
    meterCount: 0,
  },
  {
    id: "2",
    meterType: "GAS",
    meterCount: 123,
  },
  {
    id: "3",
    meterType: "GAS",
    meterCount: 321,
  },
  {
    id: "4",
    meterType: "ELECTRICITY",
    meterCount: 0,
  },

  {
    id: "5",
    meterType: "ELECTRICITY",
    meterCount: 0,
  },
];

export const dataHistory = [
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
