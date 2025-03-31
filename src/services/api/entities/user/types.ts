import { Payment, User } from "@/shared/types";

export type UpdateUserRequest = User;
export type UpdateUserResponse = string;

export type GetUserRequest = void;
export type GetUserResponse = User;

export type AddPaymentRequest = Payment;
export type AddPaymentResponse = string;

export type GetPaymentsRequest = void;
export type GetPaymentsResponse = Payment[];
