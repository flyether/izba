import { useEffect } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import styles from './main-page.module.css';
import { AuthorizationUserAPI } from '../../store/services/UserService';

const MainPage = () => {
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');
  const [verificationTokenPost] = AuthorizationUserAPI.useVerificationTokenPostMutation();

  useEffect(() => {
    async function fetchData(token: string) {
      try {
        await verificationTokenPost({ token: token }).unwrap();
      } catch (error) {
        console.error('rejected', error);
      }
    }
    if (token) fetchData(token);
  }, [token, verificationTokenPost]);

  return (
    <div className={styles.main_page__container}>
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
      <Step6 />
      <div className={styles.smoke} />
      <div className={styles.tomato} />
      <div className={styles.leaf} />
    </div>
  );
};

export default MainPage;
