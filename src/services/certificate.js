import axiosInstance from "../config/axios";

// BASE PATH 
const CERT_API = "/api/certifications";

// GET all certifications
export const getCertifications = async () => {
  const response = await axiosInstance.get(CERT_API);
  return response.data;
};

// DOWNLOAD certificate (FULL URL)
export const downloadCertificate = (id) => {
  return `${axiosInstance.defaults.baseURL}${CERT_API}/${id}/download`;
};

// SHARE certificate
export const shareCertificate = async (id) => {
  const response = await axiosInstance.post(`${CERT_API}/${id}/share`);
  return response.data;
};