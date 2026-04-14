const pulseClassName = 'animate-pulse rounded-xl bg-gray-200';

const CoursePageSkeleton = ({ compact = false }) => {
  return (
    <section className='space-y-6 p-4 pt-0 sm:p-5 sm:pt-0 md:p-6 md:pt-0'>
      <div className={`h-5 w-64 ${pulseClassName}`} />

      <div className='rounded-2xl bg-white p-5 sm:p-6'>
        <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
          <div className='space-y-4'>
            <div className={`h-10 w-72 ${pulseClassName}`} />
            <div className='flex gap-4'>
              <div className={`h-8 w-24 ${pulseClassName}`} />
              <div className={`h-8 w-24 ${pulseClassName}`} />
            </div>
            <div className={`h-11 w-36 ${pulseClassName}`} />
          </div>

          <div className={`h-44 w-full max-w-[260px] ${pulseClassName}`} />
        </div>
      </div>

      <div className='rounded-2xl bg-white p-5 sm:p-6'>
        <div className='flex gap-4'>
          <div className={`h-8 w-24 ${pulseClassName}`} />
          <div className={`h-8 w-32 ${pulseClassName}`} />
          <div className={`h-8 w-28 ${pulseClassName}`} />
        </div>

        <div className='mt-6 space-y-4'>
          <div className={`h-6 w-48 ${pulseClassName}`} />
          <div className={`h-4 w-full ${pulseClassName}`} />
          <div className={`h-4 w-11/12 ${pulseClassName}`} />
          <div className={`h-4 w-10/12 ${pulseClassName}`} />
        </div>

        {!compact ? (
          <div className='mt-6 grid gap-4 md:grid-cols-2'>
            <div className={`h-28 w-full ${pulseClassName}`} />
            <div className={`h-28 w-full ${pulseClassName}`} />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default CoursePageSkeleton;
