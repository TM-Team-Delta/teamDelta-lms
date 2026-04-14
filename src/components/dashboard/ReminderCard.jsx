import Card from '../ui/Card';
import { BellRing } from 'lucide-react';

const defaultReminders = [];

const ReminderCard = ({ reminders = defaultReminders }) => {
  const items = reminders ?? [];

  return (
    <Card className='bg-white'>
      <div className='space-y-4'>
        <div className='flex items-center justify-between'>
          <h3 className='text-lg font-medium text-text-primary'>Reminders</h3>
          {items.length > 0 ? (
            <p className='text-sm text-brand-secondary'>{items.length} active</p>
          ) : null}
        </div>

        {items.length > 0 ? (
          <div className='flex gap-4 overflow-x-auto pb-2 md:flex-col md:overflow-visible'>
            {items.map((item, index) => (
              <div
                key={item?.id || `${item?.title || 'reminder'}-${index}`}
                className='min-w-[240px] flex-shrink-0 rounded-2xl bg-bg-primary p-4 md:min-w-0'
              >
                <div className='mb-3'>
                  <BellRing className='h-5 w-5 text-brand-secondary' />
                </div>

                <h4 className='mb-2 font-medium leading-6 text-text-primary'>
                  {item?.title || 'Reminder'}
                </h4>

                {item?.description ? (
                  <p className='text-sm leading-6 text-text-secondary'>
                    {item.description}
                  </p>
                ) : item?.time ? (
                  <p className='text-sm leading-6 text-text-secondary'>
                    Scheduled for{' '}
                    <span className='font-semibold text-text-primary'>
                      {item.time}
                    </span>
                  </p>
                ) : (
                  <p className='text-sm leading-6 text-text-secondary'>
                    Stay on track with your next task.
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className='rounded-2xl bg-bg-muted p-5 text-center'>
            <p className='text-sm font-medium'>No reminders right now</p>
            <p className='mt-1 text-sm text-text-secondary'>
              Time-sensitive tasks and alerts will show up here.
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ReminderCard;
