import graveHavenImage from "@/assets/portfolio/grave-haven_lzzxti.png.asset.json";
import healthConnectImage from "@/assets/portfolio/health-connect_bb9n9k.png.asset.json";
import hopeBridgeImage from "@/assets/portfolio/image_w71kek.png.asset.json";
import hrManagementImage from "@/assets/portfolio/hive_azhuuk.png.asset.json";
import mediCoreImage from "@/assets/portfolio/hms_f4bngw.png.asset.json";
import novusImage from "@/assets/portfolio/novus_iygd53.png.asset.json";
import tracleadsImage from "@/assets/portfolio/tracleads-portfolio-mockup.png.asset.json";
import arenaXImage from "@/assets/portfolio/arenax.jpg.asset.json";
import emberlyLaptop from "@/assets/portfolio/emberly-laptop-mockup.png.asset.json";
import emberlyHabit from "@/assets/portfolio/emberly-portfolio-mockh.png.asset.json";
import emberlyJournal from "@/assets/portfolio/emberly-portfolio-shotn.png.asset.json";
import directletLaptop from "@/assets/portfolio/directlet-landing-laptop-photo.png.asset.json";
import directletLanding from "@/assets/portfolio/directlet-landing-shot.png.asset.json";
import directletPortal from "@/assets/portfolio/directlet-portfolio-shot.png.asset.json";
import directletLandlord from "@/assets/portfolio/directlet-landlord-dashboard-16x9.png.asset.json";
import directletTenant from "@/assets/portfolio/directlet-tenant-dashboard-4x3.png.asset.json";
import buttaRushHome from "@/assets/portfolio/butta-rush-home-laptop.png.asset.json";
import buttaRushMenu from "@/assets/portfolio/butta-rush-menu-desktop.png.asset.json";
import buttaRushPickup from "@/assets/portfolio/butta-rush-pickup-desktop.png.asset.json";
import buttaRushMenuMobile from "@/assets/portfolio/butta-rush-menu-mobile.png.asset.json";
import buttaRushPickupMobile from "@/assets/portfolio/butta-rush-pickup-mobile.png.asset.json";

export type ProjectImage = { src: string; alt: string };

export type CaseStudy = {
  /** One-line summary shown under the project title. */
  short?: string;
  /** Who the product is for. */
  audience: string;
  /** Your part in the project (optional, hidden when empty). */
  role?: string;
  overview: string;
  challenge: string;
  approach: string;
  /** What was delivered (optional, hidden when empty). */
  built?: string[];
  features: string[];
  outcomeLabel: string;
  outcome: string;
};

export type PortfolioProject = {
  id: string;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  /** Set to false to hide a project without deleting it. */
  visible: boolean;
  /** Optional badge, e.g. "In development". */
  status?: string;
  /** Optional badge, e.g. "Built at Scaletru". */
  companyLabel?: string;
  image?: ProjectImage;
  /** Extra screenshots shown in the project dialog. */
  gallery?: ProjectImage[];
  liveDemo?: string;
  github?: string;
  tone: "one" | "two" | "three";
  caseStudy: CaseStudy;
};

