import axiosInstance from '../config/axios';

export const certificateService = {
  getCertificates: async () => {
    const response = await axiosInstance.get('/api/certifications');
    return response.data;
  },

  createCertificate: async (payload) => {
    const response = await axiosInstance.post('/api/certifications', payload);
    return response.data;
  },

  getCertificateById: async (id) => {
    const response = await axiosInstance.get(`/api/certifications/${id}`);
    return response.data;
  },

  deleteCertificate: async (id) => {
    const response = await axiosInstance.delete(`/api/certifications/${id}`);
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
