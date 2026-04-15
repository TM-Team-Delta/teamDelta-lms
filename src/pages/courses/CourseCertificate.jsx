import { useEffect, useState } from 'react';
import {
  Award,
  ChevronLeft,
  Menu,
  PartyPopper,
  X,
} from 'lucide-react';
import { useParams } from 'react-router-dom';
import CourseLearningSidebar from '../../components/courses/CourseLearningSidebar';
import CoursePageSkeleton from '../../components/courses/CoursePageSkeleton';
import useCourseProgress from '../../hooks/useCourseProgress';
import { coursesService } from '../../services/courses';
import { extractApiData, normalizeCourse } from '../../utils/courseApi';
import { buildCertificateAsset } from '../../utils/certificateGenerator';

const downloadAsset = (asset) => {
  const blob = new Blob([asset.content], {
    type: asset.mimeType || 'text/plain',
  });
  const objectUrl = window.URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = objectUrl;
  anchor.download = asset.fileName || 'download.txt';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.URL.revokeObjectURL(objectUrl);
};

const CourseCertificate = () => {
  const { courseId } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [course, setCourse] = useState(() => {
    const cached = coursesService.peekCourseById(courseId);
    return cached ? normalizeCourse(extractApiData(cached)) : null;
  });
  const [isLoading, setIsLoading] = useState(
    () => !coursesService.peekCourseById(courseId)
  );
  const [error, setError] = useState('');
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    internshipId: '',
    confirmed: false,
  });

  useEffect(() => {
    const loadCourse = async () => {
      const cached = coursesService.peekCourseById(courseId);
      if (cached) {
        setCourse(normalizeCourse(extractApiData(cached)));
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }

      setError('');

      try {
        const response = await coursesService.getCourseById(courseId);
        setCourse(normalizeCourse(extractApiData(response)));
      } catch (requestError) {
        console.error('Failed to load course certificate page:', requestError);
        setError(
          requestError.response?.data?.message ||
            'We could not load this certificate page right now.'
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadCourse();
  }, [courseId]);

  const {
    statusByUnitId,
    isCourseCompleted,
    certificateClaim,
    claimCertificate,
  } = useCourseProgress(course);

  const handleInputChange = (fieldId, value) => {
    setFormValues((current) => ({
      ...current,
      [fieldId]: value,
    }));
  };

  useEffect(() => {
    if (!certificateClaim) return;

    setFormValues((current) => ({
      ...current,
      fullName: certificateClaim.fullName || current.fullName,
      email: certificateClaim.email || current.email,
      internshipId: certificateClaim.internshipId || current.internshipId,
      confirmed: true,
    }));
  }, [certificateClaim]);

  const submitDisabled =
    !formValues.fullName ||
    !formValues.email ||
    !formValues.internshipId ||
    !formValues.confirmed;
  const hasClaimedCertificate = Boolean(certificateClaim);

  const handleDownloadCertificate = async () => {
    if (!course || !hasClaimedCertificate) return;

    const certificateAsset = await buildCertificateAsset({
      learnerName: certificateClaim.fullName,
      courseTitle: course.title,
      startDate: null,
      endDate: certificateClaim.claimedAt,
    });

    downloadAsset(certificateAsset);
  };

  if (isLoading) {
    return <CoursePageSkeleton compact />;
  }

  if (error) {
    return (
      <section className='space-y-6 p-4 pt-0 sm:p-5 sm:pt-0 md:p-6 md:pt-0'>
        <div className='rounded-2xl bg-white p-8 text-center'>
          <h1 className='text-2xl font-semibold text-text-primary'>
            Unable to load certificate page
          </h1>
          <p className='mt-2 text-sm text-text-secondary'>{error}</p>
        </div>
      </section>
    );
  }

  if (!course) {
    return (
      <section className='space-y-6 p-4 pt-0 sm:p-5 sm:pt-0 md:p-6 md:pt-0'>
        <div className='rounded-2xl bg-white p-8 text-center'>
          <h1 className='text-2xl font-semibold text-text-primary'>Course not found</h1>
        </div>
      </section>
    );
  }

  if (!isCourseCompleted) {
    return (
      <section className='space-y-6 p-4 pt-0 sm:p-5 sm:pt-0 md:p-6 md:pt-0'>
        <div className='rounded-2xl bg-white p-8 text-center'>
          <h1 className='text-2xl font-semibold text-text-primary'>
            Certificate locked
          </h1>
          <p className='mt-2 text-sm text-text-secondary'>
            Complete every unit in this course to unlock the certificate page.
          </p>
        </div>
      </section>
    );
  }

  const sidebar = (
    <CourseLearningSidebar
      course={course}
      statusByUnitId={statusByUnitId}
      isCourseCompleted={isCourseCompleted}
      isCertificatePage
    />
  );

  return (
    <section className='space-y-5 overflow-x-hidden py-4 md:p-5 md:pt-0'>
      <div className='px-2 md:hidden'>
        <button
          type='button'
          onClick={() => setIsSidebarOpen(true)}
          className='inline-flex items-center gap-2 rounded-md border border-neutral bg-white px-3 py-2 text-sm font-medium text-text-primary'
        >
          <Menu size={18} />
          Course content
        </button>
      </div>

      <div className='grid items-start gap-0 md:-mx-5 md:grid-cols-[260px_minmax(0,1fr)] lg:-mx-6 lg:grid-cols-[280px_minmax(0,1fr)]'>
        <aside className='sticky top-4 hidden h-[calc(100vh-2rem)] self-start md:block'>
          {sidebar}
        </aside>

        <div className='min-w-0 space-y-6 bg-white p-4 md:p-6'>
          <div className='space-y-2'>
            <h1 className='text-[28px] font-semibold leading-tight text-text-primary sm:text-[32px]'>
              {course.certificate.title}
            </h1>
          </div>

          <div className='rounded-lg border border-[#e5e5e5] bg-[#fbfbfb] px-6 py-6 shadow-[0_1px_0_rgba(0,0,0,0.08)]'>
            <div className='space-y-4'>
              <h2 className='text-lg font-semibold text-text-primary'>
                {course.certificate.introCard.title}
              </h2>
              <div className='space-y-3'>
                {course.certificate.introCard.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className='max-w-4xl text-sm leading-7 text-text-secondary'
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <button
                type='button'
                onClick={() => setIsFormOpen(true)}
                className='inline-flex items-center gap-2 text-sm font-medium text-[#e7a126]'
              >
                <Award size={15} />
                {course.certificate.introCard.ctaLabel}
              </button>
            </div>
          </div>

          <div className='rounded-lg border border-[#e5e5e5] bg-[#fbfbfb] px-6 py-6 shadow-[0_1px_0_rgba(0,0,0,0.08)]'>
            <div className='space-y-4'>
              <h2 className='text-lg font-semibold text-text-primary'>
                {course.certificate.mentorCard.title}
              </h2>
              <div className='space-y-4'>
                {course.certificate.mentorCard.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className='max-w-4xl text-sm leading-7 text-text-secondary'
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <button
                type='button'
                onClick={handleDownloadCertificate}
                disabled={!hasClaimedCertificate}
                className='inline-flex items-center gap-2 text-sm font-medium text-[#e7a126] disabled:cursor-not-allowed disabled:opacity-45'
              >
                <Award size={15} />
                {course.certificate.mentorCard.downloadLabel}
              </button>
              {!hasClaimedCertificate ? (
                <p className='text-xs text-text-secondary'>
                  Claim your certificate first before downloading the personalized certificate file.
                </p>
              ) : (
                <div className='rounded-md border border-[#edd8a7] bg-[#fff8e8] px-4 py-3 text-sm text-text-secondary'>
                  <p className='font-medium text-text-primary'>
                    Certificate ready for download
                  </p>
                  <p className='mt-1'>
                    The download will use <span className='font-semibold'>{certificateClaim.fullName}</span>,{' '}
                    <span className='font-semibold'>{certificateClaim.email}</span>, and internship ID{' '}
                    <span className='font-semibold'>{certificateClaim.internshipId}</span>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {isSidebarOpen ? (
        <div
          className='fixed inset-0 z-50 bg-black/40 md:hidden'
          onClick={() => setIsSidebarOpen(false)}
        >
          <div
            className='h-full w-[280px] max-w-[85vw] bg-white shadow-xl'
            onClick={(event) => event.stopPropagation()}
          >
            <div className='flex items-center justify-between border-b border-neutral px-4 py-4'>
              <p className='text-base font-semibold text-text-primary'>Course content</p>

              <button
                type='button'
                onClick={() => setIsSidebarOpen(false)}
                className='inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral text-text-primary'
              >
                <X size={18} />
              </button>
            </div>

            {sidebar}
          </div>
        </div>
      ) : null}

      {isFormOpen ? (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4'>
          <div className='w-full max-w-xl rounded-xl bg-white p-6 shadow-xl'>
            <div className='flex items-center justify-between'>
              <h2 className='text-lg font-semibold text-text-primary'>
                {course.certificate.form.title}
              </h2>
              <button type='button' onClick={() => setIsFormOpen(false)}>
                <ChevronLeft size={18} className='text-text-primary' />
              </button>
            </div>

            <div className='mt-5 space-y-4'>
              {course.certificate.form.fields.map((field) => (
                <label key={field.id} className='block space-y-2'>
                  <span className='text-xs text-text-secondary'>{field.label}</span>
                  <input
                    value={formValues[field.id]}
                    onChange={(event) =>
                      handleInputChange(field.id, event.target.value)
                    }
                    className='w-full rounded-md border border-neutral px-3 py-2 text-sm outline-none focus:border-brand-primary'
                  />
                </label>
              ))}

              <label className='flex items-start gap-2 text-xs text-[#e7a126]'>
                <input
                  type='checkbox'
                  checked={formValues.confirmed}
                  onChange={(event) =>
                    handleInputChange('confirmed', event.target.checked)
                  }
                  className='mt-0.5'
                />
                <span>{course.certificate.form.checkboxLabel}</span>
              </label>

              <button
                type='button'
                disabled={submitDisabled}
                onClick={() => {
                  claimCertificate({
                    fullName: formValues.fullName.trim(),
                    email: formValues.email.trim(),
                    internshipId: formValues.internshipId.trim(),
                  });
                  setIsFormOpen(false);
                  setIsSuccessOpen(true);
                }}
                className='rounded-md bg-brand-primary px-5 py-2 text-sm font-medium text-white transition disabled:cursor-not-allowed disabled:opacity-50'
              >
                {course.certificate.form.submitLabel}
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {isSuccessOpen ? (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4'>
          <div className='w-full max-w-md rounded-xl bg-white p-8 text-center shadow-xl'>
            <PartyPopper size={42} className='mx-auto text-brand-accent' />
            <h2 className='mt-5 text-3xl font-semibold text-text-primary'>
              {course.certificate.form.successTitle}
            </h2>
            <p className='mt-3 text-sm leading-6 text-text-secondary'>
              {course.certificate.form.successMessage}
            </p>
            <button
              type='button'
              onClick={() => setIsSuccessOpen(false)}
              className='mt-6 rounded-md bg-brand-primary px-5 py-2 text-sm font-medium text-white transition hover:opacity-90'
            >
              {course.certificate.form.confirmLabel}
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default CourseCertificate;
