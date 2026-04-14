import Card from '../ui/Card';
import { Bell, MessageSquareText, CalendarDays, Award } from 'lucide-react';

const NotificationStats = ({ notifications = [], summary }) => {
  const notificationStats = [
    {
      id: 1,
      title: 'Total Notifications',
      value: summary?.total ?? notifications.length,
      icon: Bell,
    },
    {
      id: 2,
      title: 'Unread',
      value:
        summary?.unread ?? notifications.filter((item) => !item.isRead).length,
      icon: MessageSquareText,
    },
    {
      id: 3,
      title: 'This Week',
      value: summary?.thisWeek ?? notifications.length,
      icon: CalendarDays,
    },
    {
      id: 4,
      title: 'Achievements',
      value:
        summary?.achievements ??
        notifications.filter((item) => item.type === 'achievement').length,
      icon: Award,
    },
  ];

  return (
    <div className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      {notificationStats.map((stats) => {
        const Icon = stats.icon;

        return (
          <Card key={stats.id} className='rounded-2xl bg-white p-5'>
            <div className='mb-6 flex items-start justify-between'>
              <p className='max-w-[120px] text-sm leading-5 text-text-secondary'>
                {stats.title}
              </p>

              <div className='text-brand-secondary'>
                <Icon size={18} />
              </div>
            </div>

            <h3 className='text-2xl font-semibold text-text-primary'>
              {stats.value}
            </h3>
          </Card>
        );
      })}
    </div>
  );
};

export default NotificationStats;
