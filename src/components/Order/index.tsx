import styles from './order.module.css';
import { ReactComponent as ArrowDown } from '../../assets/icons/arr_down.svg';
import { ReactComponent as ArrowUp } from '../../assets/icons/arr_up.svg';
import { useState } from 'react';

const Order = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className={styles.order__wrapper}>
      <div className={styles.order__container}>
        <div className={styles.container__header}>
          <div className={styles.header__left}>
            <div className={styles.left__header}>
              <h3 className={styles.header__number}>Заказ №1</h3>
              <div className={styles.header__data}>
                <span className={styles.data__detail}>23.12.2021</span>
                <span className={styles.data__detail}>2 товара</span>
              </div>
            </div>
            <div className={styles.left__bottom}>
              <span className={styles.bottom__text}>Детали заказа</span>
              {!visible ? (
                <span className={styles.bottom__icon} onClick={() => setVisible(true)}>
                  <ArrowDown className={styles.icon} />
                </span>
              ) : (
                <span className={styles.bottom__icon}>
                  <ArrowUp className={styles.icon} onClick={() => setVisible(false)} />
                </span>
              )}
            </div>
          </div>
          <button className={styles.repeat__button}>Повторить</button>
        </div>
        {visible && (
          <ul className={styles.order__list}>
            <li className={styles.list__item}>
              <span className={styles.item__text}>Колбаски венские</span>
              <span className={styles.item__text}>5 кг</span>
              <span className={styles.item__text}>182 рубля</span>
            </li>
            <li className={styles.list__item}>
              <span className={styles.item__text}>Колбаски венские</span>
              <span className={styles.item__text}>5 кг</span>
              <span className={styles.item__text}>182 рубля</span>
            </li>
            <li className={styles.list__item}>
              <span className={styles.item__text}>Колбаски венские</span>
              <span className={styles.item__text}>5 кг</span>
              <span className={styles.item__text}>182 рубля</span>
            </li>
            <li className={styles.list__item}>
              <span className={styles.item__text}>Колбаски венские</span>
              <span className={styles.item__text}>5 кг</span>
              <span className={styles.item__text}>182 рубля</span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Order;
