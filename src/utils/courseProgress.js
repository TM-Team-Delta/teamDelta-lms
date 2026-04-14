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

export const getAllStoredCourseProgress = () => readAllProgress();

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

export const buildCourseProgressSnapshot = (courses = []) => {
  const snapshots = courses.map((course) => {
    const progress = deriveCourseProgress(course, getStoredCourseProgress(course.id));
    const nextUnit =
      progress.unitSequence.find(
        (item) =>
          progress.statusByUnitId[item.unitId] === 'in-progress' ||
          progress.statusByUnitId[item.unitId] === 'available'
      ) || progress.unitSequence[0];

    return {
      course,
      progress,
      nextUnit,
    };
  });

  const courseCount = snapshots.length;
  const overallProgress = courseCount
    ? Math.round(
        snapshots.reduce(
          (total, snapshot) => total + snapshot.progress.progressPercent,
          0
        ) / courseCount
      )
    : 0;

  const lessonsDone = snapshots.reduce(
    (total, snapshot) => total + snapshot.progress.completedCount,
    0
  );

  const certificates = snapshots.filter(
    (snapshot) => snapshot.progress.isCourseCompleted
  ).length;

  const resumeSnapshot =
    snapshots.find((snapshot) =>
      snapshot.progress.unitSequence.some((item) => {
        const status = snapshot.progress.statusByUnitId[item.unitId];
        return status === 'in-progress' || status === 'available';
      })
    ) || snapshots[0] || null;

  return {
    snapshots,
    overallProgress,
    lessonsDone,
    certificates,
    resumeSnapshot,
  };
};

const startOfWeek = (date) => {
  const nextDate = new Date(date);
  const day = nextDate.getDay();
  const diff = (day === 0 ? -6 : 1) - day;
  nextDate.setDate(nextDate.getDate() + diff);
  nextDate.setHours(0, 0, 0, 0);
  return nextDate;
};

const endOfWeek = (date) => {
  const nextDate = startOfWeek(date);
  nextDate.setDate(nextDate.getDate() + 6);
  nextDate.setHours(23, 59, 59, 999);
  return nextDate;
};

const formatWeekRange = (date = new Date()) => {
  const start = startOfWeek(date);
  const end = endOfWeek(date);
  const startMonth = start.toLocaleDateString('en-US', { month: 'short' });
  const endMonth = end.toLocaleDateString('en-US', { month: 'short' });

  return `${startMonth} ${start.getDate()} - ${endMonth} ${end.getDate()}`;
};

const isDateWithinRange = (value, rangeStart, rangeEnd) => {
  if (!value) return false;
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return false;
  return parsed >= rangeStart && parsed <= rangeEnd;
};

const durationToMinutes = (value) => {
  const text = String(value || '')
    .trim()
    .toLowerCase();

  if (!text) return 0;

  const match = text.match(/(\d+(?:\.\d+)?)/);
  if (!match) return 0;

  const amount = Number(match[1]);
  if (Number.isNaN(amount)) return 0;

  if (text.includes('hour') || text.includes('hr')) {
    return amount * 60;
  }

  if (text.includes('min')) {
    return amount;
  }

  return 0;
};

export const buildUpcomingLessons = (courses = []) => {
  const snapshot = buildCourseProgressSnapshot(courses);

  return snapshot.snapshots
    .filter((item) => item.nextUnit?.unit)
    .map((item) => ({
      id: `${item.course.id}-${item.nextUnit.unit.id}`,
      title: `${item.course.title}: ${item.nextUnit.unit.title}`,
      time: item.nextUnit.unit.lessonPage?.time || 'Continue learning',
      duration: item.nextUnit.unit.lessonPage?.time || 'Continue learning',
      courseId: item.course.id,
    }))
    .slice(0, 3);
};

