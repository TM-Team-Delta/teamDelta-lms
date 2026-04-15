const SUBMITTED_STATUSES = ['submitted', 'completed', 'graded'];

const normalizeStatusValue = (value) =>
  String(value || 'pending')
    .replace(/[_-]+/g, ' ')
    .trim()
    .toLowerCase();

const asArray = (value) => {
  if (Array.isArray(value)) return value;
  if (!value) return [];
  return [value];
};

const normalizeId = (value) => {
  if (value === null || value === undefined) return '';
  return String(value);
};

const normalizeText = (value) =>
  String(value || '')
    .trim()
    .toLowerCase();

const getLessonTitle = (assignment) =>
  assignment?.lessonTitle ||
  assignment?.lessonName ||
  assignment?.title ||
  'Untitled assignment';

const getAssignmentDescription = (assignment) =>
  assignment?.description || assignment?.instructions || 'No description provided.';

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

const buildLessonLinkLookup = (courses = []) => {
  const lessonMap = new Map();

  courses.forEach((course) => {
    asArray(course?.courseOutline).forEach((module) => {
      asArray(module?.units).forEach((unit, unitIndex) => {
        asArray(unit?.sections).forEach((section, sectionIndex) => {
          asArray(section?.learnItems).forEach((lesson, lessonIndex) => {
            const key = `${normalizeId(course?.id)}::${normalizeText(lesson?.title)}`;
            lessonMap.set(
              key,
              `/dashboard/course-detail/${course.id}/modules/${module.id}/items/${unitIndex}/sections/${sectionIndex}/lessons/${lessonIndex}`
            );
          });
        });
      });
    });
  });

  return lessonMap;
};

const normalizeApiAssignment = (assignment, lessonLinkLookup) => {
  const courseId = normalizeId(
    assignment?.courseId || assignment?.course?._id || assignment?.course?.id
  );
  const lessonTitle = getLessonTitle(assignment);
  const lessonKey = `${courseId}::${normalizeText(lessonTitle)}`;

  return {
    ...assignment,
    source: 'api',
    assignmentId: normalizeId(assignment?.id || assignment?._id),
    id: normalizeId(assignment?.id || assignment?._id),
    lessonId: normalizeId(
      assignment?.lessonId || assignment?.lesson?._id || assignment?.lesson?.id
    ),
    lessonTitle,
    description: getAssignmentDescription(assignment),
    courseId,
    courseTitle:
      assignment?.courseTitle ||
      assignment?.course?.title ||
      assignment?.course?.name ||
      assignment?.courseName ||
      '',
    dueDate: assignment?.dueDate || assignment?.deadline || '',
    lessonLink: assignment?.lessonLink || lessonLinkLookup.get(lessonKey) || '',
    canSubmit: true,
  };
};

export const buildMergedAssignments = ({
  assignmentsPayload,
  courses = [],
}) => {
  const normalizedApi = normalizeAssignmentListResponse(assignmentsPayload);
  const lessonLinkLookup = buildLessonLinkLookup(courses);
  const assignments = normalizedApi.assignments.map((assignment) =>
    normalizeApiAssignment(assignment, lessonLinkLookup)
  );
  const submitted = assignments.filter(isSubmittedAssignment).length;

  return {
    assignments,
    summary: normalizedApi.summary || {
      total: assignments.length,
      submitted,
      pending: assignments.length - submitted,
    },
    apiSummary: normalizedApi.summary,
  };
};
