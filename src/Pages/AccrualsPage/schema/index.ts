import * as yup from "yup";

export const getAccrualsFormSchema = () =>
  yup.object().shape({
    paymentMethod: yup.string().required(),
    amount: yup.number().required().max(2147483647, "Некорректное значение"),
    status: yup.string().required(),
  });
