import graveHavenImage from "@/assets/portfolio/grave-haven_lzzxti.png.asset.json";
import graveHaventailor from "@/assets/portfolio/grave-haventailor.png.asset.json";
import graveHavencustomer from "@/assets/portfolio/grave-havencustomer.png.asset.json";
import graveHavenabout from "@/assets/portfolio/grave-havenabout.png.asset.json";
import healthConnectImage from "@/assets/portfolio/health-connect_bb9n9k.png.asset.json";
import healthConnectabout from "@/assets/portfolio/health-connectabout.png.asset.json";
import healthConnectdoctor from "@/assets/portfolio/health-connectdoctor.png.asset.json";
import healthConnectpaitent from "@/assets/portfolio/health-connectpatient.png.asset.json";
import healthConnectconsultation from "@/assets/portfolio/health-connectconsultation.png.asset.json";
import hopeBridgeImage from "@/assets/portfolio/image_w71kek.png.asset.json"; 
import hopebridgeabout from "@/assets/portfolio/hopebridgeabout.png.asset.json";
import hopebridgeprogram from "@/assets/portfolio/hopebridgeprogram.png.asset.json";
import hopebridgesupport from "@/assets/portfolio/hopebrigdesupport.png.asset.json";
import hrManagementImage from "@/assets/portfolio/hive_azhuuk.png.asset.json";
import staffhiveHrattendance from "@/assets/portfolio/hivehr.png.asset.json";
import staffhiveHr from "@/assets/portfolio/hivehrattendance.png.asset.json";
import staffhiveemployee from "@/assets/portfolio/hiveemployee.png.asset.json";
import staffhiveattendance from "@/assets/portfolio/hiveemployeeattendance.png.asset.json";
import mediCoreImage from "@/assets/portfolio/hms_f4bngw.png.asset.json";
import medicorelogin from "@/assets/portfolio/medicorelogin.png.asset.json";
import medicoredoctors from "@/assets/portfolio/hms_f4bngw.png.asset.json";
import medicorepatient from "@/assets/portfolio/hms_f4bngw.png.asset.json";
import medicorepharmacy from "@/assets/portfolio/hms_f4bngw.png.asset.json";
import novusImage from "@/assets/portfolio/novus_iygd53.png.asset.json";
import geostaffadmin from "@/assets/portfolio/goestaffadmin.png.asset.json";
import geostaffemployee from "@/assets/portfolio/goestaffemployee.png.asset.json";
import geostaffaddress from "@/assets/portfolio/goestaffaddress.png.asset.json";
import geostaffmanagement from "@/assets/portfolio/goestaffmanagemement.png.asset.json";
import tracleadsImage from "@/assets/portfolio/tracleads-portfolio-mockup.png.asset.json";
import tracleadsdashboard from "@/assets/portfolio/tracleads-dashoard-mockup.png.asset.json";
import tracleadsworksetup from "@/assets/portfolio/tracleads-workspace-setup-mockup.png.asset.json";
import tracleadslead  from "@/assets/portfolio/tracleads-lead-mockup.png.asset.json";
import tracleadslogin  from "@/assets/portfolio/tracleads-login-mockup.png.asset.json";
import arenaXImage from "@/assets/portfolio/arenax.jpg.asset.json";
import arenaxLive from "@/assets/portfolio/arenexlive.jpg.asset.json";
import arenaxdashboard from "@/assets/portfolio/arenexdashboard.jpg.asset.json";
import arenaxtournament from "@/assets/portfolio/arenextournament.jpg.asset.json"
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
import essenceLaptop from "@/assets/portfolio/essence-homepage-laptop.jpg.asset.json";
import essenceCatalog from "@/assets/portfolio/essence-catalog-desktop-mobile.jpg.asset.json";
import essenceProduct from "@/assets/portfolio/essence-product-desktop-mobile.jpg.asset.json";
import nexfordimg from "@/assets/portfolio/nexford-landing.png.asset.json";
import nexfordlogin from "@/assets/portfolio/nexfordlogin.png.asset.json"
import lecturerdashboard from "@/assets/portfolio/nexfordlecture.png.asset.json"
import studentdashboard from "@/assets/portfolio/nexfordstudent.png.asset.json"
import schooladmindashboard from "@/assets/portfolio/nexfordadmin.png.asset.json"
import printblinkLaptop from "@/assets/portfolio/printblink-laptop-home.png.asset.json";
import printblinkProducts from "@/assets/portfolio/printblink-products.png.asset.json";
import printblinkAbout from "@/assets/portfolio/printblink-mobile-about.png.asset.json";
import printblinkContact from "@/assets/portfolio/printblink-mobile-contact.png.asset.json";

