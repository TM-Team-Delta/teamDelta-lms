import bigDataCloudImage from '../assets/course-catalog-image/biddata-and-cloud.png';
import blockchainDevelopmentImage from '../assets/course-catalog-image/blockchain-dev1.png';
import brandingBusinessStrategyImage from '../assets/course-catalog-image/brand-business-strategy.png';
import businessAnalyticsImage from '../assets/course-catalog-image/business-analytic.png';
import dataAnalysisImage from '../assets/course-catalog-image/data-analytic.png';
import dataVisualizationImage from '../assets/course-catalog-image/data-visiualization.png';
import frontendDevelopmentImage from '../assets/course-catalog-image/frontend-dev.png';
import fullStackDevelopmentImage from '../assets/course-catalog-image/full-stack.png';
import immersionDesignImage from '../assets/course-catalog-image/immersion-design.png';
import graphicsDesignImage from '../assets/course-catalog-image/graphic-design1.png';
import projectManagementImage from '../assets/course-catalog-image/project-management.png';
import uiUxDesignImage from '../assets/course-catalog-image/ui-ux.png';

const DEFAULT_TABS = ['overview', 'course-outline', 'discussion'];

const IMAGE_BY_CATEGORY = {
  design: uiUxDesignImage,
  development: fullStackDevelopmentImage,
  'business-strategy': brandingBusinessStrategyImage,
  'data-science-analytics': dataAnalysisImage,
};

const IMAGE_BY_KEYWORD = [
  { keywords: ['ui', 'ux', 'product design'], image: uiUxDesignImage },
  { keywords: ['graphic', 'branding'], image: graphicsDesignImage },
  { keywords: ['frontend'], image: frontendDevelopmentImage },
  { keywords: ['full stack', 'fullstack'], image: fullStackDevelopmentImage },
  { keywords: ['blockchain', 'web3', 'solidity'], image: blockchainDevelopmentImage },
  { keywords: ['cloud', 'big data'], image: bigDataCloudImage },
  { keywords: ['project management'], image: projectManagementImage },
  { keywords: ['immersion'], image: immersionDesignImage },
  { keywords: ['business analytics'], image: businessAnalyticsImage },
  { keywords: ['data visualization'], image: dataVisualizationImage },
  { keywords: ['data analysis'], image: dataAnalysisImage },
];

const defaultCertificate = (courseTitle) => ({
  title: `${courseTitle} Certificate`,
  sidebarLabel: 'Certificate',
  sidebarSubtitle: 'Claim and download your course certificate',
  introCard: {
    title: 'Claim your certificate',
    body: [
      'Complete the course and confirm your details to unlock your personalized certificate.',
      'Your certificate will include your name, course title, and completion dates.',
    ],
    ctaLabel: 'Claim certificate',
  },
  mentorCard: {
    title: 'Download your certificate',
    body: [
      'After claiming, you can download a personalized certificate file instantly.',
    ],
    downloadLabel: 'Download certificate',
  },
  form: {
    title: 'Certificate details',
    fields: [
      { id: 'fullName', label: 'Full name' },
      { id: 'email', label: 'Email address' },
      { id: 'internshipId', label: 'Internship ID' },
    ],
    checkboxLabel: 'I confirm that the information above is correct.',
    submitLabel: 'Submit details',
    successTitle: 'Certificate claimed',
    successMessage:
      'Your certificate details have been saved. You can now download the file.',
    confirmLabel: 'Close',
  },
});

const asArray = (value) => {
  if (Array.isArray(value)) return value;
  if (!value) return [];
  return [value];
};

const getId = (value, fallback) => {
  const resolved =
    value?._id ??
    value?.id ??
    value?.lessonId ??
    value?.unitId ??
    value?.courseId;
  return String(resolved ?? fallback);
};

const textFromValue = (value) => {
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return String(value);
  return '';
};

