import { ReactElement, SyntheticEvent } from 'react';
import cnBind from 'classnames/bind';
import styles from './button.module.css';

const cx = cnBind.bind(styles);

type ButtonProps = {
  text?: string;
  hasIcon: boolean;
  iconOnly?: boolean;
  icon?: ReactElement;
  isPrimary: boolean;
  disabled?: boolean;
  onClick: (event: SyntheticEvent) => void;
  full?: boolean;
};

const Button = ({
  text,
  disabled,
  hasIcon,
  icon,
  iconOnly,
  isPrimary,
  onClick,
  full,
}: ButtonProps) => {
  return (
    <button
      className={cx(styles.button, {
        button__primary: isPrimary,
        button__secondary: !isPrimary,
        full: full,
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {hasIcon && icon}
      {!iconOnly && <span className={styles.button__text}>{text}</span>}
    </button>
  );
};

export default Button;
