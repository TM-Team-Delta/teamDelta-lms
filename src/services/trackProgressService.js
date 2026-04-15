import axiosInstance from '../config/axios';
import { normalizeCourseProgress } from '../utils/courseProgress';

const normalizeOverview = (payload = {}) => payload?.data ?? payload;

export const trackProgressService = {
  getProgressOverview: async () => {
    const response = await axiosInstance.get('/api/progress');
    return normalizeOverview(response.data);
  },

  getCourseProgress: async (courseId) => {
    const response = await axiosInstance.get(`/api/progress/${courseId}`);
    return response.data;
  },

  getProgressByCourseIds: async (courseIds = []) => {
    const uniqueIds = [...new Set(courseIds.filter(Boolean))];

    if (uniqueIds.length === 0) {
      return {};
    }

    const progressEntries = await Promise.all(
      uniqueIds.map(async (courseId) => {
        try {
          const response = await trackProgressService.getCourseProgress(courseId);
          return [courseId, normalizeCourseProgress(response)];
        } catch (requestError) {
          console.error(`Failed to load progress for course ${courseId}:`, requestError);
          return [courseId, normalizeCourseProgress({})];
        }
      })
    );

    return Object.fromEntries(progressEntries);
  },

  markLessonComplete: async (lessonId) => {
    const response = await axiosInstance.patch(
      `/api/progress/lessons/${lessonId}/complete`,
      {}
    );
    return response.data;
  },

  getWeeklyProgress: async () => {
    const response = await axiosInstance.get('/api/progress/weekly');
    return normalizeOverview(response.data);
  },
};
