import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseLessonBreadcrumbs = ({
  courseId,
  courseTitle,
  moduleTitle,
  unitTitle,
}) => {
  return (
    <nav className='flex flex-wrap items-center gap-2 pt-4 text-[10px] text-brand-accent md:pt-0'>
      <Link
        to={`/dashboard/course-detail/${courseId}`}
        className='transition hover:opacity-80'
      >
        {courseTitle}
      </Link>

      <ChevronRight size={12} />

      <span>{moduleTitle}</span>

      <ChevronRight size={12} />

      <span>{unitTitle}</span>
    </nav>
  );
};

export default CourseLessonBreadcrumbs;
