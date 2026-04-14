import Card from '../ui/Card';
import { Link } from 'react-router-dom';
import thumbnailImg from '../../assets/cur-course-1.png'

const CurrentCoursesCard = ({ currentCourses }) => {
  const courses = currentCourses ?? [];
  const hasOneCourse = courses.length === 1;
  const hasMultipleCourses = courses.length >= 2;

  const getCourseDetails = (course) => {
    const progress = course?.progress ?? 0;
    const title = course?.title || 'Untitled course';
    const nextLesson = course?.nextLesson || 'No upcoming lesson yet';
    const buttonLabel = course?.buttonLabel || 'Continue';
    const thumbnail =
      course?.thumbnail || thumbnailImg;
    const courseLink = course?.courseId
      ? `/dashboard/course-detail/${course.courseId}`
      : '/dashboard/courses';

    return {
      progress,
      title,
      nextLesson,
      buttonLabel,
      thumbnail,
      courseLink,
    };
  };

  return (
    <section className='space-y-4 mt-10'>
      <div className='flex items-center justify-between gap-3'>
        <h2 className='text-lg font-semibold  sm:text-xl'>Current Courses</h2>

        {hasMultipleCourses ? (
          <Link
            to='/dashboard/courses'
            className='text-sm font-medium text-brand-secondary hover:text-brand-secondary/70'
          >
            See All
          </Link>
        ) : null}
      </div>

      {courses.length === 0 ? (
        <Card className='bg-white'>
          <p className='text-sm text-text-secondary'>No current courses yet.</p>
        </Card>
      ) : hasOneCourse ? (
        (() => {
          const course = courses[0];
          const {
            progress,
            title,
            nextLesson,
            buttonLabel,
            thumbnail,
            courseLink,
          } = getCourseDetails(course);

          return (
            <Card className='bg-white'>
              <div className='grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-center'>
                <div className='overflow-hidden rounded-2xl bg-neutral'>
                  <img
                    src={thumbnail}
                    alt={title}
                    className='h-56 w-full object-cover'
                    onError={(event) => {
                      event.currentTarget.src =
                        thumbnailImg;
                    }}
                  />
                </div>

                <div className='space-y-4'>
                  <div className='space-y-2'>
                    <p className='text-sm font-medium text-brand-secondary'>
                      Current Course
                    </p>
                    <h3 className='text-xl font-semibold leading-tight sm:text-2xl'>
                      {title}
                    </h3>
                    <p className='text-sm text-text-secondary'>
                      Pick up from your next lesson and keep your momentum going.
                    </p>
                  </div>

                  <div className='space-y-2'>
                    <div className='flex items-center justify-between gap-3'>
                      <p className='text-sm font-medium'>Progress</p>
                      <span className='text-sm'>{progress}%</span>
                    </div>

                    <div className='h-2 overflow-hidden rounded-full bg-neutral'>
                      <div
                        className='h-full rounded-full bg-brand-secondary'
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  <div className='rounded-2xl bg-bg-muted p-4'>
                    <p className='text-sm text-text-secondary'>Up next</p>
                    <p className='mt-1 text-base font-medium'>{nextLesson}</p>
                  </div>

                  <Link
                    to={courseLink}
                    className='inline-flex items-center justify-center rounded-xl bg-button-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-button-primary/90'
                  >
                    {buttonLabel}
                  </Link>
                </div>
              </div>
            </Card>
          );
        })()
      ) : (
        <div
          className={`grid grid-cols-1 gap-4 ${
            hasMultipleCourses ? 'md:grid-cols-2' : ''
          }`}
        >
          {courses.map((course) => {
            const {
              progress,
              title,
              nextLesson,
              buttonLabel,
              thumbnail,
              courseLink,
            } = getCourseDetails(course);

            return (
              <Card key={course?.courseId || title} className='bg-white'>
                <div className='space-y-4'>
                  <div className='overflow-hidden rounded-2xl'>
                    <img
                      src={thumbnail}
                      alt={title}
                      className='h-44 w-full object-cover sm:h-52'
                      onError={(event) => {
                        event.currentTarget.src =
                          thumbnailImg;
                      }}
                    />
                  </div>

                  <div className='space-y-3'>
                    <h3 className='text-base font-medium leading-6 sm:text-lg'>
                      {title}
                    </h3>

                    <div className='space-y-1.5'>
                      <div className='flex items-center justify-between gap-3'>
                        <p className='text-sm'>Progress</p>
                        <span className='text-sm'>{progress}%</span>
                      </div>

                      <div className='h-1.5 overflow-hidden rounded-full bg-neutral'>
                        <div
                          className='h-full rounded-full bg-brand-secondary'
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    <div className='space-y-1'>
                      <p className='text-sm text-text-secondary'>Up next</p>
                      <p className='text-sm'>{nextLesson}</p>
                    </div>

                    <Link
                      to={courseLink}
                      className='inline-flex w-full items-center justify-center rounded-xl bg-button-primary px-4 py-3 text-sm font-medium text-white transition hover:bg-button-primary/90'
                    >
                      {buttonLabel}
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default CurrentCoursesCard;
