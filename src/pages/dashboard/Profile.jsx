import React, { useEffect, useState, useRef } from 'react';
import { assignmentService } from '../../services/assignment';
import { coursesService } from '../../services/courses';
import { trackProgressService } from '../../services/trackProgressService';
import { usersService } from '../../services/users';
import { useAuth } from '../../context/useAuth';
import { buildMergedAssignments } from '../../utils/assignmentData';
import { normalizeCourseList } from '../../utils/courseApi';
import { buildCourseProgressSnapshot } from '../../utils/courseProgress';
import {
  Edit3,
  Mail,
  MapPin,
  Calendar,
  Plus,
  BookOpen,
  Medal,
  Award,
  ChevronLeft,
  Camera,
  X,
} from 'lucide-react';
import UserAvatar from '../../components/common/UserAvatar';

const defaultBadgeCatalog = [
  {
    name: 'Top Learner',
    description: 'Earned the highest engagement score this week',
    icon: '🏆',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    name: 'Pixel Perfect',
    description: 'Submitted first milestone assignment',
    icon: '🎯',
    color: 'bg-red-100 text-red-600',
  },
  {
    name: 'Fast Starter',
    description: 'Completed platform onboarding in under 24 hours',
    icon: '🚀',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    name: 'Design Thinker',
    description: 'Completed the user research module',
    icon: '🧠',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    name: '7-Day Streak',
    description: 'Logged in for 7 consecutive days',
    icon: '🔥',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    name: 'System Architect',
    description: 'Passed the component library quiz',
    icon: '🧩',
    color: 'bg-green-100 text-green-600',
  },
  {
    name: 'Accessibility Pro',
    description: 'Scored 100% on inclusive design standards',
    icon: '⭐',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    name: 'Problem Solver',
    description: 'Answered a question in the help channel',
    icon: '💡',
    color: 'bg-yellow-50 text-yellow-500',
  },
  {
    name: 'Global Collab',
    description: 'Active in 3+ cross-disciplinary team channels',
    icon: '🌐',
    color: 'bg-blue-50 text-blue-500',
  },
  {
    name: 'Peer Reviewer',
    description: "Left constructive feedback on a teammate's project",
    icon: '📝',
    color: 'bg-gray-100 text-gray-600',
  },
];

