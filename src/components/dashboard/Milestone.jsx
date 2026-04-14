const defaultMilestones = [
  {
    title: 'Enroll in a course',
    status: 'completed',
    description: 'Start your learning journey',
  },
  {
    title: 'Complete first lesson',
    status: 'in-progress',
    description: 'Finish your first lesson',
  },
  {
    title: 'Submit first assignment',
    status: 'upcoming',
    description: 'Submit your first assignment',
  },
  {
    title: 'Complete a course',
    status: 'upcoming',
    description: 'Finish an entire course',
  },
];

const statusStyles = {
  completed: {
    dotColor: 'bg-brand-secondary',
    cardBg: 'bg-brand-muted',
    label: 'Completed',
  },
  'in-progress': {
    dotColor: 'bg-brand-accent',
    cardBg: 'bg-brand-muted',
    label: 'In progress',
  },
  upcoming: {
    dotColor: 'bg-neutral',
    cardBg: 'bg-brand-muted',
    label: 'Upcoming',
  },
};

const Milestone = ({ milestones = defaultMilestones }) => {
  const milestoneItems = milestones.map((item) => {
    const styles = statusStyles[item?.status] ?? statusStyles.upcoming;

    return {
      title: item?.title || 'Milestone',
      description: item?.description || styles.label,
      dotColor: styles.dotColor,
      cardBg: styles.cardBg,
      statusLabel: styles.label,
    };
  });

  return (
    <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4'>
      {milestoneItems.map((item, index) => (
        <div
          key={index}
          className={`rounded-2xl ${item.cardBg} px-4 py-4 sm:px-5`}
        >
          <div className='flex items-center gap-2 sm:gap-3'>
            <span
              className={`h-2.5 w-2.5 shrink-0 rounded-full ${item.dotColor}`}
            />
            <p className='text-sm font-medium'>{item.title}</p>
          </div>

          <p className='mt-1 text-xs text-text-secondary'>{item.statusLabel}</p>
          <p className='mt-1 text-xs text-text-secondary'>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Milestone;
