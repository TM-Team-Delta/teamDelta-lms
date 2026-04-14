import Card from '../ui/Card';
import CircleProgress from './CircleProgress';

const defaultWeeklyGoal = {
  weekRange: 'Apr 5 - Apr 11',
  completedLessons: 0,
  totalLessons: 5,
  percentage: 0,
  timeSpentHours: 0,
  quizzesDone: 0,
};

const WeeklyGoalCard = ({ weeklyGoal = defaultWeeklyGoal }) => {
  const {
    weekRange,
    completedLessons,
    totalLessons,
    percentage,
    timeSpentHours,
    quizzesDone,
  } = weeklyGoal;

  const resolvedWeekRange = weekRange ?? defaultWeeklyGoal.weekRange;
  const resolvedCompletedLessons =
    completedLessons ?? defaultWeeklyGoal.completedLessons;
  const resolvedTotalLessons = totalLessons ?? defaultWeeklyGoal.totalLessons;
  const resolvedProgress =
    percentage ??
    (resolvedTotalLessons
      ? Math.round((resolvedCompletedLessons / resolvedTotalLessons) * 100)
      : 0);
  const resolvedTimeSpentHours =
    timeSpentHours ?? defaultWeeklyGoal.timeSpentHours;
  const resolvedQuizzesDone = quizzesDone ?? defaultWeeklyGoal.quizzesDone;
  const remainingLessons = Math.max(
    resolvedTotalLessons - resolvedCompletedLessons,
    0,
  );
  const progressNote =
    remainingLessons > 0
      ? `You need ${remainingLessons} more lesson${
          remainingLessons === 1 ? '' : 's'
        } to hit your weekly target`
      : 'Weekly target completed. Keep the streak going.';

  const stats = [
    { amount: `${resolvedTimeSpentHours}h`, label: 'Time spent' },
    { amount: resolvedQuizzesDone, label: 'Quizzes done' },
  ];

  return (
    <Card className='bg-white'>
      <div className='flex flex-col items-center gap-4'>
        <div className='flex items-center justify-between gap-4'>
          <h3 className='text-xl font-medium'>Weekly Goal</h3>
          <p className='text-sm text-text-secondary'>{resolvedWeekRange}</p>
        </div>

        <div className='flex items-center gap-4'>
          <div className='relative flex h-20 w-20 items-center justify-center'>
            <CircleProgress value={resolvedProgress} size={50} />
          </div>

          <div className='space-y-1'>
            <p className='text-lg font-medium'>
              {resolvedCompletedLessons} of {resolvedTotalLessons} lessons
            </p>
            <p className='max-w-[180px] text-sm leading-5 text-text-secondary font-light'>
              {progressNote}
            </p>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-4 pt-1'>
          {stats.map((item) => (
            <div key={item.label} className='flex flex-col items-center'>
              <p className='text-2xl font-semibold text-brand-secondary'>
                {item.amount}
              </p>
              <p className='text-sm text-gray-700'>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default WeeklyGoalCard;
