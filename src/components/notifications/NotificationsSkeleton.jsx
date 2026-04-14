import Card from '../ui/Card';

const NotificationsSkeleton = () => {
  return (
    <section className='animate-pulse flex flex-col gap-6 p-4 pt-0 sm:p-5 sm:pt-0 md:min-h-[calc(100vh-92px)] md:p-6 md:pt-0'>
      <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div className='space-y-2'>
          <div className='h-8 w-44 rounded bg-gray-200' />
          <div className='h-4 w-72 rounded bg-gray-100' />
        </div>

        <div className='flex items-center gap-4'>
          <div className='h-5 w-32 rounded bg-gray-100' />
          <div className='h-9 w-9 rounded-full bg-gray-200' />
        </div>
      </div>

      <Card className='bg-white'>
        <div className='space-y-6'>
          <div className='flex flex-wrap items-center gap-2 md:gap-4'>
            <div className='h-10 w-20 rounded-xl bg-gray-200' />
            <div className='h-10 w-24 rounded-xl bg-gray-100' />
            <div className='h-10 w-24 rounded-xl bg-gray-100' />
            <div className='h-10 w-20 rounded-xl bg-gray-100' />
          </div>

          <div className='flex flex-wrap items-center gap-4'>
            <div className='h-4 w-20 rounded bg-gray-100' />
            <div className='h-4 w-16 rounded bg-gray-100' />
          </div>

          <div className='space-y-4'>
            <div className='rounded-2xl border border-border bg-white p-4 sm:p-5'>
              <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
                <div className='flex items-start gap-4'>
                  <div className='h-10 w-10 rounded-full bg-gray-200' />
                  <div className='space-y-2'>
                    <div className='h-5 w-60 rounded bg-gray-200' />
                    <div className='h-4 w-80 rounded bg-gray-100' />
                    <div className='h-4 w-24 rounded bg-gray-100' />
                  </div>
                </div>
                <div className='h-10 w-28 rounded-full bg-gray-200' />
              </div>
            </div>

            <div className='rounded-2xl border border-border bg-white p-4 sm:p-5'>
              <div className='flex items-start gap-4'>
                <div className='h-10 w-10 rounded-full bg-gray-200' />
                <div className='space-y-2'>
                  <div className='h-5 w-52 rounded bg-gray-200' />
                  <div className='h-4 w-72 rounded bg-gray-100' />
                  <div className='h-4 w-20 rounded bg-gray-100' />
                </div>
              </div>
            </div>

            <div className='rounded-2xl border border-border bg-white p-4 sm:p-5'>
              <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
                <div className='flex items-start gap-4'>
                  <div className='h-10 w-10 rounded-full bg-gray-200' />
                  <div className='space-y-2'>
                    <div className='h-5 w-56 rounded bg-gray-200' />
                    <div className='h-4 w-64 rounded bg-gray-100' />
                    <div className='h-4 w-28 rounded bg-gray-100' />
                  </div>
                </div>
                <div className='h-10 w-24 rounded-full bg-gray-100' />
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className='mt-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        <Card className='rounded-2xl bg-white p-5'>
          <div className='space-y-6'>
            <div className='flex items-start justify-between'>
              <div className='h-10 w-24 rounded bg-gray-100' />
              <div className='h-5 w-5 rounded bg-gray-200' />
            </div>
            <div className='h-8 w-10 rounded bg-gray-200' />
          </div>
        </Card>

        <Card className='rounded-2xl bg-white p-5'>
          <div className='space-y-6'>
            <div className='flex items-start justify-between'>
              <div className='h-10 w-16 rounded bg-gray-100' />
              <div className='h-5 w-5 rounded bg-gray-200' />
            </div>
            <div className='h-8 w-10 rounded bg-gray-200' />
          </div>
        </Card>

        <Card className='rounded-2xl bg-white p-5'>
          <div className='space-y-6'>
            <div className='flex items-start justify-between'>
              <div className='h-10 w-20 rounded bg-gray-100' />
              <div className='h-5 w-5 rounded bg-gray-200' />
            </div>
            <div className='h-8 w-10 rounded bg-gray-200' />
          </div>
        </Card>

        <Card className='rounded-2xl bg-white p-5'>
          <div className='space-y-6'>
            <div className='flex items-start justify-between'>
              <div className='h-10 w-24 rounded bg-gray-100' />
              <div className='h-5 w-5 rounded bg-gray-200' />
            </div>
            <div className='h-8 w-10 rounded bg-gray-200' />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default NotificationsSkeleton;
