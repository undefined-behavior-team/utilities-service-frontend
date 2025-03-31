import { Payment } from "@/shared/types";

export type AddPaymentRequest = Payment;
export type AddPaymentResponse = string;

export type GetPaymentsRequest = void;
export type GetPaymentsResponse = Payment[];
