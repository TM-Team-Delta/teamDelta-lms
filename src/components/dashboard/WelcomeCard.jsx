import Card from '../ui/Card';
import illustrationImg from '../../assets/welcome-card-image.png';
import { Link } from 'react-router-dom';

const WelcomeCard = ({
  name = 'Vic3',
  completedModule = 3,
  buttonText = 'Continue Learning',
  illustration = illustrationImg,
}) => {
  return (
    <Card className='bg-brand-muted'>
      <div className='flex items-center justify-between gap-10'>
        {/* left content */}
        <div className='max-w-[480px]'>
          <p className='text-sm text-text-secondary mb-1.5'>Welcome back</p>
          <h2 className='text-2xl md:text-[42px] font-semibold leading-tight mb-3'>
            Good morning, {name}
          </h2>
          <p className='md:text-lg leading-[1.6] mb-8'>
            You're making great progress! You've completed {completedModule}{' '}
            modules this week. Keep pushing — your certificate is within reach.
          </p>
          <Link
            to=''
            className='bg-button-primary hover:bg-brand-secondary text-white md:text-lg font-medium px-8 py-4 rounded-xl transition'
          >
            {buttonText}
          </Link>
        </div>

        {/* right - illustration */}
        <div className='flex shrink-0'>
          <img
            src={illustration}
            alt='Welcome illustration'
            className='w-[220px] h-auto object-contain'
          />
        </div>
      </div>
    </Card>
  );
};

export default WelcomeCard;