const BadgeModal = ({ isOpen, onClose, badgesCatalog }) => {
  if (!isOpen) return null;

  const badgesData = badgesCatalog;

  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6'>
      <div
        className='absolute inset-0 bg-black/40 backdrop-blur-sm'
        onClick={onClose}
      />
      <div className='relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-300'>
        {/* Header */}
        <div className='p-6 md:p-10 flex justify-center items-center shrink-0 relative'>
          <h2 className='text-xl md:text-2xl font-bold text-gray-800'>
            How to Earn Badges
          </h2>
          <button
            onClick={onClose}
            className='absolute top-5 right-5 md:top-10 md:right-10 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600'
          >
            <X size={20} className='md:hidden' />
            <X size={24} className='hidden md:block' />
          </button>
        </div>

        {/* Badge Grid - Scrollable Area */}
        <div className='px-4 md:px-10 pb-8 md:pb-16 overflow-y-auto custom-scrollbar'>
          <div className='grid grid-cols-3 lg:grid-cols-5 gap-y-8 md:gap-y-12 gap-x-2 md:gap-x-8'>
            {badgesData.map((badge, idx) => (
              <div
                key={idx}
                className='flex flex-col items-center text-center group'
              >
                <div
                  className={`h-14 w-14 sm:h-20 sm:w-20 rounded-full flex items-center justify-center text-2xl md:text-4xl ${badge.color} border-2 md:border-4 border-white shadow-sm mb-3 md:mb-4 transition-transform group-hover:scale-110 duration-300`}
                >
                  {badge.icon}
                </div>
                <h3 className='text-[10px] md:text-[14px] font-bold text-gray-700 mb-1 leading-tight'>
                  {badge.name}
                </h3>
                <p className='text-[8px] md:text-[11px] text-gray-400 font-medium leading-[1.2] px-0.5 opacity-80'>
                  {badge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const normalizeBadgeItems = (badgeItems) =>
  badgeItems.map((badge, index) => ({
    name:
      badge?.name ||
      badge?.title ||
      defaultBadgeCatalog[index % defaultBadgeCatalog.length].name,
    description:
      badge?.description ||
      defaultBadgeCatalog[index % defaultBadgeCatalog.length].description,
    icon:
      badge?.icon ||
      defaultBadgeCatalog[index % defaultBadgeCatalog.length].icon,
    color:
      badge?.color ||
      defaultBadgeCatalog[index % defaultBadgeCatalog.length].color,
  }));

const deriveEarnedBadges = ({
  enrolledCourses,
  progressSnapshot,
  mergedAssignments,
  profileData,
}) => {
  const totalCourses = enrolledCourses.length;
  const completedUnits = progressSnapshot.snapshots.reduce(
    (sum, snapshot) => sum + (snapshot.progress.completedCount || 0),
    0
  );
  const completedCourses = progressSnapshot.snapshots.filter(
    (snapshot) => snapshot.progress.progressPercent >= 100
  ).length;
  const submittedAssignments = mergedAssignments.assignments.filter(
    (assignment) =>
      ['submitted', 'completed', 'graded'].includes(
        String(assignment?.status || assignment?.submissionStatus || '')
          .replace(/[_-]+/g, ' ')
          .trim()
          .toLowerCase()
      )
  ).length;
  const streakDays = Number(
    profileData?.stats?.streakDays || profileData?.streakDays || 0
  );
  const enrolledCategories = enrolledCourses.map((course) =>
    String(course?.category || '').toLowerCase()
  );

  const earnedBadgeNames = new Set();

  if (totalCourses > 0) earnedBadgeNames.add('Fast Starter');
  if (progressSnapshot.overallProgress >= 25 || completedUnits >= 3) {
    earnedBadgeNames.add('Top Learner');
  }
  if (submittedAssignments >= 1) earnedBadgeNames.add('Pixel Perfect');
  if (enrolledCategories.some((category) => category.includes('design'))) {
    earnedBadgeNames.add('Design Thinker');
  }
  if (streakDays >= 7) earnedBadgeNames.add('7-Day Streak');
  if (
    enrolledCategories.some((category) => category.includes('development')) &&
    completedUnits >= 3
  ) {
    earnedBadgeNames.add('System Architect');
  }
  if (submittedAssignments >= 3) earnedBadgeNames.add('Accessibility Pro');
  if (completedUnits >= 5) earnedBadgeNames.add('Problem Solver');
  if (totalCourses >= 3) earnedBadgeNames.add('Global Collab');
  if (completedCourses >= 1 || submittedAssignments >= 5) {
    earnedBadgeNames.add('Peer Reviewer');
  }

  return defaultBadgeCatalog.filter((badge) => earnedBadgeNames.has(badge.name));
};

const buildProfileFormData = (profileData) => ({
  firstName: profileData?.firstName || '',
  lastName: profileData?.lastName || '',
  email: profileData?.email || '',
  location: profileData?.location || '',
  bio: profileData?.bio || '',
  profilePhotoUrl: profileData?.profilePhotoUrl || '',
});

const Profile = () => {
  const MAX_IMAGE_DIMENSION = 512;
  const MAX_IMAGE_SIZE_BYTES = 350 * 1024;
  const fileInputRef = useRef(null);
  const { profile, refreshProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isBadgeModalOpen, setIsBadgeModalOpen] = useState(false);
  const [isAddingSkill, setIsAddingSkill] = useState(false);
  const [profileImage, setProfileImage] = useState('');
  const [learningPath, setLearningPath] = useState([]);
  const [badges, setBadges] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [skillError, setSkillError] = useState('');
  const [learningSummary, setLearningSummary] = useState({
    overallProgress: 0,
    activeCourses: 0,
    totalCourses: 0,
    onTrackPercentage: 0,
  });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    bio: '',
    profilePhotoUrl: '',
  });

  const [error, setError] = useState('');
  const profileData = profile;
  const isLoading = !profileData;

  const compressImageFile = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const img = new Image();

        img.onload = () => {
          let { width, height } = img;

          if (width > height && width > MAX_IMAGE_DIMENSION) {
            height = Math.round((height * MAX_IMAGE_DIMENSION) / width);
            width = MAX_IMAGE_DIMENSION;
          } else if (height >= width && height > MAX_IMAGE_DIMENSION) {
            width = Math.round((width * MAX_IMAGE_DIMENSION) / height);
            height = MAX_IMAGE_DIMENSION;
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;

          const context = canvas.getContext('2d');

          if (!context) {
            reject(new Error('Could not process image.'));
            return;
          }

          context.drawImage(img, 0, 0, width, height);

          let quality = 0.85;
          let imageDataUrl = canvas.toDataURL('image/jpeg', quality);

          while (
            imageDataUrl.length > MAX_IMAGE_SIZE_BYTES &&
            quality > 0.45
          ) {
            quality -= 0.1;
            imageDataUrl = canvas.toDataURL('image/jpeg', quality);
          }

          resolve(imageDataUrl);
        };

        img.onerror = () => reject(new Error('Invalid image file.'));
        img.src = reader.result;
      };

      reader.onerror = () => reject(new Error('Failed to read image file.'));
      reader.readAsDataURL(file);
    });

  const formattedEnrollmentDate = profileData?.enrollmentDate
    ? new Date(profileData.enrollmentDate).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : 'Not available';

  useEffect(() => {
    const fetchLearningPath = async () => {
      try {
        const enrolledResponse = await coursesService
          .getEnrolledCourses()
          .catch(() => ({ data: [] }));
        const enrolledCourses = normalizeCourseList(enrolledResponse);
        const detailedResponses =
          enrolledCourses.length > 0
            ? await coursesService.getDetailedCourses(
                enrolledCourses.map((course) => course.id)
              )
            : [];
        const detailedCourses =
          detailedResponses.length > 0
            ? detailedResponses.map((response) =>
                normalizeCourseList({ data: [response?.data || response] })[0]
              )
            : enrolledCourses;
        const progressByCourse = await trackProgressService.getProgressByCourseIds(
          detailedCourses.map((course) => course.id)
        );
        const progressSnapshot = buildCourseProgressSnapshot(
          detailedCourses,
          progressByCourse
        );
        const assignmentResponse = await assignmentService
          .getAssignments()
          .catch(() => ({ data: [] }));
        const mergedAssignments = buildMergedAssignments({
          assignmentsPayload: assignmentResponse,
          courses: detailedCourses,
        });

        const pathItems = progressSnapshot.snapshots
          .map((snapshot, index) => {
            const totalUnits = snapshot.progress.totalUnits || 0;
            const completedUnits = snapshot.progress.completedCount || 0;
            const nextUnitTitle =
              snapshot.nextUnit?.unit?.title || 'Course content';
            const recentActivity = [
              snapshot.progress.courseEndDate,
              snapshot.progress.courseStartDate,
            ]
              .filter(Boolean)
              .map((value) => new Date(value).getTime())
              .filter((value) => !Number.isNaN(value));

            return {
              id: snapshot.course.id || index + 1,
              title: snapshot.course.title,
              module: `Completed ${completedUnits} of ${totalUnits} units`,
              instructor: snapshot.course.mentorName || 'Trueminds Mentor',
              type:
                mergedAssignments.assignments.some(
                  (assignment) =>
                    assignment.courseId === snapshot.course.id &&
                    !['submitted', 'completed', 'graded'].includes(
                      String(
                        assignment?.status || assignment?.submissionStatus || 'pending'
                      )
                        .replace(/[_-]+/g, ' ')
                        .trim()
                        .toLowerCase()
                    )
                )
                  ? 'Assignment due'
                  : nextUnitTitle,
              progress: snapshot.progress.progressPercent,
              status:
                snapshot.progress.progressPercent >= 100
                  ? 'Completed'
                  : snapshot.progress.progressPercent > 0
                    ? 'In Progress'
                    : 'Not Started',
              recentActivity:
                recentActivity.length > 0 ? Math.max(...recentActivity) : 0,
            };
          })
          .sort((first, second) => second.recentActivity - first.recentActivity)
          .slice(0, 3);

        const activeCourses = progressSnapshot.snapshots.filter(
          (snapshot) => snapshot.progress.progressPercent > 0
        ).length;
        const totalCourses = progressSnapshot.snapshots.length;
        const onTrackPercentage = totalCourses
          ? Math.round((activeCourses / totalCourses) * 100)
          : 0;

        setLearningPath(pathItems);
        setLearningSummary({
          overallProgress: progressSnapshot.overallProgress,
          activeCourses,
          totalCourses,
          onTrackPercentage,
        });
        setBadges(
          deriveEarnedBadges({
            enrolledCourses: detailedCourses,
            progressSnapshot,
            mergedAssignments,
            profileData,
          })
        );
      } catch (learningError) {
        console.error('Failed to load learning path data:', learningError);
      }
    };

    fetchLearningPath();
  }, [profileData]);

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const response = await usersService.getBadges().catch(() => ({ data: [] }));
        const badgeItems =
          response?.data?.badges ||
          response?.data?.items ||
          response?.data ||
          (Array.isArray(response) ? response : []);

        if (Array.isArray(badgeItems) && badgeItems.length > 0) {
          setBadges(normalizeBadgeItems(badgeItems));
          return;
        }

        if ((profileData?.badges || []).length > 0) {
          setBadges(normalizeBadgeItems(profileData.badges || []));
          return;
        }

        setBadges((currentBadges) => currentBadges);
      } catch (badgeError) {
        console.error('Failed to load badges:', badgeError);
      }
    };

    fetchBadges();
  }, [profileData?.badges]);

  const handleSaveProfile = async () => {
    setError('');

    try {
      const payload = {
        fullName:
          `${formData.firstName} ${formData.lastName}`.trim() || undefined,
        location: formData.location,
        bio: formData.bio,
        profilePhotoUrl: formData.profilePhotoUrl || '',
      };

      await usersService.updateProfile(payload);
      await refreshProfile();
      setIsEditing(false);
    } catch (err) {
      console.error('Failed to update profile', err);
      setError(err.response?.data?.message || 'Failed to update profile');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setError('');

    compressImageFile(file)
      .then((imageDataUrl) => {
        if (typeof imageDataUrl === 'string') {
          setProfileImage(imageDataUrl);
          setFormData((prev) => ({
            ...prev,
            profilePhotoUrl: imageDataUrl,
          }));
        }
      })
      .catch((imageError) => {
        setError(imageError.message || 'Failed to process image.');
      })
      .finally(() => {
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      });
  };

  const handleAddSkill = async () => {
    const trimmedSkill = newSkill.trim();

    if (!trimmedSkill) {
      setSkillError('Enter a skill before saving.');
      return;
    }

    try {
      setSkillError('');
      await usersService.addSkill({ name: trimmedSkill });
      await refreshProfile();
      setNewSkill('');
      setIsAddingSkill(false);
    } catch (skillRequestError) {
      console.error('Failed to add skill:', skillRequestError);
      setSkillError(
        skillRequestError.response?.data?.message || 'Failed to add skill'
      );
    }
  };

  const user = {
    name:
      `${profileData?.firstName || formData.firstName} ${profileData?.lastName || formData.lastName}`.trim() ||
      'User',
    role:
      profileData?.role === 'learner'
        ? 'Intern'
        : profileData?.role === 'admin'
          ? 'Admin'
          : profileData?.role === 'mentor'
            ? 'Mentor'
            : profileData?.role || 'Intern',
    email: profileData?.email || formData.email,
    location: profileData?.location || 'No location provided',
    enrollmentDate: formattedEnrollmentDate,

    stats: [
      {
        label: 'Courses',
        value: learningSummary.totalCourses || profileData?.stats?.courses || '0',
      },
      {
        label: 'Badges',
        value: badges.length || profileData?.stats?.badges || '0',
      },
      {
        label: 'On Track',
        value: `${learningSummary.onTrackPercentage ?? profileData?.stats?.onTrackPercentage ?? 0}%`,
      },
    ],
  };


  const skillColors = [
    'bg-green-100 text-green-700',
    'bg-blue-100 text-blue-700',
    'bg-blue-50 text-blue-600',
    'bg-purple-100 text-purple-700',
    'bg-green-50 text-green-600',
  ];

  const skills = (profileData?.skills || []).map((skill, index) => ({
    name: typeof skill === 'string' ? skill : skill?.name || 'Unnamed skill',
    color: skillColors[index % skillColors.length],
  }));

  const earnedBadgesCount = badges.length;
  const totalBadgesCount = defaultBadgeCatalog.length;
  const remainingBadgesCount = Math.max(
    totalBadgesCount - earnedBadgesCount,
    0
  );

  const aboutMe = profileData?.bio || 'No bio added yet.';
  const displayedProfileImage = profileData?.profilePhotoUrl || profileImage;

  if (isLoading) {
    return <div>Loading profile...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (isEditing) {
    return (
      <div className='bg-[#F3F4F6] min-h-screen pb-12'>
        <div className='max-w-7xl mx-auto px-4 md:px-8 pt-8'>
          <button
            onClick={() => setIsEditing(false)}
            className='flex items-center gap-2 text-gray-800 font-medium mb-8 hover:text-[#426154] transition-colors'
          >
            <ChevronLeft size={20} />
            Back to Profile
          </button>

          <div className='bg-white rounded-3xl shadow-sm p-6 md:p-10'>
            <div className='mb-8 border-b border-gray-100 pb-6'>
              <h2 className='text-xl font-bold text-gray-800'>
                Edit your personal information
              </h2>
            </div>

            <div className='space-y-10'>
              {/* Photo Upload Section */}
              <div className='flex flex-col md:flex-row items-center gap-6'>
                <UserAvatar
                  src={profileImage}
                  alt='Profile'
                  firstName={formData.firstName}
                  lastName={formData.lastName}
                  name={`${formData.firstName} ${formData.lastName}`.trim()}
                  className='h-28 w-28 border-4 border-gray-50 object-cover'
                  initialsClassName='text-3xl'
                />
                <div className='flex flex-col items-center md:items-start'>
                  <input
                    type='file'
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept='image/*'
                    className='hidden'
                  />
                  <button
                    onClick={() => fileInputRef.current.click()}
                    className='border border-gray-200 px-6 py-2.5 rounded-lg flex items-center gap-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm'
                  >
                    <Camera size={18} />
                    Upload Photo
                  </button>
                  <p className='text-[11px] text-gray-400 mt-3 font-medium'>
                    JPG, PNG or GIF. Images are optimized before upload.
                  </p>
                </div>
              </div>

              {error && (
                <div className='rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600'>
                  {error}
                </div>
              )}

              {/* Form Fields */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6'>
                <div className='space-y-2'>
                  <label className='text-sm font-semibold text-gray-700'>
                    First Name
                  </label>
                  <input
                    type='text'
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className='w-full p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#426154]/20 focus:border-[#426154] outline-none transition-all placeholder-gray-300'
                    placeholder='Enter first name'
                  />
                </div>
                <div className='space-y-2'>
                  <label className='text-sm font-semibold text-gray-700'>
                    Last Name
                  </label>
                  <input
                    type='text'
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className='w-full p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#426154]/20 focus:border-[#426154] outline-none transition-all placeholder-gray-300'
                    placeholder='Enter last name'
                  />
                </div>
                <div className='space-y-2'>
                  <label className='text-sm font-semibold text-gray-700'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className='w-full p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#426154]/20 focus:border-[#426154] outline-none transition-all placeholder-gray-300'
                    placeholder='Enter email address'
                  />
                </div>
                <div className='space-y-2'>
                  <label className='text-sm font-semibold text-gray-700'>
                    Location
                  </label>
                  <input
                    type='text'
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className='w-full p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#426154]/20 focus:border-[#426154] outline-none transition-all placeholder-gray-300'
                    placeholder='Enter location'
                  />
                </div>

                <div className='space-y-2'>
                  <label className='text-sm font-semibold text-gray-700'>
                    Bio
                  </label>
                  <textarea
                    rows='4'
                    value={formData.bio}
                    onChange={(e) =>
                      setFormData({ ...formData, bio: e.target.value })
                    }
                    className='w-full resize-none p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#426154]/20 focus:border-[#426154] outline-none transition-all placeholder-gray-300'
                    placeholder='Tell us a little about yourself'
                  />
                </div>
              </div>

              {/* Action Button */}
              <div className='flex justify-center md:justify-end pt-4'>
                <button
                  onClick={handleSaveProfile}
                  className='w-full md:w-auto bg-[#607d72] text-white px-10 py-3.5 rounded-xl font-bold hover:bg-[#4d665d] transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-md'
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-[#F3F4F6] pb-12'>
      {/* Top Banner */}
      <div className='h-48 w-full bg-gradient-to-r from-[#426154] to-[#5ba085] relative'>
        <button
          onClick={() => {
            setFormData(buildProfileFormData(profileData));
            setProfileImage(profileData?.profilePhotoUrl || '');
            setIsEditing(true);
          }}
          className='absolute top-6 right-6 md:right-8 bg-white text-gray-700 px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm hover:bg-gray-50'
        >
          <Edit3 size={14} />
          Edit Profile
        </button>
      </div>

      <div className='max-w-7xl mx-auto px-4 md:px-8 -mt-16 relative z-10'>
        {/* Profile Header (Floating) */}
        <div className='flex flex-col items-center text-center mb-8'>
          <div className='relative mb-4'>
            <UserAvatar
              src={displayedProfileImage}
              alt='Profile'
              firstName={profileData?.firstName}
              lastName={profileData?.lastName}
              name={user.name}
              className='h-32 w-32 border-[6px] border-white object-cover shadow-lg'
              initialsClassName='text-4xl shadow-lg'
            />
          </div>
          <h1 className='text-2xl font-bold text-gray-800 tracking-tight mb-1'>
            {user.name}
          </h1>
          <div className='flex items-center gap-2'>
            <span className='bg-[#D1FAE5] text-[#059669] text-[10px] font-bold px-3 py-1 rounded-full capitalize border border-[#A7F3D0]'>
              {user.role}
            </span>
          </div>
        </div>

        {/* Stats Card */}
        <div className='bg-white rounded-3xl shadow-sm p-6 mb-6'>
          <div className='grid grid-cols-3 w-full'>
            {user.stats.map((stat, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center justify-center ${idx < 2 ? 'border-r border-gray-100' : ''}`}
              >
                <p className='text-2xl font-bold text-gray-800 leading-none mb-1'>
                  {stat.value}
                </p>
                <p className='text-[10px] text-gray-400 font-bold uppercase tracking-wider'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
          {/* Left Column */}
          <div className='lg:col-span-5 space-y-6'>
            {/* About Me */}
            <div className='bg-white rounded-3xl p-6 md:p-8 shadow-sm'>
              <h2 className='text-[17px] font-bold text-gray-800 mb-5'>
                About Me
              </h2>
              <div className='space-y-4'>
                <div className='space-y-4'>
                  <p className='text-gray-500 text-[13px] leading-relaxed font-medium'>
                    {aboutMe}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className='bg-white rounded-3xl p-6 md:p-8 shadow-sm'>
              <h2 className='text-[17px] font-bold text-gray-800 mb-6'>
                Contact Information
              </h2>
              <div className='space-y-6'>
                <div className='flex items-center gap-4'>
                  <div className='bg-[#F9FAFB] p-2.5 rounded-xl border border-gray-50 text-gray-400'>
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className='text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5'>
                      Email
                    </p>
                    <p className='text-[13px] text-gray-700 font-bold'>
                      {user.email}
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='bg-[#F9FAFB] p-2.5 rounded-xl border border-gray-50 text-gray-400'>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className='text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5'>
                      Location
                    </p>
                    <p className='text-[13px] text-gray-700 font-bold'>
                      {user.location}
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='bg-[#F9FAFB] p-2.5 rounded-xl border border-gray-50 text-gray-400'>
                    <Calendar size={18} />
                  </div>
                  <div>
                    <p className='text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5'>
                      Enrollment Date
                    </p>
                    <p className='text-[13px] text-gray-700 font-bold'>
                      {user.enrollmentDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Skills */}
            <div className='bg-white rounded-3xl p-6 md:p-8 shadow-sm'>
              <div className='flex justify-between items-center mb-6'>
                <h2 className='text-[17px] font-bold text-gray-800'>
                  Core Skills
                </h2>
                <button
                  onClick={() => {
                    setIsAddingSkill((currentValue) => !currentValue);
                    setSkillError('');
                  }}
                  className='text-[#059669] text-xs font-bold hover:underline flex items-center gap-1'
                >
                  <Plus size={12} />
                  Add
                </button>
              </div>
              {isAddingSkill ? (
                <div className='mb-4 space-y-2'>
                  <div className='flex flex-col gap-2 sm:flex-row'>
                    <input
                      type='text'
                      value={newSkill}
                      onChange={(event) => setNewSkill(event.target.value)}
                      placeholder='Add a new skill'
                      className='w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#426154] focus:ring-2 focus:ring-[#426154]/15'
                    />
                    <div className='flex gap-2'>
                      <button
                        onClick={handleAddSkill}
                        className='rounded-xl bg-[#607d72] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#4d665d]'
                      >
                        Save
                      </button>
                      <button
                        onClick={() => {
                          setIsAddingSkill(false);
                          setNewSkill('');
                          setSkillError('');
                        }}
                        className='rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-50'
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                  {skillError ? (
                    <p className='text-xs font-medium text-red-500'>{skillError}</p>
                  ) : null}
                </div>
              ) : null}
              <div className='flex flex-wrap gap-2'>
                {skills.length > 0 ? (
                  skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`${skill.color} text-[11px] font-bold px-4 py-2 rounded-full opacity-90`}
                    >
                      {skill.name}
                    </span>
                  ))
                ) : (
                  <p className='text-sm font-medium text-gray-400'>
                    Add your strongest skills so your profile feels complete.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className='lg:col-span-7 space-y-6'>
            {/* My Learning Path */}
            <div className='bg-white rounded-3xl shadow-sm overflow-hidden'>
              <div className='p-6 md:p-8 border-b border-gray-50 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <div className='bg-[#F9FAFB] p-2 rounded-xl text-gray-400 border border-gray-50'>
                    <BookOpen size={20} />
                  </div>
                  <h2 className='text-[17px] font-bold text-gray-800'>
                    My Learning Path
                  </h2>
                </div>
                {/* <button className='text-[11px] text-[#059669] font-bold hover:underline'>
                  View all
                </button> */}
              </div>

              <div className='p-6 md:p-8 space-y-8'>
                {learningPath.length > 0 ? learningPath.map((path) => (
                  <div key={path.id} className='space-y-4'>
                    <div className='flex items-center gap-4'>
                      <div className='h-12 w-12 bg-[#F3F4F6] rounded-xl flex items-center justify-center p-3'>
                        {/* Icon placeholder */}
                        <div className='h-full w-full bg-gray-200 rounded-sm' />
                      </div>
                      <div className='flex-1 min-w-0'>
                        <div className='flex justify-between items-start'>
                          <h3 className='text-[14px] font-bold text-gray-800 truncate pr-2'>
                            {path.title}
                          </h3>
                          <span className='text-[14px] font-bold text-gray-800'>
                            {path.progress}%
                          </span>
                        </div>
                        <p className='text-[11px] text-gray-400 font-medium'>
                          {path.module} • {path.instructor} • {path.type}
                        </p>
                      </div>
                    </div>
                    {/* Progress Bar */}
                    <div className='relative h-2 w-full bg-[#F3F4F6] rounded-full overflow-hidden'>
                      <div
                        className='absolute inset-y-0 left-0 bg-[#F59E0B] rounded-full transition-all duration-1000'
                        style={{ width: `${path.progress}%` }}
                      />
                    </div>
                    <div className='inline-block bg-[#F9FAFB] text-[#059669] text-[10px] font-bold px-3 py-1 rounded-full border border-gray-50'>
                      {path.status}
                    </div>
                    {path.id === learningPath[0]?.id && (
                      <div className='border-b border-gray-50 pt-4' />
                    )}
                  </div>
                )) : (
                  <div className='rounded-2xl bg-[#F9FAFB] p-5 text-center text-sm text-gray-500'>
                    Enroll in a course to see your learning path here.
                  </div>
                )}

                <div className='mt-10 pt-4'>
                  <div className='flex justify-between items-center mb-2'>
                    <p className='text-[11px] text-gray-400 font-bold uppercase tracking-wider'>
                      Overall Learning Progress
                    </p>
                    <p className='text-[11px] font-bold text-gray-800'>
                      {learningSummary.overallProgress}% Complete
                    </p>
                  </div>
                  <div className='relative h-2 w-full bg-[#F3F4F6] rounded-full overflow-hidden mb-4'>
                    <div
                      className='absolute inset-y-0 left-0 bg-[#059669] rounded-full'
                      style={{ width: `${learningSummary.overallProgress}%` }}
                    />
                  </div>
                  <div className='flex justify-between items-center text-[10px] text-gray-400 font-medium'>
                    <p>
                      {learningSummary.activeCourses} of {learningSummary.totalCourses}{' '}
                      enrolled courses actively progressing
                    </p>
                    <p>Internship ends April, 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements & Badges */}
            <div className='bg-white rounded-3xl p-6 md:p-8 shadow-sm'>
              <div className='flex items-center gap-3 mb-8'>
                <div className='bg-[#FEF3C7] p-2 rounded-xl text-[#D97706] border border-[#FDE68A]'>
                  <Medal size={20} />
                </div>
                <h2 className='text-[17px] font-bold text-gray-800'>
                  Achievements & Badges
                </h2>
              </div>

              <div className='grid grid-cols-4 md:grid-cols-5 gap-y-8 gap-x-4 mb-8'>
                {badges.map((badge, idx) => (
                  <div
                    key={idx}
                    className='flex flex-col items-center gap-2 group'
                  >
                    <div
                      className={`h-11 w-11 rounded-full flex items-center justify-center text-xl bg-gray-50 border border-gray-100 transition-transform group-hover:scale-110`}
                    >
                      {badge.icon}
                    </div>
                    <span className='text-[8px] font-bold text-gray-400 text-center uppercase tracking-tight'>
                      {badge.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className='flex flex-col items-center gap-4 pt-4 border-t border-gray-50'>
                <div className='flex justify-between items-center w-full px-2'>
                  <p className='text-[10px] text-gray-400 font-bold'>
                    {earnedBadgesCount} of {totalBadgesCount} badges earned ·{' '}
                    {remainingBadgesCount} remaining
                  </p>

                  <div className='flex gap-1'>
                    {[...Array(Math.max(totalBadgesCount, 1))].map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 w-1 rounded-full ${
                          i < earnedBadgesCount ? 'bg-gray-800' : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <button
                  // onClick={() => setIsBadgeModalOpen(true)}
                  className='text-[#059669] text-xs font-bold hover:underline mb-2'
                >
                  About Achievements & Badges
                </button>
              </div>
            </div>
          </div>
        </div>

        <BadgeModal
          isOpen={isBadgeModalOpen}
          onClose={() => setIsBadgeModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default Profile;
