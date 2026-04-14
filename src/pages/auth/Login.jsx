import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

/* google icon svg */
const GoogleIcon = () => (
  <svg width='20' height='20' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M47.532 24.552c0-1.636-.147-3.2-.421-4.704H24v8.913h13.218c-.57 2.978-2.3 5.504-4.9 7.198v5.985h7.93c4.642-4.275 7.284-10.57 7.284-17.392z' fill='#4285F4'/>
    <path d='M24 48c6.637 0 12.198-2.2 16.264-5.956l-7.93-5.985c-2.2 1.474-5.015 2.344-8.334 2.344-6.41 0-11.836-4.33-13.78-10.152H2.038v6.18C6.088 42.619 14.445 48 24 48z' fill='#34A853'/>
    <path d='M10.22 28.251A14.862 14.862 0 0 1 9.44 24c0-1.473.253-2.906.78-4.251v-6.18H2.038A23.97 23.97 0 0 0 0 24c0 3.865.924 7.522 2.038 10.431l8.182-6.18z' fill='#FBBC05'/>
    <path d='M24 9.597c3.616 0 6.862 1.243 9.415 3.688l7.063-7.063C36.191 2.198 30.634 0 24 0 14.445 0 6.088 5.381 2.038 13.569l8.182 6.18C12.164 13.927 17.59 9.597 24 9.597z' fill='#EA4335'/>
  </svg>
);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
   const navigate = useNavigate();
  const { login, mockLogin, isLoading } = useAuth();

  const handleMockLogin = () => {
    mockLogin();
    navigate('/dashboard');
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const result = await login(formData);
    
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.message);
    }
  };

  return (
    <div className='w-full'>
      {/* heading */}
      <h1 className='text-2xl font-bold text-text-primary text-center mb-1'>Sign In</h1>
      <p className='text-sm text-text-secondary text-center mb-6'>continue your learning journey</p>

      {/* error message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm mb-4">
          {error}
        </div>
      )}

      {/* google sign in button */}
      <button
        type='button'
        onClick={() => window.location.href = `${(import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '')}/api/auth/google`}
        className='w-full flex items-center justify-center gap-3 border border-border rounded-lg py-3 px-4 text-sm font-medium text-text-primary bg-[#f0fdf4] hover:bg-[#dcfce7] transition-colors mb-5'
      >
        <GoogleIcon />
        Continue with Google
      </button>

      {/* divider */}
      <div className='flex items-center gap-3 mb-5'>
        <hr className='flex-1 border-border' />
        <span className='text-sm text-text-secondary'>Or</span>
        <hr className='flex-1 border-border' />
      </div>

      {/* form fields */}
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        {/* email */}
        <div>
          <label className='block text-sm font-medium text-text-primary mb-1'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Enter your email address'
            value={formData.email}
            onChange={handleChange}
            required
            className='w-full border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary outline-none focus:ring-2 focus:ring-brand-secondary transition'
          />
        </div>

        {/* password */}
        <div>
          <label className='block text-sm font-medium text-text-primary mb-1'>Password</label>
          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='Enter your password'
              value={formData.password}
              onChange={handleChange}
              required
              className='w-full border border-border rounded-lg px-4 py-3 pr-11 text-sm text-text-primary placeholder:text-text-secondary outline-none focus:ring-2 focus:ring-brand-secondary transition'
            />
            <button
              type='button'
              onClick={() => setShowPassword((v) => !v)}
              className='absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary'
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* forgot password */}
          <div className='flex justify-end mt-1'>
            <Link to='/forgot-password' className='text-xs text-text-secondary hover:text-brand-primary'>
              Forgot password?
            </Link>
          </div>
        </div>

        {/* submit */}
        <button
          type='submit'
          disabled={isLoading}
          className='w-full bg-brand-primary text-white font-semibold rounded-lg py-3 text-sm hover:opacity-90 transition-opacity mt-1 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2'
        >
          {isLoading ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Signing In...
            </>
          ) : (
            'Sign In'
          )}
        </button>
      </form>

      {/* sign up link */}
      <p className='text-center text-sm text-text-secondary mt-5'>
        Don&apos;t have an account?{' '}
        <Link to='/register' className='text-brand-primary font-semibold hover:underline'>
          Sign Up
        </Link>
      </p>

      {/* bypass for dev */}
      <div className='mt-8 pt-6 border-t border-gray-100 flex flex-col items-center gap-3'>
        <p className='text-xs text-gray-400 font-medium tracking-tight'>Development Utilities:</p>
        <button
          onClick={handleMockLogin}
          className='text-xs font-bold text-green-600 bg-green-50 px-4 py-2 rounded-full border border-green-100 hover:bg-green-100 transition-colors'
        >
          Bypass Login (Mock Access)
        </button>
      </div>
    </div>
  );
};

export default Login;
