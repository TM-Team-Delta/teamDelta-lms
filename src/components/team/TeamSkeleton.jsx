import Card from '../ui/Card';

const TeamSkeleton = () => {
  return (
    <div className='space-y-6 p-4 sm:p-5 md:p-6 md:pt-0 animate-pulse'>
      <Card className='overflow-hidden bg-white'>
        <div className='space-y-6'>
          <div className='flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between'>
            <div className='max-w-2xl space-y-4'>
              <div className='h-7 w-40 rounded-full bg-gray-200' />
              <div className='h-10 w-80 rounded bg-gray-200' />
              <div className='h-4 w-full rounded bg-gray-100' />
              <div className='h-4 w-3/4 rounded bg-gray-100' />
            </div>

            <div className='grid grid-cols-2 gap-3 self-start sm:gap-4'>
              <div className='h-20 w-24 rounded-2xl bg-gray-100' />
              <div className='h-20 w-24 rounded-2xl bg-gray-100' />
            </div>
          </div>
        </div>
      </Card>

      <div className='grid grid-cols-1 gap-4 xl:grid-cols-12'>
        <div className='space-y-4 xl:col-span-8'>
          <Card className='bg-white'>
            <div className='space-y-5'>
              <div className='flex items-start justify-between gap-4'>
                <div className='flex items-start gap-4'>
                  <div className='h-12 w-12 rounded-full bg-gray-200' />
                  <div className='space-y-2'>
                    <div className='h-5 w-40 rounded bg-gray-200' />
                    <div className='h-4 w-56 rounded bg-gray-100' />
                  </div>
                </div>
                <div className='h-4 w-24 rounded bg-gray-100' />
              </div>

              <div className='flex flex-wrap gap-2'>
                <div className='h-7 w-20 rounded-full bg-gray-100' />
                <div className='h-7 w-24 rounded-full bg-gray-100' />
                <div className='h-7 w-16 rounded-full bg-gray-100' />
              </div>

              <div className='rounded-2xl bg-gray-100 p-4'>
                <div className='space-y-2'>
                  <div className='h-4 w-48 rounded bg-gray-200' />
                  <div className='h-4 w-full rounded bg-gray-200' />
                </div>
              </div>
            </div>
          </Card>

          <Card className='bg-white'>
            <div className='space-y-4'>
              <div className='flex items-center justify-between gap-4'>
                <div className='h-5 w-24 rounded bg-gray-200' />
                <div className='h-4 w-24 rounded bg-gray-100' />
              </div>

              <div className='grid grid-cols-1 gap-4 xl:grid-cols-2'>
                <div className='h-56 rounded-2xl bg-gray-100' />
                <div className='h-56 rounded-2xl bg-gray-100' />
              </div>
            </div>
          </Card>
        </div>

        <div className='space-y-4 xl:col-span-4'>
          <Card className='bg-white'>
            <div className='space-y-4'>
              <div className='h-5 w-24 rounded bg-gray-200' />
              <div className='h-24 rounded-2xl bg-gray-100' />
              <div className='h-24 rounded-2xl bg-gray-100' />
            </div>
          </Card>

          <Card className='bg-white'>
            <div className='space-y-4'>
              <div className='h-5 w-28 rounded bg-gray-200' />
              <div className='h-24 rounded-2xl bg-gray-100' />
              <div className='h-24 rounded-2xl bg-gray-100' />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeamSkeleton;
