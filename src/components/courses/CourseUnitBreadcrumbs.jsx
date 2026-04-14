import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseUnitBreadcrumbs = ({
  courseId,
  courseTitle,
  moduleTitle,
  unitTitle,
}) => {
  return (
    <nav className='flex flex-wrap items-center gap-2 text-[10px] text-brand-accent'>
      <Link
        to='/dashboard/courses'
        className='transition hover:text-brand-secondary'
      >
        Course Catalog
      </Link>

      <ChevronRight size={14} />

      <Link
        to={`/dashboard/course-detail/${courseId}`}
        className='transition hover:text-brand-secondary'
      >
        {courseTitle}
      </Link>

      <ChevronRight size={14} />

      <span className='text-brand-accent'>{moduleTitle}</span>

      <ChevronRight size={14} />

      <span>{unitTitle}</span>
    </nav>
  );
};

export default CourseUnitBreadcrumbs;
