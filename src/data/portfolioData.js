import adminSalesImage from "../assets/projects/csps-web/admin_sales.png";
import computerScienceStudentsImage from "../assets/projects/csps-web/computer_science_students.png";
import financeOverviewImage from "../assets/projects/csps-web/finance_overview.png";
import homePageImage from "../assets/projects/csps-web/home_page.png";
import landingPageImage from "../assets/projects/csps-web/landing_page.png";
import merchPageImage from "../assets/projects/csps-web/merch_page.png";
import transactionPageImage from "../assets/projects/csps-web/transaction_page.png";

export const navigationItems = [
  { id: "source", label: "source" },
  { id: "javadoc", label: "javadoc" },
  { id: "config", label: "config" },
  { id: "endpoints", label: "endpoints" },
  { id: "contact", label: "contact" },
];

export const profile = {
  fileLabel: "root / projects / roginand.java",
  name: "Roginand Villegas",
  className: "RoginandVillegas",
  requestMapping: "/roginand",
  role: "Backend Engineer (3rd Year CS Student)",
  school: "University of Cebu",
  location: "Cebu, Philippines",
  statusMessage: "AVAILABLE_FOR_BACKEND_INTERNSHIPS_AND_ENTRY-LEVEL_ROLES",
  githubHandle: "roginandd",
};

export const about = {
  lines: [
    "Builds backend systems around real workflows, clean service boundaries, and maintainable APIs.",
    "Currently pursuing BS Computer Science at the University of Cebu with a focus on Java ecosystems, cloud-backed systems, and practical delivery.",
    "Prefers backend work that turns operational rules into readable endpoints, stable data models, and production-ready implementations.",
  ],
  tags: [
    { name: "@education", value: "BS Computer Science, University of Cebu" },
    { name: "@location", value: "Cebu, Philippines" },
    {
      name: "@target",
      value: "Available for Backend Internships and Entry-Level Roles",
    },
  ],
};

export const techStack = [
  {
    label: "languages",
    declaration: "String[] languages",
    items: ["Java", "TypeScript", "Python"],
  },
  {
    label: "frameworks",
    declaration: "String[] frameworks",
    items: ["Spring Boot", "Express", "Flask", "React"],
  },
  {
    label: "databases",
    declaration: "String[] databases",
    items: ["MySQL", "PostgreSQL", "Firebase Firestore"],
  },
  {
    label: "aiAndCloud",
    declaration: "String[] aiAndCloud",
    items: ["Google Gemini", "Google ADK", "AWS S3"],
  },
  {
    label: "securityAndTools",
    declaration: "String[] securityAndTools",
    items: [
      "JWT",
      "Spring Security",
      "Spring JPA",
      "Firebase Auth",
      "Git",
      "Maven",
    ],
  },
];

