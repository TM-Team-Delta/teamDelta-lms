import { Camera, Trash2 } from 'lucide-react';
import Card from '../ui/Card';
import sidepic from '../../assets/sidepic.jpg';

const inputClassName =
  'w-full rounded-lg border border-neutral bg-white px-4 py-3 text-sm text-text-primary outline-none transition placeholder:text-text-secondary focus:border-brand-primary';

const labelClassName = 'mb-2 block text-sm font-medium text-text-primary';

const ProfileSettingsCard = () => {
  return (
    <Card className='border border-neutral bg-white p-5 shadow-sm sm:p-6'>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
            <img
              src={sidepic}
              alt='Daniel Adeyemi'
              className='h-16 w-16 rounded-full object-cover'
            />

            <div>
              <h2 className='text-base font-semibold text-text-primary'>
                Daniel Adeyemi
              </h2>
              <p className='text-sm text-text-secondary'>
                UX Design Intern - Cohort 4 - TalentFlow
              </p>
            </div>
          </div>

          <div className='flex flex-wrap gap-3'>
            <button
              type='button'
              className='inline-flex items-center justify-center gap-2 rounded-lg bg-button-primary px-4 py-3 text-sm font-medium text-white transition hover:opacity-95'
            >
              <Camera size={16} />
              Change photo
            </button>

            <button
              type='button'
              className='inline-flex items-center justify-center gap-2 rounded-lg bg-bg-muted px-4 py-3 text-sm font-medium text-text-secondary transition hover:bg-neutral'
            >
              <Trash2 size={16} />
              Delete
            </button>
          </div>
        </div>

        <div className='grid gap-4 sm:grid-cols-2'>
          <div>
            <label className={labelClassName} htmlFor='first-name'>
              First Name
            </label>
            <input
              id='first-name'
              type='text'
              placeholder='John'
              className={inputClassName}
            />
          </div>

          <div>
            <label className={labelClassName} htmlFor='last-name'>
              Last Name
            </label>
            <input
              id='last-name'
              type='text'
              placeholder='Doe'
              className={inputClassName}
            />
          </div>
        </div>

        <div>
          <label className={labelClassName} htmlFor='email'>
            Email
          </label>
          <input
            id='email'
            type='email'
            placeholder='john@example.com'
            className={inputClassName}
          />
          <p className='mt-2 text-xs text-text-secondary'>
            Your email is used for login and notifications. Contact admin to
            change.
          </p>
        </div>

        <div>
          <label className={labelClassName} htmlFor='phone-number'>
            Phone Number
          </label>
          <input
            id='phone-number'
            type='tel'
            placeholder='+234 812 345 6789'
            className={inputClassName}
          />
        </div>

        <div>
          <label className={labelClassName} htmlFor='bio'>
            Bio
          </label>
          <textarea
            id='bio'
            rows='4'
            placeholder='Passionate UX designer with a focus on accessibility and human-centred design. Currently interning at TalentFlow, Cohort 4'
            className={`${inputClassName} resize-none`}
          />
          <p className='mt-2 text-xs text-text-secondary'>
            Max 200 characters. Visible to your team and mentor.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ProfileSettingsCard;
