import { rootApi } from "../../api";
import {
  AddApplicationRequest,
  AddApplicationResponse,
  GetApplicationsRequest,
  GetApplicationsResponse,
} from "./types";

const applicationsApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    addApplication: build.mutation<
      AddApplicationResponse,
      AddApplicationRequest
    >({
      query: (body) => ({
        url: "client/add_application",
        method: "POST",
        body: body,
        responseHandler: (response) => response.text(),
      }),
    }),
    getApplications: build.mutation<
      GetApplicationsResponse,
      GetApplicationsRequest
    >({
      query: (body) => ({
        url: "client/get_application",
        method: "GET",
        body: body,
      }),
    }),
  }),
});

export const { useAddApplicationMutation, useGetApplicationsMutation } =
  applicationsApi;
