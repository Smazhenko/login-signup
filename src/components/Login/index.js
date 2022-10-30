import React from "react";
import { Formik, Form} from "formik";
import {SCHEMA_LOGIN} from "../../utils/validateSchemas";
import Input from "../Input";
import styles from "./style.module.scss";

const initialState = {
  email: "",
  pass: "",
};

function Login(props) {
  const handleSubmitToFormik = (values, actions) => {
    actions.resetForm();
    console.log(values);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.header}>LOGIN TO YOUR ACCOUNT</h2>
        <Formik
          validationSchema={SCHEMA_LOGIN}
          onSubmit={handleSubmitToFormik}
          initialValues={initialState}
        >
          {(formikProps) => {
            return (
              <Form className={styles.form}>
               <Input elementstyle={styles.widthInput} name="email" type="email" placeholder="Email address" />
                <Input elementstyle={styles.widthInput} name="pass" type="password" placeholder="Password" />
                <input type="submit" className={styles.btn} value="LOGIN" />
              </Form>
            );
          }}
        </Formik>
      </div>
    </section>
  );
}

export default Login;
