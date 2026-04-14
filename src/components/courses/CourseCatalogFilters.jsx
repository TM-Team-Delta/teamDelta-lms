import { ChevronDown } from 'lucide-react';

const CourseCatalogFilters = ({
  levelOptions,
  selectedLevel,
  onLevelChange,
  categoryFilters,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className='space-y-4'>
      <div className='flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h1 className='text-2xl font-semibold text-text-primary sm:text-3xl'>
            Course Catalog
          </h1>
          <p className='mt-1 text-sm text-text-secondary'>
            Advance in your career with recognized credentials across levels.
          </p>
        </div>

        <div className='flex w-full items-center gap-2 sm:w-auto'>
          <span className='rounded-md border border-border bg-white px-3 py-2 text-sm text-text-secondary'>
            Skill Level
          </span>

          <div className='relative w-full sm:w-[190px]'>
            <select
              value={selectedLevel}
              onChange={(e) => onLevelChange(e.target.value)}
              className='w-full appearance-none rounded-md border border-border bg-white py-2 pl-3 pr-10 text-sm text-text-primary outline-none transition focus:border-brand-secondary'
            >
              {levelOptions.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>

            <ChevronDown
              size={16}
              className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary'
            />
          </div>
        </div>
      </div>

      <div className='flex flex-wrap gap-2'>
        {categoryFilters.map((item) => {
          const isActive = activeCategory === item.id;

          return (
            <button
              key={item.id}
              type='button'
              onClick={() => onCategoryChange(item.id)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition sm:text-sm ${
                isActive
                  ? 'border-brand-primary bg-brand-primary text-white'
                  : 'border-border bg-white text-text-primary hover:border-brand-secondary hover:text-brand-secondary'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CourseCatalogFilters;
