import styles from './search-input.module.css';
import { ReactComponent as CloseBtn } from '../../assets/icons/rotated_cross.svg';
import cnBind from 'classnames/bind';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { setSearchValue } from '../../store/slices/GeneralConditionsSlice';
import { ProductType } from '../../store/storeInterfaces';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

const cx = cnBind.bind(styles);

type SearchInputProps = {
  isVisible: boolean;
  handleClose: () => void;
};

const SearchInput = ({ isVisible, handleClose }: SearchInputProps) => {
  const [inputValue, setInputVale] = useState<string>('');
  const dispatch = useAppDispatch();
  const productsFromStore = useAppSelector((state) => state.products);
  const [predictedTitles, setPredictedTitles] = useState<ProductType[]>([]);
  const [products, setProductsForDisplay] = useState<ProductType[]>([]);

  useEffect(() => {
    if (productsFromStore) setProductsForDisplay(productsFromStore);
  }, [productsFromStore]);

  useEffect(() => {
    if (isVisible) {
      setInputVale('');
      setPredictedTitles([]);
    }
  }, [isVisible]);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputVale(evt.target.value);
    dispatch(setSearchValue(evt.target.value.toLowerCase()));
    predictTitle(evt.target.value);
  };

  const predictTitle = (newTitle: string) => {
    const matchedProducts = products.filter((product) =>
      product.title.toLowerCase().includes(newTitle.toLowerCase())
    );
    setPredictedTitles(matchedProducts);
  };

  const handleLinkClick = () => {
    setInputVale('');
    setPredictedTitles([]);
    handleClose();
  };

  const handleClick = () => {
    if (inputValue) {
      setInputVale('');
      return;
    }

    if (!inputValue) {
      handleClose();
      return;
    }
  };

  const highlightTitle = (title: string) => {
    if (inputValue) {
      const regex = new RegExp(inputValue, 'gi');
      return title.replace(regex, (match) => `<strong>${match}</strong>`);
    }
    return title;
  };

  return (
    <form className={cx(styles.searchinput__block, { visible: isVisible })}>
      <input
        type="text"
        className={styles.searchinput}
        placeholder="Поиск по товарам"
        onChange={handleChange}
        value={inputValue}
      />
      {inputValue && predictedTitles.length === 0 && (
        <div className={styles.ul}>Ничего не найдено</div>
      )}
      {predictedTitles.length > 0 && (
        <div>
          <ul className={styles.ul}>
            {predictedTitles.map(({ id, title, img }) => (
              <Link key={v4()} to={`catalog/detail-good/${id}`} onClick={handleLinkClick}>
                <li>
                  {' '}
                  <img className={styles.img} src={img} alt="photo product"></img>
                  <span dangerouslySetInnerHTML={{ __html: highlightTitle(title) }} />
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
      <CloseBtn className={styles.input__clear_btn} onClick={() => handleClick()} />
    </form>
  );
};

export default SearchInput;
