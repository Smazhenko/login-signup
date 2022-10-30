import * as Yup from "yup";

const SCHEMA_EMAIL = Yup.string("Must be string")
  .matches(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/, "Invalid email")
  .required("Must be required");

const SCHEMA_PASSWORD = Yup.string("Must be string")
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
    "Invalid password"
  )
  .required("Must be required");

const SCHEMA_NAME = Yup.string("Must be string")
  .matches(/^[A-Z][a-z]{1,16}$/, "Invalid name")
  .required("Must be required");

export const SCHEMA_LOGIN = Yup.object({
  email: SCHEMA_EMAIL,
  pass: SCHEMA_PASSWORD,
});

export const SCHEMA_SIGNUP = Yup.object({
  firstName: SCHEMA_NAME,
  lastName: SCHEMA_NAME,
  displayName: SCHEMA_NAME,
  email: SCHEMA_EMAIL,
  pass: SCHEMA_PASSWORD,
  passConfirm: Yup.string()
    .oneOf([Yup.ref("pass")], "Passwords not equal")
    .required("Must be required"),
  picked: Yup.string()
    .oneOf(["one", "two"], "Wrong id")
    .required("Must be required"),
});
