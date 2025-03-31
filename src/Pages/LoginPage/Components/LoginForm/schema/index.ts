import * as yup from "yup";

export const getAuthAdminSchema = () =>
  yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });

export const getAuthUserSchema = () =>
  yup.object().shape({
    email: yup.string().required(),
    code: yup.string().when("$loginStep", {
      is: 2,
      then: (schema) => schema.required("Code is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
  });
