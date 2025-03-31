import { Admin } from "@/shared/types";

export type LinkClientRequest = {
  emailHomeOwner: string;
  emailClient: string;
};

export type LinkClientResponse = string;

export type AddAdminRequest = Admin;

export type AddAdminResponse = string;
