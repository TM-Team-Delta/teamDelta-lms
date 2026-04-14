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
import { dashboardService } from '../../services/dashboard';
import DashboardSkeleton from '../../components/dashboard/DashboardSkeleton';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await dashboardService.getDashboard();
        setDashboardData(response.data);
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
