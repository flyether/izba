import styles from './ordinaring-viewer.module.css';
import stylesProfile from '../../pages/Profile/profile.module.css';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash_icon.svg';
import Button from '../atoms/Button';
import CartItem from '../CartItem';
import GoodImage from '../../assets/img/good_image.png';
import { useAppDispatch, useAppSelector } from '../../store';
import { OrdersRequest, ProductType } from '../../store/storeInterfaces';
import { v4 } from 'uuid';
import { removeCart } from '../../store/slices/CartSlice';
import { setTotalInHeader, setTotalWight } from '../../store/slices/GeneralConditionsSlice';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import { EMAIL_REGEX } from '../../models/constants';
import { AuthorizationUserAPI } from '../../store/services/UserService';
import { ProductsAPI } from '../../store/services/ProductsService';
/*mock items */

const OrderingViewer = () => {
  const [orderPost, { isSuccess, isError }] = ProductsAPI.useOrderPostMutation();
  const cartProducts = useAppSelector((state) => state.cart);
  const { total, totalWight, order_products } = useAppSelector((state) => state.generalConditions);
  const user = useAppSelector((state) => state.user);
  const { token } = useAppSelector((state) => state.authorization);
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [userId, setUserId] = useState('');
  const [commentInput, setComment] = useState('');
  const [addressInput, setAddress] = useState('');
  const [selectedOption, setSelectedOption] = useState(true);
  const [isDisabledButton, setDisabledButton] = useState(true);

  const navigate = useNavigate();
  const {
    register,
    trigger,
    clearErrors,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });

  useEffect(() => {
    if (isSuccess) navigate('/success-pay', { replace: true });
    if (isError) navigate('/fail-pay', { replace: true });
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (user.name) setNameInput(user.name);
    if (user.phone) setPhoneInput(user.phone);
    if (user.email) setEmailInput(user.email);
    if (user.id) setUserId(user.id);
  }, [user.email, user.id, user.name, user.phone]);

  useEffect(() => {
    const hasErrors = Object.keys(errors).length > 0;
    if (
      !hasErrors &&
      nameInput.trim() &&
      phoneInput &&
      emailInput &&
      (addressInput || !selectedOption)
    )
      setDisabledButton(false);
    else setDisabledButton(true);
  }, [nameInput, errors, selectedOption, phoneInput, emailInput, addressInput]);

  const submitForm = async () => {
    const userRegData: OrdersRequest = {
      user_id: userId,
      order_products: order_products,
      name: nameInput,
      comment: commentInput,
      phone: phoneInput,
      email: emailInput,
      address: addressInput,
      delivery: selectedOption,
    };
    orderPost(userRegData);
  };

  return (
    <div className={styles.viewer__wrapper}>
      <div className={styles.viewer__header}>
        <p className={styles.header__text}>Ваши контакты</p>
      </div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className={styles.viewer__content}>
          <div className={styles.column}>
            <div className={styles.row}>
              <div className={stylesProfile.profile__personal}>
                <div className={stylesProfile.personal__section}>
                  <input
                    type="text"
                    {...register('name', {
                      minLength: 2,
                      required: 'Поле не может быть пустым',
                    })}
                    placeholder="Имя"
                    className={`${styles.section__input} ${errors.name ? styles.inputError : ''}`}
                    onChange={(evt) => setNameInput(evt.target.value)}
                    value={nameInput}
                    onInput={() => {
                      clearErrors('name');
                    }}
                  />
                  <input
                    type="email"
                    value={emailInput}
                    {...register('email', {
                      minLength: 4,
                      pattern: EMAIL_REGEX,
                      required: 'Поле не может быть пустым',
                    })}
                    placeholder="E-mail"
                    className={`${styles.section__input} ${errors.email ? styles.inputError : ''}`}
                    onChange={(evt) => setEmailInput(evt.target.value)}
                    onInput={() => {
                      clearErrors('email');
                    }}
                  />
                  <input
                    type="tel"
                    {...register('phone', {
                      minLength: 9,
                      required: 'Поле не может быть пустым',
                    })}
                    placeholder="Контактный телефон"
                    className={`${styles.section__input} ${errors.phone ? styles.inputError : ''}`}
                    onChange={(evt) => setPhoneInput(evt.target.value)}
                    value={phoneInput}
                    onInput={() => {
                      clearErrors('phone');
                    }}
                  />
                </div>
              </div>
              <div className={styles.total__top}>
                <textarea
                  className={styles.textarea}
                  placeholder="Комментарий к заказу"
                  onChange={(evt) => setComment(evt.target.value)}
                />
              </div>
            </div>
            <div className={styles.formWithCheckBox}>
              <p className={styles.header__title}>Доставка</p>
              <div className={styles.column}>
                <label className={styles.checkbox__title}>
                  <input
                    className={styles.checkbox}
                    type="radio"
                    {...register('radioOption')}
                    value="delivery"
                    checked={selectedOption === true}
                    onChange={() => setSelectedOption(true)}
                  />
                  До двери
                </label>

                <label className={styles.checkbox__title}>
                  <input
                    className={styles.checkbox}
                    type="radio"
                    {...register('radioOption')}
                    value="pickup"
                    checked={selectedOption === false}
                    onChange={() => setSelectedOption(false)}
                  />
                  Самовывоз
                </label>
              </div>
              <p className={styles.header__title}>Адрес доставки</p>
              <input
                disabled={!selectedOption}
                type="text"
                {...register('address', {
                  minLength: 9,
                  required: 'Поле не может быть пустым',
                })}
                placeholder="Напишите свой адрес"
                className={`${stylesProfile.section__input} ${
                  errors.phone ? styles.inputError : ''
                }`}
                onChange={(evt) => setAddress(evt.target.value)}
                onInput={() => {
                  clearErrors('address');
                }}
              />
            </div>
          </div>
          <div className={styles.cart__total}>
            <div className={styles.total__top}>
              <div className={styles.top__footer}>
                <span className={styles.footer__title}>Доставка</span>
                <p className={styles.footer__sum}>По согласованию</p>
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
              <div className={styles.top__header}>
                <span className={styles.header__title}>Итого</span>
                <p className={styles.header__sum}>
                  {total.toFixed(2)}
                  <span>&#8381;</span>
                </p>
              </div>
            </div>
            <div className={styles.total__divider} />
            <div className={styles.total__bottom}>
              {/* <button type="submit">Оплатиить заказ</button> */}
              <Button
                disabled={isDisabledButton}
                hasIcon={false}
                text="Оплатиить заказ"
                isPrimary={true}
                onClick={submitForm}
                full={true}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderingViewer;
