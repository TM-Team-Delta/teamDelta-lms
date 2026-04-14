import Card from '../ui/Card';

const CertificateSkeleton = () => {
  return (
    <div className='animate-pulse grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
      {Array.from({ length: 6 }).map((_, index) => (
        <Card
          key={index}
          className='flex min-h-[170px] flex-col justify-between rounded-2xl bg-white shadow-md'
        >
          <div className='space-y-3'>
            <div className='h-6 w-3/4 rounded bg-gray-200' />
            <div className='h-4 w-1/2 rounded bg-gray-100' />
            <div className='h-4 w-2/3 rounded bg-gray-100' />
          </div>

          <div className='mt-6 flex items-center gap-2 border-t border-border pt-3'>
            <div className='h-10 w-32 rounded bg-gray-200' />
            <div className='h-10 w-28 rounded bg-gray-100' />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CertificateSkeleton;
