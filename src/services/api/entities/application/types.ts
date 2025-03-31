import { Application } from "@/shared/types";

export type AddApplicationRequest = Application;
export type AddApplicationResponse = string;

export type GetApplicationsRequest = void;
export type GetApplicationsResponse = Application[];
