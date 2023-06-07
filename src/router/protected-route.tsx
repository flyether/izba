import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({
  authorization,
  children,
}: {
  authorization?: string | null;
  children: ReactNode;
}) => {
  if (!authorization) {
    return <Navigate to="/" replace={true} />;
  }

  return <>{children}</>;
};
