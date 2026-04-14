import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import CourseBreadcrumbs from '../../components/courses/CourseBreadcrumbs';
import CourseDetailHero from '../../components/courses/CourseDetailHero';
import CourseDetailTabs from '../../components/courses/CourseDetailTabs';
import CourseDiscussionTab from '../../components/courses/CourseDiscussionTab';
import CourseOutlineTab from '../../components/courses/CourseOutlineTab';
import CourseOverviewTab from '../../components/courses/CourseOverviewTab';
import { courses, mentors } from '../../data/courseData';

const CourseDetail = () => {
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const allCourses = courses[0] || [];
  const allMentors = mentors[0] || [];

  const course = useMemo(() => {
    return allCourses.find((item) => item.id === courseId);
  }, [allCourses, courseId]);

  const mentor = useMemo(() => {
    if (!course) return null;

    return allMentors.find((item) => item.id === course.mentorId) || null;
  }, [allMentors, course]);

  const currentPageLabel =
    activeTab === 'course-outline'
      ? 'Course Outline'
      : activeTab === 'discussion'
        ? 'Collaboration'
        : 'Overview';

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

  // This small helper keeps the JSX below cleaner and easier to read.
  const renderActiveTab = () => {
    if (activeTab === 'course-outline') {
      return <CourseOutlineTab course={course} />;
    }

    if (activeTab === 'discussion') {
      return <CourseDiscussionTab />;
    }

    return <CourseOverviewTab course={course} mentor={mentor} />;
  };

  return (
    <section className='space-y-6 p-4 pt-0 sm:p-5 sm:pt-0 md:p-6 md:pt-0'>
      <CourseBreadcrumbs
        courseTitle={course.title}
        currentPage={currentPageLabel}
      />

      <CourseDetailHero course={course} />

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
