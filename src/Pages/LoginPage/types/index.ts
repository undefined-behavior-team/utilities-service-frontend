import { InferType } from "yup";
import {
  getAuthAdminSchema,
  getAuthUserSchema,
} from "../Components/LoginForm/schema";

export type LoginFormAdminValues = InferType<
  ReturnType<typeof getAuthAdminSchema>
>;

export type LoginFormUserValues = InferType<
  ReturnType<typeof getAuthUserSchema>
>;
