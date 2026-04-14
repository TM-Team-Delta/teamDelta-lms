import { useState } from 'react';
import CourseCatalogFilters from '../../components/courses/CourseCatalogFilters';
import CourseCatalogGrid from '../../components/courses/CourseCatalogGrid';
import { courses, filters, skillLevels } from '../../data/courseData';

const CourseCatalog = () => {
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [activeCategory, setActiveCategory] = useState('all');

  const allCourses = courses[0] || [];
  const levelOptions = skillLevels[0] || [];
  const categoryFilters = filters[0] || [];

  // This keeps the filtering logic simple and easy to follow.
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

      <CourseCatalogGrid courses={filteredCourses} />
    </section>
  );
};

export default CourseCatalog;
