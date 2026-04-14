import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ExternalLink, LoaderCircle, UploadCloud, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import AssignmentSkeleton from '../../components/assignment/AssignmentSkeleton';
import { assignmentService } from '../../services/assignment';
import { coursesService } from '../../services/courses';
import { dashboardService } from '../../services/dashboard';
import { normalizeCourseList } from '../../utils/courseApi';
import {
  buildMergedAssignments,
  getAssignmentStatus,
  markFallbackAssignmentSubmitted,
} from '../../utils/assignmentData';
import { removeSessionCache } from '../../utils/sessionCache';

const emptySummary = {
  total: 0,
  submitted: 0,
  pending: 0,
};

const buildCachedAssignmentView = () => {
  const cachedAssignments = assignmentService.peekAssignments();

  if (!cachedAssignments) {
    return {
      assignments: [],
      summary: emptySummary,
      hasCachedData: false,
    };
  }

  const cachedEnrolled = coursesService.peekEnrolledCourses();
  const enrolledCourses = cachedEnrolled ? normalizeCourseList(cachedEnrolled) : [];
  const detailedCourses =
    enrolledCourses.length > 0
      ? enrolledCourses
          .map((course) => {
            const cachedDetail = coursesService.peekCourseById(course.id);
            return cachedDetail
              ? normalizeCourseList({ data: [cachedDetail?.data || cachedDetail] })[0]
              : null;
          })
          .filter(Boolean)
      : [];

  const merged = buildMergedAssignments({
    assignmentsPayload: cachedAssignments,
    courses: detailedCourses,
  });

  return {
    assignments: merged.assignments,
    summary: merged.summary || emptySummary,
    hasCachedData: true,
  };
};

const normalizeStatus = getAssignmentStatus;

const formatStatusLabel = (status) =>
  status.replace(/\b\w/g, (char) => char.toUpperCase());

const getAssignmentId = (assignment) => assignment?.id || assignment?._id;

const getLessonTitle = (assignment) =>
  assignment?.lessonTitle ||
  assignment?.lessonName ||
  assignment?.title ||
  'Untitled assignment';

const getAssignmentDescription = (assignment) =>
  assignment?.description || assignment?.instructions || 'No description provided.';

const getAssignmentDueDate = (assignment) =>
  assignment?.dueDate || assignment?.deadline || 'No due date';

const isResubmittable = (status) =>
  ['needs resubmission', 'resubmit', 'rejected', 'returned'].includes(status);

const isSubmittable = (status) =>
  status === 'pending' || status === 'not submitted' || isResubmittable(status);

const getActionLabel = (status) =>
  isResubmittable(status) ? 'Resubmit Assignment' : 'Submit Assignment';

const getStatusClasses = (status) => {
  if (isResubmittable(status)) {
    return 'bg-amber-100 text-amber-700';
  }

  if (isSubmittable(status)) {
    return 'bg-[#FFF4D6] text-[#8C6B00]';
  }

  return 'bg-[#E8ECF3] text-[#687385]';
};

