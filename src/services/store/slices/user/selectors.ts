import { RootState } from "../../hooks";

export const userSelector = (state: RootState) => state.user.currentUser;
