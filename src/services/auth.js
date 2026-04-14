import axiosInstance from '../config/axios';

export const authService = {
  register: async (userData) => {
    const response = await axiosInstance.post('/api/auth/register', userData);
    return response.data;
  },

  login: async (credentials) => {
    const response = await axiosInstance.post('/api/auth/login', credentials);
    return response.data;
  },

  logout: async (refreshToken) => {
    const response = await axiosInstance.post('/api/auth/logout', { refreshToken });
    return response.data;
  },

  getMe: async () => {
    const response = await axiosInstance.get('/api/auth/me');
    return response.data;
  },

  refreshToken: async (refreshToken) => {
    const response = await axiosInstance.post('/api/auth/refresh-token', { refreshToken });
    return response.data;
  },

  forgotPassword: async (email) => {
    const response = await axiosInstance.post('/api/auth/forgot-password', { email });
    return response.data;
  },

  resetPassword: async (token, password) => {
    const response = await axiosInstance.post(`/api/auth/reset-password/${token}`, { password });
    return response.data;
  },

  verifyOtp: async (email, otp) => {
    const response = await axiosInstance.post('/api/auth/verify-otp', { email, otp });
    return response.data;
  },

  resendOtp: async (email) => {
    const response = await axiosInstance.post('/api/auth/resend-otp', { email });
    return response.data;
  },

  googleCallback: async (searchString) => {
    const response = await axiosInstance.get(`/api/auth/google/callback${searchString}`);
    return response.data;
  },
};
