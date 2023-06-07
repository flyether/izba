import styles from './select.module.css';
import { useEffect, useState } from 'react';
import { SELECT_OPTIONS } from '../../../models/constants';
import { ProductsAPI } from '../../../store/services/ProductsService';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setCategoriesValue } from '../../../store/slices/GeneralConditionsSlice';

const Select = () => {
  const [value, setValue] = useState<string>('Категории');
  const [categories, setCategories] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  ProductsAPI.useGetCategoriesQuery();
  const dispatch = useAppDispatch();
  const categoriesFromStore = useAppSelector((state) => state.categories);

  useEffect(() => {
    if (categoriesFromStore) setCategories(categoriesFromStore.map((category) => category.title));
  }, [categoriesFromStore]);

  const handleClose = (str: string) => {
    setValue(str);
    setOpen(false);
    const idCategories = categoriesFromStore.find((category) => category.title === str);

    dispatch(setCategoriesValue(idCategories?.id));
  };

  return (
    <div className={styles.select__wrapper}>
      <div className={styles.select__container}>
        <div className={styles.select__value}>
          <span className={styles.value__text}>{value}</span>
          <div className={styles.select__caret} onClick={() => setOpen(true)} />
        </div>
        {open && (
          <ul className={styles.select__options}>
            {categories.map((option: string) => (
              <li
                key={option}
                className={styles.select__option}
                onClick={() => handleClose(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Select;
