import React from 'react';
import { BriefcaseBusiness, ChevronDown } from 'lucide-react';
import Card from '../ui/Card';

const inputClassName =
  'w-full rounded-lg border border-neutral bg-white px-4 py-3 text-sm text-text-primary outline-none transition placeholder:text-text-secondary focus:border-brand-primary';

const labelClassName = 'mb-2 block text-sm font-medium text-text-primary';

const helperClassName = 'mt-2 text-xs text-text-secondary';

const InternshipDetailsCard = () => {
  return (
    <Card className=' border border-neutral bg-white p-5 shadow-sm sm:p-6'>
      <div className='mb-5 flex items-center gap-3'>
        <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-brand-muted text-brand-primary'>
          <BriefcaseBusiness size={18} />
        </div>
        <h2 className='text-base font-semibold text-text-primary'>
          Internship Details
        </h2>
      </div>

      <div className='grid gap-4 sm:grid-cols-2'>
        <div>
          <label className={labelClassName} htmlFor='track'>
            Track
          </label>
          <div className='relative'>
            <select id='track' defaultValue='UI/UX Designer' className={`${inputClassName} appearance-none pr-10`}>
              <option>UI/UX Designer</option>
              <option>Frontend Developer</option>
              <option>Data Analyst</option>
            </select>
            <ChevronDown
              size={16}
              className='pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary'
            />
          </div>
        </div>

        <div>
          <label className={labelClassName} htmlFor='cohort'>
            Cohort
          </label>
          <input
            id='cohort'
            type='text'
            placeholder='Cohort 4'
            className={inputClassName}
          />
        </div>

        <div>
          <label className={labelClassName} htmlFor='team'>
            Team
          </label>
          <input
            id='team'
            type='text'
            placeholder='Team Delta'
            className={inputClassName}
          />
          <p className={helperClassName}>Assigned by programme admin.</p>
        </div>

        <div>
          <label className={labelClassName} htmlFor='mentor'>
            Mentor
          </label>
          <input
            id='mentor'
            type='text'
            placeholder='Dr. Sara Adunola'
            className={inputClassName}
          />
          <p className={helperClassName}>Assigned by programme admin.</p>
        </div>
      </div>

      <div className='mt-4 space-y-4'>
        <div>
          <label className={labelClassName} htmlFor='linkedin-profile'>
            LinkedIn Profile
          </label>
          <input
            id='linkedin-profile'
            type='url'
            placeholder='linkedin.com/in/username'
            className={inputClassName}
          />
        </div>

        <div>
          <label className={labelClassName} htmlFor='portfolio-url'>
            Portfolio URL
          </label>
          <input
            id='portfolio-url'
            type='url'
            placeholder='Enter your email address'
            className={inputClassName}
          />
        </div>
      </div>
    </Card>
  );
};

export default InternshipDetailsCard;
