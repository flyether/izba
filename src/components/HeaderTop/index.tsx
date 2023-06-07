import styles from './HeaderTop.module.css';
import { PHONE_NUMBER } from '../../models/constants';

const HeaderTop = () => {
  return (
    <div className={styles.headertop__wrapper}>
      <div className={styles.headertop__container}>
        <p className={styles.headertop__element}>Москва</p>
        <p className={styles.headertop__element}>
          <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
        </p>
      </div>
    </div>
  );
};

export default HeaderTop;
