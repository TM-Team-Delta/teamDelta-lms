const lessonDurations = ['8 mins', '10 mins', '12 mins', '14 mins', '16 mins'];
const moduleSummaryTimes = ['1 hr 20 mins', '1 hr 25 mins', '1 hr 30 mins'];

const courseVideoLibrary = {
  'ui-ux-design': [
    'https://www.youtube.com/watch?v=Ovj4hFxko7c',
    'https://www.youtube.com/watch?v=c9Wg6Cb_YlU',
    'https://www.youtube.com/watch?v=FTFaQWZBqQ8',
    'https://www.youtube.com/watch?v=68w2VwalD5w',
  ],
  'graphics-design': [
    'https://www.youtube.com/watch?v=IyR_uYsRdPs',
    'https://www.youtube.com/watch?v=3YqQvRz1qW4',
    'https://www.youtube.com/watch?v=Unzc731iCUY',
    'https://www.youtube.com/watch?v=2QeY8VbK4xA',
  ],
  'full-stack-development': [
    'https://www.youtube.com/watch?v=nu_pCVPKzTk',
    'https://www.youtube.com/watch?v=SqcY0GlETPk',
    'https://www.youtube.com/watch?v=Oe421EPjeBE',
    'https://www.youtube.com/watch?v=ofme2o29ngU',
  ],
  'frontend-development': [
    'https://www.youtube.com/watch?v=G3e-cpL7ofc',
    'https://www.youtube.com/watch?v=OXGznpKZ_sA',
    'https://www.youtube.com/watch?v=PkZNo7MFNFg',
    'https://www.youtube.com/watch?v=bMknfKXIFA8',
  ],
  'blockchain-development': [
    'https://www.youtube.com/watch?v=gyMwXuJrbJQ',
    'https://www.youtube.com/watch?v=M576WGiDBdQ',
    'https://www.youtube.com/watch?v=ipwxYa-F1uY',
    'https://www.youtube.com/watch?v=8jI1TuEaTro',
  ],
  'big-data-cloud-analytics': [
    'https://www.youtube.com/watch?v=VGio4TIO5cY',
    'https://www.youtube.com/watch?v=AA3u6D6xM3Q',
    'https://www.youtube.com/watch?v=qz0aGYrrlhU',
    'https://www.youtube.com/watch?v=LHBE6Q9XlzI',
  ],
  'project-management': [
    'https://www.youtube.com/watch?v=7iJ5R-fM6Yk',
    'https://www.youtube.com/watch?v=ZKOL-rZ79gs',
    'https://www.youtube.com/watch?v=H2k7MZl1f3Y',
    'https://www.youtube.com/watch?v=4J0xFUyz1nw',
  ],
  'immersion-design': [
    'https://www.youtube.com/watch?v=1GZ8Q3gQqQ4',
    'https://www.youtube.com/watch?v=1pJ5JkJ0hS8',
    'https://www.youtube.com/watch?v=9QxwH4F9C0A',
    'https://www.youtube.com/watch?v=H63RBOv02u4',
  ],
  'business-analytics': [
    'https://www.youtube.com/watch?v=9NUjHBNWe9M',
    'https://www.youtube.com/watch?v=0KZmhGY3Qag',
    'https://www.youtube.com/watch?v=kB4U7qY7s2Q',
    'https://www.youtube.com/watch?v=s0v4Uo5Qm7o',
  ],
  'branding-business-strategy': [
    'https://www.youtube.com/watch?v=E8QJ6tM4Y2w',
    'https://www.youtube.com/watch?v=9D7r1pQmC0M',
    'https://www.youtube.com/watch?v=7hL2Qx5gQ8Q',
    'https://www.youtube.com/watch?v=8J4cGm2E7sY',
  ],
  'data-analysis': [
    'https://www.youtube.com/watch?v=r-uOLxNrNk8',
    'https://www.youtube.com/watch?v=7S_tz1z_5bA',
    'https://www.youtube.com/watch?v=vmEHCJofslg',
    'https://www.youtube.com/watch?v=GpQoQxjYfng',
  ],
  'data-visualization': [
    'https://www.youtube.com/watch?v=DQqot_7Ctus',
    'https://www.youtube.com/watch?v=FwjaHCVNBWA',
    'https://www.youtube.com/watch?v=WdCltDhmRLo',
    'https://www.youtube.com/watch?v=h2CGq7c9C6A',
  ],
};

