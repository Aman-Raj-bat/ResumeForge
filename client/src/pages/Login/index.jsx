import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useToast } from '../../components/ui/Toast';
import PageTransition from '../../components/animations/PageTransition';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuthStore();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      await login(data.email, data.password);
      toast.success('Welcome back to ResumeForge!');
      navigate('/dashboard');
    } catch (err) {
      toast.error(err.message || 'Failed to login. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageTransition className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-md w-full bg-surface rounded-xl shadow-subtle border border-border-main p-8 sm:p-10">
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex text-xl font-bold tracking-tight text-text-main items-center gap-1 mb-6">
            ResumeForge
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1"></span>
          </Link>
          <h2 className="text-2xl font-bold text-text-main mb-2 tracking-tight">Welcome back</h2>
          <p className="text-text-muted text-sm">Sign in to your workspace</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-text-main mb-1.5">Email Address</label>
            <input
              type="email"
              aria-invalid={errors.email ? "true" : "false"}
              className={`w-full px-4 py-2.5 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm ${
                errors.email ? 'border-red-500' : 'border-border-main'
              }`}
              placeholder="you@example.com"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-sm font-medium text-text-main">Password</label>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                aria-invalid={errors.password ? "true" : "false"}
                className={`w-full px-4 py-2.5 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm ${
                  errors.password ? 'border-red-500' : 'border-border-main'
                }`}
                placeholder="••••••••"
                {...register('password', { 
                  required: 'Password is required'
                })}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-text-muted hover:text-text-main cursor-pointer focus:outline-none rounded-md transition-colors"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.password && <p className="mt-1.5 text-xs text-red-500">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center bg-text-main text-white py-2.5 px-4 rounded-lg text-sm font-semibold hover:bg-black transition-all shadow-subtle hover:shadow-elevated disabled:opacity-70 disabled:cursor-not-allowed mt-2"
          >
            {isLoading ? <Loader2 size={18} className="animate-spin" /> : 'Sign In'}
          </button>
        </form>

        <div className="mt-8 text-center text-sm">
          <span className="text-text-muted">Don't have an account? </span>
          <Link to="/register" className="text-text-main font-semibold hover:text-primary transition-colors focus:outline-none">
            Create one
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default Login;
