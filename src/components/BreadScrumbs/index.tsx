import styles from './breadscrumbs.module.css';
import { Link } from 'react-router-dom';
import { routesNames } from '../../models/constants';
import { v4 } from 'uuid';

type BreadScrumbsProps = {
  location: string;
};

const BreadScrumbs = ({ location }: BreadScrumbsProps) => {
  const locations = location.split('/').map((el) => {
    return { route: el, title: routesNames[el as keyof typeof routesNames] };
  });

  return (
    <ul className={styles.breadscrumbs__wrapper}>
      {locations.map((route) => (
        <li key={v4()} className={styles.breadscrumbs__item}>
          <Link to={`/${route.route}`}>{route.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default BreadScrumbs;
