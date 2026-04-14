import Card from '../ui/Card';
import { CalendarDays, Circle } from 'lucide-react';

const MentorCard = ({ mentor, nextSession }) => {
  return (
    <Card className='bg-white'>
      <div className='space-y-5'>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
          <div className='flex items-start gap-4'>
            {mentor?.avatar ? (
              <img
                src={mentor.avatar}
                alt={mentor?.name || 'Mentor avatar'}
                className='h-12 w-12 shrink-0 rounded-full object-cover'
              />
            ) : (
              <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-button-primary text-lg font-semibold text-white'>
                {mentor?.name
                  ?.split(' ')
                  .map((part) => part[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase() || 'NA'}
              </div>
            )}

            <div>
              <h2 className='text-lg font-semibold text-text-primary'>
                {mentor?.name || 'No mentor assigned'}
              </h2>
              <p className='text-sm leading-6 text-text-secondary'>
                {mentor?.title || mentor?.role || 'Mentor'}
                {mentor?.teamName ? `, ${mentor.teamName}` : ''}
              </p>
            </div>
          </div>

          <div className='inline-flex items-center gap-2 text-xs font-medium text-brand-secondary'>
            <Circle className='h-2.5 w-2.5 fill-current stroke-none' />
            {mentor?.availability || 'Availability unavailable'}
          </div>
        </div>

        <div className='flex flex-wrap gap-2'>
          {(mentor?.skills || []).length ? (
            mentor.skills.map((skill) => (
              <span
                key={skill}
                className='rounded-full bg-brand-muted px-3 py-1 text-[11px] font-medium text-text-secondary'
              >
                {skill}
              </span>
            ))
          ) : (
            <span className='text-xs text-text-secondary'>
              No skills listed yet
            </span>
          )}
        </div>

        <div className='flex flex-col gap-3 rounded-2xl bg-brand-muted p-4 sm:flex-row sm:items-center sm:justify-between'>
          <div className='flex items-start gap-3'>
            <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-muted text-brand-primary'>
              <CalendarDays className='h-4 w-4' />
            </div>

            <div>
              <p className='text-sm font-medium text-text-primary'>
                {nextSession?.title || 'No upcoming session'}
              </p>
              <p className='mt-1 text-xs leading-5 text-text-secondary sm:text-sm'>
                {nextSession
                  ? `${nextSession.dateLabel || ''}${
                      nextSession.timeLabel ? ` - ${nextSession.timeLabel}` : ''
                    }${nextSession.topic ? ` - ${nextSession.topic}` : ''}${
                      nextSession.durationLabel
                        ? ` - ${nextSession.durationLabel}`
                        : ''
                    }`
                  : 'Session details will appear here.'}
              </p>
            </div>
          </div>

          {nextSession?.joinEnabled && (
            <button className='self-start rounded-lg bg-button-primary px-4 py-2 text-xs font-medium text-white transition hover:bg-button-primary/90 sm:self-auto'>
              Join
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default MentorCard;
