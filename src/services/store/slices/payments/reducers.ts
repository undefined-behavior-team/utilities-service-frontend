import { SetPayments } from "./types";

const setPayments: SetPayments = (state, action) => {
  state.currentPayments = action.payload;
};

export const reducers = {
  setPayments,
};
