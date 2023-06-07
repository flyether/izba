import styles from './form.module.css';
import Button from '../atoms/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm, FieldValues } from 'react-hook-form';
import { FORM_TITLES, EMAIL_REGEX } from '../../models/constants';
import cn from 'classnames/bind';
import { useEffect, useState } from 'react';
import { AuthorizationUserAPI } from '../../store/services/UserService';
import { RegData } from '../../store/storeInterfaces';
import { useAppSelector } from '../../store';

const cx = cn.bind(styles);

interface IFormData {
  email: string;
  password?: string;
}

type FormProps = {
  title: string;
};

const Form = ({ title }: FormProps) => {
  const { token } = useAppSelector((state) => state.authorization);
  const navigate = useNavigate();
  const [regUser, { isSuccess }] = AuthorizationUserAPI.useRegUserMutation();
  const [authorizationUser, { isSuccess: isSuccessAuthorizationUser }] =
    AuthorizationUserAPI.useAuthorizationUserMutation();
  const [forgotPassword, { isSuccess: isSuccessForgotPassword }] =
    AuthorizationUserAPI.useForgotPasswordMutation();
  const [isSuccessReg, setSuccessReg] = useState(false);
  const [isForgotPasswordOk, setForgotPasswordOk] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    register,
    clearErrors,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormData>();

  useEffect(() => {
    if (isSuccessForgotPassword) setForgotPasswordOk(true);
  }, [isSuccessForgotPassword]);

  useEffect(() => {
    if (token) navigate('/', { replace: true });
  }, [token, navigate]);

  useEffect(() => {
    if (isSuccess) setSuccessReg(true);
  }, [isSuccess]);

  useEffect(() => {
    if (isSuccessAuthorizationUser) navigate('/', { replace: true });
  }, [isSuccessAuthorizationUser, navigate]);

  const onSubmit = async (data: FieldValues) => {
    const formData: RegData = {
      email: data.email,
      password: data.password,
      name: data.name || undefined,
    };
    if (title === 'Регистрация') regUser(formData).unwrap;

    if (title === 'Вход') authorizationUser(formData).unwrap;
    if (title === 'Забыли пароль?') forgotPassword({ email: data.email }).unwrap;
  };

  if (isSuccessReg || isForgotPasswordOk)
    return <div style={{ color: 'white', fontSize: '26px' }}> вам на мыло пришла ссылка</div>;

  return (
    <form className={styles.form__container} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={styles.form__title}>{title}</h3>
      <div className={styles.input__group}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          {...register('email', {
            required: 'Поле должно быть заполнено',
            pattern: {
              value: EMAIL_REGEX,
              message: 'Введите корректный адрес эл. почты',
            },
          })}
          onInput={() => clearErrors('email')}
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
          className={cx(styles.form__input, { error: errors?.email })}
        />
        <span className={cx(styles.error__message, { visible: !isValid })}>
          {errors && errors.email?.message}
        </span>
      </div>
      {title !== 'Забыли пароль?' && (
        <div className={styles.input__group}>
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: 'Поле должно быть заполнено',
              minLength: {
                value: 8,
                message: 'Пароль должен состоять минимум из 8 символов',
              },
            })}
            onInput={() => clearErrors('password')}
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            className={cx(styles.form__input, { error: errors?.password })}
          />
          <span className={cx(styles.error__message, { visible: !isValid })}>
            {errors && errors?.password?.message}
          </span>
          {!errors?.password && (
            <NavLink
              to="/recovery-pass"
              className={cx(styles.advantage, styles.advantage__link, styles.forgot_pass__link)}
            >
              Забыли пароль?
            </NavLink>
          )}
        </div>
      )}
      <div className={styles.form__button}>
        <Button
          full={true}
          hasIcon={false}
          isPrimary={false}
          onClick={() => {}}
          text={FORM_TITLES[title as keyof typeof FORM_TITLES]}
        />
        {title === 'Забыли пароль?' && (
          <div className={styles.back__button}>
            <NavLink to="/signup" className={styles.back__link}>
              Назад к регистрации
            </NavLink>
          </div>
        )}
      </div>
      {title === 'Регистрация' && (
        <p className={styles.advantage}>
          Уже есть аккаунт?{' '}
          <NavLink to="/login" className={styles.advantage__link}>
            Войти
          </NavLink>
        </p>
      )}
      {title !== 'Вход' && (
        <div className={styles.advantage}>
          <pre>
            Регистрируясь вы соглашаетесь {'\n'} с{' '}
            <NavLink to="/confidentiality-policy" className={styles.advantage__link}>
              политикой конфиденциальности
            </NavLink>
          </pre>
        </div>
      )}

      {title === 'Вход' && (
        <p className={styles.advantage}>
          Нет аккаунта?{' '}
          <NavLink to="/signup" className={styles.advantage__link}>
            Зарегестрироваться
          </NavLink>
        </p>
      )}
    </form>
  );
};

export default Form;
