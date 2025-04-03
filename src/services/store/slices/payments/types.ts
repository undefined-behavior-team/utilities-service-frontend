import { Payment } from "@/shared/types";
import { PayloadAction } from "@reduxjs/toolkit";

export type PaymentState = { currentPayments: Payment[] };

export type SetPayments = (
  state: PaymentState,
  action: PayloadAction<Payment[]>
) => void;
