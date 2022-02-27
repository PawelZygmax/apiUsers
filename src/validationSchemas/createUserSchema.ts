import * as yup from "yup";

const createUserSchema = yup.object().shape({
  body: yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    role: yup.string().oneOf(["user", "admin"]).required(),
  }),
});

export default createUserSchema;
