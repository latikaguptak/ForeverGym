import { useRecoilValue } from 'recoil';
import { Navigate } from 'react-router-dom';
import { isAuthenticatedState } from '../../store/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuthenticated = useRecoilValue(isAuthenticatedState);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}