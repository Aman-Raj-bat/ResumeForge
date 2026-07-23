import { Navigate, Outlet } from 'react-router-dom';
import { useAppStore } from '../store';

const ProtectedRoute = () => {
  const { isAuthenticated } = useAppStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Temporary redirect for Phase 2: Redirect authenticated users accessing protected dashboard routes back to Home.
  // In Phase 3, we will render <Outlet /> here.
  return <Navigate to="/" replace />; 
};

export default ProtectedRoute;
