import { rootApi } from "../../api";
import {
  CodeRequest,
  CodeResponse,
  SignInRequest,
  SignInRequestAdmin,
  SignInResponse,
  SignInResponseAdmin,
} from "./types";

const authApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    code: build.mutation<CodeResponse, CodeRequest>({
      query: (body) => ({
        url: "auth/client",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["auth"],
    }),
    login: build.mutation<SignInResponse, SignInRequest>({
      query: (body) => ({
        url: "auth/client/login",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["auth"],
    }),
    loginAdmin: build.mutation<SignInResponseAdmin, SignInRequestAdmin>({
      query: (body) => ({
        url: "auth/admin/login",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const { useCodeMutation, useLoginMutation, useLoginAdminMutation } =
  authApi;
