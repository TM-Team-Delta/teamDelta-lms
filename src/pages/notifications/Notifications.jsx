import { CheckCheck, Settings } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import FilterTabs from '../../components/notifications/FilterTabs';
import Card from '../../components/ui/Card';
import NotificationsList from '../../components/notifications/NotificationsList';
import NotificationStats from '../../components/notifications/NotificationStats';
import NotificationsSkeleton from '../../components/notifications/NotificationsSkeleton';
import { assignmentService } from '../../services/assignment';
import { coursesService } from '../../services/courses';
import { notificationsService } from '../../services/notifications';
import { trackProgressService } from '../../services/trackProgressService';
import { useAuth } from '../../context/useAuth';
import { buildMergedAssignments } from '../../utils/assignmentData';
import {
  buildGeneratedNotifications,
  buildNotificationSummary,
  buildNotificationTabs,
  mergeNotifications,
} from '../../utils/notificationData';
import { normalizeCourseList } from '../../utils/courseApi';

const Notifications = () => {
  const { profile } = useAuth();
  const [activeTab, setActiveTab] = useState('all');
  const cachedNotifications = notificationsService.peekNotifications();
  const [notifications, setNotifications] = useState(
    () => cachedNotifications?.data?.notifications || []
  );
  const [summary, setSummary] = useState(() => cachedNotifications?.data?.summary || null);
  const [tabs, setTabs] = useState(() => cachedNotifications?.data?.tabs || null);
  const [pagination, setPagination] = useState(
    () => cachedNotifications?.data?.pagination || null
  );
  const [isLoading, setIsLoading] = useState(() => !cachedNotifications);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const cached = notificationsService.peekNotifications();

        if (cached?.data) {
          setNotifications(cached.data.notifications || []);
          setSummary(cached.data.summary || null);
          setTabs(cached.data.tabs || null);
          setPagination(cached.data.pagination || null);
          setIsLoading(false);
        }

        const [response, enrolledCoursesResponse, assignmentsResponse] =
          await Promise.all([
            notificationsService.getNotifications(),
            coursesService.getEnrolledCourses().catch(() => ({ data: [] })),
            assignmentService.getAssignments().catch(() => ({ data: [] })),
          ]);

        const enrolledCourses = normalizeCourseList(enrolledCoursesResponse);
        const detailedResponses =
          enrolledCourses.length > 0
            ? await coursesService.getDetailedCourses(
                enrolledCourses.map((course) => course.id)
              )
            : [];
        const detailedCourses =
          detailedResponses.length > 0
            ? detailedResponses.map((courseResponse) =>
                normalizeCourseList({
                  data: [courseResponse?.data || courseResponse],
                })[0]
              )
            : enrolledCourses;
        const assignmentSummary = buildMergedAssignments({
          assignmentsPayload: assignmentsResponse,
          courses: detailedCourses,
        });
        const progressByCourse = await trackProgressService.getProgressByCourseIds(
          detailedCourses.map((course) => course.id)
        );
        const generatedNotifications = buildGeneratedNotifications({
          courses: detailedCourses,
          assignments: assignmentSummary.assignments,
          progressByCourse,
          profile,
        });
        const mergedNotifications = mergeNotifications({
          apiNotifications: response.data?.notifications || [],
          generatedNotifications,
        });

        setNotifications(mergedNotifications);
        setSummary(buildNotificationSummary(mergedNotifications));
        setTabs(buildNotificationTabs(mergedNotifications));
        setPagination(response.data?.pagination || null);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load notifications');
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotifications();
  }, [profile]);

  const filteredNotifications = useMemo(() => {
    if (activeTab === 'all') return notifications;

    if (activeTab === 'unread') {
      return notifications.filter((item) => !item.isRead);
    }

    return notifications.filter((item) => item.type === activeTab);
  }, [activeTab, notifications]);

  const handleMarkAllAsRead = async () => {
    try {
      await notificationsService.markAllAsRead();
      setNotifications((prev) =>
        prev.map((item) => ({
          ...item,
          isRead: true,
        }))
      );
      setSummary((prev) =>
        prev
          ? {
              ...prev,
              unread: 0,
            }
          : prev
      );
      setTabs((prev) =>
        prev
          ? {
              ...prev,
              unread: 0,
            }
          : prev
      );
    } catch (err) {
      console.error('Failed to mark all notifications as read', err);
    }
  };

  if (isLoading) {
    return <NotificationsSkeleton />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className='flex flex-col gap-6 p-4 pt-0 sm:p-5 sm:pt-0 md:min-h-[calc(100vh-92px)] md:p-6 md:pt-0'>
      <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div>
          <h1 className='text-2xl font-semibold text-text-primary sm:text-3xl'>
            Notifications
          </h1>
          <p className='mt-1 text-sm text-text-secondary'>
            Stay updated with your activities and alerts.
          </p>
        </div>

        <div className='flex items-center gap-4'>
          <button
            type='button'
            onClick={handleMarkAllAsRead}
            className='flex cursor-pointer items-center gap-2 text-sm font-medium text-brand-secondary transition-colors hover:text-brand-secondary/70'
          >
            <CheckCheck size={18} />
            Mark all as read
          </button>

          <button className='text-text-primary' type='button'>
            <Settings />
          </button>
        </div>
      </div>

      <Card className='bg-white'>
        <FilterTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          notifications={notifications}
          tabs={tabs}
        />

        <NotificationsList notifications={filteredNotifications} />
      </Card>

      <div className='mt-auto'>
        <NotificationStats
          notifications={notifications}
          summary={summary}
          pagination={pagination}
        />
      </div>
    </section>
  );
};

export default Notifications;
