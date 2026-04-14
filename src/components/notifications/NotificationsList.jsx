import { useNavigate } from 'react-router-dom';
import {
  Award,
  Bell,
  BookOpenCheck,
  CalendarClock,
  GraduationCap,
  Trophy,
} from 'lucide-react';
import NotificationCard from '../ui/NotificationCard';
import AllCaughtUp from './AllCaughtUp';

const NotificationsList = ({ notifications }) => {
  const navigate = useNavigate();

  const resolveIcon = (item) => {
    if (typeof item.icon === 'function') return item.icon;

    const iconMap = {
      assignment: CalendarClock,
      achievement: Trophy,
      certificate: Award,
      course: GraduationCap,
      system: Bell,
      unread: Bell,
      enrollment: BookOpenCheck,
    };

    return iconMap[item.iconKey] || iconMap[item.type] || Bell;
  };

  // Show a friendly empty state when the selected tab has no items.
  if (notifications.length === 0) {
    return <AllCaughtUp />;
  }

  return (
    <div className='mt-10 space-y-4'>
      {notifications.map((item) => (
        <NotificationCard
          key={item.id}
          title={item.title}
          message={item.message}
          time={item.time}
          actionText={item.buttonText}
          icon={resolveIcon(item)}
          onAction={() => {
            if (item.actionPath) {
              navigate(item.actionPath);
            }
          }}
        />
      ))}
    </div>
  );
};

export default NotificationsList;
