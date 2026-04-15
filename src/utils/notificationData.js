import {
  buildClaimedCertificates,
  buildCourseProgressSnapshot,
} from './courseProgress';

const submittedStatuses = ['submitted', 'completed', 'graded'];

const normalizeStatus = (value) =>
  String(value || 'pending')
    .replace(/[_-]+/g, ' ')
    .trim()
    .toLowerCase();

const parseDate = (value) => {
  if (!value) return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const formatRelativeTime = (value, now = new Date()) => {
  const parsed = parseDate(value);

  if (!parsed) {
    return 'Recently';
  }

  const diffMs = now.getTime() - parsed.getTime();
  const diffMinutes = Math.round(Math.abs(diffMs) / (1000 * 60));

  if (diffMinutes < 1) return 'Just now';
  if (diffMinutes < 60) {
    return diffMs >= 0 ? `${diffMinutes} min ago` : `in ${diffMinutes} min`;
  }

  const diffHours = Math.round(diffMinutes / 60);
  if (diffHours < 24) {
    return diffMs >= 0 ? `${diffHours}h ago` : `in ${diffHours}h`;
  }

  const diffDays = Math.round(diffHours / 24);
  if (diffDays < 7) {
    return diffMs >= 0 ? `${diffDays} day${diffDays === 1 ? '' : 's'} ago` : `in ${diffDays} day${diffDays === 1 ? '' : 's'}`;
  }

  return parsed.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: parsed.getFullYear() !== now.getFullYear() ? 'numeric' : undefined,
  });
};

const buildDedupKey = (notification) =>
  `${notification.type}::${notification.title}::${notification.message}`;

const buildAchievementNotifications = ({
  courses,
  progressSnapshot,
  assignments,
  profile,
  now,
}) => {
  const totalCourses = courses.length;
  const completedUnits = progressSnapshot.snapshots.reduce(
    (sum, snapshot) => sum + (snapshot.progress.completedCount || 0),
    0
  );
  const submittedAssignments = assignments.filter((assignment) =>
    submittedStatuses.includes(normalizeStatus(assignment?.status || assignment?.submissionStatus))
  ).length;
  const streakDays = Number(profile?.stats?.streakDays || profile?.streakDays || 0);

  const notifications = [];

  if (totalCourses > 0) {
    notifications.push({
      id: 'achievement-fast-starter',
      type: 'achievement',
      title: 'Achievement unlocked: Fast Starter',
      message: 'You enrolled and started building momentum in your learning path.',
      time: formatRelativeTime(now, now),
      timestamp: now.toISOString(),
      buttonText: 'View Profile',
      actionPath: '/dashboard/profile',
      iconKey: 'achievement',
      isRead: false,
    });
  }

  if (submittedAssignments > 0) {
    notifications.push({
      id: 'achievement-pixel-perfect',
      type: 'achievement',
      title: 'Achievement unlocked: Pixel Perfect',
      message: 'Your first assignment submission is in. Keep that consistency going.',
      time: formatRelativeTime(now, now),
      timestamp: now.toISOString(),
      buttonText: 'View Assignments',
      actionPath: '/dashboard/assignment',
      iconKey: 'achievement',
      isRead: false,
    });
  }

  if (completedUnits >= 3) {
    notifications.push({
      id: 'achievement-top-learner',
      type: 'achievement',
      title: 'Achievement unlocked: Top Learner',
      message: `You have already completed ${completedUnits} learning units.`,
      time: formatRelativeTime(now, now),
      timestamp: now.toISOString(),
      buttonText: 'Continue Learning',
      actionPath: '/dashboard/courses',
      iconKey: 'achievement',
      isRead: false,
    });
  }

  if (streakDays >= 7) {
    notifications.push({
      id: 'achievement-streak',
      type: 'achievement',
      title: 'Achievement unlocked: 7-Day Streak',
      message: `You have maintained a ${streakDays}-day learning streak.`,
      time: formatRelativeTime(now, now),
      timestamp: now.toISOString(),
      buttonText: 'Keep Streak',
      actionPath: '/dashboard',
      iconKey: 'achievement',
      isRead: false,
    });
  }

  return notifications;
};

