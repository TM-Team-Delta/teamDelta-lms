import { useEffect, useMemo, useState } from 'react';
import { CheckSquare, Menu, Play, X } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import CourseUnitBreadcrumbs from '../../components/courses/CourseUnitBreadcrumbs';
import CourseLearningSidebar from '../../components/courses/CourseLearningSidebar';
import CoursePageSkeleton from '../../components/courses/CoursePageSkeleton';
import useCourseProgress from '../../hooks/useCourseProgress';
import { coursesService } from '../../services/courses';
import { extractApiData, normalizeCourse } from '../../utils/courseApi';

const getLessonLink = (
  courseId,
  moduleId,
  itemIndex,
  sectionIndex,
  lessonIndex
) =>
  `/dashboard/course-detail/${courseId}/modules/${moduleId}/items/${itemIndex}/sections/${sectionIndex}/lessons/${lessonIndex}`;

const CourseUnitDetail = () => {
  const { courseId, moduleId, itemIndex, unitId } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [course, setCourse] = useState(() => {
    const cached = coursesService.peekCourseById(courseId);
    return cached ? normalizeCourse(extractApiData(cached)) : null;
  });
  const [isLoading, setIsLoading] = useState(
    () => !coursesService.peekCourseById(courseId)
  );
  const [error, setError] = useState('');

  useEffect(() => {
    const loadCourse = async () => {
      const cached = coursesService.peekCourseById(courseId);
      if (cached) {
        setCourse(normalizeCourse(extractApiData(cached)));
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }

      setError('');

      try {
        const response = await coursesService.getCourseById(courseId);
        setCourse(normalizeCourse(extractApiData(response)));
      } catch (requestError) {
        console.error('Failed to load course unit detail:', requestError);
        setError(
          requestError.response?.data?.message ||
            'We could not load this course unit right now.'
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadCourse();
  }, [courseId]);

  const {
    statusByUnitId,
    isCourseCompleted,
    isLoading: isProgressLoading,
    hasResolvedProgress,
  } = useCourseProgress(course);

  const module = useMemo(() => {
    if (!course) return null;
    return course.courseOutline.find((item) => item.id === moduleId) || null;
  }, [course, moduleId]);

  const currentUnitIndex = useMemo(() => {
    if (!module) return null;

    if (itemIndex !== undefined) {
      const parsedIndex = Number(itemIndex);
      if (!Number.isNaN(parsedIndex) && module.units?.[parsedIndex]) {
        return parsedIndex;
      }
    }

    if (unitId) {
      return module.units?.findIndex((unit) => unit.id === unitId) ?? null;
    }

    return null;
  }, [itemIndex, module, unitId]);

  const currentUnit = useMemo(() => {
    if (!module || currentUnitIndex === null || currentUnitIndex < 0) return null;
    return module.units?.[currentUnitIndex] || null;
  }, [currentUnitIndex, module]);

  const unitStatus = currentUnit
    ? hasResolvedProgress
      ? statusByUnitId[currentUnit.id] || 'locked'
      : currentUnit.status || 'available'
    : 'locked';

  if (isLoading) {
    return <CoursePageSkeleton compact />;
  }

  if (error) {
    return (
      <section className='space-y-6 p-4 pt-0 sm:p-5 sm:pt-0 md:p-6 md:pt-0'>
        <div className='rounded-2xl bg-white p-8 text-center'>
          <h1 className='text-2xl font-semibold text-text-primary'>
            Unable to load unit
          </h1>
          <p className='mt-2 text-sm text-text-secondary'>{error}</p>
        </div>
      </section>
    );
  }

  if (!course || !module || !currentUnit) {
    return (
      <section className='space-y-6 p-4 pt-0 sm:p-5 sm:pt-0 md:p-6 md:pt-0'>
        <div className='rounded-2xl bg-white p-8 text-center'>
          <h1 className='text-2xl font-semibold text-text-primary'>Unit not found</h1>
          <p className='mt-2 text-sm text-text-secondary'>
            The unit you are trying to open is not available right now.
          </p>
        </div>
      </section>
    );
  }

  if (hasResolvedProgress && unitStatus === 'locked') {
    return (
      <section className='space-y-6 p-4 pt-0 sm:p-5 sm:pt-0 md:p-6 md:pt-0'>
        <div className='rounded-2xl bg-white p-8 text-center'>
          <h1 className='text-2xl font-semibold text-text-primary'>Unit locked</h1>
          <p className='mt-2 text-sm text-text-secondary'>
            Complete or open the earlier available unit to unlock this one.
          </p>
        </div>
      </section>
    );
  }

  const sidebar = (
    <CourseLearningSidebar
      course={course}
      activeModuleId={module.id}
      activeUnitId={currentUnit.id}
      statusByUnitId={statusByUnitId}
      hasResolvedProgress={hasResolvedProgress}
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
          <CourseUnitBreadcrumbs
            courseId={course.id}
            courseTitle={course.title}
            moduleTitle={module.title}
            unitTitle={currentUnit.title}
          />

          <h1 className='text-[28px] font-semibold leading-tight text-text-primary sm:text-[32px]'>
            {currentUnit.title}
          </h1>

          <div className='rounded-md border-b border-text-secondary bg-bg-muted px-5 py-5'>
            <div className='space-y-4'>
              <h2 className='text-lg font-semibold text-text-primary'>
                About this unit
              </h2>
              <p className='text-sm leading-7 text-text-secondary'>
                {currentUnit.about}
              </p>
            </div>
          </div>

          {currentUnit.sections.map((section, sectionIndexValue) => (
            <div
              key={section.title}
              className='rounded-md border-b border-text-secondary bg-bg-muted px-5 py-5'
            >
              <div className='space-y-4'>
                <h2 className='font-semibold text-text-primary'>{section.title}</h2>

                <div className='grid gap-6 md:grid-cols-2'>
                  <div className='space-y-2'>
                    <p className='text-sm text-text-primary'>Lessons</p>

                    <div className='space-y-2'>
                      {section.learnItems.map((lesson, lessonIndexValue) => (
                        <Link
                          key={lesson.id}
                          to={getLessonLink(
                            course.id,
                            module.id,
                            currentUnitIndex,
                            sectionIndexValue,
                            lessonIndexValue
                          )}
                          className='flex items-start gap-2 rounded-md px-2 py-2 text-sm text-text-secondary transition hover:bg-white hover:text-text-primary'
                        >
                          <Play
                            size={12}
                            className='mt-1 shrink-0 fill-brand-accent text-brand-accent'
                          />
                          <div className='space-y-1'>
                            <span className='block text-text-primary'>{lesson.title}</span>
                            <span className='block text-xs text-text-secondary'>
                              {lesson.duration}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <p className='text-sm text-text-primary'>Assignments</p>

                    <div className='space-y-2'>
                      {section.assignmentItems.map((item) => (
                        <div
                          key={item.id}
                          className='flex items-start gap-2 rounded-md px-2 py-2 text-sm text-text-secondary'
                        >
                          <CheckSquare
                            size={13}
                            className='mt-1 shrink-0 text-brand-secondary'
                          />
                          <span>{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
              <p className='text-base font-semibold text-text-primary'>Course content</p>

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

export default CourseUnitDetail;
