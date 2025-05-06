import React from 'react';
import classNames from 'classnames';
import { ErrorMessage, useField } from 'formik';

import styles from './Input.module.sass';
function Input (props) {
  const [field, meta] = useField(props);
  const inputClassName = classNames(styles.input, {
    [styles.invalid]: meta.error && meta.value,
    [styles.valid]: !meta.error && meta.value,
  });
  return (
    <div className={styles.inputWrapper}>
      <input className={inputClassName} {...field} {...props} />
      <ErrorMessage
        className={styles.error}
        name={field.name}
        component='div'
      />
    </div>
  );
}

export default Input;