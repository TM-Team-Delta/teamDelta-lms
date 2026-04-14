import React from 'react';
import { BookOpen, Users, TrophyIcon } from 'lucide-react';

const features = [
  {
    title: 'Structured Learning',
    description:
      'Track your progress through curated, discipline-specific coursework built for UI/UX, Engineering, Social Media marketing and more.',
    icon: BookOpen,
  },
  {
    title: 'Cross-Functional Collaboration',
    description:
      'Connect virtually with peers and mentors across all departments. Break silos and build the network that increases forward.',
    icon: Users,
  },
  {
    title: 'Guided Growth',
    description:
      'Each stage is soft-monitored by mentor support and professional guide. Learning becomes a sprint and your goals sustainable.',
    icon: TrophyIcon,
  },
];

const FeaturesSection = () => {
  return (
    <section className='bg-white py-18 sm:py-24'>
      <div className='container'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-4xl font-medium tracking-[-0.04em] sm:text-5xl font-heading text-text-primary'>
            <span className='italic font-bold'>Everything</span> you need to
            succeed.
          </h2>
          <p className='mt-4 text-sm leading-7 text-text-secondary sm:text-base'>
            Built from the ground up for TrueMinds interns, every feature is
            purpose-designed around how your cohort actually learns and grows.
          </p>
        </div>

        <div className='mt-12 grid gap-6 lg:grid-cols-3'>
          {features.map(({ title, description, icon: Icon }, index) => (
            <article
              key={title}
              className='group relative overflow-hidden rounded-xl border border-neutral bg-brand-muted p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-primary hover:border-t-4 hover:border-r-0 hover:border-l-0 hover:border-b-0 hover:shadow-[0_18px_35px_rgba(0,0,0,0.14)]'
            >
              <div className='relative inline-flex'>
                <span className='inline-flex h-12 w-12 items-center justify-center rounded-[18px] bg-white text-brand-secondary shadow-sm shrink-0'>
                  <Icon size={20} />
                </span>
                <span className='absolute -top-3 -right-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-primary text-xs font-semibold text-white shadow-sm'>
                  {index + 1}
                </span>
              </div>

              <h3 className='mt-5 text-lg font-semibold font-heading'>
                {title}
              </h3>
              <p className='mt-3 text-sm leading-6 text-text-secondary'>
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
