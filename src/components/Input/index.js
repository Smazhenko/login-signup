import { Field, ErrorMessage } from "formik";
import classNames from "classnames";
import styles from "./style.module.scss";

const Input = (props) => {
  const { name, ...restProps } = props;
  return (
    <div className={restProps.elementstyle}>
      <Field name={name}>
        {({ field, form, meta }) => {
          const borderStyle = classNames(styles.inpSize, {
            [styles.border]: meta.touched && meta.error,
          });

          return <input {...field} {...restProps} className={borderStyle} />;
        }}
      </Field>

      <ErrorMessage className={styles.error} component="span" name={name} />
    </div>
  );
};

export default Input;
