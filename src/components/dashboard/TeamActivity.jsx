import Card from '../ui/Card';

const defaultTeamActivity = [];

const getInitials = (name) => {
  if (!name) {
    return 'LM';
  }

  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');
};

const TeamActivity = ({ teamActivity = defaultTeamActivity }) => {
  const items = teamActivity ?? [];

  return (
    <Card className='bg-white'>
      <div>
        <div className='mb-6 flex items-start justify-between gap-3 sm:mb-8'>
          <h2 className='text-lg font-medium sm:text-xl'>Team Activity</h2>
        </div>

        {items.length > 0 ? (
          <div className='space-y-5 sm:space-y-6'>
            {items.map((item, index) => {
              const name = item?.name || 'Team member';
              const description =
                item?.description ||
                item?.action ||
                'Shared an update with the team.';
              const action = item?.type || item?.label || 'Activity';
              const duration = item?.duration || item?.time || 'Just now';

              return (
                <div
                  key={item?.id || `${name}-${index}`}
                  className='flex items-start gap-3'
                >
                  <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-button-primary text-sm font-semibold text-white sm:h-12 sm:w-12 sm:text-base'>
                    {getInitials(name)}
                  </div>

                  <div className='min-w-0 flex-1'>
                    <p className='text-sm font-semibold sm:text-[15px]'>
                      {name}
                    </p>

                    <p className='break-words text-sm leading-5 text-text-secondary'>
                      {description}
                    </p>

                    <p className='mt-1 text-sm font-medium text-brand-secondary'>
                      {action}
                    </p>

                    <span className='mt-1 block text-xs text-text-secondary sm:text-sm'>
                      {duration}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className='rounded-2xl bg-bg-muted p-5 text-center'>
            <p className='text-sm font-medium'>No team activity yet</p>
            <p className='mt-1 text-sm text-text-secondary'>
              Updates from mentors and teammates will appear here.
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default TeamActivity;
