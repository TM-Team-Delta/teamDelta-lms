import Card from '../ui/Card';
import { CheckCheck, ShieldCheck } from 'lucide-react';

// const goals = [
//   {
//     id: 1,
//     title: 'Complete Module 2 as a team',
//     subtitle: 'Done - Mar 18',
//     completed: true,
//   },
//   {
//     id: 2,
//     title: 'Submit group wireframe for peer review',
//     subtitle: 'In progress - Due Mar 26',
//   },
//   {
//     id: 3,
//     title: 'Attend all 3 mentor sessions in Week 5',
//     subtitle: 'Upcoming - Starts Mar 28',
//   },
//   {
//     id: 4,
//     title: 'Present capstone concept to cohort',
//     subtitle: 'Upcoming - Apr 10',
//   },
// ];

const TeamGoals = ({ goals = [] }) => {
  return (
    <Card className='bg-white'>
      <div className='space-y-4'>
        <h3 className='text-base font-medium text-text-primary sm:text-lg'>
          Team Goals
        </h3>

        <div className='space-y-3'>
          {goals.length ? (
            goals.map((goal) => {
              const isCompleted = goal?.status === 'completed';

              return (
                <div
                  key={goal.goalId}
                  className={`rounded-2xl border p-4 ${
                    isCompleted
                      ? 'border-bg-muted bg-brand-muted'
                      : 'border-border bg-white'
                  }`}
                >
                  <div className='flex items-start gap-3'>
                    <div
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${
                        isCompleted
                          ? 'bg-white text-brand-secondary'
                          : 'bg-brand-muted text-brand-secondary'
                      }`}
                    >
                      {isCompleted ? (
                        <ShieldCheck className='h-4 w-4' />
                      ) : (
                        <CheckCheck className='h-4 w-4' />
                      )}
                    </div>

                    <div>
                      <p className='text-sm leading-6 text-text-primary'>
                        {goal?.title || 'Untitled goal'}
                      </p>
                      <p
                        className={`mt-1 text-xs ${
                          isCompleted
                            ? 'text-brand-secondary'
                            : 'text-text-secondary'
                        }`}
                      >
                        {[goal?.statusLabel, goal?.dateLabel]
                          .filter(Boolean)
                          .join(' - ') || 'No status available'}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className='rounded-2xl p-6 text-sm text-text-secondary flex flex-col justify-center items-center bg-bg-muted'>
              <span className='font-semibold text-text-primary'>
                No team goals yet.
              </span>
              <span>
                Your team goals will appear here when they are assigned.
              </span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default TeamGoals;
