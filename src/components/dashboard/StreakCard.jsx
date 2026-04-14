import Card from '../ui/Card';
import { Flame } from 'lucide-react';

const StreakCard = ({
  days = 12,
  title = 'Streak and counting',
  message = "You're building more than skills - you're building a habit.",
}) => {
  return (
    <Card className='bg-white'>
      <div className='flex flex-col items-center text-center gap-4'>
        
        {/* icon + days */}
        <div className='flex items-center gap-3'>
          <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent-bg'>
            <Flame className='text-brand-accent' size={30} />
          </div>
          <p className='text-lg font-semibold'>
            {days} days
          </p>
        </div>

        {/* title */}
        <p className='text-lg font-medium'>
          {title}
        </p>

        {/* message */}
        <p className='text-sm text-brand-secondary'>
          {message}
        </p>
      </div>
    </Card>
  );
};

export default StreakCard;