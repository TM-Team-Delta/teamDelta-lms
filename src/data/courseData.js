import bigDataCloudImage from '../assets/course-catalog-image/biddata-and-cloud.png';
import blockchainDevelopmentImage from '../assets/course-catalog-image/blockchain-dev1.png';
import brandingBusinessStrategyImage from '../assets/course-catalog-image/brand-business-strategy.png';
import businessAnalyticsImage from '../assets/course-catalog-image/business-analytic.png';
import dataAnalysisImage from '../assets/course-catalog-image/data-analytic.png';
import dataVisualizationImage from '../assets/course-catalog-image/data-visiualization.png';
import frontendDevelopmentImage from '../assets/course-catalog-image/frontend-dev.png';
import fullStackDevelopmentImage from '../assets/course-catalog-image/full-stack.png';
import immersionDesignImage from '../assets/course-catalog-image/immersion-design.png';
import graphicsDesignImage from '../assets/course-catalog-image/graphic-design1.png';
import projectManagementImage from '../assets/course-catalog-image/project-management.png';
import uiUxDesignImage from '../assets/course-catalog-image/ui-ux.png';
import { enrichCourses } from './courseCurriculum';

export const skillLevels = [
  ['All Levels', 'Beginner', 'Intermediate', 'Advanced'],
];

export const filters = [
  [
    {
      id: 'all',
      label: 'See All',
    },
    {
      id: 'design',
      label: 'Design',
    },
    {
      id: 'development',
      label: 'Development',
    },
    {
      id: 'business-strategy',
      label: 'Business & Strategy',
    },
    {
      id: 'data-science-analytics',
      label: 'Data Science & Analytics',
    },
  ],
];

export const mentors = [
  [
    {
      id: 'mentor-nicole-walter',
      name: 'Nicole Walter',
      title: 'Senior UI/UX & Product Designer',
      email: 'nicolewalter@trueminds.com',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Nicole Walter is a senior UI/UX and product designer with 8 years of experience creating intuitive digital products for early-stage startups and fast-growing product teams. She teaches practical user research, wireframing, prototyping, and product design strategy with a strong focus on portfolio-ready work.',
      experienceYears: 8,
      stats: {
        courses: 3,
        students: 342,
        rating: 4.8,
        reviewCount: 42,
      },
      actions: {
        primary: {
          id: 'message-mentor',
          label: 'Message mentor',
        },
        secondary: {
          id: 'view-courses',
          label: 'View courses',
        },
      },
      skills: [
        'UI/UX Design',
        'Product Management',
        'Wireframing',
        'Design Thinking',
        'Product Design Strategy',
      ],
      coursesTaught: [
        {
          id: 'ui-ux-design',
          title: 'UI/UX Design',
          students: 126,
          duration: '3 months',
          buttonLabel: 'View course',
        },
        {
          id: 'ux-research-fundamentals',
          title: 'UX Research Fundamentals',
          students: 104,
          duration: '6 weeks',
          buttonLabel: 'View course',
        },
        {
          id: 'figma-prototyping-workshop',
          title: 'Figma Prototyping Workshop',
          students: 112,
          duration: '5 weeks',
          buttonLabel: 'View course',
        },
      ],
      reviews: [
        {
          id: 'review-nicole-1',
          reviewer: 'Morgan Peters',
          avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
          courseId: 'ui-ux-design',
          courseTitle: 'UI/UX Design',
          comment:
            "Nicole's wireframing and UX research breakdowns were clear, practical, and easy to apply to my portfolio project.",
          rating: 5,
        },
        {
          id: 'review-nicole-2',
          reviewer: 'Basila Adebayo',
          avatar: 'https://randomuser.me/api/portraits/women/29.jpg',
          courseId: 'ui-ux-design',
          courseTitle: 'UI/UX Design',
          comment:
            'The user-flow sessions and feedback on my prototype helped me think like a product designer instead of just a visual designer.',
          rating: 4,
        },
        {
          id: 'review-nicole-3',
          reviewer: 'Chantel Morris',
          avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
          courseId: 'ui-ux-design',
          courseTitle: 'UI/UX Design',
          comment:
            'Very knowledgeable in both UI/UX and product strategy. The Figma walkthroughs were my favorite part of the course.',
          rating: 5,
        },
        {
          id: 'review-nicole-4',
          reviewer: 'Daniel Ford',
          avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
          courseId: 'ui-ux-design',
          courseTitle: 'UI/UX Design',
          comment:
            'Strong course for beginners. I would have loved a little more time on accessibility, but the prototyping lessons were excellent.',
          rating: 4,
        },
      ],
      notes: [],
    },
    {
      id: 'mentor-amos-reed',
      name: 'Amos Reed',
      title: 'Brand Designer & Visual Systems Lead',
      email: 'amosreed@trueminds.com',
      avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
      bio: 'Amos Reed helps product teams and small businesses build strong visual identities across social, web, and campaign design. His teaching combines brand systems, typography, layout, and design-tool workflows students can use immediately.',
      experienceYears: 7,
      stats: {
        courses: 3,
        students: 286,
        rating: 4.7,
        reviewCount: 31,
      },
      actions: {
        primary: {
          id: 'message-mentor',
          label: 'Message mentor',
        },
        secondary: {
          id: 'view-courses',
          label: 'View courses',
        },
      },
      skills: [
        'Graphic Design',
        'Branding',
        'Typography',
        'Adobe Photoshop',
        'Adobe Illustrator',
      ],
      coursesTaught: [
        {
          id: 'graphics-design',
          title: 'Graphics Design',
          students: 94,
          duration: '3 months',
          buttonLabel: 'View course',
        },
        {
          id: 'brand-identity-design',
          title: 'Brand Identity Design',
          students: 87,
          duration: '8 weeks',
          buttonLabel: 'View course',
        },
        {
          id: 'social-media-design-systems',
          title: 'Social Media Design Systems',
          students: 105,
          duration: '6 weeks',
          buttonLabel: 'View course',
        },
      ],
      reviews: [
        {
          id: 'review-amos-1',
          reviewer: 'Tari Ibukun',
          avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
          courseId: 'graphics-design',
          courseTitle: 'Graphics Design',
          comment:
            'Amos explained brand hierarchy and typography in a way that finally made my poster designs look polished.',
          rating: 5,
        },
        {
          id: 'review-amos-2',
          reviewer: 'Kelvin Arthur',
          avatar: 'https://randomuser.me/api/portraits/men/58.jpg',
          courseId: 'graphics-design',
          courseTitle: 'Graphics Design',
          comment:
            'The Photoshop and Illustrator lessons were practical, and the social media design examples felt relevant to freelance work.',
          rating: 4,
        },
        {
          id: 'review-amos-3',
          reviewer: 'Renee Walsh',
          avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
          courseId: 'graphics-design',
          courseTitle: 'Graphics Design',
          comment:
            'Great mentor for beginners. I especially liked the branding exercises and how he reviewed composition choices.',
          rating: 5,
        },
      ],
      notes: [],
    },
    {
      id: 'mentor-sarah-okafor',
      name: 'Sarah Okafor',
      title: 'Senior Full-Stack Engineer',
      email: 'sarahokafor@trueminds.com',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      bio: 'Sarah builds production-ready web applications with React, Node.js, Express, PostgreSQL, and MongoDB. She is especially good at helping learners connect frontend work to backend architecture, APIs, and deployment thinking.',
      experienceYears: 9,
      stats: {
        courses: 3,
        students: 498,
        rating: 4.9,
        reviewCount: 57,
      },
      actions: {
        primary: {
          id: 'message-mentor',
          label: 'Message mentor',
        },
        secondary: {
          id: 'view-courses',
          label: 'View courses',
        },
      },
      skills: [
        'React',
        'Node.js',
        'REST APIs',
        'Database Design',
        'Authentication',
      ],
      coursesTaught: [
        {
          id: 'full-stack-development',
          title: 'Full Stack Development',
          students: 182,
          duration: '3 months',
          buttonLabel: 'View course',
        },
        {
          id: 'backend-api-engineering',
          title: 'Backend API Engineering',
          students: 149,
          duration: '8 weeks',
          buttonLabel: 'View course',
        },
        {
          id: 'database-design-for-web-apps',
          title: 'Database Design for Web Apps',
          students: 167,
          duration: '6 weeks',
          buttonLabel: 'View course',
        },
      ],
      reviews: [
        {
          id: 'review-sarah-1',
          reviewer: 'Ifeoma Nnaji',
          avatar: 'https://randomuser.me/api/portraits/women/60.jpg',
          courseId: 'full-stack-development',
          courseTitle: 'Full Stack Development',
          comment:
            'Sarah made APIs, authentication, and database flow feel much less intimidating. The Node.js modules were excellent.',
          rating: 5,
        },
        {
          id: 'review-sarah-2',
          reviewer: 'Marcus Doyle',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          courseId: 'full-stack-development',
          courseTitle: 'Full Stack Development',
          comment:
            'Very strong real-world examples. I shipped my first React and Express project after following her project structure.',
          rating: 5,
        },
        {
          id: 'review-sarah-3',
          reviewer: 'Grace Essien',
          avatar: 'https://randomuser.me/api/portraits/women/15.jpg',
          courseId: 'full-stack-development',
          courseTitle: 'Full Stack Development',
          comment:
            'The backend lessons were my favorite. I only wish there were a bit more on testing, but overall it was one of the best courses I took.',
          rating: 4,
        },
      ],
      notes: [],
    },
    {
      id: 'mentor-jordan-lee',
      name: 'Jordan Lee',
      title: 'Frontend Engineering Mentor',
      email: 'jordanlee@trueminds.com',
      avatar: 'https://randomuser.me/api/portraits/men/24.jpg',
      bio: 'Jordan teaches modern frontend development with HTML, CSS, JavaScript, React, and accessibility best practices. His sessions focus on building clean interfaces, reusable components, and project-ready frontend skills.',
      experienceYears: 6,
      stats: {
        courses: 3,
        students: 412,
        rating: 4.8,
        reviewCount: 45,
      },
      actions: {
        primary: {
          id: 'message-mentor',
          label: 'Message mentor',
        },
        secondary: {
          id: 'view-courses',
          label: 'View courses',
        },
      },
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Accessibility'],
      coursesTaught: [
        {
          id: 'frontend-development',
          title: 'Frontend Development',
          students: 164,
          duration: '3 months',
          buttonLabel: 'View course',
        },
        {
          id: 'responsive-web-design',
          title: 'Responsive Web Design',
          students: 118,
          duration: '6 weeks',
          buttonLabel: 'View course',
        },
        {
          id: 'react-components-and-state',
          title: 'React Components & State',
          students: 130,
          duration: '7 weeks',
          buttonLabel: 'View course',
        },
      ],
      reviews: [
        {
          id: 'review-jordan-1',
          reviewer: 'Samuel Tetteh',
          avatar: 'https://randomuser.me/api/portraits/men/53.jpg',
          courseId: 'frontend-development',
          courseTitle: 'Frontend Development',
          comment:
            'Jordan explains CSS layouts and responsive design really well. My landing pages improved immediately after week two.',
          rating: 5,
        },
        {
          id: 'review-jordan-2',
          reviewer: 'Ada Obi',
          avatar: 'https://randomuser.me/api/portraits/women/72.jpg',
          courseId: 'frontend-development',
          courseTitle: 'Frontend Development',
          comment:
            'The JavaScript lessons were practical and the React intro was solid. Good pace for beginners moving into frontend.',
          rating: 4,
        },
        {
          id: 'review-jordan-3',
          reviewer: 'Leo Hammond',
          avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
          courseId: 'frontend-development',
          courseTitle: 'Frontend Development',
          comment:
            'I appreciated how much attention he gave to accessibility and semantic HTML instead of just styling.',
          rating: 5,
        },
      ],
      notes: [],
    },
    {
      id: 'mentor-daniel-kato',
      name: 'Daniel Kato',
      title: 'Web3 Engineer & Smart Contract Auditor',
      email: 'danielkato@trueminds.com',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      bio: 'Daniel focuses on Solidity, smart contract development, blockchain architecture, wallet integrations, and dApp security. He teaches blockchain from a builder-first perspective so students can move from theory into working decentralized applications.',
      experienceYears: 6,
      stats: {
        courses: 3,
        students: 231,
        rating: 4.7,
        reviewCount: 28,
      },
      actions: {
        primary: {
          id: 'message-mentor',
          label: 'Message mentor',
        },
        secondary: {
          id: 'view-courses',
          label: 'View courses',
        },
      },
      skills: [
        'Blockchain',
        'Solidity',
        'Web3.js',
        'Smart Contracts',
        'Security',
      ],
      coursesTaught: [
        {
          id: 'blockchain-development',
          title: 'Blockchain Development',
          students: 88,
          duration: '3 months',
          buttonLabel: 'View course',
        },
        {
          id: 'solidity-smart-contracts',
          title: 'Solidity Smart Contracts',
          students: 76,
          duration: '7 weeks',
          buttonLabel: 'View course',
        },
        {
          id: 'web3-wallet-integration',
          title: 'Web3 Wallet Integration',
          students: 67,
          duration: '5 weeks',
          buttonLabel: 'View course',
        },
      ],
      reviews: [
        {
          id: 'review-daniel-1',
          reviewer: 'Aisha Bello',
          avatar: 'https://randomuser.me/api/portraits/women/39.jpg',
          courseId: 'blockchain-development',
          courseTitle: 'Blockchain Development',
          comment:
            'Daniel simplified smart contracts and wallet integration better than any Web3 tutorial I tried before this course.',
          rating: 5,
        },
        {
          id: 'review-daniel-2',
          reviewer: 'Victor Mensah',
          avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
          courseId: 'blockchain-development',
          courseTitle: 'Blockchain Development',
          comment:
            'Great introduction to Solidity and blockchain architecture. The security notes were especially useful.',
          rating: 4,
        },
        {
          id: 'review-daniel-3',
          reviewer: 'Pearl Lawson',
          avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
          courseId: 'blockchain-development',
          courseTitle: 'Blockchain Development',
          comment:
            'Good mentor with strong technical depth. I would recommend this course to anyone starting out in blockchain development.',
          rating: 4,
        },
      ],
      notes: [],
    },
    {
      id: 'mentor-priya-nair',
      name: 'Priya Nair',
      title: 'Cloud Data Engineer',
      email: 'priyanair@trueminds.com',
      avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
      bio: 'Priya works across cloud analytics stacks with BigQuery, SQL, Python, and ETL workflows. She mentors students on how to build reliable data pipelines and think beyond spreadsheets into scalable analytics systems.',
      experienceYears: 8,
      stats: {
        courses: 3,
        students: 379,
        rating: 4.8,
        reviewCount: 36,
      },
      actions: {
        primary: {
          id: 'message-mentor',
          label: 'Message mentor',
        },
        secondary: {
          id: 'view-courses',
          label: 'View courses',
        },
      },
      skills: ['BigQuery', 'Cloud Analytics', 'Python', 'ETL', 'Dashboards'],
      coursesTaught: [
        {
          id: 'big-data-cloud-analytics',
          title: 'Big Data & Cloud Analytics',
          students: 138,
          duration: '3 months',
          buttonLabel: 'View course',
        },
        {
          id: 'sql-for-data-pipelines',
          title: 'SQL for Data Pipelines',
          students: 116,
          duration: '6 weeks',
          buttonLabel: 'View course',
        },
        {
          id: 'etl-workflows-with-python',
          title: 'ETL Workflows with Python',
          students: 125,
          duration: '8 weeks',
          buttonLabel: 'View course',
        },
      ],
      reviews: [
        {
          id: 'review-priya-1',
          reviewer: 'Helen Asare',
          avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
          courseId: 'big-data-cloud-analytics',
          courseTitle: 'Big Data & Cloud Analytics',
          comment:
            'Priya made ETL concepts, BigQuery queries, and cloud data flow much easier to understand with hands-on examples.',
          rating: 5,
        },
        {
          id: 'review-priya-2',
          reviewer: 'Noah Price',
          avatar: 'https://randomuser.me/api/portraits/men/40.jpg',
          courseId: 'big-data-cloud-analytics',
          courseTitle: 'Big Data & Cloud Analytics',
          comment:
            'The pipeline lessons were practical and not overly theoretical. I now understand how analytics teams structure their data work.',
          rating: 4,
        },
        {
          id: 'review-priya-3',
          reviewer: 'Lydia Nartey',
          avatar: 'https://randomuser.me/api/portraits/women/56.jpg',
          courseId: 'big-data-cloud-analytics',
          courseTitle: 'Big Data & Cloud Analytics',
          comment:
            'Strong course if you want to move into cloud analytics. Priya explains SQL and workflow design with a lot of clarity.',
          rating: 5,
        },
      ],
      notes: [],
    },
    {
      id: 'mentor-elena-morris',
      name: 'Elena Morris',
      title: 'Project Delivery Manager',
      email: 'elenamorris@trueminds.com',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      bio: 'Elena has managed software, operations, and product delivery teams using Agile, Scrum, and waterfall planning methods. She teaches project planning, execution, stakeholder communication, and delivery habits that match real team environments.',
      experienceYears: 10,
      stats: {
        courses: 4,
        students: 458,
        rating: 4.8,
        reviewCount: 34,
      },
      actions: {
        primary: {
          id: 'message-mentor',
          label: 'Message mentor',
        },
        secondary: {
          id: 'view-courses',
          label: 'View courses',
        },
      },
      skills: [
        'Project Planning',
        'Agile',
        'Scrum',
        'Risk Management',
        'Stakeholder Communication',
      ],
      coursesTaught: [
        {
          id: 'project-management',
          title: 'Project Management',
          students: 119,
          duration: '3 months',
          buttonLabel: 'View course',
        },
        {
          id: 'agile-scrum-practice',
          title: 'Agile Scrum Practice',
          students: 103,
          duration: '6 weeks',
          buttonLabel: 'View course',
        },
        {
          id: 'stakeholder-communication',
          title: 'Stakeholder Communication',
          students: 111,
          duration: '5 weeks',
          buttonLabel: 'View course',
        },
        {
          id: 'project-risk-and-delivery',
          title: 'Project Risk & Delivery',
          students: 125,
          duration: '7 weeks',
          buttonLabel: 'View course',
        },
      ],
      reviews: [
        {
          id: 'review-elena-1',
          reviewer: 'Janet Cole',
          avatar: 'https://randomuser.me/api/portraits/women/43.jpg',
          courseId: 'project-management',
          courseTitle: 'Project Management',
          comment:
            'Elena connects Agile, planning, and stakeholder updates in a way that felt very close to how real projects run.',
          rating: 5,
        },
        {
          id: 'review-elena-2',
          reviewer: 'Paul Adeyemi',
          avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
          courseId: 'project-management',
          courseTitle: 'Project Management',
          comment:
            'The delivery and risk-management sections were especially helpful. I now write much better project updates.',
          rating: 4,
        },
        {
          id: 'review-elena-3',
          reviewer: 'Mira Sutton',
          avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
          courseId: 'project-management',
          courseTitle: 'Project Management',
          comment:
            'Very structured mentor. The course gave me a strong foundation in Scrum ceremonies and planning documents.',
          rating: 5,
        },
      ],
      notes: [],
    },
    {
      id: 'mentor-maya-hughes',
      name: 'Maya Hughes',
      title: 'Immersive Experience Designer',
      email: 'mayahughes@trueminds.com',
      avatar: 'https://randomuser.me/api/portraits/women/48.jpg',
      bio: 'Maya designs interactive AR, VR, and spatial experiences with a strong focus on user flow, storytelling, and prototyping. Her classes help students understand immersive design without losing sight of usability and narrative.',
      experienceYears: 7,
      stats: {
        courses: 3,
        students: 214,
        rating: 4.6,
        reviewCount: 22,
      },
      actions: {
        primary: {
          id: 'message-mentor',
          label: 'Message mentor',
        },
        secondary: {
          id: 'view-courses',
          label: 'View courses',
        },
      },
      skills: [
        'AR/VR',
        'Spatial UX',
        'Prototyping',
        'Storyboarding',
        'Interaction Design',
      ],
      coursesTaught: [
        {
          id: 'immersion-design',
          title: 'Immersion Design',
          students: 73,
          duration: '3 months',
          buttonLabel: 'View course',
        },
        {
          id: 'spatial-ux-fundamentals',
          title: 'Spatial UX Fundamentals',
          students: 64,
          duration: '6 weeks',
          buttonLabel: 'View course',
        },
        {
          id: 'ar-vr-storyboarding',
          title: 'AR/VR Storyboarding',
          students: 77,
          duration: '5 weeks',
          buttonLabel: 'View course',
        },
      ],
      reviews: [
        {
          id: 'review-maya-1',
          reviewer: 'Chris Obeng',
          avatar: 'https://randomuser.me/api/portraits/men/54.jpg',
          courseId: 'immersion-design',
          courseTitle: 'Immersion Design',
          comment:
            'Maya helped me understand spatial UX and user flow in AR/VR much better than the scattered resources I found online.',
          rating: 5,
        },
        {
          id: 'review-maya-2',
          reviewer: 'Tomi Davies',
          avatar: 'https://randomuser.me/api/portraits/women/58.jpg',
          courseId: 'immersion-design',
          courseTitle: 'Immersion Design',
          comment:
            'Really creative course. The storyboarding and prototyping lessons were strong, though I wanted a few more case studies.',
          rating: 4,
        },
        {
          id: 'review-maya-3',
          reviewer: 'Brian Holt',
          avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
          courseId: 'immersion-design',
          courseTitle: 'Immersion Design',
          comment:
            'Good introduction to immersive design. Maya explains complex ideas in a calm and approachable way.',
          rating: 4,
        },
      ],
      notes: [],
    },
    {
      id: 'mentor-oliver-grant',
      name: 'Oliver Grant',
      title: 'Business Analyst & Strategy Consultant',
      email: 'olivergrant@trueminds.com',
      avatar: 'https://randomuser.me/api/portraits/men/51.jpg',
      bio: 'Oliver helps teams use business data, market research, and strategic frameworks to make sharper product, growth, and brand decisions. His teaching is practical, structured, and strongly tied to business outcomes.',
      experienceYears: 9,
      stats: {
        courses: 2,
        students: 207,
        rating: 4.8,
        reviewCount: 51,
      },
      actions: {
        primary: {
          id: 'message-mentor',
          label: 'Message mentor',
        },
        secondary: {
          id: 'view-courses',
          label: 'View courses',
        },
      },
      skills: [
        'Business Analysis',
        'Strategy',
        'Stakeholder Mapping',
        'KPIs',
        'Market Research',
      ],
      coursesTaught: [
        {
          id: 'business-analytics',
          title: 'Business Analytics',
          students: 118,
          duration: '3 months',
          buttonLabel: 'View course',
        },
        {
          id: 'branding-business-strategy',
          title: 'Branding & Business Strategy',
          students: 89,
          duration: '3 months',
          buttonLabel: 'View course',
        },
      ],
      reviews: [
        {
          id: 'review-oliver-1',
          reviewer: 'Natasha Reid',
          avatar: 'https://randomuser.me/api/portraits/women/46.jpg',
          courseId: 'business-analytics',
          courseTitle: 'Business Analytics',
          comment:
            'Oliver made KPI selection and business reporting much easier to understand. The analytics examples felt relevant to real teams.',
          rating: 5,
        },
        {
          id: 'review-oliver-2',
          reviewer: 'Eric Sarpong',
          avatar: 'https://randomuser.me/api/portraits/men/38.jpg',
          courseId: 'branding-business-strategy',
          courseTitle: 'Branding & Business Strategy',
          comment:
            'The positioning and brand strategy modules were excellent. I used the framework immediately for a client presentation.',
          rating: 5,
        },
        {
          id: 'review-oliver-3',
          reviewer: 'Mabel Johnson',
          avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
          courseId: 'business-analytics',
          courseTitle: 'Business Analytics',
          comment:
            'Very insightful mentor. I liked how he connects data analysis to decision-making instead of just dashboards.',
          rating: 4,
        },
        {
          id: 'review-oliver-4',
          reviewer: 'Joel Hanson',
          avatar: 'https://randomuser.me/api/portraits/men/19.jpg',
          courseId: 'branding-business-strategy',
          courseTitle: 'Branding & Business Strategy',
          comment:
            'Clear strategy lessons and useful market research examples. Strong course if you want business context behind branding.',
          rating: 5,
        },
      ],
      notes: [],
    },
    {
      id: 'mentor-luke-barber',
      name: 'Luke Barber',
      title: 'Data Analyst & BI Instructor',
      email: 'lukebarber@trueminds.com',
      avatar: 'https://randomuser.me/api/portraits/men/62.jpg',
      bio: 'Luke teaches Excel, SQL, Python, Tableau, and Power BI for practical analytics work and reporting. He focuses on helping learners move from raw data to clear dashboards, insight summaries, and business-ready communication.',
      experienceYears: 8,
      stats: {
        courses: 2,
        students: 241,
        rating: 4.9,
        reviewCount: 63,
      },
      actions: {
        primary: {
          id: 'message-mentor',
          label: 'Message mentor',
        },
        secondary: {
          id: 'view-courses',
          label: 'View courses',
        },
      },
      skills: ['SQL', 'Python', 'Excel', 'Power BI', 'Tableau'],
      coursesTaught: [
        {
          id: 'data-analysis',
          title: 'Data Analysis',
          students: 128,
          duration: '3 months',
          buttonLabel: 'View course',
        },
        {
          id: 'data-visualization',
          title: 'Data Visualization',
          students: 113,
          duration: '3 months',
          buttonLabel: 'View course',
        },
      ],
      reviews: [
        {
          id: 'review-luke-1',
          reviewer: 'Faith Morgan',
          avatar: 'https://randomuser.me/api/portraits/women/35.jpg',
          courseId: 'data-analysis',
          courseTitle: 'Data Analysis',
          comment:
            'Luke explained Excel, SQL, and Python in a way that felt connected instead of fragmented. Great analytics instructor.',
          rating: 5,
        },
        {
          id: 'review-luke-2',
          reviewer: 'Dennis Clarke',
          avatar: 'https://randomuser.me/api/portraits/men/14.jpg',
          courseId: 'data-visualization',
          courseTitle: 'Data Visualization',
          comment:
            'The Power BI and Tableau sections were excellent. I can finally build dashboards that tell a clear story.',
          rating: 5,
        },
        {
          id: 'review-luke-3',
          reviewer: 'Sarah Mensimah',
          avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
          courseId: 'data-analysis',
          courseTitle: 'Data Analysis',
          comment:
            'Very practical mentor. The analysis workflow and reporting exercises gave me confidence for entry-level analyst roles.',
          rating: 4,
        },
        {
          id: 'review-luke-4',
          reviewer: 'Ivan Ross',
          avatar: 'https://randomuser.me/api/portraits/men/73.jpg',
          courseId: 'data-visualization',
          courseTitle: 'Data Visualization',
          comment:
            'Luke is especially strong at dashboard structure and chart selection. Highly recommended for anyone moving into BI.',
          rating: 5,
        },
      ],
      notes: [],
    },
  ],
];

