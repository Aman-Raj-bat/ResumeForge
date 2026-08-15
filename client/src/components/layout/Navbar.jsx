import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { useToast } from '../ui/Toast';
import { LogOut, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuthStore();
  const { toast } = useToast();

  if (location.pathname === '/') return null;

  const handleLogout = () => {
    logout();
    toast.info('You have been logged out.');
    navigate('/login');
  };

  return (
    <nav className="border-b border-border-main/50 bg-background/80 backdrop-blur-md px-6 py-4 flex items-center justify-between sticky top-0 z-50 transition-all">
      <div className="flex items-center gap-10">
        <Link to="/" className="text-xl font-bold tracking-tight text-text-main flex items-center gap-1">
          ResumeForge
          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1"></span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
          {!isAuthenticated ? (
            <>
              <a href="/#product" className="hover:text-text-main transition-colors">Product</a>
              <a href="/#templates" className="hover:text-text-main transition-colors">Templates</a>
              <a href="/#ai-assistant" className="hover:text-text-main transition-colors">AI Assistant</a>
              <a href="/#features" className="hover:text-text-main transition-colors">Features</a>
            </>
          ) : (
            <Link to="/dashboard" className="hover:text-text-main transition-colors">Dashboard</Link>
          )}
        </div>
      </div>
      <div className="flex items-center gap-5">
        {isAuthenticated ? (
          <>
            <span className="text-sm font-medium text-text-muted hidden sm:inline-block">
              {user?.fullName?.split(' ')[0] || 'User'}
            </span>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-red-600 transition-colors cursor-pointer"
            >
              <LogOut size={16} strokeWidth={2.5} />
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-sm font-medium text-text-main hover:text-primary transition-colors">
              Sign In
            </Link>
            <Link to="/register" className="group flex items-center gap-1 bg-text-main text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-black transition-all shadow-subtle hover:shadow-elevated">
              Create Resume
              <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
