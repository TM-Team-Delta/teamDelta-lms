import { useEffect, useState } from 'react';
import WeeklyGoalCard from '../../components/dashboard/WeeklyGoalCard';
import TeamActivity from '../../components/dashboard/TeamActivity';
import TodoList from '../../components/dashboard/TodoList';
import OverviewCard from '../../components/dashboard/OverviewCard';
import OverallLearningProgressCard from '../../components/dashboard/OverallLearningProgressCard';
import ReminderCard from '../../components/dashboard/ReminderCard';
import ResumeCard from '../../components/dashboard/ResumeCard';
import CurrentCoursesCard from '../../components/dashboard/CurrentCoursesCard';
import AnnouncementCard from '../../components/dashboard/AnnouncementsCard';
import UpcomingLessonsCard from '../../components/dashboard/UpcomingLessonsCard';
import { assignmentService } from '../../services/assignment';
import { dashboardService } from '../../services/dashboard';
import { coursesService } from '../../services/courses';
import DashboardSkeleton from '../../components/dashboard/DashboardSkeleton';
import { buildMergedAssignments } from '../../utils/assignmentData';
import { normalizeCourseList } from '../../utils/courseApi';
import {
  buildMilestones,
  buildCourseProgressSnapshot,
  buildUpcomingLessons,
  buildWeeklyGoal,
} from '../../utils/courseProgress';
import {
  createTimedCacheEntry,
  readSessionCache,
  writeSessionCache,
} from '../../utils/sessionCache';

const DASHBOARD_VIEW_CACHE_KEY = 'trueminds-dashboard-view';

const buildTodoList = ({
  assignments = [],
  upcomingLessons = [],
  fallbackTodoList = [],
}) => {
  const pendingAssignments = assignments
    .filter((assignment) => {
      const status = String(
        assignment?.status || assignment?.submissionStatus || 'pending'
      )
        .replace(/[_-]+/g, ' ')
        .trim()
        .toLowerCase();

      return !['submitted', 'completed', 'graded'].includes(status);
    })
    .slice(0, 3)
    .map((assignment, index) => ({
      id: assignment?.id || `assignment-${index + 1}`,
      title: `Submit assignment: ${
        assignment?.lessonTitle || assignment?.title || 'Pending task'
      }`,
      date: assignment?.dueDate || assignment?.deadline || 'Due soon',
      completed: false,
    }));

  const lessonTodos = upcomingLessons
    .slice(0, Math.max(3 - pendingAssignments.length, 0))
    .map((lesson, index) => ({
      id: lesson?.id || `lesson-${index + 1}`,
      title: `Continue lesson: ${lesson?.title || 'Upcoming lesson'}`,
      date: lesson?.time || lesson?.duration || 'Next available lesson',
      completed: false,
    }));

  const merged = [...pendingAssignments, ...lessonTodos];

  return merged.length > 0 ? merged : fallbackTodoList;
};

const buildReminders = ({
  assignments = [],
  upcomingLessons = [],
  fallbackReminders = [],
}) => {
  const assignmentReminders = assignments
    .filter((assignment) => {
      const status = String(
        assignment?.status || assignment?.submissionStatus || 'pending'
      )
        .replace(/[_-]+/g, ' ')
        .trim()
        .toLowerCase();

      return !['submitted', 'completed', 'graded'].includes(status);
    })
    .slice(0, 2)
    .map((assignment, index) => ({
      id: assignment?.id || `assignment-reminder-${index + 1}`,
      title: `Assignment due: ${
        assignment?.lessonTitle || assignment?.title || 'Pending assignment'
      }`,
      description:
        assignment?.dueDate || assignment?.deadline
          ? `Submit before ${assignment?.dueDate || assignment?.deadline}.`
          : 'A course assignment is waiting for your submission.',
    }));

  const lessonReminder = upcomingLessons[0]
    ? [
        {
          id: upcomingLessons[0]?.id || 'next-lesson-reminder',
          title: 'Continue your next lesson',
          description: `${upcomingLessons[0]?.title || 'Upcoming lesson'} • ${
            upcomingLessons[0]?.time || upcomingLessons[0]?.duration || 'Next available'
          }`,
        },
      ]
    : [];

  const merged = [...assignmentReminders, ...lessonReminder].slice(0, 3);

  return merged.length > 0 ? merged : fallbackReminders;
};

