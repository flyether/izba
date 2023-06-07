import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '../Card';
import GoodImage from '../../assets/img/good_image.png';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow_right.svg';
import { v4 } from 'uuid';
import cn from 'classnames';

import styles from './carousel.module.css';
import { useAppSelector } from '../../store';
import { useEffect, useState } from 'react';
import { ProductType } from '../../store/storeInterfaces';

const config = {
  desktop: {
    breakpoint: { max: 1920, min: 1440 },
    items: 3,
  },
  laptop: {
    breakpoint: { max: 1440, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 425 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 425, min: 0 },
    items: 1,
  },
};

type CarouselComponentProps = {
  title: string;
};

const CarouselComponent = ({ title }: CarouselComponentProps) => {
  const products = useAppSelector((state) => state.products);
  const [productsForDisplay, setProductsForDisplay] = useState<ProductType[]>([]);

  useEffect(() => {
    if (products) setProductsForDisplay(products);
  }, [products]);

  return (
    <div className={styles.carousel__wrapper}>
      <div className={styles.carousel__container}>
        <h3 className={styles.carousel__title}>{title}</h3>
        <Carousel
          responsive={config}
          infinite={true}
          containerClass={styles.carousel}
          keyBoardControl={true}
          draggable={false}
          swipeable={true}
        >
          {productsForDisplay.map((product) => (
            <div key={v4()}>
              <Card
                id={product.id.toString()}
                title={product.title}
                category={product.category}
                image={product.img ?? GoodImage}
                price={product.price.toString()}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
