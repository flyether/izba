import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

export const AdminProtectedRoute = ({
  admin,
  children,
}: {
  admin?: boolean | null;
  children: ReactNode;
}) => {
  if (!admin) {
    return <Navigate to="/" replace={true} />;
  }

  return <>{children}</>;
};