/** Single source of truth for portfolio projects. Order here is display order. */
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "tracleads",
    slug: "tracleads",
    title: "Tracleads (CRM)",
    description:
      "A multi-tenant CRM and sales platform for managing leads, contacts, companies, deals and tasks, with role-based access and reporting.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    featured: true,
    visible: true,
    companyLabel: "Built at Scaletru",
    image: { src: tracleadsImage.url, alt: "Tracleads CRM workspace and sales pipeline" },
    tone: "three",
    caseStudy: {
      short: "A full-spec CRM and sales operations workspace built for daily internal use.",
      audience:
        "Sales teams at growing businesses, starting with Scaletru's own team as the daily users of the workspace.",
      overview:
        "Tracleads is Scaletru's internal CRM and sales operations workspace, designed to manage client deals from first enquiry through to close. It serves as both an operational system for the team and a showcase of full commercial SaaS execution.",
      challenge:
        "Growing businesses often manage sales across disconnected spreadsheets, fragmented chat histories and manual reminders. That creates weak ownership, incomplete customer context and follow-ups that are easy to miss as deal volume grows.",
      approach:
        "The product is organized around a multi-tenant workspace model, with secure account access and structured onboarding for each business. The sales workflow focuses on capturing and qualifying leads, moving deals through defined stages, maintaining customer records, scheduling follow-ups and reviewing performance.",
      built: [
        "Multi-tenant workspace onboarding with business profile setup",
        "Secure account access with Google sign-in and session-aware workspace protection",
        "Lead, contact and company management across a shared CRM workspace",
        "Deal pipeline, task scheduling and reporting views for daily sales operations",
      ],
      features: [
        "Lead capture with search, filtering and sorting",
        "Visual deal pipeline from New to Qualified, Proposal and Won",
        "Connected contacts and companies directory",
        "Tasks, follow-up scheduling and reporting dashboards",
      ],
      outcomeLabel: "What it demonstrates",
      outcome:
        "Tracleads demonstrates Scaletru's ability to take a commercial SaaS product from system design through secure onboarding and operational workflows, delivering multi-tenant software for repeated daily use.",
    },
  },
  {
    id: "medi-core",
    slug: "medi-core",
    title: "Medi-core",
    description: "A multi-tenant hospital management platform with role-based access.",
    technologies: ["TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    featured: true,
    visible: true,
    image: { src: mediCoreImage.url, alt: "Medi-core project preview" },
    liveDemo: "https://medicore-xo9h.onrender.com",
    github: "https://github.com/Gokubanny/medicore-health-platform.git",
    tone: "three",
    caseStudy: {
      audience: "Hospitals and healthcare organizations that need one platform for their staff, with each organization's data kept separate.",
      overview:
        "An enterprise hospital management platform built around data isolation and role-based access, designed to streamline operations and support patient care across organizations.",
      challenge:
        "Hospital software has to serve many organizations and many kinds of staff while keeping each organization's data strictly separate.",
      approach:
        "A multi-tenant architecture isolates data per organization, and role-based access limits each user to what their job requires. The API runs on Node.js, Express and MongoDB behind a TypeScript front end.",
      features: [
        "Multi-tenant data isolation",
        "Role-based access control",
        "Streamlined hospital operations",
        "Support for patient care across organizations",
      ],
      outcomeLabel: "What it demonstrates",
      outcome:
        "Enterprise-style design: tenant isolation and permissions built into the foundation of a TypeScript full-stack platform.",
    },
  },
  {
    id: "nexfordedu",
    slug: "nexfordedu",
    title: "NexfordEdu",
    description: "An online learning platform with AI-led study and biometric attendance.",
    technologies: ["TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    featured: true,
    visible: true,
    liveDemo: "https://nexford-edu.onrender.com",
    tone: "one",
    caseStudy: {
      audience: "Students and institutions that want AI-supported study, dependable attendance records and clear academic insight.",
      overview:
        "An academic management platform combining AI-powered learning, biometric attendance, and real-time institutional analytics.",
      challenge:
        "Institutions need reliable attendance records and a live view of how learners are doing, while students benefit from guided study support.",
      approach:
        "AI-powered learning, biometric attendance and real-time analytics sit together in one academic management platform built on Node.js, Express and MongoDB.",
      features: [
        "AI-powered learning",
        "Biometric attendance",
        "Real-time institutional analytics",
      ],
      outcomeLabel: "What it demonstrates",
      outcome:
        "Bringing AI, biometrics and analytics together in one TypeScript full-stack academic platform.",
    },
  },
  {
    id: "arenax",
    slug: "arenax",
    title: "ArenaX",
    description:
      "A student sports tournament management platform with single-elimination brackets, invite-based onboarding and admin score confirmation.",
    technologies: ["React", "TypeScript", "Vite", "Node.js", "Express", "MongoDB"],
    featured: true,
    visible: true,
    image: { src: arenaXImage.url, alt: "ArenaX tournament management interface" },
    tone: "one",
    caseStudy: {
      audience: "Student sports organizers who run tournaments, and the students who compete in them.",
      overview:
        "ArenaX is a student sports tournament management platform. It brings single-elimination brackets, invite-based onboarding and admin score confirmation into one place.",
      challenge:
        "Student tournaments are often run through group chats and spreadsheets, which makes brackets, results and score disputes hard to keep straight.",
      approach:
        "Brackets follow a single-elimination format, participants join by invitation, and an admin confirms scores. It is built with React, TypeScript and Vite on a Node.js, Express and MongoDB API.",
      features: [
        "Single-elimination brackets with winners advancing round by round",
        "Invite-based onboarding",
        "Admin score confirmation",
      ],
      outcomeLabel: "What it demonstrates",
      outcome:
        "A complete tournament workflow, from invitations to brackets to confirmed results, built end to end on a typed React and Node.js stack.",
    },
  },
  {
    id: "grave-haven",
    slug: "grave-haven",
    title: "Grave Haven",
    description: "A fashion marketplace for independent designers and their customers.",
    technologies: ["TypeScript", "Tailwind CSS", "MongoDB", "REST API", "Express.js", "Responsive Design"],
    featured: true,
    visible: true,
    image: { src: graveHavenImage.url, alt: "Grave Haven project preview" },
    liveDemo: "https://grave-haven-frontend.onrender.com",
    github: "https://github.com/Gokubanny/grave-haven.git",
    tone: "three",
    caseStudy: {
      audience: "Independent fashion designers and the customers who shop with them.",
      overview:
        "A full-stack fashion marketplace bringing real-time messaging, designer appointments, and inventory management into one shopping experience.",
      challenge:
        "Independent designers often sell through scattered channels, with conversations, appointments and stock tracked in different places.",
      approach:
        "A single marketplace puts messaging, appointments and inventory into one flow, backed by an Express REST API and MongoDB, with a responsive TypeScript front end.",
      features: [
        "Real-time messaging between customers and designers",
        "Designer appointment booking",
        "Inventory management",
        "Responsive shopping experience",
      ],
      outcomeLabel: "What it demonstrates",
      outcome:
        "A multi-sided marketplace where messaging, scheduling and inventory work together in one TypeScript full-stack product.",
    },
  },
  {
    id: "geostaff",
    slug: "geostaff",
    title: "Geostaff",
    description:
      "Modern online platform for enhancing security and efficiency in address verification.",
    technologies: ["TypeScript", "Tailwind CSS", "Node.js"],
    featured: true,
    visible: true,
    tone: "three",
    caseStudy: {
      audience: "Teams that need to verify addresses quickly and securely.",
      overview:
        "Geostaff is a modern online platform for address verification, built to improve both security and efficiency.",
      challenge:
        "Manual address checks are slow, and unverified addresses weaken security.",
      approach:
        "A single web platform handles address verification, built with TypeScript, Tailwind CSS and Node.js.",
      features: [
        "Address verification in one platform",
        "Security-focused checks",
        "An efficient verification workflow",
      ],
      outcomeLabel: "What it demonstrates",
      outcome:
        "A focused verification product with security and speed as its two main goals.",
    },
  },
  {
    id: "butta-rush",
    slug: "butta-rush",
    title: "Butta Rush",
    description:
      "A bakery and catering website where customers browse the menu, prepare an order and choose a pickup time.",
    technologies: ["React", "TypeScript"],
    featured: false,
    visible: false,
    companyLabel: "Built at Scaletru",
    image: { src: buttaRushHome.url, alt: "Butta Rush bakery ordering website on a laptop" },
    gallery: [
      { src: buttaRushMenu.url, alt: "Butta Rush desktop menu and order basket" },
      { src: buttaRushPickup.url, alt: "Butta Rush desktop pickup booking form" },
      { src: buttaRushMenuMobile.url, alt: "Butta Rush menu on a mobile screen" },
      { src: buttaRushPickupMobile.url, alt: "Butta Rush pickup booking on a mobile screen" },
    ],
    tone: "two",
    caseStudy: {
      short: "A bakery and catering website that turns menu browsing into a ready-to-send WhatsApp order.",
      audience:
        "Customers who want to order cakes, small chops, pastries and party trays, and the owner who receives those orders on WhatsApp.",
      overview:
        "Butta Rush sells cakes, small chops, pastries and party trays. The website helps customers browse the menu, build an order, book a pickup time and send the details to the owner on WhatsApp.",
      challenge:
        "Orders came through scattered social-media chats, requiring the owner to retype menu details, calculate totals and coordinate pickup times one message at a time.",
      approach:
        "The experience keeps ordering simple: customers can browse and filter the menu, review a basket with a running subtotal, choose pickup details and hand off a complete order through WhatsApp, without requiring a database-backed checkout.",
      role: "Design & development",
      built: [
        "Homepage introducing the catering business and directing customers to browse or order",
        "Filterable menu with item quantities and a running subtotal",
        "Pickup date, time and address selection",
        "Pre-filled WhatsApp order containing items, totals and pickup details",
      ],
      features: [
        "Inquiry-only items can be ordered without a listed price",
        "Past pickup dates are blocked and incomplete forms show inline errors",
        "Mobile-friendly menu filters and ordering controls",
        "Large tap targets and higher-contrast text",
      ],
      outcomeLabel: "What was delivered",
      outcome:
        "A lightweight ordering flow combines menu discovery, basket totals, pickup scheduling and WhatsApp handoff in a static site that is simple to host and maintain.",
    },
  },
  {
    id: "hopebridge-foundation",
    slug: "hopebridge-foundation",
    title: "HopeBridge Foundation",
    description: "An awareness and connection hub for donors and volunteers.",
    technologies: ["Next.js", "Tailwind CSS"],
    visible: true,
    image: { src: hopeBridgeImage.url, alt: "HopeBridge Foundation project preview" },
    liveDemo: "https://hopebridge-foundation.onrender.com",
    github: "https://github.com/Gokubanny/HopeBridge-Foundation.git",
    tone: "two",
    caseStudy: {
      audience: "Donors and volunteers deciding whether to support the foundation.",
      overview:
        "A modern, responsive nonprofit website designed to connect a foundation with donors and volunteers through a clear, awareness-focused experience.",
      challenge:
        "A nonprofit has to explain its mission quickly and give supporters an obvious way to get involved.",
      approach:
        "A responsive, awareness-focused site built with Next.js and Tailwind CSS that moves visitors from the foundation's story to supporting it.",
      features: [
        "Awareness-focused content",
        "Clear routes for donors",
        "Clear routes for volunteers",
        "Responsive layout across devices",
      ],
      outcomeLabel: "What it demonstrates",
      outcome:
        "Front-end craft: a clear, responsive content site built with Next.js and Tailwind CSS.",
    },
  },
  {
    id: "directlet",
    slug: "directlet",
    title: "DirectLet",
    description:
      "A rental marketplace connecting landlords and tenants directly, without agents or agency fees.",
    technologies: [
      "React 19",
      "TanStack Start",
      "TanStack Router & Query",
      "Tailwind CSS",
      "TypeScript",
      "Socket.IO Client",
      "Leaflet / OpenStreetMap",
      "Node.js / Express",
    ],
    featured: false,
    visible: true,
    status: "In development",
    image: { src: directletLaptop.url, alt: "DirectLet rental marketplace displayed on a laptop" },
    gallery: [
      { src: directletLanding.url, alt: "DirectLet rental marketplace homepage" },
      { src: directletPortal.url, alt: "DirectLet property search and listing results" },
      { src: directletTenant.url, alt: "DirectLet tenant dashboard" },
      { src: directletLandlord.url, alt: "DirectLet landlord dashboard" },
    ],
    tone: "one",
    caseStudy: {
      short: "A two-sided rental marketplace connecting landlords directly with tenants in Lagos and Abuja.",
      audience: "Landlords and tenants in Lagos and Abuja who want to rent without agents or agency fees.",
      overview:
        "DirectLet is a rental marketplace tailored to the Nigerian residential property market. It connects vetted landlords with prospective tenants and structures the discovery, inspection and agreement phases.",
      challenge:
        "Renting can involve high agent and agreement fees, fraudulent listings, and uncoordinated inspections arranged across fragmented conversations. Tenants and property owners face trust gaps and operational friction.",
      approach:
        "The product focuses on trust verification and structured transaction checkpoints rather than open-ended classifieds. The frontend connects to modular REST and WebSocket services, with localized filtering, role-based dashboards and an inspection booking flow.",
      built: [
        "Marketplace portals for tenants, landlords and administrators",
        "Landlord listing management with credential badges and property status controls",
        "Inspection booking and fee checkout with status tracking",
        "Real-time landlord-tenant messaging with conversation history",
        "Neighborhood search and map pins for Lagos and Abuja",
        "Administrative identity review, dispute flags and listing verification",
      ],
      features: [
        "Verified Landlord badges tied to identity vetting",
        "Inspection scheduling with booking status and confirmations",
        "Inspection fee checkout to confirm tenant intent",
        "Persistent messaging linked to property listings",
        "Neighborhood filters for Lagos and Abuja",
        "Role-specific dashboards for inquiries, listings and bookings",
      ],
      outcomeLabel: "What it demonstrates",
      outcome:
        "DirectLet shows how high-friction rental workflows can be organized into a single marketplace with verification, structured inspections, localized discovery and communication tools.",
    },
  },
  {
    id: "emberly",
    slug: "emberly",
    title: "Emberly",
    description:
      "A distraction-free habit tracker built around daily momentum, calm typography and local-first logging.",
    technologies: [
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Router",
      "PostgreSQL",
      "Supabase Realtime & RLS",
      "Vite",
    ],
    featured: false,
    visible: true,
    image: { src: emberlyLaptop.url, alt: "Emberly habit tracker displayed on a laptop" },
    gallery: [
      { src: emberlyHabit.url, alt: "Emberly daily habit checklist and progress ring" },
      { src: emberlyJournal.url, alt: "Emberly daily reflection and journaling screen" },
    ],
    tone: "three",
    caseStudy: {
      short: "A distraction-free habit tracker built around daily momentum, calm typography and local-first logging.",
      audience:
        "People who want a quiet, intentional space to log daily habits and reflections without notification overload.",
      overview:
        "Emberly is a mobile-first habit tracking application designed to give people a quiet, intentional space to log recurring rituals, maintain streaks and record daily reflections.",
      challenge:
        "Many habit apps add complex onboarding, gamified vanity metrics and intrusive notifications that can fatigue users. People can end up managing the tool instead of their habits.",
      approach:
        "The product reduces interaction cost to quick confirmations and immediate feedback. A local-first client cache supports fast updates, with cloud synchronization and relational persistence for cross-device use.",
      built: [
        "Mobile-first responsive web client with custom typography and semantic design tokens",
        "Local-first state with background synchronization",
        "Relational data model with row-level security for user data isolation",
        "Private-by-default community questions and reflection flow",
      ],
      features: [
        "One-tap habit checklist with completion feedback",
        "Daily progress ring showing completion and momentum",
        "Daily reflection journaling with visit and reflection heatmaps",
        "Cross-device synchronization and profile management",
      ],
      outcomeLabel: "What it demonstrates",
      outcome:
        "Emberly demonstrates disciplined interface design and low-latency client architecture, showing how a focused habit tracker can feel useful without adding unnecessary complexity.",
    },
  },
  {
    id: "hr-management-system",
    slug: "hr-management-system",
    title: "HR Management System",
    description: "A people-first platform for employee management, payroll, and performance tracking.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Chart.js"],
    visible: true,
    image: { src: hrManagementImage.url, alt: "HR Management System project preview" },
    liveDemo: "https://staff-hive.onrender.com",
    github: "https://github.com/Gokubanny/Staff-Hive.git",
    tone: "one",
    caseStudy: {
      audience: "HR teams and managers who run onboarding, payroll and performance reviews for a growing workforce.",
      overview:
        "A full-stack HR Management System built with React and Node.js. It brings employee onboarding, payroll management, performance tracking, and real-time analytics together, with role-based access and automated workflows.",
      challenge:
        "HR work often ends up spread across spreadsheets, email threads and separate payroll tools. Records drift out of sync and performance is hard to track in one place.",
      approach:
        "One platform covers the employee journey from onboarding through payroll and reviews. Role-based access controls who can see and change what, JWT handles sessions, and Chart.js turns the data into live analytics.",
      features: [
        "Employee onboarding and records",
        "Payroll management",
        "Performance tracking",
        "Real-time analytics dashboards",
        "Role-based access with automated workflows",
      ],
      outcomeLabel: "What it demonstrates",
      outcome:
        "A complete full-stack build on React, Node.js and MongoDB, combining authentication, role-based permissions and data visualization in a single product.",
    },
  },
  {
    id: "anonymous-advice-platform",
    slug: "anonymous-advice-platform",
    title: "Anonymous Advice Platform",
    description: "A community space for sharing and receiving advice anonymously.",
    technologies: ["Next.js", "Socket.io", "PostgreSQL", "Prisma", "Tailwind CSS"],
    visible: true,
    tone: "two",
    caseStudy: {
      audience: "People who want an honest outside perspective without attaching their name to the question.",
      overview:
        "An advice community with anonymous posts, topic-focused conversations, moderation, and recommendations, built to make asking for another perspective feel approachable.",
      challenge:
        "Asking for advice about a personal situation is hard when your identity is attached to the question, so many people simply don't ask.",
      approach:
        "Posts are anonymous and grouped into topic-focused conversations. Moderation keeps discussions respectful, recommendations help people find relevant threads, and Socket.io keeps conversations live.",
      features: [
        "Anonymous posting",
        "Topic-focused conversations",
        "Moderation tools",
        "Recommendations for relevant threads",
      ],
      outcomeLabel: "What it demonstrates",
      outcome:
        "Real-time features on Next.js and Socket.io, with a PostgreSQL database managed through Prisma, designed around privacy and community safety.",
    },
  },
  {
    id: "health-connect",
    slug: "health-connect",
    title: "Health Connect",
    description: "A hospital platform for booking appointments and finding nearby care.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    visible: true,
    image: { src: healthConnectImage.url, alt: "Health Connect project preview" },
    liveDemo: "https://healthconnect-frontend-qa77.onrender.com",
    github: "https://github.com/Gokubanny/New-Health-Connect",
    tone: "one",
    caseStudy: {
      audience: "Patients who need to book a doctor and find healthcare facilities near them.",
      overview:
        "A smart hospital platform where people can book doctor appointments, locate healthcare facilities, and manage bookings through an intuitive dashboard.",
      challenge:
        "Finding nearby care and booking an appointment can mean several calls or visits, and managing those bookings afterwards is just as scattered.",
      approach:
        "One dashboard handles facility search, doctor appointments and booking management, built with a React and TypeScript front end on a Node.js, Express and MongoDB API.",
      features: [
        "Doctor appointment booking",
        "Find nearby healthcare facilities",
        "Booking management dashboard",
      ],
      outcomeLabel: "What it demonstrates",
      outcome:
        "A practical healthcare workflow, from search to booking to management, delivered end to end on a typed React and Node.js stack.",
    },
  },
  {
    id: "novus-address-verification",
    slug: "novus-address-verification",
    title: "Novus Address Verification System",
    description: "A streamlined way to verify addresses and strengthen online security.",
    technologies: ["TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    visible: true,
    image: { src: novusImage.url, alt: "Novus Address Verification System project preview" },
    liveDemo: "https://novus-vy80.onrender.com",
    tone: "two",
    caseStudy: {
      audience: "Teams that need to verify addresses and want to strengthen security in their applications.",
      overview:
        "An address verification platform designed for real-time validation and straightforward integration with existing applications.",
      challenge:
        "Unverified addresses weaken security checks and let bad data into applications.",
      approach:
        "Real-time validation behind a simple integration, so existing applications can add address verification without being rebuilt.",
      features: [
        "Real-time address validation",
        "Straightforward integration with existing applications",
        "Security-focused verification",
      ],
      outcomeLabel: "What it demonstrates",
      outcome:
        "Designing a focused verification service that other applications can plug into.",
    },
  },
];

export const visibleProjects = portfolioProjects.filter((project) => project.visible);

export const featuredProjects = visibleProjects.filter((project) => project.featured);

export const portfolioExperience = [
  {
    title: "Computer Science (400 Level)",
    organization: "University of Port Harcourt",
    date: "2022 — Present",
    description: [
      "Final-year student pursuing a Bachelor's degree in Computer Science",
      "Studying advanced algorithms, data structures, and software engineering",
      "Applying theory to practical development projects",
    ],
    tone: "one",
  },
  {
    title: "Hackathon Winner — 2nd Place",
    organization: "GoMyCode × Africa's Talking Hackathon",
    date: "July 2025",
    description: [
      "Competed solo in a challenging hackathon environment",
      "Took a project from concept through implementation",
      "Placed second among the participating teams",
    ],
    tone: "two",
  },
  {
    title: "Software Development Bootcamp",
    organization: "GoMyCode",
    date: "2025",
    description: [
      "Completed an intensive software development program",
      "Developed practical full-stack skills and working habits",
      "Built multiple projects throughout the program",
    ],
    tone: "three",
  },
  {
    title: "Frontend Development Fundamentals",
    organization: "Divine Learning Hub",
    date: "2022",
    description: [
      "Learned the fundamentals of HTML, CSS, and JavaScript",
      "Built static and interactive web pages",
      "Developed a foundation in web development",
    ],
    tone: "one",
  },
] as const;