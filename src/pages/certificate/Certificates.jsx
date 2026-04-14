import { useEffect, useState } from 'react';
import { ChevronLeft, FileDown, LoaderCircle, Share2 } from 'lucide-react';
import CertificateSkeleton from '../../components/certificate/CertificateSkeleton';
import { certificateService } from '../../services/certificate';

const normalizeCertificates = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.certifications)) return payload.certifications;
  if (Array.isArray(payload?.certificates)) return payload.certificates;
  if (Array.isArray(payload?.items)) return payload.items;
  return [];
};

const formatDate = (value) => {
  if (!value) return 'Completion date unavailable';

  const parsedDate = new Date(value);
  if (Number.isNaN(parsedDate.getTime())) {
    return value;
  }

  return `Completed: ${parsedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}`;
};

const getCertificateTitle = (certificate) =>
  certificate?.name ||
  certificate?.title ||
  certificate?.courseName ||
  certificate?.course_title ||
  'Certificate';

const getCertificateInstructor = (certificate) =>
  certificate?.instructor ||
  certificate?.instructorName ||
  certificate?.mentor ||
  certificate?.issuer ||
  'Instructor unavailable';

const getCertificateDate = (certificate) =>
  formatDate(
    certificate?.date ||
      certificate?.completedAt ||
      certificate?.completionDate ||
      certificate?.issuedAt ||
      certificate?.createdAt
  );

const getPreviewPayload = (payload) => payload?.data || payload?.preview || payload;

const getShareUrl = (payload) => {
  const shareData = payload?.data || payload;

  if (shareData?.url) return shareData.url;
  if (shareData?.shareUrl) return shareData.shareUrl;
  if (shareData?.link) return shareData.link;
  if (shareData?.token) {
    return `${window.location.origin}/api/certifications/share/${shareData.token}`;
  }

  return null;
};

const getFilenameFromHeaders = (headers, fallbackName) => {
  const disposition =
    headers?.['content-disposition'] || headers?.['Content-Disposition'];

  if (disposition) {
    const utfMatch = disposition.match(/filename\*=UTF-8''([^;]+)/i);
    if (utfMatch?.[1]) {
      return decodeURIComponent(utfMatch[1]);
    }

    const plainMatch = disposition.match(/filename="?([^"]+)"?/i);
    if (plainMatch?.[1]) {
      return plainMatch[1];
    }
  }

  return `${fallbackName || 'certificate'}.pdf`;
};

const downloadBlob = (blob, filename) => {
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = objectUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(objectUrl);
};

