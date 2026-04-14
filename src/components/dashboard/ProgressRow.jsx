const ProgressRow = ({ modules }) => {
  const progressModules = modules ?? [
    { name: 'UX Design Fundamentals', value: 50 },
    { name: 'Product Management Basics', value: 40 },
    { name: 'User Research Methods', value: 70 },
    { name: 'Front Web Development', value: 25 },
    { name: 'Data-Driven Design', value: 70 },
  ];

  return (
    <div className='space-y-3 sm:space-y-4'>
      {progressModules.map((item, index) => (
        <div
          key={index}
          className='grid grid-cols-[minmax(0,1fr)_52px] gap-2 sm:grid-cols-[minmax(150px,220px)_minmax(0,1fr)_52px] sm:items-center sm:gap-4'
        >
          <p className='truncate text-sm text-text-primary'>{item.name}</p>

          <div className='col-span-2 h-1.5 overflow-hidden rounded-full bg-neutral sm:col-span-1'>
            <div
              className='h-full rounded-full bg-brand-secondary'
              style={{ width: `${item.value}%` }}
            />
          </div>

          <span className='text-right text-xs sm:text-sm'>{item.value}%</span>
        </div>
      ))}
    </div>
  );
};

export default ProgressRow;
