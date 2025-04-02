import { RootState } from "../../hooks";

export const paymentsSelector = (state: RootState) =>
  state.payments.currentPayments;
