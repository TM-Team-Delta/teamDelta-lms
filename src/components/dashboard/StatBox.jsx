const defaultSummary = {
  lessonsDone: 0,
  dayStreak: 0,
  certificates: 0,
};

const StatBox = ({ summary = defaultSummary }) => {
  const statItems = [
    { value: summary?.lessonsDone ?? 0, label: 'Lessons done' },
    { value: summary?.dayStreak ?? 0, label: 'Day streak' },
    { value: summary?.certificates ?? 0, label: 'Certificates' },
  ];

  return (
    <div className='grid grid-cols-1 gap-3 sm:grid-cols-3 xl:grid-cols-1'>
      {statItems.map((item, index) => (
        <div
          key={index}
          className='rounded-2xl bg-brand-muted px-4 py-4 text-center sm:px-5'
        >
          <p className='text-xl font-semibold sm:text-2xl'>{item.value}</p>
          <p className='mt-1 text-xs text-text-secondary sm:text-sm'>
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatBox;
