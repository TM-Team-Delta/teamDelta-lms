import Card from '../ui/Card';

const TrackProgressSkeleton = () => {
  return (
    <div className='animate-pulse'>
      <Card className='mt-6 mb-8 rounded-2xl bg-white'>
        <div className='flex items-center justify-between gap-4'>
          <div className='space-y-3'>
            <div className='h-6 w-40 rounded bg-gray-200' />
            <div className='h-4 w-72 rounded bg-gray-100' />
          </div>
          <div className='h-12 w-12 rounded-full bg-gray-100' />
        </div>
      </Card>

      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3'>
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className='overflow-hidden rounded-2xl border bg-white'
          >
            <div className='relative flex h-28 items-center justify-center bg-gray-100'>
              <div className='absolute top-3 right-3 h-4 w-4 rounded bg-gray-200' />
              <div className='h-10 w-10 rounded-full bg-gray-200' />
            </div>

            <div className='space-y-4 p-4'>
              <div className='flex items-center justify-between gap-3'>
                <div className='h-5 w-36 rounded bg-gray-200' />
                <div className='h-6 w-24 rounded-full bg-gray-100' />
              </div>

              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <div className='h-4 w-16 rounded bg-gray-100' />
                  <div className='h-4 w-10 rounded bg-gray-100' />
                </div>
                <div className='h-2 w-full rounded-full bg-gray-100' />
              </div>

              <div className='flex items-center justify-between gap-3'>
                <div className='h-4 w-16 rounded bg-gray-100' />
                <div className='h-8 w-24 rounded-full bg-gray-200' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackProgressSkeleton;
