import styles from './card.module.css';
import { Link } from 'react-router-dom';
import Button from '../atoms/Button';
import CounterButton from '../atoms/CounterButton';
import { ReactComponent as CartPlus } from '../../assets/icons/cart_icon_plus.svg';
import { useAppDispatch, useAppSelector } from '../../store';
import { useEffect, useState } from 'react';
import {
  addProductToCart,
  removeProductFromCart,
  updateProductCount,
} from '../../store/slices/CartSlice';

type CardProps = {
  title: string;
  category: number;
  image: string;
  price: string;
  // inCart?: boolean;
  id: string;
  weight?: number;
  units: string;
};

const Card = ({ title, category, image, price, id, weight, units }: CardProps) => {
  const categoriesFromStore = useAppSelector((state) => state.categories);
  const count = useAppSelector((state) => {
    const product = state.cart.find((product) => product.id?.toString() === id);
    return product ? product.count : 0;
  });
  const cartProducts = useAppSelector((state) => state.cart);
  const [isCategory, setCategory] = useState('');
  const [inCart, setInCart] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (categoriesFromStore) {
      const categoryFromId = categoriesFromStore.find((categoryObj) => categoryObj.id === category);
      if (categoryFromId?.title) setCategory(categoryFromId?.title);
    }
  }, [categoriesFromStore, category]);

  useEffect(() => {
    const productInCart = cartProducts.find((product) => product.id?.toString() === id);
    setInCart(!!productInCart);
  }, [cartProducts, id]);

  const handleAddToCart = () => {
    dispatch(addProductToCart({ id, count: weight }));
    setInCart(true);
  };

  const handleUpdateCount = (newCount: number) => {
    if (newCount <= 0) {
      dispatch(removeProductFromCart(id));
      setInCart(false);
    } else {
      dispatch(updateProductCount({ id, count: newCount }));
    }
  };

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
            <CounterButton onCountChange={handleUpdateCount} text={units} weight={weight ?? 1} />
          ) : (
            <Button
              hasIcon={true}
              icon={<CartPlus className={styles.icon} />}
              isPrimary={true}
              text={price}
              onClick={handleAddToCart}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
