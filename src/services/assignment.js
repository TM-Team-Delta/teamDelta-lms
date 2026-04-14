import axiosInstance from '../config/axios';

const buildSubmissionFormData = (data = {}) => {
  const formData = new FormData();

  if (data.link) formData.append('link', data.link);
  if (data.file) formData.append('file', data.file);

  return formData;
};

export const assignmentService = {
  getAssignments: async () => {
    const response = await axiosInstance.get('/api/assignments');
    return response.data;
  },

  getAssignmentById: async (assignmentId) => {
    const response = await axiosInstance.get(
      `/api/assignments/${assignmentId}`
    );
    return response.data;
  },

  getAssignmentDetails: async (assignmentId) => {
    const response = await axiosInstance.get(
      `/api/assignments/${assignmentId}`
    );
    return response.data;
  },

  submitAssignmentFromLesson: async (payload) => {
    const response = await axiosInstance.post('/api/assignments/submit', payload);
    return response.data;
  },

  submitAssignment: async (assignmentId, data) => {
    const response = await axiosInstance.post(
      `/api/assignments/${assignmentId}/submit`,
      buildSubmissionFormData(data),
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data;
  },

  resubmitAssignment: async (assignmentId, data) => {
    const response = await axiosInstance.put(
      `/api/assignments/${assignmentId}/resubmit`,
      buildSubmissionFormData(data),
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data;
  },

  createAssignment: async (payload) => {
    const response = await axiosInstance.post('/api/assignments/create', payload);
    return response.data;
  },

  getAssignmentsByCourse: async (courseId) => {
    const response = await axiosInstance.get(
      `/api/assignments/course/${courseId}`
    );
    return response.data;
  },

  getAssignmentSubmissions: async (assignmentId) => {
    const response = await axiosInstance.get(
      `/api/assignments/${assignmentId}/submissions`
    );
    return response.data;
  },

  gradeAssignment: async (assignmentId, userId, payload) => {
    const response = await axiosInstance.put(
      `/api/assignments/${assignmentId}/grade/${userId}`,
      payload
    );
    return response.data;
  },
};
