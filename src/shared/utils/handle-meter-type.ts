import { METER_TYPES } from "../constants";
import { MeterTypes } from "../types";

export const handleMeterType = (type: string) => {
  console.log("type", type);
  switch (type) {
    case "горячая вода": {
      return METER_TYPES.HOT_WATER as MeterTypes;
    }
    case "холодная вода": {
      return METER_TYPES.COLD_WATER as MeterTypes;
    }
    case "газ": {
      return METER_TYPES.GAS as MeterTypes;
    }
    case "электричество": {
      return METER_TYPES.ELECTRICITY as MeterTypes;
    }
    default: {
      return METER_TYPES.COLD_WATER as MeterTypes;
    }
  }
};
