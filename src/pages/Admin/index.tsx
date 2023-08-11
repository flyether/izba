import BreadScrumbs from '../../components/BreadScrumbs';
import styles from './admin.module.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const AdminPage = () => {
  const location = useLocation();

  return (
    <section className={styles.page__wrapper}>
      <div className={styles.page__shadow} />
      <div className={styles.page__container}>
        <BreadScrumbs location={location.pathname} />
        <div>Админка</div>
      </div>
    </section>
  );
};

export default AdminPage;
