import { InferType } from "yup";
import { getApplicationSchema } from "../ApplicationApply/Components/ApplicationForm/schema";
import { Application } from "@/shared/types";

export type ApplicationFormValues = InferType<
  ReturnType<typeof getApplicationSchema>
>;

export type ApplicationsHistory = Application & {
  address?: string;
  fullName?: string;
};
