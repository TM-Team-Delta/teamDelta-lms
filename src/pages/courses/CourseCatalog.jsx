import { useEffect, useState } from 'react';
import CourseCatalogFilters from '../../components/courses/CourseCatalogFilters';
import CourseCatalogGrid from '../../components/courses/CourseCatalogGrid';
import { filters, skillLevels } from '../../data/courseData';
import { coursesService } from '../../services/courses';
import {
  mergeEnrollmentIntoCourses,
  normalizeCourseList,
} from '../../utils/courseApi';

const CourseCatalog = () => {
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [activeCategory, setActiveCategory] = useState('all');
  const [allCourses, setAllCourses] = useState(() => {
    const cachedCourses = coursesService.peekCourses();
    const cachedEnrolledCourses = coursesService.peekEnrolledCourses();

    if (!cachedCourses) return [];

    const normalizedCourses = normalizeCourseList(cachedCourses);
    const normalizedEnrolledCourses = cachedEnrolledCourses
      ? normalizeCourseList(cachedEnrolledCourses)
      : [];

    return mergeEnrollmentIntoCourses(
      normalizedCourses,
      normalizedEnrolledCourses
    );
  });
  const [isLoading, setIsLoading] = useState(() => !coursesService.peekCourses());
  const [error, setError] = useState('');

  const levelOptions = skillLevels[0] || [];
  const categoryFilters = filters[0] || [];

  useEffect(() => {
    const loadCourses = async () => {
      const cachedCoursesResponse = coursesService.peekCourses();
      const cachedEnrolledResponse = coursesService.peekEnrolledCourses();

      if (cachedCoursesResponse) {
        const normalizedCourses = normalizeCourseList(cachedCoursesResponse);
        const normalizedEnrolledCourses = cachedEnrolledResponse
          ? normalizeCourseList(cachedEnrolledResponse)
          : [];

        setAllCourses(
          mergeEnrollmentIntoCourses(normalizedCourses, normalizedEnrolledCourses)
        );
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }

      setError('');

      try {
        const [coursesResponse, enrolledResponse] = await Promise.all([
          coursesService.getCourses(),
          coursesService.getEnrolledCourses().catch(() => ({ data: [] })),
        ]);

        const normalizedCourses = normalizeCourseList(coursesResponse);
        const normalizedEnrolledCourses = normalizeCourseList(enrolledResponse);

        setAllCourses(
          mergeEnrollmentIntoCourses(normalizedCourses, normalizedEnrolledCourses)
        );
      } catch (requestError) {
        console.error('Failed to load courses:', requestError);
        setError(
          requestError.response?.data?.message ||
            'We could not load courses right now.'
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadCourses();
  }, []);

  const filteredCourses = allCourses.filter((course) => {
    const levelMatches =
      selectedLevel === 'All Levels' || course.level === selectedLevel;
    const categoryMatches =
      activeCategory === 'all' || course.category === activeCategory;

    return levelMatches && categoryMatches;
  });

  return (
    <section className='space-y-6 p-4 pt-0 sm:p-5 sm:pt-0 md:p-6 md:pt-0'>
      <CourseCatalogFilters
        levelOptions={levelOptions}
        selectedLevel={selectedLevel}
        onLevelChange={setSelectedLevel}
        categoryFilters={categoryFilters}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {isLoading ? (
        <div className='rounded-2xl border border-dashed border-border bg-white p-8 text-center'>
          <h2 className='text-lg font-semibold text-text-primary'>
            Loading courses
          </h2>
          <p className='mt-2 text-sm text-text-secondary'>
            We are fetching the latest course catalog from the backend.
          </p>
        </div>
      ) : error ? (
        <div className='rounded-2xl border border-dashed border-red-200 bg-white p-8 text-center'>
          <h2 className='text-lg font-semibold text-text-primary'>
            Unable to load courses
          </h2>
          <p className='mt-2 text-sm text-text-secondary'>{error}</p>
        </div>
      ) : (
        <CourseCatalogGrid courses={filteredCourses} />
      )}
    </section>
  );
};

export default CourseCatalog;
