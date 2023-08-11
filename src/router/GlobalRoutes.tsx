import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import MainPage from '../pages/MainPage';
import VideoPlayer from '../pages/VideoPlayer';
import Catalog from '../pages/Catalog';
import GoodPage from '../pages/GoodPage';
import Cart from '../pages/Cart';
import FormPage from '../pages/FormPage';
import Profile from '../pages/Profile';
import Policy from '../pages/Policy';
import { ProtectedRoute } from './protected-route';
import { useAppSelector } from '../store';
import OrderingPage from '../pages/Cart/OrderingPage';
import SuccessPay from '../pages/PayPage/SuccessPay';
import FailPay from '../pages/PayPage/FailPay';

import { AdminProtectedRoute } from './admin-protected-route';
import AdminPage from '../pages/Admin';

const GlobalRoutes = () => {
  const { token } = useAppSelector((state) => state.authorization);
  // добавить админа в конце
  // const { is_superuser } = useAppSelector((state) => state.user);
  const admin = true;
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="video" element={<MainPage />} />
        <Route path="auth/verify" element={<MainPage />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/detail-good/:id" element={<GoodPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="signup" element={<FormPage />} />
        <Route path="ordering" element={<OrderingPage />} />
        <Route path="login" element={<FormPage />} />
        <Route path="recovery-pass" element={<FormPage />} />
        <Route path="success-pay" element={<SuccessPay />} />
        <Route path="fail-pay" element={<FailPay />} />
        <Route
          path="admin"
          element={
            <AdminProtectedRoute admin={admin}>
              <AdminPage />
            </AdminProtectedRoute>
          }
        />
        {/* <Route path="reset-pass" element={<FormPage />} /> */}
        <Route
          path="profile"
          element={
            <ProtectedRoute authorization={token}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="confidentiality-policy" element={<Policy />} />
      </Route>
    </Routes>
  );
};

export default GlobalRoutes;
