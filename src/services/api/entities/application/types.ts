import { Application } from "@/shared/types";

export type AddApplicationRequest = Application;
export type AddApplicationResponse = string;

export type GetApplicationsRequest = void;
export type GetApplicationsResponse = Application[];

export type UpdateApplicationRequest = {
  body: Application;
  id: string;
};
export type UpdateApplicationResponse = string;
