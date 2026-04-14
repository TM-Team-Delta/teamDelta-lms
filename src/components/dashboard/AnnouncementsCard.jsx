import Card from '../ui/Card';
import { Volume2 } from 'lucide-react';

const defaultAnnouncements = [];

const AnnouncementsCard = ({ announcements = defaultAnnouncements }) => {
  const items = announcements ?? [];
  const hasAnnouncements = items.length > 0;

  return (
    <Card className='bg-white'>
      <div className='space-y-4'>
        <div className='flex items-center justify-between'>
          <h3 className='text-lg font-medium'>Announcements</h3>
        </div>

        {hasAnnouncements ? (
          <div className='space-y-3'>
            {items.map((item, index) => (
              <div
                key={item?.id || `${item?.title || 'announcement'}-${index}`}
                className='flex items-start gap-3 rounded-2xl bg-bg-muted p-4'
              >
                <div className='mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white'>
                  <Volume2 className='h-5 w-5 text-brand-secondary' />
                </div>

                <div className='space-y-1'>
                  <h4 className='font-medium leading-5'>
                    {item?.title || 'Announcement'}
                  </h4>

                  <p className='text-sm leading-5 text-text-secondary'>
                    {item?.description || 'No additional details available.'}
                  </p>

                  {item?.time || item?.date ? (
                    <span className='text-xs text-brand-secondary'>
                      {item?.time || item?.date}
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='rounded-2xl bg-bg-muted p-5 text-center'>
            <p className='text-sm font-medium'>No announcements yet</p>
            <p className='mt-1 text-sm text-text-secondary'>
              New updates from your program team will appear here.
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default AnnouncementsCard;
