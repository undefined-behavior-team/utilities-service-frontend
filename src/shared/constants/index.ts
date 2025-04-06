import { AuthType, MeterTypes } from "../types";

export const AUTH_TYPES: Record<AuthType, AuthType> = {
  USER: "USER",
  ADMIN: "ADMIN",
};

export const METER_TYPES: Record<MeterTypes, MeterTypes> = {
  COLD_WATER: "COLD_WATER",
  HOT_WATER: "HOT_WATER",
  GAS: "GAS",
  ELECTRICITY: "ELECTRICITY",
};

export enum ApplicationStatusEnum {
  "NEW",
  "RECEIVED",
  "DONE",
}
