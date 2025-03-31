import { rootApi } from "../../api";
import {
  AddPaymentRequest,
  AddPaymentResponse,
  GetPaymentsRequest,
  GetPaymentsResponse,
} from "./types";

const paymentsApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
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

export const { useAddPaymentMutation, useGetPaymentsMutation } = paymentsApi;