const courseBlueprints = {
  'ui-ux-design': [
    {
      title: 'UX Foundations',
      units: [
        'Understanding UI and UX',
        'Design Thinking Basics',
        'User Research Methods',
        'Creating User Personas',
        'Journey Mapping Essentials',
      ],
    },
    {
      title: 'Experience Planning',
      units: [
        'Information Architecture',
        'User Flow Mapping',
        'Task Analysis for Interfaces',
        'Content Prioritization',
        'Writing Effective UX Goals',
      ],
    },
    {
      title: 'Interface Design Systems',
      units: [
        'Wireframing Fundamentals',
        'Layout Grids and Spacing',
        'Color and Typography for UI',
        'Components and Design States',
        'Accessibility in Product Design',
      ],
    },
    {
      title: 'Prototyping and Testing',
      units: [
        'Interactive Prototyping in Figma',
        'Usability Testing Scripts',
        'Moderated Interview Sessions',
        'Research Synthesis and Insights',
        'Iterating from Feedback',
      ],
    },
    {
      title: 'Product Delivery',
      units: [
        'Design Handoff to Developers',
        'Working with Product Teams',
        'Writing a UX Case Study',
        'Presenting Design Decisions',
        'Final Product Redesign',
      ],
    },
  ],
  'graphics-design': [
    {
      title: 'Design Principles',
      units: [
        'Visual Hierarchy Basics',
        'Typography Pairing',
        'Color Theory for Brands',
        'Composition and Balance',
        'Design Critique Fundamentals',
      ],
    },
    {
      title: 'Design Tools Workflow',
      units: [
        'Canva Workflow Essentials',
        'Photoshop Layers and Masks',
        'Illustrator Shapes and Paths',
        'Asset Export and File Prep',
        'Working with Templates',
      ],
    },
    {
      title: 'Brand Asset Creation',
      units: [
        'Logo Layout Concepts',
        'Social Media Post Systems',
        'Poster Design Structure',
        'Presentation Graphics',
        'Simple Brand Guidelines',
      ],
    },
    {
      title: 'Campaign and Portfolio',
      units: [
        'Campaign Visual Direction',
        'Designing for Different Formats',
        'Mockups and Presentation Boards',
        'Portfolio Project Selection',
        'Final Mini Brand Pack',
      ],
    },
  ],
  'full-stack-development': [
    {
      title: 'Web Foundations',
      units: [
        'HTML Page Structure',
        'CSS Layout Fundamentals',
        'JavaScript Core Syntax',
        'Responsive Web Basics',
        'Frontend Debugging Workflow',
      ],
    },
    {
      title: 'Frontend Engineering',
      units: [
        'React Components and Props',
        'Managing State in React',
        'Forms and User Input',
        'Routing in Single Page Apps',
        'Frontend API Integration',
      ],
    },
    {
      title: 'Backend APIs',
      units: [
        'Node.js Runtime Basics',
        'Express Routing and Middleware',
        'REST API Design',
        'Authentication Fundamentals',
        'Error Handling and Validation',
      ],
    },
    {
      title: 'Data and Security',
      units: [
        'Database Modeling',
        'MongoDB CRUD Operations',
        'SQL vs NoSQL Decisions',
        'Environment Variables and Secrets',
        'Testing API Endpoints',
      ],
    },
    {
      title: 'Deployment and Capstone',
      units: [
        'Deploying Frontend Applications',
        'Deploying Backend Services',
        'Connecting Full-Stack Environments',
        'Monitoring and Bug Fixing',
        'Final Full-Stack Project',
      ],
    },
  ],
  'frontend-development': [
    {
      title: 'Frontend Foundations',
      units: [
        'Semantic HTML Structure',
        'CSS Selectors and Styling',
        'Box Model and Positioning',
        'Flexbox and Grid Layouts',
        'Responsive Page Planning',
      ],
    },
    {
      title: 'UI Styling Systems',
      units: [
        'Design Tokens and Variables',
        'Typography for Interfaces',
        'Color and Contrast Basics',
        'Spacing and Layout Rhythm',
        'Reusable UI Patterns',
      ],
    },
    {
      title: 'JavaScript for Interfaces',
      units: [
        'DOM Selection and Events',
        'Forms and Validation',
        'State in Small Interfaces',
        'Async Data Fetching',
        'Interactive Component Logic',
      ],
    },
    {
      title: 'Modern React Workflow',
      units: [
        'React JSX and Components',
        'Props and Component Composition',
        'useState and UI Updates',
        'Rendering Lists and Conditions',
        'Accessible React Patterns',
      ],
    },
    {
      title: 'Project Delivery',
      units: [
        'Planning a Frontend Build',
        'Building a Responsive Landing Page',
        'Connecting Live Data',
        'Polishing and QA',
        'Final Frontend Showcase',
      ],
    },
  ],
  'blockchain-development': [
    {
      title: 'Blockchain Foundations',
      units: [
        'How Blockchain Works',
        'Consensus and Decentralization',
        'Tokens and Digital Ownership',
        'Wallet Basics',
        'Transactions and Gas Fees',
      ],
    },
    {
      title: 'Smart Contract Development',
      units: [
        'Solidity Syntax Basics',
        'Writing Contracts in Remix',
        'Contract State and Functions',
        'Deploying to a Test Network',
        'Reading Contract Events',
      ],
    },
    {
      title: 'Security and Reliability',
      units: [
        'Common Smart Contract Risks',
        'Testing Smart Contracts',
        'Access Control Patterns',
        'Using OpenZeppelin Libraries',
        'Security Review Basics',
      ],
    },
    {
      title: 'Web3 App Experience',
      units: [
        'Connecting Wallets in a dApp',
        'Handling Transaction States',
        'Designing Trustworthy dApp Flows',
        'Reading Blockchain Data',
        'Frontend Web3 Integration',
      ],
    },
    {
      title: 'Web3 Project Build',
      units: [
        'Defining a Web3 Product Idea',
        'Scoping Smart Contract Features',
        'Planning User Wallet Flows',
        'Presenting a dApp Prototype',
        'Final Mini Web3 Project',
      ],
    },
  ],
  'big-data-cloud-analytics': [
    {
      title: 'Data Foundations',
      units: [
        'Modern Data Team Roles',
        'Data Warehouses and Lakes',
        'Structured vs Unstructured Data',
        'Cloud Analytics Terminology',
        'Planning a Data Workflow',
      ],
    },
    {
      title: 'SQL and Warehousing',
      units: [
        'SQL Query Essentials',
        'Joins and Aggregations',
        'Window Functions Basics',
        'Modeling Reporting Tables',
        'Query Performance Thinking',
      ],
    },
    {
      title: 'Cloud Platforms',
      units: [
        'BigQuery Fundamentals',
        'Data Storage on AWS',
        'Data Pipelines in the Cloud',
        'Access Control and Permissions',
        'Cost-Aware Analytics Setup',
      ],
    },
    {
      title: 'ETL and Automation',
      units: [
        'ETL Workflow Design',
        'Python for Data Pipelines',
        'Scheduling and Orchestration',
        'Data Quality Monitoring',
        'Pipeline Failure Handling',
      ],
    },
    {
      title: 'Analytics Delivery',
      units: [
        'Designing a Reporting Dataset',
        'Preparing Stakeholder Metrics',
        'Building a Cloud Analytics Case',
        'Documenting Data Decisions',
        'Final Cloud Analytics Project',
      ],
    },
  ],
  'project-management': [
    {
      title: 'Project Foundations',
      units: [
        'Project Life Cycle Basics',
        'Roles in a Project Team',
        'Defining Success Criteria',
        'Project Charter Essentials',
        'Choosing the Right Delivery Style',
      ],
    },
    {
      title: 'Planning and Scope',
      units: [
        'Scope Definition Techniques',
        'Work Breakdown Structures',
        'Timeline and Milestone Planning',
        'Estimating Effort and Budget',
        'Managing Scope Changes',
      ],
    },
    {
      title: 'Agile Delivery',
      units: [
        'Scrum Roles and Ceremonies',
        'Writing User Stories',
        'Backlog Prioritization',
        'Sprint Planning Workflow',
        'Retrospectives That Improve Delivery',
      ],
    },
    {
      title: 'Communication and Risk',
      units: [
        'Stakeholder Mapping',
        'Status Reporting',
        'Risk Identification',
        'Issue Escalation',
        'Decision Logs and Documentation',
      ],
    },
    {
      title: 'Delivery and Closeout',
      units: [
        'Tracking Progress and Metrics',
        'Managing Quality Checks',
        'Project Handover',
        'Lessons Learned Reviews',
        'Final Project Delivery Plan',
      ],
    },
  ],
  'immersion-design': [
    {
      title: 'XR Foundations',
      units: [
        'What Immersive Design Covers',
        'AR vs VR Experiences',
        'Spatial User Needs',
        'Storytelling in Immersive Media',
        'Designing for Presence',
      ],
    },
    {
      title: 'Spatial Experience Planning',
      units: [
        'Mapping 3D User Journeys',
        'Interaction Zones and Cues',
        'Comfort and Motion Principles',
        'Environment Moodboarding',
        'Spatial Information Architecture',
      ],
    },
    {
      title: 'Prototype and Interaction',
      units: [
        'Sketching Immersive Concepts',
        'Storyboarding XR Flows',
        'Interface Panels in 3D Space',
        'Gesture and Controller Basics',
        'Testing Spatial Prototypes',
      ],
    },
    {
      title: 'Portfolio and Delivery',
      units: [
        'Preparing an XR Concept Deck',
        'Communicating Technical Constraints',
        'Presenting Immersive Design Decisions',
        'Case Study Documentation',
        'Final Immersive Experience Concept',
      ],
    },
  ],
  'business-analytics': [
    {
      title: 'Business Problem Framing',
      units: [
        'Turning Questions into Analysis',
        'Business Goals and Outcomes',
        'Selecting Useful Metrics',
        'Defining Assumptions Clearly',
        'Building a KPI Starter Sheet',
      ],
    },
    {
      title: 'Measurement and Data Inputs',
      units: [
        'Leading and Lagging Indicators',
        'Customer Funnel Metrics',
        'Operational KPI Design',
        'Data Source Mapping',
        'Metric Quality Checks',
      ],
    },
    {
      title: 'Insight Development',
      units: [
        'Interpreting Patterns in Data',
        'Finding Root Causes',
        'Writing Decision-Ready Insights',
        'Recommendation Prioritization',
        'Trade-Off Thinking',
      ],
    },
    {
      title: 'Communication and Cases',
      units: [
        'Insight Memos for Stakeholders',
        'Presenting Options to Leadership',
        'Storylining a Business Case',
        'Building a Recommendation Deck',
        'Final Business Analytics Case',
      ],
    },
  ],
  'branding-business-strategy': [
    {
      title: 'Brand Strategy Basics',
      units: [
        'What Brand Strategy Solves',
        'Business Goals and Brand Direction',
        'Brand Purpose and Promise',
        'Competitive Context Mapping',
        'Brand Touchpoints Overview',
      ],
    },
    {
      title: 'Audience and Positioning',
      units: [
        'Audience Research Basics',
        'Segmentation and Personas',
        'Category and Market Framing',
        'Writing Positioning Statements',
        'Value Proposition Design',
      ],
    },
    {
      title: 'Identity and Messaging',
      units: [
        'Translating Strategy into Identity',
        'Brand Voice Guidelines',
        'Messaging Hierarchy',
        'Campaign Narrative Planning',
        'Consistency Across Channels',
      ],
    },
    {
      title: 'Strategy Application',
      units: [
        'Brand Audit Walkthrough',
        'Building a Strategy Starter Pack',
        'Evaluating Brand Fit',
        'Presenting a Brand Direction',
        'Final Brand Strategy Project',
      ],
    },
  ],
  'data-analysis': [
    {
      title: 'Analysis Foundations',
      units: [
        'What Data Analysts Do',
        'Choosing the Right Analysis Tool',
        'Framing an Analysis Question',
        'Understanding Dataset Structure',
        'Planning an Analyst Workflow',
      ],
    },
    {
      title: 'Spreadsheet Workflows',
      units: [
        'Cleaning Data in Spreadsheets',
        'Handling Duplicates and Blanks',
        'Data Validation Checks',
        'Sorting and Filtering Efficiently',
        'Building Quick Summary Tables',
      ],
    },
    {
      title: 'SQL for Analysis',
      units: [
        'SELECT and WHERE Basics',
        'Aggregations and GROUP BY',
        'JOINs for Business Questions',
        'Case Statements and Segments',
        'Writing Clear Analytical Queries',
      ],
    },
    {
      title: 'Python for Analysis',
      units: [
        'Loading Data with Pandas',
        'Filtering and Grouping Data',
        'Cleaning Columns in Python',
        'Exploratory Analysis Workflow',
        'Creating Simple Charts in Python',
      ],
    },
    {
      title: 'Reporting and Delivery',
      units: [
        'Writing Insight Summaries',
        'Explaining Findings to Stakeholders',
        'Recommendations and Next Steps',
        'Building a Mini Analysis Deck',
        'Final Analysis Project',
      ],
    },
  ],
  'data-visualization': [
    {
      title: 'Visualization Foundations',
      units: [
        'Choosing the Right Chart',
        'Visual Encoding Basics',
        'Reducing Dashboard Clutter',
        'Highlighting Key Insights',
        'Color Use in Reporting',
      ],
    },
    {
      title: 'Dashboard Tools',
      units: [
        'Power BI Workspace Basics',
        'Building Power BI Visuals',
        'Tableau Sheets and Dashboards',
        'Filters and Interactions',
        'KPI Cards and Summary Views',
      ],
    },
    {
      title: 'Storytelling with Data',
      units: [
        'Designing a Narrative Flow',
        'Sequencing Insights Clearly',
        'Explaining Trends and Outliers',
        'Presenting Recommendations',
        'Designing Executive-Friendly Slides',
      ],
    },
    {
      title: 'Portfolio Delivery',
      units: [
        'Dashboard QA Checklist',
        'Publishing and Sharing Reports',
        'Annotating Dashboards',
        'Presenting a Dashboard Story',
        'Final Data Visualization Project',
      ],
    },
  ],
};

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const buildDownloadAsset = ({
  title,
  fileName,
  content,
  mimeType = 'text/plain',
}) => ({
  title,
  fileName,
  content,
  mimeType,
});

