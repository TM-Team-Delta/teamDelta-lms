import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import CourseBreadcrumbs from '../../components/courses/CourseBreadcrumbs';
import CourseDetailHero from '../../components/courses/CourseDetailHero';
import CourseDetailTabs from '../../components/courses/CourseDetailTabs';
import CourseDiscussionTab from '../../components/courses/CourseDiscussionTab';
import CourseOutlineTab from '../../components/courses/CourseOutlineTab';
import CourseOverviewTab from '../../components/courses/CourseOverviewTab';
import CoursePageSkeleton from '../../components/courses/CoursePageSkeleton';
import { coursesService } from '../../services/courses';
import { extractApiData, normalizeCourse } from '../../utils/courseApi';

const CourseDetail = () => {
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [course, setCourse] = useState(() => {
    const cached = coursesService.peekCourseById(courseId);
    return cached ? normalizeCourse(extractApiData(cached)) : null;
  });
  const [isLoading, setIsLoading] = useState(
    () => !coursesService.peekCourseById(courseId)
  );
  const [error, setError] = useState('');
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [enrollError, setEnrollError] = useState('');

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
      setEnrollError('');

      try {
        const response = await coursesService.getCourseById(courseId);
        setCourse(normalizeCourse(extractApiData(response)));
      } catch (requestError) {
        console.error('Failed to load course:', requestError);
        setError(
          requestError.response?.data?.message ||
            'We could not load this course right now.'
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadCourse();
  }, [courseId]);

  const mentor = useMemo(() => course?.mentor || null, [course]);

  const currentPageLabel =
    activeTab === 'course-outline'
      ? 'Course Outline'
      : activeTab === 'discussion'
        ? 'Collaboration'
        : 'Overview';

  const handleEnroll = async () => {
    if (!course) return;

    setIsEnrolling(true);
    setEnrollError('');

    try {
      await coursesService.enrollInCourse(course.id);
      setCourse((currentCourse) => ({
        ...currentCourse,
        enrollment: {
          ...currentCourse.enrollment,
          status: 'enrolled',
          ctaLabel: 'Start course',
          isEnrolled: true,
        },
      }));
    } catch (requestError) {
      console.error('Failed to enroll in course:', requestError);
      setEnrollError(
        requestError.response?.data?.message ||
          'Enrollment failed. Please try again.'
      );
    } finally {
      setIsEnrolling(false);
    }
  };

  const renderActiveTab = () => {
    if (activeTab === 'course-outline') {
      return <CourseOutlineTab course={course} />;
    }

    if (activeTab === 'discussion') {
      return <CourseDiscussionTab />;
    }

    return <CourseOverviewTab course={course} mentor={mentor} />;
  };

  if (isLoading) {
    return <CoursePageSkeleton />;
  }

  if (error) {
    return (
      <section className='p-4 pt-0 sm:p-5 sm:pt-0 md:p-6 md:pt-0'>
        <div className='rounded-2xl bg-white p-8 text-center'>
          <h1 className='text-2xl font-semibold text-text-primary'>
            Unable to load course
          </h1>
          <p className='mt-2 text-sm text-text-secondary'>{error}</p>
        </div>
      </section>
    );
  }

  if (!course) {
    return (
      <section className='p-4 pt-0 sm:p-5 sm:pt-0 md:p-6 md:pt-0'>
        <div className='rounded-2xl bg-white p-8 text-center'>
          <h1 className='text-2xl font-semibold text-text-primary'>
            Course not found
          </h1>
          <p className='mt-2 text-sm text-text-secondary'>
            The course you are trying to open is not available right now.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className='space-y-6 p-4 pt-0 sm:p-5 sm:pt-0 md:p-6 md:pt-0'>
      <CourseBreadcrumbs
        courseTitle={course.title}
        currentPage={currentPageLabel}
      />

      <CourseDetailHero
        course={course}
        onPrimaryAction={handleEnroll}
        primaryActionDisabled={isEnrolling}
        isPrimaryActionLoading={isEnrolling}
      />

      {enrollError ? (
        <div className='rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700'>
          {enrollError}
        </div>
      ) : null}

      <div className='space-y-5'>
        <CourseDetailTabs
          tabs={course.tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {renderActiveTab()}
      </div>
    </section>
  );
};

export default CourseDetail;
