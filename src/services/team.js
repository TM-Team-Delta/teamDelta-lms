import axiosInstance from '../config/axios';
import {
  createTimedCacheEntry,
  isCacheEntryFresh,
  readSessionCache,
  removeSessionCache,
  writeSessionCache,
} from '../utils/sessionCache';

const TEAM_CACHE_KEY = 'trueminds-team';
const TEAM_CACHE_TTL = 5 * 60 * 1000;

let teamCache = null;

export const teamService = {
  peekOverview: () => {
    const entry = teamCache || readSessionCache(TEAM_CACHE_KEY);
    if (!entry) return null;
    teamCache = entry;
    return entry.data;
  },

  clearCache: () => {
    teamCache = null;
    removeSessionCache(TEAM_CACHE_KEY);
  },

  getOverview: async ({ force = false } = {}) => {
    const cachedEntry = teamCache || readSessionCache(TEAM_CACHE_KEY);

    if (!force && isCacheEntryFresh(cachedEntry, TEAM_CACHE_TTL)) {
      teamCache = cachedEntry;
      return cachedEntry.data;
    }

    const response = await axiosInstance.get('/api/team');
    const entry = createTimedCacheEntry(response.data);
    teamCache = entry;
    writeSessionCache(TEAM_CACHE_KEY, entry);
    return response.data;
  },
};
