import graveHavenImage from "@/assets/portfolio/grave-haven_lzzxti.png.asset.json";
import healthConnectImage from "@/assets/portfolio/health-connect_bb9n9k.png.asset.json";
import hopeBridgeImage from "@/assets/portfolio/image_w71kek.png.asset.json";
import hrManagementImage from "@/assets/portfolio/hive_azhuuk.png.asset.json";
import mediCoreImage from "@/assets/portfolio/hms_f4bngw.png.asset.json";
import novusImage from "@/assets/portfolio/novus_iygd53.png.asset.json";

export type PortfolioProject = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  liveDemo: string;
  github: string;
  image?: string;
  tone: "one" | "two" | "three";
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "HR Management System",
    description: "A people-first platform for employee management, payroll, and performance tracking.",
    longDescription:
      "A full-stack HR Management System built with React and Node.js. It brings employee onboarding, payroll management, performance tracking, and real-time analytics together, with role-based access and automated workflows.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "JWT", "Chart.js"],
    liveDemo: "https://staff-hive.onrender.com",
    github: "https://github.com/Gokubanny/Staff-Hive.git",
    image: hrManagementImage.url,
    tone: "one",
  },
  {
    id: 2,
    title: "Anonymous Advice Platform",
    description: "A community space for sharing and receiving advice anonymously.",
    longDescription:
      "An advice community with anonymous posts, topic-focused conversations, moderation, and recommendations, built to make asking for another perspective feel approachable.",
    techStack: ["Next.js", "Socket.io", "PostgreSQL", "Prisma", "Tailwind CSS"],
    liveDemo: "https://example.com",
    github: "https://github.com/example",
    tone: "two",
  },
  {
    id: 3,
    title: "Grave Haven",
    description: "A fashion marketplace for independent designers and their customers.",
    longDescription:
      "A full-stack fashion marketplace bringing real-time messaging, designer appointments, and inventory management into one shopping experience.",
    techStack: ["TypeScript", "Tailwind CSS", "MongoDB", "REST API", "Express.js", "Responsive Design"],
    liveDemo: "https://grave-haven-frontend.onrender.com",
    github: "https://github.com/Gokubanny/grave-haven.git",
    image: graveHavenImage.url,
    tone: "three",
  },
  {
    id: 4,
    title: "Health Connect",
    description: "A hospital platform for booking appointments and finding nearby care.",
    longDescription:
      "A smart hospital platform where people can book doctor appointments, locate healthcare facilities, and manage bookings through an intuitive dashboard.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    liveDemo: "https://healthconnect-frontend-qa77.onrender.com",
    github: "https://github.com/Gokubanny/New-Health-Connect",
    image: healthConnectImage.url,
    tone: "one",
  },
  {
    id: 5,
    title: "HopeBridge Foundation",
    description: "An awareness and connection hub for donors and volunteers.",
    longDescription:
      "A modern, responsive nonprofit website designed to connect a foundation with donors and volunteers through a clear, awareness-focused experience.",
    techStack: ["Next.js", "Tailwind CSS"],
    liveDemo: "https://hopebridge-foundation.onrender.com",
    github: "https://github.com/Gokubanny/HopeBridge-Foundation.git",
    image: hopeBridgeImage.url,
    tone: "two",
  },
  {
    id: 6,
    title: "Medi-core",
    description: "A multi-tenant hospital management platform with role-based access.",
    longDescription:
      "An enterprise hospital management platform built around data isolation and role-based access, designed to streamline operations and support patient care across organizations.",
    techStack: ["TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    liveDemo: "https://medicore-xo9h.onrender.com",
    github: "https://github.com/Gokubanny/medicore-health-platform.git",
    image: mediCoreImage.url,
    tone: "three",
  },
  {
    id: 7,
    title: "NexfordEdu",
    description: "An online learning platform with AI-led study and biometric attendance.",
    longDescription:
      "An academic management platform combining AI-powered learning, biometric attendance, and real-time institutional analytics.",
    techStack: ["TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    liveDemo: "https://nexford-edu.onrender.com",
    github: "#",
    tone: "one",
  },
  {
    id: 8,
    title: "Novus Address Verification System",
    description: "A streamlined way to verify addresses and strengthen online security.",
    longDescription:
      "An address verification platform designed for real-time validation and straightforward integration with existing applications.",
    techStack: ["TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    liveDemo: "https://novus-vy80.onrender.co",
    github: "#",
    image: novusImage.url,
    tone: "two",
  },
];

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