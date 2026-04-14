import axiosInstance from '../config/axios';
import {
  createTimedCacheEntry,
  isCacheEntryFresh,
  readSessionCache,
  removeSessionCache,
  writeSessionCache,
} from '../utils/sessionCache';

const NOTIFICATIONS_CACHE_KEY = 'trueminds-notifications';
const NOTIFICATIONS_CACHE_TTL = 3 * 60 * 1000;

let notificationsCache = null;

export const notificationsService = {
  peekNotifications: () => {
    const entry = notificationsCache || readSessionCache(NOTIFICATIONS_CACHE_KEY);
    if (!entry) return null;
    notificationsCache = entry;
    return entry.data;
  },

  clearCache: () => {
    notificationsCache = null;
    removeSessionCache(NOTIFICATIONS_CACHE_KEY);
  },

  getNotifications: async (params = {}, { force = false } = {}) => {
    const useDefaultParams = !params || Object.keys(params).length === 0;
    const cachedEntry =
      useDefaultParams
        ? notificationsCache || readSessionCache(NOTIFICATIONS_CACHE_KEY)
        : null;

    if (!force && isCacheEntryFresh(cachedEntry, NOTIFICATIONS_CACHE_TTL)) {
      notificationsCache = cachedEntry;
      return cachedEntry.data;
    }

    const response = await axiosInstance.get('/api/notifications', { params });

    if (useDefaultParams) {
      const entry = createTimedCacheEntry(response.data);
      notificationsCache = entry;
      writeSessionCache(NOTIFICATIONS_CACHE_KEY, entry);
    }

    return response.data;
  },

  markAllAsRead: async () => {
    const response = await axiosInstance.patch('/api/notifications/read-all');
    notificationsService.clearCache();
    return response.data;
  },

  markAsRead: async (notificationId) => {
    const response = await axiosInstance.patch(
      `/api/notifications/${notificationId}/read`
    );
    notificationsService.clearCache();
    return response.data;
  },

  deleteNotification: async (notificationId) => {
    const response = await axiosInstance.delete(
      `/api/notifications/${notificationId}`
    );
    notificationsService.clearCache();
    return response.data;
  },
};
