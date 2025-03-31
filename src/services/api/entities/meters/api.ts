import { rootApi } from "../../api";
import {
  AddMeterRequest,
  AddMeterResponse,
  GetMetersRequest,
  GetMetersResponse,
} from "./types";

const metersApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    addMeter: build.mutation<AddMeterResponse, AddMeterRequest>({
      query: (body) => ({
        url: "client/add_meter",
        method: "POST",
        body: body,
        responseHandler: (response) => response.text(),
      }),
    }),
    getMeters: build.mutation<GetMetersResponse, GetMetersRequest>({
      query: (body) => ({
        url: "client/get_history_meter_reading",
        method: "GET",
        body: body,
      }),
    }),
  }),
});

export const { useAddMeterMutation, useGetMetersMutation } = metersApi;