const buildLesson = ({
  course,
  moduleTitle,
  unitTitle,
  lessonTitle,
  mentorName,
  courseVideos,
  lessonSeed,
}) => {
  const videoUrl = courseVideos[lessonSeed % courseVideos.length] || '';
  const duration = lessonDurations[lessonSeed % lessonDurations.length];
  const lessonBrief =
    lessonSeed % 2 === 0
      ? 'key concepts and workflow'
      : 'practical application';

  const documentContent = [
    `${lessonTitle}`,
    '',
    `Course: ${course.title}`,
    `Module: ${moduleTitle}`,
    `Unit: ${unitTitle}`,
    '',
    `This lesson guide explains the ${lessonBrief} behind ${lessonTitle.toLowerCase()}.`,
    '',
    'What to focus on:',
    `- Understand the main decisions involved in ${unitTitle.toLowerCase()}.`,
    `- Note the tools, terminology, and examples connected to ${course.title.toLowerCase()}.`,
    `- Capture one practical takeaway you can reuse in your own work.`,
  ].join('\n');

  const assignmentContent = [
    `${lessonTitle} Assignment`,
    '',
    `Create a short submission for ${course.title} that demonstrates your understanding of ${lessonTitle.toLowerCase()}.`,
    '',
    'Deliverables:',
    `1. A short explanation of the workflow behind ${unitTitle.toLowerCase()}.`,
    `2. One practical example or mini exercise related to ${lessonTitle.toLowerCase()}.`,
    '3. A reflection on how you would apply this in a real project.',
  ].join('\n');

  return {
    id: `${slugify(unitTitle)}-lesson-${lessonSeed + 1}`,
    title: lessonTitle,
    duration,
    description: `Learn the real-world thinking behind ${lessonTitle.toLowerCase()} and connect it directly to ${course.title.toLowerCase()} practice.`,
    mentorName,
    assignmentDescription: `Complete a short practical task showing how you would apply ${lessonTitle.toLowerCase()} in a realistic ${course.title.toLowerCase()} scenario.`,
    video: {
      title: lessonTitle,
      url: videoUrl,
      duration,
      provider: 'YouTube',
    },
    materials: {
      documents: [
        buildDownloadAsset({
          title: `${lessonTitle} lesson guide`,
          fileName: `${slugify(lessonTitle)}-lesson-guide.txt`,
          content: documentContent,
        }),
      ],
      assignments: [
        buildDownloadAsset({
          title: `${lessonTitle} assignment brief`,
          fileName: `${slugify(lessonTitle)}-assignment.txt`,
          content: assignmentContent,
        }),
        buildDownloadAsset({
          title: `${lessonTitle} checklist`,
          fileName: `${slugify(lessonTitle)}-checklist.txt`,
          content: [
            `${lessonTitle} Checklist`,
            '',
            '- Review the lesson video and capture three insights.',
            '- Complete the practical task in the assignment brief.',
            '- Summarize one risk, one opportunity, and one recommendation.',
          ].join('\n'),
        }),
      ],
    },
  };
};

