import { useEffect, useMemo, useState } from 'react';
import {
  deriveCourseProgress,
  getStoredCourseProgress,
  updateCourseProgress,
} from '../utils/courseProgress';

const emptyProgress = {
  unitSequence: [],
  statusByUnitId: {},
  completedCount: 0,
  totalUnits: 0,
  progressPercent: 0,
  isCourseCompleted: false,
};

const useCourseProgress = (course) => {
  const [storedProgress, setStoredProgress] = useState(() =>
    course?.id ? getStoredCourseProgress(course.id) : null
  );

  useEffect(() => {
    if (!course?.id) {
      setStoredProgress(null);
      return;
    }

    setStoredProgress(getStoredCourseProgress(course.id));
  }, [course?.id]);

  const derivedProgress = useMemo(() => {
    if (!course?.id) return emptyProgress;
    return deriveCourseProgress(course, storedProgress);
  }, [course, storedProgress]);

  const startUnit = (unitId) => {
    if (!course?.id || !unitId) return;

    setStoredProgress(
      updateCourseProgress(course.id, (existingProgress) => {
        const startedUnits = {
          ...(existingProgress.startedUnits || {}),
        };

        if (!startedUnits[unitId]) {
          startedUnits[unitId] = new Date().toISOString();
        }

        return {
          ...existingProgress,
          startedUnits,
        };
      })
    );
  };

  const completeUnit = (unitId) => {
    if (!course?.id || !unitId) return;

    setStoredProgress(
      updateCourseProgress(course.id, (existingProgress) => ({
        startedUnits: {
          ...(existingProgress.startedUnits || {}),
          [unitId]:
            existingProgress.startedUnits?.[unitId] || new Date().toISOString(),
        },
        completedUnits: {
          ...(existingProgress.completedUnits || {}),
          [unitId]: new Date().toISOString(),
        },
      }))
    );
  };

  const claimCertificate = (claimValues) => {
    if (!course?.id) return;

    setStoredProgress(
      updateCourseProgress(course.id, (existingProgress) => ({
        ...existingProgress,
        certificateClaim: {
          ...claimValues,
          claimedAt: new Date().toISOString(),
        },
      }))
    );
  };

  return {
    ...derivedProgress,
    startUnit,
    completeUnit,
    claimCertificate,
  };
};

export default useCourseProgress;
