import CourseCatalogCard from './CourseCatalogCard';

const CourseCatalogGrid = ({ courses }) => {
  if (courses.length === 0) {
    return (
      <div className='rounded-2xl border border-dashed border-border bg-white p-8 text-center'>
        <h2 className='text-lg font-semibold text-text-primary'>
          No courses found
        </h2>
        <p className='mt-2 text-sm text-text-secondary'>
          Try changing the skill level or category filter.
        </p>
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3'>
      {courses.map((course) => (
        <CourseCatalogCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseCatalogGrid;
