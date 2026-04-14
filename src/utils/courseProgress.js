const COURSE_PROGRESS_KEY = 'trueminds-course-progress';

const createDefaultProgress = () => ({
  startedUnits: {},
  completedUnits: {},
  certificateClaim: null,
});

const canUseStorage = () => typeof window !== 'undefined' && window.localStorage;

const readAllProgress = () => {
  if (!canUseStorage()) return {};

  try {
    const raw = window.localStorage.getItem(COURSE_PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

const writeAllProgress = (value) => {
  if (!canUseStorage()) return;

  window.localStorage.setItem(COURSE_PROGRESS_KEY, JSON.stringify(value));
};

export const getStoredCourseProgress = (courseId) => {
  const allProgress = readAllProgress();
  return allProgress[courseId] || createDefaultProgress();
};

export const saveStoredCourseProgress = (courseId, progress) => {
  const allProgress = readAllProgress();
  allProgress[courseId] = progress;
  writeAllProgress(allProgress);
};

export const getCourseUnitSequence = (course) => {
  if (!course?.courseOutline) return [];

  return course.courseOutline.flatMap((module, moduleIndex) =>
    (module.units || []).map((unit, unitIndex) => ({
      moduleId: module.id,
      moduleIndex,
      moduleTitle: module.title,
      unitId: unit.id,
      unitIndex,
      globalIndex: 0,
      unit,
    }))
  ).map((item, index) => ({
    ...item,
    globalIndex: index,
  }));
};

export const deriveCourseProgress = (course, progress) => {
  const safeProgress = progress || createDefaultProgress();
  const unitSequence = getCourseUnitSequence(course);
  const startedUnits = safeProgress.startedUnits || {};
  const completedUnits = safeProgress.completedUnits || {};
  const certificateClaim = safeProgress.certificateClaim || null;

  let highestUnlockedIndex = 0;

  unitSequence.forEach((item, index) => {
    if (startedUnits[item.unitId] || completedUnits[item.unitId]) {
      highestUnlockedIndex = Math.max(highestUnlockedIndex, index + 1);
    }
  });

  const statusByUnitId = {};

  unitSequence.forEach((item, index) => {
    if (completedUnits[item.unitId]) {
      statusByUnitId[item.unitId] = 'completed';
      return;
    }

    if (startedUnits[item.unitId]) {
      statusByUnitId[item.unitId] = 'in-progress';
      return;
    }

    statusByUnitId[item.unitId] = index <= highestUnlockedIndex ? 'available' : 'locked';
  });

  const completedCount = unitSequence.filter(
    (item) => statusByUnitId[item.unitId] === 'completed'
  ).length;

  const progressPercent = unitSequence.length
    ? Math.round((completedCount / unitSequence.length) * 100)
    : 0;

  const startDates = Object.values(startedUnits).filter(Boolean).sort();
  const completionDates = Object.values(completedUnits).filter(Boolean).sort();

  return {
    unitSequence,
    statusByUnitId,
    completedCount,
    totalUnits: unitSequence.length,
    progressPercent,
    certificateClaim,
    courseStartDate: startDates[0] || null,
    courseEndDate: completionDates[completionDates.length - 1] || null,
    isCourseCompleted:
      unitSequence.length > 0 && completedCount === unitSequence.length,
  };
};

export const updateCourseProgress = (courseId, updater) => {
  const current = getStoredCourseProgress(courseId);
  const next = updater({
    startedUnits: { ...(current.startedUnits || {}) },
    completedUnits: { ...(current.completedUnits || {}) },
    certificateClaim: current.certificateClaim || null,
  });

  saveStoredCourseProgress(courseId, next);
  return next;
};
