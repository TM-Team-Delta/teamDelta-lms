import Card from '../ui/Card';
import { AlarmClock, Siren } from 'lucide-react';

// const sessions = [
//   {
//     id: 1,
//     title: 'Product Strategy Q&A',
//     mentor: 'Dr. Sara Adunola - 45 min',
//     meta: 'Started 5 mins ago',
//     variant: 'alert',
//   },
//   {
//     id: 2,
//     title: 'Wireframing Basics Review',
//     mentor: 'Dr. Sara Adunola - 45 min',
//     meta: 'Today - 4:00 PM WAT',
//   },
//   {
//     id: 3,
//     title: 'User Interview Techniques',
//     mentor: 'Ms. Ngozi Ilo - 40 min',
//     meta: 'Tomorrow - 10:00 AM WAT',
//   },
// ];

const TeamSessions = ({ sessions = [] }) => {
  return (
    <Card className='bg-white'>
      <div className='space-y-4'>
        <h3 className='text-base font-medium text-text-primary sm:text-lg'>
          Team Sessions
        </h3>

        <div className='space-y-3'>
          {sessions.length ? (
            sessions.map((session) => {
              const isLive =
                session?.status === 'live' ||
                session?.statusLabel?.toLowerCase().includes('started');

              return (
                <div
                  key={session.sessionId}
                  className={`rounded-2xl border p-4 ${
                    isLive
                      ? 'border-warning-primary bg-white'
                      : 'border-border bg-white'
                  }`}
                >
                  <h4
                    className={`text-sm font-medium ${
                      isLive ? 'text-warning-primary' : 'text-text-primary'
                    }`}
                  >
                    {session?.title || 'Untitled session'}
                  </h4>

                  <p className='mt-2 text-[11px] leading-5 text-text-secondary sm:text-xs'>
                    {[session?.mentorName, session?.durationLabel]
                      .filter(Boolean)
                      .join(' - ') || 'Session details unavailable'}
                  </p>

                  <div
                    className={`mt-3 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-[11px] font-medium ${
                      isLive
                        ? 'bg-warning-secondary text-warning-primary'
                        : 'bg-bg-muted text-text-secondary'
                    }`}
                  >
                    {isLive ? (
                      <Siren className='h-3.5 w-3.5' />
                    ) : (
                      <AlarmClock className='h-3.5 w-3.5' />
                    )}
                    {[
                      session?.statusLabel,
                      session?.dateLabel,
                      session?.timeLabel,
                    ]
                      .filter(Boolean)
                      .join(' - ') || 'No schedule available'}
                  </div>
                </div>
              );
            })
          ) : (
            <div className='rounded-2xl p-6 text-sm text-text-secondary flex flex-col justify-center items-center bg-bg-muted'>
              <span className='font-semibold text-text-primary'>
                No team sessions yet.
              </span>
              <span>
                Sessions will show up here when your team schedules them.
              </span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default TeamSessions;
