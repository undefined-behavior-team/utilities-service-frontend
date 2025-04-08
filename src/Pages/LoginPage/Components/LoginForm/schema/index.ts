import * as yup from "yup";

export const getAuthAdminSchema = () =>
  yup.object().shape({
    email: yup
      .string()
      .required()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Некорректный e-mail"
      ),
    password: yup.string().required(),
  });

export const getAuthUserSchema = () =>
  yup.object().shape({
    email: yup
      .string()
      .required()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Некорректный e-mail"
      ),
    code: yup.string().when("$loginStep", {
      is: 2,
      then: (schema) => schema.required("Code is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
  });
