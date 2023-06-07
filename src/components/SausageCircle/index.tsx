import styles from './sausage.module.css';
import cnBind from 'classnames/bind';

const cx = cnBind.bind(styles);

const SausageCircle = () => {
  return (
    <div className={styles.sausage__wrapper}>
      <div className={cx(styles.swiper__handler, styles.swiper__handler_up)}></div>
      <div className={styles.sausage__piece}></div>
      <div className={cx(styles.swiper__handler, styles.swiper__handler_down)}></div>
    </div>
  );
};

export default SausageCircle;
