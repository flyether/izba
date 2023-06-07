import { Link } from 'react-router-dom';
import styles from './step-one.module.css';
import ButtonImg from '../../../assets/img/video_link.png';
import cn from 'classnames';

const Step1 = () => {
  return (
    <section className={styles.step_one__wrapper}>
      <div className={styles.step_one__container}>
        <div className={styles.step_one__heading}>
          <h1 className={styles.heading__title}>Домашнее копчение мясных деликатесов</h1>
          <div className={styles.heading__link}>
            <Link to="/">
              <img
                src={ButtonImg}
                alt="Кнопка воспроизведения видео"
                aria-label="hidden"
                className={styles.link__img}
              />
            </Link>
            <span className={styles.link__text}>Процесс производства</span>
          </div>
        </div>
        <ul className={styles.infoblock}>
          <li className={styles.infoblock__item}>
            <div className={cn(styles.item__img, styles.item__img_one)} />
            <div className={styles.item__text}>
              <span className={styles.text__top}>с 9:00 до 18:00</span>
              <span className={styles.text__bottom}>В будни</span>
            </div>
          </li>
          <li className={styles.infoblock__item}>
            <div className={cn(styles.item__img, styles.item__img_two)} />
            <div className={styles.item__text}>
              <span className={styles.text__top}>По г. Москва</span>
              <span className={styles.text__bottom}>Доставка 300 руб.</span>
            </div>
          </li>
          <li className={styles.infoblock__item}>
            <div className={cn(styles.item__img, styles.item__img_three)}></div>
            <div className={styles.item__text}>
              <span className={styles.text__top}>+7 (903) 232-12-12</span>
              <span className={styles.text__bottom}>В будни</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Step1;
