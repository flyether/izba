import styles from './profile.module.css';
import BreadScrumbs from '../../components/BreadScrumbs';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button';
import Order from '../../components/Order';
import { useForm, FieldValues } from 'react-hook-form';
import { removeUser, setUserName, setUserPhone, useAppDispatch, useAppSelector } from '../../store';
import { useEffect, useState } from 'react';
import { AuthorizationUserAPI } from '../../store/services/UserService';
import { removeAuthorization } from '../../store/slices/AuthorizationSlice';
import exitPic from '../../assets/img/exit.png';

const Profile = () => {
  const { token } = useAppSelector((state) => state.authorization);
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);
  const location = useLocation();
  const [patchUserMe] = AuthorizationUserAPI.usePatchUserMeMutation();
  const [setPassword] = AuthorizationUserAPI.useSetPasswordMutation();
  const dispatch = useAppDispatch();
  const [passwordOld, setPasswordOld] = useState('');
  const [passwordNew, setPasswordNew] = useState('');
  const [passwordNewRepeat, setPasswordNewRepeat] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const {
    register,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  useEffect(() => {
    if (user.name) setNameInput(user.name);
    if (user.phone) setPhoneInput(user.phone);
  }, [user.name, user.phone]);

  useEffect(() => {
    if (!token) navigate('/', { replace: true });
  }, [token, navigate]);

  const onSubmit = async (data: FieldValues) => {
    const formData = {
      name: data.name || undefined,
      phone: data.phone || undefined,
    };
    patchUserMe(formData).unwrap;
    dispatch(setUserName(data.name));
    dispatch(setUserPhone(data.phone));
  };

  const onSubmitPassword = async (data: FieldValues) => {
    if (data.passwordNew !== data.passwordNewRepeat) {
      setError('passwordNew', { message: 'пароли не совпадают' });
      setError('passwordNewRepeat', { message: 'пароли не совпадают' });
      return;
    }
    const formDataPasswords = {
      current_password: data.passwordOld,
      new_password: data.passwordNew,
      re_new_password: data.passwordNewRepeat,
    };
    setPassword(formDataPasswords).unwrap;
  };

  const handleSignOut = () => {
    navigate('/', { replace: true });
    dispatch(removeUser());
    dispatch(removeAuthorization());
    localStorage.removeItem('totalKazatskaya');
    localStorage.removeItem('cart');
    localStorage.removeItem('tokenKazatskaya');
  };

  return (
    <section className={styles.profile__wrapper}>
      <div className={styles.page__shadow} />
      <div className={styles.profile__container}>
        <BreadScrumbs location={location.pathname} />
        <h2 className={styles.profile__title}>Личный кабинет</h2>
        <div className={styles.profile__personal}>
          <div className={styles.exit__section}>
            <img alt="exit icon" src={exitPic} className={styles.img__exit} />
            <button onClick={handleSignOut} className={styles.repeat__button}>
              Выйти из профиля
            </button>
          </div>

          <form className={styles.personal__section} onSubmit={handleSubmit(onSubmit)}>
            <h3 className={styles.section__title}>Контактные данные</h3>
            <input
              type="text"
              {...register('name')}
              placeholder="Имя"
              className={styles.section__input}
              onChange={(evt) => setNameInput(evt.target.value)}
              value={nameInput}
            />
            <input
              type="email"
              value={user.email}
              placeholder="E-mail"
              className={styles.section__input}
              style={{ pointerEvents: 'none', color: 'grey' }}
            />
            <input
              type="tel"
              {...register('phone')}
              placeholder="Контактный телефон"
              className={styles.section__input}
              onChange={(evt) => setPhoneInput(evt.target.value)}
              value={phoneInput}
            />
            <Button isPrimary={true} text="Сохранить" hasIcon={false} onClick={() => {}} />
          </form>
          <form className={styles.personal__section} onSubmit={handleSubmit(onSubmitPassword)}>
            <h3 className={styles.section__title}>Безопасность</h3>
            <input
              type="password"
              placeholder="Введите текущий пароль"
              className={styles.section__input}
              {...register('passwordOld')}
              onChange={(evt) => setPasswordOld(evt.target.value)}
              value={passwordOld}
            />
            <input
              type="password"
              placeholder="Введите новый пароль"
              className={styles.section__input}
              {...register('passwordNew')}
              onChange={(evt) => setPasswordNew(evt.target.value)}
              value={passwordNew}
            />
            <input
              type="password"
              placeholder="Повторите новый пароль"
              className={styles.section__input}
              {...register('passwordNewRepeat')}
              onChange={(evt) => setPasswordNewRepeat(evt.target.value)}
              value={passwordNewRepeat}
            />
            <div className={styles.button__right}>
              <Button isPrimary={true} text="Сохранить" hasIcon={false} onClick={() => {}} />
            </div>
          </form>
        </div>
        <div className={styles.orders__timeline}>
          <h3 className={styles.section__title}>История заказов</h3>
          <ul className={styles.timeline__list}>
            <Order />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
