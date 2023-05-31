import React from 'react';
import styles from './Button.module.scss';

const Button = ({ onClick, children, btnRed, btnOrange }) => {
  const classes = [];

  if (btnRed) {
    classes.push(styles.btnRed);
  }

  if (btnOrange) {
    classes.push(styles.btnOrange);
  }

  return (
    <button onClick={onClick} className={`${classes.join(' ')}  ${styles.btn}`}>
      {children}
    </button>
  );
};

export default Button;
