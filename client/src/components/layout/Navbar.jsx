import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { useToast } from '../ui/Toast';
import { LogOut } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuthStore();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast.info('You have been logged out.');
    navigate('/login');
  };

  return (
    <nav className="border-b border-border-main bg-surface px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-2xl font-bold text-primary">
          ResumeForge
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {!isAuthenticated ? (
            <>
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <a href="/#features" className="hover:text-primary transition-colors">Features</a>
              <a href="/#templates" className="hover:text-primary transition-colors">Templates</a>
            </>
          ) : (
            <Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
          )}
        </div>
      </div>
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <span className="text-sm font-medium text-gray-700 hidden sm:inline-block">
              Welcome, {user?.fullName?.split(' ')[0] || 'User'}
            </span>
            <button 
              onClick={logout}
              className="flex items-center gap-2 text-sm font-medium hover:text-red-600 transition-colors cursor-pointer"
            >
              <LogOut size={16} />
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-sm font-medium hover:text-primary transition-colors">
              Login
            </Link>
            <Link to="/register" className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
              Get Started
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
