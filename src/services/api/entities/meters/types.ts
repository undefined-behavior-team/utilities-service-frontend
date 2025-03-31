import { MeterDTO } from "@/shared/types";

export type AddMeterRequest = MeterDTO;
export type AddMeterResponse = string;

export type GetMetersRequest = void;
export type GetMetersResponse = {
  meterName: string;
  data: number;
  createdAt: string;
}[];
