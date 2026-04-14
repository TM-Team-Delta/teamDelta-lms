import axiosInstance from "../config/axios";

export const trackProgressService = {
  getProgressOverview: async () => {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.get("/api/progress", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  getCourseProgress: async (courseId) => {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.get(`/api/progress/${courseId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  markLessonComplete: async (lessonId) => {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.patch(
      `/api/progress/lessons/${lessonId}/complete`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  },

  getWeeklyProgress: async () => {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.get("/api/progress/weekly", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },
};