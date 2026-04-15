import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';

const GoogleCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { handleGoogleCallback } = useAuth();
  const [error, setError] = useState('');

  useEffect(() => {
    const processCallback = async () => {
      const result = await handleGoogleCallback(location.search);
      if (result.success) {
        navigate('/dashboard');
      } else {
        setError(result.message);
        setTimeout(() => navigate('/login'), 3000);
      }
    };
    
    if (location.search) {
      processCallback();
    } else {
      navigate('/login');
    }
  }, [location.search, handleGoogleCallback, navigate]);

  return (
    <div className='w-full flex flex-col items-center justify-center py-10'>
      <h1 className='text-2xl font-bold text-text-primary text-center mb-6'>Google Verification</h1>
      {error ? (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm mb-4 text-center w-full">
          {error}
          <p className="mt-2 text-xs text-text-secondary">Redirecting you to login...</p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <span className="w-8 h-8 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></span>
          <p className="text-sm font-medium text-text-secondary">Authenticating your Google account. Please wait...</p>
        </div>
      )}
    </div>
  );
};

export default GoogleCallback;
