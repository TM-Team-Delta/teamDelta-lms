import Card from '../ui/Card';
import { BookOpen, CheckCircle2, Clock3 } from 'lucide-react';


const OverviewSection = ({ stats }) => {

  const overviewData = [
    {
      id: 1,
      icon: BookOpen,
      value: stats?.coursesEnrolled ?? 0,
      title: 'Courses Enrolled',
      subtitle: 'Active courses',
      badgeText: 'Enrolled',
      badgeClassName: 'bg-bg-muted text-text-secondary',
    },
    {
      id: 2,
      icon: CheckCircle2,
      value: stats?.lessonsCompleted ?? 0,
      title: 'Lessons Completed',
      subtitle: 'Completed so far',
      badgeText: 'Progress',
      badgeClassName: 'bg-bg-muted text-text-secondary',
    },
    {
      id: 3,
      icon: Clock3,
      value: stats?.assignmentsPending ?? 0,
      title: 'Assignments Pending',
      subtitle: 'Pending tasks',
      badgeText: 'Pending',
      badgeClassName: 'bg-warning-secondary text-warning-primary',
    },
  ];

  return (
    <section className='space-y-4 mt-10'>
      <h2 className='text-lg font-semibold sm:text-xl'>Overview</h2>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3'>
        {overviewData.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.id} className='bg-white'>
              <div className='flex h-full flex-col gap-6 sm:gap-8'>
                {/* top row */}
                <div className='flex items-start justify-between gap-3'>
                  <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-button-secondary sm:h-11 sm:w-11'>
                    <Icon className='h-4 w-4 text-brand-secondary sm:h-5 sm:w-5' />
                  </div>

                  <span
                    className={`inline-flex max-w-[96px] shrink-0 items-center justify-center rounded-full px-3 py-1 text-center text-[11px] font-medium leading-4 sm:max-w-[110px] sm:text-xs ${item.badgeClassName}`}
                  >
                    {item.badgeText}
                  </span>
                </div>

                {/* content */}
                <div className='space-y-1.5'>
                  <h3 className='text-3xl font-semibold leading-none'>
                    {item.value}
                  </h3>

                  <p className=' font-medium leading-[1.15] md:text-lg'>
                    {item.title}
                  </p>

                  <p className='text-sm leading-6 text-text-secondary '>
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default OverviewSection;
