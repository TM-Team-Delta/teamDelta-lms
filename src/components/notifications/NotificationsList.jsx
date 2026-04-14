import NotificationCard from '../ui/NotificationCard';
import AllCaughtUp from './AllCaughtUp';

const NotificationsList = ({ notifications }) => {
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
          icon={item.icon}
          onAction={() => {
            console.log(item.title);
          }}
        />
      ))}
    </div>
  );
};

export default NotificationsList;
