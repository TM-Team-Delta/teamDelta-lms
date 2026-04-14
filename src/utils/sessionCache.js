const canUseSessionStorage = () =>
  typeof window !== 'undefined' && window.sessionStorage;

export const createTimedCacheEntry = (data) => ({
  data,
  timestamp: Date.now(),
});

export const isCacheEntryFresh = (entry, ttl) =>
  Boolean(entry && Date.now() - entry.timestamp < ttl);

export const readSessionCache = (key) => {
  if (!canUseSessionStorage()) return null;

  try {
    const raw = window.sessionStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const writeSessionCache = (key, entry) => {
  if (!canUseSessionStorage()) return;
  window.sessionStorage.setItem(key, JSON.stringify(entry));
};

export const removeSessionCache = (key) => {
  if (!canUseSessionStorage()) return;
  window.sessionStorage.removeItem(key);
};

export const clearSessionCacheByPrefix = (prefix) => {
  if (!canUseSessionStorage()) return;

  const keysToRemove = [];

  for (let index = 0; index < window.sessionStorage.length; index += 1) {
    const key = window.sessionStorage.key(index);
    if (key?.startsWith(prefix)) {
      keysToRemove.push(key);
    }
  }

  keysToRemove.forEach((key) => {
    window.sessionStorage.removeItem(key);
  });
};
