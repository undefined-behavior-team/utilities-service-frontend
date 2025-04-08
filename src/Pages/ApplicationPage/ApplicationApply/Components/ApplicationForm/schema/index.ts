import { getUserFormSchema } from "@/Pages/ProfilePage/Components/ProfileForm/schema/schema";
import * as yup from "yup";

export const getApplicationSchema = () =>
  yup.object().shape({
    user: getUserFormSchema(),
    application: yup.object().shape({
      applicationType: yup.number().default(0).max(4, "Некорректное значение"),
      name: yup.string().required(),
      description: yup.string().required(),
    }),
  });
