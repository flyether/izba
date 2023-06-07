import styles from './step-three.module.css';
import Step3Img from '../../../assets/img/img_step3.png';

const Step3 = () => {
  return (
    <section className={styles.step_three__wrapper}>
      <div className={styles.step_three__container}>
        <div className={styles.container__left}>
          <img src={Step3Img} className={styles.left__image} />
        </div>
        <div className={styles.container__right}>
          <h3 className={styles.right__title}>Особенности</h3>
          <ul className={styles.right__content}>
            <li className={styles.content__item}>
              <h4 className={styles.item__title}>25 наименований</h4>
              <span className={styles.item__desc}>Самый высокачественный продукция </span>
            </li>
            <li className={styles.content__item}>
              <h4 className={styles.item__title}>Собственное производство</h4>
              <span className={styles.item__desc}>Мощность 60 кг в сутки</span>
            </li>
            <li className={styles.content__item}>
              <h4 className={styles.item__title}>Подзаказ</h4>
              <span className={styles.item__desc}>Продукция производится именно под вас</span>
            </li>
            <li className={styles.content__item}>
              <h4 className={styles.item__title}>Ветеринарные документы</h4>
              <span className={styles.item__desc}>Полный пакет документов и разрешений</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Step3;
