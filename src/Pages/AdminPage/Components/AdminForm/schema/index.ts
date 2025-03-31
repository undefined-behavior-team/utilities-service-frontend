import * as yup from "yup";

export const getAdminLinkSchema = () =>
  yup.object().shape({
    emailHomeOwner: yup.string().required(),
    emailClient: yup.string().required(),
  });

export const getAdminAddSchema = () =>
  yup.object().shape({
    email: yup.string().required(),
    isAdmin: yup.boolean().default(false).required(),
    name: yup.string().required(),
    password: yup.string().required(),
    address: yup.string().required(),
    phone: yup.string().required(),
  });
