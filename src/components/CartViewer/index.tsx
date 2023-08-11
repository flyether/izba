// import styles from './cart-viewer.module.css';
// import { ReactComponent as TrashIcon } from '../../assets/icons/trash_icon.svg';
// import Button from '../atoms/Button';
// import CartItem from '../CartItem';
// import GoodImage from '../../assets/img/good_image.png';
// import { useAppDispatch, useAppSelector } from '../../store';
// import { ProductType } from '../../store/storeInterfaces';
// import { v4 } from 'uuid';
// import { CartState, removeCart } from '../../store/slices/CartSlice';
// import { setTotalInHeader, setTotalWight } from '../../store/slices/GeneralConditionsSlice';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const CartViewer = () => {
//   const cartProducts = useAppSelector((state) => state.cart);
//   const products = useAppSelector((state) => state.products);
//   const dispatch = useAppDispatch();
//   const getProductById = (productId: string | number) => {
//     return products.find((product: ProductType) => product.id === +productId);
//   };
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [totalWight, setTotalWightState] = useState(0);
//   const navigate = useNavigate();
//   const { token } = useAppSelector((state) => state.authorization);
//   const [cartProductsVue, setCartProductsVue] = useState<CartState[]>();
//   const [emptyCart, setEmptyCart] = useState(true);

//   useEffect(() => {
//     if (cartProducts) setCartProductsVue(cartProducts);
//   }, [cartProducts]);

//   useEffect(() => {
//     if (cartProducts.length < 1) setEmptyCart(true);
//     else setEmptyCart(false);
//   }, [cartProducts]);

//   useEffect(() => {
//     if (cartProductsVue) {
//       const totalPriceS = cartProductsVue.reduce((total, item) => {
//         const product = getProductById(item.id ?? 0);
//         if (product) {
//           const productPrice = product.price * (item.count || 1);
//           dispatch(setTotalInHeader(total + productPrice));
//           return total + productPrice;
//         }

//         return total;
//       }, 0);
//       setTotalPrice(totalPriceS);
//       dispatch(setTotalInHeader(totalPriceS));
//       localStorage.setItem('totalKazatskaya', totalPriceS.toString());

//       const totalWightS = cartProductsVue.reduce((total, item) => {
//         const product = getProductById(item.id ?? 0);
//         if (product) {
//           const productWight = (product.weight ?? 1) * (item.count || 1);
//           return total + productWight;
//         }
//         return total;
//       }, 0);
//       setTotalWightState(totalWightS);
//       dispatch(setTotalWight(totalWightS));
//     }
//   }, [cartProducts, cartProductsVue, dispatch, getProductById, setTotalWightState]);

//   const handleRemoveCart = () => {
//     dispatch(removeCart());
//   };

//   return (
//     <div className={styles.viewer__wrapper}>
//       <div className={styles.viewer__header}>
//         <p className={styles.header__text}>Ваши товары</p>
//         <button className={styles.header__right} onClick={handleRemoveCart}>
//           <span className={styles.right__text}>Очистить все</span>
//           <TrashIcon className={styles.right__icon} />
//         </button>
//       </div>
//       <div className={styles.viewer__content}>
//         <ul className={styles.cart__list}>
//           {cartProductsVue &&
//             cartProductsVue.map((item) => {
//               const product = getProductById(item.id ?? 0);
//               if (product) {
//                 return (
//                   <CartItem
//                     key={v4()}
//                     count={item.count ?? 1}
//                     id={product.id}
//                     title={product.title}
//                     image={product.photo?.[0] ?? GoodImage}
//                     amount={product.amount ?? 1}
//                     unit={product.units ?? 'кг'}
//                     price={product.price}
//                   />
//                 );
//               }
//               return null;
//             })}
//         </ul>
//         <div className={styles.cart__total}>
//           <div className={styles.total__top}>
//             <div className={styles.top__header}>
//               <span className={styles.header__title}>Сумма</span>
//               <p className={styles.header__sum}>
//                 {totalPrice.toFixed(2)}
//                 <span>&#8381;</span>
//               </p>
//             </div>
//             <div className={styles.top__footer}>
//               <span className={styles.footer__title}>Всего товаров</span>
//               <p className={styles.footer__sum}>
//                 {cartProducts.length} <span>шт.</span>
//               </p>
//             </div>
//             <div className={styles.top__footer}>
//               <span className={styles.footer__title}>Общий вес</span>
//               <p className={styles.footer__sum}>
//                 {totalWight.toFixed(2)} <span>кг.</span>
//               </p>
//             </div>
//           </div>
//           <div className={styles.total__divider} />
//           <div className={styles.total__bottom}>
//             {token ? (
//               <Button
//                 hasIcon={false}
//                 text="Оформить заказ"
//                 isPrimary={true}
//                 onClick={() => navigate('/ordering', { replace: true })}
//                 full={true}
//               />
//             ) : (
//               <>
//                 {' '}
//                 <Button
//                   hasIcon={false}
//                   text="Продолжить с регистрацией"
//                   isPrimary={true}
//                   onClick={() => navigate('/signup', { replace: true })}
//                   full={true}
//                 />
//                 <Button
//                   hasIcon={false}
//                   text="Продолжить как гость"
//                   isPrimary={false}
//                   onClick={() => navigate('/ordering', { replace: true })}
//                   full={true}
//                 />
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartViewer;