export const buildGeneratedNotifications = ({
  courses = [],
  assignments = [],
  progressByCourse = {},
  profile = null,
  now = new Date(),
}) => {
  const progressSnapshot = buildCourseProgressSnapshot(courses, progressByCourse);
  const claimedCertificates = buildClaimedCertificates(courses);

  const deadlineNotifications = assignments
    .filter(
      (assignment) =>
        !submittedStatuses.includes(
          normalizeStatus(assignment?.status || assignment?.submissionStatus)
        )
    )
    .sort((first, second) => {
      const firstDate = parseDate(first?.dueDate || first?.deadline);
      const secondDate = parseDate(second?.dueDate || second?.deadline);
      return (firstDate?.getTime() || Number.MAX_SAFE_INTEGER) - (secondDate?.getTime() || Number.MAX_SAFE_INTEGER);
    })
    .slice(0, 4)
    .map((assignment, index) => {
      const dueDate = assignment?.dueDate || assignment?.deadline;
      const dueDateLabel = dueDate || 'soon';

      return {
        id: `deadline-${assignment?.id || index + 1}`,
        type: 'assignment',
        title: `Upcoming deadline: ${assignment?.lessonTitle || assignment?.title || 'Assignment'}`,
        message: `Submit ${assignment?.courseTitle ? `${assignment.courseTitle} - ` : ''}${assignment?.lessonTitle || assignment?.title || 'this assignment'} before ${dueDateLabel}.`,
        time: formatRelativeTime(dueDate, now),
        timestamp: parseDate(dueDate)?.toISOString() || now.toISOString(),
        buttonText: 'Submit Assignment',
        actionPath: assignment?.lessonLink || '/dashboard/assignment',
        iconKey: 'assignment',
        isRead: false,
      };
    });

  const courseCompletionNotifications = progressSnapshot.snapshots
    .filter((snapshot) => snapshot.progress.isCourseCompleted)
    .map((snapshot) => ({
      id: `course-complete-${snapshot.course.id}`,
      type: 'course',
      title: `${snapshot.course.title} completed`,
      message: `You completed this course. Your certificate is now ready to review.`,
      time: formatRelativeTime(snapshot.progress.courseEndDate, now),
      timestamp:
        parseDate(snapshot.progress.courseEndDate)?.toISOString() || now.toISOString(),
      buttonText: 'View Certificate',
      actionPath: `/dashboard/course-detail/${snapshot.course.id}/certificate`,
      iconKey: 'course',
      isRead: false,
    }));

  const claimedCertificateNotifications = claimedCertificates.map((certificate) => ({
    id: `certificate-claimed-${certificate.id}`,
    type: 'certificate',
    title: 'Certificate claimed',
    message: `Your ${certificate.title} certificate has been added to your certifications.`,
    time: formatRelativeTime(certificate.claim?.claimedAt || certificate.completedAt, now),
    timestamp:
      parseDate(certificate.claim?.claimedAt || certificate.completedAt)?.toISOString() ||
      now.toISOString(),
    buttonText: 'Open Certificate',
    actionPath: '/dashboard/certificate',
    iconKey: 'certificate',
    isRead: false,
  }));

  const achievementNotifications = buildAchievementNotifications({
    courses,
    progressSnapshot,
    assignments,
    profile,
    now,
  });

  return [
    ...deadlineNotifications,
    ...achievementNotifications,
    ...courseCompletionNotifications,
    ...claimedCertificateNotifications,
  ]
    .filter((notification, index, list) => {
      const dedupKey = buildDedupKey(notification);
      return list.findIndex((item) => buildDedupKey(item) === dedupKey) === index;
    })
    .sort(
      (first, second) =>
        (parseDate(second.timestamp)?.getTime() || 0) -
        (parseDate(first.timestamp)?.getTime() || 0)
    );
};

export const mergeNotifications = ({
  apiNotifications = [],
  generatedNotifications = [],
}) => {
  const normalizedApiNotifications = (apiNotifications || []).map((notification, index) => ({
    ...notification,
    id: notification?.id || `api-notification-${index + 1}`,
    type: notification?.type || 'system',
    time:
      notification?.time ||
      formatRelativeTime(
        notification?.createdAt || notification?.timestamp || notification?.date
      ),
    timestamp:
      notification?.createdAt || notification?.timestamp || notification?.date || null,
    iconKey: notification?.iconKey || notification?.type || 'system',
    buttonText: notification?.buttonText || notification?.actionText || null,
    actionPath: notification?.actionPath || notification?.link || notification?.href || null,
    isRead: Boolean(notification?.isRead),
  }));

  const apiKeys = new Set(normalizedApiNotifications.map(buildDedupKey));

  return [...normalizedApiNotifications, ...generatedNotifications.filter((item) => !apiKeys.has(buildDedupKey(item)))]
    .sort(
      (first, second) =>
        (parseDate(second.timestamp)?.getTime() || 0) -
        (parseDate(first.timestamp)?.getTime() || 0)
    );
};

export const buildNotificationTabs = (notifications = []) => ({
  all: notifications.length,
  unread: notifications.filter((item) => !item.isRead).length,
  course: notifications.filter((item) => item.type === 'course').length,
  assignment: notifications.filter((item) => item.type === 'assignment').length,
  achievement: notifications.filter((item) => item.type === 'achievement').length,
  certificate: notifications.filter((item) => item.type === 'certificate').length,
});

export const buildNotificationSummary = (notifications = [], now = new Date()) => {
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - 7);

  return {
    total: notifications.length,
    unread: notifications.filter((item) => !item.isRead).length,
    thisWeek: notifications.filter((item) => {
      const parsed = parseDate(item.timestamp);
      return parsed ? parsed >= weekStart : true;
    }).length,
    achievements: notifications.filter((item) => item.type === 'achievement').length,
  };
};
