import styles from './form-page.module.css';
import Form from '../../components/Form';
import { useLocation } from 'react-router-dom';
import { FORM_MAPPER } from '../../models/constants';

const FormPage = () => {
  const title = useLocation().pathname;

  return (
    <div className={styles.page__wrapper}>
      <div className={styles.page__shadow} />
      <div className={styles.page__container}>
        <Form title={FORM_MAPPER[title as keyof typeof FORM_MAPPER]} />
      </div>
    </div>
  );
};

export default FormPage;
