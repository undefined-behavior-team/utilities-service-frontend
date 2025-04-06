import { InferType } from "yup";
import {
  getAdminAddSchema,
  getAdminLinkSchema,
} from "../Components/AdminForm/schema";
import { getSelectedApplicationSchema } from "../Components/ApplicationModal/schema";

export type AdminLinkFormValues = InferType<
  ReturnType<typeof getAdminLinkSchema>
>;

export type AdminAddFormValues = InferType<
  ReturnType<typeof getAdminAddSchema>
>;

export type AdminAction = "ADD" | "LINK";

export type SelectedApplicationFormValues = InferType<
  ReturnType<typeof getSelectedApplicationSchema>
>;
