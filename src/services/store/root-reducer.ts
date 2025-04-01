import { combineReducers } from "redux";
import { authSlice } from "./slices/auth/state";
import { loginSlice } from "./slices/login/state";
import { rootApi } from "../api/api";
import { userSlice } from "./slices/user/state";
import { metersSlice } from "./slices/meters/state";
import { applicationsSlice } from "./slices/applications/state";

export const rootReducer = combineReducers({
  [rootApi.reducerPath]: rootApi.reducer,
  [authSlice.reducerPath]: authSlice.reducer,
  [loginSlice.reducerPath]: loginSlice.reducer,
  [userSlice.reducerPath]: userSlice.reducer,
  [metersSlice.reducerPath]: metersSlice.reducer,
  [applicationsSlice.reducerPath]: applicationsSlice.reducer,
});
