import styles from './step-six.module.css';
import { ReactComponent as CatalogIcon } from '../../../assets/icons/catalog_icon_big.svg';
import CatalogPreviewItem from '../../../components/CatalogPreviewItem';
import GalleryItem from '../../../assets/img/gallery_item.png';
import Button from '../../../components/atoms/Button';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../../store';
import { ProductType } from '../../../store/storeInterfaces';
import { v4 } from 'uuid';

const Step6 = () => {
  const naigate = useNavigate();
  const products = useAppSelector((state) => state.products);
  const [productsForDisplay, setProductsForDisplay] = useState<ProductType[]>([]);

  useEffect(() => {
    if (products) setProductsForDisplay(products);
  }, [products]);

  return (
    <section className={styles.step_six__wrapper}>
      <div className={styles.step_six__container}>
        <div className={styles.step_six__content}>
          <div className={styles.content__header}>
            <CatalogIcon className={styles.catalog__icon} />
            <h3 className={styles.header__title}>Каталог</h3>
          </div>
          <div className={styles.catalog__viewer}>
            <ul className={styles.catalog__list}>
              {productsForDisplay.map((product) => (
                <div key={v4()}>
                  <CatalogPreviewItem
                    title={product.title}
                    id={product.id.toString()}
                    text={product.price.toString()}
                    img={product.img ?? GalleryItem}
                  />
                </div>
              ))}
            </ul>
          </div>
          <Button
            text="Посмотреть все"
            isPrimary={true}
            hasIcon={false}
            onClick={() => {
              naigate('/catalog');
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Step6;
