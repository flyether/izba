import BreadScrumbs from '../../components/BreadScrumbs';
import styles from './policy.module.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Policy = () => {
  const location = useLocation();
  const [policy, setPolicy] = useState('');

  const getPolicy = async () => {
    const file = await fetch('http://localhost:3000/policy.txt');
    const text = await file.text();

    setPolicy(text);
  };

  useEffect(() => {
    getPolicy();
  }, []);

  return (
    <section className={styles.page__wrapper}>
      <div className={styles.page__shadow} />
      <div className={styles.page__container}>
        <BreadScrumbs location={location.pathname} />
        <div className={styles.page__content}>
          <pre>{policy}</pre>
        </div>
      </div>
    </section>
  );
};

export default Policy;
