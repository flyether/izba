import styles from './catalog-preview.module.css';
import cnBind from 'classnames/bind';
import { useState } from 'react';
import Button from '../atoms/Button';
import { Link } from 'react-router-dom';
import { ReactComponent as CartPlus } from '../../assets/icons/cart_icon_plus.svg';
import { ReactComponent as ShortArrow } from '../../assets/icons/short_arrow.svg';
import { ReactComponent as LongArrow } from '../../assets/icons/long__arrow.svg';

const cx = cnBind.bind(styles);

type CatalogPreviewItemProps = {
  text: string;
  img: string;
  id: string;
  title: string;
};

const CatalogPreviewItem = ({ text, img, id, title }: CatalogPreviewItemProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <li className={styles.catalog_item__wrapper}>
      <div
        className={cx(styles.item__header, { opened: hovered })}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={styles.header__left}>
          <h3 className={styles.left__title}>{title}</h3>
          {hovered && <p className={styles.left__subtitle}>Под заказ 25 дней со дня заказа</p>}
        </div>
        {hovered && (
          <div className={styles.header__right}>
            <Button
              isPrimary={true}
              text={text}
              hasIcon={true}
              icon={<CartPlus className={styles.icon} />}
              onClick={() => {}}
            />
            <Link to={`/catalog/detail-good/${id}`}>
              <p className={styles.right__link}>Подробнее</p>
            </Link>
          </div>
        )}
        <img src={img} className={cx(styles.item__image, { visible: hovered })}></img>
      </div>

      <div className={cx(styles.item__arrow, { long: hovered })}>
        {!hovered ? (
          <ShortArrow className={styles.arrow} />
        ) : (
          <LongArrow className={cx(styles.arrow, { long: hovered })} />
        )}
      </div>
    </li>
  );
};

export default CatalogPreviewItem;
