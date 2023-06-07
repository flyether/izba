import { FC } from 'react';

import styles from './errors.module.css';
export type PropsModalParent = {
  message: string;
  close: () => void;
  closeParent?: () => void;
};
export const ServerError: FC<PropsModalParent> = ({ message, close, closeParent }) => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     close();
  //     if (closeParent) closeParent();
  //   }, 4000);

  //   return () => clearTimeout(timer);
  // }, [close, closeParent]);

  return (
    <div className={styles.container}>
      <span> {message}</span>
      <button
        data-test-id="alert-close"
        className={styles.cross__icon}
        type="button"
        onClick={() => {
          close();
          if (closeParent) closeParent();
        }}
      >
        ✖
      </button>
    </div>
  );
};
