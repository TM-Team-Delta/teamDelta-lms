export const dashboardDummyData = {
  resume: {
    courseTitle: 'UX Design Fundamentals',
    moduleTitle: 'Wireframing Basics',
    lessonTitle: 'Lesson 8',
    lessonPath: '/dashboard/lesson',
  },

  stats: {
    coursesEnrolled: 5,
    lessonsCompleted: 18,
    assignmentsPending: 3,
    coursesBadge: '+1 new',
    lessonsBadge: '+3 this week',
    assignmentsBadge: 'Due soon',
  },

  currentCourses: [
    {
      id: 1,
      title: 'UI Design Essentials',
      progress: 72,
      lessonsLeft: 4,
      path: '/dashboard/courses',
    },
    {
      id: 2,
      title: 'UX Research Basics',
      progress: 48,
      lessonsLeft: 7,
      path: '/dashboard/courses',
    },
  ],

  overallProgress: {
    percentage: 68,
    completedLessons: 18,
    totalLessons: 26,
  },

  announcements: [
    {
      id: 1,
      title: 'New Product Design Workshop',
      description: 'Join the live session this Friday at 4:00 PM.',
      date: 'Friday',
    },
    {
      id: 2,
      title: 'Assignment Deadline Reminder',
      description: 'Submit your wireframing task before 11:59 PM.',
      date: 'Today',
    },
  ],

  teamActivity: [
    {
      id: 1,
      name: 'Ada',
      action: 'completed User Research Quiz',
      time: '2h ago',
    },
    {
      id: 2,
      name: 'Musa',
      action: 'submitted Assignment 3',
      time: '5h ago',
    },
  ],

  reminders: [
    {
      id: 1,
      title: 'Mentorship call',
      time: '3:00 PM',
    },
    {
      id: 2,
      title: 'Portfolio review',
      time: 'Tomorrow',
    },
  ],

  upcomingLessons: [
    {
      id: 1,
      title: 'Introduction to Design Systems',
      duration: '12 mins',
    },
    {
      id: 2,
      title: 'Creating Low Fidelity Wireframes',
      duration: '18 mins',
    },
  ],

  todos: [
    {
      id: 1,
      title: 'Finish wireframe assignment',
      completed: false,
    },
    {
      id: 2,
      title: 'Watch lesson on typography',
      completed: true,
    },
  ],

  weeklyGoal: {
    target: 5,
    completed: 3,
    label: '3 of 5 lessons completed this week',
  },
};