export const projects = [
  {
    slug: "csps-platform-backend",
    endpoint: "/projects/csps-platform-backend",
    className: "CSPSWebApplication",
    projectComment: "ORGANIZATION PROJECT",
    status: "Production",
    title: "CSPS Web Application",
    projectType: "Student organization operations platform",
    builtFor: "Computer Science students at the University of Cebu",

    summary:
      "Engineered the backend for a production-grade student organization platform used by Computer Science students at the University of Cebu, unifying memberships, merchandise, ticketing, events, attendance, finance tracking, and administrative operations into a single system.",

    overview:
      "A centralized web platform that digitizes student organization operations by integrating identity management, membership lifecycle, commerce, event participation, attendance tracking, and financial reporting into one cohesive system.",

    story:
      "Developed to replace fragmented and manual processes used by the organization, this system enables structured, trackable, and scalable workflows across student management, transactions, and event operations in a real-world campus environment.",

    contributions: [
      "Architected and built the full backend system for a multi-module student organization platform used in real operations",
      "Designed the relational data model covering students, memberships, merchandise, carts, orders, events, attendance, and administrative reporting",
      "Implemented JWT-based authentication and role-based access control for students and multiple admin roles",
      "Developed end-to-end commerce workflows including product catalog, filtering, cart management, checkout, order lifecycle, and inventory control",
      "Engineered business rules to enforce transaction consistency, stock integrity, and duplicate purchase prevention across memberships and ticketing",
      "Built membership lifecycle management with academic year tracking, bulk processing, and member status analytics",
      "Implemented QR-based attendance system for event sessions, participant validation, and real-time check-in tracking",
      "Developed admin dashboards for finance, sales performance, transaction monitoring, and operational reporting",
      "Integrated AWS S3 for media storage and SMTP-based email workflows for verification, recovery, and order notifications",
      "Structured the backend using layered architecture (controller, service, repository) for maintainability and scalability",
    ],

    highlights: [
      "Production-deployed system",
      "Used in real student organization operations",
      "End-to-end backend ownership",
      "Multi-domain system (commerce, events, attendance, finance)",
      "Role-based admin dashboards and workflows",
    ],

    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "MySQL",
      "JPA/Hibernate",
      "AWS S3",
      "JWT",
      "SMTP",
    ],

    resumeAngle:
      "Demonstrates full backend engineering ownership including system design, relational modeling, authentication, business logic, workflow orchestration, and integration of real operational features in a production environment.",

    impact:
      "Replaced manual and fragmented processes with a centralized system that enables structured membership management, commerce, event participation, attendance tracking, and financial monitoring for the Computer Science student organization.",
    gallery: [
      {
        fileLabel: "// landing_page.png",
        windowTitle: "LandingPageView",
        annotation: '@PreviewState("entry")',
        headline: "Public landing page",
        description:
          "The first-screen experience introduces the organization platform and routes users into authentication and student-facing flows.",
        imageSrc: landingPageImage,
        imageAlt: "CSPS web application landing page",
      },
      {
        fileLabel: "// home_page.png",
        windowTitle: "HomePageView",
        annotation: '@PreviewState("overview")',
        headline: "Member home page",
        description:
          "The main application dashboard consolidates organization activity, navigation, and the common entry points students use after signing in.",
        imageSrc: homePageImage,
        imageAlt: "CSPS web application home page",
      },
      {
        fileLabel: "// computer_science_students.png",
        windowTitle: "StudentDirectoryView",
        annotation: '@PreviewState("members")',
        headline: "Computer science students view",
        description:
          "This page highlights the member-facing record view used to browse and manage student information inside the system.",
        imageSrc: computerScienceStudentsImage,
        imageAlt: "CSPS web application student records page",
      },
      {
        fileLabel: "// merch_page.png",
        windowTitle: "MerchPageView",
        annotation: '@PreviewState("commerce")',
        headline: "Merchandise page",
        description:
          "The merchandise workflow surfaces product browsing and purchasing inside the same platform used for memberships and events.",
        imageSrc: merchPageImage,
        imageAlt: "CSPS web application merchandise page",
      },
      {
        fileLabel: "// transaction_page.png",
        windowTitle: "TransactionPageView",
        annotation: '@PreviewState("transactions")',
        headline: "Transaction page",
        description:
          "Transaction history and order tracking give members and admins visibility into completed platform activity.",
        imageSrc: transactionPageImage,
        imageAlt: "CSPS web application transaction page",
      },
      {
        fileLabel: "// admin_sales.png",
        windowTitle: "AdminSalesView",
        annotation: '@PreviewState("admin-sales")',
        headline: "Admin sales dashboard",
        description:
          "Sales monitoring helps officers track merchandise movement, purchasing behavior, and operational performance from the admin side.",
        imageSrc: adminSalesImage,
        imageAlt: "CSPS web application admin sales dashboard",
      },
      {
        fileLabel: "// finance_overview.png",
        windowTitle: "FinanceOverviewView",
        annotation: '@PreviewState("finance")',
        headline: "Finance overview",
        description:
          "The finance screen centralizes reporting and visibility for organization-level transaction summaries and administrative review.",
        imageSrc: financeOverviewImage,
        imageAlt: "CSPS web application finance overview page",
      },
    ],
    sourceUrl: "https://github.com/roginandd/CSPS-redesign-backend",
    liveUrl: "https://ucmncsps.vercel.app",
    notes: null,
  },
  {
    slug: "daelo",
    endpoint: "/projects/daelo",
    className: "Daelo",
    projectComment: "HACKATHON",
    status: "3rd Place Winner",
    title: "Daelo",
    projectType: "Hackathon project",
    builtFor: "University of Cebu hackathon project",
    summary:
      "AI-powered career simulation platform focused on interview readiness, resume generation, and evaluation for students preparing for job applications.",
    overview:
      "An AI-powered career simulation platform that helps students prepare for job applications through interview simulation, resume generation, and evaluation.",
    story:
      "Built as a hackathon project focused on helping students become more prepared and confident before applying for real jobs.",
    contributions: [
      "Built backend features for interview simulation and feedback",
      "Integrated AI workflows using Google ADK and Gemini",
      "Designed authentication and user management using Firebase",
      "Implemented Firestore-based backend data handling",
      "Developed structured AI pipelines for recommendations, resume outputs, and evaluation",
      "Applied schema-based validation for reliable AI outputs",
      "Contributed to frontend integration using React",
    ],
    highlights: ["TypeScript", "Express", "Firebase", "Gemini", "Google ADK"],
    stack: ["TypeScript", "Express", "Firebase", "Gemini", "Google ADK"],
    gallery: [
      {
        fileLabel: "// interview-simulation",
        windowTitle: "InterviewPracticeSession",
        annotation: '@PreviewState("simulation")',
        headline: "Interview practice session",
        description:
          "Runs question prompts, answer capture, and AI-backed coaching in one guided flow.",
        rows: [
          "Gemini interview prompt orchestration",
          "candidate answer evaluation",
          "feedback and retry handling",
        ],
        metrics: ["rounds:6", "feedback:ai", "schema:validated"],
      },
      {
        fileLabel: "// resume-generation",
        windowTitle: "ResumeOutputPipeline",
        annotation: '@PreviewState("resume")',
        headline: "Resume generation pipeline",
        description:
          "Transforms profile data and AI recommendations into structured resume output.",
        rows: [
          "resume content assembly",
          "Firestore document persistence",
          "schema-checked output formatting",
        ],
        metrics: ["resume:v1", "storage:firestore", "output:structured"],
      },
      {
        fileLabel: "// evaluation-dashboard",
        windowTitle: "CareerReadinessScoreboard",
        annotation: '@PreviewState("evaluation")',
        headline: "Career readiness scoring",
        description:
          "Summarizes interview performance, recommendations, and areas to improve.",
        rows: [
          "recommendation scoring",
          "skill-gap feedback generation",
          "frontend-ready evaluation payloads",
        ],
        metrics: ["score:84", "suggestions:5", "user-state:tracked"],
      },
    ],
    sourceUrl: null,
    liveUrl: null,
    notes: null,
  },
  {
    slug: "vista",
    endpoint: "/projects/vista",
    className: "Vista",
    projectComment: "HACKATHON",
    status: "Finalist",
    title: "Vista",
    projectType: "PropTech hackathon project",
    builtFor: "Filipino Homes PropTech Hackathon",
    summary:
      "Flask backend for an AI-assisted real estate platform that combines listing management, virtual staging sessions, Firestore persistence, and Amazon S3 media workflows.",
    overview:
      "An AI-powered property visualization platform that helps users visualize and customize properties before buying or selling.",
    story:
      "Built during a PropTech hackathon to explore how AI can improve property presentation and buyer decision-making through virtual staging.",
    contributions: [
      "Contributed to the backend of the platform",
      "Built property listing backend workflows",
      "Implemented AI-powered virtual staging flows using Gemini",
      "Integrated Firestore for property and session data",
      "Integrated AWS S3 for media handling",
      "Developed backend flows connecting property data, image processing, and AI generation",
      "Contributed to frontend integration using React",
    ],
    highlights: ["Python", "Flask", "Firebase", "Gemini", "AWS S3"],
    stack: ["Python", "Flask", "Firebase", "Gemini", "AWS S3"],
    gallery: [
      {
        fileLabel: "// property-listing-intake",
        windowTitle: "PropertyListingWorkflow",
        annotation: '@PreviewState("listing")',
        headline: "Property listing intake",
        description:
          "Handles listing creation, metadata storage, and media preparation for properties.",
        rows: [
          "listing field validation",
          "Firestore property persistence",
          "S3 media upload handling",
        ],
        metrics: ["listings:ready", "storage:s3", "forms:validated"],
      },
      {
        fileLabel: "// virtual-staging-session",
        windowTitle: "VirtualStagingSession",
        annotation: '@PreviewState("staging")',
        headline: "AI staging workflow",
        description:
          "Connects source property images with Gemini-based staging and session state tracking.",
        rows: [
          "Gemini staging request orchestration",
          "session chat / state updates",
          "generated image persistence",
        ],
        metrics: ["ai:gemini", "sessions:tracked", "images:processed"],
      },
      {
        fileLabel: "// buyer-visualization-preview",
        windowTitle: "BuyerExperiencePreview",
        annotation: '@PreviewState("experience")',
        headline: "Property visualization output",
        description:
          "Presents staged property output to help buyers evaluate visual possibilities before decisions.",
        rows: [
          "before / after stage results",
          "frontend integration payloads",
          "media retrieval via cloud storage",
        ],
        metrics: ["preview:ready", "hackathon:finalist", "ui:connected"],
      },
    ],
    sourceUrl: "https://github.com/roginandd/vista-api",
    liveUrl: "https://vista-cspsits.vercel.app",
    notes: null,
  },
  ,
  {
    slug: "boc-safepass",
    endpoint: "/projects/boc-safepass",
    className: "BOCSafePass",
    projectComment: "CLIENT PROJECT",
    status: "Client Proposal",
    title: "BOC SafePass",
    projectType: "Client system proposal",
    builtFor:
      "Developed for a Customs Administration (BSCA) masteral project focused on modernizing facility access and verification workflows",
    summary:
      "QR-based access control system designed for stakeholder accreditation, visitor verification, and facility entry tracking within a Customs Administration environment.",
    overview:
      "A backend-driven access control and verification system that replaces manual accreditation, visitor logging, and entry monitoring with a structured and secure digital workflow.",
    story:
      "Designed as a client-facing system proposal to support a masteral study in Customs Administration, with the goal of improving security, traceability, and operational efficiency in facility access management.",
    contributions: [
      "Designed and built the backend system for stakeholder accreditation and QR-based facility access",
      "Modeled the core data structure for stakeholders, verification documents, approval workflows, and entry logs",
      "Implemented secure document handling and cloud storage integration for verification processes",
      "Developed approval workflows and role-based access control for administrative and verifier roles",
      "Built entry logging and reporting features to track and monitor facility activity",
      "Structured the backend using a layered architecture for maintainability and scalability",
    ],
    highlights: [
      "Spring Boot",
      "PostgreSQL",
      "JWT Authentication",
      "AWS S3 Integration",
      "Layered Architecture",
    ],
    stack: [
      "Spring Boot",
      "React",
      "PostgreSQL",
      "JWT",
      "AWS S3",
      "Spring Security",
    ],
    gallery: [
      {
        fileLabel: "// stakeholder-accreditation",
        windowTitle: "StakeholderReviewQueue",
        annotation: '@PreviewState("approvals")',
        headline: "Accreditation approval queue",
        description:
          "Centralizes document review, remarks, and decision history before QR issuance.",
        rows: [
          "document verification workflow",
          "reviewer role access checks",
          "approval history persistence",
        ],
        metrics: ["pending:24", "approved:108", "remarks:required"],
      },
      {
        fileLabel: "// qr-access-verification",
        windowTitle: "QrVerificationPanel",
        annotation: '@PreviewState("access")',
        headline: "QR-based entry validation",
        description:
          "Verifies access credentials at the gate and links sessions to physical pass handling.",
        rows: [
          "qr status check",
          "pass inventory assignment",
          "session activation logic",
        ],
        metrics: ["gate:active", "passes:39", "session-state:tracked"],
      },
      {
        fileLabel: "// entry-log-report",
        windowTitle: "EntryAuditConsole",
        annotation: '@PreviewState("logging")',
        headline: "Movement and reporting log",
        description:
          "Records facility movement for visitors and stakeholders with audit-ready history.",
        rows: [
          "entry / exit timestamps",
          "stakeholder and visitor branching",
          "report-ready event log records",
        ],
        metrics: ["logs:842", "reports:daily", "audit:enabled"],
      },
    ],
    sourceUrl: "https://github.com/roginandd/safepass_api",
    liveUrl: null,
    notes: null,
  },
  {
    slug: "fair-group-assignment-system",
    endpoint: "/projects/fair-group-assignment-system",
    className: "FairGroupAssignmentSystem",
    projectComment: "SCHOOL PROJECT",
    status: "Completed",
    title: "Fair Group Assignment System",
    projectType: "Academic final project",
    builtFor: "Final project for Design and Analysis of Algorithms",
    summary:
      "Web application that assigns students into balanced groups from CSV grade data using a hybrid grouping algorithm built around divide-and-conquer, round-robin, and greedy partitioning logic.",
    overview:
      "An algorithm-based system that assigns students into balanced groups based on performance data.",
    story:
      "Built to solve the unfairness of manual or random group formation by designing a custom hybrid algorithm that produces more balanced teams.",
    contributions: [
      "Designed and implemented the custom grouping algorithm",
      "Combined sorting, round-robin, greedy partitioning, and divide-and-conquer balancing",
      "Built a multi-phase algorithm that distributes students and refines balance",
      "Implemented constraints for group size consistency",
      "Designed the algorithm for fairness and reasonable scalability",
    ],
    highlights: ["Spring Boot", "React", "Hybrid algorithm design"],
    stack: ["Spring Boot", "React", "Hybrid algorithm design"],
    gallery: [
      {
        fileLabel: "// csv-upload-intake",
        windowTitle: "StudentImportConsole",
        annotation: '@PreviewState("input")',
        headline: "CSV intake and preprocessing",
        description:
          "Loads student records and normalizes grade inputs before running the grouping algorithm.",
        rows: [
          "csv parsing and validation",
          "grade sorting preparation",
          "group count constraint checks",
        ],
        metrics: ["csv:loaded", "records:48", "validation:pass"],
      },
      {
        fileLabel: "// balanced-group-output",
        windowTitle: "GroupResultPreview",
        annotation: '@PreviewState("output")',
        headline: "Balanced team output",
        description:
          "Displays generated groups with comparable grade distribution across teams.",
        rows: [
          "round-robin distribution",
          "group size consistency checks",
          "balanced output rendering",
        ],
        metrics: ["groups:6", "variance:low", "fairness:improved"],
      },
      {
        fileLabel: "// hybrid-algorithm-pass",
        windowTitle: "HybridBalancerTrace",
        annotation: '@PreviewState("algorithm")',
        headline: "Hybrid balancing pass",
        description:
          "Refines groups using greedy and divide-and-conquer logic after the initial distribution phase.",
        rows: [
          "greedy partition refinement",
          "divide-and-conquer rebalance step",
          "performance-aware assignment logic",
        ],
        metrics: ["algo:hybrid", "phase:multi-step", "scalability:reasonable"],
      },
    ],
    sourceUrl: "https://github.com/roginandd/FairGroupAssignment",
    liveUrl: "https://fair-group-assignment.vercel.app",
    notes: null,
  },
];

export const contact = {
  declaration: '@PostMapping("/contact")',
  methodSignature: "public Response reachOut(Developer you) {",
  fields: [
    {
      type: "String",
      name: "email",
      value: "roginandv@gmail.com",
      href: "mailto:roginandv@gmail.com",
    },
    {
      type: "String",
      name: "github",
      value: "github.com/roginandd",
      href: "https://github.com/roginandd",
    },
    {
      type: "String",
      name: "location",
      value: "Cebu, Philippines",
      href: null,
    },
  ],
  returnLine:
    'return new ConnectionSuccessful("backend-collaboration-started");',
};

export const footer = {
  closingLine: "} // end RoginandVillegas.java",
  statusLine: "BUILD SUCCESSFUL",
};
