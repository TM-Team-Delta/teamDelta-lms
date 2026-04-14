import axiosInstance from '../config/axios';

export const notificationsService = {
  getNotifications: async (params = {}) => {
    const response = await axiosInstance.get('/api/notifications', { params });
    return response.data;
  },

  markAllAsRead: async () => {
    const response = await axiosInstance.patch('/api/notifications/read-all');
    return response.data;
  },

  markAsRead: async (notificationId) => {
    const response = await axiosInstance.patch(
      `/api/notifications/${notificationId}/read`
    );
    return response.data;
  },

  deleteNotification: async (notificationId) => {
    const response = await axiosInstance.delete(
      `/api/notifications/${notificationId}`
    );
    return response.data;
  },
};
