import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useAuthStore } from './store/authStore';
import Navbar from './components/layout/Navbar';
import { ToastProvider } from './components/ui/ToastProvider';
import ErrorBoundary from './components/errors/ErrorBoundary';
import NotFound from './components/errors/NotFound';
import { Loader2 } from 'lucide-react';

// Lazy loaded pages
const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const ResumeEditor = React.lazy(() => import('./pages/ResumeEditor'));

const SuspenseFallback = () => (
  <div className="flex-grow flex items-center justify-center min-h-[50vh]">
    <Loader2 size={40} className="animate-spin text-primary" />
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuthStore();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route 
          path="/login" 
          element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} 
        />
        <Route 
          path="/register" 
          element={!isAuthenticated ? <Register /> : <Navigate to="/dashboard" />} 
        />
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/editor/:id" 
          element={isAuthenticated ? <ResumeEditor /> : <Navigate to="/login" />} 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow flex flex-col">
              <Suspense fallback={<SuspenseFallback />}>
                <AnimatedRoutes />
              </Suspense>
            </main>
          </div>
        </Router>
      </ToastProvider>
    </ErrorBoundary>
  );
};

export default App;
