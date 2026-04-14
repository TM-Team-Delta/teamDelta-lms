import axiosInstance from '../config/axios';

const COURSE_CACHE_TTL = 5 * 60 * 1000;
const ENROLLED_CACHE_KEY = 'trueminds-enrolled-course-ids';

const memoryCache = {
  courses: null,
  enrolledCourses: null,
  courseById: new Map(),
  lessonByKey: new Map(),
};

const canUseStorage = () => typeof window !== 'undefined' && window.sessionStorage;

const createCacheEntry = (data) => ({
  data,
  timestamp: Date.now(),
});

const isFresh = (entry) =>
  Boolean(entry && Date.now() - entry.timestamp < COURSE_CACHE_TTL);

const readEnrolledIds = () => {
  if (typeof window === 'undefined') return new Set();

  try {
    const raw = window.localStorage.getItem(ENROLLED_CACHE_KEY);
    return new Set(raw ? JSON.parse(raw) : []);
  } catch {
    return new Set();
  }
};

const writeEnrolledIds = (ids) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(ENROLLED_CACHE_KEY, JSON.stringify([...ids]));
};

const addEnrolledId = (courseId) => {
  const ids = readEnrolledIds();
  ids.add(String(courseId));
  writeEnrolledIds(ids);
};

const applyLocalEnrollment = (payload) => {
  const ids = readEnrolledIds();
  const data = payload?.data;

  if (Array.isArray(data)) {
    return {
      ...payload,
      data: data.map((course) =>
        ids.has(String(course?.id ?? course?._id))
          ? { ...course, isEnrolled: true }
          : course
      ),
    };
  }

  if (data && typeof data === 'object') {
    const resolvedId = String(data?.id ?? data?._id ?? '');
    if (ids.has(resolvedId)) {
      return {
        ...payload,
        data: { ...data, isEnrolled: true },
      };
    }
  }

  return payload;
};

const saveSessionCache = (key, entry) => {
  if (!canUseStorage()) return;
  window.sessionStorage.setItem(key, JSON.stringify(entry));
};

