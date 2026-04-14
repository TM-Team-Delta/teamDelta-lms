const SUBMITTED_STATUSES = ['submitted', 'completed', 'graded'];
const FALLBACK_ASSIGNMENTS_KEY = 'trueminds-fallback-assignments';
const FALLBACK_ASSIGNMENTS_PER_COURSE = 2;
const FALLBACK_ASSIGNMENTS_SCOPE_KEY = 'trueminds-fallback-assignments-scope';

const normalizeStatusValue = (value) =>
  String(value || 'pending')
    .replace(/[_-]+/g, ' ')
    .trim()
    .toLowerCase();

const canUseStorage = () => typeof window !== 'undefined' && window.localStorage;

const getActiveAssignmentScope = () => {
  if (!canUseStorage()) return 'guest';

  return window.localStorage.getItem(FALLBACK_ASSIGNMENTS_SCOPE_KEY) || 'guest';
};

const readFullFallbackAssignmentsStore = () => {
  if (!canUseStorage()) return {};

  try {
    const raw = window.localStorage.getItem(FALLBACK_ASSIGNMENTS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

const writeFullFallbackAssignmentsStore = (value) => {
  if (!canUseStorage()) return;
  window.localStorage.setItem(FALLBACK_ASSIGNMENTS_KEY, JSON.stringify(value));
};

const readFallbackAssignmentsStore = () => {
  const fullStore = readFullFallbackAssignmentsStore();
  return fullStore[getActiveAssignmentScope()] || {};
};

const writeFallbackAssignmentsStore = (value) => {
  if (!canUseStorage()) return;

  const fullStore = readFullFallbackAssignmentsStore();
  fullStore[getActiveAssignmentScope()] = value;
  writeFullFallbackAssignmentsStore(fullStore);
};

const addDays = (date, numberOfDays) => {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + numberOfDays);
  return nextDate;
};

const formatDate = (value) => {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return 'No due date';
  }

  return date.toLocaleDateString('en-US');
};

const buildFallbackDescription = (lesson, material, fallbackIndex) =>
  material?.content ||
  material?.title ||
  lesson?.assignmentDescription ||
  `Complete assignment ${fallbackIndex + 1} for ${lesson?.title || 'this lesson'}.`;

const buildAssignmentDedupKey = ({ lessonTitle, description }) =>
  `${String(lessonTitle || '')
    .trim()
    .toLowerCase()}::${String(description || '')
    .trim()
    .toLowerCase()}`;

const getFallbackAssignmentCandidates = (course) => {
  const candidates = [];

  (course?.courseOutline || []).forEach((module) => {
    (module?.units || []).forEach((unit, unitIndex) => {
      (unit?.sections || []).forEach((section, sectionIndex) => {
        (section?.learnItems || []).forEach((lesson, lessonIndex) => {
          const materials = lesson?.materials?.assignments || [];

          if (materials.length > 0) {
            materials.forEach((material, materialIndex) => {
              candidates.push({
                id:
                  material?.id ||
                  `${course.id}-${module.id}-${unit.id}-${lesson.id}-${materialIndex}`,
                lessonTitle: lesson?.title || `Lesson ${lessonIndex + 1}`,
                description: buildFallbackDescription(
                  lesson,
                  material,
                  materialIndex
                ),
                lessonLink: `/dashboard/course-detail/${course.id}/modules/${module.id}/items/${unitIndex}/sections/${sectionIndex}/lessons/${lessonIndex}`,
                courseId: course.id,
                courseTitle: course.title,
              });
            });
          } else if (lesson?.assignmentDescription) {
            candidates.push({
              id: `${course.id}-${module.id}-${unit.id}-${lesson.id}-fallback`,
              lessonTitle: lesson?.title || `Lesson ${lessonIndex + 1}`,
              description: lesson.assignmentDescription,
              lessonLink: `/dashboard/course-detail/${course.id}/modules/${module.id}/items/${unitIndex}/sections/${sectionIndex}/lessons/${lessonIndex}`,
              courseId: course.id,
              courseTitle: course.title,
            });
          }
        });
      });
    });
  });

  return candidates.filter((candidate, index, list) => {
    const dedupKey = buildAssignmentDedupKey(candidate);
    return (
      list.findIndex((item) => buildAssignmentDedupKey(item) === dedupKey) === index
    );
  });
};

const ensureFallbackCourseRecords = (course) => {
  const store = readFallbackAssignmentsStore();
  const existingCourseRecords = store[course.id];

  if (Array.isArray(existingCourseRecords) && existingCourseRecords.length > 0) {
    return existingCourseRecords;
  }

  const selectedCandidates = getFallbackAssignmentCandidates(course).slice(
    0,
    FALLBACK_ASSIGNMENTS_PER_COURSE
  );

  const nextCourseRecords = selectedCandidates.map((candidate, index) => {
    const dueDate = formatDate(addDays(new Date(), 7 * (index + 1)));

    return {
      ...candidate,
      id: `fallback-${candidate.id}`,
      source: 'fallback',
      status: 'pending',
      submissionStatus: 'pending',
      dueDate,
      canSubmit: true,
      submittedAt: null,
    };
  });

  store[course.id] = nextCourseRecords;
  writeFallbackAssignmentsStore(store);

  return nextCourseRecords;
};

export const markFallbackAssignmentSubmitted = (assignmentId, submission = {}) => {
  const store = readFallbackAssignmentsStore();
  let hasUpdated = false;

  Object.keys(store).forEach((courseId) => {
    store[courseId] = (store[courseId] || []).map((assignment) => {
      if (assignment.id !== assignmentId) {
        return assignment;
      }

      hasUpdated = true;

      return {
        ...assignment,
        status: 'submitted',
        submissionStatus: 'submitted',
        submittedAt: new Date().toISOString(),
        submittedLink: submission.link || '',
        submittedFileName: submission.file?.name || '',
      };
    });
  });

  if (hasUpdated) {
    writeFallbackAssignmentsStore(store);
  }
};

export const clearFallbackAssignments = () => {
  if (!canUseStorage()) return;
  const fullStore = readFullFallbackAssignmentsStore();
  delete fullStore[getActiveAssignmentScope()];
  writeFullFallbackAssignmentsStore(fullStore);
};

export const setFallbackAssignmentsScope = (scope) => {
  if (!canUseStorage()) return;
  window.localStorage.setItem(
    FALLBACK_ASSIGNMENTS_SCOPE_KEY,
    String(scope || 'guest')
  );
};

export const getAssignmentStatus = (assignment) =>
  normalizeStatusValue(assignment?.status || assignment?.submissionStatus || 'pending');

export const isSubmittedAssignment = (assignment) =>
  SUBMITTED_STATUSES.includes(getAssignmentStatus(assignment));

export const normalizeAssignmentListResponse = (payload) => {
  const data = payload?.data || payload;

  const assignments =
    data?.assignments ||
    data?.items ||
    data?.rows ||
    data?.results ||
    (Array.isArray(data) ? data : []);

  const safeAssignments = Array.isArray(assignments) ? assignments : [];
  const summary = data?.summary || {
    total: safeAssignments.length,
    submitted: safeAssignments.filter(isSubmittedAssignment).length,
    pending: safeAssignments.filter((assignment) => !isSubmittedAssignment(assignment))
      .length,
  };

  return {
    assignments: safeAssignments,
    summary,
  };
};

const getLessonTitle = (assignment) =>
  assignment?.lessonTitle ||
  assignment?.lessonName ||
  assignment?.title ||
  'Untitled assignment';

const getAssignmentDescription = (assignment) =>
  assignment?.description || assignment?.instructions || 'No description provided.';

export const buildFallbackAssignments = (courses = []) =>
  courses.flatMap((course) => ensureFallbackCourseRecords(course));

export const buildMergedAssignments = ({
  assignmentsPayload,
  courses = [],
}) => {
  const normalizedApi = normalizeAssignmentListResponse(assignmentsPayload);
  const apiAssignments = normalizedApi.assignments.map((assignment) => ({
    ...assignment,
    source: assignment?.source || 'api',
    canSubmit: true,
  }));

  const apiKeys = new Set(
    apiAssignments.map((assignment) =>
      buildAssignmentDedupKey({
        lessonTitle: getLessonTitle(assignment),
        description: getAssignmentDescription(assignment),
      })
    )
  );

  const fallbackAssignments = buildFallbackAssignments(courses).filter(
    (assignment) =>
      !apiKeys.has(
        buildAssignmentDedupKey({
          lessonTitle: getLessonTitle(assignment),
          description: getAssignmentDescription(assignment),
        })
      )
  );

  const mergedAssignments = [...apiAssignments, ...fallbackAssignments];
  const submitted = mergedAssignments.filter(isSubmittedAssignment).length;

  return {
    assignments: mergedAssignments,
    summary: {
      total: mergedAssignments.length,
      submitted,
      pending: mergedAssignments.length - submitted,
    },
    apiSummary: normalizedApi.summary,
  };
};
