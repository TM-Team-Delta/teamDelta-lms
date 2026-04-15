const CERTIFICATE_CLAIM_KEY = 'trueminds-course-certificate-claims';

const canUseStorage = () => typeof window !== 'undefined' && window.localStorage;

const readAllClaims = () => {
  if (!canUseStorage()) return {};

  try {
    const raw = window.localStorage.getItem(CERTIFICATE_CLAIM_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

const writeAllClaims = (claims) => {
  if (!canUseStorage()) return;
  window.localStorage.setItem(CERTIFICATE_CLAIM_KEY, JSON.stringify(claims));
};

export const getStoredCertificateClaim = (courseId) => {
  const claims = readAllClaims();
  return claims[String(courseId)] || null;
};

export const saveStoredCertificateClaim = (courseId, claim) => {
  const claims = readAllClaims();
  claims[String(courseId)] = claim;
  writeAllClaims(claims);
};
