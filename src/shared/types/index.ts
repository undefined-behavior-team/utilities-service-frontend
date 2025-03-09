export type MeterTypes = "COLD_WATER" | "HOT_WATER" | "GAS" | "ELECTRICITY";

export type Meter = {
  id?: string;
  meterType: MeterTypes;
  meterCount: number;
};
