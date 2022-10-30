import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { SCHEMA_SIGNUP } from "../../utils/validateSchemas";
import styles from "./style.module.scss";
import Input from "../Input";

const initialState = {
  firstName: "",
  lastName: "",
  displayName: "",
  email: "",
  pass: "",
  passConfirm: "",
  picked: "",
};

function SignUp(props) {
  const handleSubmitToFormik = (values, actions) => {
    actions.resetForm();
    console.log(values);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.header}>CREATE AN ACCOUNT</h2>
        <h3 className={styles.subHeader}>
          We always keep your name and email address private.
        </h3>
        <Formik
          validationSchema={SCHEMA_SIGNUP}
          onSubmit={handleSubmitToFormik}
          initialValues={initialState}
        >
          {(formikProps) => {
            return (
              <Form className={styles.form}>
                <Input
                  elementstyle={styles.widthInput}
                  name="firstName"
                  placeholder="First Name"
                />
                <Input
                  elementstyle={styles.widthInput}
                  name="lastName"
                  placeholder="Last Name"
                />
                <Input
                  elementstyle={styles.widthInput}
                  name="displayName"
                  placeholder="Display Name"
                />
                <Input
                  elementstyle={styles.widthInput}
                  name="email"
                  type="email"
                  placeholder="Email address"
                />
                <Input
                  elementstyle={styles.widthInput}
                  name="pass"
                  type="password"
                  placeholder="Password"
                />
                <Input
                  elementstyle={styles.widthInput}
                  name="passConfirm"
                  type="password"
                  placeholder="Password Confirmation"
                />
                <div className={styles.checkbox}>
                  <Field name='picked' type='radio' value='one'/>
                  <span className={styles.checkText}>Join As a Buyer</span>
                  <p className={styles.secondText}>
                    I am looking for a Name, Logo or Tagline for my business,
                    brand or product.
                  </p>
                  <ErrorMessage
                    className={styles.error}
                    name="picked"
                    component="span"
                  />
                </div>
                <div className={styles.checkbox}>
                  <Field name='picked' type='radio' value='two'/>
                  <span className={styles.checkText}>
                    Join As a Creative or Marketplace Seller
                  </span>
                  <p className={styles.secondText}>
                    I plan to submit name ideas, Logo designs or sell names in
                    Domain Marketplace.
                  </p>
                  <ErrorMessage
                    className={styles.error}
                    name="picked"
                    component="span"
                  />
                </div>
                <input
                  type="submit"
                  className={styles.btn}
                  value="CREATE ACCOUNT"
                />
              </Form>
            );
          }}
        </Formik>
      </div>
    </section>
  );
}

export default SignUp;
