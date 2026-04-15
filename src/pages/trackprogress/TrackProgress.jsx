import React, { useEffect, useState } from 'react';
import { BookOpen, Clock, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import TrackProgressSkeleton from '../../components/trackprogress/TrackProgressSkeleton';
import { coursesService } from '../../services/courses';
import { trackProgressService } from '../../services/trackProgressService';
import { normalizeCourseList } from '../../utils/courseApi';
import { buildCourseProgressSnapshot } from '../../utils/courseProgress';

const buildTrackProgressView = (courses = [], progressByCourse = {}) => {
  const snapshot = buildCourseProgressSnapshot(courses, progressByCourse);

  return {
    overview: {
      totalCompleted: snapshot.overallProgress,
      totalCourses: snapshot.snapshots.length,
    },
    courses: snapshot.snapshots.map((item) => ({
      id: item.course.id,
      title: item.course.title,
      progress: item.progress.progressPercent,
      courseLink: `/dashboard/course-detail/${item.course.id}`,
    })),
  };
};

const TrackProgress = () => {
  const [overview, setOverview] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        setError(null);
        setLoading(true);

        const response = await coursesService.getEnrolledCourses();
        const enrolledCourses = normalizeCourseList(response);
        const detailedEnrolledResponses =
          enrolledCourses.length > 0
            ? await coursesService.getDetailedCourses(
                enrolledCourses.map((course) => course.id)
              )
            : [];
        const detailedEnrolledCourses =
          detailedEnrolledResponses.length > 0
            ? detailedEnrolledResponses.map((item) =>
                normalizeCourseList({ data: [item?.data || item] })[0]
              )
            : enrolledCourses;
        const progressByCourse = await trackProgressService.getProgressByCourseIds(
          detailedEnrolledCourses.map((course) => course.id)
        );
        const nextViewData = buildTrackProgressView(
          detailedEnrolledCourses,
          progressByCourse
        );

        setOverview(nextViewData.overview);
        setCourses(nextViewData.courses);
      } catch (requestError) {
        console.error(requestError);
        setError(requestError.response?.data?.message || 'Failed to load progress');
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, []);

  if (error) return <p className='p-4 text-red-500'>{error}</p>;

  return (
    <section className='min-h-[calc(100vh-92px)] p-4 sm:p-5 md:p-6'>
      <h2 className='mb-4 text-xl font-semibold'>Progress Tracking</h2>

      {loading && <TrackProgressSkeleton />}

      {!loading && (
        <>
          <div className='mb-8 flex items-center justify-between rounded-2xl bg-brand-primary p-6 text-white'>
            <div>
              <h3 className='text-lg font-semibold'>Overall Progress</h3>
              <p className='text-sm opacity-80'>
                You have completed {overview?.totalCompleted ?? 0}% of your active
                courses
              </p>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3'>
            {courses.map((course, index) => (
              <div key={course.id || index} className='overflow-hidden rounded-2xl border bg-white'>
                <div className='relative flex h-28 items-center justify-center bg-gray-100'>
                  <MoreHorizontal
                    className='absolute right-3 top-3 text-gray-400'
                    size={16}
                  />
                  <BookOpen className='text-gray-400' />
                </div>

                <div className='p-4'>
                  <div className='mb-2 flex justify-between'>
                    <h4 className='text-sm font-semibold'>{course.title}</h4>
                    <span className='rounded-full bg-gray-200 px-2 py-1 text-xs'>
                      {course.progress < 100 ? 'In Progress' : 'Completed'}
                    </span>
                  </div>

                  <div className='mb-1 flex justify-between text-xs'>
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>

                  <div className='mb-3 h-2 w-full rounded-full bg-gray-200'>
                    <div
                      className='h-2 rounded-full bg-brand-secondary'
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>

                  <div className='flex items-center justify-between'>
                    <span className='flex items-center gap-1 text-xs'>
                      <Clock size={12} />
                      Synced with your account
                    </span>
                    <Link
                      to={course.courseLink}
                      className='rounded-full bg-brand-primary px-3 py-1 text-xs text-white'
                    >
                      {course.progress < 100 ? 'Continue' : 'View'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default TrackProgress;
