import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, btnRed }) => {
  const classes = [];

  if (btnRed) {
    classes.push(styles.btnRed);
  }

  return <button className={`${classes.join(' ')}  ${styles.btn}`}>{children}</button>;
};

export default Button;