const buildDashboardViewData = (
  dashboardResponse,
  detailedEnrolledCourses,
  assignments = []
) => {
  const progressSnapshot = buildCourseProgressSnapshot(detailedEnrolledCourses);
  const upcomingLessons = buildUpcomingLessons(detailedEnrolledCourses);
  const weeklyGoal = buildWeeklyGoal(detailedEnrolledCourses);

  const currentCourses = progressSnapshot.snapshots.map((snapshot) => ({
    courseId: snapshot.course.id,
    title: snapshot.course.title,
    progress: snapshot.progress.progressPercent,
    nextLesson:
      snapshot.nextUnit?.unit?.title || 'Continue from your next available unit',
    buttonLabel:
      snapshot.progress.progressPercent > 0 ? 'Continue' : 'Start Course',
    thumbnail: snapshot.course.coverImage,
  }));

  const resumeSnapshot = progressSnapshot.resumeSnapshot;
  const resume = resumeSnapshot
    ? {
        courseId: resumeSnapshot.course.id,
        courseTitle: resumeSnapshot.course.title,
        lessonTitle:
          resumeSnapshot.nextUnit?.unit?.title || 'Continue learning',
        buttonLabel:
          resumeSnapshot.progress.progressPercent > 0 ? 'Resume' : 'Start',
      }
    : dashboardResponse.data?.resume;

  return {
    ...dashboardResponse.data,
    stats: {
      ...dashboardResponse.data?.stats,
      coursesEnrolled:
        detailedEnrolledCourses.length ||
        dashboardResponse.data?.stats?.coursesEnrolled ||
        0,
      lessonsCompleted: progressSnapshot.lessonsDone,
    },
    summary: {
      ...dashboardResponse.data?.summary,
      lessonsDone: progressSnapshot.lessonsDone,
      certificates: progressSnapshot.certificates,
    },
    milestones: buildMilestones({
      enrolledCourses: detailedEnrolledCourses,
      progressSnapshot,
    }),
    overallProgress: {
      ...dashboardResponse.data?.overallProgress,
      percentage: progressSnapshot.overallProgress,
    },
    currentCourses:
      currentCourses.length > 0
        ? currentCourses
        : dashboardResponse.data?.currentCourses,
    resume,
    upcomingLessons:
      upcomingLessons.length > 0
        ? upcomingLessons
        : dashboardResponse.data?.upcomingLessons,
    todoList: buildTodoList({
      assignments,
      upcomingLessons:
        upcomingLessons.length > 0
          ? upcomingLessons
          : dashboardResponse.data?.upcomingLessons || [],
      fallbackTodoList: dashboardResponse.data?.todoList || [],
    }),
    reminders: buildReminders({
      assignments,
      upcomingLessons:
        upcomingLessons.length > 0
          ? upcomingLessons
          : dashboardResponse.data?.upcomingLessons || [],
      fallbackReminders: dashboardResponse.data?.reminders || [],
    }),
    weeklyGoal: {
      ...dashboardResponse.data?.weeklyGoal,
      ...weeklyGoal,
    },
  };
};

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(() => {
    const cachedView = readSessionCache(DASHBOARD_VIEW_CACHE_KEY);
    return cachedView?.data || null;
  });
  const [isLoading, setIsLoading] = useState(() => !readSessionCache(DASHBOARD_VIEW_CACHE_KEY));
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const cachedDashboardResponse = dashboardService.peekDashboard();
        const cachedEnrolledCoursesResponse = coursesService.peekEnrolledCourses();

        if (cachedDashboardResponse && cachedEnrolledCoursesResponse) {
          const cachedEnrolledCourses = normalizeCourseList(
            cachedEnrolledCoursesResponse
          );
          const cachedDetailedResponses =
            cachedEnrolledCourses.length > 0
              ? await coursesService.getDetailedCourses(
                  cachedEnrolledCourses.map((course) => course.id)
                )
              : [];
          const cachedDetailedCourses =
            cachedDetailedResponses.length > 0
              ? cachedDetailedResponses.map((response) =>
                  normalizeCourseList({ data: [response?.data || response] })[0]
                )
              : cachedEnrolledCourses;

          const cachedAssignments = assignmentService.peekAssignments?.();
          const cachedAssignmentSummary = buildMergedAssignments({
            assignmentsPayload: cachedAssignments || { data: [] },
            courses: cachedDetailedCourses,
          });
          const cachedViewData = buildDashboardViewData(
            cachedDashboardResponse,
            cachedDetailedCourses,
            cachedAssignmentSummary.assignments
          );

          setDashboardData(cachedViewData);
          setIsLoading(false);
          writeSessionCache(
            DASHBOARD_VIEW_CACHE_KEY,
            createTimedCacheEntry(cachedViewData)
          );
        }

        const [dashboardResponse, enrolledCoursesResponse] = await Promise.all([
          dashboardService.getDashboard(),
          coursesService.getEnrolledCourses().catch(() => ({ data: [] })),
        ]);
        const assignmentsResponse = await assignmentService
          .getAssignments()
          .catch(() => ({ data: [] }));

        const enrolledCourses = normalizeCourseList(enrolledCoursesResponse);
        const detailedEnrolledResponses =
          enrolledCourses.length > 0
            ? await coursesService.getDetailedCourses(
                enrolledCourses.map((course) => course.id)
              )
            : [];
        const detailedEnrolledCourses =
          detailedEnrolledResponses.length > 0
            ? detailedEnrolledResponses.map((response) =>
                normalizeCourseList({ data: [response?.data || response] })[0]
              )
            : enrolledCourses;
        const assignmentSummary = buildMergedAssignments({
          assignmentsPayload: assignmentsResponse,
          courses: detailedEnrolledCourses,
        });
        const nextDashboardData = buildDashboardViewData(
          dashboardResponse,
          detailedEnrolledCourses,
          assignmentSummary.assignments
        );

        if (assignmentSummary?.summary) {
          nextDashboardData.stats = {
            ...nextDashboardData.stats,
            assignmentsPending: assignmentSummary.summary.pending,
          };
          nextDashboardData.milestones = buildMilestones({
            enrolledCourses: detailedEnrolledCourses,
            progressSnapshot: buildCourseProgressSnapshot(detailedEnrolledCourses),
            assignmentSummary: assignmentSummary.summary,
          });
        }

        setDashboardData(nextDashboardData);
        writeSessionCache(
          DASHBOARD_VIEW_CACHE_KEY,
          createTimedCacheEntry(nextDashboardData)
        );
      } catch (err) {
        setError(
          err.response?.data?.message || 'Failed to load Dashboard Data'
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className='space-y-6 p-4 sm:p-5 md:p-6 md:pt-0'>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-12'>
        {/* left section */}
        <div className='col-span-1 space-y-6 lg:col-span-8'>
          <ResumeCard resume={dashboardData?.resume} />
          <OverviewCard stats={dashboardData?.stats} />
          <CurrentCoursesCard currentCourses={dashboardData?.currentCourses} />
          <OverallLearningProgressCard
            overallProgress={dashboardData?.overallProgress}
            summary={dashboardData?.summary}
            milestones={dashboardData?.milestones}
            resume={dashboardData?.resume}
          />

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <AnnouncementCard announcements={dashboardData?.announcements} />
            <TeamActivity teamActivity={dashboardData?.teamActivity} />
          </div>
        </div>

        {/* right section */}
        <div className='col-span-1 space-y-10 lg:col-span-4'>
          <ReminderCard reminders={dashboardData?.reminders} />
          <UpcomingLessonsCard
            upcomingLessons={dashboardData?.upcomingLessons}
          />
          <TodoList todoList={dashboardData?.todoList} />
          <WeeklyGoalCard weeklyGoal={dashboardData?.weeklyGoal} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
