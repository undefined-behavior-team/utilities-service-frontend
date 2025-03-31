import { SetUser } from "./types";

const setUser: SetUser = (state, action) => {
  state.currentUser = action.payload;
};

export const reducers = {
  setUser,
};
