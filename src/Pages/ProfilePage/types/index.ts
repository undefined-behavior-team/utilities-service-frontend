import { InferType } from "yup";
import { getUserFormSchema } from "../Components/ProfileForm/schema/schema";

export type ProfileFormValues = InferType<ReturnType<typeof getUserFormSchema>>;
