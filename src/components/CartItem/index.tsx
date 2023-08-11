import styles from './cart-item.module.css';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus_icon.svg';
import { ReactComponent as MinusIcon } from '../../assets/icons/minus_icon.svg';
import { ReactComponent as CloseBtn } from '../../assets/icons/rotated_cross.svg';
import { useState } from 'react';
import { useAppDispatch } from '../../store';
import { removeProductFromCart, updateProductCount } from '../../store/slices/CartSlice';

type CartItemProps = {
  image: string;
  title: string;
  unit: string;
  price: number;
  count: number;
  amount: number;
  id: number;
};

const CartItem = ({ image, title, unit, price, count, amount, id }: CartItemProps) => {
  const [isCount, setCount] = useState<number>(count);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    const newCount = isCount + amount;
    setCount(newCount);

    dispatch(updateProductCount({ id: id.toString(), count: newCount }));
  };

  const handleDecrement = () => {
    const newCount = isCount - amount;
    setCount(newCount);
    console.log(newCount);
    if (newCount < amount) {
      setCount(0);
      // dispatch(removeProductFromCart(id.toString()));
    } else {
      dispatch(updateProductCount({ id: id.toString(), count: newCount }));
    }
  };

  const handleClose = () => {
    dispatch(removeProductFromCart(id.toString()));
  };

  return (
    <li className={styles.item__wrapper}>
      <div className={styles.item__left}>
        <img src={image} alt="Изображение товара" className={styles.item__image} />
        <p className={styles.item__title}>{title}</p>
      </div>
      <div className={styles.item__right}>
        <div className={styles.right__handlers}>
          <div className={styles.handlers__counter}>
            <div className={styles.counter__button}>
              <MinusIcon className={styles.button__icon} onClick={handleDecrement} />
            </div>
            <p className={styles.counter__text}>
              {amount} <span>{unit}</span>
            </p>
            <div className={styles.counter__button}>
              <PlusIcon className={styles.button__icon} onClick={handleIncrement} />
            </div>
          </div>
          <div className={styles.handlers__sum}>
            <p className={styles.sum__price}>
              <span>{(price * isCount).toFixed(2)}</span>
              <span>&#8381;</span>
            </p>
            <p className={styles.sum__weight}>
              <span>{isCount.toFixed(1)}</span>
              <span>{unit}</span>
            </p>
          </div>
        </div>
        <CloseBtn className={styles.close__icon} onClick={handleClose} />
      </div>
    </li>
  );
};

export default CartItem;
