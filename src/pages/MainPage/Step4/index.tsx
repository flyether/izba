import styles from './step-four.module.css';
import cn from 'classnames';

const Step4 = () => {
  return (
    <section className={styles.step_four__wrapper}>
      <div className={styles.step_four__container}>
        <div className={styles.step_four__content}>
          <h3 className={styles.content__title}>Как сделать заказ</h3>
          <div className={styles.content__grid}>
            <div className={styles.step_way_one} />
            <div className={styles.step_way_two} />
            <div className={styles.step_way_three} />
            <div className={cn(styles.grid__item, styles.first__item)}>
              <div className={styles.item__top}>
                <p className={styles.top__number}>01</p>
                <div className={cn(styles.top__image, styles.top__image_first)}>
                  <div className={styles.image__highlight} />
                </div>
              </div>
              <div className={styles.item__bottom}>
                <h3 className={styles.bottom__title}>Оформить заказ</h3>
                <p className={styles.bottom__desc}>Собрать и оплатить корзину можно на сайте</p>
              </div>
            </div>
            <div className={styles.grid__item}>
              <div className={styles.item__top}>
                <p className={styles.top__number}>02</p>
                <div className={cn(styles.top__image, styles.top__image_second)}>
                  <div className={styles.image__highlight} />
                </div>
              </div>
              <div className={styles.item__bottom}>
                <h3 className={styles.bottom__title}>Подтвердить заказ</h3>
                <p className={styles.bottom__desc}>Мы свяжемся с вами для уточнения деталей</p>
              </div>
            </div>
            <div className={cn(styles.grid__item, styles.swinging__item)}>
              <div className={styles.item__top}>
                <p className={styles.top__number}>03</p>
                <div className={cn(styles.top__image, styles.top__image_third)}>
                  <div className={styles.image__highlight} />
                </div>
              </div>
              <div className={styles.item__bottom}>
                <h3 className={styles.bottom__title}>Запускаем в производство</h3>
                <p className={styles.bottom__desc}>Собрать и оплатить корзину можно на сайте</p>
              </div>
            </div>
            <div className={cn(styles.grid__item, styles.swinging__item)}>
              <div className={styles.item__top}>
                <p className={styles.top__number}>04</p>
                <div className={cn(styles.top__image, styles.top__image_third)}>
                  <div className={styles.image__highlight} />
                </div>
              </div>
              <div className={styles.item__bottom}>
                <h3 className={styles.bottom__title}>Отправляем в доставку</h3>
                <p className={styles.bottom__desc}>Собрать и оплатить корзину можно на сайте</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step4;
