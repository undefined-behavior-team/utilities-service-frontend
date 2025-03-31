import { User } from "@/shared/types";
import { PayloadAction } from "@reduxjs/toolkit";

export type UserState = { currentUser: User };

export type SetUser = (state: UserState, action: PayloadAction<User>) => void;
