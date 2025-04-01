import { InferType } from "yup";
import { getReadingsFormSchema } from "../ReadingsApply/Components/ReadingsForm/schema";
import { getMeterFormSchema } from "../ReadingsApply/Components/Meters/Components/AddMeterForm/schema";
import { Meter } from "@/shared/types";

export type ReadingsFormValues = InferType<
  ReturnType<typeof getReadingsFormSchema>
>;

export type MeterFormValues = InferType<ReturnType<typeof getMeterFormSchema>>;

export type ReadingsHistory = Meter & {
  address?: string;
};
