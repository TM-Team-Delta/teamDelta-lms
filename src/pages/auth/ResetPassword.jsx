import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { authService } from '../../services/auth';

const PasswordInput = ({ name, placeholder, value, onChange }) => {
  const [show, setShow] = useState(false);
  return (
    <div className='relative'>
      <input
        type={show ? 'text' : 'password'}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className='w-full border border-border rounded-lg px-4 py-3 pr-11 text-sm text-text-primary placeholder:text-text-secondary outline-none focus:ring-2 focus:ring-brand-secondary transition'
      />
      <button
        type='button'
        onClick={() => setShow((v) => !v)}
        className='absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary'
      >
        {show ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  );
};

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ password: '', confirmPassword: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: false, success: false, error: '' });

    if (formData.password !== formData.confirmPassword) {
      setStatus((prev) => ({ ...prev, error: 'Passwords do not match' }));
      return;
    }

    setStatus((prev) => ({ ...prev, loading: true }));

    try {
      await authService.resetPassword(token, formData.password);
      setStatus({ loading: false, success: true, error: '' });
      setTimeout(() => navigate('/login'), 3000);
    } catch (err) {
      setStatus({ 
        loading: false, 
        success: false, 
        error: err.response?.data?.message || 'Failed to reset password. The token may be invalid or expired.' 
      });
    }
  };

  return (
    <div className='w-full'>
      <h1 className='text-2xl font-bold text-text-primary text-center mb-1'>Reset Password</h1>
      <p className='text-sm text-text-secondary text-center mb-6'>
        Create a new password for your account.
      </p>

      {status.error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm mb-4">
          {status.error}
        </div>
      )}

      {status.success ? (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-4 rounded-lg text-center mb-6">
          <p className="font-medium mb-1">Password Reset Successful</p>
          <p className="text-sm">You can now sign in with your new password. Redirecting to login...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div>
            <label className='block text-sm font-medium text-text-primary mb-1'>New Password</label>
            <PasswordInput
              name='password'
              placeholder='Enter your new password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-text-primary mb-1'>Confirm Password</label>
            <PasswordInput
              name='confirmPassword'
              placeholder='Re-enter your new password'
              value={formData.confirmPassword}
              onChange={handleChange}
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
                Resetting...
              </>
            ) : (
              'Reset Password'
            )}
          </button>
        </form>
      )}

      <p className='text-center text-sm text-text-secondary mt-6'>
        <Link to='/login' className='text-brand-primary font-semibold hover:underline'>
          Back to Login
        </Link>
      </p>
    </div>
  );
};

export default ResetPassword;
