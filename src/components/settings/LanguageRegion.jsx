import { ChevronDown, Globe } from 'lucide-react';
import SettingsSidebar from './SettingsSidebar';
import Card from '../ui/Card';

const inputClassName =
  'w-full appearance-none rounded-lg border border-neutral bg-white px-4 py-3 pr-10 text-sm text-text-primary outline-none transition placeholder:text-text-secondary focus:border-brand-primary';

const labelClassName = 'mb-2 block text-sm font-medium text-text-primary';

const TogglePill = ({ label, active = false }) => {
  return (
    <button
      type='button'
      className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
        active
          ? 'bg-brand-primary text-white'
          : 'bg-bg-muted text-text-secondary hover:bg-neutral'
      }`}
    >
      {label}
    </button>
  );
};

const SelectField = ({ id, label, value, options }) => {
  return (
    <div>
      <label className={labelClassName} htmlFor={id}>
        {label}
      </label>

      <div className='relative'>
        <select id={id} defaultValue={value} className={inputClassName}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={16}
          className='pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary'
        />
      </div>
    </div>
  );
};

const LanguageRegionPage = () => {
  return (
    <section className='bg-neutral p-4 sm:p-5 md:p-6 md:pt-0'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-6'>
          <h1 className='text-2xl font-semibold text-text-primary'>
            Language & Region
          </h1>
          <p className='mt-1 text-sm text-text-secondary'>
            Set your preferred language, timezone, and date format across
            Trueminds.
          </p>
        </div>

        <div className='flex flex-col gap-6 lg:flex-row lg:items-start'>
          <SettingsSidebar activeItem='language' />

          <div className='min-w-0 flex-1 space-y-6'>
            <Card className='border border-neutral bg-white p-5 shadow-sm sm:p-6'>
              <div className='mb-5 flex items-center gap-3'>
                <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-brand-muted text-brand-primary'>
                  <Globe size={18} />
                </div>
                <h2 className='text-base font-semibold text-text-primary'>
                  Region preferences
                </h2>
              </div>

              <div className='space-y-5'>
                <SelectField
                  id='display-language'
                  label='Display Language'
                  value='English (UK)'
                  options={['English (UK)', 'English (US)', 'French', 'Arabic']}
                />

                <div className='border-t border-neutral pt-5'>
                  <SelectField
                    id='timezone'
                    label='Timezone'
                    value='Africa/Lagos (WAT, UTC+1)'
                    options={[
                      'Africa/Lagos (WAT, UTC+1)',
                      'Europe/London (GMT, UTC+0)',
                      'America/New_York (EST, UTC-5)',
                    ]}
                  />
                </div>

                <div className='border-t border-neutral pt-5'>
                  <SelectField
                    id='date-format'
                    label='Date Format'
                    value='DD/MM/YYYY - e.g. 25/04/2003'
                    options={[
                      'DD/MM/YYYY - e.g. 25/04/2003',
                      'MM/DD/YYYY - e.g. 04/25/2003',
                      'YYYY-MM-DD - e.g. 2003-04-25',
                    ]}
                  />
                </div>

                <div className='border-t border-neutral pt-5'>
                  <label className={labelClassName}>Time Format</label>
                  <div className='flex flex-wrap gap-3'>
                    <TogglePill label='12-hour (4:00 PM)' />
                    <TogglePill label='24-hour (16:00)' active />
                  </div>
                </div>
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

export default LanguageRegionPage;
