import Card from '../ui/Card';
import { FolderOpen, MessageSquareMore } from 'lucide-react';

const actions = [
  {
    id: 1,
    label: 'Team chat',
    icon: MessageSquareMore,
    className: 'bg-button-primary text-white hover:bg-button-primary/90',
  },
  {
    id: 2,
    label: 'Shared files',
    icon: FolderOpen,
    className:
      'border border-white/35 bg-white/10 text-white hover:bg-white/15',
  },
];

const WelcomeCard = ({ teamInfo }) => {
  return (
    <Card className='overflow-hidden bg-gradient-to-r from-[#426154] via-[#4f916e] to-[#57d1a0] text-white'>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between'>
          <div className='max-w-2xl'>
            <span className='inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-medium text-brand-primary shadow-sm'>
              {teamInfo?.teamName || 'My Team'}
              {teamInfo?.cohort ? ` - ${teamInfo.cohort}` : ''}
            </span>

            <div className='mt-5 flex flex-wrap items-center gap-3'>
              <h1 className='text-2xl font-semibold sm:text-[2rem]'>
                {teamInfo?.welcomeTitle ||
                  `Welcome to ${teamInfo?.teamName || 'your team'}`}
              </h1>
            </div>

            <p className='mt-4 max-w-xl text-sm leading-7 text-white/90 sm:text-base'>
              {teamInfo?.description || 'Team information will appear here.'}
            </p>
          </div>

          <div className='grid grid-cols-2 gap-3 self-start sm:gap-4'>
            <div className='min-w-[88px] rounded-2xl bg-brand-muted px-4 py-3 text-center text-brand-primary shadow-sm'>
              <p className='text-xl font-semibold leading-none'>
                {teamInfo?.membersCount ?? 0}
              </p>
              <p className='mt-2 text-xs font-medium'>Members</p>
            </div>

            <div className='min-w-[88px] rounded-2xl bg-brand-muted px-4 py-3 text-center text-brand-primary shadow-sm'>
              <p className='text-xl font-semibold leading-none'>
                {teamInfo?.onlineNow ?? 0}
              </p>
              <p className='mt-2 text-xs font-medium'>Online now</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-3 sm:flex-row'>
          {actions.map((action) => {
            const Icon = action.icon;

            return (
              <button
                key={action.id}
                type='button'
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition sm:w-auto ${action.className}`}
              >
                <Icon className='h-4 w-4' />
                {action.label}
              </button>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default WelcomeCard;
