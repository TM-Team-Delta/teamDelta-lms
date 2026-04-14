import { Link } from 'react-router-dom';
import {
  deriveCourseProgress,
  getStoredCourseProgress,
} from '../../utils/courseProgress';

const getCourseCtaLink = (course) => {
  const storedProgress = getStoredCourseProgress(course.id);
  const progress = deriveCourseProgress(course, storedProgress);

  if (progress.isCourseCompleted) {
    return `/dashboard/course-detail/${course.id}/certificate`;
  }

  const nextUnit =
    progress.unitSequence.find(
      (item) =>
        progress.statusByUnitId[item.unitId] === 'in-progress' ||
        progress.statusByUnitId[item.unitId] === 'available'
    ) || progress.unitSequence[0];

  if (!nextUnit) {
    return `/dashboard/course-detail/${course.id}`;
  }

  return `/dashboard/course-detail/${course.id}/modules/${nextUnit.moduleId}/items/${nextUnit.unitIndex}`;
};

const CourseDetailHero = ({
  course,
  ctaLink: ctaLinkOverride,
  onPrimaryAction,
  primaryActionDisabled = false,
  isPrimaryActionLoading = false,
}) => {
  const ctaLink = ctaLinkOverride || getCourseCtaLink(course);
  const isEnrolled = Boolean(course?.enrollment?.isEnrolled);
  const actionLabel = isPrimaryActionLoading
    ? 'Please wait...'
    : course.enrollment.ctaLabel;

  return (
    <section className='rounded-2xl bg-brand-primary p-5 text-white sm:p-6'>
      <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
        <div className='space-y-6'>
          <div className='space-y-3'>
            <h1 className='text-2xl font-semibold sm:text-3xl'>
              {course.title}
            </h1>

            <div className='flex flex-wrap items-center gap-4 text-sm text-white/90'>
              <div>
                <p className='text-xs uppercase tracking-wide text-text-secondary'>
                  Level
                </p>
                <p className='mt-1'>{course.level}</p>
              </div>

              <div className='hidden h-10 w-px bg-button-secondary/30 sm:block' />

              <div>
                <p className='text-xs uppercase tracking-wide text-text-secondary'>
                  Duration
                </p>
                <p className='mt-1'>{course.duration.label}</p>
              </div>
            </div>
          </div>

          {isEnrolled ? (
            <Link
              to={ctaLink}
              className='inline-flex rounded-lg bg-button-secondary px-5 py-3 text-sm font-medium text-brand-primary transition hover:opacity-90'
            >
              {actionLabel}
            </Link>
          ) : (
            <button
              type='button'
              onClick={onPrimaryAction}
              disabled={primaryActionDisabled || isPrimaryActionLoading}
              className='inline-flex rounded-lg bg-button-secondary px-5 py-3 text-sm font-medium text-brand-primary transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60'
            >
              {actionLabel}
            </button>
          )}
        </div>

        <div className='overflow-hidden rounded-2xl bg-white/10 p-2 md:w-[260px]'>
          <img
            src={course.coverImage}
            alt={course.title}
            className='h-44 w-full rounded-xl object-cover sm:h-52 md:w-[260px]'
          />
        </div>
      </div>
    </section>
  );
};

export default CourseDetailHero;
