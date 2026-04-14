import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MentorBreadcrumbs = ({ mentorName }) => {
  return (
    <nav className='flex flex-wrap items-center gap-2 pt-4 text-sm text-text-secondary md:pt-0'>
      <Link
        to='/dashboard/courses'
        className='transition hover:text-brand-secondary'
      >
        Course Catalog
      </Link>

      <ChevronRight size={14} />

      <span className='text-text-primary'>Mentor Profile</span>

      <ChevronRight size={14} />

      <span>{mentorName}</span>
    </nav>
  );
};

export default MentorBreadcrumbs;
