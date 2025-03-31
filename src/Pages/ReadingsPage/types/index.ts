import { InferType } from "yup";
import { getReadingsFormSchema } from "../ReadingsApply/Components/ReadingsForm/schema";
import { getMeterFormSchema } from "../ReadingsApply/Components/Meters/Components/AddMeterForm/schema";

export type ReadingsFormValues = InferType<
  ReturnType<typeof getReadingsFormSchema>
>;

export type MeterFormValues = InferType<ReturnType<typeof getMeterFormSchema>>;