export type ProjectImage = { src: string; alt: string };

export type CaseStudy = {
  /** One-line summary shown under the project title. */
  short?: string;
  /** Who the product is for. */
  audience: string;
  /** My part in the project (optional, hidden when empty). */
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
    id: "nexfordedu",
    slug: "nexfordedu",
    title: "NexfordEdu",
    description: "An online learning platform with AI-led study and biometric attendance.",
    technologies: ["TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    image: { src: nexfordimg.url, alt: "Medi-core project preview" },
    gallery: [
      { src: nexfordlogin.url, alt: "Butta Rush desktop menu with category filters, Nigerian meals and naira prices" },
      { src: lecturerdashboard.url, alt: "Butta Rush desktop pickup booking with date, hourly time slots, address and WhatsApp order summary" },
      { src: studentdashboard.url, alt: "Butta Rush mobile menu showing Jollof Rice and the order basket with a naira total" },
      { src: schooladmindashboard.url, alt: "Butta Rush mobile pickup form and order summary ready to send on WhatsApp" },
    ],
    featured: true,
    visible: true,
    liveDemo: "https://nexford-edu.onrender.com",
    github: "https://github.com/Gokubanny/novalearn-suite.git",
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
    id: "medi-core",
    slug: "medi-core",
    title: "Medi-core",
    description: "A multi-tenant hospital management platform with role-based access.",
    technologies: ["TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    featured: true,
    visible: true,
    image: { src: mediCoreImage.url, alt: "Medi-core Landing Page" },
    gallery: [
      {src: medicorelogin.url, alt: "Medicore login page"},
      {src: medicoredoctors.url, alt: "Doctor's Dashboard and workspace"},
      {src: medicorepatient.url, alt: "Patient's Dahboard"},
      {src: medicorepharmacy.url, alt: "Pharmacy's Dashboard"},
    ],
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
    id: "tracleads",
    slug: "tracleads",
    title: "Tracleads (CRM)",
    description:
      "A multi-tenant CRM and sales platform for managing leads, contacts, companies, deals and tasks, with role-based access and reporting.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    featured: true,
    visible: true,
    status: "in development",
    companyLabel: "Built at Scaletru",
    image: { src: tracleadsImage.url, alt: "Tracleads CRM workspace and sales pipeline" },
    gallery: [
      { src: tracleadslogin.url, alt: "Butta Rush desktop menu with category filters, Nigerian meals and naira prices" },
      { src: tracleadsworksetup.url, alt: "Butta Rush desktop pickup booking with date, hourly time slots, address and WhatsApp order summary" },
      { src: tracleadsdashboard.url, alt: "Butta Rush mobile menu showing Jollof Rice and the order basket with a naira total" },
      { src: tracleadslead.url, alt: "Butta Rush mobile pickup form and order summary ready to send on WhatsApp" },
    ],
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
    id: "arenax",
    slug: "arenax",
    title: "ArenaX",
    description:
      "A student sports tournament management platform with single-elimination brackets, invite-based onboarding and admin score confirmation.",
    technologies: ["React", "TypeScript", "Vite", "Node.js", "Express", "MongoDB"],
    featured: true,
    visible: true,
    image: { src: arenaXImage.url, alt: "ArenaX tournament management interface" },
    gallery: [
      {src: arenaxLive.url, alt: "Arena Login page"},
      {src: arenaxdashboard.url, alt: "ArenaX team representative dahsboard"},
      {src: arenaxtournament.url, alt: "Arenax browse tournament page"}
    ],
    liveDemo: "https://arenax-sdlf.onrender.com",
    github: "https://github.com/Gokubanny/arenax.git",
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
    id: "essence",
    slug: "Essence",
    title: "Essence",
    description:
    "A concept fragrance house with a 100-product catalog, guided scent discovery, a wishlist and a demo checkout journey, brought together in a considered editorial storefront.",
    technologies: [
      "React",
      "Vite",
      "shadcn/ui",
      "Tailwind CSS",
      "TypeScript",
      "Node.js / Express",
    ],
    visible: true,
    image: { src: essenceLaptop.url, alt: "Essence fragrance storefront homepage shown on a laptop with the Velvet Rose perfume feature" },
    liveDemo: "https://hopebridge-foundation.onrender.com",
    github: "https://github.com/Gokubanny/HopeBridge-Foundation.git",
    gallery: [
      { src: essenceCatalog.url, alt: "Essence fragrance catalog on desktop and mobile with collection filters and perfume product cards" },
      { src: essenceProduct.url, alt: "Essence Velvet Rose product page on desktop and mobile with bottle sizes, longevity, quantity and add-to-bag controls" },
    ],
    tone: "two",
    caseStudy: {
      short: "A concept fragrance house with a 100-product catalog, guided scent discovery, a wishlist and a demo checkout journey, brought together in a considered editorial storefront.",
      audience: "Landlords and tenants in Lagos and Abuja who want to rent without agents or agency fees.",
      overview:
      "Essence is a concept perfume brand designed and built as a working storefront demonstration. Rather than a generic product grid, the experience uses language, imagery and guided discovery to evoke a quiet Scandinavian fragrance house. A hundred-product catalog connects to rich product pages, a scent quiz, a wishlist and a cart and checkout journey.",
    challenge:
      "The project began as a general home-goods store. The challenge was to transform it into a distinctive fragrance house while retaining its commerce foundation. Because customers cannot smell perfume through a screen, the interface needed to communicate scent through evocative copy, product photography and clear fragrance information.",
    approach:
      "We paired an editorial identity with a structured shopping journey. Cormorant Garamond headings, Karla body text, warm neutrals and terracotta accents give Essence the feel of a fragrance journal. Collection filters, size-aware pricing and a five-question scent quiz turn browsing into considered discovery, while shared cart and wishlist state keep the experience consistent across pages.",
    built: [
      "A 100-product fragrance catalog organized by collection, discovery sets and gift sets",
      "Product pages with 5 ml, 10 ml and 50 ml sizes and size-aware pricing",
      "A guided scent quiz ending in personalized fragrance recommendations",
      "A wishlist with sorting, size-availability filters, removal undo and add-to-bag actions",
      "An editorial homepage with rotating fragrance highlights",
      "A demo cart and checkout journey with size-specific line items",
      "An internal perfume directory for reviewing product imagery status",
    ],
    features: [
      "For Her, For Him and Unisex collections with discovery and gift sets",
      "Top, heart and base notes, concentration, longevity and sillage information",
      "Five quiz questions covering mood, season, notes, longevity and sillage",
      "Consistent wishlist hearts and shared client-side shopping state",
      "A bespoke scent-loader animation and carefully written empty states",
      "Brand-consistent copy from the first homepage headline through demo checkout",
    ],
      outcomeLabel: "Demo-ready outcome",
      outcome:
      "Essence presents a cohesive concept fragrance house with a hundred products, real brand names and imagery, guided scent discovery and a checkout path that carries the brand voice throughout. It is demo-ready, not a live trading store: accounts, persistent orders and real payments remain future Lovable Cloud connections, alongside publishing the concept for its next stage.",
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
    visible: true,
    companyLabel: "Built at Scaletru",
    image: { src: buttaRushHome.url, alt: "Butta Rush bakery ordering website on a laptop" },
    liveDemo: "https://hopebridge-foundation.onrender.com",
    github: "https://github.com/Gokubanny/HopeBridge-Foundation.git",
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
    id: "Geostaff",
    slug: "Geostaff-address-verification",
    title: "Geostaff Address Verification System",
    description: "A streamlined way to verify addresses and strengthen online security.",
    technologies: ["TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    visible: true,
    image: { src: novusImage.url, alt: "Geostaff Address Verification System project preview" },
    gallery: [
      {src: geostaffadmin.url, alt: "Geostaff Admin Dashboard"},
      {src: geostaffemployee.url, alt: "Geostaff Employee Dashboard"},
      {src: geostaffaddress.url, alt: "Geostaff Address details  Page"},
      {src: geostaffmanagement.url, alt: "Geostaff Employee Management List Page"},
    ],
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
  {
    id: "directlet",
    slug: "directlet",
    title: "DirectLet",
    description:
    "A two-sided rental marketplace connecting verified Nigerian landlords directly with tenants in Lagos and Abuja, eliminating agent markups and scam-prone WhatsApp workflows.",
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
    companyLabel: "Built at ScaleTru",
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
      "DirectLet is a purpose-built rental marketplace tailored to the operational realities of the Nigerian residential property market. The platform connects vetted landlords with prospective tenants across major urban centres like Lagos and Abuja, removing unvetted intermediaries from the discovery, inspection, and agreement phases.",
    challenge:
      "Renting residential property in Nigeria is burdened by exorbitant 10–20% agent commission and 'agreement' fees, rampant listing fraud, and uncoordinated inspection arrangements conducted across fragmented WhatsApp threads. Without verified landlord identities or structured scheduling, both tenants and property owners endure severe trust deficits and operational friction.",
      approach:
        "The product focuses on trust verification and structured transaction checkpoints rather than open-ended classifieds. The frontend connects to modular REST and WebSocket services, with localized filtering, role-based dashboards and an inspection booking flow.",
        built: [
          "Full-featured two-sided marketplace frontend with dedicated Tenant, Landlord, and Admin operational portals",
          "Landlord listing management suite with verified credential badging and property status toggles",
          "Inspection booking and fee checkout pipeline (₦3,000–₦5,000) with real-time status tracking",
          "Real-time landlord-tenant messaging inbox powered by WebSockets with REST conversation history fallbacks",
          "Location-sensitive search engine with Lagos/Abuja neighborhood filters, price bands, and interactive map pins",
          "Centralized administrative moderation panel for user identity audits, dispute flags, and listing verification",
        ],
        features: [
          "Verified Landlord Badge system tied to identity vetting to protect tenants against phantom rentals",
          "In-app inspection scheduler with scheduled slots, status progression, and automated confirmation states",
          "Integrated inspection fee checkout flow to eliminate offline cash disputes and confirm tenant intent",
          "Live chat inbox with persistent message history, role indicators, and direct listing context references",
          "Neighborhood-level search filters calibrated for Lagos (Island, Mainland) and Abuja districts",
          "Role-gated dashboard environments with custom views for active inquiries, listings, and pending bookings",
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
    liveDemo: "https://emberly.onrender.com",
    github: "https://github.com/Gokubanny/emberly.git",
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
    id: "grave-haven",
    slug: "grave-haven",
    title: "Grave Haven",
    description: "A fashion marketplace for independent designers and their customers.",
    technologies: ["TypeScript", "Tailwind CSS", "MongoDB", "REST API", "Express.js", "Responsive Design"],
    featured: true,
    visible: true,
    image: { src: graveHavenImage.url, alt: "Grave Haven project preview" },
    gallery: [
      {src: graveHavenabout.url, alt: "Grave Haven About Page"},
      {src: graveHavencustomer.url, alt: "Grave Haven Customer Dashboard"},
      {src: graveHaventailor.url, alt: "Grave Haven Tailor Dashboard"},
    ],
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
    id: "hopebridge-foundation",
    slug: "hopebridge-foundation",
    title: "HopeBridge Foundation",
    description: "An awareness and connection hub for donors and volunteers.",
    technologies: ["Next.js", "Tailwind CSS"],
    visible: true,
    image: { src: hopeBridgeImage.url, alt: "HopeBridge Foundation project preview" },
    gallery: [
      {src: hopebridgeabout.url, alt: "HopeBridge About Page"},
      {src: hopebridgeprogram.url, alt: "HopeBridge Program Page"},
      {src: hopebridgesupport.url, alt: "HopeBridge Support Page"},
    ],
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
    id: "hr-management-system",
    slug: "hr-management-system",
    title: "HR Management System",
    description: "A people-first platform for employee management, attendance, and performance tracking.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Chart.js"],
    visible: true,
    image: { src: hrManagementImage.url, alt: "HR Management System project preview" },
    gallery: [
      {src: staffhiveHr.url, alt: "Hr Workspace"},
      {src: staffhiveHrattendance.url, alt: "Hr Attendance Management page"},
      {src: staffhiveemployee.url, alt: "Employee Dashboard"},
      {src: staffhiveattendance.url, alt: "Employee Attendance Management page"},
    ],
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
    visible: false,
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
    gallery: [
      {src: healthConnectabout.url, alt: "HealthConnect About Page"},
      {src: healthConnectdoctor.url, alt: "HealthConnect Doctor Dashboard"},
      {src: healthConnectpaitent.url, alt: "HealthConnect Patient Dashboard"},
      {src: healthConnectconsultation.url, alt: "HealthConnect Paitent Consultation Page"},
    ],
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
    id: "printblink",
    slug: "printblink",
    title: "Printblink",
    description: "Digital storefront and hardware enquiry platform for PrintBlink, an authorized partner for Hyperdist commercial printing equipment and office supplies.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    visible: true,
    image: { src: printblinkLaptop.url, alt: "Butta Rush homepage shown on a laptop, featuring Nigerian meals, cakes and catering"},
    gallery: [
      { src: printblinkAbout.url, alt: "PrintBlink project mobile about page mockup with the Printers, chosen properly headline"},
      { src: printblinkContact.url, alt: "PrintBlink project mobile contact page mockup showing a WhatsApp enquiry option" },
      { src: printblinkProducts.url, alt: "PrintBlink project product catalogue mockup showing printer browsing and search"},
    ],
    tone: "one",
    caseStudy: {
      audience: "Corporate and Enterprise clients as an authorized distribution partner for Hyperdist printing systems.",
      overview:
      "PrintBlink serves corporate and enterprise clients as an authorized distribution partner for Hyperdist printing systems and workplace consumables. The engagement focused on engineering an authoritative digital presence that modernizes client discovery and transitions commercial buyers out of fragmented offline sales loops.",
    challenge:
      "Procurement teams and corporate purchasers previously depended on static PDF catalogues and unstructured messaging to identify models and check hardware specifications. This manual friction delayed response times, increased overhead for sales representatives, and made comparing high-volume office hardware unnecessarily difficult.",
    approach:
      "Scaletru designed and built a fast, performance-first product showcase prioritizing intuitive category exploration and rapid specification checks. Rather than forcing complex self-serve e-commerce checkout onto high-ticket commercial hardware, the interface pairs instant model filtering directly with contextual WhatsApp RFQ pipelines for immediate quote qualification.",
        built: [
          "High-performance responsive web platform and commercial catalog showcase",
          "Structured hardware inventory hierarchy with dynamic category filtering",
          "Contextual WhatsApp sales integration with prefilled product and model parameters",
          "Distributor credentialing suite, partner overview, and direct procurement channels",
        ],
        features: [
          "Multi-tier hardware filtering covering inkjet, enterprise laser, multifunction, and consumable supplies",
          "One-click corporate inquiry routing that attaches model SKUs and specifications directly to WhatsApp chats",
          "Mobile-first responsive architecture designed for sub-second page loads and zero layout shift",
          "Technical spec sheets highlighting print speeds, duty cycles, connectivity, and consumable compatibility",
        ],
      outcomeLabel: "What changed",
      outcome:
        "Replaced scattered offline PDF sharing with a centralized, verified digital storefront that corporate procurement officers can review instantly. Inbound sales requests now reach account executives pre-qualified with precise hardware configurations, cutting quote cycle times and eliminating repetitive back-and-forth model confirmations.",
    },
  },
];

export const visibleProjects = portfolioProjects.filter((project) => project.visible);

export const featuredProjects = visibleProjects.filter((project) => project.featured);

export const portfolioExperience = [
  {
    title: "Computer Science",
    organization: "University of Port Harcourt",
    date: "2022 — 2026",
    description: [
      " Bachelor's degree in Computer Science",
      " Studying advanced algorithms, data structures, and software engineering",
      " Applying theory to practical development projects",
    ],
    tone: "one",
  },
  {
    title: "Hackathon Winner — 3rd Place",
    organization: "GoMyCode × Africa's Talking Hackathon",
    date: "July 2025",
    description: [
      "Competed solo in a challenging hackathon environment",
      "Took a project from concept through implementation",
      "Placed third among the participating teams",
    ],
    tone: "two",
  },
  {
    title: "Software Development Bootcamp",
    organization: "GoMyCode",
    date: "2025",
    description: [
      " Completed an intensive software development program",
      " Developed practical full-stack skills and working habits",
      " Built multiple projects throughout the program",
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