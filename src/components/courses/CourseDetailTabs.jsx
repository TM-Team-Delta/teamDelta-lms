const tabLabels = {
  overview: 'Overview',
  'course-outline': 'Course Outline',
  discussion: 'Collaboration',
};

const CourseDetailTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className='flex flex-wrap gap-4 border-b border-border'>
      {tabs.map((tab) => {
        const isActive = activeTab === tab;

        return (
          <button
            key={tab}
            type='button'
            onClick={() => onTabChange(tab)}
            className={`border-b-2 px-1 pb-3 text-sm transition ${
              isActive
                ? 'border-brand-primary font-medium text-brand-primary'
                : 'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            {tabLabels[tab] || tab}
          </button>
        );
      })}
    </div>
  );
};

export default CourseDetailTabs;
