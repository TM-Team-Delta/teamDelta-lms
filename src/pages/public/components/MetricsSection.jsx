import React from 'react';
import { Check } from 'lucide-react';

const metrics = [
  '7,000+ active interns',
  '5 discipline tracks',
  'Real-time collaboration',
  'Mentor-guided learning',
];

const MetricsSection = () => {
  return (
    <section className='bg-brand-primary md:h-32 text-white flex'>
      <div className='container grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 justify-center'>
        {metrics.map((item, index) => (
          <div key={index} className='flex items-center gap-3 text-sm'>
            <span className='inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-brand-primary'>
              <Check size={14} strokeWidth={3} />
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MetricsSection;
