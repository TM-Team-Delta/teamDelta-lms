import axiosInstance from '../config/axios';

export const assignmentService = {
  // ✅ GET ALL ASSIGNMENTS
  getAssignments: async () => {
    const response = await axiosInstance.get('/api/assignments');
    return response.data;
  },

  // ✅ GET SINGLE ASSIGNMENT
  getAssignmentDetails: async (assignmentId) => {
    const response = await axiosInstance.get(
      `/api/assignments/${assignmentId}`
    );
    return response.data;
  },

  // ✅ SUBMIT ASSIGNMENT
  submitAssignment: async (assignmentId, data) => {
    const formData = new FormData();

    if (data.link) formData.append('link', data.link);
    if (data.file) formData.append('file', data.file);

    const response = await axiosInstance.post(
      `/api/assignments/${assignmentId}/submit`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data;
  },

  // RESUBMIT ASSIGNMENT
  resubmitAssignment: async (assignmentId, data) => {
    const formData = new FormData();

    if (data.link) formData.append('link', data.link);
    if (data.file) formData.append('file', data.file);

    const response = await axiosInstance.put(
      `/api/assignments/${assignmentId}/resubmit`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data;
  },
};