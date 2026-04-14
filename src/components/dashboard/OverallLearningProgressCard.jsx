import Card from '../ui/Card';
import { Link } from 'react-router-dom';
import CircleProgress from './CircleProgress';
import StatBox from './StatBox';
import Milestone from './Milestone';

const defaultOverallProgress = {
  percentage: 0,
  cohort: 'Cohort 1',
  programName: 'TalentFlow Internship',
  week: 1,
  totalWeeks: 12,
};

const defaultSummary = {
  lessonsDone: 0,
  dayStreak: 0,
  certificates: 0,
};

const defaultMilestones = [
  {
    title: 'Enroll in a course',
    status: 'completed',
    description: 'Start your learning journey',
  },
  {
    title: 'Complete first lesson',
    status: 'in-progress',
    description: 'Finish your first lesson',
  },
  {
    title: 'Submit first assignment',
    status: 'upcoming',
    description: 'Submit your first assignment',
  },
  {
    title: 'Complete a course',
    status: 'upcoming',
    description: 'Finish an entire course',
  },
];

const defaultResume = {
  courseId: '',
  courseTitle: 'UI/UX Design Fundamentals',
  lessonTitle: 'Start Here',
  buttonLabel: 'Continue',
};

const OverallLearningProgressCard = ({
  overallProgress = defaultOverallProgress,
  summary = defaultSummary,
  milestones = defaultMilestones,
  resume = defaultResume,
}) => {
  const percentage =
    overallProgress?.percentage ?? defaultOverallProgress.percentage;
  const cohort = overallProgress?.cohort ?? defaultOverallProgress.cohort;
  const programName =
    overallProgress?.programName ?? defaultOverallProgress.programName;
  const week = overallProgress?.week ?? defaultOverallProgress.week;
  const totalWeeks =
    overallProgress?.totalWeeks ?? defaultOverallProgress.totalWeeks;
  const courseTitle = resume?.courseTitle || defaultResume.courseTitle;
  const lessonTitle = resume?.lessonTitle || defaultResume.lessonTitle;
  const buttonLabel = resume?.buttonLabel || defaultResume.buttonLabel;
  const resumeLink = resume?.courseId
    ? `/dashboard/course-detail/${resume.courseId}`
    : '/dashboard/courses';

  return (
    <Card className='mt-10 bg-white'>
      <div className='space-y-6'>
        <div>
          <h3 className='text-lg font-medium sm:text-xl'>
            Overall Learning Progress
          </h3>
          <p className='mt-1 text-xs text-text-secondary sm:text-sm'>
            {cohort} | {programName} | Week {week} of {totalWeeks}
          </p>
        </div>

        <div className='grid gap-6 xl:grid-cols-[auto_minmax(0,1fr)_minmax(180px,220px)] xl:items-center'>
          <div className='flex justify-center xl:block'>
            <CircleProgress
              value={percentage}
              size={110}
              mobileSize={84}
              showLabel
            />
          </div>

          <div className='space-y-3 rounded-2xl bg-brand-muted p-5'>
            <p className='text-sm font-medium text-brand-secondary'>
              Program completion
            </p>
            <p className='text-2xl font-semibold leading-tight sm:text-3xl'>
              {percentage}% complete
            </p>
            <p className='text-sm leading-6 text-text-secondary'>
              You are currently in week {week} of {totalWeeks} in {programName}.
              Keep going to unlock the next milestone in your learning journey.
            </p>
          </div>

          <div className='min-w-0'>
            <StatBox summary={summary} />
          </div>
        </div>

        <Milestone milestones={milestones} />

        <div className='flex flex-col gap-3 rounded-2xl bg-button-primary px-4 py-4 sm:px-5 md:flex-row md:items-center md:justify-between'>
          <p className='text-sm leading-6 text-white'>
            Up next: {courseTitle} | {lessonTitle}
          </p>

          <Link
            to={resumeLink}
            className='inline-flex min-w-[120px] items-center justify-center rounded-xl border border-button-secondary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10'
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default OverallLearningProgressCard;
