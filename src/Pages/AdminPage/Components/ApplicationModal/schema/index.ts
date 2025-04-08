import * as yup from "yup";

export const getSelectedApplicationSchema = () =>
  yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    status: yup.number().default(0).max(4, "Некорректное значение"),
  });
