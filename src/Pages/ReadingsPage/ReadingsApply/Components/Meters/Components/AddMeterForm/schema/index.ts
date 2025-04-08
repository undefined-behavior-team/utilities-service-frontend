import * as yup from "yup";

export const getMeterFormSchema = () =>
  yup.object().shape({
    name: yup.string().required(),
    data: yup.number().required().max(2147483647, "Некорректное значение"),
  });
