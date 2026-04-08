import bocSafePassPreview from "../assets/previews/boc-safepass-preview.svg";
import cspsPlatformPreview from "../assets/previews/csps-platform-preview.svg";
import daeloPreview from "../assets/previews/daelo-preview.svg";
import fairGroupAssignmentPreview from "../assets/previews/fair-group-assignment-preview.svg";
import vistaPreview from "../assets/previews/vista-preview.svg";

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
  role: "Backend Engineer",
  school: "University of Cebu",
  location: "Cebu, Philippines",
  statusMessage: "open-to-internship-and-entry-level-roles",
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
    { name: "@target", value: "internship-and-entry-level-backend-roles" },
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
    items: ["JWT", "Spring Security", "Spring JPA", "Firebase Auth", "Git", "Maven"],
  },
];

export const projects = [
  {
    slug: "csps-platform-backend",
    endpoint: "/projects/csps-platform-backend",
    className: "CSPSPlatformBackend",
    status: "Production",
    title: "CSPS Platform Backend",
    projectType: "Student organization platform",
    builtFor: "Computer Science students at the University of Cebu",
    summary:
      "Spring Boot backend for a University of Cebu student platform covering authentication, memberships, announcements, attendance, events, merch, orders, finance, and audit workflows.",
    overview:
      "A centralized student organization platform for managing memberships, merchandise, events, attendance, and administrative workflows.",
    story:
      "Built to replace fragmented and manual student organization processes with one structured platform that supports real student operations.",
    contributions: [
      "Architected and built the backend platform",
      "Designed the data model and overall backend structure",
      "Implemented authentication and role-based access",
      "Built commerce workflows including cart, checkout, and purchase history",
      "Designed validation rules for transaction consistency and inventory integrity",
      "Developed membership tracking and QR-based attendance workflows",
      "Integrated cloud storage and email workflows",
    ],
    highlights: ["Java", "Spring Boot", "MySQL", "AWS S3", "JWT"],
    stack: ["Java", "Spring Boot", "MySQL", "AWS S3", "JWT"],
    preview: {
      src: cspsPlatformPreview,
      label: "// csps-dashboard-preview.svg",
      alt: "Preview panel for the CSPS student operations platform backend",
    },
    sourceUrl: "https://github.com/roginandd/CSPS-redesign-backend",
    liveUrl: "https://ucmncsps.vercel.app",
    notes: null,
  },
  {
    slug: "boc-safepass",
    endpoint: "/projects/boc-safepass",
    className: "BOCSafePass",
    status: "Proposal",
    title: "BOC SafePass",
    projectType: "Client project proposal",
    builtFor: "Client project proposal for a Customs Administration system",
    summary:
      "Access-control system for campus workflows with stakeholder approval, document review, QR issuance, visitor sessions, physical pass inventory, and entry logging.",
    overview:
      "A QR-based access control and verification system for stakeholder accreditation, visitor management, and facility entry tracking.",
    story:
      "Designed as a client-facing proposal to replace manual verification and entry logging with a more secure and trackable digital workflow.",
    contributions: [
      "Built the backend system for stakeholder accreditation and QR-based facility access",
      "Designed the data model for stakeholders, documents, approvals, and logs",
      "Implemented secure document handling and cloud storage",
      "Developed approval workflows and role-based access flows",
      "Built entry logging and reporting features",
      "Structured the system using layered architecture",
    ],
    highlights: ["Spring Boot", "PostgreSQL", "JWT", "AWS S3", "Layered architecture"],
    stack: ["Spring Boot", "PostgreSQL", "JWT", "AWS S3"],
    preview: {
      src: bocSafePassPreview,
      label: "// access-control-preview.svg",
      alt: "Preview panel for the BOC SafePass QR access and verification workflow",
    },
    sourceUrl: "https://github.com/roginandd/safepass_api",
    liveUrl: null,
    notes: null,
  },
  {
    slug: "daelo",
    endpoint: "/projects/daelo",
    className: "Daelo",
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
    preview: {
      src: daeloPreview,
      label: "// interview-simulation-preview.svg",
      alt: "Preview panel for the Daelo AI interview and resume workflow",
    },
    sourceUrl: null,
    liveUrl: null,
    notes: null,
  },
  {
    slug: "vista",
    endpoint: "/projects/vista",
    className: "Vista",
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
    preview: {
      src: vistaPreview,
      label: "// virtual-staging-preview.svg",
      alt: "Preview panel for the Vista property visualization and virtual staging workflow",
    },
    sourceUrl: "https://github.com/roginandd/vista-api",
    liveUrl: "https://vista-cspsits.vercel.app",
    notes: null,
  },
  {
    slug: "fair-group-assignment-system",
    endpoint: "/projects/fair-group-assignment-system",
    className: "FairGroupAssignmentSystem",
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
    preview: {
      src: fairGroupAssignmentPreview,
      label: "// grouping-result-preview.svg",
      alt: "Preview panel for the Fair Group Assignment System result screen",
    },
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
  returnLine: 'return new ConnectionSuccessful("backend-collaboration-started");',
};

export const footer = {
  closingLine: "} // end RoginandVillegas.java",
  statusLine: "BUILD SUCCESSFUL",
};
