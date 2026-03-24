import { DialogHTMLAttributes, ReactNode } from 'react';

import styles from './Modal.module.scss';

interface ModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
  className?: string;
  children: ReactNode;
}

export const Modal = (props: ModalProps) => {
  const { children } = props;

  return (
    <div className={styles.root}>
      <h1>Modal</h1>

      {children}
    </div>
  );
};
