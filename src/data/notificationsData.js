import {
  FileText,
  Clock3,
  MessageSquareText,
  BookOpen,
  Trophy,
  Wrench,
  ClipboardCheck,
  Users,
} from 'lucide-react';

export const notifications = [
  {
    id: 1,
    title: 'Assignment Graded: JavaScript Project',
    message:
      'Your submission for "JavaScript ES6 Project" has been graded. You scored 92/100.',
    time: '2 hours ago',
    buttonText: 'View Grade',
    type: 'content',
    isRead: false,
    icon: FileText,
  },
  {
    id: 2,
    title: 'Upcoming Deadline: React Assignment',
    message:
      'Your React Hooks assignment is due in 2 days. Make sure to submit before the deadline.',
    time: '5 hours ago',
    buttonText: 'Continue',
    type: 'content',
    isRead: false,
    icon: Clock3,
  },
  {
    id: 3,
    title: 'New message from Prof. Tutor Rachel',
    message:
      '"Great work on your last project! I’ve added some feedback on your submission."',
    time: '8 hours ago',
    buttonText: 'Reply',
    type: 'mentions',
    isRead: false,
    icon: MessageSquareText,
  },
  {
    id: 4,
    title: 'New Content Available: Advanced TypeScript',
    message:
      'Module 5, "Generics and Advanced Types" is now available in your TypeScript course.',
    time: '1 day ago',
    buttonText: 'View Lesson',
    type: 'content',
    isRead: true,
    icon: BookOpen,
  },
  {
    id: 5,
    title: 'Achievement Unlocked: "Fast Learner"',
    message:
      'Congratulations! You’ve completed 5 courses in record time. Keep up the great work!',
    time: '1 day ago',
    buttonText: null,
    type: 'achievement',
    isRead: true,
    icon: Trophy,
  },
  {
    id: 6,
    title: 'System Maintenance Scheduled',
    message:
      'TalentFlow will undergo maintenance on March 28, 2026 from 2:00 AM to 4:00 AM EST.',
    time: '2 days ago',
    buttonText: null,
    type: 'system',
    isRead: true,
    icon: Wrench,
  },
  {
    id: 7,
    title: 'Peer Review Required',
    message:
      'You have 2 peer reviews pending for the UI/UX Design course. Complete them by Friday.',
    time: '2 days ago',
    buttonText: 'Review',
    type: 'content',
    isRead: false,
    icon: ClipboardCheck,
  },
  {
    id: 8,
    title: 'Group Discussion: Web Development Team',
    message:
      'Michael Chen mentioned you in "Week 5 Project Discussion", "@Alex what do you think?"',
    time: '3 days ago',
    buttonText: 'View',
    type: 'mentions',
    isRead: true,
    icon: Users,
  },
  {
    id: 9,
    title: 'New Course Available: UI Animation',
    message:
      'A new course on UI animations has been added. Start learning today.',
    time: '3 days ago',
    buttonText: 'Start Course',
    type: 'content',
    isRead: false,
    icon: BookOpen,
  },
  {
    id: 10,
    title: 'Achievement Unlocked: "Consistency King"',
    message: 'You’ve logged in for 7 consecutive days. Keep it going!',
    time: '4 days ago',
    buttonText: null,
    type: 'achievement',
    isRead: true,
    icon: Trophy,
  },
];
