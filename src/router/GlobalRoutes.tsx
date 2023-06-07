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

const GlobalRoutes = () => {
  const { token } = useAppSelector((state) => state.authorization);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="video" element={<VideoPlayer />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/detail-good/:id" element={<GoodPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="signup" element={<FormPage />} />
        <Route path="login" element={<FormPage />} />
        <Route path="recovery-pass" element={<FormPage />} />
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
