import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types";
import { reducers } from "./reducers";

const initialState: UserState = {
  currentUser: {
    firstName: "",
    lastName: "",
    middleName: "",
    phone: "",
    address: {
      town: "",
      street: "",
      house: "",
      building: undefined,
      apartment: "",
    },
  },
};

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: reducers,
});

export const { setUser } = userSlice.actions;
