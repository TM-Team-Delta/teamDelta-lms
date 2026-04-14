import React, { useState, useEffect } from "react";
import { FileDown, ChevronLeft } from "lucide-react";

import {
  getCertifications,
  downloadCertificate,
  shareCertificate,
} from "../../services/certificate";

function Certificate() {
  const [certificates, setCertificates] = useState([]);
  const [selectedCert, setSelectedCert] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // FETCH
  useEffect(() => {
  const fetchCerts = async () => {
    try {
      const data = await getCertifications();
      setCertificates(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load certificates");
    } finally {
      setLoading(false);
    }
  };

  fetchCerts();
}, []);

  // DOWNLOAD (FIXED)
  const handleDownload = (id) => {
    const url = downloadCertificate(id);
    window.open(url, "_blank");
  };

  // SHARE
  const handleShare = async (id) => {
  try {
    const data = await shareCertificate(id);
    const shareUrl = data?.url;

    if (navigator.share) {
      await navigator.share({
        title: "My Certificate",
        url: shareUrl,
      });
    } else {
      alert("Share this link: " + shareUrl);
    }
  } catch (err) {
    console.error(err);
  }
};

  return (
    <div>
      <h2 className="text-lg font-semibold pt-6 mb-2 ml-4">
        Certification
      </h2>

      <p className="text-sm mb-6 ml-4">
        View and manage your certifications
      </p>

      {/* LOADING */}
      {loading && <p className="ml-4">Loading...</p>}

      {/* ERROR */}
      {error && <p className="ml-4 text-red-500">{error}</p>}

      {/* EMPTY */}
      {!loading && !error && certificates.length === 0 && (
        <p className="ml-4">No certificates available.</p>
      )}

      {/* LIST */}
      <div className="ml-4 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-[#effcef] shadow-md rounded-lg p-4 h-40"
          >
            <h3 className="text-[18px] font-bold">{cert.name}</h3>
            <h4 className="text-[16px]">{cert.date}</h4>
            <p className="text-[14px] text-[#F59E0B]">
              {cert.instructor}
            </p>

            <div className="flex gap-2 mt-4 border-t pt-2">
              <button
                onClick={() => setSelectedCert(cert)}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                View
              </button>

              <button
                onClick={() => handleDownload(cert.id)}
                className="flex items-center gap-2 border px-4 rounded"
              >
                Download <FileDown size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-full max-w-lg">

            <div className="flex justify-between p-4 border-b">
              <h4 className="font-bold text-lg">
                {selectedCert.name}
              </h4>

              <button onClick={() => setSelectedCert(null)}>
                <ChevronLeft />
              </button>
            </div>

            {/* IMAGE */}
            <img
              src={`${import.meta.env.VITE_API_BASE_URL || "http://localhost:3000"}/api/certifications/${selectedCert.id}/view`}
              alt={selectedCert.name}
              className="w-full"
            />

            {/* ACTIONS */}
            <div className="flex gap-4 justify-center p-4">
              <button
                onClick={() => handleDownload(selectedCert.id)}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Download
              </button>

              <button
                onClick={() => handleShare(selectedCert.id)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Share
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Certificate;