export const PHONE_NUMBER = '+7 (929) 520-63-77';

export const routesNames = {
  '': 'Главная',
  catalog: 'Каталог',
  'detail-good': 'Название товара',
  cart: 'Корзина',
  ordering: 'Оформление заказа',
  profile: 'Личный кабинет',
  admin: 'панель администрирования',
  'confidentiality-policy': 'Политика конфиденциальности',
};

export const SELECT_OPTIONS = ['Свинина', 'Говядина', 'Лютая дичь'];

export const FORM_TITLES = {
  Регистрация: 'Зарегестрироваться',
  'Забыли пароль?': 'Восстановить',
  Вход: 'Войти',
};

export const FORM_MAPPER = {
  '/login': 'Вход',
  '/recovery-pass': 'Забыли пароль?',
  '/signup': 'Регистрация',
  // '/reset-pass': 'Введите новый пароль',
};

export const EMAIL_REGEX = /^[\w.%+-]+@[\w.-]+\.[a-zA-Zа-яА-Я]{2,}$/;
