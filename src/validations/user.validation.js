import * as yup from "yup";

export const userValidation = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email(),
  password: yup.string().required("<PASSWORD>").min(6),
  phone: yup.string().nullable(true),
});
