import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquareMore } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className='bg-brand-muted py-18 sm:py-24'>
      <div className='container'>
        <div className='rounded-xl bg-brand-primary px-8 py-12 text-white sm:px-12 sm:py-16'>
          <div className='max-w-3xl'>
            <h2 className='text-3xl leading-14 font-semibold tracking-[-0.04em] sm:text-5xl font-heading'>
              Ready to start your TrueMinds journey?
            </h2>
            <p className='mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base'>
              Your workspace is set up and waiting. Join your cohort, pick up
              where your track begins, and start building something beyond.
            </p>
            <Link
              to='/login'
              className='mt-8 inline-flex items-center gap-2 rounded-md bg-button-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90'
            >
              Access Workspace
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className='pointer-events-none mt-8 hidden justify-end lg:flex'>
            <MessageSquareMore
              className='text-white/12'
              size={120}
              strokeWidth={1.25}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
