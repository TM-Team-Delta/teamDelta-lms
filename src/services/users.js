import axiosInstance from '../config/axios';

export const usersService = {
  getProfile: async () => {
    const response = await axiosInstance.get('/api/users/profile');
    return response.data;
  },

  updateProfile: async (payload) => {
    const response = await axiosInstance.patch('/api/users/profile', payload);
    return response.data;
  },

  addSkill: async (payload) => {
    const response = await axiosInstance.post('/api/users/skills', payload);
    return response.data;
  },

  deleteSkill: async (skillId) => {
    const response = await axiosInstance.delete(`/api/users/skills/${skillId}`);
    return response.data;
  },

  getBadges: async () => {
    const response = await axiosInstance.get('/api/users/badges');
    return response.data;
  },
};
