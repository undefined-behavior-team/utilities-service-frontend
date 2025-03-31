import { InferType } from "yup";
import {
  getAdminAddSchema,
  getAdminLinkSchema,
} from "../Components/AdminForm/schema";

export type AdminLinkFormValues = InferType<
  ReturnType<typeof getAdminLinkSchema>
>;

export type AdminAddFormValues = InferType<
  ReturnType<typeof getAdminAddSchema>
>;

export type AdminAction = "ADD" | "LINK";
