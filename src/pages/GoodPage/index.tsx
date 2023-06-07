import styles from './good.module.css';
import { useLocation, useParams } from 'react-router-dom';
import BreadScrumbs from '../../components/BreadScrumbs';
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrow_left.svg';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow_right.svg';
import GoodImage from '../../assets/img/good_image.png';
import cn from 'classnames';
import Button from '../../components/atoms/Button';
import { ReactComponent as CartPlus } from '../../assets/icons/cart_icon_plus.svg';
import CarouselComponent from '../../components/CarouselComponent';
import { ProductsAPI } from '../../store/services/ProductsService';
import { useEffect, useState } from 'react';
import { ProductType } from '../../store/storeInterfaces';

/*mock */

const imagesS = [GoodImage, GoodImage, GoodImage, GoodImage];

const GoodPage = () => {
  const { id } = useParams();
  const { data: productReq } = ProductsAPI.useGetProductByIdQuery(id ?? '0');
  const { data: productPhoto } = ProductsAPI.useGetProductPhotoByIdQuery(id ?? '0');
  const [images, setImages] = useState<string[]>(imagesS);
  const [product, setProduct] = useState<ProductType>();
  const location = useLocation();

  useEffect(() => {
    if (productPhoto) setImages(productPhoto.map((e) => e.photo));
  }, [productPhoto]);

  useEffect(() => {
    if (productReq) setProduct(productReq);
  }, [productReq]);

  return (
    <section className={styles.good__wrapper}>
      <div className={styles.page__shadow} />
      <div className={styles.good__container}>
        <BreadScrumbs location={location.pathname} />
        <h2 className={styles.good__title}>{product?.title ?? 'Название товара'}</h2>
        <div className={styles.good__detail}>
          <div className={styles.detail__left}>
            <div className={styles.detail__image_big}>
              <span className={cn(styles.image__handler, styles.handler__left)}>
                <ArrowLeft className={styles.handler__arrow} />
              </span>
              <img
                src={product?.img ?? GoodImage}
                alt="Изображение товара"
                className={styles.image__pic}
              />
              <span className={cn(styles.image__handler, styles.handler__right)}>
                <ArrowRight className={styles.handler__arrow} />
              </span>
            </div>
            <ul className={styles.detail__gallery}>
              {images.map((image, i) => (
                <li key={i} className={styles.gallery__item}>
                  <img src={image} alt="Другое изображение товара" className={styles.item__image} />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.detail__conditions}>
            <div className={styles.conditions__container}>
              <ul className={styles.conditions__content}>
                <li className={styles.content__item}>
                  <h3 className={styles.item__title}>Срок изготовления</h3>
                  <span className={styles.item__text}>
                    {product?.cook_time ?? '25 дней со дня заказа'}
                  </span>
                </li>
                <li className={styles.content__item}>
                  <h3 className={styles.item__title}>Доставка по г. Москва</h3>
                  <span className={styles.item__text}>{`${product?.delivery} рублей`}</span>
                </li>
                <li className={styles.content__item}>
                  <h3 className={styles.item__title}>Температура хранения</h3>
                  <span className={styles.item__text}>
                    {product?.temperature ?? 'От 9 до 20 градусов'}
                  </span>
                </li>
                <li className={styles.content__item}>
                  <h3 className={styles.item__title}>Вес</h3>
                  <span className={styles.item__text}>{product?.weight ?? '1 кг'}</span>
                </li>
                <li className={styles.content__item}>
                  <h3 className={styles.item__title}>Характеристика</h3>
                  <span className={styles.item__text}>
                    {product?.characteristic ?? 'характеристика'}
                  </span>
                </li>
                <li className={styles.content__item}>
                  <h3 className={styles.item__title}>Категория</h3>
                  <span className={styles.item__text}>{product?.category ?? 'категория'}</span>
                </li>
                <li className={styles.content__item}>
                  <h3 className={styles.item__title}>Состав</h3>
                  <span className={styles.item__text}>
                    {product?.composition ?? 'Свинина, говядина'}
                  </span>
                </li>
              </ul>

              <Button
                hasIcon={true}
                text={`${product?.composition} руб`}
                isPrimary={true}
                onClick={() => {}}
                icon={<CartPlus className={styles.icon} />}
                full={true}
              />
            </div>
          </div>
        </div>
        <div className={styles.good__description}>
          <h3 className={styles.description__title}>Описание</h3>
          <p className={styles.description__text}>
            {product?.description ??
              'Свинина, говядина   Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемы Свинина, говядина   Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлем Свинина, говядина   Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлем Свинина, говядина   Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемСвинина, говядина   Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлем'}
          </p>
        </div>
        <CarouselComponent title="Рекомендуем" />
      </div>
    </section>
  );
};

export default GoodPage;
