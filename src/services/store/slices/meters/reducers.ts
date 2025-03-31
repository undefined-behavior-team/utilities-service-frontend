import { SetMeters } from "./types";

const setMeters: SetMeters = (state, action) => {
  console.log("action.payload", action.payload);
  state.currentMeters = action.payload;
};

export const reducers = {
  setMeters,
};