const slugify = (value) =>
  textFromValue(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const extractList = (payload) => {
  if (Array.isArray(payload)) return payload;

  const candidates = [
    payload?.courses,
    payload?.items,
    payload?.results,
    payload?.docs,
    payload?.data,
  ];

  const match = candidates.find(Array.isArray);
  return match || [];
};

export const extractApiData = (payload) => payload?.data ?? payload;

const normalizeCategory = (value) => {
  const normalized = slugify(value);

  if (
    normalized.includes('design') ||
    normalized.includes('graphics') ||
    normalized.includes('ui-ux')
  ) {
    return 'design';
  }

  if (
    normalized.includes('development') ||
    normalized.includes('frontend') ||
    normalized.includes('backend') ||
    normalized.includes('blockchain')
  ) {
    return 'development';
  }

  if (
    normalized.includes('business') ||
    normalized.includes('strategy') ||
    normalized.includes('management')
  ) {
    return 'business-strategy';
  }

  if (
    normalized.includes('data') ||
    normalized.includes('analytics') ||
    normalized.includes('analysis') ||
    normalized.includes('visualization')
  ) {
    return 'data-science-analytics';
  }

  return normalized || 'design';
};

const normalizeLevel = (value) => {
  const label = textFromValue(value).trim();
  if (!label) return 'Beginner';

  return label
    .split(' ')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(' ');
};

const resolveDurationLabel = (course) => {
  const rawDuration =
    course?.durationLabel ??
    course?.duration?.label ??
    course?.duration ??
    course?.estimatedDuration ??
    course?.timeline;

  if (typeof rawDuration === 'string' && rawDuration.trim()) {
    return rawDuration.trim();
  }

  if (typeof rawDuration === 'number') {
    return `${rawDuration} weeks`;
  }

  const weeks = course?.durationWeeks ?? course?.weeks;
  if (weeks) {
    return `${weeks} week${Number(weeks) === 1 ? '' : 's'}`;
  }

  const months = course?.durationMonths ?? course?.months;
  if (months) {
    return `${months} month${Number(months) === 1 ? '' : 's'}`;
  }

  return 'Self paced';
};

const resolveCoverImage = (course, normalizedCategory) => {
  const directImage =
    course?.coverImage ??
    course?.thumbnail ??
    course?.image ??
    course?.bannerImage ??
    course?.imageUrl;

  if (directImage && !textFromValue(directImage).startsWith('src/assets/')) {
    return directImage;
  }

  const lowerTitle = textFromValue(course?.title).toLowerCase();
  const keywordMatch = IMAGE_BY_KEYWORD.find(({ keywords }) =>
    keywords.some((keyword) => lowerTitle.includes(keyword))
  );

  if (keywordMatch) {
    return keywordMatch.image;
  }

  return IMAGE_BY_CATEGORY[normalizedCategory] || uiUxDesignImage;
};

const normalizeItems = (value) =>
  asArray(value)
    .map((item) => {
      if (typeof item === 'string') return item;
      return (
        item?.title ??
        item?.name ??
        item?.label ??
        item?.description ??
        item?.text ??
        ''
      );
    })
    .filter(Boolean);

const hasMeaningfulMaterial = (item) => {
  if (!item || typeof item !== 'object') return false;

  return Boolean(
    textFromValue(item?.title).trim() ||
      textFromValue(item?.content).trim() ||
      textFromValue(item?.description).trim() ||
      textFromValue(item?.text).trim() ||
      textFromValue(item?.prompt).trim() ||
      textFromValue(item?.instructions).trim() ||
      textFromValue(item?.src).trim() ||
      textFromValue(item?.fileName).trim()
  );
};

const resolveEnrollmentCtaLabel = ({ isEnrolled, progressPercent }) => {
  if (!isEnrolled) return 'Enroll now';
  if (Number(progressPercent) > 0) return 'Continue course';
  return 'Start course';
};

const normalizeMaterial = (item, index, lessonTitle, fallbackType = 'document') => {
  const title =
    item?.title ??
    item?.name ??
    item?.label ??
    `${lessonTitle} ${fallbackType} ${index + 1}`;

  const content =
    item?.content ??
    item?.description ??
    item?.text ??
    item?.prompt ??
    item?.instructions ??
    `Open this ${fallbackType} from the course platform.`;

  const extension =
    item?.fileName?.split('.').pop() ||
    (fallbackType === 'assignment' ? 'txt' : 'txt');

  return {
    id: getId(item, `${slugify(title)}-${index + 1}`),
    title,
    fileName:
      item?.fileName ?? `${slugify(title) || `${fallbackType}-${index + 1}`}.${extension}`,
    mimeType: item?.mimeType || 'text/plain',
    content,
    url: item?.url || '',
  };
};

const normalizeLesson = (lesson, lessonIndex, unitTitle, mentorName) => {
  const title =
    lesson?.title ??
    lesson?.name ??
    lesson?.lessonTitle ??
    `Lesson ${lessonIndex + 1}`;

  return {
    id: getId(lesson, `${slugify(unitTitle)}-lesson-${lessonIndex + 1}`),
    title,
    duration:
      textFromValue(lesson?.duration) ||
      textFromValue(lesson?.time) ||
      textFromValue(lesson?.estimatedDuration) ||
      '10 mins',
    description:
      lesson?.description ??
      lesson?.summary ??
      `Continue learning ${title.toLowerCase()} in this lesson.`,
    mentorName:
      lesson?.mentorName ??
      lesson?.tutor ??
      lesson?.instructorName ??
      lesson?.instructor?.name ??
      mentorName ??
      'Trueminds Mentor',
    assignmentDescription:
      lesson?.assignmentDescription ??
      lesson?.assignment?.[0]?.description ??
      lesson?.assignment?.[0]?.title ??
      lesson?.assignment?.prompt ??
      'Complete the related course task after watching this lesson.',
    video: {
      title:
        lesson?.video?.title ??
        asArray(lesson?.learn).find((item) => item?.type === 'video')?.title ??
        title,
      url:
        lesson?.video?.url ??
        asArray(lesson?.learn).find((item) => item?.type === 'video')?.src ??
        lesson?.videoUrl ??
        lesson?.mediaUrl ??
        '',
      sourceUrl:
        lesson?.video?.url ??
        asArray(lesson?.learn).find((item) => item?.type === 'video')?.src ??
        lesson?.videoUrl ??
        lesson?.mediaUrl ??
        '',
      duration:
        textFromValue(lesson?.video?.duration) ||
        textFromValue(asArray(lesson?.learn).find((item) => item?.type === 'video')?.time) ||
        textFromValue(lesson?.duration) ||
        '10 mins',
      provider: lesson?.video?.provider ?? 'Course video',
    },
    materials: {
      documents: asArray(
        lesson?.materials?.documents ??
          asArray(lesson?.learn).filter((item) => item?.type === 'document') ??
          lesson?.documents ??
          lesson?.resources ??
          lesson?.attachments
      )
        .filter(hasMeaningfulMaterial)
        .map((item, index) => normalizeMaterial(item, index, title, 'document')),
      assignments: asArray(
        lesson?.materials?.assignments ??
          lesson?.assignment ??
          lesson?.assignments ??
          lesson?.tasks ??
          lesson?.homework
      )
        .filter(hasMeaningfulMaterial)
        .map((item, index) => normalizeMaterial(item, index, title, 'assignment')),
    },
  };
};

const normalizeSection = (section, sectionIndex, unitTitle, mentorName) => {
  const title =
    section?.title ??
    section?.name ??
    `Section ${sectionIndex + 1}`;

  const lessons = asArray(section?.lessons ?? section?.learnItems).map(
    (lesson, lessonIndex) =>
      normalizeLesson(lesson, lessonIndex, unitTitle, mentorName)
  );

  return {
    title,
    learnItems: lessons,
    assignmentItems: asArray(
      section?.assignmentItems ?? section?.assignments ?? section?.tasks
    ).map((item, index) => ({
      id: getId(item, `${slugify(title)}-assignment-${index + 1}`),
      title:
        item?.title ??
        item?.name ??
        item?.label ??
        item?.prompt ??
        `Assignment ${index + 1}`,
    })),
  };
};

const normalizeUnit = (unit, unitIndex, moduleTitle, mentorName) => {
  const title =
    unit?.subtitle ??
    unit?.title ??
    unit?.name ??
    unit?.unitTitle ??
    `Unit ${unitIndex + 1}`;

  const sectionsSource = asArray(unit?.sections);
  const lessonsSource = asArray(unit?.lessons);
  const sections =
    sectionsSource.length > 0
      ? sectionsSource.map((section, sectionIndex) =>
          normalizeSection(section, sectionIndex, title, mentorName)
        )
      : [
          {
            title: `${title} lessons`,
            learnItems: lessonsSource.map((lesson, lessonIndex) =>
              normalizeLesson(lesson, lessonIndex, title, mentorName)
            ),
            assignmentItems: asArray(unit?.assignments ?? unit?.tasks).map(
              (item, index) => ({
                id: getId(item, `${slugify(title)}-assignment-${index + 1}`),
                title:
                  item?.title ??
                  item?.prompt ??
                  item?.name ??
                  `Assignment ${index + 1}`,
              })
            ),
          },
        ];

  const firstLesson = sections[0]?.learnItems?.[0];
  const fallbackTime =
    firstLesson?.duration ??
    textFromValue(unit?.duration) ??
    textFromValue(unit?.estimatedDuration) ??
    '20 mins';

  return {
    id: getId(unit, `${slugify(moduleTitle)}-unit-${unitIndex + 1}`),
    title,
    status:
      unit?.status ??
      (unit?.isCompleted ? 'completed' : unit?.isLocked ? 'locked' : 'available'),
    about:
      unit?.about ??
      unit?.description ??
      unit?.summary ??
      `This unit covers ${title.toLowerCase()} and helps you progress through the course.`,
    lessonPage: {
      lessonTitle: firstLesson?.title ?? title,
      description:
        unit?.lessonPage?.description ??
        unit?.description ??
        unit?.summary ??
        `Learn the core ideas in ${title.toLowerCase()} through practical lessons.`,
      assignmentSummary:
        unit?.lessonPage?.assignmentSummary ??
        sections[0]?.assignmentItems?.[0]?.title ??
        'Complete the related practical exercise for this unit.',
      time: fallbackTime,
      tutor:
        unit?.lessonPage?.tutor ??
        unit?.mentorName ??
        mentorName ??
        'Trueminds Mentor',
      relatedResources: {
        documents: [],
        videos: firstLesson?.video?.url ? [firstLesson.video] : [],
        assignments: sections.flatMap((section) =>
          section.assignmentItems.map((item) => ({
            title: item.title,
            prompt: item.title,
          }))
        ),
      },
    },
    sections,
  };
};

const normalizeModules = (course, mentorName) => {
  const modules = asArray(course?.courseOutline ?? course?.modules);

  if (modules.length > 0) {
    return modules.map((module, moduleIndex) => {
      const moduleTitle =
        module?.title ?? module?.name ?? `Module ${moduleIndex + 1}`;

      const units = asArray(module?.units ?? module?.items).map((unit, unitIndex) =>
        normalizeUnit(unit, unitIndex, moduleTitle, mentorName)
      );

      return {
        id: getId(module, `module-${moduleIndex + 1}`),
        title: moduleTitle,
        moduleLabel: module?.moduleLabel ?? `Module ${moduleIndex + 1}`,
        summaryTime:
          textFromValue(module?.summaryTime) ||
          `${units.length} unit${units.length === 1 ? '' : 's'}`,
        items: units.map((unit) => ({
          title: unit.lessonPage.lessonTitle,
          duration: unit.lessonPage.time,
          type: 'lesson',
          status: unit.status,
        })),
        units,
      };
    });
  }

  const groupedUnits = asArray(course?.units).reduce((accumulator, unit) => {
    const key = unit?.moduleTitle || course?.title || 'Course content';
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(unit);
    return accumulator;
  }, {});

  const groupedModuleEntries = Object.entries(groupedUnits);

  if (groupedModuleEntries.length > 0) {
    return groupedModuleEntries.map(([moduleTitle, unitsInModule], moduleIndex) => {
      const units = unitsInModule.map((unit, unitIndex) =>
        normalizeUnit(unit, unitIndex, moduleTitle, mentorName)
      );

      return {
        id: `module-${moduleIndex + 1}`,
        title: moduleTitle,
        moduleLabel: `Module ${moduleIndex + 1}`,
        summaryTime: `${units.length} unit${units.length === 1 ? '' : 's'}`,
        items: units.map((unit) => ({
          title: unit.lessonPage.lessonTitle,
          duration: unit.lessonPage.time,
          type: 'lesson',
          status: unit.status,
        })),
        units,
      };
    });
  }

  const units = asArray(course?.units).map((unit, unitIndex) =>
    normalizeUnit(unit, unitIndex, course?.title ?? 'Course', mentorName)
  );

  return [
    {
      id: 'module-1',
      title: course?.title ?? 'Course content',
      moduleLabel: 'Module 1',
      summaryTime: `${units.length} unit${units.length === 1 ? '' : 's'}`,
      items: units.map((unit) => ({
        title: unit.lessonPage.lessonTitle,
        duration: unit.lessonPage.time,
        type: 'lesson',
        status: unit.status,
      })),
      units,
    },
  ];
};

export const normalizeCourse = (course) => {
  const normalizedCategory = normalizeCategory(course?.category ?? course?.track);
  const mentor = course?.mentor ?? course?.instructor ?? null;
  const mentorName =
    mentor?.name ?? course?.mentorName ?? course?.instructorName ?? 'Trueminds Mentor';
  const courseOutline = normalizeModules(course, mentorName);
  const totalLessons = courseOutline.reduce(
    (count, module) =>
      count +
      module.units.reduce(
        (unitCount, unit) =>
          unitCount +
          unit.sections.reduce(
            (sectionCount, section) => sectionCount + section.learnItems.length,
            0
          ),
        0
      ),
    0
  );
  const progressPercent = Number(
    course?.progressPercent ??
      course?.progress ??
      course?.enrollment?.progressPercent ??
      0
  );
  const isEnrolled = Boolean(
    course?.isEnrolled ??
      course?.enrolled ??
      course?.enrollment?.isEnrolled ??
      progressPercent > 0
  );

  return {
    id: getId(course, slugify(course?.title || 'course')),
    slug: course?.slug ?? slugify(course?.title),
    title: course?.title ?? course?.name ?? 'Untitled course',
    category: normalizedCategory,
    level: normalizeLevel(course?.level ?? course?.difficulty),
    duration: {
      label: resolveDurationLabel(course),
    },
    shortDescription:
      course?.shortDescription ??
      course?.summary ??
      course?.description ??
      'Course information will appear here soon.',
    coverImage: resolveCoverImage(course, normalizedCategory),
    mentorId: mentor?._id ?? mentor?.id ?? '',
    mentorName,
    mentor:
      mentor && mentorName
        ? {
            id: getId(mentor, `mentor-${slugify(mentorName)}`),
            name: mentorName,
            title: mentor?.title ?? mentor?.role ?? 'Course mentor',
            bio:
              mentor?.bio ??
              mentor?.description ??
              `Meet ${mentorName}, the mentor for this course.`,
            avatar: mentor?.avatar ?? mentor?.image ?? '',
          }
        : null,
    tags: normalizeItems(course?.tags ?? course?.skills),
    enrollment: {
      status: isEnrolled ? 'enrolled' : 'not-started',
      ctaLabel: resolveEnrollmentCtaLabel({ isEnrolled, progressPercent }),
      progressPercent,
      completedLessons: Number(
        course?.completedLessons ?? course?.enrollment?.completedLessons ?? 0
      ),
      totalLessons:
        Number(course?.totalLessons ?? course?.enrollment?.totalLessons) ||
        totalLessons,
      isEnrolled,
    },
    tabs: DEFAULT_TABS,
    overview: {
      about:
        course?.overview?.about ??
        course?.description ??
        course?.summary ??
        'Course overview will be available soon.',
      whatYouWillLearn: normalizeItems(
        course?.overview?.whatYouWillLearn ??
          course?.whatYouLearn ??
          course?.whatYouWillLearn ??
          course?.learningOutcomes ??
          course?.objectives
      ),
      toolsNeeded: normalizeItems(
        course?.overview?.toolsNeeded ?? course?.toolsNeeded ?? course?.tools
      ),
      prerequisites: normalizeItems(
        course?.overview?.prerequisites ?? course?.prerequisites ?? course?.requirements
      ),
      benefits: normalizeItems(
        course?.overview?.benefits ?? course?.benefits ?? course?.outcomes
      ),
    },
    courseOutline,
    discussion: {
      enabled: Boolean(course?.discussion?.enabled ?? course?.discussion ?? true),
      channels: asArray(course?.discussion?.channels ?? course?.discussion),
    },
    certificate: course?.certificate ?? defaultCertificate(course?.title ?? 'Course'),
    raw: course,
  };
};

export const normalizeCourseList = (payload) =>
  extractList(extractApiData(payload)).map(normalizeCourse);

export const mergeEnrollmentIntoCourses = (courses, enrolledCourses) => {
  const enrolledIds = new Set(enrolledCourses.map((course) => String(course.id)));

  return courses.map((course) => {
    if (!enrolledIds.has(String(course.id))) {
      return course;
    }

    return {
      ...course,
      enrollment: {
        ...course.enrollment,
        status: 'enrolled',
        ctaLabel: 'Continue course',
        isEnrolled: true,
      },
    };
  });
};

export const normalizeLessonDetail = (payload, fallbackLesson) => {
  const lesson = extractApiData(payload);

  if (!lesson || Array.isArray(lesson)) {
    return fallbackLesson;
  }

  const normalizedLesson = normalizeLesson(
    lesson,
    Number(lesson?.index ?? fallbackLesson?.index ?? 0),
    fallbackLesson?.title ?? 'Lesson',
    lesson?.mentorName ?? fallbackLesson?.mentorName
  );
  const resolvedLessonId =
    lesson?._id ??
    lesson?.id ??
    lesson?.lessonId ??
    (String(normalizedLesson.id) === String(lesson?.courseId) ? fallbackLesson?.id : null) ??
    fallbackLesson?.id;

  const resolvedVideoUrl =
    normalizedLesson.video?.url || fallbackLesson?.video?.url || '';
  const resolvedDocuments =
    normalizedLesson.materials?.documents?.length > 0
      ? normalizedLesson.materials.documents
      : fallbackLesson?.materials?.documents || [];
  const resolvedAssignments =
    normalizedLesson.materials?.assignments?.length > 0
      ? normalizedLesson.materials.assignments
      : fallbackLesson?.materials?.assignments || [];

  const hasUsefulLessonData =
    Boolean(resolvedVideoUrl) ||
    resolvedDocuments.length > 0 ||
    resolvedAssignments.length > 0 ||
    Boolean(lesson?.title) ||
    Boolean(lesson?.description);

  if (!hasUsefulLessonData) {
    return fallbackLesson;
  }

  return {
    ...fallbackLesson,
    ...normalizedLesson,
    id: String(resolvedLessonId ?? fallbackLesson?.id ?? normalizedLesson.id),
    description: normalizedLesson.description || fallbackLesson?.description || '',
    assignmentDescription:
      normalizedLesson.assignmentDescription ||
      fallbackLesson?.assignmentDescription ||
      '',
    video: {
      ...fallbackLesson?.video,
      ...normalizedLesson.video,
      url: resolvedVideoUrl,
    },
    materials: {
      documents: resolvedDocuments,
      assignments: resolvedAssignments,
    },
  };
};
