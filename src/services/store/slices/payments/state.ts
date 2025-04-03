import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { PaymentState } from "./types";

const initialState: PaymentState = {
  currentPayments: [],
};

export const paymentsSlice = createSlice({
  initialState,
  name: "payments",
  reducers: reducers,
});

export const { setPayments } = paymentsSlice.actions;
