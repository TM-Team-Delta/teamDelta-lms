import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookOpen, Mail, MessageSquareMore, PenLine, Star } from 'lucide-react';
import MentorBreadcrumbs from '../../components/mentors/MentorBreadcrumbs';
import { courses, mentors } from '../../data/courseData';

const renderStars = (count) => {
  return [1, 2, 3, 4, 5].map((star) => (
    <Star
      key={star}
      size={14}
      className={
        star <= count
          ? 'fill-current stroke-current text-brand-accent'
          : 'stroke-current text-gray-300'
      }
    />
  ));
};

const MentorProfile = () => {
  const { mentorId } = useParams();
  const [noteInput, setNoteInput] = useState('');
  const [notes, setNotes] = useState([]);
  const allMentors = mentors[0] || [];
  const allCourses = courses[0] || [];

  const mentor = useMemo(() => {
    return allMentors.find((item) => item.id === mentorId) || null;
  }, [allMentors, mentorId]);

  const mentorCourses = useMemo(() => {
    if (!mentor) return [];

    return mentor.coursesTaught.map((courseItem) => {
      const matchingCourse = allCourses.find(
        (course) =>
          course.id === courseItem.id ||
          course.title.toLowerCase() === courseItem.title.toLowerCase()
      );

      return {
        ...courseItem,
        detailRoute: matchingCourse
          ? `/dashboard/course-detail/${matchingCourse.id}`
          : '/dashboard/courses',
      };
    });
  }, [allCourses, mentor]);

  const recentReviews = useMemo(() => {
    if (!mentor) return [];

    return mentor.reviews.slice(0, 3);
  }, [mentor]);

  const handleAddNote = () => {
    const trimmedNote = noteInput.trim();

    if (!trimmedNote) return;

    setNotes((currentNotes) => [trimmedNote, ...currentNotes]);
    setNoteInput('');
  };

  if (!mentor) {
    return (
      <section className='space-y-6 p-4 pt-0 sm:p-5 sm:pt-0 md:p-6 md:pt-0'>
        <div className='rounded-3xl bg-white p-8 text-center shadow-sm'>
          <h1 className='text-2xl font-semibold text-text-primary'>
            Mentor not found
          </h1>
          <p className='mt-2 text-sm text-text-secondary'>
            The mentor profile you are trying to open is not available right now.
          </p>
        </div>
      </section>
    );
  }

  const stats = [
    { label: 'Courses', value: mentor.stats.courses },
    { label: 'Total Students', value: `${mentor.stats.students}+` },
    {
      label: 'Reviews',
      value: mentor.stats.rating.toFixed(1),
      stars: true,
    },
  ];

  return (
    <section className='space-y-6 p-4 pt-0 sm:p-5 sm:pt-0 md:p-6 md:pt-0'>
      <MentorBreadcrumbs mentorName={mentor.name} />

      <div className='overflow-hidden bg-white'>
        <div className='bg-brand-primary px-5 py-5 sm:px-6'>
          <h1 className='text-2xl font-semibold text-white'>Mentor Profile</h1>
        </div>

        <div className='space-y-6 p-4 sm:p-6'>
          <div className='bg-brand-muted p-5 ring-1 ring-neutral sm:p-6'>
            <div className='flex flex-col gap-5 md:flex-row md:items-center md:justify-between'>
              <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
                <img
                  src={mentor.avatar}
                  alt={mentor.name}
                  className='h-24 w-24 rounded-full object-cover ring-4 ring-white'
                />

                <div className='space-y-2'>
                  <div>
                    <h2 className='text-3xl font-semibold text-brand-secondary'>
                      {mentor.name}
                    </h2>
                    <p className='text-sm font-medium text-text-primary'>
                      {mentor.title}
                    </p>
                  </div>

                  <div className='flex flex-wrap items-center gap-2 text-sm text-text-secondary'>
                    <Mail size={16} className='text-brand-secondary' />
                    <span>{mentor.email}</span>
                  </div>
                </div>
              </div>

              <button
                type='button'
                className='inline-flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 md:self-center'
              >
                <MessageSquareMore size={16} />
                {mentor.actions.primary.label}
              </button>
            </div>
          </div>

          <div className='flex flex-wrap gap-10 sm:items-center pb-10'>
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className='text-sm text-text-secondary'>{stat.label}</p>

                <div className='flex items-center gap-2'>
                  <p className='text-2xl font-semibold text-text-primary'>
                    {stat.value}
                  </p>

                  {stat.stars ? (
                    <div className='flex items-center gap-1'>
                      {renderStars(5)}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <div className='grid gap-5 lg:grid-cols-[1.1fr_1fr]'>
            <div className='space-y-5'>
              <div className='bg-brand-muted p-5 shadow-sm ring-1 ring-neutral sm:p-6'>
                <div className='space-y-4'>
                  <div className='border-b border-neutral pb-3'>
                    <h2 className='text-lg font-semibold text-brand-secondary'>
                      Bio
                    </h2>
                  </div>

                  <div className='space-y-4 text-sm leading-7 text-text-secondary'>
                    <p>{mentor.bio}</p>
                    <p>
                      With {mentor.experienceYears} years of experience,{' '}
                      {mentor.name.split(' ')[0]} helps students build strong
                      practical skills and confidence that can grow into
                      real-world career opportunities.
                    </p>
                  </div>
                </div>
              </div>

              <div className='bg-brand-muted p-5 shadow-sm ring-1 ring-neutral sm:p-6'>
                <div className='space-y-4'>
                  <div className='border-b border-neutral pb-3'>
                    <h2 className='text-lg font-semibold text-brand-secondary'>
                      Courses
                    </h2>
                  </div>

                  <div className='space-y-4'>
                    {mentorCourses.map((course) => (
                      <div
                        key={course.id}
                        className='flex flex-col gap-3 p-4 bg-white rounded-lg ring-1 ring-neutral sm:flex-row sm:items-center sm:justify-between'
                      >
                        <div className='space-y-1'>
                          <p className='font-medium text-text-primary'>
                            {course.title}
                          </p>
                          <p className='text-sm text-text-secondary'>
                            {course.students} Students
                          </p>
                        </div>

                        <Link
                          to={course.detailRoute}
                          className='inline-flex items-center justify-center rounded-lg bg-brand-primary px-4 py-2 text-sm font-medium text-white transition hover:opacity-90'
                        >
                          View Course
                        </Link>
                      </div>
                    ))}

                    {!mentorCourses.length ? (
                      <p className='text-sm text-text-secondary'>
                        No courses are linked to this mentor yet.
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            <div className='space-y-5'>
              <div className='bg-brand-muted p-5 shadow-sm ring-1 ring-neutral sm:p-6'>
                <div className='space-y-4'>
                  <div className='border-b border-neutral pb-3'>
                    <h2 className='text-lg font-semibold text-brand-secondary'>
                      Skills & Expertise
                    </h2>
                  </div>

                  <div className='flex flex-wrap gap-3'>
                    {mentor.skills.map((skill) => (
                      <span
                        key={skill}
                        className='rounded-lg border border-button-primary px-4 py-2 text-sm text-text-primary'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className='bg-brand-muted p-5 shadow-sm ring-1 ring-neutral sm:p-6'>
                <div className='space-y-4'>
                  <div className='border-b border-neutral pb-3'>
                    <h2 className='text-lg font-semibold text-brand-secondary'>
                      Recent Reviews
                    </h2>
                  </div>

                  <div className='space-y-4'>
                    {recentReviews.map((review) => (
                      <div
                        key={review.id}
                        className='flex gap-3 p-4 bg-white rounded-lg ring-1 ring-neutral'
                      >
                        <img
                          src={review.avatar}
                          alt={review.reviewer}
                          className='h-11 w-11 rounded-full object-cover'
                        />

                        <div className='min-w-0 flex-1 space-y-1'>
                          <div className='flex flex-wrap items-center justify-between gap-2'>
                            <p className='font-medium text-text-primary'>
                              {review.reviewer}
                            </p>
                            <div className='flex items-center gap-1'>
                              {renderStars(review.rating)}
                            </div>
                          </div>

                          <p className='text-sm leading-6 text-text-secondary'>
                            {review.comment}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className='bg-brand-muted p-5 shadow-sm ring-1 ring-neutral sm:p-6'>
                <div className='space-y-4'>
                  <div className='border-b border-neutral pb-3'>
                    <h2 className='text-lg font-semibold text-brand-secondary'>
                      Notes
                    </h2>
                  </div>

                  <div className='space-y-4'>
                    <div className='flex flex-col gap-3 sm:flex-row'>
                      <input
                        type='text'
                        value={noteInput}
                        onChange={(event) => setNoteInput(event.target.value)}
                        placeholder='Add a note'
                        className='h-11 flex-1 rounded-lg border border-neutral bg-white px-4 text-sm text-text-primary outline-none transition focus:border-brand-secondary'
                      />

                      <button
                        type='button'
                        onClick={handleAddNote}
                        className='inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-brand-primary px-4 text-sm font-medium text-white transition hover:opacity-90'
                      >
                        <PenLine size={16} />
                        Add Note
                      </button>
                    </div>

                    {notes.length ? (
                      <div className='space-y-3'>
                        {notes.map((note, index) => (
                          <div
                            key={`${note}-${index}`}
                            className='rounded-lg bg-white p-4 text-sm leading-6 text-text-secondary ring-1 ring-neutral'
                          >
                            {note}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className='rounded-lg bg-white p-4 text-sm text-text-secondary ring-1 ring-neutral'>
                        Your saved notes about this mentor will appear here.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-brand-muted p-5 ring-1 ring-neutral'>
            <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
              <div className='flex items-start gap-3'>
                <div className='rounded-2xl bg-white p-3 text-brand-secondary ring-1 ring-neutral'>
                  <BookOpen size={18} />
                </div>

                <div className='space-y-1'>
                  <p className='font-medium text-text-primary'>
                    Learn more from {mentor.name.split(' ')[0]}
                  </p>
                  <p className='text-sm text-text-secondary'>
                    Explore the courses they currently teach and keep building
                    your skills step by step.
                  </p>
                </div>
              </div>

              <Link
                to='/dashboard/courses'
                className='inline-flex items-center justify-center rounded-xl border border-neutral bg-white px-4 py-2.5 text-sm font-medium text-brand-secondary transition hover:bg-[#f3faf6]'
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorProfile;
