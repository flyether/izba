import styles from './App.module.css';
import HeaderTop from '../HeaderTop';
import Header from '../Header';
import Footer from '../Footer';
import GlobalRoutes from '../../router/GlobalRoutes';

function App() {
  return (
    <div className={styles.app}>
      <HeaderTop />
      <Header />
      <GlobalRoutes />
      <Footer />
    </div>
  );
}

export default App;
