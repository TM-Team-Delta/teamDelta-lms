import { CheckCircle2, Lock, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const getUnitLink = (courseId, moduleId, itemIndex) =>
  `/dashboard/course-detail/${courseId}/modules/${moduleId}/items/${itemIndex}`;

const getStatusIcon = (status) => {
  if (status === 'completed') {
    return <CheckCircle2 size={14} className='text-brand-secondary' />;
  }

  if (status === 'in-progress') {
    return <PlayCircle size={14} className='text-brand-accent' />;
  }

  if (status === 'available') {
    return <PlayCircle size={14} className='text-brand-primary' />;
  }

  return <Lock size={14} className='text-text-secondary' />;
};

const getItemTextClass = (status, isActive) => {
  if (isActive) return 'text-brand-secondary';
  if (status === 'completed') return 'text-brand-secondary';
  if (status === 'in-progress') return 'text-brand-accent';
  if (status === 'available') return 'text-text-primary';
  return 'text-text-secondary';
};

const CourseLearningSidebar = ({
  course,
  activeModuleId,
  activeUnitId,
  isCertificatePage = false,
  statusByUnitId,
  isCourseCompleted,
}) => {
  return (
    <div className='h-screen overflow-y-auto border-r border-neutral bg-bg-muted px-4 py-5'>
      <div className='space-y-1 pb-4'>
        <p className='text-[13px] font-bold leading-5 text-text-primary'>
          {course.title}
        </p>
        <div className='text-xs uppercase tracking-wide text-text-secondary'>
          <h1 className='font-medium text-brand-secondary'>Course content</h1>
        </div>
      </div>

      <div className='space-y-5'>
        {course.courseOutline.map((module) => (
          <div key={module.id} className='space-y-2'>
            <p className='border-t border-neutral pt-2 text-[11px] font-semibold uppercase tracking-wide text-text-secondary'>
              {module.moduleLabel}
            </p>
            <div className='space-y-2'>
              {module.units.map((unit, unitIndex) => {
                const unitStatus = statusByUnitId[unit.id] || 'locked';
                const isActive =
                  activeModuleId === module.id && activeUnitId === unit.id;
                const unitLink = getUnitLink(course.id, module.id, unitIndex);

                if (unitStatus === 'locked') {
                  return (
                    <div
                      key={unit.id}
                      className='flex items-start gap-2 rounded-md px-2 py-1.5 opacity-80'
                    >
                      <div className='mt-0.5 shrink-0'>
                        {getStatusIcon(unitStatus)}
                      </div>
                      <div className='min-w-0'>
                        <p className='text-[10px] text-text-secondary'>
                          Unit {unitIndex + 1}
                        </p>
                        <p className='text-[12px] leading-4 text-text-secondary'>
                          {unit.title}
                        </p>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={unit.id}
                    to={unitLink}
                    className={`flex items-start gap-2 rounded-md px-2 py-1.5 transition hover:bg-white ${
                      isActive ? 'bg-white' : ''
                    }`}
                  >
                    <div className='mt-0.5 shrink-0'>
                      {getStatusIcon(unitStatus)}
                    </div>
                    <div className='min-w-0'>
                      <p className='text-[10px] text-text-secondary'>
                        Unit {unitIndex + 1}
                      </p>
                      <p
                        className={`text-[12px] leading-4 ${getItemTextClass(unitStatus, isActive)}`}
                      >
                        {unit.title}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}

        <div className='border-t border-neutral pt-3'>
          {isCourseCompleted ? (
            <Link
              to={`/dashboard/course-detail/${course.id}/certificate`}
              className={`flex items-start gap-2 rounded-md px-2 py-2 transition hover:bg-white ${
                isCertificatePage ? 'bg-white' : ''
              }`}
            >
              <CheckCircle2
                size={14}
                className='mt-0.5 shrink-0 text-brand-secondary'
              />
              <div>
                <p className='text-[12px] font-medium text-brand-secondary'>
                  {course.certificate?.sidebarLabel || 'Certificate'}
                </p>
                <p className='text-[11px] leading-4 text-text-secondary'>
                  {course.certificate?.sidebarSubtitle ||
                    'Additional resources and certification'}
                </p>
              </div>
            </Link>
          ) : (
            <div className='flex items-start gap-2 rounded-md px-2 py-2 opacity-75'>
              <Lock size={14} className='mt-0.5 shrink-0 text-text-secondary' />
              <div>
                <p className='text-[12px] font-medium text-text-secondary'>
                  {course.certificate?.sidebarLabel || 'Certificate'}
                </p>
                <p className='text-[11px] leading-4 text-text-secondary'>
                  Complete every unit to unlock your certificate page
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseLearningSidebar;
