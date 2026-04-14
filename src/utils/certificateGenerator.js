import truemindsSignature from '../assets/trueminds-signature.png';

const escapeXml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const formatDate = (value) => {
  if (!value) return 'Not available';

  const parsedDate = new Date(value);

  if (Number.isNaN(parsedDate.getTime())) {
    return 'Not available';
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(parsedDate);
};

const convertAssetToDataUrl = async (assetUrl) => {
  const response = await fetch(assetUrl);
  const blob = await response.blob();

  return await new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

export const buildCertificateAsset = async ({
  learnerName,
  courseTitle,
  startDate,
  endDate,
}) => {
  const safeName = escapeXml(learnerName || 'NAME SURNAME');
  const safeCourseTitle = escapeXml(courseTitle || 'Course Title');
  const safeStartDate = escapeXml(formatDate(startDate));
  const safeEndDate = escapeXml(formatDate(endDate));
  const issueDate = escapeXml(formatDate(endDate || new Date().toISOString()));
  const signatureDataUrl = await convertAssetToDataUrl(truemindsSignature);
  const safeSignatureDataUrl = escapeXml(signatureDataUrl);

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900" role="img" aria-label="Certificate of completion">
  <defs>
    <linearGradient id="paper" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8f1db" />
      <stop offset="50%" stop-color="#fcf7ea" />
      <stop offset="100%" stop-color="#f2ead2" />
    </linearGradient>
    <linearGradient id="greenWave" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#617d66" />
      <stop offset="100%" stop-color="#2f5a48" />
    </linearGradient>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="10" flood-color="#000000" flood-opacity="0.12"/>
    </filter>
  </defs>

  <rect width="1600" height="900" fill="url(#paper)" />
  <rect x="16" y="16" width="1568" height="868" rx="18" fill="none" stroke="#6f7774" stroke-width="7" />
  <rect x="36" y="36" width="1528" height="828" rx="12" fill="none" stroke="#92988b" stroke-width="2.5" stroke-dasharray="3 8" />

  <path d="M0,745 C180,650 340,855 560,780 C770,708 875,675 1110,760 C1280,820 1430,810 1600,695 L1600,900 L0,900 Z" fill="url(#greenWave)" opacity="0.88"/>
  <path d="M0,785 C170,710 370,905 630,814 C900,720 1100,736 1330,818 C1430,853 1512,848 1600,804 L1600,900 L0,900 Z" fill="#4a6857" opacity="0.72"/>

  <g fill="none" stroke="#7b817d" stroke-width="3" opacity="0.8">
    <path d="M70 78 C110 22, 165 18, 220 58" />
    <path d="M1380 58 C1435 18, 1490 22, 1530 78" />
    <path d="M65 822 C112 862, 172 874, 222 832" />
    <path d="M1378 832 C1428 874, 1488 862, 1535 822" />
  </g>

  <g font-family="Georgia, 'Times New Roman', serif" fill="#2b2a28">
    <text x="120" y="175" font-size="22" font-weight="700">TRUEMINDS</text>
    <text x="120" y="200" font-size="12" letter-spacing="1">Research. Create. Inspire.</text>

    <text x="800" y="168" text-anchor="middle" font-size="84" font-weight="700" letter-spacing="3">CERTIFICATE</text>
    <text x="800" y="220" text-anchor="middle" font-size="38" letter-spacing="4">OF COMPLETION</text>

    <text x="800" y="330" text-anchor="middle" font-size="26">This certifies that</text>
    <text x="800" y="426" text-anchor="middle" font-size="68" font-weight="700">${safeName}</text>
    <line x1="450" y1="446" x2="1150" y2="446" stroke="#796f59" stroke-width="2"/>

    <text x="800" y="505" text-anchor="middle" font-size="30">
      has successfully completed their Internship program at Trueminds.
    </text>
    <text x="800" y="555" text-anchor="middle" font-size="34" font-weight="600">
      ${safeCourseTitle}
    </text>

    <text x="800" y="635" text-anchor="middle" font-size="25">
      From: ${safeStartDate}    To: ${safeEndDate}
    </text>
  </g>

  <g font-family="Georgia, 'Times New Roman', serif" fill="#000000">
    <line x1="220" y1="790" x2="470" y2="790" stroke="#000000" stroke-width="2" />
    <text x="345" y="782" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif"  font-size="20">${issueDate}</text>
    <text x="345" y="825" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif"  font-size="20">DATE</text>

    <line x1="1060" y1="790" x2="1310" y2="790" stroke="#000000" stroke-width="2" />
    <image href="${safeSignatureDataUrl}" x="1085" y="715" width="200" height="90" preserveAspectRatio="xMidYMid meet" />
    <text x="1185" y="825" text-anchor="middle" font-size="20">SIGNATURE</text>
  </g>

  <g filter="url(#softShadow)">
    <circle cx="800" cy="758" r="58" fill="#8f7850" />
    <circle cx="800" cy="758" r="44" fill="#bba26f" />
    <text x="800" y="747" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="13" font-weight="700" fill="#000000" letter-spacing="1">TRUEMINDS</text>
    <text x="800" y="770" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="10" font-weight="700" fill="#000000">CERTIFIED</text>
  </g>
</svg>`;

  return {
    title: `${courseTitle} certificate`,
    fileName: `${courseTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-certificate.svg`,
    content: svg,
    mimeType: 'image/svg+xml',
  };
};
