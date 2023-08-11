import styles from './counter-button.module.css';
import { ReactComponent as PlusIcon } from '../../../assets/icons/plus_icon.svg';
import { ReactComponent as MinusIcon } from '../../../assets/icons/minus_icon.svg';
import { useEffect, useState } from 'react';

type CounterButtonProps = {
  text: string;
  onCountChange: (newCount: number) => void;
  weight: number;
};

const CounterButton = ({ text, onCountChange, weight }: CounterButtonProps) => {
  const [count, setCount] = useState<number>(+weight);

  const handleIncrement = () => {
    const newCount = count + weight;
    setCount(newCount);
    onCountChange(newCount);
  };

  const handleDecrement = () => {
    const newCount = count - weight;
    setCount(newCount);
    onCountChange(newCount);
  };

  return (
    <div className={styles.button__wrapper}>
      <MinusIcon className={styles.button__icon} onClick={handleDecrement} />
      <span className={styles.button__text}>
        {count.toFixed(1)} {text}
      </span>
      <PlusIcon className={styles.button__icon} onClick={handleIncrement} />
    </div>
  );
};

export default CounterButton;
