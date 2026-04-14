import { LayoutGrid, SunMedium } from 'lucide-react';
import SettingsSidebar from './SettingsSidebar';
import Card from '../ui/Card';

const themeOptions = [
  {
    id: 'light',
    label: 'Light',
    active: true,
    wrapperClassName: 'border-brand-secondary bg-[#f4f4f2]',
    headerClassName: 'bg-[#d9d9d9]',
    accentClassName: 'bg-[#335447]',
    bodyClassName: 'bg-white',
  },
  {
    id: 'dark',
    label: 'Dark',
    active: false,
    wrapperClassName: 'border-neutral bg-[#f8f8f8]',
    headerClassName: 'bg-[#173126]',
    accentClassName: 'bg-white',
    bodyClassName: 'bg-[#3d574c]',
  },
  {
    id: 'system',
    label: 'System',
    active: false,
    wrapperClassName: 'border-neutral bg-[#f8f8f8]',
    headerClassName: 'bg-[#5a5a5a]',
    accentClassName: 'bg-[#173126]',
    bodyClassName: 'bg-[#1f3129]',
  },
];

const appearanceOptions = [
  {
    id: 'compact',
    title: 'Compact mode',
    description:
      'Reduce card padding and spacing for a denser, more information-dense layout',
    enabled: false,
  },
  {
    id: 'labels',
    title: 'Show sidebar labels',
    description: 'Display text labels alongside icons in the navigation sidebar',
    enabled: true,
  },
  {
    id: 'animations',
    title: 'Animated transitions',
    description:
      'Enable smooth page transitions and card animations throughout the platform',
    enabled: true,
  },
];

const Toggle = ({ enabled }) => {
  return (
    <div
      className={`flex h-6 w-11 items-center rounded-full border p-0.5 transition ${
        enabled
          ? 'border-brand-primary bg-brand-primary'
          : 'border-neutral bg-white'
      }`}
    >
      <span
        className={`h-[18px] w-[18px] rounded-full shadow-sm transition ${
          enabled ? 'translate-x-5 bg-white' : 'translate-x-0 bg-[#8f8f8f]'
        }`}
      />
    </div>
  );
};

const ThemePreview = ({ option }) => {
  return (
    <button
      type='button'
      className={`rounded-xl border p-3 text-center transition ${option.wrapperClassName}`}
    >
      <div className='space-y-2'>
        <div
          className={`rounded-md border border-black/10 p-1.5 ${option.headerClassName}`}
        >
          <div className='mb-1 flex items-center gap-1.5'>
            <span className={`h-1.5 w-10 rounded-full ${option.accentClassName}`} />
            <span className='h-1.5 w-8 rounded-full bg-white/60' />
          </div>
          <div className={`h-5 rounded-[3px] ${option.bodyClassName}`} />
        </div>

        <p className='text-sm text-text-primary'>{option.label}</p>

        <div className='flex justify-center'>
          <span
            className={`h-4 w-4 rounded-full border ${
              option.active
                ? 'border-brand-primary bg-brand-primary'
                : 'border-neutral bg-white'
            }`}
          >
            {option.active && (
              <span className='flex h-full w-full items-center justify-center text-[10px] text-white'>
                v
              </span>
            )}
          </span>
        </div>
      </div>
    </button>
  );
};

const AppearancePage = () => {
  return (
    <section className='bg-neutral p-4 sm:p-5 md:p-6 md:pt-0'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-6'>
          <h1 className='text-2xl font-semibold text-text-primary'>
            Appearance
          </h1>
          <p className='mt-1 text-sm text-text-secondary'>
            Personalise how TalentFlow looks and feels for you. Changes apply
            instantly.
          </p>
        </div>

        <div className='flex flex-col gap-6 lg:flex-row lg:items-start'>
          <SettingsSidebar activeItem='appearance' />

          <div className='min-w-0 flex-1 space-y-6'>
            <Card className='border border-neutral bg-white p-5 shadow-sm sm:p-6'>
              <div className='mb-5 flex items-center gap-3'>
                <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-brand-muted text-brand-primary'>
                  <SunMedium size={18} />
                </div>
                <h2 className='text-base font-semibold text-text-primary'>
                  Theme
                </h2>
              </div>

              <div className='grid gap-4 border-t border-neutral pt-5 md:grid-cols-3'>
                {themeOptions.map((option) => (
                  <ThemePreview key={option.id} option={option} />
                ))}
              </div>
            </Card>

            <Card className='border border-neutral bg-white p-5 shadow-sm sm:p-6'>
              <div className='mb-5 flex items-center gap-3'>
                <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-brand-muted text-brand-primary'>
                  <LayoutGrid size={18} />
                </div>
                <h2 className='text-base font-semibold text-text-primary'>
                  Layout Density
                </h2>
              </div>

              <div className='border-t border-neutral'>
                {appearanceOptions.map((option, index) => (
                  <div
                    key={option.id}
                    className={`flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between ${
                      index !== appearanceOptions.length - 1
                        ? 'border-b border-neutral'
                        : ''
                    }`}
                  >
                    <div>
                      <h3 className='text-sm font-medium text-text-primary'>
                        {option.title}
                      </h3>
                      <p className='mt-1 text-sm text-text-secondary'>
                        {option.description}
                      </p>
                    </div>

                    <Toggle enabled={option.enabled} />
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

export default AppearancePage;
