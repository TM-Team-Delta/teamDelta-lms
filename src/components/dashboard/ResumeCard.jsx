import Card from '../ui/Card';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResumeCard = ({ resume }) => {
  const courseTitle = resume?.courseTitle || 'Your course';
  const lessonTitle = resume?.lessonTitle || 'Continue learning';
  const buttonLabel = resume?.buttonLabel || 'Resume';

  const resumeLink = resume?.courseId
    ? `/dashboard/course-detail/${resume.courseId}`
    : '/dashboard/courses';

  return (
    <Card className='bg-white'>
      <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div className='flex items-start gap-3 sm:items-center'>
          <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-muted'>
            <Play className='h-5 w-5 fill-brand-secondary text-brand-secondary' />
          </div>

          <div>
            <h2 className='text-base font-semibold leading-tight sm:text-lg'>
              Continue where you left off
            </h2>
            <p className='mt-1 text-sm leading-5 text-text-secondary'>
              {courseTitle} · {lessonTitle}
            </p>
          </div>
        </div>

        <Link
          to={resumeLink}
          className='inline-flex shrink-0 items-center justify-center rounded-xl bg-button-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-button-primary/90'
        >
          {buttonLabel}
        </Link>
      </div>
    </Card>
  );
};

export default ResumeCard;