export const courses = [
  [
    {
      id: 'ui-ux-design',
      slug: 'ui-ux-design',
      title: 'UI/UX Design',
      category: 'design',
      level: 'Beginner',
      duration: {
        months: 3,
        label: '3 months',
      },
      shortDescription:
        'Learn the essentials of UI/UX design, including user research, wireframing, prototyping, and interface design.',
      coverImage: uiUxDesignImage,
      mentorId: 'mentor-nicole-walter',
      tags: ['Figma', 'Wireframing', 'Prototyping', 'Research'],
      enrollment: {
        status: 'not-started',
        ctaLabel: 'Start Course',
        progressPercent: 0,
        completedLessons: 0,
        totalLessons: 18,
      },
      tabs: ['overview', 'course-outline', 'discussion'],
      overview: {
        about:
          'Learn the essentials of UI/UX design, including user research, wireframing, prototyping, and interface design.',
        whatYouWillLearn: [
          'UI & UX fundamentals',
          'Wireframing & prototyping',
          'User research',
          'Prototyping',
          'Final project',
        ],
        toolsNeeded: ['Figma', 'Adobe XD', 'Sketch'],
        prerequisites: ['Basic computer skills', 'Interest in design'],
        benefits: [
          'Certificate of completion',
          'Access to mentors',
          'Beginner-friendly content',
          'Hands-on project',
          'Real-world skill',
        ],
      },
      courseOutline: [
        {
          id: 'introduction-to-ui-ux-real-world-case-study',
          title: 'Introduction to UI/UX & Real-World Case Study',
          summaryTime: '45 mins',
          items: [
            {
              title: 'Understanding UI/UX',
              duration: '5 mins',
              type: 'lesson',
              status: 'available',
            },
            {
              title: 'Design thinking & product design lifecycle',
              duration: '15 mins',
              type: 'lesson',
              status: 'in-progress',
            },
            {
              title: 'Case Study: Food Ordering App Redesign',
              duration: '15 mins',
              type: 'lesson',
              status: 'locked',
            },
            {
              title: 'Exercise: Identify good/bad UX',
              duration: '10 mins',
              type: 'exercise',
              status: 'locked',
            },
            {
              title:
                'Assignment 1: Identify a problem and create a solution to the problem',
              duration: 'Before next lesson',
              type: 'assignment',
              status: 'locked',
              availability: 'before-next-lesson',
            },
          ],
          units: [
            {
              id: 'understanding-ui-ux',
              title: 'Understanding UI/UX',
              status: 'available',
              about:
                'This unit introduces the difference between user interface and user experience design, product thinking, and the role of design in solving user problems.',
              lessonPage: {
                lessonTitle: 'Understanding UI/UX',
                description:
                  'Learn the foundations of user-centered digital product design and how UI decisions support the wider UX process.',
                assignmentSummary:
                  'Write a short reflection, 150 to 250 words, on the difference between UI and UX using a real product example.',
                time: '5 mins',
                tutor: 'Nicole Walter',
                relatedResources: { 
                  documents: [
                    {
                      title: 'NNGroup: UX Basics',
                      url: 'https://www.nngroup.com/articles/definition-user-experience/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'What is UI UX?',
                      url: 'https://www.youtube.com/watch?v=55NvZjUZIO8',
                      duration: '12 mins',
                      provider: 'YouTube',
                    },
                    {
                      title: 'UI/UX Design Full Course',
                      url: 'https://www.youtube.com/watch?v=xQ_PSBaFD9o',
                      duration: '2 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'UI vs UX Reflection',
                      prompt:
                        'Write a short reflection, 150 to 250 words, on the difference between UI and UX using a real product example.',
                      submissionType: 'text',
                      dueInDays: 7,
                      wordCount: '150-250',
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'What is UI and UX?',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Difference between UI and UX',
                    },
                    {
                      id: 'learn-2',
                      title: 'How product teams use design',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Write 5 differences between UI and UX in your own words.',
                    },
                  ],
                },
                {
                  title: 'Why design matters',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Business value of good design',
                    },
                    {
                      id: 'learn-2',
                      title: 'Examples of weak and strong user experiences',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Review one app you use often and note 3 UX wins and 2 UX issues.',
                    },
                  ],
                },
              ],
            },
            {
              id: 'design-thinking-product-design-lifecycle',
              title: 'Design thinking & product design lifecycle',
              status: 'available',
              about:
                'This unit explains how teams move from problem discovery into research, ideation, prototyping, testing, and iteration.',
              lessonPage: {
                lessonTitle: 'Design Thinking and Product Lifecycle',
                description:
                  'See how design thinking fits into product development and how designers work with engineering and product teams.',
                assignmentSummary:
                  'Create a one-page flow showing how you would move from user problem to tested prototype for a simple product feature.',
                time: '15 mins',
                tutor: 'Nicole Walter',
                relatedResources: {
                  documents: [
                    {
                      title: 'Interaction Design Foundation: Design Thinking',
                      url: 'https://www.interaction-design.org/literature/topics/design-thinking',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'UI/UX Design Thinking Full Course',
                      url: 'https://www.youtube.com/watch?v=xQ_PSBaFD9o',
                      duration: '2 hrs+',
                      provider: 'YouTube',
                    },
                    {
                      title: 'Free Figma Course for Beginners',
                      url: 'https://www.youtube.com/watch?v=dwxeGBjcM64',
                      duration: '2 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Design Thinking Map',
                      prompt:
                        'Create a one-page flow showing how you would move from user problem to tested prototype for a simple product feature.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Design thinking basics',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Empathize, define, ideate, prototype, test',
                    },
                    {
                      id: 'learn-2',
                      title: 'When to run lightweight design sprints',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Map a simple design thinking flow for a food delivery app.',
                    },
                  ],
                },
                {
                  title: 'Working with product teams',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'How design connects to product goals',
                    },
                    {
                      id: 'learn-2',
                      title: 'Trade-offs in scope and speed',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'List 3 stakeholders a product designer must align with on a launch.',
                    },
                  ],
                },
              ],
            },
            {
              id: 'case-study-food-ordering-app-redesign',
              title: 'Case Study: Food Ordering App Redesign',
              status: 'locked',
              about:
                'This case study walks through a redesign challenge using a familiar mobile product flow and basic research observations.',
              lessonPage: {
                lessonTitle: 'Case Study: Food Ordering App Redesign',
                description:
                  'Follow a realistic redesign process from pain points to a cleaner user flow and simple prototype idea.',
                assignmentSummary:
                  'Write a brief redesign proposal for a food delivery checkout flow and include the problem, users, and expected improvement.',
                time: '15 mins',
                tutor: 'Nicole Walter',
                relatedResources: {
                  documents: [
                    {
                      title: 'Google Material Design',
                      url: 'https://m3.material.io/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'UI/UX Design Full Course 2026',
                      url: 'https://www.youtube.com/watch?v=xQ_PSBaFD9o',
                      duration: '2 hrs+',
                      provider: 'YouTube',
                    },
                    {
                      title: 'Figma Tutorial for Beginners',
                      url: 'https://www.youtube.com/watch?v=dwxeGBjcM64',
                      duration: '2 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Mini Redesign Brief',
                      prompt:
                        'Write a brief redesign proposal for a food delivery checkout flow and include the problem, users, and expected improvement.',
                      submissionType: 'text',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Reviewing an existing flow',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Identify broken moments in ordering flow',
                    },
                    {
                      id: 'learn-2',
                      title: 'Spot friction in checkout',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Summarize 3 user pain points from the current flow.',
                    },
                  ],
                },
                {
                  title: 'Planning a redesign',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Prioritize user goals',
                    },
                    {
                      id: 'learn-2',
                      title: 'Define success measures',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Sketch a new checkout flow with fewer steps.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'figma-interface-tools-collaboration',
          title: 'Figma Interface, Tools & Collaboration',
          summaryTime: '45 mins',
          items: [
            {
              title: 'Introduction to Figma: Frames, text, colors & assets',
              duration: '20 mins',
              type: 'lesson',
              status: 'locked',
            },
            {
              title: 'Multiplayer editing & commenting',
              duration: '5 mins',
              type: 'lesson',
              status: 'locked',
            },
            {
              title: 'Figma Plugins: Content Reel, Unsplash',
              duration: '5 mins',
              type: 'lesson',
              status: 'locked',
            },
            {
              title: 'Exercise: Recreate a login screen',
              duration: '15 mins',
              type: 'exercise',
              status: 'locked',
            },
            {
              title: 'Assignment 2: Recreate 2 app screens',
              duration: 'Before next lesson',
              type: 'assignment',
              status: 'locked',
              availability: 'before-next-lesson',
            },
          ],
          units: [
            {
              id: 'introduction-to-figma',
              title: 'Introduction to Figma',
              status: 'locked',
              about:
                'Learn the core Figma interface, frames, styles, text tools, and reusable assets for design workflows.',
              lessonPage: {
                lessonTitle: 'Figma Workspace Essentials',
                description:
                  'Use Figma to set up screens, typography, color styles, and reusable components.',
                assignmentSummary:
                  'Create a Figma file with a sign-in screen and one reusable button component.',
                time: '20 mins',
                tutor: 'Nicole Walter',
                relatedResources: {
                  documents: [
                    {
                      title: 'Figma Learn',
                      url: 'https://help.figma.com/hc/en-us/categories/360002051613',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Figma Tutorial for Beginners',
                      url: 'https://www.youtube.com/watch?v=dwxeGBjcM64',
                      duration: '2 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Figma Practice File',
                      prompt:
                        'Create a Figma file with a sign-in screen and one reusable button component.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Working in Figma',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Frames and layout basics',
                    },
                    {
                      id: 'learn-2',
                      title: 'Color and text styles',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Create a mobile frame with a basic hero section.',
                    },
                  ],
                },
                {
                  title: 'Reusable design assets',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Components and variants',
                    },
                    {
                      id: 'learn-2',
                      title: 'Organizing pages and files',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Build a button component with 2 states.',
                    },
                  ],
                },
              ],
            },
            {
              id: 'collaboration-and-handoff',
              title: 'Collaboration and Handoff',
              status: 'locked',
              about:
                'This unit covers comments, multiplayer editing, basic handoff, and shared component discipline.',
              lessonPage: {
                lessonTitle: 'Figma Collaboration and Developer Handoff',
                description:
                  'Learn how to comment, inspect layers, and organize files so other designers and developers can work faster.',
                assignmentSummary:
                  'Prepare one screen for developer handoff, including proper layer names and spacing annotations.',
                time: '15 mins',
                tutor: 'Nicole Walter',
                relatedResources: {
                  documents: [
                    {
                      title: 'Figma Dev Mode Overview',
                      url: 'https://help.figma.com/hc/en-us/articles/1500004411902-Guide-to-Dev-Mode',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Figma Tutorial for Beginners',
                      url: 'https://www.youtube.com/watch?v=dwxeGBjcM64',
                      duration: '2 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Handoff Exercise',
                      prompt:
                        'Prepare one screen for developer handoff, including proper layer names and spacing annotations.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Collaboration',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Comments and version history',
                    },
                    {
                      id: 'learn-2',
                      title: 'Shared libraries',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Comment on 3 design decisions in your own file.',
                    },
                  ],
                },
                {
                  title: 'Developer handoff',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Inspect panel basics',
                    },
                    {
                      id: 'learn-2',
                      title: 'Naming layers clearly',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Rename a screen and layer tree for clean handoff.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'ux-research-persona-version-control',
          title: 'UX Research, Persona & Version Control',
          summaryTime: '45 mins',
          items: [
            {
              title: 'Research method & persona creation',
              duration: '20 mins',
              type: 'lesson',
              status: 'locked',
            },
            {
              title: 'Journey mapping basics',
              duration: '5 mins',
              type: 'lesson',
              status: 'locked',
            },
            {
              title: 'Figma version history',
              duration: '5 mins',
              type: 'lesson',
              status: 'locked',
            },
            {
              title:
                'Exercise: Create a persona for a food ordering mobile application',
              duration: '15 mins',
              type: 'exercise',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'introduction-to-user-persona',
              title: 'Introduction to user persona',
              status: 'locked',
              about:
                'Master the fundamentals of creating a user persona and its real-world applications. Learn how to define user goals, behaviours, needs, and pain points.',
              lessonPage: {
                lessonTitle: 'Purpose of user personas',
                description:
                  'Learn about the basics of user personas, with examples of basic user persona types.',
                assignmentSummary:
                  'Write a short reflection, 150 to 250 words, on how personas can improve product development.',
                time: '33 mins',
                tutor: 'Created by Sai Khan',
                relatedResources: {
                  documents: [
                    {
                      title: 'Interaction Design Foundation: Personas',
                      url: 'https://www.interaction-design.org/literature/topics/personas',
                      type: 'document',
                    },
                    {
                      title: 'NNGroup: Personas',
                      url: 'https://www.nngroup.com/articles/persona/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'UI/UX Design Full Course with User Research',
                      url: 'https://www.youtube.com/watch?v=xQ_PSBaFD9o',
                      duration: '2 hrs+',
                      provider: 'YouTube',
                    },
                    {
                      title: 'UI/UX Design Thinking',
                      url: 'https://www.youtube.com/watch?v=55NvZjUZIO8',
                      duration: '12 mins',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Persona Reflection',
                      prompt:
                        'Write a short reflection, 150 to 250 words, on how personas can improve product development.',
                      submissionType: 'text',
                      dueInDays: 7,
                      wordCount: '150-250',
                    },
                    {
                      title: 'Negative Personas',
                      prompt:
                        'List 2 examples of negative personas and explain why they matter in scope decisions.',
                      submissionType: 'text',
                      dueInDays: 7,
                      wordCount: '120-200',
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'What is User Persona?',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Purpose of user personas',
                    },
                    {
                      id: 'learn-2',
                      title: 'Types of User Personas',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Write a short reflection, 150 to 250 words, on how personas can improve product development.',
                    },
                  ],
                },
                {
                  title:
                    'Why personas matter in design and product development',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Improving User-Centered Design',
                    },
                    {
                      id: 'learn-2',
                      title: 'Enhancing Team Alignment',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Describe at least three key purposes of user personas in design.',
                    },
                  ],
                },
              ],
            },
            {
              id: 'journey-mapping-basics',
              title: 'Journey mapping basics',
              status: 'locked',
              about:
                'Understand how users move through a product and how to document key stages, emotions, pain points, and touchpoints.',
              lessonPage: {
                lessonTitle: 'Journey Mapping Basics',
                description:
                  'Learn how to create a simple customer journey map for a digital product flow.',
                assignmentSummary:
                  'Create a customer journey map with at least 5 stages for a mobile ordering experience.',
                time: '15 mins',
                tutor: 'Nicole Walter',
                relatedResources: {
                  documents: [
                    {
                      title:
                        'Interaction Design Foundation: Customer Journey Map',
                      url: 'https://www.interaction-design.org/literature/topics/customer-journey-maps',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'UI/UX Research and Journey Mapping',
                      url: 'https://www.youtube.com/watch?v=xQ_PSBaFD9o',
                      duration: '2 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Journey Map Exercise',
                      prompt:
                        'Create a customer journey map with at least 5 stages for a mobile ordering experience.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Journey map structure',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Stages, actions, and pain points',
                    },
                    {
                      id: 'learn-2',
                      title: 'Moments of friction',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Create a journey map for onboarding in a food app.',
                    },
                  ],
                },
                {
                  title: 'Using journey maps',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Finding improvement areas',
                    },
                    {
                      id: 'learn-2',
                      title: 'Connecting maps to wireframes',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Highlight 3 opportunities for improvement from your journey map.',
                    },
                  ],
                },
              ],
            },
            {
              id: 'figma-version-history',
              title: 'Figma version history',
              status: 'locked',
              about:
                'Learn how to track design changes, restore versions, and protect team collaboration in Figma.',
              lessonPage: {
                lessonTitle: 'Version History in Figma',
                description:
                  'See how version history supports feedback, iteration, and safer collaboration across a design team.',
                assignmentSummary:
                  'Save named versions before and after a design update and explain what changed.',
                time: '5 mins',
                tutor: 'Nicole Walter',
                relatedResources: {
                  documents: [
                    {
                      title: 'Figma Version History',
                      url: 'https://help.figma.com/hc/en-us/articles/360038006754-View-a-file-s-version-history',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Figma Tutorial for Beginners',
                      url: 'https://www.youtube.com/watch?v=dwxeGBjcM64',
                      duration: '2 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Versioning Exercise',
                      prompt:
                        'Save named versions before and after a design update and explain what changed.',
                      submissionType: 'text',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Version control basics',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Saving named versions',
                    },
                    {
                      id: 'learn-2',
                      title: 'Restoring previous work',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Save two named versions in your Figma file.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'user-flow',
          title: 'User Flow',
          summaryTime: '45 mins',
          items: [
            {
              title: 'Designing user flow',
              duration: '20 mins',
              type: 'lesson',
              status: 'locked',
            },
            {
              title: 'Mapping user journey',
              duration: '15 mins',
              type: 'lesson',
              status: 'locked',
            },
            {
              title: 'How to simulate usability testing',
              duration: '10 mins',
              type: 'lesson',
              status: 'locked',
            },
            {
              title: 'Assignment: Journey map for food delivery app',
              duration: 'Before next lesson',
              type: 'assignment',
              status: 'locked',
              availability: 'before-next-lesson',
            },
          ],
          units: [
            {
              id: 'designing-user-flow',
              title: 'Designing user flow',
              status: 'locked',
              about:
                'This unit introduces user flows, common path patterns, and how to reduce friction between a user goal and a completed action.',
              lessonPage: {
                lessonTitle: 'Designing User Flow',
                description:
                  'Learn how to move users smoothly from intent to outcome with fewer steps and clearer decisions.',
                assignmentSummary:
                  'Design a user flow for placing an order in a food app and label all major decision points.',
                time: '20 mins',
                tutor: 'Nicole Walter',
                relatedResources: {
                  documents: [
                    {
                      title: 'NNGroup: User Flows',
                      url: 'https://www.nngroup.com/articles/task-flows-vs-user-flows/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'UI/UX Design Full Course',
                      url: 'https://www.youtube.com/watch?v=xQ_PSBaFD9o',
                      duration: '2 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'User Flow Draft',
                      prompt:
                        'Design a user flow for placing an order in a food app and label all major decision points.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Flow basics',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Entry points and task paths',
                    },
                    {
                      id: 'learn-2',
                      title: 'Decision points',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Create a flow for user sign-up and first action.',
                    },
                  ],
                },
                {
                  title: 'Reducing friction',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Simplifying choices',
                    },
                    {
                      id: 'learn-2',
                      title: 'Using feedback states',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Identify 3 points where a user could drop off in your flow.',
                    },
                  ],
                },
              ],
            },
            {
              id: 'how-to-simulate-usability-testing',
              title: 'How to simulate usability testing',
              status: 'locked',
              about:
                'Learn a lightweight process for testing prototypes with a few users and documenting issues that matter.',
              lessonPage: {
                lessonTitle: 'Usability Testing Basics',
                description:
                  'Run a basic usability test, capture user struggles, and prioritize what to fix first.',
                assignmentSummary:
                  'Run a test with one person on your prototype and submit a short issue log with severity labels.',
                time: '10 mins',
                tutor: 'Nicole Walter',
                relatedResources: {
                  documents: [
                    {
                      title: 'NNGroup: Usability Testing 101',
                      url: 'https://www.nngroup.com/articles/usability-testing-101/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'UI/UX Design Full Course',
                      url: 'https://www.youtube.com/watch?v=xQ_PSBaFD9o',
                      duration: '2 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Usability Test Notes',
                      prompt:
                        'Run a test with one person on your prototype and submit a short issue log with severity labels.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Planning a quick test',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Write simple test tasks',
                    },
                    {
                      id: 'learn-2',
                      title: 'Observe without leading',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Draft 3 usability tasks for a sign-up prototype.',
                    },
                  ],
                },
                {
                  title: 'Reviewing findings',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Severity and frequency',
                    },
                    {
                      id: 'learn-2',
                      title: 'Turning findings into changes',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Write the top 3 issues from your test notes.',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      discussion: {
        enabled: true,
        channels: [
          {
            id: 'general',
            name: 'General Discussion',
          },
          {
            id: 'questions',
            name: 'Questions',
          },
          {
            id: 'announcements',
            name: 'Announcements',
          },
        ],
      },
    },
    {
      id: 'graphics-design',
      slug: 'graphics-design',
      title: 'Graphics Design',
      category: 'design',
      level: 'Beginner',
      duration: {
        months: 3,
        label: '3 months',
      },
      shortDescription:
        'Build in-demand graphic design skills for social media, branding, and marketing projects.',
      coverImage: graphicsDesignImage,
      mentorId: 'mentor-amos-reed',
      tags: ['Canva', 'Photoshop', 'Brand Assets'],
      enrollment: {
        status: 'not-started',
        ctaLabel: 'Start Course',
        progressPercent: 0,
        completedLessons: 0,
        totalLessons: 8,
      },
      tabs: ['overview', 'course-outline', 'discussion'],
      overview: {
        about:
          'Build in-demand graphic design skills for social media, branding, and marketing projects.',
        whatYouWillLearn: [
          'Design principles',
          'Typography and color',
          'Photoshop basics',
          'Canva workflows',
          'Portfolio-ready assets',
        ],
        toolsNeeded: ['Canva', 'Adobe Photoshop', 'Adobe Illustrator'],
        prerequisites: ['Basic computer use', 'Willingness to practice'],
        benefits: [
          'Certificate of completion',
          'Hands-on design projects',
          'Portfolio pieces',
          'Mentor feedback',
        ],
      },
      courseOutline: [
        {
          id: 'design-foundations',
          title: 'Design Foundations',
          summaryTime: '50 mins',
          items: [
            {
              title: 'Visual Design Basics',
              duration: '18 mins',
              type: 'lesson',
              status: 'available',
            },
            {
              title: 'Exercise: Critique a weak poster design',
              duration: '10 mins',
              type: 'exercise',
              status: 'locked',
            },
            {
              title: 'Assignment 1: Redesign a social media flyer',
              duration: 'Before next lesson',
              type: 'assignment',
              status: 'locked',
              availability: 'before-next-lesson',
            },
            {
              title: 'Typography and Color',
              duration: '20 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'visual-design-basics',
              title: 'Visual design basics',
              status: 'available',
              about:
                'Learn core design principles like contrast, balance, hierarchy, alignment, and spacing.',
              lessonPage: {
                lessonTitle: 'Visual Design Basics',
                description:
                  'A beginner-friendly introduction to the rules that make designs readable and attractive.',
                assignmentSummary:
                  'Create a better flyer layout using contrast, alignment, and spacing.',
                time: '18 mins',
                tutor: 'Amos Reed',
                relatedResources: {
                  documents: [
                    {
                      title: 'Canva Design School',
                      url: 'https://www.canva.com/designschool/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Graphic Design Basics',
                      url: 'https://www.youtube.com/watch?v=GQS7wPujL2k',
                      duration: '1 hr+',
                      provider: 'YouTube',
                    },
                    {
                      title: 'Canva Masterclass',
                      url: 'https://www.youtube.com/watch?v=Llnmf5BXLBA',
                      duration: '2 hrs',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Layout Improvement Exercise',
                      prompt:
                        'Create a better flyer layout using contrast, alignment, and spacing.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Core principles',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Contrast and hierarchy',
                    },
                    {
                      id: 'learn-2',
                      title: 'Alignment and spacing',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Redesign a simple flyer using stronger hierarchy.',
                    },
                  ],
                },
                {
                  title: 'Applying principles',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Spotting weak layouts',
                    },
                    {
                      id: 'learn-2',
                      title: 'Improving composition',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Review two Instagram posts and describe layout strengths and weaknesses.',
                    },
                  ],
                },
              ],
            },
            {
              id: 'typography-and-color',
              title: 'Typography and color',
              status: 'locked',
              about:
                'Use type and color to communicate tone, mood, readability, and brand consistency.',
              lessonPage: {
                lessonTitle: 'Typography and Color',
                description:
                  'Understand font pairing, readability, palette choices, and color psychology.',
                assignmentSummary:
                  'Prepare one brand board with a font pair, headline sample, and 5-color palette.',
                time: '20 mins',
                tutor: 'Amos Reed',
                relatedResources: {
                  documents: [
                    {
                      title: 'Adobe Color',
                      url: 'https://color.adobe.com/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Graphic Design Basics',
                      url: 'https://www.youtube.com/watch?v=GQS7wPujL2k',
                      duration: '1 hr+',
                      provider: 'YouTube',
                    },
                    {
                      title: 'Canva Tutorial for Beginners',
                      url: 'https://www.youtube.com/watch?v=Llnmf5BXLBA',
                      duration: '2 hrs',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Typography and Palette Task',
                      prompt:
                        'Prepare one brand board with a font pair, headline sample, and 5-color palette.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Typography',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Pairing fonts',
                    },
                    {
                      id: 'learn-2',
                      title: 'Readability and hierarchy',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Choose a heading and body font pair for a youth brand.',
                    },
                  ],
                },
                {
                  title: 'Color systems',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Color harmony',
                    },
                    {
                      id: 'learn-2',
                      title: 'Brand consistency',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Create a 5-color palette for a tech startup.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'tools-for-everyday-design-work',
          title: 'Tools for Everyday Design Work',
          summaryTime: '45 mins',
          items: [
            {
              title: 'Canva Workflow for Beginners',
              duration: '22 mins',
              type: 'lesson',
              status: 'locked',
            },
            {
              title: 'Photoshop Essentials',
              duration: '23 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'designing-in-canva',
              title: 'Designing in Canva',
              status: 'locked',
              about:
                'Learn templates, page sizing, photo placement, and export settings in Canva.',
              lessonPage: {
                lessonTitle: 'Canva Workflow for Beginners',
                description:
                  'Create quick graphics for social media, events, and simple brand campaigns.',
                assignmentSummary:
                  'Create 3 Canva graphics for one campaign theme, including post, story, and flyer.',
                time: '22 mins',
                tutor: 'Amos Reed',
                relatedResources: {
                  documents: [
                    {
                      title: 'Canva Help Center',
                      url: 'https://www.canva.com/help/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Canva Tutorial for Beginners',
                      url: 'https://www.youtube.com/watch?v=Llnmf5BXLBA',
                      duration: '2 hrs',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Campaign Graphics Set',
                      prompt:
                        'Create 3 Canva graphics for one campaign theme, including post, story, and flyer.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Canva workspace',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Templates and sizing',
                    },
                    {
                      id: 'learn-2',
                      title: 'Frames and image placement',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Create an Instagram post and story with the same campaign theme.',
                    },
                  ],
                },
                {
                  title: 'Exporting work',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'File types and quality',
                    },
                    {
                      id: 'learn-2',
                      title: 'Sharing and collaboration',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Export your design in PNG and PDF formats.',
                    },
                  ],
                },
              ],
            },
            {
              id: 'photoshop-essentials',
              title: 'Photoshop essentials',
              status: 'locked',
              about:
                'Start using Photoshop for image cleanup, masking, text, smart objects, and export settings.',
              lessonPage: {
                lessonTitle: 'Photoshop Essentials',
                description:
                  'Get comfortable with layers, masks, text tools, and simple image edits.',
                assignmentSummary:
                  'Create a simple event poster in Photoshop using one photo, 2 text styles, and export for web.',
                time: '23 mins',
                tutor: 'Amos Reed',
                relatedResources: {
                  documents: [
                    {
                      title: 'Adobe Photoshop Help',
                      url: 'https://helpx.adobe.com/photoshop/user-guide.html',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Photoshop for Graphic Designers',
                      url: 'https://www.youtube.com/watch?v=mvAceDeU_gU',
                      duration: '1 hr+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Poster Mockup',
                      prompt:
                        'Create a simple event poster in Photoshop using one photo, 2 text styles, and export for web.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Photoshop basics',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Layers and masks',
                    },
                    {
                      id: 'learn-2',
                      title: 'Adjustment tools',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Clean up a photo and add title text.',
                    },
                  ],
                },
                {
                  title: 'Asset prep',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Resizing and exporting',
                    },
                    {
                      id: 'learn-2',
                      title: 'Smart object basics',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Prepare a web-ready hero image at the right size.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'brand-asset-creation',
          title: 'Brand Asset Creation',
          summaryTime: '40 mins',
          items: [
            {
              title: 'Social Media Asset Design',
              duration: '20 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'designing-social-media-assets',
              title: 'Designing social media assets',
              status: 'locked',
              about:
                'Turn a campaign brief into reusable post formats and branded visual content.',
              lessonPage: {
                lessonTitle: 'Social Media Asset Design',
                description:
                  'Build branded visual assets for modern digital campaigns.',
                assignmentSummary:
                  'Design 3 matching posts for one campaign and submit exported JPG files with your source file.',
                time: '20 mins',
                tutor: 'Amos Reed',
                relatedResources: {
                  documents: [
                    {
                      title: 'Meta Ad Creative Tips',
                      url: 'https://www.facebook.com/business/help',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Graphic Design Basics',
                      url: 'https://www.youtube.com/watch?v=GQS7wPujL2k',
                      duration: '1 hr+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Campaign Set Submission',
                      prompt:
                        'Design 3 matching posts for one campaign and submit exported JPG files with your source file.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Campaign asset sets',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Consistency across formats',
                    },
                    {
                      id: 'learn-2',
                      title: 'Using templates',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Create a 3-post campaign set for product launch.',
                    },
                  ],
                },
                {
                  title: 'Creative direction',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Visual tone',
                    },
                    {
                      id: 'learn-2',
                      title: 'Audience fit',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Write a short rationale for your visual direction.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'portfolio-project',
          title: 'Portfolio Project',
          summaryTime: '35 mins',
          items: [
            {
              title: 'Mini Brand Pack Project',
              duration: '35 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'build-a-mini-brand-pack',
              title: 'Build a mini brand pack',
              status: 'locked',
              about:
                'Combine design principles and tools to create a small, coherent brand pack.',
              lessonPage: {
                lessonTitle: 'Mini Brand Pack Project',
                description:
                  'Develop a small brand system with color, type, and sample assets.',
                assignmentSummary:
                  'Create a mini brand pack with logo concept, palette, font pair, and 2 branded graphics.',
                time: '35 mins',
                tutor: 'Amos Reed',
                relatedResources: {
                  documents: [
                    {
                      title: 'Adobe Illustrator Help',
                      url: 'https://helpx.adobe.com/illustrator/user-guide.html',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Brand Design Course for Beginners',
                      url: 'https://www.youtube.com/watch?v=tvYDYtQhreo',
                      duration: '3 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Mini Brand Pack',
                      prompt:
                        'Create a mini brand pack with logo concept, palette, font pair, and 2 branded graphics.',
                      submissionType: 'file',
                      dueInDays: 10,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Project scope',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Logo usage',
                    },
                    {
                      id: 'learn-2',
                      title: 'Color and type choices',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Produce one-page brand guide and 2 sample assets.',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      discussion: {
        enabled: true,
        channels: [
          {
            id: 'general',
            name: 'General Discussion',
          },
          {
            id: 'questions',
            name: 'Questions',
          },
          {
            id: 'announcements',
            name: 'Announcements',
          },
        ],
      },
    },
    {
      id: 'full-stack-development',
      slug: 'full-stack-development',
      title: 'Full-Stack Development',
      category: 'development',
      level: 'Beginner',
      duration: {
        months: 3,
        label: '3 months',
      },
      shortDescription:
        'Build complete web applications with frontend and backend technologies and track your tech career.',
      coverImage: fullStackDevelopmentImage,
      mentorId: 'mentor-sarah-okafor',
      tags: ['React', 'Node.js', 'MongoDB', 'APIs'],
      enrollment: {
        status: 'not-started',
        ctaLabel: 'Start Course',
        progressPercent: 0,
        completedLessons: 0,
        totalLessons: 6,
      },
      tabs: ['overview', 'course-outline', 'discussion'],
      overview: {
        about:
          'Build complete web applications with frontend and backend technologies and track your tech career.',
        whatYouWillLearn: [
          'HTML, CSS, and JavaScript foundations',
          'React UI development',
          'Backend APIs with Node.js',
          'Database integration',
          'Authentication and deployment',
        ],
        toolsNeeded: ['VS Code', 'Node.js', 'Postman', 'MongoDB Atlas'],
        prerequisites: ['Basic computer skills', 'Interest in web development'],
        benefits: [
          'Certificate of completion',
          'Capstone project',
          'Portfolio-ready app',
          'Mentor support',
        ],
      },
      courseOutline: [
        {
          id: 'frontend-foundations',
          title: 'Frontend Foundations',
          summaryTime: '60 mins',
          items: [
            {
              title: 'Web Foundations',
              duration: '25 mins',
              type: 'lesson',
              status: 'available',
            },
            {
              title: 'React Essentials',
              duration: '20 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'html-css-and-javascript-basics',
              title: 'HTML, CSS and JavaScript basics',
              status: 'available',
              about:
                'Start with the core building blocks of the web and understand how pages are structured, styled, and made interactive.',
              lessonPage: {
                lessonTitle: 'Web Foundations',
                description:
                  'A practical introduction to building and styling pages and wiring in browser behavior with JavaScript.',
                assignmentSummary:
                  'Build a responsive landing page with HTML, CSS, and one interactive JavaScript action.',
                time: '25 mins',
                tutor: 'Sarah Okafor',
                relatedResources: {
                  documents: [
                    {
                      title: 'MDN HTML Guides',
                      url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Full Stack Web Development for Beginners',
                      url: 'https://www.youtube.com/watch?v=nu_pCVPKzTk',
                      duration: '1 hr+',
                      provider: 'YouTube',
                    },
                    {
                      title: 'HTML Crash Course',
                      url: 'https://www.youtube.com/watch?v=qz0aGYrrlhU',
                      duration: '1 hr+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Landing Page Build',
                      prompt:
                        'Build a responsive landing page with HTML, CSS, and one interactive JavaScript action.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Core web stack',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'HTML page structure',
                    },
                    {
                      id: 'learn-2',
                      title: 'CSS layout basics',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Build a simple landing page with a hero and CTA.',
                    },
                  ],
                },
                {
                  title: 'JavaScript basics',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Variables and functions',
                    },
                    {
                      id: 'learn-2',
                      title: 'Simple DOM interaction',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Add a button that changes text or theme state.',
                    },
                  ],
                },
              ],
            },
            {
              id: 'react-essentials',
              title: 'React essentials',
              status: 'locked',
              about:
                'Learn components, props, state, and how to break a UI into reusable parts with React.',
              lessonPage: {
                lessonTitle: 'React Essentials',
                description:
                  'Move from static pages into modern component-based frontend work.',
                assignmentSummary:
                  'Create a small React app with a navbar, card list, and local state interaction.',
                time: '20 mins',
                tutor: 'Sarah Okafor',
                relatedResources: {
                  documents: [
                    {
                      title: 'React Learn',
                      url: 'https://react.dev/learn',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'React Full Course',
                      url: 'https://www.youtube.com/watch?v=CgkZ7MvWUAA',
                      duration: '4 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'React Component Task',
                      prompt:
                        'Create a small React app with a navbar, card list, and local state interaction.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'React thinking',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Components and props',
                    },
                    {
                      id: 'learn-2',
                      title: 'State basics',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Split a profile page into reusable components.',
                    },
                  ],
                },
                {
                  title: 'Rendering lists',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Mapping data to UI',
                    },
                    {
                      id: 'learn-2',
                      title: 'Conditional rendering',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Render a list of products from an array.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'backend-apis-with-node-js',
          title: 'Backend APIs with Node.js',
          summaryTime: '55 mins',
          items: [
            {
              title: 'Node.js and Express Basics',
              duration: '25 mins',
              type: 'lesson',
              status: 'locked',
            },
            {
              title: 'API Authentication Basics',
              duration: '20 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'node-js-and-express-basics',
              title: 'Node.js and Express basics',
              status: 'locked',
              about:
                'Understand server setup, routes, request handlers, middleware, and JSON APIs.',
              lessonPage: {
                lessonTitle: 'Node.js and Express Basics',
                description:
                  'Create a simple REST API and understand how the backend serves data to your frontend.',
                assignmentSummary:
                  'Create a Node and Express API with 3 endpoints and test them in Postman.',
                time: '25 mins',
                tutor: 'Sarah Okafor',
                relatedResources: {
                  documents: [
                    {
                      title: 'Express Guide',
                      url: 'https://expressjs.com/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Full Stack Web Development for Beginners',
                      url: 'https://www.youtube.com/watch?v=nu_pCVPKzTk',
                      duration: '1 hr+',
                      provider: 'YouTube',
                    },
                    {
                      title: 'Become a Fullstack Developer from Scratch',
                      url: 'https://www.youtube.com/watch?v=LzMnsfqjzkA',
                      duration: '4 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Mini REST API',
                      prompt:
                        'Create a Node and Express API with 3 endpoints and test them in Postman.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Express basics',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Routes and middleware',
                    },
                    {
                      id: 'learn-2',
                      title: 'Request and response cycle',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Build 3 GET endpoints for products, users, and orders.',
                    },
                  ],
                },
                {
                  title: 'API structure',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Status codes',
                    },
                    {
                      id: 'learn-2',
                      title: 'JSON responses',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Return consistent success and error response shapes.',
                    },
                  ],
                },
              ],
            },
            {
              id: 'authentication-and-protected-routes',
              title: 'Authentication and protected routes',
              status: 'locked',
              about:
                'Add login flows, route protection, and token-based auth to your API.',
              lessonPage: {
                lessonTitle: 'API Authentication Basics',
                description:
                  'Learn simple authentication patterns for full-stack apps.',
                assignmentSummary:
                  'Add one protected API route to your app and document how authentication works.',
                time: '20 mins',
                tutor: 'Sarah Okafor',
                relatedResources: {
                  documents: [
                    {
                      title: 'OWASP Authentication Cheat Sheet',
                      url: 'https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Become a Fullstack Developer from Scratch',
                      url: 'https://www.youtube.com/watch?v=LzMnsfqjzkA',
                      duration: '4 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Protected Route Task',
                      prompt:
                        'Add one protected API route to your app and document how authentication works.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Auth flow',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Register and login basics',
                    },
                    {
                      id: 'learn-2',
                      title: 'Protecting routes',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Design an auth flow diagram for your app.',
                    },
                  ],
                },
                {
                  title: 'Security basics',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Hashing passwords',
                    },
                    {
                      id: 'learn-2',
                      title: 'Token storage',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Explain the difference between access and refresh tokens.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'databases-and-data-flow',
          title: 'Databases and Data Flow',
          summaryTime: '50 mins',
          items: [
            {
              title: 'MongoDB for Full-Stack Apps',
              duration: '20 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'working-with-mongodb',
              title: 'Working with MongoDB',
              status: 'locked',
              about:
                'Store application data, connect your server, and perform basic CRUD operations.',
              lessonPage: {
                lessonTitle: 'MongoDB for Full-Stack Apps',
                description:
                  'Handle create, read, update, and delete operations with a database-backed app.',
                assignmentSummary:
                  'Create CRUD endpoints backed by MongoDB for a simple resource like tasks or products.',
                time: '20 mins',
                tutor: 'Sarah Okafor',
                relatedResources: {
                  documents: [
                    {
                      title: 'MongoDB Documentation',
                      url: 'https://www.mongodb.com/docs/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Full Stack Web Development for Beginners',
                      url: 'https://www.youtube.com/watch?v=nu_pCVPKzTk',
                      duration: '1 hr+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'CRUD Backend Task',
                      prompt:
                        'Create CRUD endpoints backed by MongoDB for a simple resource like tasks or products.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Connecting a database',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Collections and documents',
                    },
                    {
                      id: 'learn-2',
                      title: 'CRUD workflow',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Store users and products in MongoDB.',
                    },
                  ],
                },
                {
                  title: 'App data modeling',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Basic schema planning',
                    },
                    {
                      id: 'learn-2',
                      title: 'Relational thinking in document stores',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Design a simple schema for an e-commerce app.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'capstone-build',
          title: 'Capstone Build',
          summaryTime: '60 mins',
          items: [
            {
              title: 'Full-Stack Capstone',
              duration: '30 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'build-and-deploy-a-full-stack-app',
              title: 'Build and deploy a full-stack app',
              status: 'locked',
              about:
                'Bring the frontend, backend, and database together in one portfolio-ready project.',
              lessonPage: {
                lessonTitle: 'Full-Stack Capstone',
                description:
                  'Plan, build, test, and deploy a complete web application with user flows and data persistence.',
                assignmentSummary:
                  'Build a full-stack app with auth, CRUD, and deployment. Submit source link, live link, and short demo notes.',
                time: '30 mins',
                tutor: 'Sarah Okafor',
                relatedResources: {
                  documents: [
                    {
                      title: 'Vercel Docs',
                      url: 'https://vercel.com/docs',
                      type: 'document',
                    },
                    {
                      title: 'Render Docs',
                      url: 'https://render.com/docs',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Become a Fullstack Developer from Scratch',
                      url: 'https://www.youtube.com/watch?v=LzMnsfqjzkA',
                      duration: '4 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Capstone Submission',
                      prompt:
                        'Build a full-stack app with auth, CRUD, and deployment. Submit source link, live link, and short demo notes.',
                      submissionType: 'file',
                      dueInDays: 14,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Project planning',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Feature scope',
                    },
                    {
                      id: 'learn-2',
                      title: 'MVP thinking',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Write a feature list and database plan.',
                    },
                  ],
                },
                {
                  title: 'Deployment',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Frontend hosting',
                    },
                    {
                      id: 'learn-2',
                      title: 'Backend hosting',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Deploy your frontend and API and submit live links.',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      discussion: {
        enabled: true,
        channels: [
          {
            id: 'general',
            name: 'General Discussion',
          },
          {
            id: 'questions',
            name: 'Questions',
          },
          {
            id: 'announcements',
            name: 'Announcements',
          },
        ],
      },
    },
    {
      id: 'big-data-cloud-analytics',
      slug: 'big-data-cloud-analytics',
      title: 'Big Data & Cloud Analytics',
      category: 'data-science-analytics',
      level: 'Beginner',
      duration: {
        months: 3,
        label: '3 months',
      },
      shortDescription:
        'Form robust platforms to dig data pipelines, gain skills that power modern analytics.',
      coverImage: bigDataCloudImage,
      mentorId: 'mentor-priya-nair',
      tags: ['BigQuery', 'Cloud', 'SQL', 'ETL'],
      enrollment: {
        status: 'not-started',
        ctaLabel: 'Start Course',
        progressPercent: 0,
        completedLessons: 0,
        totalLessons: 5,
      },
      tabs: ['overview', 'course-outline', 'discussion'],
      overview: {
        about:
          'Form robust platforms to dig data pipelines, gain skills that power modern analytics.',
        whatYouWillLearn: [
          'Cloud analytics basics',
          'BigQuery and warehousing',
          'Data pipelines',
          'SQL in cloud workflows',
          'Dashboard reporting',
        ],
        toolsNeeded: ['Google Cloud', 'BigQuery', 'SQL', 'Python'],
        prerequisites: ['Basic spreadsheet skills', 'Curiosity about data'],
        benefits: [
          'Certificate of completion',
          'Cloud analytics workflows',
          'Hands-on query practice',
          'Mentor support',
        ],
      },
      courseOutline: [
        {
          id: 'cloud-and-big-data-basics',
          title: 'Cloud and Big Data Basics',
          summaryTime: '50 mins',
          items: [
            {
              title: 'Big Data Concepts',
              duration: '20 mins',
              type: 'lesson',
              status: 'available',
            },
            {
              title: 'Cloud Computing Foundations',
              duration: '18 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'big-data-concepts',
              title: 'Big data concepts',
              status: 'available',
              about:
                'Get familiar with big data vocabulary, cloud analytics workflows, and where modern teams store and query data.',
              lessonPage: {
                lessonTitle: 'Big Data Concepts',
                description:
                  'Understand scale, storage, processing, and why cloud platforms changed analytics work.',
                assignmentSummary:
                  'Write a short note comparing traditional reporting systems and cloud analytics stacks.',
                time: '20 mins',
                tutor: 'Priya Nair',
                relatedResources: {
                  documents: [
                    {
                      title: 'Google Cloud Architecture Center',
                      url: 'https://cloud.google.com/architecture',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Google Cloud Data Analytics Certificate Course',
                      url: 'https://www.youtube.com/watch?v=GAdgTK2Esn4',
                      duration: '1 hr+',
                      provider: 'YouTube',
                    },
                    {
                      title: 'Big Data Tutorial for Beginners',
                      url: 'https://www.youtube.com/watch?v=GAdgTK2Esn4',
                      duration: '1 hr+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Big Data Comparison Note',
                      prompt:
                        'Write a short note comparing traditional reporting systems and cloud analytics stacks.',
                      submissionType: 'text',
                      dueInDays: 7,
                      wordCount: '200-300',
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Why big data matters',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Volume, velocity, variety',
                    },
                    {
                      id: 'learn-2',
                      title: 'Analytics at scale',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Explain one example where spreadsheet analysis is not enough.',
                    },
                  ],
                },
                {
                  title: 'Cloud vs local analytics',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Scalability',
                    },
                    {
                      id: 'learn-2',
                      title: 'Cost and maintenance trade-offs',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Compare local database work to cloud analytics in 5 points.',
                    },
                  ],
                },
              ],
            },
            {
              id: 'cloud-computing-foundations',
              title: 'Cloud computing foundations',
              status: 'locked',
              about:
                'Learn the basics of cloud services, storage, compute, and data products used in analytics systems.',
              lessonPage: {
                lessonTitle: 'Cloud Computing Foundations',
                description:
                  'Understand the major building blocks behind modern cloud analytics environments.',
                assignmentSummary:
                  'Create a basic cloud analytics architecture showing data source, storage, warehouse, and dashboard layer.',
                time: '18 mins',
                tutor: 'Priya Nair',
                relatedResources: {
                  documents: [
                    {
                      title: 'Google Cloud Training',
                      url: 'https://cloud.google.com/learn/training',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Google Cloud Full Course for Beginners',
                      url: 'https://www.youtube.com/watch?v=lvZk_sc8u5I',
                      duration: '4 hrs+',
                      provider: 'YouTube',
                    },
                    {
                      title: 'Cloud Computing From Basics to Advanced',
                      url: 'https://www.youtube.com/watch?v=UH6qCty0nF4',
                      duration: '4 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Analytics Architecture Diagram',
                      prompt:
                        'Create a basic cloud analytics architecture showing data source, storage, warehouse, and dashboard layer.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Cloud service types',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'IaaS, PaaS, SaaS',
                    },
                    {
                      id: 'learn-2',
                      title: 'Storage and compute basics',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Map 3 cloud services to an analytics workflow.',
                    },
                  ],
                },
                {
                  title: 'Analytics architecture',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Warehouses and pipelines',
                    },
                    {
                      id: 'learn-2',
                      title: 'Reporting layers',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Draw a simple analytics architecture diagram.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'bigquery-and-sql-workflows',
          title: 'BigQuery and SQL Workflows',
          summaryTime: '45 mins',
          items: [
            {
              title: 'Introduction to BigQuery',
              duration: '20 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'introduction-to-bigquery',
              title: 'Introduction to BigQuery',
              status: 'locked',
              about:
                'Learn how BigQuery works and how analysts run SQL queries on large data sets in the cloud.',
              lessonPage: {
                lessonTitle: 'Introduction to BigQuery',
                description:
                  'Use BigQuery as a modern analytics warehouse and understand tables, datasets, and SQL jobs.',
                assignmentSummary:
                  'Write and test 5 analytical SQL queries on a sample dataset and submit screenshots plus SQL text.',
                time: '20 mins',
                tutor: 'Priya Nair',
                relatedResources: {
                  documents: [
                    {
                      title: 'BigQuery Documentation',
                      url: 'https://cloud.google.com/bigquery/docs',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Introduction to Google Cloud BigQuery',
                      url: 'https://www.youtube.com/watch?v=dNzkwKfn0dE',
                      duration: '20 mins',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'BigQuery SQL Task',
                      prompt:
                        'Write and test 5 analytical SQL queries on a sample dataset and submit screenshots plus SQL text.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'BigQuery basics',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Datasets and tables',
                    },
                    {
                      id: 'learn-2',
                      title: 'Running SQL queries',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Write 3 sample analytical SQL queries.',
                    },
                  ],
                },
                {
                  title: 'Cost-aware querying',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Limiting data scans',
                    },
                    {
                      id: 'learn-2',
                      title: 'Clean query structure',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Refactor one query to be more efficient.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'pipeline-thinking',
          title: 'Pipeline Thinking',
          summaryTime: '40 mins',
          items: [
            {
              title: 'Data Pipeline Overview',
              duration: '20 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'from-raw-data-to-dashboard',
              title: 'From raw data to dashboard',
              status: 'locked',
              about:
                'See how data moves from source systems into cleaned warehouse tables and finally into reporting tools.',
              lessonPage: {
                lessonTitle: 'Data Pipeline Overview',
                description:
                  'Build a mental model for ETL and ELT workflows used by analytics teams.',
                assignmentSummary:
                  'Describe how order data would move from app database to executive dashboard in a simple pipeline.',
                time: '20 mins',
                tutor: 'Priya Nair',
                relatedResources: {
                  documents: [
                    {
                      title: 'dbt ETL vs ELT Guide',
                      url: 'https://docs.getdbt.com/docs/introduction',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Google Cloud Data Analytics Course',
                      url: 'https://www.youtube.com/watch?v=GAdgTK2Esn4',
                      duration: '1 hr+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Pipeline Case Study',
                      prompt:
                        'Describe how order data would move from app database to executive dashboard in a simple pipeline.',
                      submissionType: 'text',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Pipeline stages',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Extract, transform, load',
                    },
                    {
                      id: 'learn-2',
                      title: 'Monitoring and data quality',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'List possible quality checks for a sales dataset.',
                    },
                  ],
                },
                {
                  title: 'Reporting output',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Metrics layers',
                    },
                    {
                      id: 'learn-2',
                      title: 'Dashboard design basics',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Suggest 5 KPIs for an e-commerce dashboard.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'reporting-and-delivery',
          title: 'Reporting and Delivery',
          summaryTime: '35 mins',
          items: [
            {
              title: 'Cloud Analytics Mini Project',
              duration: '35 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'cloud-analytics-mini-project',
              title: 'Cloud analytics mini project',
              status: 'locked',
              about:
                'Combine SQL thinking, cloud concepts, and KPI design into a simple reporting project.',
              lessonPage: {
                lessonTitle: 'Cloud Analytics Mini Project',
                description:
                  'Create a small reporting brief with metrics, query logic, and dashboard plan.',
                assignmentSummary:
                  'Create an analytics brief with 5 KPIs, data sources, SQL notes, and dashboard sketch.',
                time: '35 mins',
                tutor: 'Priya Nair',
                relatedResources: {
                  documents: [
                    {
                      title: 'Looker Studio Help',
                      url: 'https://support.google.com/looker-studio/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Google Cloud Data Analytics Certificate Course',
                      url: 'https://www.youtube.com/watch?v=GAdgTK2Esn4',
                      duration: '1 hr+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Mini Analytics Brief',
                      prompt:
                        'Create an analytics brief with 5 KPIs, data sources, SQL notes, and dashboard sketch.',
                      submissionType: 'file',
                      dueInDays: 10,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Project delivery',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Metric definitions',
                    },
                    {
                      id: 'learn-2',
                      title: 'Dashboard audience',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Prepare a 1-page analytics brief for a retail team.',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      discussion: {
        enabled: true,
        channels: [
          {
            id: 'general',
            name: 'General Discussion',
          },
          {
            id: 'questions',
            name: 'Questions',
          },
          {
            id: 'announcements',
            name: 'Announcements',
          },
        ],
      },
    },
    {
      id: 'project-management',
      slug: 'project-management',
      title: 'Project Management',
      category: 'business-strategy',
      level: 'Beginner',
      duration: {
        months: 3,
        label: '3 months',
      },
      shortDescription:
        'Master planning, execution and delivery to become a sought-after project manager.',
      coverImage: projectManagementImage,
      mentorId: 'mentor-elena-morris',
      tags: ['Planning', 'Agile', 'Stakeholders', 'Scrum'],
      enrollment: {
        status: 'not-started',
        ctaLabel: 'Start Course',
        progressPercent: 0,
        completedLessons: 0,
        totalLessons: 6,
      },
      tabs: ['overview', 'course-outline', 'discussion'],
      overview: {
        about:
          'Master planning, execution and delivery to become a sought-after project manager.',
        whatYouWillLearn: [
          'Project lifecycle',
          'Agile and Scrum basics',
          'Planning and scheduling',
          'Stakeholder communication',
          'Risk tracking',
        ],
        toolsNeeded: ['Google Sheets', 'Trello or Jira', 'Slides'],
        prerequisites: [
          'Basic communication skills',
          'Interest in coordination work',
        ],
        benefits: [
          'Certificate of completion',
          'Templates and frameworks',
          'Real-world planning exercises',
          'Mentor support',
        ],
      },
      courseOutline: [
        {
          id: 'project-fundamentals',
          title: 'Project Fundamentals',
          summaryTime: '45 mins',
          items: [
            {
              title: 'Project Management Fundamentals',
              duration: '18 mins',
              type: 'lesson',
              status: 'available',
            },
            {
              title: 'Project Lifecycle',
              duration: '15 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'what-project-management-is',
              title: 'What project management is',
              status: 'available',
              about:
                'Understand project work, roles, constraints, and why teams need clear planning and accountability.',
              lessonPage: {
                lessonTitle: 'Project Management Fundamentals',
                description:
                  'Start with the language, phases, and responsibilities that define project delivery.',
                assignmentSummary:
                  'Write a short summary of a real or imagined project, including goal, owner, timeline, and major constraints.',
                time: '18 mins',
                tutor: 'Elena Morris',
                relatedResources: {
                  documents: [
                    {
                      title: 'PMI Learning Resources',
                      url: 'https://www.pmi.org/learning',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Intro to Project Management',
                      url: 'https://www.youtube.com/watch?v=rck3MnC7OXA',
                      duration: '10 mins',
                      provider: 'YouTube',
                    },
                    {
                      title: 'Project Management 101',
                      url: 'https://www.youtube.com/watch?v=cLXkOYaZ_K0',
                      duration: '1 hr+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Project Summary Note',
                      prompt:
                        'Write a short summary of a real or imagined project, including goal, owner, timeline, and major constraints.',
                      submissionType: 'text',
                      dueInDays: 7,
                      wordCount: '200-300',
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Project basics',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Scope, time, cost',
                    },
                    {
                      id: 'learn-2',
                      title: 'Project roles',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Describe a project you know and define scope, timeline, and owner.',
                    },
                  ],
                },
                {
                  title: 'Success factors',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Clear outcomes',
                    },
                    {
                      id: 'learn-2',
                      title: 'Cross-team communication',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'List 5 reasons projects fail and how to reduce the risk.',
                    },
                  ],
                },
              ],
            },
            {
              id: 'project-lifecycle',
              title: 'Project lifecycle',
              status: 'locked',
              about:
                'Learn the stages from initiation through planning, execution, monitoring, and closing.',
              lessonPage: {
                lessonTitle: 'Project Lifecycle',
                description:
                  'Break project work into phases and understand what each stage requires.',
                assignmentSummary:
                  'Create a project lifecycle map for an internal software rollout.',
                time: '15 mins',
                tutor: 'Elena Morris',
                relatedResources: {
                  documents: [
                    {
                      title: 'Atlassian Project Management',
                      url: 'https://www.atlassian.com/work-management/project-management',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Project Management Training for Beginners',
                      url: 'https://www.youtube.com/watch?v=UTSKQe8aJXQ',
                      duration: '30 mins+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Lifecycle Map',
                      prompt:
                        'Create a project lifecycle map for an internal software rollout.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Lifecycle phases',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Initiation and planning',
                    },
                    {
                      id: 'learn-2',
                      title: 'Execution and closing',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Map lifecycle phases for an app launch project.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'planning-and-agile-delivery',
          title: 'Planning and Agile Delivery',
          summaryTime: '40 mins',
          items: [
            {
              title: 'Planning Project Work',
              duration: '18 mins',
              type: 'lesson',
              status: 'locked',
            },
            {
              title: 'Agile and Scrum Basics',
              duration: '18 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'planning-project-work',
              title: 'Planning project work',
              status: 'locked',
              about:
                'Create timelines, tasks, ownership, and milestone plans using lightweight frameworks.',
              lessonPage: {
                lessonTitle: 'Planning Project Work',
                description: 'Turn goals into trackable tasks and milestones.',
                assignmentSummary:
                  'Build a 4-week project plan with milestones, task owners, and status column.',
                time: '18 mins',
                tutor: 'Elena Morris',
                relatedResources: {
                  documents: [
                    {
                      title: 'Asana Project Planning Guide',
                      url: 'https://asana.com/resources/project-planning',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Project Management Training for Beginners',
                      url: 'https://www.youtube.com/watch?v=UTSKQe8aJXQ',
                      duration: '30 mins+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Milestone Plan',
                      prompt:
                        'Build a 4-week project plan with milestones, task owners, and status column.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Scope to tasks',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Breaking work down',
                    },
                    {
                      id: 'learn-2',
                      title: 'Milestones and dependencies',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Break a website project into phases and tasks.',
                    },
                  ],
                },
                {
                  title: 'Tracking progress',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Status reporting',
                    },
                    {
                      id: 'learn-2',
                      title: 'Handling blockers',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Prepare a weekly project update template.',
                    },
                  ],
                },
              ],
            },
            {
              id: 'agile-and-scrum-basics',
              title: 'Agile and Scrum basics',
              status: 'locked',
              about:
                'Learn the Agile mindset, sprint structures, and what Scrum adds to collaborative delivery.',
              lessonPage: {
                lessonTitle: 'Agile and Scrum Basics',
                description:
                  'Understand how Agile delivery differs from heavy upfront planning and how teams run short iterations.',
                assignmentSummary:
                  'Prepare a 1-week sprint backlog with story titles, owners, and estimated effort.',
                time: '18 mins',
                tutor: 'Elena Morris',
                relatedResources: {
                  documents: [
                    {
                      title: 'Atlassian Agile Coach',
                      url: 'https://www.atlassian.com/agile',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Agile Management',
                      url: 'https://www.youtube.com/watch?v=km7n3DI5IWk',
                      duration: '10 mins',
                      provider: 'YouTube',
                    },
                    {
                      title: 'Google Project Management Intro',
                      url: 'https://www.youtube.com/watch?v=rck3MnC7OXA',
                      duration: '10 mins',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Sprint Planning Exercise',
                      prompt:
                        'Prepare a 1-week sprint backlog with story titles, owners, and estimated effort.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Agile mindset',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Iterative delivery',
                    },
                    {
                      id: 'learn-2',
                      title: 'Responding to change',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Compare Agile and waterfall for one product scenario.',
                    },
                  ],
                },
                {
                  title: 'Scrum flow',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Sprints and ceremonies',
                    },
                    {
                      id: 'learn-2',
                      title: 'Backlogs and roles',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Write a simple sprint plan with 5 tasks.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'communication-risk-and-delivery',
          title: 'Communication, Risk and Delivery',
          summaryTime: '35 mins',
          items: [
            {
              title: 'Stakeholder Communication and Risk Tracking',
              duration: '20 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'stakeholder-communication-and-risk-tracking',
              title: 'Stakeholder communication and risk tracking',
              status: 'locked',
              about:
                'Keep projects healthy through clear updates, expectation management, and risk logging.',
              lessonPage: {
                lessonTitle: 'Stakeholder Communication and Risk Tracking',
                description:
                  'Learn what to communicate, how often to do it, and how to track delivery risks early.',
                assignmentSummary:
                  'Build a risk register for a software launch with severity, owner, mitigation, and status.',
                time: '20 mins',
                tutor: 'Elena Morris',
                relatedResources: {
                  documents: [
                    {
                      title: 'Smartsheet Risk Register Guide',
                      url: 'https://www.smartsheet.com/content/risk-register',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Project Management 101',
                      url: 'https://www.youtube.com/watch?v=cLXkOYaZ_K0',
                      duration: '1 hr+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Risk Register',
                      prompt:
                        'Build a risk register for a software launch with severity, owner, mitigation, and status.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Stakeholder updates',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Status summaries',
                    },
                    {
                      id: 'learn-2',
                      title: 'Decision escalation',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Write a weekly status update email.',
                    },
                  ],
                },
                {
                  title: 'Risk logs',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Risk identification',
                    },
                    {
                      id: 'learn-2',
                      title: 'Mitigation planning',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Create a simple risk log with 5 entries.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'final-delivery-exercise',
          title: 'Final Delivery Exercise',
          summaryTime: '30 mins',
          items: [
            {
              title: 'Mini Delivery Simulation',
              duration: '30 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'mini-delivery-simulation',
              title: 'Mini delivery simulation',
              status: 'locked',
              about:
                'Apply project planning, Agile thinking, and communication in one compact simulation.',
              lessonPage: {
                lessonTitle: 'Mini Delivery Simulation',
                description:
                  'Plan a project, track progress, and report risks in one final course exercise.',
                assignmentSummary:
                  'Submit a project brief, milestone plan, sprint board, status update, and risk register for a sample digital project.',
                time: '30 mins',
                tutor: 'Elena Morris',
                relatedResources: {
                  documents: [
                    {
                      title: 'Google Project Management Certificate Playlist',
                      url: 'https://www.youtube.com/playlist?list=PLTZYG7bZ1u6puLWxUtqAjZkIB4dB_JFzk',
                      type: 'playlist',
                    },
                  ],
                  videos: [
                    {
                      title: 'Google Project Management Intro',
                      url: 'https://www.youtube.com/watch?v=rck3MnC7OXA',
                      duration: '10 mins',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Final Delivery Pack',
                      prompt:
                        'Submit a project brief, milestone plan, sprint board, status update, and risk register for a sample digital project.',
                      submissionType: 'file',
                      dueInDays: 10,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Simulation brief',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Scope, timeline, and risk',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Prepare a final delivery pack for a 6-week project.',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      discussion: {
        enabled: true,
        channels: [
          {
            id: 'general',
            name: 'General Discussion',
          },
          {
            id: 'questions',
            name: 'Questions',
          },
          {
            id: 'announcements',
            name: 'Announcements',
          },
        ],
      },
    },
    {
      id: 'immersion-design',
      slug: 'immersion-design',
      title: 'Immersion Design',
      category: 'design',
      level: 'Intermediate',
      duration: {
        months: 3,
        label: '3 months',
      },
      shortDescription:
        'Launch your career in immersive design with hands-on AR/VR projects.',
      coverImage: immersionDesignImage,
      mentorId: 'mentor-maya-hughes',
      tags: ['AR', 'VR', 'Spatial UX', 'Storyboarding'],
      enrollment: {
        status: 'not-started',
        ctaLabel: 'Start Course',
        progressPercent: 0,
        completedLessons: 0,
        totalLessons: 5,
      },
      tabs: ['overview', 'course-outline', 'discussion'],
      overview: {
        about:
          'Launch your career in immersive design with hands-on AR/VR projects.',
        whatYouWillLearn: [
          'AR and VR experience basics',
          'Spatial UX principles',
          'Storyboarding',
          'VR prototyping',
          'Immersive interaction flows',
        ],
        toolsNeeded: ['Figma', 'Blender', 'Miro'],
        prerequisites: ['Basic UI/UX knowledge', 'Comfort with design tools'],
        benefits: [
          'Certificate of completion',
          'Project-based learning',
          'Future-facing design skills',
          'Mentor support',
        ],
      },
      courseOutline: [
        {
          id: 'introduction-to-spatial-experience-design',
          title: 'Introduction to Spatial Experience Design',
          summaryTime: '40 mins',
          items: [
            {
              title: 'AR/VR Design Foundations',
              duration: '20 mins',
              type: 'lesson',
              status: 'available',
            },
            {
              title: 'Storyboarding for Immersive Design',
              duration: '15 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'ar-vr-design-foundations',
              title: 'AR/VR design foundations',
              status: 'available',
              about:
                'Explore how immersive interfaces differ from standard screen-based products and what changes in user behavior.',
              lessonPage: {
                lessonTitle: 'AR/VR Design Foundations',
                description:
                  'Understand spatial interaction, environment cues, and first-person experience design.',
                assignmentSummary:
                  'Write a comparison of AR and VR user experience constraints and where each one works best.',
                time: '20 mins',
                tutor: 'Maya Hughes',
                relatedResources: {
                  documents: [
                    {
                      title: 'Unity XR Interaction Toolkit',
                      url: 'https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@latest',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'UX for AR/VR',
                      url: 'https://www.youtube.com/watch?v=4gJDKUh0_wc',
                      duration: '1 hr+',
                      provider: 'YouTube',
                    },
                    {
                      title: 'UX Design for Virtual Reality',
                      url: 'https://www.youtube.com/watch?v=qQWQrGDnZPc',
                      duration: '40 mins+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'AR vs VR Comparison',
                      prompt:
                        'Write a comparison of AR and VR user experience constraints and where each one works best.',
                      submissionType: 'text',
                      dueInDays: 7,
                      wordCount: '250-350',
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Immersive basics',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'AR vs VR',
                    },
                    {
                      id: 'learn-2',
                      title: 'Spatial awareness',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Compare a mobile app flow to a VR task flow.',
                    },
                  ],
                },
                {
                  title: 'Design shifts',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Presence and comfort',
                    },
                    {
                      id: 'learn-2',
                      title: 'Navigation in space',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'List 5 design constraints unique to VR.',
                    },
                  ],
                },
              ],
            },
            {
              id: 'storyboarding-immersive-flows',
              title: 'Storyboarding immersive flows',
              status: 'locked',
              about:
                'Use storyboards to plan user actions, environment triggers, and emotional flow inside immersive experiences.',
              lessonPage: {
                lessonTitle: 'Storyboarding for Immersive Design',
                description:
                  'Translate ideas into visual scenes that describe movement, interaction, and feedback in space.',
                assignmentSummary:
                  'Create a 6-frame storyboard for an immersive onboarding or learning experience.',
                time: '15 mins',
                tutor: 'Maya Hughes',
                relatedResources: {
                  documents: [
                    {
                      title: 'Miro Storyboard Templates',
                      url: 'https://miro.com/templates/storyboard/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Augmented Reality Beginner Workshop',
                      url: 'https://www.youtube.com/watch?v=sSnMXzDZcH4',
                      duration: '1 hr+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Storyboard Submission',
                      prompt:
                        'Create a 6-frame storyboard for an immersive onboarding or learning experience.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Storyboard structure',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Scenes and interaction cues',
                    },
                    {
                      id: 'learn-2',
                      title: 'User goal framing',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Sketch a 6-frame immersive learning storyboard.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'prototyping-in-spatial-context',
          title: 'Prototyping in Spatial Context',
          summaryTime: '35 mins',
          items: [
            {
              title: 'VR Prototyping Basics',
              duration: '18 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'vr-prototyping-basics',
              title: 'VR prototyping basics',
              status: 'locked',
              about:
                'Learn how designers test concepts in VR quickly without full production development.',
              lessonPage: {
                lessonTitle: 'VR Prototyping Basics',
                description:
                  'Understand rapid prototyping methods for immersive interaction ideas.',
                assignmentSummary:
                  'Submit a short plan for testing one immersive interaction with prototype fidelity, audience, and success criteria.',
                time: '18 mins',
                tutor: 'Maya Hughes',
                relatedResources: {
                  documents: [
                    {
                      title: 'Blender Manual',
                      url: 'https://docs.blender.org/manual/en/latest/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Learn VR Prototyping',
                      url: 'https://www.youtube.com/watch?v=i6fCFnmGtv8',
                      duration: '20 mins+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Prototype Plan',
                      prompt:
                        'Submit a short plan for testing one immersive interaction with prototype fidelity, audience, and success criteria.',
                      submissionType: 'text',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Prototype methods',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Low fidelity testing',
                    },
                    {
                      id: 'learn-2',
                      title: 'Prototype goals',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Choose one immersive feature and define how you would prototype it.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'interaction-and-comfort',
          title: 'Interaction and Comfort',
          summaryTime: '30 mins',
          items: [
            {
              title: 'Comfort in Immersive UX',
              duration: '15 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'reducing-motion-discomfort',
              title: 'Reducing motion discomfort',
              status: 'locked',
              about:
                'Learn comfort principles for movement, UI placement, and interaction timing in immersive environments.',
              lessonPage: {
                lessonTitle: 'Comfort in Immersive UX',
                description:
                  'Avoid common mistakes that make immersive products tiring or confusing to use.',
                assignmentSummary:
                  'Review an immersive concept and submit a short comfort audit with at least 5 risks and fixes.',
                time: '15 mins',
                tutor: 'Maya Hughes',
                relatedResources: {
                  documents: [
                    {
                      title: 'Meta Presence Platform Best Practices',
                      url: 'https://developers.meta.com/horizon/documentation/unity/unity-best-practices/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'UX Design for Virtual Reality',
                      url: 'https://www.youtube.com/watch?v=qQWQrGDnZPc',
                      duration: '40 mins+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Comfort Audit',
                      prompt:
                        'Review an immersive concept and submit a short comfort audit with at least 5 risks and fixes.',
                      submissionType: 'text',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Comfort design',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Motion comfort',
                    },
                    {
                      id: 'learn-2',
                      title: 'Readable UI placement',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Audit an immersive concept for 5 possible comfort risks.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'immersive-experience-project',
          title: 'Immersive Experience Project',
          summaryTime: '30 mins',
          items: [
            {
              title: 'Immersive Concept Project',
              duration: '30 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'design-an-immersive-concept',
              title: 'Design an immersive concept',
              status: 'locked',
              about:
                'Bring concept, storyboard, and interaction design together in a final mini project.',
              lessonPage: {
                lessonTitle: 'Immersive Concept Project',
                description:
                  'Propose and structure a beginner-level immersive experience with clear audience, goal, and interaction path.',
                assignmentSummary:
                  'Submit a concept board, user goal, environment notes, storyboard, and interaction sketch for one immersive product idea.',
                time: '30 mins',
                tutor: 'Maya Hughes',
                relatedResources: {
                  documents: [
                    {
                      title: 'Designerrs Academy',
                      url: 'https://www.youtube.com/c/DesignerrsAcademy',
                      type: 'channel',
                    },
                  ],
                  videos: [
                    {
                      title: 'AR/VR UX Course',
                      url: 'https://www.youtube.com/watch?v=4gJDKUh0_wc',
                      duration: '1 hr+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Final Immersive Concept',
                      prompt:
                        'Submit a concept board, user goal, environment notes, storyboard, and interaction sketch for one immersive product idea.',
                      submissionType: 'file',
                      dueInDays: 10,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Project build',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Concept framing',
                    },
                    {
                      id: 'learn-2',
                      title: 'Experience path',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Submit a concept board and storyboard for your immersive experience.',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      discussion: {
        enabled: true,
        channels: [
          {
            id: 'general',
            name: 'General Discussion',
          },
          {
            id: 'questions',
            name: 'Questions',
          },
          {
            id: 'announcements',
            name: 'Announcements',
          },
        ],
      },
    },
    {
      id: 'frontend-development',
      slug: 'frontend-development',
      title: 'Frontend Development',
      category: 'development',
      level: 'Beginner',
      duration: {
        months: 3,
        label: '3 months',
      },
      shortDescription:
        'Design interactive web experiences and launch your first frontend developer career.',
      coverImage: frontendDevelopmentImage,
      mentorId: 'mentor-jordan-lee',
      tags: ['HTML', 'CSS', 'JavaScript', 'React'],
      enrollment: {
        status: 'not-started',
        ctaLabel: 'Start Course',
        progressPercent: 0,
        completedLessons: 0,
        totalLessons: 5,
      },
      tabs: ['overview', 'course-outline', 'discussion'],
      overview: {
        about:
          'Design interactive web experiences and launch your first frontend developer career.',
        whatYouWillLearn: [
          'Semantic HTML',
          'Modern CSS layouts',
          'JavaScript DOM work',
          'React components',
          'Responsive design',
        ],
        toolsNeeded: ['VS Code', 'Browser DevTools', 'Figma'],
        prerequisites: ['Basic computer skills', 'Interest in web interfaces'],
        benefits: [
          'Certificate of completion',
          'Frontend mini projects',
          'Responsive UI practice',
          'Mentor support',
        ],
      },
      courseOutline: [
        {
          id: 'core-frontend-skills',
          title: 'Core Frontend Skills',
          summaryTime: '55 mins',
          items: [
            {
              title: 'HTML Structure and Semantics',
              duration: '18 mins',
              type: 'lesson',
              status: 'available',
            },
            {
              title: 'CSS Layout and Responsiveness',
              duration: '20 mins',
              type: 'lesson',
              status: 'locked',
            },
            {
              title: 'JavaScript Interaction Basics',
              duration: '17 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'html-structure-and-semantics',
              title: 'HTML structure and semantics',
              status: 'available',
              about:
                'Learn how to structure clean web pages with semantic elements and accessible markup.',
              lessonPage: {
                lessonTitle: 'HTML Structure and Semantics',
                description:
                  'Build a solid base for every frontend interface using semantic HTML.',
                assignmentSummary:
                  'Create a semantic web page for a blog article and include correct heading structure and alt text.',
                time: '18 mins',
                tutor: 'Jordan Lee',
                relatedResources: {
                  documents: [
                    {
                      title: 'MDN HTML Basics',
                      url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'HTML Tutorial for Beginners',
                      url: 'https://www.youtube.com/watch?v=qz0aGYrrlhU',
                      duration: '1 hr+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Semantic HTML Task',
                      prompt:
                        'Create a semantic web page for a blog article and include correct heading structure and alt text.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'HTML essentials',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Document structure',
                    },
                    {
                      id: 'learn-2',
                      title: 'Semantic tags',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Build a semantic article page with header, main, and footer.',
                    },
                  ],
                },
                {
                  title: 'Accessibility basics',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Labels and alt text',
                    },
                    {
                      id: 'learn-2',
                      title: 'Heading order',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Fix accessibility issues in a small HTML snippet.',
                    },
                  ],
                },
              ],
            },
            {
              id: 'css-layout-and-responsiveness',
              title: 'CSS layout and responsiveness',
              status: 'locked',
              about:
                'Style pages with spacing, typography, flexbox, grid, and media queries for different screens.',
              lessonPage: {
                lessonTitle: 'CSS Layout and Responsiveness',
                description:
                  'Move from plain markup to structured, responsive UI layouts.',
                assignmentSummary:
                  'Build a responsive 3-card feature section using flex or grid with mobile and desktop layouts.',
                time: '20 mins',
                tutor: 'Jordan Lee',
                relatedResources: {
                  documents: [
                    {
                      title: 'MDN CSS Layout',
                      url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Frontend Web Development Bootcamp',
                      url: 'https://www.youtube.com/watch?v=zJSY8tbf_ys',
                      duration: '20 hrs+',
                      provider: 'YouTube',
                    },
                    {
                      title: 'Build a Simple Website',
                      url: 'https://www.youtube.com/watch?v=krfUjg0S2uI',
                      duration: '3 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Responsive Layout Task',
                      prompt:
                        'Build a responsive 3-card feature section using flex or grid with mobile and desktop layouts.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Layout systems',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Flexbox and grid',
                    },
                    {
                      id: 'learn-2',
                      title: 'Responsive spacing',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Rebuild a card grid with CSS grid.',
                    },
                  ],
                },
                {
                  title: 'Responsive design',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Breakpoints',
                    },
                    {
                      id: 'learn-2',
                      title: 'Fluid thinking',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Make a simple landing page look good on mobile and desktop.',
                    },
                  ],
                },
              ],
            },
            {
              id: 'javascript-interaction-basics',
              title: 'JavaScript interaction basics',
              status: 'locked',
              about:
                'Use JavaScript to read inputs, change DOM content, and create simple interactive behaviors.',
              lessonPage: {
                lessonTitle: 'JavaScript Interaction Basics',
                description:
                  'Start making static pages interactive with events and DOM manipulation.',
                assignmentSummary:
                  'Build one small interactive UI component with vanilla JavaScript, such as tabs, modal, or accordion.',
                time: '17 mins',
                tutor: 'Jordan Lee',
                relatedResources: {
                  documents: [
                    {
                      title: 'MDN JavaScript First Steps',
                      url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Frontend Bootcamp',
                      url: 'https://www.youtube.com/watch?v=zJSY8tbf_ys',
                      duration: '20 hrs+',
                      provider: 'YouTube',
                    },
                    {
                      title: 'Build a Simple Website',
                      url: 'https://www.youtube.com/watch?v=krfUjg0S2uI',
                      duration: '3 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Interactive UI Task',
                      prompt:
                        'Build one small interactive UI component with vanilla JavaScript, such as tabs, modal, or accordion.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'DOM interaction',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Selecting elements',
                    },
                    {
                      id: 'learn-2',
                      title: 'Click and input events',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Create a simple form validator or theme toggle.',
                    },
                  ],
                },
                {
                  title: 'State basics',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Tracking simple UI state',
                    },
                    {
                      id: 'learn-2',
                      title: 'Conditional classes',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Build a show and hide accordion component.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'modern-component-workflows',
          title: 'Modern Component Workflows',
          summaryTime: '40 mins',
          items: [
            {
              title: 'React for Frontend Developers',
              duration: '22 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'react-for-frontend-developers',
              title: 'React for frontend developers',
              status: 'locked',
              about:
                'Use components and props to build maintainable frontend pages with reusable UI pieces.',
              lessonPage: {
                lessonTitle: 'React for Frontend Developers',
                description:
                  'Move beyond static pages into reusable component-driven design.',
                assignmentSummary:
                  'Create a React page with reusable cards, local state, and one filter interaction.',
                time: '22 mins',
                tutor: 'Jordan Lee',
                relatedResources: {
                  documents: [
                    {
                      title: 'React Quick Start',
                      url: 'https://react.dev/learn',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'React Full Course',
                      url: 'https://www.youtube.com/watch?v=CgkZ7MvWUAA',
                      duration: '4 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'React UI Build',
                      prompt:
                        'Create a React page with reusable cards, local state, and one filter interaction.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'React basics',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Components and props',
                    },
                    {
                      id: 'learn-2',
                      title: 'JSX and list rendering',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Convert a static card grid into React components.',
                    },
                  ],
                },
                {
                  title: 'State and events',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'useState basics',
                    },
                    {
                      id: 'learn-2',
                      title: 'Interactive components',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Build a simple FAQ accordion in React.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'frontend-project-build',
          title: 'Frontend Project Build',
          summaryTime: '35 mins',
          items: [
            {
              title: 'Responsive Frontend Project',
              duration: '35 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'build-and-polish-a-responsive-page',
              title: 'Build and polish a responsive page',
              status: 'locked',
              about:
                'Apply layout, responsiveness, and interaction basics to a realistic frontend page.',
              lessonPage: {
                lessonTitle: 'Responsive Frontend Project',
                description:
                  'Build a polished UI page that looks and behaves well across devices.',
                assignmentSummary:
                  'Build a responsive page with at least 3 sections, one interaction, and clean semantic structure.',
                time: '35 mins',
                tutor: 'Jordan Lee',
                relatedResources: {
                  documents: [
                    {
                      title: 'Web.dev Responsive Design',
                      url: 'https://web.dev/responsive-web-design-basics/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Build a Simple Website',
                      url: 'https://www.youtube.com/watch?v=krfUjg0S2uI',
                      duration: '3 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Final Frontend Build',
                      prompt:
                        'Build a responsive page with at least 3 sections, one interaction, and clean semantic structure.',
                      submissionType: 'file',
                      dueInDays: 10,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Project scope',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Structure and layout',
                    },
                    {
                      id: 'learn-2',
                      title: 'Responsive polish',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Submit a completed responsive landing page or dashboard section.',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      discussion: {
        enabled: true,
        channels: [
          {
            id: 'general',
            name: 'General Discussion',
          },
          {
            id: 'questions',
            name: 'Questions',
          },
          {
            id: 'announcements',
            name: 'Announcements',
          },
        ],
      },
    },
    {
      id: 'blockchain-development',
      slug: 'blockchain-development',
      title: 'Blockchain Development',
      category: 'development',
      level: 'Intermediate',
      duration: {
        months: 3,
        label: '3 months',
      },
      shortDescription:
        'Learn blockchain development to create the next generation of digital solutions.',
      coverImage: blockchainDevelopmentImage,
      mentorId: 'mentor-daniel-kato',
      tags: ['Blockchain', 'Solidity', 'Web3', 'Smart Contracts'],
      enrollment: {
        status: 'not-started',
        ctaLabel: 'Start Course',
        progressPercent: 0,
        completedLessons: 0,
        totalLessons: 6,
      },
      tabs: ['overview', 'course-outline', 'discussion'],
      overview: {
        about:
          'Learn blockchain development to create the next generation of digital solutions.',
        whatYouWillLearn: [
          'Blockchain concepts',
          'Wallets and transactions',
          'Solidity basics',
          'Smart contracts',
          'Simple dApp thinking',
        ],
        toolsNeeded: ['Remix IDE', 'MetaMask', 'VS Code'],
        prerequisites: ['Basic JavaScript knowledge', 'Interest in Web3'],
        benefits: [
          'Certificate of completion',
          'Smart contract practice',
          'Beginner-friendly blockchain projects',
          'Mentor support',
        ],
      },
      courseOutline: [
        {
          id: 'blockchain-basics',
          title: 'Blockchain Basics',
          summaryTime: '45 mins',
          items: [
            {
              title: 'How Blockchain Works',
              duration: '18 mins',
              type: 'lesson',
              status: 'available',
            },
            {
              title: 'Wallets and Transactions',
              duration: '15 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'how-blockchain-works',
              title: 'How blockchain works',
              status: 'available',
              about:
                'Understand blocks, transactions, distributed ledgers, consensus, and why blockchain differs from a normal database.',
              lessonPage: {
                lessonTitle: 'How Blockchain Works',
                description:
                  'Build a plain-language understanding of blockchain before writing smart contract code.',
                assignmentSummary:
                  'Write a short note explaining blockchain, block validation, and one real-world use case.',
                time: '18 mins',
                tutor: 'Daniel Kato',
                relatedResources: {
                  documents: [
                    {
                      title: 'Ethereum Docs Intro',
                      url: 'https://ethereum.org/en/developers/docs/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Learn Blockchain, Solidity, and Full Stack Web3',
                      url: 'https://www.youtube.com/watch?v=gyMwXuJrbJQ',
                      duration: '10 hrs+',
                      provider: 'YouTube',
                    },
                    {
                      title: 'Smart Contract Development for Beginners',
                      url: 'https://www.youtube.com/watch?v=nXqwMCm83cc',
                      duration: '1 hr+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Blockchain Basics Note',
                      prompt:
                        'Write a short note explaining blockchain, block validation, and one real-world use case.',
                      submissionType: 'text',
                      dueInDays: 7,
                      wordCount: '250-350',
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Core ideas',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Blocks and chains',
                    },
                    {
                      id: 'learn-2',
                      title: 'Consensus and decentralization',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Explain blockchain in simple terms to a non-technical friend.',
                    },
                  ],
                },
                {
                  title: 'Real use cases',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Payments and ownership',
                    },
                    {
                      id: 'learn-2',
                      title: 'Trustless transactions',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'List 3 suitable and 2 weak use cases for blockchain.',
                    },
                  ],
                },
              ],
            },
            {
              id: 'wallets-and-transactions',
              title: 'Wallets and transactions',
              status: 'locked',
              about:
                'Learn what wallets store, how public and private keys work, and how transactions move on-chain.',
              lessonPage: {
                lessonTitle: 'Wallets and Transactions',
                description:
                  'Understand blockchain identity, signing, and transaction flow basics.',
                assignmentSummary:
                  'Create a simple diagram showing wallet, signature, network validation, and confirmed transaction steps.',
                time: '15 mins',
                tutor: 'Daniel Kato',
                relatedResources: {
                  documents: [
                    {
                      title: 'MetaMask Learn',
                      url: 'https://learn.metamask.io/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Learn Blockchain and Web3',
                      url: 'https://www.youtube.com/watch?v=gyMwXuJrbJQ',
                      duration: '10 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Transaction Flow Diagram',
                      prompt:
                        'Create a simple diagram showing wallet, signature, network validation, and confirmed transaction steps.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Wallet basics',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Public and private keys',
                    },
                    {
                      id: 'learn-2',
                      title: 'Signing transactions',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Describe the risk of exposing a private key.',
                    },
                  ],
                },
                {
                  title: 'Transaction flow',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Gas and fees',
                    },
                    {
                      id: 'learn-2',
                      title: 'Pending and confirmed states',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Map the lifecycle of a transaction from wallet to block.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'solidity-and-smart-contracts',
          title: 'Solidity and Smart Contracts',
          summaryTime: '50 mins',
          items: [
            {
              title: 'Solidity Basics in Remix',
              duration: '22 mins',
              type: 'lesson',
              status: 'locked',
            },
            {
              title: 'Smart Contract Safety Basics',
              duration: '18 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'solidity-basics-in-remix',
              title: 'Solidity basics in Remix',
              status: 'locked',
              about:
                'Start writing simple smart contracts, variables, functions, and deployment steps in Remix.',
              lessonPage: {
                lessonTitle: 'Solidity Basics in Remix',
                description:
                  'Write your first smart contract and understand how simple state changes work on-chain.',
                assignmentSummary:
                  'Write and deploy a simple smart contract in Remix and submit the code with a screenshot of deployment.',
                time: '22 mins',
                tutor: 'Daniel Kato',
                relatedResources: {
                  documents: [
                    {
                      title: 'Solidity Docs',
                      url: 'https://docs.soliditylang.org/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Solidity Basics and Remix Tutorial',
                      url: 'https://www.youtube.com/watch?v=5dcRMHUhA20',
                      duration: '40 mins+',
                      provider: 'YouTube',
                    },
                    {
                      title: 'Learn Blockchain and Solidity',
                      url: 'https://www.youtube.com/watch?v=gyMwXuJrbJQ',
                      duration: '10 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'First Smart Contract',
                      prompt:
                        'Write and deploy a simple smart contract in Remix and submit the code with a screenshot of deployment.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Writing smart contracts',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Variables and functions',
                    },
                    {
                      id: 'learn-2',
                      title: 'Deploying with Remix',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Build a tiny storage contract with one update function.',
                    },
                  ],
                },
                {
                  title: 'Contract state',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Reading and writing state',
                    },
                    {
                      id: 'learn-2',
                      title: 'Gas implications',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Explain what happens when contract state changes.',
                    },
                  ],
                },
              ],
            },
            {
              id: 'smart-contract-safety-basics',
              title: 'Smart contract safety basics',
              status: 'locked',
              about:
                'Learn why security matters, where bugs happen, and how beginners avoid common contract mistakes.',
              lessonPage: {
                lessonTitle: 'Smart Contract Safety Basics',
                description:
                  'Understand the mindset required before putting code on-chain.',
                assignmentSummary:
                  'Write a short reflection on why blockchain code requires stronger caution than typical web code.',
                time: '18 mins',
                tutor: 'Daniel Kato',
                relatedResources: {
                  documents: [
                    {
                      title: 'OpenZeppelin Docs',
                      url: 'https://docs.openzeppelin.com/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Smart Contract Development for Beginners',
                      url: 'https://www.youtube.com/watch?v=nXqwMCm83cc',
                      duration: '1 hr+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Security Reflection',
                      prompt:
                        'Write a short reflection on why blockchain code requires stronger caution than typical web code.',
                      submissionType: 'text',
                      dueInDays: 7,
                      wordCount: '180-260',
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Common risks',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Unchecked assumptions',
                    },
                    {
                      id: 'learn-2',
                      title: 'Permanent deployment risk',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'List 3 reasons smart contract testing matters.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'web3-app-thinking',
          title: 'Web3 App Thinking',
          summaryTime: '35 mins',
          items: [
            {
              title: 'dApp User Experience Basics',
              duration: '18 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'dapp-flows-and-user-experience',
              title: 'dApp flows and user experience',
              status: 'locked',
              about:
                'Understand how blockchain features show up in frontend products and where user trust breaks.',
              lessonPage: {
                lessonTitle: 'dApp User Experience Basics',
                description:
                  'Map a simple decentralized app flow from wallet connection to transaction confirmation.',
                assignmentSummary:
                  'Submit a user flow for a small dApp with wallet connection, confirmation, and success states.',
                time: '18 mins',
                tutor: 'Daniel Kato',
                relatedResources: {
                  documents: [
                    {
                      title: 'Ethers.js Docs',
                      url: 'https://docs.ethers.org/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Learn Blockchain and Web3',
                      url: 'https://www.youtube.com/watch?v=gyMwXuJrbJQ',
                      duration: '10 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'dApp Flow Sketch',
                      prompt:
                        'Submit a user flow for a small dApp with wallet connection, confirmation, and success states.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'dApp basics',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Connect wallet flow',
                    },
                    {
                      id: 'learn-2',
                      title: 'Status feedback for transactions',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Design a simple dApp flow for minting or voting.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'mini-web3-project',
          title: 'Mini Web3 Project',
          summaryTime: '30 mins',
          items: [
            {
              title: 'Mini Web3 Project Brief',
              duration: '30 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'build-a-simple-blockchain-project-brief',
              title: 'Build a simple blockchain project brief',
              status: 'locked',
              about:
                'Bring the technical basics together in a compact Web3 project idea with realistic scope.',
              lessonPage: {
                lessonTitle: 'Mini Web3 Project Brief',
                description:
                  'Plan a small blockchain product with users, problem, smart contract role, and core flow.',
                assignmentSummary:
                  'Submit a one-page brief for a blockchain product with target users, core flow, and contract responsibilities.',
                time: '30 mins',
                tutor: 'Daniel Kato',
                relatedResources: {
                  documents: [
                    {
                      title: 'Ethereum Development Tutorials',
                      url: 'https://ethereum.org/en/developers/tutorials/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Learn Blockchain, Solidity, and Full Stack Web3',
                      url: 'https://www.youtube.com/watch?v=gyMwXuJrbJQ',
                      duration: '10 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Web3 Project Brief',
                      prompt:
                        'Submit a one-page brief for a blockchain product with target users, core flow, and contract responsibilities.',
                      submissionType: 'file',
                      dueInDays: 10,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Project planning',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Product problem',
                    },
                    {
                      id: 'learn-2',
                      title: 'Smart contract responsibility',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Write a mini project brief for a Web3 product.',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      discussion: {
        enabled: true,
        channels: [
          {
            id: 'general',
            name: 'General Discussion',
          },
          {
            id: 'questions',
            name: 'Questions',
          },
          {
            id: 'announcements',
            name: 'Announcements',
          },
        ],
      },
    },
    {
      id: 'business-analytics',
      slug: 'business-analytics',
      title: 'Business Analytics',
      category: 'business-strategy',
      level: 'Beginner',
      duration: {
        months: 3,
        label: '3 months',
      },
      shortDescription:
        'Master data-driven decision-making to become a sought-after analyst.',
      coverImage: businessAnalyticsImage,
      mentorId: 'mentor-oliver-grant',
      tags: ['KPIs', 'Decision Making', 'Reporting', 'Strategy'],
      enrollment: {
        status: 'not-started',
        ctaLabel: 'Start Course',
        progressPercent: 0,
        completedLessons: 0,
        totalLessons: 3,
      },
      tabs: ['overview', 'course-outline', 'discussion'],
      overview: {
        about:
          'Master data-driven decision-making to become a sought-after analyst.',
        whatYouWillLearn: [
          'Business questions and KPIs',
          'Data-driven decision-making',
          'Reporting basics',
          'Stakeholder framing',
          'Simple recommendation writing',
        ],
        toolsNeeded: ['Excel', 'Google Sheets', 'PowerPoint'],
        prerequisites: ['Comfort with numbers', 'Basic spreadsheet skills'],
        benefits: [
          'Certificate of completion',
          'Decision frameworks',
          'Analytics thinking',
          'Mentor support',
        ],
      },
      courseOutline: [
        {
          id: 'business-problem-framing',
          title: 'Business Problem Framing',
          summaryTime: '40 mins',
          items: [
            {
              title: 'Business Questions and Metrics',
              duration: '18 mins',
              type: 'lesson',
              status: 'available',
            },
          ],
          units: [
            {
              id: 'from-business-questions-to-metrics',
              title: 'From business questions to metrics',
              status: 'available',
              about:
                'Turn vague business needs into structured questions and measurable outcomes.',
              lessonPage: {
                lessonTitle: 'Business Questions and Metrics',
                description:
                  'Learn how analysts translate requests into measurable decision support.',
                assignmentSummary:
                  'Define 5 KPIs for one business team, including formula, owner, and reason the metric matters.',
                time: '18 mins',
                tutor: 'Oliver Grant',
                relatedResources: {
                  documents: [
                    {
                      title: 'Google Analytics Academy',
                      url: 'https://analytics.google.com/analytics/academy/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Business Analytics Full Course',
                      url: 'https://www.youtube.com/watch?v=iEEe_w9Hois',
                      duration: '2 hrs+',
                      provider: 'YouTube',
                    },
                    {
                      title: 'Data-Driven Decision Making',
                      url: 'https://www.youtube.com/watch?v=EV3T1RYWC9g',
                      duration: '20 mins+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'KPI Definition Sheet',
                      prompt:
                        'Define 5 KPIs for one business team, including formula, owner, and reason the metric matters.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Question framing',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Business goals',
                    },
                    {
                      id: 'learn-2',
                      title: 'Metric selection',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Turn 3 vague requests into measurable business questions.',
                    },
                  ],
                },
                {
                  title: 'KPI basics',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Input vs outcome metrics',
                    },
                    {
                      id: 'learn-2',
                      title: 'Choosing useful measures',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Define 5 KPIs for a customer support team.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'decision-support-and-insight-writing',
          title: 'Decision Support and Insight Writing',
          summaryTime: '35 mins',
          items: [
            {
              title: 'Insight Writing for Stakeholders',
              duration: '17 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'how-to-write-insights-that-matter',
              title: 'How to write insights that matter',
              status: 'locked',
              about:
                'Learn the difference between raw data points, observations, and recommendations for stakeholders.',
              lessonPage: {
                lessonTitle: 'Insight Writing for Stakeholders',
                description:
                  'Move from numbers to business meaning and practical action.',
                assignmentSummary:
                  'Write a short insight memo using 3 observations and 2 recommendations for a product or marketing team.',
                time: '17 mins',
                tutor: 'Oliver Grant',
                relatedResources: {
                  documents: [
                    {
                      title: 'Harvard Business Review Analytics Topics',
                      url: 'https://hbr.org/topic/analytics',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Business Intelligence Explained',
                      url: 'https://www.youtube.com/watch?v=m-6gQLmhawo',
                      duration: '20 mins+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Insight Memo',
                      prompt:
                        'Write a short insight memo using 3 observations and 2 recommendations for a product or marketing team.',
                      submissionType: 'text',
                      dueInDays: 7,
                      wordCount: '250-400',
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Insight structure',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Observation, implication, action',
                    },
                    {
                      id: 'learn-2',
                      title: 'Writing for clarity',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Convert 3 raw metrics into stakeholder-ready insight statements.',
                    },
                  ],
                },
                {
                  title: 'Recommendation thinking',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Trade-offs',
                    },
                    {
                      id: 'learn-2',
                      title: 'Decision support',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Write one recommendation memo from sample results.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'mini-business-analytics-case',
          title: 'Mini Business Analytics Case',
          summaryTime: '30 mins',
          items: [
            {
              title: 'Business Analytics Case Study',
              duration: '30 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'case-study-and-recommendation',
              title: 'Case study and recommendation',
              status: 'locked',
              about:
                'Apply metric selection, insight writing, and recommendation logic in a compact business case.',
              lessonPage: {
                lessonTitle: 'Business Analytics Case Study',
                description:
                  'Analyze a simple business scenario and recommend what leadership should do next.',
                assignmentSummary:
                  'Review the provided business case, define 5 KPIs, state 3 insights, and write 2 recommendations.',
                time: '30 mins',
                tutor: 'Oliver Grant',
                relatedResources: {
                  documents: [
                    {
                      title: 'Google Data Analytics Learning Resources',
                      url: 'https://grow.google/certificates/data-analytics/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Business Analytics Full Course',
                      url: 'https://www.youtube.com/watch?v=iEEe_w9Hois',
                      duration: '2 hrs+',
                      provider: 'YouTube',
                    },
                    {
                      title: 'Data-Driven Decision Making',
                      url: 'https://www.youtube.com/watch?v=EV3T1RYWC9g',
                      duration: '20 mins+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Final Case Submission',
                      prompt:
                        'Review the provided business case, define 5 KPIs, state 3 insights, and write 2 recommendations.',
                      submissionType: 'file',
                      dueInDays: 10,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Case analysis',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Problem framing',
                    },
                    {
                      id: 'learn-2',
                      title: 'Recommendation logic',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Submit your recommendation pack for a sample business case.',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      discussion: {
        enabled: true,
        channels: [
          {
            id: 'general',
            name: 'General Discussion',
          },
          {
            id: 'questions',
            name: 'Questions',
          },
          {
            id: 'announcements',
            name: 'Announcements',
          },
        ],
      },
    },
    {
      id: 'branding-business-strategy',
      slug: 'branding-business-strategy',
      title: 'Branding & Business Strategy',
      category: 'business-strategy',
      level: 'Intermediate',
      duration: {
        months: 3,
        label: '3 months',
      },
      shortDescription:
        'Learn to build strong brands and align them with winning business strategies.',
      coverImage: brandingBusinessStrategyImage,
      mentorId: 'mentor-oliver-grant',
      tags: ['Branding', 'Strategy', 'Positioning', 'Messaging'],
      enrollment: {
        status: 'not-started',
        ctaLabel: 'Start Course',
        progressPercent: 0,
        completedLessons: 0,
        totalLessons: 4,
      },
      tabs: ['overview', 'course-outline', 'discussion'],
      overview: {
        about:
          'Learn to build strong brands and align them with winning business strategies.',
        whatYouWillLearn: [
          'Brand positioning',
          'Brand identity thinking',
          'Audience and market analysis',
          'Strategy frameworks',
          'Messaging consistency',
        ],
        toolsNeeded: ['Canva', 'Slides', 'Miro'],
        prerequisites: [
          'Interest in business or design',
          'Basic communication skills',
        ],
        benefits: [
          'Certificate of completion',
          'Brand strategy templates',
          'Portfolio project',
          'Mentor support',
        ],
      },
      courseOutline: [
        {
          id: 'brand-strategy-basics',
          title: 'Brand Strategy Basics',
          summaryTime: '45 mins',
          items: [
            {
              title: 'What Brand Strategy Does',
              duration: '18 mins',
              type: 'lesson',
              status: 'available',
            },
            {
              title: 'Audience, Category and Positioning',
              duration: '20 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'what-a-brand-strategy-does',
              title: 'What a brand strategy does',
              status: 'available',
              about:
                'Understand how strategy shapes perception, messaging, and business direction over time.',
              lessonPage: {
                lessonTitle: 'What Brand Strategy Does',
                description:
                  'Start with the reason brands need positioning and consistent meaning beyond visual style.',
                assignmentSummary:
                  'Write a short note on why businesses need a brand strategy, not only visuals.',
                time: '18 mins',
                tutor: 'Oliver Grant',
                relatedResources: {
                  documents: [
                    {
                      title: 'HubSpot Brand Strategy Guide',
                      url: 'https://blog.hubspot.com/marketing/branding',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Brand Strategy Crash Course',
                      url: 'https://www.youtube.com/watch?v=VrwBu8DYWkE',
                      duration: '17 mins',
                      provider: 'YouTube',
                    },
                    {
                      title: 'Branding Masterclass',
                      url: 'https://www.youtube.com/watch?v=tvYDYtQhreo',
                      duration: '3 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Brand Strategy Reflection',
                      prompt:
                        'Write a short note on why businesses need a brand strategy, not only visuals.',
                      submissionType: 'text',
                      dueInDays: 7,
                      wordCount: '180-260',
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Brand meaning',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Positioning',
                    },
                    {
                      id: 'learn-2',
                      title: 'Audience memory',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Explain the difference between a logo and a brand.',
                    },
                  ],
                },
                {
                  title: 'Strategic fit',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Business goals and brand',
                    },
                    {
                      id: 'learn-2',
                      title: 'Consistency across touchpoints',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'List 5 brand touchpoints for a digital business.',
                    },
                  ],
                },
              ],
            },
            {
              id: 'audience-category-and-positioning',
              title: 'Audience, category, and positioning',
              status: 'locked',
              about:
                'Learn how to define who a brand serves, what space it competes in, and how it stands apart.',
              lessonPage: {
                lessonTitle: 'Audience, Category and Positioning',
                description:
                  'Build a simple brand positioning statement with audience and value in mind.',
                assignmentSummary:
                  'Create a brand positioning statement that includes audience, category, and unique value.',
                time: '20 mins',
                tutor: 'Oliver Grant',
                relatedResources: {
                  documents: [
                    {
                      title: 'SBA Market Research Guide',
                      url: 'https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Brand Strategy 101',
                      url: 'https://www.youtube.com/watch?v=VrwBu8DYWkE',
                      duration: '17 mins',
                      provider: 'YouTube',
                    },
                    {
                      title: 'Branding 101',
                      url: 'https://www.youtube.com/watch?v=IGJTLtr1ET0',
                      duration: '20 mins+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Positioning Statement Task',
                      prompt:
                        'Create a brand positioning statement that includes audience, category, and unique value.',
                      submissionType: 'text',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Audience fit',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Market and customer understanding',
                    },
                    {
                      id: 'learn-2',
                      title: 'Category signals',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Write a one-line positioning statement for a startup.',
                    },
                  ],
                },
                {
                  title: 'Differentiation',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Value proposition',
                    },
                    {
                      id: 'learn-2',
                      title: 'Competitive contrast',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Compare two brands in the same market and explain their positioning.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'identity-and-messaging',
          title: 'Identity and Messaging',
          summaryTime: '40 mins',
          items: [
            {
              title: 'From Strategy to Identity',
              duration: '20 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'from-strategy-to-identity',
              title: 'From strategy to identity',
              status: 'locked',
              about:
                'Translate strategy into voice, visuals, and a consistent brand system.',
              lessonPage: {
                lessonTitle: 'From Strategy to Identity',
                description:
                  'Move from abstract brand ideas into concrete identity choices and messaging.',
                assignmentSummary:
                  'Create a 1-page board with voice traits, tagline options, audience statement, and color direction.',
                time: '20 mins',
                tutor: 'Oliver Grant',
                relatedResources: {
                  documents: [
                    {
                      title: 'Canva Brand Kit Help',
                      url: 'https://www.canva.com/help/brand-kit/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'How to Create a Brand Identity',
                      url: 'https://www.youtube.com/watch?v=IGJTLtr1ET0',
                      duration: '20 mins+',
                      provider: 'YouTube',
                    },
                    {
                      title: 'Complete Brand Design Course',
                      url: 'https://www.youtube.com/watch?v=tvYDYtQhreo',
                      duration: '3 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Brand Messaging Board',
                      prompt:
                        'Create a 1-page board with voice traits, tagline options, audience statement, and color direction.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Identity translation',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Visual and verbal expression',
                    },
                    {
                      id: 'learn-2',
                      title: 'Consistency',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Write 3 brand voice guidelines for a product.',
                    },
                  ],
                },
                {
                  title: 'Messaging hierarchy',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Core message and support points',
                    },
                    {
                      id: 'learn-2',
                      title: 'Audience adaptation',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Draft homepage messaging for a small brand.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'brand-and-business-alignment',
          title: 'Brand and Business Alignment',
          summaryTime: '30 mins',
          items: [
            {
              title: 'Brand Strategy Application Project',
              duration: '30 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'strategy-application-project',
              title: 'Strategy application project',
              status: 'locked',
              about:
                'Apply brand and business strategy in one compact case using audience, positioning, and messaging decisions.',
              lessonPage: {
                lessonTitle: 'Brand Strategy Application Project',
                description:
                  'Build a strategy starter pack for a real or imagined business idea.',
                assignmentSummary:
                  'Submit a strategy pack with audience, market category, positioning, tone of voice, and sample identity direction.',
                time: '30 mins',
                tutor: 'Oliver Grant',
                relatedResources: {
                  documents: [
                    {
                      title: 'HubSpot Branding Resources',
                      url: 'https://blog.hubspot.com/marketing/branding',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Complete Brand Design Course for Beginners',
                      url: 'https://www.youtube.com/watch?v=tvYDYtQhreo',
                      duration: '3 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Final Brand Strategy Pack',
                      prompt:
                        'Submit a strategy pack with audience, market category, positioning, tone of voice, and sample identity direction.',
                      submissionType: 'file',
                      dueInDays: 10,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Project delivery',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Audience and position',
                    },
                    {
                      id: 'learn-2',
                      title: 'Message and direction',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Submit a simple brand strategy starter pack.',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      discussion: {
        enabled: true,
        channels: [
          {
            id: 'general',
            name: 'General Discussion',
          },
          {
            id: 'questions',
            name: 'Questions',
          },
          {
            id: 'announcements',
            name: 'Announcements',
          },
        ],
      },
    },
    {
      id: 'data-analysis',
      slug: 'data-analysis',
      title: 'Data Analysis',
      category: 'data-science-analytics',
      level: 'Beginner',
      duration: {
        months: 3,
        label: '3 months',
      },
      shortDescription:
        'Learn to extract actionable insights and boost your career in analytics.',
      coverImage: dataAnalysisImage,
      mentorId: 'mentor-luke-barber',
      tags: ['Excel', 'SQL', 'Python', 'Analysis'],
      enrollment: {
        status: 'not-started',
        ctaLabel: 'Start Course',
        progressPercent: 0,
        completedLessons: 0,
        totalLessons: 6,
      },
      tabs: ['overview', 'course-outline', 'discussion'],
      overview: {
        about:
          'Learn to extract actionable insights and boost your career in analytics.',
        whatYouWillLearn: [
          'Data cleaning',
          'Spreadsheet analysis',
          'SQL basics',
          'Python basics',
          'Insight presentation',
        ],
        toolsNeeded: ['Excel', 'SQL', 'Python', 'Jupyter Notebook'],
        prerequisites: [
          'Basic spreadsheet familiarity',
          'Comfort with numbers',
        ],
        benefits: [
          'Certificate of completion',
          'Hands-on practice',
          'Portfolio-friendly exercises',
          'Mentor support',
        ],
      },
      courseOutline: [
        {
          id: 'foundations-of-data-analysis',
          title: 'Foundations of Data Analysis',
          summaryTime: '50 mins',
          items: [
            {
              title: 'What Data Analysts Do',
              duration: '18 mins',
              type: 'lesson',
              status: 'available',
            },
            {
              title: 'Cleaning Data in Spreadsheets',
              duration: '20 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'what-data-analysts-do',
              title: 'What data analysts do',
              status: 'available',
              about:
                'Understand the role of a data analyst, common workflows, and how raw data becomes useful business insight.',
              lessonPage: {
                lessonTitle: 'What Data Analysts Do',
                description:
                  'Start with the workflow of asking questions, cleaning data, analyzing patterns, and communicating results.',
                assignmentSummary:
                  'Write a short note describing the workflow of a data analyst and where business questions fit in.',
                time: '18 mins',
                tutor: 'Luke Barber',
                relatedResources: {
                  documents: [
                    {
                      title: 'Google Data Analytics Certificate',
                      url: 'https://grow.google/certificates/data-analytics/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Data Analysis 101',
                      url: 'https://www.youtube.com/watch?v=Ugqat1uraWc',
                      duration: '15 mins',
                      provider: 'YouTube',
                    },
                    {
                      title: 'Data Analysis with Python',
                      url: 'https://www.youtube.com/watch?v=r-uOLxNrNk8',
                      duration: '4 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Analyst Workflow Note',
                      prompt:
                        'Write a short note describing the workflow of a data analyst and where business questions fit in.',
                      submissionType: 'text',
                      dueInDays: 7,
                      wordCount: '200-300',
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Analyst workflow',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Question framing',
                    },
                    {
                      id: 'learn-2',
                      title: 'Cleaning and analysis',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Describe the end-to-end workflow of a data analyst.',
                    },
                  ],
                },
                {
                  title: 'Choosing tools',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Excel, SQL, Python',
                    },
                    {
                      id: 'learn-2',
                      title: 'When to use each tool',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Map 3 tasks to the right analysis tool.',
                    },
                  ],
                },
              ],
            },
            {
              id: 'cleaning-data-in-spreadsheets',
              title: 'Cleaning data in spreadsheets',
              status: 'locked',
              about:
                'Learn the first step in analysis work, which is cleaning, structuring, and checking data quality.',
              lessonPage: {
                lessonTitle: 'Cleaning Data in Spreadsheets',
                description:
                  'Prepare messy data for useful analysis with simple spreadsheet habits.',
                assignmentSummary:
                  'Clean the provided spreadsheet and submit both the raw and cleaned file with a short summary of changes.',
                time: '20 mins',
                tutor: 'Luke Barber',
                relatedResources: {
                  documents: [
                    {
                      title: 'Google Sheets Function List',
                      url: 'https://support.google.com/docs/table/25273',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Data Analyst Bootcamp for Beginners',
                      url: 'https://www.youtube.com/watch?v=DQqot_7Ctus',
                      duration: '11 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Spreadsheet Cleaning Task',
                      prompt:
                        'Clean the provided spreadsheet and submit both the raw and cleaned file with a short summary of changes.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Data cleaning basics',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Duplicates and blanks',
                    },
                    {
                      id: 'learn-2',
                      title: 'Consistent formatting',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Clean a sample sales sheet with missing values and duplicates.',
                    },
                  ],
                },
                {
                  title: 'Data quality checks',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Validation',
                    },
                    {
                      id: 'learn-2',
                      title: 'Simple summary checks',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'List 5 checks you would run before analysis.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'sql-and-python-basics',
          title: 'SQL and Python Basics',
          summaryTime: '45 mins',
          items: [
            {
              title: 'SQL for Analysis',
              duration: '20 mins',
              type: 'lesson',
              status: 'locked',
            },
            {
              title: 'Python for Analysis',
              duration: '20 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'sql-for-analysis',
              title: 'SQL for analysis',
              status: 'locked',
              about:
                'Use SQL to filter, group, join, and summarize data for business questions.',
              lessonPage: {
                lessonTitle: 'SQL for Analysis',
                description:
                  'Learn the basic SQL patterns analysts use every day.',
                assignmentSummary:
                  'Submit 5 SQL queries answering the provided business questions and include short explanations.',
                time: '20 mins',
                tutor: 'Luke Barber',
                relatedResources: {
                  documents: [
                    {
                      title: 'PostgreSQL Tutorial',
                      url: 'https://www.postgresql.org/docs/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'SQL for Data Analytics',
                      url: 'https://www.youtube.com/watch?v=7mz73uXD9DA',
                      duration: '4 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'SQL Query Pack',
                      prompt:
                        'Submit 5 SQL queries answering the provided business questions and include short explanations.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Query basics',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'SELECT, WHERE, GROUP BY',
                    },
                    {
                      id: 'learn-2',
                      title: 'Basic JOINs',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Write 5 queries on a simple orders table.',
                    },
                  ],
                },
                {
                  title: 'Analytical thinking',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Aggregation and trends',
                    },
                    {
                      id: 'learn-2',
                      title: 'Filtering for relevance',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Find top products and monthly revenue from a sample schema.',
                    },
                  ],
                },
              ],
            },
            {
              id: 'python-for-analysis',
              title: 'Python for analysis',
              status: 'locked',
              about:
                'Use Python with pandas to inspect, clean, and summarize datasets more flexibly.',
              lessonPage: {
                lessonTitle: 'Python for Analysis',
                description:
                  'Move into code-based analysis with pandas and notebook workflows.',
                assignmentSummary:
                  'Submit a Jupyter notebook that loads a CSV, cleans key columns, and answers 3 analysis questions.',
                time: '20 mins',
                tutor: 'Luke Barber',
                relatedResources: {
                  documents: [
                    {
                      title: 'Pandas Getting Started',
                      url: 'https://pandas.pydata.org/docs/getting_started/index.html',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Python for Data Analytics',
                      url: 'https://www.youtube.com/watch?v=wUSDVGivd-8',
                      duration: '4 hrs+',
                      provider: 'YouTube',
                    },
                    {
                      title: 'Data Analysis with Python',
                      url: 'https://www.youtube.com/watch?v=r-uOLxNrNk8',
                      duration: '4 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Python Notebook Task',
                      prompt:
                        'Submit a Jupyter notebook that loads a CSV, cleans key columns, and answers 3 analysis questions.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Pandas basics',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Reading data',
                    },
                    {
                      id: 'learn-2',
                      title: 'Filtering and grouping',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Load a CSV and generate summary statistics.',
                    },
                  ],
                },
                {
                  title: 'Simple transformations',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'New columns',
                    },
                    {
                      id: 'learn-2',
                      title: 'Sorting and cleaning',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Transform one date field and one category field in a sample dataset.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'communicating-insights',
          title: 'Communicating Insights',
          summaryTime: '30 mins',
          items: [
            {
              title: 'Insight Writing and Reporting',
              duration: '15 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'insight-writing-and-simple-reporting',
              title: 'Insight writing and simple reporting',
              status: 'locked',
              about:
                'Turn outputs into a short, understandable report for a stakeholder or team.',
              lessonPage: {
                lessonTitle: 'Insight Writing and Reporting',
                description:
                  'Communicate what the numbers mean and what should happen next.',
                assignmentSummary:
                  'Prepare a one-page analysis summary with 3 findings and 2 recommendations.',
                time: '15 mins',
                tutor: 'Luke Barber',
                relatedResources: {
                  documents: [
                    {
                      title: 'Storytelling With Data Blog',
                      url: 'https://www.storytellingwithdata.com/blog',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Data Analysis 101',
                      url: 'https://www.youtube.com/watch?v=Ugqat1uraWc',
                      duration: '15 mins',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Mini Report',
                      prompt:
                        'Prepare a one-page analysis summary with 3 findings and 2 recommendations.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Insight communication',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Observation and implication',
                    },
                    {
                      id: 'learn-2',
                      title: 'Recommendation writing',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Write a 1-page report from sample analysis findings.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'end-of-course-analysis-project',
          title: 'End-of-Course Analysis Project',
          summaryTime: '35 mins',
          items: [
            {
              title: 'Final Data Analysis Project',
              duration: '35 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'analyze-and-present-a-small-dataset',
              title: 'Analyze and present a small dataset',
              status: 'locked',
              about:
                'Combine cleaning, SQL or Python, and communication in one practical mini project.',
              lessonPage: {
                lessonTitle: 'Final Data Analysis Project',
                description:
                  'Complete a small analysis case and present your findings clearly.',
                assignmentSummary:
                  'Analyze a small dataset and submit your cleaned file, SQL or notebook work, and a short presentation of findings.',
                time: '35 mins',
                tutor: 'Luke Barber',
                relatedResources: {
                  documents: [
                    {
                      title: 'Kaggle Datasets',
                      url: 'https://www.kaggle.com/datasets',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Python for Data Analytics',
                      url: 'https://www.youtube.com/watch?v=wUSDVGivd-8',
                      duration: '4 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Final Analysis Submission',
                      prompt:
                        'Analyze a small dataset and submit your cleaned file, SQL or notebook work, and a short presentation of findings.',
                      submissionType: 'file',
                      dueInDays: 10,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Project delivery',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Data cleaning',
                    },
                    {
                      id: 'learn-2',
                      title: 'Analysis and reporting',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Submit cleaned data, analysis work, and summary insights.',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      discussion: {
        enabled: true,
        channels: [
          {
            id: 'general',
            name: 'General Discussion',
          },
          {
            id: 'questions',
            name: 'Questions',
          },
          {
            id: 'announcements',
            name: 'Announcements',
          },
        ],
      },
    },
    {
      id: 'data-visualization',
      slug: 'data-visualization',
      title: 'Data Visualization',
      category: 'data-science-analytics',
      level: 'Beginner',
      duration: {
        months: 3,
        label: '3 months',
      },
      shortDescription:
        'Master visualization tools to communicate insights and drive business impact.',
      coverImage: dataVisualizationImage,
      mentorId: 'mentor-luke-barber',
      tags: ['Power BI', 'Tableau', 'Dashboards', 'Data Storytelling'],
      enrollment: {
        status: 'not-started',
        ctaLabel: 'Start Course',
        progressPercent: 0,
        completedLessons: 0,
        totalLessons: 4,
      },
      tabs: ['overview', 'course-outline', 'discussion'],
      overview: {
        about:
          'Master visualization tools to communicate insights and drive business impact.',
        whatYouWillLearn: [
          'Chart selection',
          'Dashboard layout',
          'Power BI basics',
          'Tableau basics',
          'Storytelling with data',
        ],
        toolsNeeded: ['Power BI', 'Tableau', 'Excel'],
        prerequisites: ['Basic analysis knowledge', 'Comfort with data tables'],
        benefits: [
          'Certificate of completion',
          'Dashboard practice',
          'Reporting portfolio',
          'Mentor support',
        ],
      },
      courseOutline: [
        {
          id: 'visualization-basics',
          title: 'Visualization Basics',
          summaryTime: '40 mins',
          items: [
            {
              title: 'Choosing the Right Chart',
              duration: '18 mins',
              type: 'lesson',
              status: 'available',
            },
          ],
          units: [
            {
              id: 'choosing-the-right-chart',
              title: 'Choosing the right chart',
              status: 'available',
              about:
                'Learn when to use bars, lines, tables, maps, and other formats for different questions.',
              lessonPage: {
                lessonTitle: 'Choosing the Right Chart',
                description:
                  'Match chart types to business questions so your reports stay clear and honest.',
                assignmentSummary:
                  'Choose the best chart type for each provided business question and explain why.',
                time: '18 mins',
                tutor: 'Luke Barber',
                relatedResources: {
                  documents: [
                    {
                      title: 'Data Viz Catalogue',
                      url: 'https://datavizcatalogue.com/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Tableau Data Visualization Full Course',
                      url: 'https://www.youtube.com/watch?v=DQqot_7Ctus',
                      duration: '11 hrs+',
                      provider: 'YouTube',
                    },
                    {
                      title: 'Power BI for Data Analytics',
                      url: 'https://www.youtube.com/watch?v=FwjaHCVNBWA',
                      duration: '2 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Chart Selection Exercise',
                      prompt:
                        'Choose the best chart type for each provided business question and explain why.',
                      submissionType: 'text',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Chart logic',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Comparison vs trend',
                    },
                    {
                      id: 'learn-2',
                      title: 'Avoiding chart misuse',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Choose the best chart type for 6 business questions.',
                    },
                  ],
                },
                {
                  title: 'Clarity over decoration',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Reducing clutter',
                    },
                    {
                      id: 'learn-2',
                      title: 'Highlighting what matters',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Redesign a cluttered chart for clarity.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'building-in-power-bi',
          title: 'Building in Power BI',
          summaryTime: '35 mins',
          items: [
            {
              title: 'Power BI Dashboard Basics',
              duration: '20 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'power-bi-dashboard-basics',
              title: 'Power BI dashboard basics',
              status: 'locked',
              about:
                'Create visuals, pages, slicers, and KPI cards in Power BI for common reporting needs.',
              lessonPage: {
                lessonTitle: 'Power BI Dashboard Basics',
                description:
                  'Build beginner-level dashboards that stakeholders can read quickly.',
                assignmentSummary:
                  'Build a Power BI dashboard with at least 4 visuals and 2 filters using the provided dataset.',
                time: '20 mins',
                tutor: 'Luke Barber',
                relatedResources: {
                  documents: [
                    {
                      title: 'Power BI Guided Learning',
                      url: 'https://learn.microsoft.com/en-us/power-bi/guided-learning/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Power BI for Data Analytics',
                      url: 'https://www.youtube.com/watch?v=FwjaHCVNBWA',
                      duration: '2 hrs+',
                      provider: 'YouTube',
                    },
                    {
                      title: 'Learn Power BI Fast',
                      url: 'https://www.youtube.com/watch?v=WdCltDhmRLo',
                      duration: '1 hr+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Power BI Dashboard Task',
                      prompt:
                        'Build a Power BI dashboard with at least 4 visuals and 2 filters using the provided dataset.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Power BI setup',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Importing data',
                    },
                    {
                      id: 'learn-2',
                      title: 'Building visuals',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Create a dashboard page with 4 visuals.',
                    },
                  ],
                },
                {
                  title: 'Report interactions',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Filters and slicers',
                    },
                    {
                      id: 'learn-2',
                      title: 'Simple drill-through thinking',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Add 2 filters and test interaction behavior.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'building-in-tableau',
          title: 'Building in Tableau',
          summaryTime: '35 mins',
          items: [
            {
              title: 'Tableau Reporting Basics',
              duration: '20 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'tableau-reporting-basics',
              title: 'Tableau reporting basics',
              status: 'locked',
              about:
                'Create beginner dashboards in Tableau and connect visual storytelling to stakeholder needs.',
              lessonPage: {
                lessonTitle: 'Tableau Reporting Basics',
                description:
                  'Learn sheets, dashboards, and clean visual organization in Tableau.',
                assignmentSummary:
                  'Create a simple Tableau dashboard and submit screenshots with the workbook file.',
                time: '20 mins',
                tutor: 'Luke Barber',
                relatedResources: {
                  documents: [
                    {
                      title: 'Tableau Learn',
                      url: 'https://www.tableau.com/learn/training',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Tableau Data Visualization Full Course',
                      url: 'https://www.youtube.com/watch?v=DQqot_7Ctus',
                      duration: '11 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Tableau Dashboard Task',
                      prompt:
                        'Create a simple Tableau dashboard and submit screenshots with the workbook file.',
                      submissionType: 'file',
                      dueInDays: 7,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Tableau basics',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Sheets and dashboards',
                    },
                    {
                      id: 'learn-2',
                      title: 'Filters and labels',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title:
                        'Create one Tableau dashboard from sample sales data.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'data-storytelling-project',
          title: 'Data Storytelling Project',
          summaryTime: '30 mins',
          items: [
            {
              title: 'Data Storytelling Project',
              duration: '30 mins',
              type: 'lesson',
              status: 'locked',
            },
          ],
          units: [
            {
              id: 'present-a-dashboard-story',
              title: 'Present a dashboard story',
              status: 'locked',
              about:
                'Bring chart logic, layout, and recommendations together into one final data story.',
              lessonPage: {
                lessonTitle: 'Data Storytelling Project',
                description:
                  'Present business insight through a dashboard and supporting narrative.',
                assignmentSummary:
                  'Submit a dashboard and a short narrative explaining the main insight, business risk, and recommended next action.',
                time: '30 mins',
                tutor: 'Luke Barber',
                relatedResources: {
                  documents: [
                    {
                      title: 'Storytelling With Data',
                      url: 'https://www.storytellingwithdata.com/',
                      type: 'document',
                    },
                  ],
                  videos: [
                    {
                      title: 'Power BI Beginner Course',
                      url: 'https://www.youtube.com/watch?v=WdCltDhmRLo',
                      duration: '1 hr+',
                      provider: 'YouTube',
                    },
                    {
                      title: 'Tableau Full Course',
                      url: 'https://www.youtube.com/watch?v=DQqot_7Ctus',
                      duration: '11 hrs+',
                      provider: 'YouTube',
                    },
                  ],
                  assignments: [
                    {
                      title: 'Final Dashboard Story',
                      prompt:
                        'Submit a dashboard and a short narrative explaining the main insight, business risk, and recommended next action.',
                      submissionType: 'file',
                      dueInDays: 10,
                    },
                  ],
                },
              },
              sections: [
                {
                  title: 'Story structure',
                  learnItems: [
                    {
                      id: 'learn-1',
                      title: 'Insight sequencing',
                    },
                    {
                      id: 'learn-2',
                      title: 'Recommendation framing',
                    },
                  ],
                  assignmentItems: [
                    {
                      id: 'assign-1',
                      title: 'Prepare a dashboard and 3-slide story summary.',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      discussion: {
        enabled: true,
        channels: [
          {
            id: 'general',
            name: 'General Discussion',
          },
          {
            id: 'questions',
            name: 'Questions',
          },
          {
            id: 'announcements',
            name: 'Announcements',
          },
        ],
      },
    },
  ],
];

courses[0] = enrichCourses(courses[0], mentors[0]);
