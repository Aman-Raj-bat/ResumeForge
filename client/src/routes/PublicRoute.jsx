import { Navigate, Outlet } from 'react-router-dom';
import { useAppStore } from '../store';

const PublicRoute = () => {
  const { isAuthenticated } = useAppStore();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
