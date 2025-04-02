import { rootApi } from "../../api";
import {
  GetUserRequest,
  GetUserResponse,
  UpdateUserRequest,
  UpdateUserResponse,
} from "./types";

const userApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    updateUser: build.mutation<UpdateUserResponse, UpdateUserRequest>({
      query: (body) => ({
        url: "client/update_data",
        method: "PUT",
        body: body,
        responseHandler: (response) => response.text(),
      }),
    }),
    getUser: build.mutation<GetUserResponse, GetUserRequest>({
      query: () => ({
        url: "client/get_client_info",
        method: "GET",
      }),
    }),
  }),
});

export const { useUpdateUserMutation, useGetUserMutation } = userApi;
