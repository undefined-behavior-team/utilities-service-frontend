import { InferType } from "yup";
import { getAccrualsFormSchema } from "../schema";

export type AccrualsFormValues = InferType<
  ReturnType<typeof getAccrualsFormSchema>
>;