import styles from './cart-viewer.module.css';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash_icon.svg';
import Button from '../atoms/Button';
import CartItem from '../CartItem';
import GoodImage from '../../assets/img/good_image.png';
import emptyCartIco from '../../assets/img/Mask group.png';
import { useAppDispatch, useAppSelector } from '../../store';
import { ProductType, SoppingCart } from '../../store/storeInterfaces';
import { v4 } from 'uuid';
import { removeCart } from '../../store/slices/CartSlice';
import { setTotalInHeader, setTotalWight } from '../../store/slices/GeneralConditionsSlice';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductsAPI } from '../../store/services/ProductsService';
import { AuthorizationUserAPI } from '../../store/services/UserService';

const CartViewer = () => {
  const [shoppingCartPost, { isSuccess }] = ProductsAPI.useShoppingCartPostMutation();
  const user = useAppSelector((state) => state.user);
  const [triggerGetGuestId] = AuthorizationUserAPI.useLazyGetGuestIdQuery();
  const cartProducts = useAppSelector((state) => state.cart);
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const getProductById = (productId: string | number) => {
    return products.find((product: ProductType) => product.id === +productId);
  };
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalWight, setTotalWightState] = useState(0);
  const navigate = useNavigate();
  const { token } = useAppSelector((state) => state.authorization);
  const [emptyCart, setEmptyCart] = useState(true);
  const [userId, setUserId] = useState('');
  useEffect(() => {
    if (cartProducts.length < 1) setEmptyCart(true);
    else setEmptyCart(false);
  }, [cartProducts]);

  useEffect(() => {
    if (!token) triggerGetGuestId();
  }, [token, triggerGetGuestId]);

  useEffect(() => {
    if (user.id) setUserId(user.id);
  }, [user.id]);

  useEffect(() => {
    if (isSuccess) navigate('/ordering', { replace: true });
  }, [isSuccess, navigate]);

  useEffect(() => {
    const totalPriceS = cartProducts.reduce((total, item) => {
      const product = getProductById(item.id ?? 0);
      if (product) {
        const productPrice = product.price * (item.count || 1);
        dispatch(setTotalInHeader(total + productPrice));
        return total + productPrice;
      }

      return total;
    }, 0);
    setTotalPrice(totalPriceS);
    dispatch(setTotalInHeader(totalPriceS));
    localStorage.setItem('totalKazatskaya', totalPriceS.toString());

    const totalWightS = cartProducts.reduce((total, item) => {
      const product = getProductById(item.id ?? 0);
      if (product) {
        const productWight = (product.weight ?? 1) * (item.count || 1);
        return total + productWight;
      }
      return total;
    }, 0);
    setTotalWightState(totalWightS);
    dispatch(setTotalWight(totalWightS));
    localStorage.setItem('totalWightKazatskaya', totalPriceS.toString());
  }, [cartProducts, dispatch, getProductById]);

  const handleRemoveCart = () => {
    dispatch(removeCart());
  };

  const handleClick = () => {
    const cartData: SoppingCart[] = cartProducts.map((cartProduct) => {
      return {
        product: Number(cartProduct.id),
        user_id: userId,
        amount: cartProduct.count,
      };
    });

    shoppingCartPost(cartData);
  };

  return (
    <div className={styles.viewer__wrapper}>
      <div className={styles.viewer__header}>
        <p className={styles.header__text}>Ваши товары</p>
        <button className={styles.header__right} onClick={handleRemoveCart}>
          <span className={styles.right__text}>Очистить все</span>
          <TrashIcon className={styles.right__icon} />
        </button>
      </div>
      <div className={styles.viewer__content}>
        {emptyCart ? (
          <div className={styles.viewer__empty}>
            <img src={emptyCartIco} alt="иконка для пустой карзины" />
            <p>Пока что здесь нет товаров</p>
          </div>
        ) : (
          <ul className={styles.cart__list}>
            {cartProducts.map((item) => {
              const product = getProductById(item.id ?? 0);
              if (product) {
                return (
                  <CartItem
                    key={v4()}
                    count={item.count ?? 1}
                    id={product.id}
                    title={product.title}
                    image={product.photo?.[0] ?? GoodImage}
                    amount={product.amount ?? 1}
                    unit={product.units ?? 'кг'}
                    price={product.price}
                  />
                );
              }
              return null;
            })}
          </ul>
        )}

        <div className={styles.cart__total}>
          <div className={styles.total__top}>
            <div className={styles.top__header}>
              <span className={styles.header__title}>Сумма</span>
              <p className={styles.header__sum}>
                {totalPrice.toFixed(2)}
                <span>&#8381;</span>
              </p>
            </div>
            <div className={styles.top__footer}>
              <span className={styles.footer__title}>Всего товаров</span>
              <p className={styles.footer__sum}>
                {cartProducts.length} <span>шт.</span>
              </p>
            </div>
            <div className={styles.top__footer}>
              <span className={styles.footer__title}>Общий вес</span>
              <p className={styles.footer__sum}>
                {totalWight.toFixed(2)} <span>кг.</span>
              </p>
            </div>
          </div>
          <div className={styles.total__divider} />
          <div className={styles.total__bottom}>
            {token ? (
              <Button
                hasIcon={false}
                text="Оформить заказ"
                disabled={emptyCart}
                isPrimary={true}
                onClick={handleClick}
                full={true}
              />
            ) : (
              <>
                {' '}
                <Button
                  hasIcon={false}
                  text="Продолжить с регистрацией"
                  isPrimary={true}
                  onClick={() => navigate('/signup', { replace: true })}
                  full={true}
                />
                <div className={styles.margin}></div>
                <Button
                  hasIcon={false}
                  text="Продолжить как гость"
                  isPrimary={false}
                  onClick={handleClick}
                  full={true}
                  disabled={emptyCart}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartViewer;
