import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';

const OTP_LENGTH = 6;

const VerifyEmail = () => {
  const [otp, setOtp] = useState(() => Array(OTP_LENGTH).fill(''));
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Keep one stable ref array so the effect and handlers do not recreate it.
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { verifyEmail, resendVerification, login, isLoading } = useAuth();
  
  const email = location.state?.email;
  const password = location.state?.password;

  /* auto focus first input on mount */
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  if (!email) {
    return <Navigate to="/register" replace />;
  }

  const handleChange = (index, value) => {
    /* only allow numbers */
    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otp];
    /* take only the last character if multiple are entered (e.g. paste) */
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    /* move to next input if value is entered */
    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    /* move to previous input on backspace if current is empty */
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = otp.join('');
    setError('');
    setMessage('');
    
    if (code.length === OTP_LENGTH) {
      const result = await verifyEmail(email, code);
      if (result.success) {
        if (result.authenticated) {
          navigate('/dashboard', { replace: true });
          return;
        }

        if (password) {
          const loginResult = await login({ email, password });

          if (loginResult.success) {
            navigate('/dashboard', { replace: true });
            return;
          }
        }

        navigate('/login', {
          replace: true,
          state: {
            message:
              result.message || 'Email verified successfully. You can now log in.',
          },
        });
      } else {
        setError(result.message);
      }
    }
  };

  const handleResend = async () => {
    setError('');
    setMessage('');
    const result = await resendVerification(email);
    if (result.success) {
      setMessage(result.message || 'OTP resent successfully');
    } else {
      setError(result.message || 'Failed to resend OTP');
    }
  };

  return (
    <div className='w-full flex flex-col items-center'>
      {/* heading */}
      <h1 className='text-2xl font-bold text-text-primary text-center mb-2'>Email Verification</h1>
      <p className='text-sm text-text-secondary text-center mb-6'>
        Enter the verification code sent to {email}
      </p>

      {/* error/success message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm mb-4 w-full max-w-sm text-center">
          {error}
        </div>
      )}
      {message && (
        <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg text-sm mb-4 w-full max-w-sm text-center">
          {message}
        </div>
      )}

      {/* otp form */}
      <form onSubmit={handleSubmit} className='w-full max-w-sm'>
        <div className='flex justify-center gap-2 mb-8'>
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(element) => {
                inputRefs.current[index] = element;
              }}
              type='text'
              inputMode='numeric'
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className='w-12 h-12 sm:w-14 sm:h-14 border border-border rounded-xl text-center text-xl font-bold text-text-primary focus:border-brand-primary outline-none transition'
            />
          ))}
        </div>

        {/* resend link */}
        <p className='text-center text-sm text-text-primary mb-12'>
          Didn&apos;t receive code?{' '}
          <button
            type='button'
            onClick={handleResend}
            disabled={isLoading}
            className='text-brand-primary font-semibold hover:underline bg-transparent border-none p-0 cursor-pointer disabled:opacity-50'
          >
            Resend code
          </button>
        </p>

        {/* submit button */}
        <button
          type='submit'
          disabled={otp.some((d) => d === '') || isLoading}
          className='w-full bg-brand-primary text-white font-semibold rounded-xl py-4 text-base hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2'
        >
          {isLoading ? (
            <>
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Verifying...
            </>
          ) : (
             'Verify'
          )}
        </button>
      </form>
    </div>
  );
};

export default VerifyEmail;
