import styles from './step-two.module.css';
import AnimGalleryPreview from '../../../components/AnimGalleryPreview';
import SausageCircle from '../../../components/SausageCircle';

const Step2 = () => {
  return (
    <section className={styles.step_two__wrapper}>
      <div className={styles.step_two__container}>
        <div className={styles.step_two__block}>
          <div className={styles.gallery__preview}>
            <div className={styles.preview__header}>
              <span className={styles.preview__title}>Галерея</span>
            </div>
            <div className={styles.preview__body}>
              <AnimGalleryPreview />
            </div>
          </div>
          <div className={styles.sausage__circle}>
            <SausageCircle />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step2;
