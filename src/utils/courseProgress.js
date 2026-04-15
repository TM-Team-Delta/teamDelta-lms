import { getStoredCertificateClaim } from './courseCertificateState';

const normalizeId = (value) => {
  if (value === null || value === undefined) return '';
  return String(value);
};

const asArray = (value) => {
  if (Array.isArray(value)) return value;
  if (!value) return [];
  return [value];
};

const getLessonId = (lesson) =>
  normalizeId(lesson?._id ?? lesson?.id ?? lesson?.lessonId);

const getUnitLessons = (unit) =>
  asArray(unit?.sections).flatMap((section) => asArray(section?.learnItems));

const buildCompletedLessonSet = (progressRecord = {}) => {
  const lessonIds = new Set();

  const addValue = (value) => {
    const normalized = normalizeId(value);
    if (normalized) {
      lessonIds.add(normalized);
    }
  };

  const addItems = (items) => {
    asArray(items).forEach((item) => {
      if (typeof item === 'string' || typeof item === 'number') {
        addValue(item);
        return;
      }

      addValue(item?.lessonId ?? item?.id ?? item?._id);
    });
  };

  addItems(progressRecord.completedLessonIds);
  addItems(progressRecord.completedLessons);
  addItems(progressRecord.lessonsCompleted);
  addItems(progressRecord.progress?.completedLessonIds);
  addItems(progressRecord.progress?.completedLessons);
  addItems(progressRecord.progress?.lessonsCompleted);

  return lessonIds;
};

const buildCompletedLessonEntries = (progressRecord = {}) => {
  const entries = [];

  const addItems = (items) => {
    asArray(items).forEach((item) => {
      if (!item || typeof item !== 'object') return;

      const lessonId = normalizeId(item?.lessonId ?? item?.id ?? item?._id);

      if (!lessonId) return;

      entries.push({
        lessonId,
        completedAt: item?.completedAt || item?.updatedAt || item?.date || null,
      });
    });
  };

  addItems(progressRecord.completedLessons);
  addItems(progressRecord.lessonsCompleted);
  addItems(progressRecord.progress?.completedLessons);
  addItems(progressRecord.progress?.lessonsCompleted);

  return entries;
};

export const createEmptyProgressRecord = () => ({
  completedLessonIds: [],
  progressPercent: 0,
});

export const normalizeCourseProgress = (payload = {}) => {
  const data = payload?.data ?? payload;
  const completedLessonIds = [...buildCompletedLessonSet(data)];

  const progressPercentCandidates = [
    data?.progressPercent,
    data?.overallProgress,
    data?.completionRate,
    data?.progress?.progressPercent,
    data?.progress?.overallProgress,
    data?.progress?.completionRate,
  ];

  const progressPercent =
    progressPercentCandidates.find(
      (value) => typeof value === 'number' && !Number.isNaN(value)
    ) || 0;

  return {
    ...data,
    completedLessonIds,
    progressPercent,
  };
};

export const getCourseUnitSequence = (course) => {
  if (!course?.courseOutline) return [];

  return course.courseOutline
    .flatMap((module, moduleIndex) =>
      asArray(module.units).map((unit, unitIndex) => ({
        moduleId: module.id,
        moduleIndex,
        moduleTitle: module.title,
        unitId: unit.id,
        unitIndex,
        globalIndex: 0,
        unit,
      }))
    )
    .map((item, index) => ({
      ...item,
      globalIndex: index,
    }));
};

