import axiosInstance from '../config/axios';
import {
  createTimedCacheEntry,
  isCacheEntryFresh,
  readSessionCache,
  removeSessionCache,
  writeSessionCache,
} from '../utils/sessionCache';

const ASSIGNMENTS_CACHE_KEY = 'trueminds-assignments';
const ASSIGNMENTS_CACHE_TTL = 3 * 60 * 1000;

let assignmentsCache = null;

const buildSubmissionFormData = (data = {}) => {
  const formData = new FormData();

  if (data.link) formData.append('link', data.link);
  if (data.file) formData.append('file', data.file);

  return formData;
};

export const assignmentService = {
  peekAssignments: () => {
    const entry = assignmentsCache || readSessionCache(ASSIGNMENTS_CACHE_KEY);
    if (!entry) return null;
    assignmentsCache = entry;
    return entry.data;
  },

  clearCache: () => {
    assignmentsCache = null;
    removeSessionCache(ASSIGNMENTS_CACHE_KEY);
  },

  getAssignments: async ({ force = false } = {}) => {
    const cachedEntry = assignmentsCache || readSessionCache(ASSIGNMENTS_CACHE_KEY);

    if (!force && isCacheEntryFresh(cachedEntry, ASSIGNMENTS_CACHE_TTL)) {
      assignmentsCache = cachedEntry;
      return cachedEntry.data;
    }

    const response = await axiosInstance.get('/api/assignments');
    const entry = createTimedCacheEntry(response.data);
    assignmentsCache = entry;
    writeSessionCache(ASSIGNMENTS_CACHE_KEY, entry);
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
    assignmentService.clearCache();
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

    assignmentService.clearCache();
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

    assignmentService.clearCache();
    return response.data;
  },

  createAssignment: async (payload) => {
    const response = await axiosInstance.post('/api/assignments/create', payload);
    assignmentService.clearCache();
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