export const buildWeeklyGoal = (courses = [], now = new Date()) => {
  const snapshot = buildCourseProgressSnapshot(courses);
  const weekStart = startOfWeek(now);
  const weekEnd = endOfWeek(now);

  const weeklyProgress = snapshot.snapshots.reduce(
    (total, item) => {
      const progress = getStoredCourseProgress(item.course.id);
      const completedUnits = progress.completedUnits || {};

      item.progress.unitSequence.forEach((entry) => {
        const completedAt = completedUnits[entry.unitId];

        if (!isDateWithinRange(completedAt, weekStart, weekEnd)) {
          return;
        }

        total.completedLessons += 1;
        total.minutesSpent += durationToMinutes(entry.unit?.lessonPage?.time);
      });

      return total;
    },
    { completedLessons: 0, minutesSpent: 0 }
  );

  const totalLessons = Math.max(snapshot.snapshots.length * 2, 2);
  const timeSpentHours =
    weeklyProgress.minutesSpent > 0
      ? Math.round((weeklyProgress.minutesSpent / 60) * 10) / 10
      : 0;

  return {
    weekRange: formatWeekRange(now),
    completedLessons: weeklyProgress.completedLessons,
    totalLessons,
    percentage: totalLessons
      ? Math.min(
          Math.round((weeklyProgress.completedLessons / totalLessons) * 100),
          100
        )
      : 0,
    timeSpentHours,
    quizzesDone: 0,
  };
};

export const buildClaimedCertificates = (courses = []) =>
  courses
    .map((course) => {
      const progress = deriveCourseProgress(course, getStoredCourseProgress(course.id));
      const claim = progress.certificateClaim;

      if (!claim) return null;

      return {
        id: `local-${course.id}`,
        title: course.title,
        name: course.title,
        mentor: course.mentorName,
        instructorName: course.mentorName,
        completedAt: claim.claimedAt || progress.courseEndDate || progress.courseStartDate,
        issuedAt: claim.claimedAt || progress.courseEndDate || progress.courseStartDate,
        source: 'local',
        claim,
      };
    })
    .filter(Boolean);

export const buildMilestones = ({
  enrolledCourses = [],
  progressSnapshot,
  assignmentSummary,
}) => {
  const snapshot =
    progressSnapshot || buildCourseProgressSnapshot(enrolledCourses);
  const enrolledCount = enrolledCourses.length;
  const lessonsDone = snapshot.lessonsDone;
  const submittedAssignments = assignmentSummary?.submitted || 0;
  const pendingAssignments = assignmentSummary?.pending || 0;
  const completedCourses = snapshot.certificates;

  return [
    {
      title: 'Enroll in a course',
      status: enrolledCount > 0 ? 'completed' : 'upcoming',
      description:
        enrolledCount > 0
          ? `${enrolledCount} course${enrolledCount === 1 ? '' : 's'} enrolled`
          : 'Start your learning journey',
    },
    {
      title: 'Complete first lesson',
      status:
        lessonsDone > 0
          ? 'completed'
          : enrolledCount > 0
            ? 'in-progress'
            : 'upcoming',
      description:
        lessonsDone > 0
          ? `${lessonsDone} lesson${lessonsDone === 1 ? '' : 's'} completed`
          : 'Finish your first lesson',
    },
    {
      title: 'Submit first assignment',
      status:
        submittedAssignments > 0
          ? 'completed'
          : pendingAssignments > 0
            ? 'in-progress'
            : 'upcoming',
      description:
        submittedAssignments > 0
          ? `${submittedAssignments} assignment${
              submittedAssignments === 1 ? '' : 's'
            } submitted`
          : pendingAssignments > 0
            ? `${pendingAssignments} assignment${
                pendingAssignments === 1 ? '' : 's'
              } waiting`
            : 'Submit your first assignment',
    },
    {
      title: 'Complete a course',
      status:
        completedCourses > 0
          ? 'completed'
          : enrolledCount > 0
            ? 'in-progress'
            : 'upcoming',
      description:
        completedCourses > 0
          ? `${completedCourses} course${
              completedCourses === 1 ? '' : 's'
            } completed`
          : 'Finish an entire course',
    },
  ];
};
