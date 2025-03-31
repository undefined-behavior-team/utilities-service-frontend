import * as yup from "yup";

export const getUserFormSchema = () =>
  yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    middleName: yup.string().required(),
    phone: yup.string().required(),
    address: yup.object().shape({
      town: yup.string().required(),
      street: yup.string().required(),
      house: yup.string().required(),
      building: yup.string().nullable(),
      apartment: yup.string().required(),
    }),
  });
