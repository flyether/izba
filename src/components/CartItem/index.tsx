import styles from './cart-item.module.css';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus_icon.svg';
import { ReactComponent as MinusIcon } from '../../assets/icons/minus_icon.svg';
import { ReactComponent as CloseBtn } from '../../assets/icons/rotated_cross.svg';

type CartItemProps = {
  image: string;
  title: string;
  unit: string;
  price: number;
};

const CartItem = ({ image, title, unit, price }: CartItemProps) => {
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
              <MinusIcon className={styles.button__icon} />
            </div>
            <p className={styles.counter__text}>
              1<span>кг</span>
            </p>
            <div className={styles.counter__button}>
              <PlusIcon className={styles.button__icon} />
            </div>
          </div>
          <div className={styles.handlers__sum}>
            <p className={styles.sum__price}>
              <span>{price}</span>
              <span>&#8381;</span>
            </p>
            <p className={styles.sum__weight}>
              <span>25</span>
              <span>{unit}</span>
            </p>
          </div>
        </div>
        <CloseBtn className={styles.close__icon} />
      </div>
    </li>
  );
};

export default CartItem;
