import styles from './card.module.css';
import { Link } from 'react-router-dom';
import Button from '../atoms/Button';
import CounterButton from '../atoms/CounterButton';
import { ReactComponent as CartPlus } from '../../assets/icons/cart_icon_plus.svg';
import { useAppSelector } from '../../store';
import { useEffect, useState } from 'react';

// type CardProps = {
//   title: string;
//   category: string;
//   image: string;
//   price: string;
//   inCart?: boolean;
// };
type CardProps = {
  title: string;
  category: number;
  image: string;
  price: string;
  inCart?: boolean;
  id: string;
};

const Card = ({ title, category, image, price, inCart, id }: CardProps) => {
  const categoriesFromStore = useAppSelector((state) => state.categories);
  const [isCategory, setCategory] = useState('');

  useEffect(() => {
    if (categoriesFromStore) {
      const categoryFromId = categoriesFromStore.find((categoryObj) => categoryObj.id === category);
      if (categoryFromId?.title) setCategory(categoryFromId?.title);
    }
  }, [categoriesFromStore, category]);

  return (
    <div className={styles.card__wrapper}>
      <h3 className={styles.card__title}>{title}</h3>
      <span className={styles.card__category}>Категория: {isCategory}</span>
      <img src={image} alt="Изображение товара" className={styles.card__image} />
      <div className={styles.card__footer}>
        <div className={styles.footer__left}>
          <Link to={`detail-good/${id}`}>
            <span className={styles.left__link}>Подробнее</span>
          </Link>
        </div>
        <div className={styles.footer__right}>
          {inCart ? (
            <CounterButton text="1" />
          ) : (
            <Button
              hasIcon={true}
              icon={<CartPlus className={styles.icon} />}
              isPrimary={true}
              text={price}
              onClick={() => {}}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
