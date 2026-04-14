import { Eye, Lock } from 'lucide-react';
import SettingsSidebar from './SettingsSidebar';
import Card from '../ui/Card';

const inputClassName =
  'w-full rounded-lg border border-neutral bg-white px-4 py-3 text-sm text-text-primary outline-none transition placeholder:text-text-secondary focus:border-brand-primary';

const labelClassName = 'mb-2 block text-sm font-medium text-text-primary';

const visibilityOptions = [
  {
    id: 1,
    title: 'Show profile to teammates',
    description: 'Team Alpha members can view your profile and progress',
    enabled: false,
  },
  {
    id: 2,
    title: 'Show progress to mentor',
    description: 'Your mentor can see your full course progress and activity',
    enabled: true,
  },
  {
    id: 3,
    title: 'Appear in cohort leaderboard',
    description: 'Include your progress ranking in the Cohort 4 leaderboard',
    enabled: true,
  },
];

const Toggle = ({ enabled }) => {
  return (
    <div
      className={`flex h-6 w-11 items-center rounded-full border p-0.5 transition ${
        enabled
          ? 'border-brand-primary bg-brand-primary'
          : 'border-neutral bg-neutral'
      }`}
    >
      <span
        className={`h-[18px] w-[18px] rounded-full bg-white shadow-sm transition ${
          enabled ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </div>
  );
};

const PrivacySecurityPage = () => {
  return (
    <section className='bg-neutral p-4 sm:p-5 md:p-6 md:pt-0'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-6'>
          <h1 className='text-2xl font-semibold text-text-primary'>
            Privacy & Security
          </h1>
          <p className='mt-1 text-sm text-text-secondary'>
            Control your account security and what information is visible to
            others on the platform.
          </p>
        </div>

        <div className='flex flex-col gap-6 lg:flex-row lg:items-start'>
          <SettingsSidebar activeItem='privacy' />

          <div className='min-w-0 flex-1 space-y-6'>
            <Card className='border border-neutral bg-white p-5 shadow-sm sm:p-6'>
              <div className='mb-5 flex items-center gap-3'>
                <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-brand-muted text-brand-primary'>
                  <Lock size={18} />
                </div>
                <h2 className='text-base font-semibold text-text-primary'>
                  Password
                </h2>
              </div>

              <div className='space-y-5'>
                <div className='border-t border-neutral pt-5'>
                  <label className={labelClassName} htmlFor='current-password'>
                    Current Password
                  </label>
                  <input
                    id='current-password'
                    type='password'
                    placeholder='Enter your password'
                    className={inputClassName}
                  />
                </div>

                <div className='grid gap-4 border-t border-neutral pt-5 sm:grid-cols-2'>
                  <div>
                    <label className={labelClassName} htmlFor='new-password'>
                      New Password
                    </label>
                    <input
                      id='new-password'
                      type='password'
                      placeholder='Enter new password'
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label
                      className={labelClassName}
                      htmlFor='confirm-password'
                    >
                      Confirm Password
                    </label>
                    <input
                      id='confirm-password'
                      type='password'
                      placeholder='Confirm new password'
                      className={inputClassName}
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Card className='border border-neutral bg-white p-5 shadow-sm sm:p-6'>
              <div className='mb-5 flex items-center gap-3'>
                <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-brand-muted text-brand-primary'>
                  <Eye size={18} />
                </div>
                <h2 className='text-base font-semibold text-text-primary'>
                  Profile Visibility
                </h2>
              </div>

              <div className='border-t border-neutral'>
                {visibilityOptions.map((item, index) => (
                  <div
                    key={item.id}
                    className={`flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between ${
                      index !== visibilityOptions.length - 1
                        ? 'border-b border-neutral'
                        : ''
                    }`}
                  >
                    <div>
                      <h3 className='text-sm font-medium text-text-primary'>
                        {item.title}
                      </h3>
                      <p className='mt-1 text-sm text-text-secondary'>
                        {item.description}
                      </p>
                    </div>

                    <Toggle enabled={item.enabled} />
                  </div>
                ))}
              </div>
            </Card>

            <div className='flex flex-col-reverse gap-3 sm:flex-row sm:justify-end'>
              <button
                type='button'
                className='rounded-xl bg-neutral px-5 py-3 text-sm font-medium text-text-secondary transition hover:bg-neutral'
              >
                Reset to default
              </button>

              <button
                type='button'
                className='rounded-xl bg-button-primary px-5 py-3 text-sm font-medium text-white transition hover:opacity-95'
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySecurityPage;
