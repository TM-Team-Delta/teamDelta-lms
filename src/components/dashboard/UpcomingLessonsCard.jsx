import Card from '../ui/Card';
import { Link } from 'react-router-dom';

const defaultUpcomingLessons = [];

const UpcomingLessonsCard = ({ upcomingLessons = defaultUpcomingLessons }) => {
  const lessons = upcomingLessons ?? [];

  return (
    <Card className='bg-white'>
      <div className='space-y-4'>
        <h3 className='text-lg font-medium'>Upcoming Lessons</h3>

        {lessons.length > 0 ? (
          <div className='space-y-3'>
            {lessons.map((lesson, index) => {
              const lessonTitle = lesson?.title || 'Upcoming lesson';
              const lessonTime =
                lesson?.time || lesson?.duration || 'Schedule coming soon';
              const lessonLink = lesson?.courseId
                ? `/dashboard/course-detail/${lesson.courseId}`
                : '/dashboard/courses';

              return (
                <div
                  key={lesson?.id || `${lessonTitle}-${index}`}
                  className='flex items-center justify-between gap-3 rounded-2xl border border-border bg-white px-4 py-3'
                >
                  <div className='min-w-0'>
                    <h4 className='text-base font-medium leading-5'>
                      {lessonTitle}
                    </h4>
                    <p className='mt-1 text-xs leading-4 text-text-secondary'>
                      {lessonTime}
                    </p>
                  </div>

                  <Link
                    to={lessonLink}
                    className='shrink-0 rounded-xl bg-bg-muted px-4 py-2 text-sm font-medium text-text-secondary transition hover:bg-bg-primary'
                  >
                    Open
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div className='rounded-2xl bg-bg-muted p-5 text-center'>
            <p className='text-sm font-medium'>No upcoming lessons yet</p>
            <p className='mt-1 text-sm text-text-secondary'>
              Your next scheduled lessons will appear here.
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default UpcomingLessonsCard;
