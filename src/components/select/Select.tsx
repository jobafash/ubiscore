import React from "react";
import { useField } from "formik";
import styles from "./Select.module.scss";

const Select = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <div className={styles.inputSection}>
      <label htmlFor={props.id || props.name} className={styles.inputLabel}>
        {label}
      </label>
      <select className={styles.textInput} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Select;
