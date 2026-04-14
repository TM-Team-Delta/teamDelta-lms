import axiosInstance from '../config/axios';

export const dashboardService = {
  getDashboard: async () => {
    const response = await axiosInstance.get('/api/dashboard');
    return response.data;
  },
};
