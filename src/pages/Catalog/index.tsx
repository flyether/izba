import styles from './catalog.module.css';
import { ReactComponent as CatalogIcon } from '../../assets/icons/catalog_icon_big.svg';
import { useLocation } from 'react-router-dom';
import BreadScrumbs from '../../components/BreadScrumbs';
import Select from '../../components/atoms/Select';
import Card from '../../components/Card';
import GoodImage from '../../assets/img/good_image.png';
import { useAppSelector } from '../../store';
import { useEffect, useState } from 'react';
import { ProductType } from '../../store/storeInterfaces';
import { v4 } from 'uuid';

const Catalog = () => {
  const { categoryValue, searchValue } = useAppSelector((state) => state.generalConditions);
  const products = useAppSelector((state) => state.products);
  const location = useLocation();
  const [productsForDisplay, setProductsForDisplay] = useState<ProductType[]>([]);

  useEffect(() => {
    if (products) {
      let filteredProducts = products;

      if (categoryValue && categoryValue !== 0) {
        filteredProducts = filteredProducts.filter((product) => product.category === categoryValue);
      }

      if (searchValue) {
        const lowerCaseSearchValue = searchValue.toLowerCase();
        filteredProducts = filteredProducts.filter((product) => {
          const { title, description } = product;
          return (
            title.toLowerCase().includes(lowerCaseSearchValue) ||
            description.toLowerCase().includes(lowerCaseSearchValue)
          );
        });
      }

      setProductsForDisplay(filteredProducts);
    }
  }, [products, categoryValue, searchValue]);

  return (
    <section className={styles.catalog__wrapper}>
      <div className={styles.page__shadow} />
      <div className={styles.catalog__container}>
        <BreadScrumbs location={location.pathname} />
        <div className={styles.catalog__header}>
          <div className={styles.header__left}>
            <CatalogIcon />
            <h2 className={styles.left__title}>Каталог</h2>
          </div>
          <Select />
        </div>
        <div className={styles.catalog__grid}>
          {productsForDisplay.map((product) => (
            <div key={v4()}>
              <Card
                units={product.units ?? 'кг'}
                weight={product.weight ?? 1}
                id={product.id.toString()}
                title={product.title}
                category={product.category}
                image={product.photo?.[0] ?? GoodImage}
                price={product.price.toString()}
              />
            </div>
          ))}
          {/* <Card title="Буженина" category="Свинина" image={GoodImage} price="9999 руб." />
          <Card
            title="Длинное название, что если будет в 2 строчки "
            category="Свинина"
            image={GoodImage}
            price="9999 руб."
          />
          <Card
            title="Длинное название, что если будет в 2 строчки "
            category="Свинина"
            image={GoodImage}
            price="9999 руб."
            inCart
          />
          <Card title="Буженина" category="Свинина" image={GoodImage} price="9999 руб." />
          <Card
            title="Длинное название, что если будет в 2 строчки "
            category="Свинина"
            image={GoodImage}
            price="9999 руб."
          />
          <Card
            title="Длинное название, что если будет в 2 строчки "
            category="Свинина"
            image={GoodImage}
            price="9999 руб."
          />
          <Card title="Буженина" category="Свинина" image={GoodImage} price="9999 руб." />
          <Card
            title="Длинное название, что если будет в 2 строчки "
            category="Свинина"
            image={GoodImage}
            price="9999 руб."
          />
          <Card
            title="Длинное название, что если будет в 2 строчки "
            category="Свинина"
            image={GoodImage}
            price="9999 руб."
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
