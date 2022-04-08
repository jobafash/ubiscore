import React from "react";
import styles from "./input.module.scss";
import { useField } from "formik";

const Input = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div className={styles.inputSection}>
      <label htmlFor={props?.id || props?.name} className={styles.inputLabel}>
        {label}
      </label>
      <input className={styles.textInput} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Input;
