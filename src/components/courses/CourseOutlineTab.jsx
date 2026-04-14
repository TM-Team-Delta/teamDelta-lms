import { useState } from 'react';
import {
  CheckCircle2,
  ChevronUp,
  Circle,
  Lock,
  PlayCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import useCourseProgress from '../../hooks/useCourseProgress';

const getStatusIcon = (status) => {
  if (status === 'completed') {
    return <CheckCircle2 size={16} className='text-brand-secondary' />;
  }

  if (status === 'in-progress') {
    return <PlayCircle size={16} className='text-brand-accent' />;
  }

  if (status === 'available') {
    return <Circle size={16} className='text-brand-primary' />;
  }

  return <Lock size={16} className='text-text-secondary' />;
};

const getTextColor = (status) => {
  if (status === 'completed') return 'text-brand-secondary';
  if (status === 'in-progress') return 'text-brand-accent';
  if (status === 'available') return 'text-text-primary';
  return 'text-text-secondary';
};

const CourseOutlineTab = ({ course }) => {
  const [openModules, setOpenModules] = useState(() => {
    const initialState = {};

    course.courseOutline.forEach((module, index) => {
      initialState[module.id] = index === 0;
    });

    return initialState;
  });

  const { statusByUnitId, completedCount, totalUnits, progressPercent } =
    useCourseProgress(course);

  const toggleModule = (moduleId) => {
    setOpenModules((previous) => ({
      ...previous,
      [moduleId]: !previous[moduleId],
    }));
  };

  return (
    <div className='space-y-5'>
      <div className='rounded-2xl border border-[#dde7df] bg-white p-5 shadow-sm'>
        <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <p className='text-sm font-semibold text-text-primary'>
              Course progression
            </p>
            <p className='mt-1 text-sm text-text-secondary'>
              {completedCount} of {totalUnits} units completed
            </p>
          </div>

          <div className='rounded-full bg-bg-muted px-4 py-2 text-sm font-medium text-brand-primary'>
            {progressPercent}% complete
          </div>
        </div>
      </div>

      {course.courseOutline.map((module, moduleIndex) => (
        <div key={module.id} className='space-y-3'>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
            <div className='inline-flex w-fit rounded-md bg-[#61b57b] px-4 py-2 text-sm font-semibold text-white'>
              {module.moduleLabel || `Module ${moduleIndex + 1}`}
            </div>

            <button
              type='button'
              onClick={() => toggleModule(module.id)}
              className='flex flex-1 items-center justify-between gap-3 text-left'
            >
              <div>
                <h3 className='text-lg font-semibold text-text-primary'>
                  {module.title}
                </h3>
                <p className='mt-1 text-sm text-text-secondary'>
                  {module.units.length} units
                </p>
              </div>

              <ChevronUp
                size={18}
                className={`shrink-0 text-brand-primary transition ${
                  openModules[module.id] ? '' : 'rotate-180'
                }`}
              />
            </button>
          </div>

          {openModules[module.id] ? (
            <div className='overflow-hidden rounded-2xl border border-[#dde7df] bg-white shadow-sm'>
              <div className='grid grid-cols-[1.7fr_0.8fr_0.5fr] gap-4 border-b border-[#edf2ed] px-4 py-3 text-sm font-semibold text-text-primary sm:px-5'>
                <p>Unit</p>
                <p>Duration</p>
                <p>Status</p>
              </div>

              <div className='space-y-3 px-4 py-4 sm:px-5'>
                {module.units.map((unit, unitIndex) => {
                  const unitStatus = statusByUnitId[unit.id] || 'locked';
                  const unitLink = `/dashboard/course-detail/${course.id}/modules/${module.id}/items/${unitIndex}`;

                  if (unitStatus === 'locked') {
                    return (
                      <div
                        key={unit.id}
                        className='grid grid-cols-[1.7fr_0.8fr_0.5fr] gap-4 text-sm opacity-80'
                      >
                        <p className={getTextColor(unitStatus)}>{unit.title}</p>
                        <p className={getTextColor(unitStatus)}>
                          {unit.lessonPage.time}
                        </p>
                        <div>{getStatusIcon(unitStatus)}</div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={unit.id}
                      to={unitLink}
                      className='grid grid-cols-[1.7fr_0.8fr_0.5fr] gap-4 text-sm transition hover:opacity-80'
                    >
                      <p className={getTextColor(unitStatus)}>{unit.title}</p>
                      <p className={getTextColor(unitStatus)}>
                        {unit.lessonPage.time}
                      </p>
                      <div>{getStatusIcon(unitStatus)}</div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default CourseOutlineTab;
