import * as yup from "yup";

const updateUserSchema = yup.object().shape({
  body: yup.object().shape({
    firstName: yup.string(),
    lastName: yup.string(),
    role: yup.string().oneOf(["user", "admin"]),
  }),
});

export default updateUserSchema;