const buildUnit = ({
  course,
  module,
  moduleIndex,
  unitTitle,
  unitIndex,
  mentorName,
  courseVideos,
}) => {
  const subtitleLessons = [
    `${unitTitle}: key concepts`,
    `${unitTitle}: practical walkthrough`,
  ];

  const learnItems = subtitleLessons.map((lessonTitle, lessonIndex) =>
    buildLesson({
      course,
      moduleTitle: module.title,
      unitTitle,
      lessonTitle,
      mentorName,
      courseVideos,
      lessonSeed: moduleIndex * 10 + unitIndex * 2 + lessonIndex,
    })
  );

  return {
    id: `${module.id}-${slugify(unitTitle)}`,
    title: unitTitle,
    about: `This unit helps you understand ${unitTitle.toLowerCase()} inside the wider ${course.title.toLowerCase()} journey, with a clear explanation of the concepts, workflow, and practical decisions involved.`,
    lessonPage: {
      lessonTitle: unitTitle,
      description: `A practical unit on ${unitTitle.toLowerCase()} for learners building real confidence in ${course.title.toLowerCase()}.`,
      assignmentSummary: `Apply ${unitTitle.toLowerCase()} through a short deliverable you can review with your mentor or keep in your portfolio.`,
      time: `${22 + (unitIndex % 3) * 4} mins`,
      tutor: mentorName,
    },
    sections: [
      {
        title: unitTitle,
        learnItems,
        assignmentItems: learnItems.map((lesson) => ({
          id: `${lesson.id}-assignment`,
          title: lesson.assignmentDescription,
        })),
      },
    ],
  };
};

