import SettingsSidebar from '../../components/settings/SettingsSidebar';
import ProfileSettingsCard from '../../components/settings/ProfileSettingsCard';
import InternshipDetailsCard from '../../components/settings/InternshipDetailsCard';

const SettingsPage = () => {
  return (
    <section className='bg-neutral p-4 sm:p-5 md:p-6 md:pt-0'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-6'>
          <h1 className='text-2xl font-semibold text-text-primary'>
            Profile Settings
          </h1>
          <p className='mt-1 text-sm text-text-secondary'>
            Manage your personal information, internship details, and public
            profile on Trueminds.
          </p>
        </div>

        <div className='flex flex-col gap-6 lg:flex-row lg:items-start'>
          <SettingsSidebar activeItem='profile' />

          <div className='min-w-0 flex-1 space-y-6'>
            <ProfileSettingsCard />
            <InternshipDetailsCard />

            <div className='flex flex-col-reverse gap-3 sm:flex-row sm:justify-end'>
              <button
                type='button'
                className='rounded-xl bg-neutral px-5 py-3 text-sm font-medium text-text-secondary transition hover:bg-neutral'
              >
                Discard
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

export default SettingsPage;
