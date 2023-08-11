import { useAppDispatch } from '../../store';
import { removeCart } from '../../store/slices/CartSlice';
import styles from './pay.module.css';

const SuccessPay = () => {
  const dispatch = useAppDispatch();
  dispatch(removeCart());
  return (
    <section className={styles.good__wrapper}>
      <div className={styles.good__container}>
        <h1 className={styles.good__title}>Успешная оплата</h1>
      </div>
    </section>
  );
};

export default SuccessPay;
