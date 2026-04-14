import { useEffect, useMemo, useState } from 'react';
import { CheckSquare, Download, Menu, PlayCircle, X } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import CourseLessonBreadcrumbs from '../../components/courses/CourseLessonBreadcrumbs';
import CourseLearningSidebar from '../../components/courses/CourseLearningSidebar';
import CoursePageSkeleton from '../../components/courses/CoursePageSkeleton';
import useCourseProgress from '../../hooks/useCourseProgress';
import { coursesService } from '../../services/courses';
import {
  extractApiData,
  normalizeCourse,
  normalizeLessonDetail,
} from '../../utils/courseApi';

const tabs = [
  { id: 'documents', label: 'Document' },
  { id: 'assignments', label: 'Assignment' },
];

const getUnitLink = (courseId, moduleId, itemIndex) =>
  `/dashboard/course-detail/${courseId}/modules/${moduleId}/items/${itemIndex}`;

const getYoutubeEmbedUrl = (url) => {
  if (!url) return '';

  try {
    const parsedUrl = new URL(url);
    const videoId = parsedUrl.searchParams.get('v');

    if (videoId) {
      return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;
    }

    if (parsedUrl.hostname.includes('youtu.be')) {
      const shortVideoId = parsedUrl.pathname.replace('/', '');
      return shortVideoId
        ? `https://www.youtube-nocookie.com/embed/${shortVideoId}?rel=0&modestbranding=1`
        : '';
    }

    return '';
  } catch {
    return '';
  }
};

const getExternalVideoUrl = (url) => {
  if (!url) return '';

  try {
    const parsedUrl = new URL(url);
    const videoId = parsedUrl.searchParams.get('v');

    if (videoId) {
      return `https://www.youtube.com/watch?v=${videoId}`;
    }

    if (parsedUrl.hostname.includes('youtu.be')) {
      const shortVideoId = parsedUrl.pathname.replace('/', '');
      return shortVideoId ? `https://www.youtube.com/watch?v=${shortVideoId}` : url;
    }

    return url;
  } catch {
    return url;
  }
};

const downloadAsset = (asset) => {
  const blob = new Blob([asset.content], {
    type: asset.mimeType || 'text/plain',
  });
  const objectUrl = window.URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = objectUrl;
  anchor.download = asset.fileName || 'download.txt';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.URL.revokeObjectURL(objectUrl);
};

