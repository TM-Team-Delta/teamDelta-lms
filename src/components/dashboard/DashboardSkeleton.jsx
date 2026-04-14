import React from 'react';
import Card from '../ui/Card';

const DashboardSkeleton = () => {
  return (
    <div className='space-y-6 p-4 sm:p-5 md:p-6 md:pt-0 animate-pulse'>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-12'>
        <div className='col-span-1 space-y-6 lg:col-span-8'>
          <Card className='bg-white'>
            <div className='space-y-4'>
              <div className='h-5 w-48 rounded bg-gray-200' />
              <div className='h-4 w-72 rounded bg-gray-100' />
              <div className='h-10 w-28 rounded-xl bg-gray-200' />
            </div>
          </Card>

          <Card className='bg-white'>
            <div className='space-y-4'>
              <div className='h-5 w-32 rounded bg-gray-200' />
              <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3'>
                <div className='h-36 rounded-xl bg-gray-100' />
                <div className='h-36 rounded-xl bg-gray-100' />
                <div className='h-36 rounded-xl bg-gray-100' />
              </div>
            </div>
          </Card>

          <Card className='h-64 bg-white'>
            <div className='h-full rounded-xl bg-gray-100' />
          </Card>

          <Card className='h-64 bg-white'>
            <div className='h-full rounded-xl bg-gray-100' />
          </Card>

          <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
            <Card className='h-56 bg-white'>
              <div className='h-full rounded-xl bg-gray-100' />
            </Card>

            <Card className='h-56 bg-white'>
              <div className='h-full rounded-xl bg-gray-100' />
            </Card>
          </div>
        </div>

        <div className='col-span-1 space-y-10 lg:col-span-4'>
          <Card className='h-40 bg-white'>
            <div className='h-full rounded-xl bg-gray-100' />
          </Card>

          <Card className='h-48 bg-white'>
            <div className='h-full rounded-xl bg-gray-100' />
          </Card>

          <Card className='h-48 bg-white'>
            <div className='h-full rounded-xl bg-gray-100' />
          </Card>

          <Card className='h-40 bg-white'>
            <div className='h-full rounded-xl bg-gray-100' />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;
