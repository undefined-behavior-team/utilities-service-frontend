import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./base-query";

export const rootApi = createApi({
  reducerPath: "rootApi",
  tagTypes: ["user", "auth", "authType", "authStatus", "profile"],
  baseQuery: baseQueryWithAuth,
  endpoints: () => ({}),
});
