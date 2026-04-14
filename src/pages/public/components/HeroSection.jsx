import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroImage from '../../../assets/hero-img.png';

const HeroSection = () => {
  return (
    <section className='bg-brand-muted'>
      <div className='grid items-stretch lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)]'>
        <div className='flex items-center'>
          <div className='container w-full py-14 lg:py-20'>
            <div className='max-w-2xl'>
              <h1 className='text-4xl leading-tight font-semibold sm:text-5xl font-heading'>
                Empowering the Next Generation of {''}
                <span className='italic text-brand-secondary'>
                  TrueMinds Talent
                </span>
              </h1>
              <p className='mt-6 max-w-xl text-sm leading-7 text-text-secondary sm:text-base'>
                A centralized learning and collaboration hub designed
                exclusively for our cross-functional internship tracks.
              </p>
              <Link
                to='/login'
                className='mt-8 inline-flex items-center gap-2 rounded-md bg-button-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90'
              >
                Access Workspace
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className='flex items-stretch justify-end'>
          <img
            src={heroImage}
            alt='TrueMinds workspace preview'
            className='h-full w-full object-cover object-left'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
