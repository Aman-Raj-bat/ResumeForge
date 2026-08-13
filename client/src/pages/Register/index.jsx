import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useToast } from '../../components/ui/Toast';
import PageTransition from '../../components/animations/PageTransition';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register: registerUser } = useAuthStore();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch('password');

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      await registerUser(data.name, data.email, data.password);
      toast.success('Account created successfully!');
      navigate('/dashboard');
    } catch (err) {
      toast.error(err.message || 'Failed to create account.');
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
          <h2 className="text-2xl font-bold text-text-main mb-2 tracking-tight">Create an account</h2>
          <p className="text-text-muted text-sm">Join the professional workspace</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-main mb-1.5">Full Name</label>
            <input
              type="text"
              aria-invalid={errors.name ? "true" : "false"}
              className={`w-full px-4 py-2.5 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm ${
                errors.name ? 'border-red-500' : 'border-border-main'
              }`}
              placeholder="John Doe"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>}
          </div>

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
            <label className="block text-sm font-medium text-text-main mb-1.5">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                aria-invalid={errors.password ? "true" : "false"}
                className={`w-full px-4 py-2.5 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm ${
                  errors.password ? 'border-red-500' : 'border-border-main'
                }`}
                placeholder="••••••••"
                {...register('password', { 
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters'
                  }
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

          <div>
            <label className="block text-sm font-medium text-text-main mb-1.5">Confirm Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                aria-invalid={errors.confirmPassword ? "true" : "false"}
                className={`w-full px-4 py-2.5 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm ${
                  errors.confirmPassword ? 'border-red-500' : 'border-border-main'
                }`}
                placeholder="••••••••"
                {...register('confirmPassword', { 
                  required: 'Please confirm your password',
                  validate: value => value === password || 'Passwords do not match'
                })}
              />
            </div>
            {errors.confirmPassword && <p className="mt-1.5 text-xs text-red-500">{errors.confirmPassword.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center bg-text-main text-white py-2.5 px-4 rounded-lg text-sm font-semibold hover:bg-black transition-all shadow-subtle hover:shadow-elevated disabled:opacity-70 disabled:cursor-not-allowed mt-4"
          >
            {isLoading ? <Loader2 size={18} className="animate-spin" /> : 'Create Account'}
          </button>
        </form>

        <div className="mt-8 text-center text-sm">
          <span className="text-text-muted">Already have an account? </span>
          <Link to="/login" className="text-text-main font-semibold hover:text-primary transition-colors focus:outline-none">
            Sign in
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default Register;
