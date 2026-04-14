import axiosInstance from '../config/axios';

export const teamService = {
  getOverview: async () => {
    const response = await axiosInstance.get('/api/team');
    return response.data;
  },
};
