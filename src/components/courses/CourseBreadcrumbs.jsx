import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseBreadcrumbs = ({ courseTitle, currentPage = 'Overview' }) => {
  return (
    <nav className='flex flex-wrap items-center gap-2 text-sm text-text-secondary pt-4 md:pt-0'>
      <Link
        to='/dashboard/courses'
        className='transition hover:text-brand-secondary'
      >
        Course Catalog
      </Link>

      <ChevronRight size={14} />

      <span className='text-text-primary'>{courseTitle}</span>

      <ChevronRight size={14} />

      <span>{currentPage}</span>
    </nav>
  );
};

export default CourseBreadcrumbs;