export const deriveCourseProgress = (course, progressRecord) => {
  const safeProgress = progressRecord || createEmptyProgressRecord();
  const unitSequence = getCourseUnitSequence(course);
  const completedLessons = buildCompletedLessonSet(safeProgress);
  const completedLessonEntries = buildCompletedLessonEntries(safeProgress);

  let highestUnlockedIndex = 0;
  const statusByUnitId = {};

  unitSequence.forEach((item, index) => {
    const unitLessons = getUnitLessons(item.unit);
    const lessonIds = unitLessons.map(getLessonId).filter(Boolean);
    const completedLessonCount = lessonIds.filter((lessonId) =>
      completedLessons.has(lessonId)
    ).length;
    const totalLessons = lessonIds.length;
    const isCompleted = totalLessons > 0 && completedLessonCount === totalLessons;
    const hasStarted = completedLessonCount > 0;

    if (isCompleted) {
      highestUnlockedIndex = Math.max(highestUnlockedIndex, index + 1);
      statusByUnitId[item.unitId] = 'completed';
      return;
    }

    if (hasStarted) {
      highestUnlockedIndex = Math.max(highestUnlockedIndex, index);
      statusByUnitId[item.unitId] = 'in-progress';
      return;
    }

    statusByUnitId[item.unitId] = index <= highestUnlockedIndex ? 'available' : 'locked';
  });

  const completedCount = unitSequence.filter(
    (item) => statusByUnitId[item.unitId] === 'completed'
  ).length;

  const lessonCounts = unitSequence.reduce(
    (totals, item) => {
      const lessonIds = getUnitLessons(item.unit).map(getLessonId).filter(Boolean);
      const completedLessonCount = lessonIds.filter((lessonId) =>
        completedLessons.has(lessonId)
      ).length;

      totals.totalLessons += lessonIds.length;
      totals.completedLessons += completedLessonCount;
      return totals;
    },
    { totalLessons: 0, completedLessons: 0 }
  );

  const derivedPercent = lessonCounts.totalLessons
    ? Math.round((lessonCounts.completedLessons / lessonCounts.totalLessons) * 100)
    : 0;
  const completionDates = completedLessonEntries
    .map((item) => item.completedAt)
    .filter(Boolean)
    .sort();

  return {
    unitSequence,
    statusByUnitId,
    completedCount,
    totalUnits: unitSequence.length,
    totalLessons: lessonCounts.totalLessons,
    completedLessons: lessonCounts.completedLessons,
    progressPercent: safeProgress.progressPercent || derivedPercent,
    courseStartDate:
      safeProgress.startedAt ||
      safeProgress.progress?.startedAt ||
      completionDates[0] ||
      null,
    courseEndDate: completionDates[completionDates.length - 1] || null,
    isCourseCompleted:
      unitSequence.length > 0 && completedCount === unitSequence.length,
  };
};

export const buildCourseProgressSnapshot = (courses = [], progressByCourse = {}) => {
  const snapshots = courses.map((course) => {
    const progress = deriveCourseProgress(course, progressByCourse[course.id]);
    const nextUnit =
      progress.unitSequence.find((item) => {
        const status = progress.statusByUnitId[item.unitId];
        return status === 'in-progress' || status === 'available';
      }) || progress.unitSequence[0];

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
    (total, snapshot) => total + snapshot.progress.completedLessons,
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

const parseDate = (value) => {
  if (!value) return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
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

export const buildUpcomingLessons = (courses = [], progressByCourse = {}) => {
  const snapshot = buildCourseProgressSnapshot(courses, progressByCourse);

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

export const buildWeeklyGoal = (
  courses = [],
  progressByCourse = {},
  now = new Date()
) => {
  const snapshot = buildCourseProgressSnapshot(courses, progressByCourse);
  const weekStart = startOfWeek(now);
  const weekEnd = endOfWeek(now);

  const weeklyProgress = snapshot.snapshots.reduce(
    (total, item) => {
      const completedLessons = asArray(
        progressByCourse[item.course.id]?.completedLessons ||
          progressByCourse[item.course.id]?.lessonsCompleted
      );

      completedLessons.forEach((lesson) => {
        const completedAt = parseDate(
          lesson?.completedAt || lesson?.updatedAt || lesson?.date
        );

        if (!completedAt || completedAt < weekStart || completedAt > weekEnd) {
          return;
        }

        total.completedLessons += 1;

        const lessonId = getLessonId(lesson);
        item.progress.unitSequence.forEach((entry) => {
          getUnitLessons(entry.unit).forEach((unitLesson) => {
            if (getLessonId(unitLesson) === lessonId) {
              total.minutesSpent += durationToMinutes(unitLesson?.duration);
            }
          });
        });
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

export const buildMilestones = ({
  enrolledCourses = [],
  progressSnapshot,
  assignmentSummary,
}) => {
  const snapshot =
    progressSnapshot || buildCourseProgressSnapshot(enrolledCourses, {});
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

export const buildClaimedCertificates = (courses = []) =>
  courses
    .map((course) => {
      const claim = getStoredCertificateClaim(course.id);

      if (!claim) return null;

      return {
        id: `local-${course.id}`,
        title: course.title,
        name: course.title,
        mentor: course.mentorName,
        instructorName: course.mentorName,
        completedAt: claim.claimedAt || null,
        issuedAt: claim.claimedAt || null,
        source: 'local',
        claim,
      };
    })
    .filter(Boolean);
