import styles from './userinfo.module.css';
import { ReactComponent as SearchIcon } from '../../assets/icons/magnifer.svg';
import { ReactComponent as ChiefIcon } from '../../assets/icons/chief_cap.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart_icon_default.svg';
import { ReactComponent as GuestIcon } from '../../assets/icons/guest_icon.svg';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store';
import { useState, useEffect } from 'react';

/*mock cart total */
// const total = 0;

/*mock auth */
const auth = false;

type UserInfoProps = {
  setIsVisible: (arg0: boolean) => void;
};

const UserInfo = ({ setIsVisible }: UserInfoProps) => {
  const { token } = useAppSelector((state) => state.authorization);
  const { name } = useAppSelector((state) => state.user);
  const { total } = useAppSelector((state) => state.generalConditions);
  // const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {
  //   if (total) setTotalPrice(total);
  // }, [total]);

  return (
    <div className={styles.userinfo__wrapper}>
      <SearchIcon onClick={() => setIsVisible(true)} />
      {token ? (
        <Link to="/profile">
          <div className={styles.userinfo__data}>
            <div className={styles.user}>
              <span className={styles.user__name}>{name ?? 'покупатель'}</span>
              <ChiefIcon />
            </div>
          </div>
        </Link>
      ) : (
        <Link to={'/signup'}>
          <div className={styles.guest__section}>
            <span className={styles.guest__text}>Гость</span>
            <div className={styles.guest__icon}>
              <GuestIcon className={styles.guest__image} />
            </div>
          </div>
        </Link>
      )}
      <Link to="/cart">
        <div className={styles.cart__info}>
          <CartIcon />
          <p className={styles.cart__text}>
            {total !== 0 && (
              <span>
                {total.toFixed(2)}
                <span>&#8381;</span>
              </span>
            )}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default UserInfo;
