import { useCallback, useEffect, useMemo, useState } from 'react';
import { trackProgressService } from '../services/trackProgressService';
import {
  createEmptyProgressRecord,
  deriveCourseProgress,
  normalizeCourseProgress,
} from '../utils/courseProgress';
import {
  getStoredCertificateClaim,
  saveStoredCertificateClaim,
} from '../utils/courseCertificateState';

const emptyProgress = {
  unitSequence: [],
  statusByUnitId: {},
  completedCount: 0,
  totalUnits: 0,
  totalLessons: 0,
  completedLessons: 0,
  progressPercent: 0,
  isCourseCompleted: false,
};

const useCourseProgress = (course) => {
  const [progressRecord, setProgressRecord] = useState(createEmptyProgressRecord);
  const [certificateClaim, setCertificateClaim] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const refreshProgress = useCallback(async () => {
    if (!course?.id) {
      setProgressRecord(createEmptyProgressRecord());
      setCertificateClaim(null);
      return createEmptyProgressRecord();
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await trackProgressService.getCourseProgress(course.id);
      const normalizedProgress = normalizeCourseProgress(response);
      setProgressRecord(normalizedProgress);
      setCertificateClaim(getStoredCertificateClaim(course.id));
      return normalizedProgress;
    } catch (requestError) {
      console.error('Failed to load course progress:', requestError);
      setError(
        requestError.response?.data?.message || 'Failed to load course progress.'
      );
      setProgressRecord(createEmptyProgressRecord());
      setCertificateClaim(getStoredCertificateClaim(course.id));
      return createEmptyProgressRecord();
    } finally {
      setIsLoading(false);
    }
  }, [course?.id]);

  useEffect(() => {
    refreshProgress();
  }, [refreshProgress]);

  const derivedProgress = useMemo(() => {
    if (!course?.id) return emptyProgress;
    return deriveCourseProgress(course, progressRecord);
  }, [course, progressRecord]);

  const completeLesson = useCallback(
    async (lessonId) => {
      if (!lessonId) return { success: false, message: 'Lesson id is required.' };

      setIsSubmitting(true);
      setError('');

      try {
        await trackProgressService.markLessonComplete(lessonId);
        await refreshProgress();
        return { success: true };
      } catch (requestError) {
        console.error('Failed to mark lesson as complete:', requestError);
        const message =
          requestError.response?.data?.message ||
          'Failed to mark lesson as complete.';
        setError(message);
        return { success: false, message };
      } finally {
        setIsSubmitting(false);
      }
    },
    [refreshProgress]
  );

  const claimCertificate = useCallback(
    (claimValues) => {
      if (!course?.id) return;

      // Certificate claiming is still local because there is no matching backend flow yet.
      const nextClaim = {
        ...claimValues,
        claimedAt: new Date().toISOString(),
      };

      saveStoredCertificateClaim(course.id, nextClaim);
      setCertificateClaim(nextClaim);
    },
    [course?.id]
  );

  return {
    ...derivedProgress,
    completedLessonIds: progressRecord.completedLessonIds || [],
    certificateClaim,
    isLoading,
    isSubmitting,
    error,
    refreshProgress,
    completeLesson,
    claimCertificate,
  };
};

export default useCourseProgress;
