const FilterTabs = ({ activeTab, onTabChange, notifications, tabs }) => {
  // Central list of tabs so labels and filter ids stay in one place.
  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'unread', label: 'Unread' },
    { id: 'mentions', label: 'Mentions' },
    { id: 'system', label: 'System' },
  ];

  // Returns the number badge for each tab based on the current notifications data.
  const getFallbackCount = (tabId) => {
    if (tabId === 'all') return notifications.length;

    if (tabId === 'unread') {
      return notifications.filter((item) => !item.isRead).length;
    }

    return notifications.filter((item) => item.type === tabId).length;
  };

  const getCount = (tabId) => {
    if (tabs && typeof tabs[tabId] === 'number') {
      return tabs[tabId];
    }

    return getFallbackCount(tabId);
  };

  // Keeps the badge compact when counts get into double digits.
  const formatCount = (count) => {
    return count > 9 ? '9+' : count;
  };

  return (
    <div className='space-y-6'>
      <div className='flex flex-wrap items-center gap-2 md:gap-4'>
        {filterTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const count = getCount(tab.id);

          return (
            <button
              key={tab.id}
              type='button'
              onClick={() => onTabChange(tab.id)}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-white transition ${
                isActive
                  ? 'bg-brand-primary'
                  : 'bg-text-secondary hover:bg-text-secondary/70'
              }`}
            >
              <span className='text-[13px] md:text-base'>{tab.label}</span>

              <span
                className={`flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-xs md:h-6 md:min-w-6 ${
                  isActive
                    ? 'bg-white/50 text-white'
                    : 'bg-white text-text-primary'
                }`}
              >
                {formatCount(count)}
              </span>
            </button>
          );
        })}
      </div>

      {/* Quick summary row under the tabs for unread and overall totals. */}
      <div className='flex flex-wrap items-center gap-4 text-sm font-medium'>
        <div className='flex items-center gap-2'>
          <div className='h-3 w-3 rounded-full bg-brand-primary' />
          <p>
            <span>{getCount('unread')}</span> Unread
          </p>
        </div>

        <div className='flex items-center gap-2'>
          <div className='h-3 w-3 rounded-full bg-brand-primary' />
          <p>
            <span>{getCount('all')}</span> Total
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilterTabs;
