import styles from './counter-button.module.css';
import { ReactComponent as PlusIcon } from '../../../assets/icons/plus_icon.svg';
import { ReactComponent as MinusIcon } from '../../../assets/icons/minus_icon.svg';
import { useState } from 'react';

type CounterButtonProps = {
  text: string;
};

const CounterButton = ({ text }: CounterButtonProps) => {
  const [count, setCount] = useState<number>(+text);

  return (
    <div className={styles.button__wrapper}>
      <MinusIcon className={styles.button__icon} onClick={() => setCount(count - 1)} />
      <span className={styles.button__text}>{count} кг.</span>
      <PlusIcon className={styles.button__icon} onClick={() => setCount(count + 1)} />
    </div>
  );
};

export default CounterButton;