function Certificates() {
  const [certificates, setCertificates] = useState([]);
  const [selectedCert, setSelectedCert] = useState(null);
  const [previewData, setPreviewData] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [previewMimeType, setPreviewMimeType] = useState('');
  const [loading, setLoading] = useState(true);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [downloadId, setDownloadId] = useState(null);
  const [shareId, setShareId] = useState(null);
  const [error, setError] = useState('');
  const [actionError, setActionError] = useState('');

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await certificateService.getCertificates();
        setCertificates(normalizeCertificates(response));
      } catch (err) {
        setError(
          err.response?.data?.message || 'Failed to load certificate data'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  useEffect(() => {
    if (!selectedCert?.id) return undefined;

    let objectUrl = '';
    let isMounted = true;

    const fetchPreview = async () => {
      setPreviewLoading(true);
      setActionError('');

      try {
        const [previewResponse, viewResponse] = await Promise.all([
          certificateService.getCertificatePreview(selectedCert.id),
          certificateService.viewCertificate(selectedCert.id),
        ]);

        if (!isMounted) return;

        setPreviewData(getPreviewPayload(previewResponse));

        objectUrl = URL.createObjectURL(viewResponse.data);
        setPreviewUrl(objectUrl);
        setPreviewMimeType(viewResponse.data?.type || 'application/pdf');
      } catch (err) {
        if (!isMounted) return;

        setActionError(
          err.response?.data?.message || 'Failed to load certificate preview'
        );
      } finally {
        if (isMounted) {
          setPreviewLoading(false);
        }
      }
    };

    fetchPreview();

    return () => {
      isMounted = false;

      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }

      setPreviewUrl('');
      setPreviewMimeType('');
      setPreviewData(null);
    };
  }, [selectedCert]);

  const handleCloseModal = () => {
    setSelectedCert(null);
    setActionError('');
  };                                                                                                                                                                                                    

  const handleDownload = async (certificate) => {
    setActionError('');
    setDownloadId(certificate.id);

    try {
      const response = await certificateService.downloadCertificate(certificate.id);
      const filename = getFilenameFromHeaders(
        response.headers,
        getCertificateTitle(certificate)
      );

      downloadBlob(response.data, filename);
    } catch (err) {
      setActionError(
        err.response?.data?.message || 'Failed to download certificate'
      );
    } finally {
      setDownloadId(null);
    }
  };

  const handleShare = async (certificateId) => {
    setActionError('');
    setShareId(certificateId);

    try {
      const response = await certificateService.shareCertificate(certificateId);
      const shareUrl = getShareUrl(response);

      if (!shareUrl) {
        throw new Error('No share URL returned by API');
      }

      if (navigator.share) {
        await navigator.share({
          title: 'Certificate',
          url: shareUrl,
        });
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
        alert('Share link copied to clipboard');
      } else {
        prompt('Copy this share link:', shareUrl);
      }
    } catch (err) {
      setActionError(
        err.response?.data?.message || err.message || 'Failed to share certificate'
      );
    } finally {
      setShareId(null);
    }
  };

  const modalTitle = getCertificateTitle(previewData || selectedCert);
  const modalDate = getCertificateDate(previewData || selectedCert);
  const modalInstructor = getCertificateInstructor(previewData || selectedCert);

  return (
    <div className='px-4 py-6 sm:px-6 lg:px-8'>
      <h2 className='text-lg font-semibold text-text-primary mb-2 sm:text-xl'>
        Certification
      </h2>
      <p className='text-sm text-(--color-text-secondary) mb-6'>
        View and manage your certifications.
      </p>

      {error && (
        <div className='rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700'>
          {error}
        </div>
      )}

      {!loading && !error && certificates.length === 0 && (
        <div className='rounded-xl border border-border bg-white px-4 py-8 text-center text-sm text-text-secondary'>
          No certificates available yet.
        </div>
      )}

      {loading && <CertificateSkeleton />}

      {!loading && !error && certificates.length > 0 && (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {certificates.map((cert, index) => (
            <div
              key={cert.id || cert._id || `${getCertificateTitle(cert)}-${index}`}
              className='flex min-h-[170px] flex-col justify-between rounded-2xl bg-brand-muted p-4 shadow-md'
            >
              <div className='space-y-1.5'>
                <h3 className='text-[18px] font-bold text-text-primary'>
                  {getCertificateTitle(cert)}
                </h3>
                <h4 className='text-text-primary'>{getCertificateDate(cert)}</h4>
                <p className='text-sm text-brand-accent'>
                  Instructor: {getCertificateInstructor(cert)}
                </p>
              </div>

              <div className='mt-4 flex items-center gap-2 border-t border-border pt-3'>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className='rounded bg-button-primary px-4 py-2 text-[14px] text-white'
                >
                  View Certificate
                </button>

                <button
                  onClick={() => handleDownload(cert)}
                  disabled={downloadId === cert.id}
                  className='flex items-center gap-2 rounded border border-border bg-transparent px-4 py-2 text-sm text-button-primary disabled:cursor-not-allowed disabled:opacity-70'
                >
                  {downloadId === cert.id ? 'Downloading...' : 'Download'}
                  <FileDown className='h-4 w-4' />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedCert && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-text-secondary/30 p-3 sm:p-4 backdrop-blur-[2px]'>
          <div className='w-full max-w-[760px] overflow-hidden rounded-xl bg-white shadow-[0_24px_60px_rgba(0,0,0,0.18)]'>
            <div className='relative border-b border-neutral bg-white px-4 py-4 sm:px-6 sm:py-5'>
              <h4 className='max-w-[85%] mx-auto text-center text-lg font-bold text-text-primary sm:text-2xl'>
                {modalTitle}
              </h4>

              <button
                onClick={handleCloseModal}
                className='absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-text-primary transition hover:bg-neutral sm:right-4'
              >
                <ChevronLeft className='h-4 w-4 text-text-primary sm:h-5 sm:w-5' />
              </button>
            </div>

            <div className='space-y-2 border-b border-border bg-white px-4 py-3 text-sm text-text-secondary sm:px-6'>
              <p>{modalDate}</p>
              <p>Instructor: {modalInstructor}</p>
              {actionError && <p className='text-red-600'>{actionError}</p>}
            </div>

            <div className='bg-brand-primary p-3 sm:p-4'>
              {previewLoading ? (
                <div className='flex min-h-[420px] items-center justify-center gap-2 rounded-sm border bg-white text-sm text-text-secondary'>
                  <LoaderCircle className='h-4 w-4 animate-spin' />
                  Loading certificate preview...
                </div>
              ) : previewUrl ? (
                previewMimeType.includes('pdf') ? (
                  <iframe
                    src={previewUrl}
                    title={modalTitle}
                    className='mx-auto h-[55vh] w-full rounded-sm border bg-white sm:h-[60vh]'
                  />
                ) : (
                  <img
                    src={previewUrl}
                    alt={modalTitle}
                    className='mx-auto max-h-[55vh] w-full rounded-sm border bg-white object-contain sm:max-h-[60vh]'
                  />
                )
              ) : (
                <div className='flex min-h-[420px] items-center justify-center rounded-sm border bg-white text-sm text-text-secondary'>
                  Certificate preview unavailable.
                </div>
              )}
            </div>

            <div className='flex flex-col gap-2 bg-white px-4 py-3 sm:flex-row sm:justify-center sm:gap-3 sm:px-6 sm:py-4'>
              <button
                onClick={() => handleDownload(selectedCert)}
                disabled={downloadId === selectedCert.id}
                className='inline-flex items-center justify-center gap-2 rounded-md bg-button-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70'
              >
                {downloadId === selectedCert.id ? 'Downloading...' : 'Download PDF'}
              </button>

              <button
                onClick={() => handleShare(selectedCert.id)}
                disabled={shareId === selectedCert.id}
                className='inline-flex items-center justify-center gap-2 rounded-md bg-button-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70'
              >
                <Share2 className='h-4 w-4' />
                {shareId === selectedCert.id ? 'Sharing...' : 'Share'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificates;