const loadSessionCache = (key) => {
  if (!canUseStorage()) return null;

  try {
    const raw = window.sessionStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const getCourseCacheKey = (courseId) => `trueminds-course-${courseId}`;
const getLessonCacheKey = (courseId, unitId, lessonIndex) =>
  `trueminds-lesson-${courseId}-${unitId}-${lessonIndex}`;

export const coursesService = {
  clearAllCaches: () => {
    memoryCache.courses = null;
    memoryCache.enrolledCourses = null;
    memoryCache.courseById.clear();
    memoryCache.lessonByKey.clear();

    if (!canUseStorage()) return;

    const keysToRemove = [];

    for (let index = 0; index < window.sessionStorage.length; index += 1) {
      const key = window.sessionStorage.key(index);
      if (key?.startsWith('trueminds-course-') || key?.startsWith('trueminds-lesson-')) {
        keysToRemove.push(key);
      }
    }

    keysToRemove.push('trueminds-courses', 'trueminds-enrolled-courses');

    [...new Set(keysToRemove)].forEach((key) => {
      window.sessionStorage.removeItem(key);
    });
  },

  peekCourses: () => {
    const entry = memoryCache.courses || loadSessionCache('trueminds-courses');
    if (!entry) return null;
    memoryCache.courses = entry;
    return applyLocalEnrollment(entry.data);
  },

  peekEnrolledCourses: () => {
    const entry =
      memoryCache.enrolledCourses || loadSessionCache('trueminds-enrolled-courses');
    if (!entry) return null;
    memoryCache.enrolledCourses = entry;
    return applyLocalEnrollment(entry.data);
  },

  peekCourseById: (courseId) => {
    const memoryEntry = memoryCache.courseById.get(courseId);
    const sessionEntry = loadSessionCache(getCourseCacheKey(courseId));
    const entry = memoryEntry || sessionEntry;
    if (!entry) return null;
    memoryCache.courseById.set(courseId, entry);
    return applyLocalEnrollment(entry.data);
  },

  getCourses: async ({ force = false } = {}) => {
    const cached = coursesService.peekCourses();
    if (!force && isFresh(memoryCache.courses || loadSessionCache('trueminds-courses'))) {
      return cached;
    }

    const response = await axiosInstance.get('/api/courses');
    const payload = applyLocalEnrollment(response.data);
    const entry = createCacheEntry(payload);
    memoryCache.courses = entry;
    saveSessionCache('trueminds-courses', entry);
    return payload;
  },

  getEnrolledCourses: async ({ force = false } = {}) => {
    const cacheEntry =
      memoryCache.enrolledCourses || loadSessionCache('trueminds-enrolled-courses');
    if (!force && isFresh(cacheEntry)) {
      return applyLocalEnrollment(cacheEntry.data);
    }

    const response = await axiosInstance.get('/api/courses/enrolled');
    const payload = applyLocalEnrollment(response.data);
    const entry = createCacheEntry(payload);
    memoryCache.enrolledCourses = entry;
    saveSessionCache('trueminds-enrolled-courses', entry);

    const ids = new Set(
      (payload?.data || []).map((course) => String(course?.id ?? course?._id))
    );
    writeEnrolledIds(ids);

    return payload;
  },

  getMyCourses: async () => {
    const response = await axiosInstance.get('/api/courses/my-courses');
    return response.data;
  },

  getCourseById: async (courseId, { force = false } = {}) => {
    const cacheEntry =
      memoryCache.courseById.get(courseId) || loadSessionCache(getCourseCacheKey(courseId));
    if (!force && isFresh(cacheEntry)) {
      return applyLocalEnrollment(cacheEntry.data);
    }

    const response = await axiosInstance.get(`/api/courses/${courseId}`);
    const payload = applyLocalEnrollment(response.data);
    const entry = createCacheEntry(payload);
    memoryCache.courseById.set(courseId, entry);
    saveSessionCache(getCourseCacheKey(courseId), entry);
    return payload;
  },

  enrollInCourse: async (courseId) => {
    const response = await axiosInstance.post(`/api/courses/${courseId}/enroll`);
    addEnrolledId(courseId);

    const cachedCourseEntry =
      memoryCache.courseById.get(courseId) || loadSessionCache(getCourseCacheKey(courseId));
    if (cachedCourseEntry?.data?.data) {
      const updatedCourseEntry = createCacheEntry({
        ...cachedCourseEntry.data,
        data: {
          ...cachedCourseEntry.data.data,
          isEnrolled: true,
        },
      });
      memoryCache.courseById.set(courseId, updatedCourseEntry);
      saveSessionCache(getCourseCacheKey(courseId), updatedCourseEntry);
    }

    memoryCache.courses = null;
    memoryCache.enrolledCourses = null;
    if (canUseStorage()) {
      window.sessionStorage.removeItem('trueminds-courses');
      window.sessionStorage.removeItem('trueminds-enrolled-courses');
    }

    return applyLocalEnrollment(response.data);
  },

  getLessonByIndex: async (courseId, unitId, lessonIndex, { force = false } = {}) => {
    const key = `${courseId}-${unitId}-${lessonIndex}`;
    const cacheEntry =
      memoryCache.lessonByKey.get(key) ||
      loadSessionCache(getLessonCacheKey(courseId, unitId, lessonIndex));

    if (!force && isFresh(cacheEntry)) {
      return cacheEntry.data;
    }

    const response = await axiosInstance.get(
      `/api/courses/${courseId}/units/${unitId}/lessons/${lessonIndex}`
    );
    const entry = createCacheEntry(response.data);
    memoryCache.lessonByKey.set(key, entry);
    saveSessionCache(getLessonCacheKey(courseId, unitId, lessonIndex), entry);
    return response.data;
  },

  getDetailedCourses: async (courseIds = [], options = {}) => {
    const uniqueIds = [...new Set(courseIds.filter(Boolean))];
    const courses = await Promise.all(
      uniqueIds.map((courseId) => coursesService.getCourseById(courseId, options))
    );
    return courses;
  },
};
