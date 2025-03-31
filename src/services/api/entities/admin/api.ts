import { rootApi } from "../../api";
import {
  AddAdminRequest,
  AddAdminResponse,
  LinkClientRequest,
  LinkClientResponse,
} from "./types";

const adminApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    linkClient: build.mutation<LinkClientResponse, LinkClientRequest>({
      query: (body) => ({
        url: "admin/add_client_to_homeowner",
        method: "POST",
        body: body,
        responseHandler: (response) => response.text(),
      }),
    }),
    addAdmin: build.mutation<AddAdminResponse, AddAdminRequest>({
      query: (body) => ({
        url: "admin/add_admin",
        method: "POST",
        body: body,
        responseHandler: (response) => response.text(),
      }),
    }),
  }),
});

export const { useLinkClientMutation, useAddAdminMutation } = adminApi;
