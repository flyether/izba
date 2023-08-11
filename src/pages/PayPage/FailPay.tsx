import styles from './pay.module.css';

const FailPay = () => {
  return (
    <section className={styles.good__wrapper}>
      <div className={styles.good__container}>
        <h1 className={styles.good__title}>Ошибка оплаты</h1>
      </div>
    </section>
  );
};

export default FailPay;
