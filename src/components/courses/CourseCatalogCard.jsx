import { Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCatalogCard = ({ course }) => {
  return (
    <article className='overflow-hidden rounded-2xl border border-neutral bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md'>
      <div className='p-3'>
        <img
          src={course.coverImage}
          alt={course.title}
          className='h-40 w-full rounded-xl object-cover sm:h-44'
        />
      </div>

      <div className='space-y-3 px-3 pb-4'>
        <div className='space-y-2'>
          <h2 className='text-base font-semibold text-text-primary'>
            {course.title}
          </h2>

          <p className='line-clamp-2 text-sm leading-6 text-text-secondary'>
            {course.shortDescription}
          </p>
        </div>

        <div className='flex items-center gap-2 text-sm text-text-primary'>
          <Clock3 size={16} className='text-brand-secondary' />
          <span>{course.duration.label}</span>
        </div>

        <Link
          to={`/dashboard/course-detail/${course.id}`}
          className='flex h-11 items-center justify-center rounded-lg bg-brand-primary px-4 text-sm font-medium text-white transition hover:opacity-90'
        >
          Learn More
        </Link>
      </div>
    </article>
  );
};

export default CourseCatalogCard;
