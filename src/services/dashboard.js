import axiosInstance from '../config/axios';
import {
  createTimedCacheEntry,
  isCacheEntryFresh,
  readSessionCache,
  removeSessionCache,
  writeSessionCache,
} from '../utils/sessionCache';

const DASHBOARD_CACHE_KEY = 'trueminds-dashboard';
const DASHBOARD_CACHE_TTL = 5 * 60 * 1000;

let memoryCache = null;

export const dashboardService = {
  peekDashboard: () => {
    const entry = memoryCache || readSessionCache(DASHBOARD_CACHE_KEY);
    if (!entry) return null;
    memoryCache = entry;
    return entry.data;
  },

  clearDashboardCache: () => {
    memoryCache = null;
    removeSessionCache(DASHBOARD_CACHE_KEY);
  },

  getDashboard: async ({ force = false } = {}) => {
    const cachedEntry = memoryCache || readSessionCache(DASHBOARD_CACHE_KEY);

    if (!force && isCacheEntryFresh(cachedEntry, DASHBOARD_CACHE_TTL)) {
      memoryCache = cachedEntry;
      return cachedEntry.data;
    }

    const response = await axiosInstance.get('/api/dashboard');
    const entry = createTimedCacheEntry(response.data);

    memoryCache = entry;
    writeSessionCache(DASHBOARD_CACHE_KEY, entry);

    return response.data;
  },
};
