import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/auth';
import { usersService } from '../services/users';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  const fetchProfile = async () => {
    try {
      const response = await usersService.getProfile();
      setProfile(response.data);
    } catch (error) {
      console.error('Failed to fetch profile:', error);
    }
  };

  useEffect(() => {
    // Check for existing session
    const initAuth = async () => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        try {
          const response = await authService.getMe();
          if (response.success && response.data?.user) {
            setUser(response.data.user);
            setIsAuthenticated(true);
            await fetchProfile();
          } else {
            // Token might be invalid
            handleLogout();
          }
        } catch (error) {
          console.error('Failed to authenticate existing token:', error);
          // Only discard token if it's a 401 Unauthorized, maybe handle refresh logic later
          if (error.response?.status === 401) {
            handleLogout();
          }
        }
      }
      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = async (credentials) => {
    setIsLoading(true);
    try {
      const response = await authService.login(credentials);
      if (response.success && response.data) {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        setUser(response.data.user);
        setIsAuthenticated(true);
        await fetchProfile();
        return { success: true };
      }
      return { success: false, message: response.message || 'Login failed' };
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        message:
          error.response?.data?.message ||
          'Login failed. Please check your credentials.',
      };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData) => {
    setIsLoading(true);
    try {
      await authService.register(userData);
      // Registration returns 201 without session tokens. 
      // We return success so the front-end can route to verification.
      return { success: true };
    } catch (error) {
      console.error('Registration error:', error);
      return {
        success: false,
        message:
          error.response?.data?.message ||
          'Registration failed. Please try again.',
      };
    } finally {
      setIsLoading(false);
    }
  };

  const verifyEmail = async (email, otp) => {
    setIsLoading(true);
    try {
      const response = await authService.verifyOtp(email, otp);
      return response;
    } catch (error) {
      console.error('OTP Verification error:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Verification failed.',
      };
    } finally {
      setIsLoading(false);
    }
  };

  const resendVerification = async (email) => {
    setIsLoading(true);
    try {
      const response = await authService.resendOtp(email);
      return response;
    } catch (error) {
      console.error('Resend OTP error:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to resend OTP.',
      };
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      try {
        await authService.logout(refreshToken);
      } catch (error) {
        console.error('Logout error:', error);
      }
    }
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUser(null);
    setProfile(null);
    setIsAuthenticated(false);
  };

  const handleGoogleCallback = async (searchParamsStr) => {
    setIsLoading(true);
    try {
      const response = await authService.googleCallback(searchParamsStr);
      if (response.success && response.data) {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        setUser(response.data.user);
        setIsAuthenticated(true);
        await fetchProfile();
        return { success: true };
      }
      return { success: false, message: response.message || 'Google Login failed' };
    } catch (error) {
      console.error('Google Callback error:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Google Login failed',
      };
    } finally {
      setIsLoading(false);
    }
  };

  const mockLogin = () => {
    setIsLoading(true);
    const mockUser = {
      id: 'mock-123',
      fullName: 'Biobele Owen',
      email: 'owenbiobele@gmail.com',
      role: 'learner',
      idNumber: 'TMS2026/045',
    };
    setUser(mockUser);
    setIsAuthenticated(true);
    // Setting a fake token so initial check on refresh might pass (though getMe will fail)
    localStorage.setItem('accessToken', 'mock-token');
    setIsLoading(false);
    return { success: true };
  };

  const value = {
    user,
    profile,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout: handleLogout,
    mockLogin,
    refreshProfile: fetchProfile,
    verifyEmail,
    resendVerification,
    handleGoogleCallback,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