const Assignments = () => {
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const cachedView = buildCachedAssignmentView();
  const [assignments, setAssignments] = useState(() => cachedView.assignments);
  const [summary, setSummary] = useState(() => cachedView.summary);
  const [loading, setLoading] = useState(() => !cachedView.hasCachedData);
  const [error, setError] = useState('');

  const fetchAssignments = useCallback(async () => {
    try {
      const nextCachedView = buildCachedAssignmentView();

      if (nextCachedView.hasCachedData) {
        setAssignments(nextCachedView.assignments);
        setSummary(nextCachedView.summary);
        setLoading(false);
      } else {
        setLoading(true);
      }

      setError('');

      const [assignmentResponse, enrolledCoursesResponse] = await Promise.all([
        assignmentService.getAssignments().catch(() => ({ data: [] })),
        coursesService.getEnrolledCourses().catch(() => ({ data: [] })),
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
          ? detailedResponses.map((item) =>
              normalizeCourseList({ data: [item?.data || item] })[0]
            )
          : enrolledCourses;
      const merged = buildMergedAssignments({
        assignmentsPayload: assignmentResponse,
        courses: detailedCourses,
      });

      setAssignments(merged.assignments);
      setSummary(merged.summary || emptySummary);
    } catch (err) {
      setError(
        err.response?.data?.message || 'Failed to load assignments'
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAssignments();
  }, [fetchAssignments]);

  const openSubmitModal = (assignment) => {
    setSelectedAssignment(assignment);
    setShowSubmitModal(true);
  };

  const closeSubmitModal = () => {
    setShowSubmitModal(false);
    setSelectedAssignment(null);
  };

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='bg-[#F9FAFB] h-16 sm:h-20 border-b border-gray-200'></div>

      <div className='p-4 sm:p-6 lg:p-8'>
        <h2 className='text-xl font-semibold text-gray-900'>Assignments</h2>
        <p className='mt-1 text-sm text-gray-500'>
          Track pending work, review your submissions, and upload assignment files.
        </p>

        {error && (
          <div className='mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700'>
            {error}
          </div>
        )}

        {loading && <AssignmentSkeleton />}

        {!loading && !error && (
          <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 mt-6'>
              <div className='bg-[#F3FDF8] rounded-lg p-5 border border-gray-200'>
                <p className='text-sm text-gray-600'>Total Assignments</p>
                <p className='text-lg font-semibold text-gray-800'>
                  {summary.total}
                </p>
              </div>

              <div className='bg-[#F3FDF8] rounded-lg p-5 border border-gray-200'>
                <p className='text-sm text-gray-600'>Assignments Completed</p>
                <p className='text-lg font-semibold text-gray-800'>
                  {summary.submitted}
                </p>
              </div>

              <div className='bg-[#F3FDF8] rounded-lg p-5 border border-gray-200'>
                <p className='text-sm text-gray-600'>Assignments Pending</p>
                <p className='text-lg font-semibold text-gray-800'>
                  {summary.pending}
                </p>
              </div>
            </div>

            {assignments.length === 0 ? (
              <div className='rounded-xl border border-gray-200 bg-white px-4 py-10 text-center text-sm text-gray-500'>
                No assignments available right now.
              </div>
            ) : (
              <>
                <div className='hidden overflow-x-auto rounded-lg border border-gray-300 bg-white md:block'>
                  <table className='w-full text-sm'>
                    <thead>
                      <tr className='border-b text-gray-600'>
                        <th className='px-6 py-4 text-left'>Lesson title:</th>
                        <th className='px-6 py-4 text-left'>Status</th>
                        <th className='px-6 py-4 text-left'>Due date</th>
                        <th className='px-6 py-4 text-left'>Assignment:</th>
                        <th className='px-6 py-4'></th>
                      </tr>
                    </thead>

                    <tbody>
                      {assignments.map((assignment) => {
                        const status = normalizeStatus(assignment);
                        const canSubmit =
                          assignment?.canSubmit !== false && isSubmittable(status);

                        return (
                          <tr
                            key={getAssignmentId(assignment)}
                            className='border-b last:border-b-0'
                          >
                            <td className='px-6 py-4 text-gray-700'>
                              {getLessonTitle(assignment)}
                            </td>

                            <td className='px-6 py-4 text-gray-600'>
                              <span
                                className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${getStatusClasses(
                                  status
                                )}`}
                              >
                                {formatStatusLabel(status)}
                              </span>
                            </td>

                            <td className='px-6 py-4 text-gray-600'>
                              {getAssignmentDueDate(assignment)}
                            </td>

                            <td className='px-6 py-4 text-gray-600'>
                              {getAssignmentDescription(assignment)}
                            </td>

                            <td className='px-6 py-4 text-right'>
                              {canSubmit ? (
                                <button
                                  onClick={() => openSubmitModal(assignment)}
                                  className='rounded-md bg-button-primary px-4 py-2 text-xs text-white hover:bg-[#365246]'
                                >
                                  {getActionLabel(status)}
                                </button>
                              ) : assignment?.lessonLink ? (
                                <Link
                                  to={assignment.lessonLink}
                                  className='inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-xs text-gray-700 transition hover:bg-gray-50'
                                >
                                  View in Lesson
                                  <ExternalLink className='h-3.5 w-3.5' />
                                </Link>
                              ) : (
                                <button className='cursor-default rounded-md bg-[#E8ECF3] px-4 py-2 text-xs text-[#687385]'>
                                  Assignment Submitted
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className='space-y-4 md:hidden'>
                  {assignments.map((assignment) => {
                    const status = normalizeStatus(assignment);
                    const canSubmit =
                      assignment?.canSubmit !== false && isSubmittable(status);

                    return (
                      <div
                        key={getAssignmentId(assignment)}
                        className='bg-white border border-gray-200 rounded-xl p-4 shadow-sm'
                      >
                        <h3 className='text-sm font-semibold text-gray-800 mb-2'>
                          {getLessonTitle(assignment)}
                        </h3>

                        <p className='text-xs text-gray-600 mb-3'>
                          {getAssignmentDescription(assignment)}
                        </p>

                        <div className='mb-3 flex justify-between gap-3 text-xs text-gray-500'>
                          <span>{getAssignmentDueDate(assignment)}</span>
                          <span
                            className={`px-2 py-1 rounded-full text-[10px] font-medium ${getStatusClasses(
                              status
                            )}`}
                          >
                            {formatStatusLabel(status)}
                          </span>
                        </div>

                        {canSubmit ? (
                          <button
                            onClick={() => openSubmitModal(assignment)}
                            className='w-full bg-button-primary text-white py-2 rounded-md text-xs'
                          >
                            {getActionLabel(status)}
                          </button>
                        ) : assignment?.lessonLink ? (
                          <Link
                            to={assignment.lessonLink}
                            className='inline-flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 py-2 text-xs text-gray-700'
                          >
                            View in Lesson
                            <ExternalLink className='h-3.5 w-3.5' />
                          </Link>
                        ) : (
                          <button className='w-full rounded-md bg-[#E8ECF3] py-2 text-xs text-[#687385]'>
                            Assignment Submitted
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </>
        )}
      </div>

      {showSubmitModal && selectedAssignment && (
        <Modal
          assignment={selectedAssignment}
          onClose={closeSubmitModal}
          onSuccess={fetchAssignments}
        />
      )}
    </div>
  );
};

export default Assignments;

const Modal = ({ assignment, onClose, onSuccess }) => {
  const [file, setFile] = useState(null);
  const [link, setLink] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const fileRef = useRef();

  const status = normalizeStatus(assignment);
  const submitLabel = getActionLabel(status);

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    const valid = ['application/pdf', 'image/png', 'image/jpeg'];
    if (!valid.includes(selectedFile.type)) {
      setError('Only PDF, PNG, and JPEG files are allowed.');
      return;
    }

    if (selectedFile.size > 12 * 1024 * 1024) {
      setError('Max file size is 12MB.');
      return;
    }

    setError('');
    setFile(selectedFile);
  };

  const handleSubmit = async () => {
    if (!link && !file) {
      setError('Add a link or upload a file before submitting.');
      return;
    }

    try {
      setSubmitting(true);
      setError('');

      if (isResubmittable(status)) {
        await assignmentService.resubmitAssignment(getAssignmentId(assignment), {
          link,
          file,
        });
      } else if (assignment?.source === 'fallback') {
        markFallbackAssignmentSubmitted(getAssignmentId(assignment), {
          link,
          file,
        });
      } else {
        await assignmentService.submitAssignment(getAssignmentId(assignment), {
          link,
          file,
        });
      }

      dashboardService.clearDashboardCache?.();
      removeSessionCache('trueminds-dashboard-view');
      await onSuccess();
      onClose();
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || 'Failed to submit assignment'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-2'>
      <div className='bg-white w-full max-w-lg rounded-2xl shadow-xl p-6'>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-lg font-semibold'>{submitLabel}</h3>
          <button
            onClick={onClose}
            className='rounded-full p-1 text-gray-500 transition hover:bg-gray-100'
          >
            <X className='h-5 w-5' />
          </button>
        </div>

        <p className='text-sm text-gray-500 mb-4'>{getLessonTitle(assignment)}</p>

        {error && (
          <div className='mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700'>
            {error}
          </div>
        )}

        <input
          value={link}
          onChange={(event) => setLink(event.target.value)}
          placeholder='Paste assignment link'
          className='w-full mb-4 p-3 border rounded-lg'
        />

        <div
          onClick={() => fileRef.current?.click()}
          className='border rounded-lg p-6 text-center cursor-pointer transition hover:border-gray-400'
        >
          <UploadCloud className='mx-auto mb-2' />
          <p className='text-sm text-gray-700'>
            {file ? file.name : 'Click to upload PDF, PNG, or JPEG'}
          </p>
          <p className='mt-1 text-xs text-gray-500'>Maximum file size: 12MB</p>
        </div>

        <input
          type='file'
          hidden
          ref={fileRef}
          onChange={(event) => handleFile(event.target.files?.[0])}
        />

        <button
          onClick={handleSubmit}
          disabled={submitting}
          className='mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-button-primary py-2 text-white disabled:cursor-not-allowed disabled:opacity-70'
        >
          {submitting && <LoaderCircle className='h-4 w-4 animate-spin' />}
          {submitting ? 'Submitting...' : submitLabel}
        </button>
      </div>
    </div>
  );
};
