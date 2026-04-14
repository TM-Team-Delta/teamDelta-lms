import Card from '../ui/Card';
import { Circle, MessageSquareMore, UserRound } from 'lucide-react';

// const teamMates = [
//   {
//     id: 1,
//     initials: 'TK',
//     name: 'Temi Kingsley',
//     role: 'UX Design Track',
//     progress: 50,
//   },
//   {
//     id: 2,
//     initials: 'AO',
//     name: 'Amaka Okafor',
//     role: 'Product Mgmt Track',
//     progress: 50,
//   },
//   {
//     id: 3,
//     initials: 'EF',
//     name: 'Emeka Femi',
//     role: 'Frontend Dev Track',
//     progress: 50,
//   },
//   {
//     id: 4,
//     initials: 'BL',
//     name: 'Bola Lawal',
//     role: 'Data Analytics Track',
//     progress: 50,
//   },
// ];

const TeamMates = ({ summary, members = [] }) => {
  return (
    <Card className='bg-white'>
      <div className='space-y-4'>
        <div className='flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between'>
          <h3 className='text-base font-medium text-text-primary sm:text-lg'>Team mates</h3>

          <p className='text-xs text-text-secondary'>
            {summary?.onlineMembers ?? 0} of {summary?.totalMembers ?? members.length} online
          </p>
        </div>

        <div className='grid grid-cols-1 gap-4 xl:grid-cols-2'>
          {members.length ? (
            members.map((mate) => (
              <div key={mate.memberId} className='rounded-2xl border border-border bg-white p-4'>
                <div className='flex items-start justify-between gap-3'>
                  {mate?.avatar ? (
                    <img
                      src={mate.avatar}
                      alt={mate?.name || 'Team member avatar'}
                      className='h-9 w-9 rounded-full object-cover'
                    />
                  ) : (
                    <div className='flex h-9 w-9 items-center justify-center rounded-full bg-button-primary text-xs font-semibold text-white'>
                      {mate?.initials || 'TM'}
                    </div>
                  )}

                  <Circle
                    className={`h-2.5 w-2.5 stroke-none ${
                      mate?.isOnline ? 'fill-brand-secondary text-brand-secondary' : 'fill-gray-300 text-gray-300'
                    }`}
                  />
                </div>

                <div className='mt-4'>
                  <h4 className='text-sm font-medium text-text-primary'>{mate?.name || 'Team member'}</h4>
                  <p className='mt-1 text-xs text-text-secondary'>
                    {mate?.track || summary?.trackLabel || 'No track available'}
                  </p>
                </div>

                <div className='mt-4'>
                  <div className='mb-2 flex items-center justify-between text-xs'>
                    <span className='text-text-primary'>Progress</span>
                    <span className='font-semibold text-text-primary'>{mate?.progress ?? 0}%</span>
                  </div>

                  <div className='h-1.5 rounded-full bg-bg-muted'>
                    <div
                      className='h-full rounded-full bg-brand-secondary'
                      style={{ width: `${mate?.progress ?? 0}%` }}
                    />
                  </div>
                </div>

                <div className='mt-5 grid grid-cols-2 gap-3'>
                  <button
                    disabled={!mate?.messageEnabled}
                    className='inline-flex items-center justify-center gap-2 rounded-xl bg-bg-muted px-3 py-2.5 text-xs font-medium text-text-secondary transition hover:bg-bg-primary disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm'
                  >
                    <MessageSquareMore className='h-4 w-4' />
                    Message
                  </button>

                  <a
                    href={mate?.profileUrl || '#'}
                    className='inline-flex items-center justify-center gap-2 rounded-xl bg-bg-muted px-3 py-2.5 text-xs font-medium text-text-secondary transition hover:bg-bg-primary sm:text-sm'
                  >
                    <UserRound className='h-4 w-4' />
                    Profile
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className='rounded-2xl border border-dashed border-border p-6 text-sm text-text-secondary'>
              No team members yet.
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default TeamMates;
