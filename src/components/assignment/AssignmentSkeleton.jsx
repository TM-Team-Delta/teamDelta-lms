import Card from '../ui/Card';

const AssignmentSkeleton = () => {
  return (
    <div className='animate-pulse'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-6 mb-8 mt-4'>
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index} className='rounded-lg bg-white border border-gray-200 p-5'>
            <div className='space-y-3'>
              <div className='h-4 w-32 rounded bg-gray-100' />
              <div className='h-7 w-16 rounded bg-gray-200' />
            </div>
          </Card>
        ))}
      </div>

      <div className='hidden md:block bg-white border border-gray-300 overflow-hidden rounded-lg'>
        <div className='border-b px-6 py-4'>
          <div className='grid grid-cols-5 gap-4'>
            <div className='h-4 w-24 rounded bg-gray-100' />
            <div className='h-4 w-16 rounded bg-gray-100' />
            <div className='h-4 w-16 rounded bg-gray-100' />
            <div className='h-4 w-24 rounded bg-gray-100' />
            <div className='h-4 w-10 rounded bg-gray-100 ml-auto' />
          </div>
        </div>

        <div className='space-y-0'>
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className='grid grid-cols-5 gap-4 border-b px-6 py-4 last:border-b-0'
            >
              <div className='h-5 w-32 rounded bg-gray-200' />
              <div className='h-5 w-20 rounded bg-gray-100' />
              <div className='h-5 w-24 rounded bg-gray-100' />
              <div className='h-5 w-full rounded bg-gray-100' />
              <div className='h-9 w-32 rounded-md bg-gray-200 ml-auto' />
            </div>
          ))}
        </div>
      </div>

      <div className='md:hidden space-y-4'>
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className='bg-white border border-gray-200 rounded-xl p-4 shadow-sm'
          >
            <div className='space-y-3'>
              <div className='h-5 w-36 rounded bg-gray-200' />
              <div className='h-4 w-full rounded bg-gray-100' />
              <div className='flex justify-between'>
                <div className='h-4 w-20 rounded bg-gray-100' />
                <div className='h-5 w-16 rounded-full bg-gray-100' />
              </div>
              <div className='h-9 w-full rounded-md bg-gray-200' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentSkeleton;
