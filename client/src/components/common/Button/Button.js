import React from 'react';
import styles from './Button.module.scss';

const Button = ({ onClick, children, variant = '' }) => (
  <button onClick={onClick} className={`${styles.btn} ${styles[variant]}`}>
    {children}
  </button>
);

export default Button;