const buildModule = ({
  course,
  module,
  moduleIndex,
  mentorName,
  courseVideos,
}) => {
  const moduleId = `${slugify(course.id)}-${slugify(module.title)}`;

  const moduleRecord = {
    id: moduleId,
    title: module.title,
    moduleLabel: `Module ${moduleIndex + 1}`,
    summaryTime: moduleSummaryTimes[moduleIndex % moduleSummaryTimes.length],
    items: [],
    units: [],
  };

  moduleRecord.units = module.units.map((unitTitle, unitIndex) =>
    buildUnit({
      course,
      module: moduleRecord,
      moduleIndex,
      unitTitle,
      unitIndex,
      mentorName,
      courseVideos,
    })
  );

  moduleRecord.items = moduleRecord.units.map((unit, unitIndex) => ({
    id: unit.id,
    title: unit.title,
    duration: unit.lessonPage.time,
    type: 'lesson',
    order: unitIndex,
  }));

  return moduleRecord;
};

const buildCertificate = (course, mentorName) => ({
  title: 'Next Step - Claim Your Certificate',
  sidebarLabel: 'Certificate',
  sidebarSubtitle: 'Additional resources and certification',
  mentorName,
  introCard: {
    title: 'Congratulations!',
    body: [
      "You've successfully completed your course as an intern at Trueminds. Your dedication, consistency, and commitment to learning truly stand out, and we're proud to have you as part of the team.",
      `Now that you have reached the required level of mastery in ${course.title}, please take a moment to fill out the form below to claim your official certificate.`,
    ],
    ctaLabel: 'Claim Certificate',
  },
  mentorCard: {
    title: 'Hello Intern!',
    body: [
      'Thank you for your dedication and commitment throughout your learning journey at Trueminds. Your willingness to grow, adapt, and apply new skills reflects the kind of excellence we value in our team.',
      "At Trueminds, we believe in empowering interns to take ownership of their learning and development. As you move forward, your role is to actively apply what you've learned, building confidence, thinking critically, collaborating with others, and connecting your knowledge to real-world tasks and challenges.",
      'To help you celebrate your progress and stay motivated, you can access and download your certificate using the link provided below.',
      `Although this ${course.title.toLowerCase()} has come to an end, your growth at Trueminds is just beginning. Be sure to explore additional learning materials and resources available through your intern dashboard to continue building your skills.`,
      'We also encourage you to stay connected with the Trueminds community, where you can share experiences, learn from others, and continue growing together.',
      "Once again, congratulations on completing your course at Trueminds. We're excited to see how you apply your skills and make an impact. We look forward to hearing about your journey and successes ahead.",
      'Keep learning, keep growing!',
    ],
    downloadLabel: 'Download Certificate',
    download: buildDownloadAsset({
      title: `${course.title} certificate`,
      fileName: `${slugify(course.title)}-certificate.txt`,
      content: [
        `${course.title} Certificate Information`,
        '',
        'Thank you for completing your course at Trueminds.',
        '',
        'Certificate claim checklist:',
        '1. Review your course progress and ensure all units are completed.',
        '2. Confirm your name, email address, and internship ID.',
        '3. Submit the claim form from the certificate page.',
        '4. Watch for confirmation from the Trueminds team.',
        '',
        `Mentor: ${mentorName}`,
      ].join('\n'),
    }),
  },
  form: {
    title: 'Claim Certificate',
    fields: [
      {
        id: 'fullName',
        label:
          'Please enter your name exactly as you want it to appear on your certificate.',
      },
      {
        id: 'email',
        label:
          'Please share your email address, with which you have completed the course.',
      },
      {
        id: 'internshipId',
        label: 'Please provide your Internship ID',
      },
    ],
    checkboxLabel: 'I confirm my details are correct for certificate issuance',
    submitLabel: 'Claim Certificate',
    successTitle: 'Congratulations!',
    successMessage:
      'Kindly note that your certificate will be sent to the email address provided within 48 hours.',
    confirmLabel: 'Confirm',
  },
});

const getMentorName = (course, mentorMap) => {
  return mentorMap.get(course.mentorId)?.name || 'Trueminds Mentor';
};

export const enrichCourses = (rawCourses, rawMentors) => {
  const mentorMap = new Map(
    (rawMentors || []).map((mentor) => [mentor.id, mentor])
  );

  return (rawCourses || []).map((course) => {
    const blueprint = courseBlueprints[course.id];

    if (!blueprint) {
      return course;
    }

    const mentorName = getMentorName(course, mentorMap);
    const courseVideos = courseVideoLibrary[course.id] || [
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    ];

    const courseOutline = blueprint.map((module, moduleIndex) =>
      buildModule({
        course,
        module,
        moduleIndex,
        mentorName,
        courseVideos,
      })
    );

    const totalUnits = courseOutline.reduce(
      (total, module) => total + module.units.length,
      0
    );

    return {
      ...course,
      courseOutline,
      enrollment: {
        ...course.enrollment,
        totalLessons: totalUnits,
        completedLessons: 0,
        progressPercent: 0,
      },
      certificate: buildCertificate(course, mentorName),
    };
  });
};
