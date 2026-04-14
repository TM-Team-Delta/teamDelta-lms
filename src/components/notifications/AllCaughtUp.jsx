import { Check } from 'lucide-react';

const AllCaughtUp = () => {
  return (
    // Shared empty state for tabs with no matching notifications.
    <div className='flex flex-col items-center justify-center py-16 sm:py-20 text-center'>
      <div className='flex h-16 w-16 items-center justify-center rounded-full bg-green-200 text-text-primary'>
        <Check size={28} />
      </div>

      <h3 className='mt-8 text-xl font-medium text-text-primary'>
        You're all caught up!
      </h3>

      <p className='mt-4 max-w-sm text-sm leading-6 text-text-secondary'>
        You have no new notifications at the moment. Check back later for
        updates on your courses and activities.
      </p>
    </div>
  );
};

export default AllCaughtUp;
