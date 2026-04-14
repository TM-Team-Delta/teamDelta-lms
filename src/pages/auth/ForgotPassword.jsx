import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { authService } from '../../services/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const result = await authService.forgotPassword(email);
      // Assuming 200 OK means success, even if there's a JSON response body
      setStatus({ loading: false, success: true, error: '' });
    } catch (err) {
      setStatus({ 
        loading: false, 
        success: false, 
        error: err.response?.data?.message || 'Failed to send reset link. Please check your email.' 
      });
    }
  };

  return (
    <div className='w-full'>
      <h1 className='text-2xl font-bold text-text-primary text-center mb-1'>Forgot Password</h1>
      <p className='text-sm text-text-secondary text-center mb-6'>
        Enter your email address to receive a password reset link.
      </p>

      {status.error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm mb-4">
          {status.error}
        </div>
      )}

      {status.success ? (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-4 rounded-lg text-center mb-6">
          <p className="font-medium mb-1">Check your email</p>
          <p className="text-sm">We've sent a password reset link to <strong>{email}</strong>.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div>
            <label className='block text-sm font-medium text-text-primary mb-1'>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Enter your email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='w-full border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary outline-none focus:ring-2 focus:ring-brand-secondary transition'
            />
          </div>

          <button
            type='submit'
            disabled={status.loading}
            className='w-full bg-brand-primary text-white font-semibold rounded-lg py-3 text-sm hover:opacity-90 transition-opacity mt-2 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2'
          >
            {status.loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              'Send Reset Link'
            )}
          </button>
        </form>
      )}

      <p className='text-center text-sm text-text-secondary mt-6'>
        Remember your password?{' '}
        <Link to='/login' className='text-brand-primary font-semibold hover:underline'>
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
