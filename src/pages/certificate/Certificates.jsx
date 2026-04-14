import React from 'react';
import { certificateData } from './CertificateData';
import { FileDown, ChevronLeft, Share2 } from 'lucide-react';
import { useState } from 'react';

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleDownload = (file) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = 'certificate';
    link.click();
  };

  const handleShare = async (file) => {
    if (navigator.share) {
      await navigator.share({
        title: 'Certificate',
        url: file,
      });
    }
  };
  return (
    <div className='px-4 py-6 sm:px-6 lg:px-8'>
      <h2 className='text-lg sm:text-xl font-semibold text-text-primary mb-2'>
        Certification
      </h2>
      <p className='text-sm text-(--color-text-secondary) mb-6'>
        View and manage your certifications, including adding new ones and
        updating existing ones.
      </p>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
        {certificateData.map((cert) => (
          <div
            key={cert.id}
            className='flex min-h-[170px] flex-col justify-between rounded-2xl bg-brand-muted p-4 shadow-md'
          >
            <div className='space-y-1.5'>
              <h3 className='text-[18px] font-bold text-text-primary'>
                {cert.name}
              </h3>
              <h4 className='text-text-primary'>{cert.date}</h4>
              <p className='text-sm text-brand-accent'>{cert.instructor}</p>
            </div>
            <div className='mt-4 flex items-center gap-2 border-t border-border pt-3'>
              <button
                onClick={() => setSelectedCert(cert)}
                className='rounded bg-button-primary px-4 py-2 text-[14px] text-white'
              >
                View Certificate
              </button>
              <button
                onClick={() => handleDownload(cert.file)}
                className='flex items-center gap-2 rounded border border-border bg-transparent px-4 py-2 text-sm text-button-primary'
              >
                Download <FileDown className='h-4 w-4' />
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedCert && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-text-secondary/30 p-3 sm:p-4 backdrop-blur-[2px]'>
          <div className='w-full max-w-[640px] overflow-hidden rounded-xl bg-white shadow-[0_24px_60px_rgba(0,0,0,0.18)]'>
            <div className='relative border-b border-neutral bg-white px-4 py-4 sm:px-6 sm:py-5'>
              <h4 className='max-w-[85%] mx-auto text-center text-lg font-bold text-text-primary sm:text-2xl'>
                {selectedCert.name}
              </h4>

              <button
                onClick={() => setSelectedCert(null)}
                className='absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-text-primary transition hover:bg-neutral sm:right-4'
              >
                <ChevronLeft className='h-4 w-4 text-text-primary sm:h-5 sm:w-5' />
              </button>
            </div>

            <div className='bg-brand-primary p-3 sm:p-4'>
              <img
                src={selectedCert.file}
                alt={selectedCert.name}
                className='mx-auto max-h-[55vh] w-full rounded-sm border bg-white object-contain sm:max-h-[60vh]'
              />
            </div>

            <div className='flex flex-col gap-2 bg-white px-4 py-3 sm:flex-row sm:justify-center sm:gap-3 sm:px-6 sm:py-4'>
              <button
                onClick={() => handleDownload(selectedCert.file)}
                className='inline-flex items-center justify-center gap-2 rounded-md bg-button-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110'
              >
                Download PDF
              </button>

              <button
                onClick={() => handleShare(selectedCert.file)}
                className='inline-flex items-center justify-center gap-2 rounded-md bg-button-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110'
              >
                <Share2 className='h-4 w-4' />
                Share
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificates;
