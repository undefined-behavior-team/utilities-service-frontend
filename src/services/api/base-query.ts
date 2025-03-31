import {
  BaseQueryApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query";
import { store } from "../store/store";
import { setAuthenticated, setToken } from "../store/slices/auth/state";

const BASE_URL = "https://util.crazyfrequency.ru";

const prepareHeaders = (headers: Headers) => {
  const authToken = store.getState().auth.token;
  headers.set("Accept", "application/json, text/plain");
  if (authToken) {
    headers.set("Authorization", `Bearer ${authToken}`);
  }
  return headers;
};

export const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_URL}/api`,
  prepareHeaders,
});

export const baseQueryWithAuth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  extraOptions: {}
) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 403) {
    store.dispatch(setAuthenticated(false));
    store.dispatch(setToken(""));
  }

  return result;
};
