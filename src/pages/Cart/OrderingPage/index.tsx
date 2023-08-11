import BreadScrumbs from '../../../components/BreadScrumbs';
import CarouselComponent from '../../../components/CarouselComponent';
import OrderingViewer from '../../../components/OrderingViewer';
import styles from './ordering.module.css';
import { useLocation } from 'react-router-dom';

const OrderingPage = () => {
  const location = useLocation();
  return (
    <section className={styles.cart__wrapper}>
      <div className={styles.page__shadow} />
      <div className={styles.cart__container}>
        <BreadScrumbs location={location.pathname} />
        <h2 className={styles.cart__title}>Оформление заказа</h2>
        <OrderingViewer />
        <div className={styles.cart__content}></div>
        <CarouselComponent title="Добавьте к заказу" />
      </div>
    </section>
  );
};

export default OrderingPage;
