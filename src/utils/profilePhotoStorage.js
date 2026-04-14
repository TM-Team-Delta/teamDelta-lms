const PROFILE_PHOTO_KEY_PREFIX = 'profilePhotoUrl';

const canUseStorage = () => typeof window !== 'undefined' && window.localStorage;

export const resolveProfilePhotoScope = (user) =>
  String(user?.id || user?._id || user?.email || 'guest');

const getProfilePhotoStorageKey = (scope) =>
  `${PROFILE_PHOTO_KEY_PREFIX}:${scope || 'guest'}`;

export const getStoredProfilePhoto = (scope) => {
  if (!canUseStorage()) return '';

  return window.localStorage.getItem(getProfilePhotoStorageKey(scope)) || '';
};

export const setStoredProfilePhoto = (scope, value) => {
  if (!canUseStorage() || !scope || !value) return;
  window.localStorage.setItem(getProfilePhotoStorageKey(scope), value);
};

export const removeStoredProfilePhoto = (scope) => {
  if (!canUseStorage() || !scope) return;
  window.localStorage.removeItem(getProfilePhotoStorageKey(scope));
};
