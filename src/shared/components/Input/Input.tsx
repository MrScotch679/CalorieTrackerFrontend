import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = (props: InputProps) => {
  const { className, ...rest } = props;

  return <input className={clsx(styles.root, className)} {...rest} />;
};
