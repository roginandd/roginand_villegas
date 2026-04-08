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
    "Currently pursuing BS Information Technology at the University of Cebu with a focus on Java ecosystems, cloud-backed systems, and practical delivery.",
    "Prefers backend work that turns operational rules into readable endpoints, stable data models, and production-ready implementations.",
  ],
  tags: [
    { name: "@education", value: "BS Information Technology, University of Cebu" },
    { name: "@location", value: "Cebu, Philippines" },
    { name: "@target", value: "internship-and-entry-level-backend-roles" },
  ],
};

export const techStack = [
  {
    label: "languages",
    declaration: "String[] languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "PHP"],
  },
  {
    label: "frameworks",
    declaration: "String[] frameworks",
    items: ["Spring Boot", "Flask", "Next.js", "React", "Tailwind CSS", "Prisma"],
  },
  {
    label: "dataStores",
    declaration: "String[] dataStores",
    items: ["MySQL", "PostgreSQL", "Firebase Firestore", "Amazon S3"],
  },
  {
    label: "tooling",
    declaration: "String[] tooling",
    items: ["Git", "Docker", "Maven", "Postman", "Vite"],
  },
];

export const projects = [
  {
    slug: "csps-platform-backend",
    endpoint: "/projects/csps-platform-backend",
    status: "Maintained",
    title: "CSPS Platform Backend",
    summary:
      "Spring Boot backend for a University of Cebu student platform covering authentication, memberships, announcements, attendance, events, merch, orders, finance, and audit workflows.",
    stack: ["Java", "Spring Boot", "JPA", "MySQL", "AWS S3", "JWT"],
    sourceUrl: "https://github.com/roginandd/CSPS-redesign-backend",
    liveUrl: null,
    notes: null,
  },
  {
    slug: "boc-safepass",
    endpoint: "/projects/boc-safepass",
    status: "In Progress",
    title: "BOC SafePass",
    summary:
      "Access-control system for campus workflows with stakeholder approval, document review, QR issuance, visitor sessions, physical pass inventory, and entry logging.",
    stack: ["Next.js", "React", "Prisma", "PostgreSQL", "Tailwind CSS"],
    sourceUrl: "https://github.com/roginandd/safepass",
    liveUrl: null,
    notes: null,
  },
  {
    slug: "daelo",
    endpoint: "/projects/daelo",
    status: "Private",
    title: "Daelo",
    summary:
      "Included in the portfolio brief as a backend-focused project. The public site keeps this entry intentionally concise because a source repository or public deployment was not available in the workspace.",
    stack: ["Private repository", "Details available on request"],
    sourceUrl: null,
    liveUrl: null,
    notes: "No public repository was verifiable during implementation.",
  },
  {
    slug: "vista",
    endpoint: "/projects/vista",
    status: "Deployed",
    title: "Vista",
    summary:
      "Flask backend for an AI-assisted real estate platform that combines listing management, virtual staging sessions, Firestore persistence, and Amazon S3 media workflows.",
    stack: ["Python", "Flask", "Firebase Firestore", "Amazon S3", "Google Gemini"],
    sourceUrl: "https://github.com/roginandd/vista-api",
    liveUrl: "https://vista-api.vercel.app",
    notes: null,
  },
  {
    slug: "fair-group-assignment-system",
    endpoint: "/projects/fair-group-assignment-system",
    status: "Deployed",
    title: "Fair Group Assignment System",
    summary:
      "Web application that assigns students into balanced groups from CSV grade data using a hybrid grouping algorithm built around divide-and-conquer, round-robin, and greedy partitioning logic.",
    stack: ["React", "Tailwind CSS", "Spring Boot", "CSV processing"],
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
