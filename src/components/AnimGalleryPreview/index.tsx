import styles from './anim-gallery-prev.module.css';
import GalleryItem from '../../assets/img/gallery_item.png';
import cnBind from 'classnames/bind';
import { ReactComponent as ArrowUp } from '../../assets/icons/arrow_up.svg';
import { ReactComponent as ArrowDown } from '../../assets/icons/arrow_down.svg';

const cx = cnBind.bind(styles);

const goods = [GalleryItem, GalleryItem, GalleryItem];

const AnimGalleryPreview = () => {
  return (
    <div className={styles.preview__container}>
      <div className={styles.preview__viewport}>
        <div className={cx(styles.preview__item, styles.item__prev)}>
          <img src={goods[0]} />
        </div>
        <div className={cx(styles.preview__item, styles.item__view)}>
          <img src={goods[1]} />
        </div>
        <div className={cx(styles.preview__item, styles.item__next)}>
          <img src={goods[2]} />
        </div>
      </div>

      <div className={styles.preview__handler}>
        <ArrowUp className={styles.handler__item} onClick={() => {}} />
        <ArrowDown className={styles.handler__item} onClick={() => {}} />
      </div>
    </div>
  );
};

export default AnimGalleryPreview;
