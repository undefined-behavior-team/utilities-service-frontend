import { rootApi } from "../../api";
import {
  AddPaymentRequest,
  AddPaymentResponse,
  GetPaymentsRequest,
  GetPaymentsResponse,
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

    addPayment: build.mutation<AddPaymentResponse, AddPaymentRequest>({
      query: (body) => ({
        url: "client/add_payment",
        method: "POST",
        body: body,
        responseHandler: (response) => response.text(),
      }),
    }),
    getPayments: build.mutation<GetPaymentsResponse, GetPaymentsRequest>({
      query: (body) => ({
        url: "client/get_client_payment",
        method: "GET",
        body: body,
      }),
    }),
  }),
});

export const {
  useUpdateUserMutation,
  useGetUserMutation,
  useAddPaymentMutation,
  useGetPaymentsMutation,
} = userApi;
