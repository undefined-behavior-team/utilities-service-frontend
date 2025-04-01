import { MaybeType } from "./utility-types";

export type AuthType = "ADMIN" | "USER";

export type MeterTypes = "COLD_WATER" | "HOT_WATER" | "GAS" | "ELECTRICITY";

export type Status = "NEW" | "RECEIVED" | "DONE";

export type AddressDTO = {
  town: string;
  street: string;
  house: string;
  building?: MaybeType<string>;
  apartment: string;
};

export type MeterDTO = {
  name: string;
  data: number;
  createdAt?: string;
};

export type Meter = {
  id?: string;
  meterType: MeterTypes;
  meterCount: number;
  createdAt?: string;
};

export type Admin = {
  email: string;
  isAdmin: boolean;
  name: string;
  password: string;
  address: string;
  phone: string;
};

export type User = {
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  address: AddressDTO;
};

export type Payment = {
  paymentMethod: string;
  amount: number;
  status: string;
  createdAt?: string;
};

export type Application = {
  id?: string;
  applicationType?: number;
  name: string;
  description: string;
  createdAt?: string;
  updateUt?: string;
  status?: number;
};
