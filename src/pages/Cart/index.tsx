import styles from './cart.module.css';
import BreadScrumbs from '../../components/BreadScrumbs';
import { useLocation } from 'react-router-dom';
import CarouselComponent from '../../components/CarouselComponent';
import CartViewer from '../../components/CartViewer';

const Cart = () => {
  const location = useLocation();
  return (
    <section className={styles.cart__wrapper}>
      <div className={styles.page__shadow} />
      <div className={styles.cart__container}>
        <BreadScrumbs location={location.pathname} />
        <h2 className={styles.cart__title}>Корзина</h2>

        <div className={styles.cart__content}>
          <CartViewer />
        </div>
        <CarouselComponent title="Добавьте к заказу" />
      </div>
    </section>
  );
};

export default Cart;
