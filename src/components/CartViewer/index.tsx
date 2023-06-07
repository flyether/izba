import styles from './cart-viewer.module.css';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash_icon.svg';
import Button from '../atoms/Button';
import CartItem from '../CartItem';
import GoodImage from '../../assets/img/good_image.png';

/*mock items */

const cartItems = [
  {
    id: 1,
    title: 'Колбаски куриные очень вкусные название',
    image: GoodImage,
    price: 158,
    unit: 'кг',
  },
  { id: 2, title: 'Коробка молока', image: GoodImage, price: 158, unit: 'шт' },
];

const CartViewer = () => {
  return (
    <div className={styles.viewer__wrapper}>
      <div className={styles.viewer__header}>
        <p className={styles.header__text}>Ваши товары</p>
        <div className={styles.header__right}>
          <span className={styles.right__text}>Очистить все</span>
          <TrashIcon className={styles.right__icon} />
        </div>
      </div>
      <div className={styles.viewer__content}>
        <ul className={styles.cart__list}>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              title={item.title}
              image={item.image}
              unit={item.unit}
              price={item.price}
            />
          ))}
        </ul>
        <div className={styles.cart__total}>
          <div className={styles.total__top}>
            <div className={styles.top__header}>
              <span className={styles.header__title}>Сумма</span>
              <p className={styles.header__sum}>
                52 023 <span>&#8381;</span>
              </p>
            </div>
            <div className={styles.top__footer}>
              <span className={styles.footer__title}>Всего товаров</span>
              <p className={styles.footer__sum}>
                24 <span>шт.</span>
              </p>
            </div>
          </div>
          <div className={styles.total__divider} />
          <div className={styles.total__bottom}>
            <Button
              hasIcon={false}
              text="Оформить заказ"
              isPrimary={true}
              onClick={() => {}}
              full={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartViewer;
