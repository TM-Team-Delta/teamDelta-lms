import axiosInstance from '../config/axios';
import {
  createTimedCacheEntry,
  isCacheEntryFresh,
  readSessionCache,
  removeSessionCache,
  writeSessionCache,
} from '../utils/sessionCache';

const CERTIFICATES_CACHE_KEY = 'trueminds-certificates';
const CERTIFICATES_CACHE_TTL = 5 * 60 * 1000;

let certificatesCache = null;

export const certificateService = {
  peekCertificates: () => {
    const entry = certificatesCache || readSessionCache(CERTIFICATES_CACHE_KEY);
    if (!entry) return null;
    certificatesCache = entry;
    return entry.data;
  },

  clearCertificatesCache: () => {
    certificatesCache = null;
    removeSessionCache(CERTIFICATES_CACHE_KEY);
  },

  getCertificates: async ({ force = false } = {}) => {
    const cachedEntry =
      certificatesCache || readSessionCache(CERTIFICATES_CACHE_KEY);

    if (!force && isCacheEntryFresh(cachedEntry, CERTIFICATES_CACHE_TTL)) {
      certificatesCache = cachedEntry;
      return cachedEntry.data;
    }

    const response = await axiosInstance.get('/api/certifications');
    const entry = createTimedCacheEntry(response.data);

    certificatesCache = entry;
    writeSessionCache(CERTIFICATES_CACHE_KEY, entry);

    return response.data;
  },

  createCertificate: async (payload) => {
    const response = await axiosInstance.post('/api/certifications', payload);
    certificateService.clearCertificatesCache();
    return response.data;
  },

  getCertificateById: async (id) => {
    const response = await axiosInstance.get(`/api/certifications/${id}`);
    return response.data;
  },

  deleteCertificate: async (id) => {
    const response = await axiosInstance.delete(`/api/certifications/${id}`);
    certificateService.clearCertificatesCache();
    return response.data;
  },

  getCertificatePreview: async (id) => {
    const response = await axiosInstance.get(`/api/certifications/${id}/preview`);
    return response.data;
  },

  downloadCertificate: async (id) => {
    return axiosInstance.get(`/api/certifications/${id}/download`, {
      responseType: 'blob',
    });
  },

  viewCertificate: async (id) => {
    return axiosInstance.get(`/api/certifications/${id}/view`, {
      responseType: 'blob',
    });
  },

  shareCertificate: async (id) => {
    const response = await axiosInstance.post(`/api/certifications/${id}/share`);
    return response.data;
  },

  getSharedCertificate: async (token) => {
    const response = await axiosInstance.get(`/api/certifications/share/${token}`);
    return response.data;
  },
};

export const getCertifications = certificateService.getCertificates;
export const createCertification = certificateService.createCertificate;
export const getCertificationById = certificateService.getCertificateById;
export const deleteCertification = certificateService.deleteCertificate;
export const getCertificatePreview = certificateService.getCertificatePreview;
export const downloadCertificate = certificateService.downloadCertificate;
export const viewCertificate = certificateService.viewCertificate;
export const shareCertificate = certificateService.shareCertificate;
export const getSharedCertificate = certificateService.getSharedCertificate;
