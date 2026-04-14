import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const ListSection = ({ title, items }) => {
  return (
    <div className='space-y-4 border-b border-border pb-6 last:border-b-0 last:pb-0'>
      <h3 className='text-base font-semibold text-text-primary'>{title}</h3>

      <div className='space-y-3'>
        {items.map((item) => (
          <div key={item} className='flex items-start gap-3 text-sm text-text-primary'>
            <Check size={16} className='mt-0.5 shrink-0 text-brand-accent' />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CourseOverviewTab = ({ course, mentor }) => {
  return (
    <div className=' bg-white p-5 sm:p-6'>
      <div className='space-y-6'>
        <div className='space-y-4 border-b border-border pb-6'>
          <h3 className='md:text-lg font-semibold text-text-primary'>
            About this course/ Course Description
          </h3>
          <p className='text-sm leading-7 text-text-secondary'>
            {course.overview.about}
          </p>
        </div>

        <ListSection
          title='What you will learn'
          items={course.overview.whatYouWillLearn}
        />

        <ListSection title='Tools Needed' items={course.overview.toolsNeeded} />

        <ListSection
          title='Prerequisite'
          items={course.overview.prerequisites}
        />

        <ListSection title='Course Benefit' items={course.overview.benefits} />

        {mentor ? (
          <div className='space-y-4'>
            <h3 className='text-base font-semibold text-text-primary'>Mentor</h3>

            <div className='flex flex-col gap-4 border border-border p-4 md:flex-row md:items-center md:justify-between'>
              <div className='flex gap-4'>
                <img
                  src={mentor.avatar}
                  alt={mentor.name}
                  className='h-16 w-16 rounded-full object-cover'
                />

                <div className='space-y-1'>
                  <h4 className='font-medium text-brand-secondary'>
                    {mentor.name}
                  </h4>
                  <p className='text-sm text-text-primary'>{mentor.title}</p>
                  <p className='max-w-2xl text-sm leading-6 text-text-secondary'>
                    {mentor.bio}
                  </p>
                </div>
              </div>

              <Link
                to={`/dashboard/mentors/${mentor.id}`}
                className='rounded-lg bg-brand-primary px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 '
              >
                View Profile
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CourseOverviewTab;