const CourseLessonDetail = () => {
  const { courseId, moduleId, itemIndex, sectionIndex, lessonIndex } =
    useParams();
  const [activeTab, setActiveTab] = useState('documents');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [course, setCourse] = useState(() => {
    const cached = coursesService.peekCourseById(courseId);
    return cached ? normalizeCourse(extractApiData(cached)) : null;
  });
  const [apiLesson, setApiLesson] = useState(null);
  const [isLoading, setIsLoading] = useState(
    () => !coursesService.peekCourseById(courseId)
  );
  const [error, setError] = useState('');

  useEffect(() => {
    const loadLessonPage = async () => {
      const cachedCourse = coursesService.peekCourseById(courseId);
      if (cachedCourse) {
        setCourse(normalizeCourse(extractApiData(cachedCourse)));
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }

      setError('');
      setApiLesson(null);

      try {
        const courseResponse = await coursesService.getCourseById(courseId);
        const normalizedCourse = normalizeCourse(extractApiData(courseResponse));
        setCourse(normalizedCourse);

        const currentModule =
          normalizedCourse.courseOutline.find((item) => item.id === moduleId) || null;
        const currentUnitFromCourse =
          currentModule?.units?.[Number(itemIndex)] || null;
        const fallbackLesson =
          currentUnitFromCourse?.sections?.[Number(sectionIndex)]?.learnItems?.[
            Number(lessonIndex)
          ] || null;

        if (currentUnitFromCourse?.id && fallbackLesson) {
          try {
            const lessonResponse = await coursesService.getLessonByIndex(
              courseId,
              currentUnitFromCourse.id,
              lessonIndex
            );
            setApiLesson(normalizeLessonDetail(lessonResponse, fallbackLesson));
          } catch (lessonRequestError) {
            console.error('Failed to load lesson detail endpoint:', lessonRequestError);
          }
        }
      } catch (requestError) {
        console.error('Failed to load lesson detail:', requestError);
        setError(
          requestError.response?.data?.message ||
            'We could not load this lesson right now.'
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadLessonPage();
  }, [courseId, itemIndex, lessonIndex, moduleId, sectionIndex]);

  const { statusByUnitId, isCourseCompleted, completeUnit, startUnit } =
    useCourseProgress(course);

  const module = useMemo(() => {
    if (!course) return null;
    return course.courseOutline.find((item) => item.id === moduleId) || null;
  }, [course, moduleId]);

  const currentUnit = useMemo(() => {
    if (!module) return null;
    const parsedIndex = Number(itemIndex);
    if (Number.isNaN(parsedIndex)) return null;
    return module.units?.[parsedIndex] || null;
  }, [itemIndex, module]);

  const currentSection = useMemo(() => {
    if (!currentUnit) return null;
    const parsedIndex = Number(sectionIndex);
    if (Number.isNaN(parsedIndex)) return null;
    return currentUnit.sections?.[parsedIndex] || null;
  }, [currentUnit, sectionIndex]);

  const currentLesson = useMemo(() => {
    if (!currentSection) return null;
    const parsedIndex = Number(lessonIndex);
    if (Number.isNaN(parsedIndex)) return null;
    return apiLesson || currentSection.learnItems?.[parsedIndex] || null;
  }, [apiLesson, currentSection, lessonIndex]);

  const unitStatus = currentUnit
    ? statusByUnitId[currentUnit.id] || 'locked'
    : 'locked';

  useEffect(() => {
    if (!currentUnit) return;
    if (unitStatus === 'available') {
      startUnit(currentUnit.id);
    }
  }, [currentUnit, startUnit, unitStatus]);

  if (isLoading) {
    return <CoursePageSkeleton compact />;
  }

  if (error) {
    return (
      <section className='space-y-6 p-4 pt-0 sm:p-5 sm:pt-0 md:p-6 md:pt-0'>
        <div className='rounded-2xl bg-white p-8 text-center'>
          <h1 className='text-2xl font-semibold text-text-primary'>
            Unable to load lesson
          </h1>
          <p className='mt-2 text-sm text-text-secondary'>{error}</p>
        </div>
      </section>
    );
  }

  if (!course || !module || !currentUnit || !currentSection || !currentLesson) {
    return (
      <section className='space-y-6 p-4 pt-0 sm:p-5 sm:pt-0 md:p-6 md:pt-0'>
        <div className='rounded-2xl bg-white p-8 text-center'>
          <h1 className='text-2xl font-semibold text-text-primary'>
            Lesson not found
          </h1>
          <p className='mt-2 text-sm text-text-secondary'>
            The lesson you are trying to open is not available right now.
          </p>
        </div>
      </section>
    );
  }

  if (unitStatus === 'locked') {
    return (
      <section className='space-y-6 p-4 pt-0 sm:p-5 sm:pt-0 md:p-6 md:pt-0'>
        <div className='rounded-2xl bg-white p-8 text-center'>
          <h1 className='text-2xl font-semibold text-text-primary'>
            Lesson locked
          </h1>
          <p className='mt-2 text-sm text-text-secondary'>
            Open the earlier available unit first to unlock this lesson.
          </p>
        </div>
      </section>
    );
  }

  const currentMaterials = currentLesson.materials?.[activeTab] || [];
  const embeddedVideoUrl = getYoutubeEmbedUrl(currentLesson.video?.url);
  const externalVideoUrl = getExternalVideoUrl(
    currentLesson.video?.sourceUrl || currentLesson.video?.url
  );
  const isUnitCompleted = unitStatus === 'completed';

  const sidebar = (
    <CourseLearningSidebar
      course={course}
      activeModuleId={module.id}
      activeUnitId={currentUnit.id}
      statusByUnitId={statusByUnitId}
      isCourseCompleted={isCourseCompleted}
    />
  );

  return (
    <section className='space-y-5 overflow-x-hidden py-4 md:flex md:h-[calc(100dvh-76px)] md:min-h-0 md:flex-col md:overflow-hidden md:p-5 md:pt-0 md:box-border'>
      <div className='px-2 md:hidden'>
        <button
          type='button'
          onClick={() => setIsSidebarOpen(true)}
          className='inline-flex items-center gap-2 rounded-md border border-neutral bg-white px-3 py-2 text-sm font-medium text-text-primary'
        >
          <Menu size={18} />
          Course content
        </button>
      </div>

      <div className='grid items-start gap-0 md:-mx-5 md:flex-1 md:min-h-0 md:grid-cols-[260px_minmax(0,1fr)] lg:-mx-6 lg:grid-cols-[280px_minmax(0,1fr)]'>
        <aside className='hidden h-full md:block'>{sidebar}</aside>

        <div className='min-w-0 space-y-5 bg-white p-4 pb-12 md:h-full md:min-h-0 md:overflow-y-auto md:p-6 md:pb-20'>
          <CourseLessonBreadcrumbs
            courseId={course.id}
            courseTitle={course.title}
            moduleTitle={module.title}
            unitTitle={currentLesson.title}
          />

          <div className='rounded-md border-b border-text-secondary bg-bg-muted px-5 py-5'>
            <div className='overflow-hidden rounded-md bg-white p-3'>
              {embeddedVideoUrl ? (
                <>
                  <div className='overflow-hidden rounded-md bg-black'>
                    <iframe
                      src={embeddedVideoUrl}
                      title={currentLesson.video.title}
                      className='h-[220px] w-full sm:h-[360px] lg:h-[420px]'
                      loading='lazy'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      referrerPolicy='strict-origin-when-cross-origin'
                      allowFullScreen
                    />
                  </div>

                  <div className='space-y-2 py-4'>
                    <h2 className='text-lg font-semibold text-text-primary'>
                      {currentLesson.video.title}
                    </h2>
                    <p className='text-sm text-text-secondary'>
                      {currentLesson.description}
                    </p>
                    <p className='text-xs text-text-secondary'>
                      {currentLesson.video.provider} -{' '}
                      {currentLesson.video.duration}
                    </p>
                    {externalVideoUrl ? (
                      <a
                        href={externalVideoUrl}
                        target='_blank'
                        rel='noreferrer'
                        className='inline-flex items-center gap-2 rounded-md border border-neutral px-3 py-2 text-xs font-medium text-text-primary transition hover:bg-bg-muted'
                      >
                        Open source video in a new tab
                      </a>
                    ) : null}
                  </div>
                </>
              ) : (
                <div className='flex min-h-[220px] items-center justify-center rounded-md border border-dashed border-neutral px-6 py-10 text-center text-sm text-text-secondary sm:min-h-[320px]'>
                  No embedded video was added for this lesson yet.
                </div>
              )}
            </div>
          </div>

          <div className='rounded-md border-b border-text-secondary bg-bg-muted px-5 py-5'>
            <div className='space-y-4'>
              <div className='grid gap-4 md:grid-cols-2'>
                <div className='space-y-2'>
                  <p className='text-sm text-text-primary'>Lesson details</p>
                  <div className='space-y-2 text-sm text-text-secondary'>
                    <div className='flex items-start gap-2'>
                      <CheckSquare
                        size={13}
                        className='mt-1 shrink-0 text-brand-secondary'
                      />
                      <span>{currentLesson.duration}</span>
                    </div>
                    <div className='flex items-start gap-2'>
                      <CheckSquare
                        size={13}
                        className='mt-1 shrink-0 text-brand-secondary'
                      />
                      <span>{currentLesson.description}</span>
                    </div>
                    <div className='flex items-start gap-2'>
                      <CheckSquare
                        size={13}
                        className='mt-1 shrink-0 text-brand-secondary'
                      />
                      <span>{currentLesson.mentorName}</span>
                    </div>
                  </div>
                </div>

                <div className='space-y-2'>
                  <p className='text-sm text-text-primary'>Assignment</p>
                  <div className='flex items-start gap-2 text-sm text-text-secondary'>
                    <CheckSquare
                      size={13}
                      className='mt-1 shrink-0 text-brand-secondary'
                    />
                    <span>{currentLesson.assignmentDescription}</span>
                  </div>
                </div>
              </div>

              <div className='flex flex-wrap items-center gap-3'>
                <button
                  type='button'
                  onClick={() => completeUnit(currentUnit.id)}
                  className='inline-flex items-center gap-2 rounded-md bg-brand-primary px-4 py-2 text-sm font-medium text-white transition hover:opacity-90'
                >
                  <PlayCircle size={16} />
                  {isUnitCompleted ? 'Completed' : 'Mark unit as completed'}
                </button>

                <Link
                  to={getUnitLink(course.id, module.id, Number(itemIndex))}
                  className='inline-flex items-center gap-2 rounded-md border border-neutral px-4 py-2 text-sm font-medium text-text-primary transition hover:bg-bg-muted'
                >
                  Back to unit
                </Link>
              </div>
            </div>
          </div>

          <div className='rounded-md border-b border-text-secondary bg-bg-muted px-5 py-5'>
            <div className='space-y-4'>
              <h2 className='font-semibold text-text-primary'>Materials</h2>

              <div className='flex flex-wrap items-center gap-6'>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type='button'
                    onClick={() => setActiveTab(tab.id)}
                    className={`border-b py-2 text-xs font-medium transition ${
                      activeTab === tab.id
                        ? 'border-brand-accent text-brand-accent'
                        : 'border-transparent text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className='space-y-4'>
                {currentMaterials.length > 0 ? (
                  currentMaterials.map((resource, index) => (
                    <div
                      key={`${resource.title}-${index}`}
                      className='flex flex-col gap-3 border-b border-text-secondary p-4 sm:flex-row sm:items-center sm:justify-between'
                    >
                      <div className='flex items-start gap-2 text-sm text-text-secondary'>
                        <CheckSquare
                          size={14}
                          className='mt-1 shrink-0 text-brand-secondary'
                        />
                        <span>{resource.title}</span>
                      </div>

                      <button
                        type='button'
                        onClick={() => downloadAsset(resource)}
                        className='inline-flex items-center justify-center gap-2 self-start rounded-md bg-brand-primary px-4 py-2 text-xs font-medium text-white transition hover:opacity-90 sm:self-center'
                      >
                        <Download size={14} />
                        Download
                      </button>
                    </div>
                  ))
                ) : (
                  <div className='rounded-md border border-dashed border-neutral px-4 py-6 text-sm text-text-secondary'>
                    No {activeTab === 'documents' ? 'documents' : 'assignment files'} were added for this lesson yet.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isSidebarOpen ? (
        <div
          className='fixed inset-0 z-50 bg-black/40 md:hidden'
          onClick={() => setIsSidebarOpen(false)}
        >
          <div
            className='h-full w-[280px] max-w-[85vw] bg-white shadow-xl'
            onClick={(event) => event.stopPropagation()}
          >
            <div className='flex items-center justify-between border-b border-neutral px-4 py-4'>
              <p className='text-base font-semibold text-text-primary'>
                Course content
              </p>

              <button
                type='button'
                onClick={() => setIsSidebarOpen(false)}
                className='inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral text-text-primary'
              >
                <X size={18} />
              </button>
            </div>

            {sidebar}
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default CourseLessonDetail;
