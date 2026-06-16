import SectionLabel from "../ui/SectionLabel.jsx";
import ProjectCard from "./ProjectCard.jsx";

// Project data lives inline here (no data/ folder). Ported from reference/index.html.
// NOTE: DetailPage imports PROJECTS from here to render /projects/:slug.
// The overview/whatILearned/challenges copy mirrors the reference, which still uses
// Lorem ipsum placeholders for those fields — swap in real write-ups when ready.
export const PROJECTS = [
  {
    slug: "travelease",
    title: "TravelEase",
    subtitle: "Travel Planning & Tourism Portal",
    image:
      "https://res.cloudinary.com/dezl3r1u5/image/upload/Screenshot_2026-01-17_024214_q20kcu.jpg",
    liveLink: "https://www.travelease.app/",
    githubLink: null,
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Supabase",
      "Tailwind",
      "GCP",
      "Capstone",
    ],
    desc: "Web-based travel portal for Tagaytay featuring collaborative itineraries, interactive maps, business listings, and user-generated reviews.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    whatIDid: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    ],
    whatILearned:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.",
  },
  {
    slug: "hireva",
    title: "Hireva",
    subtitle: "Job Application Tracker Mobile App",
    image: null,
    liveLink: null,
    githubLink: null,
    tags: [
      "TypeScript",
      "React Native",
      "Expo",
      "Prisma",
      "PostgreSQL",
      "Zustand",
      "Docker",
      "EAS",
    ],
    desc: "Full-stack mobile CRM for job seekers, built entirely solo. JWT auth, 7-model schema, calendar integration, push notifications, and production Docker deployment.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    whatIDid: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
    ],
    whatILearned:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus.",
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
  },
  {
    slug: "andys",
    title: "Andy's Order & Menu System",
    subtitle: "Order Management Web System",
    image:
      "https://res.cloudinary.com/dezl3r1u5/image/upload/Screenshot_2026-01-17_022108_ao5xgr.jpg",
    liveLink: null,
    githubLink: "https://github.com/vaughn-joshua/Order---Menu-System.git",
    tags: [
      "Express.js",
      "Vanilla JS",
      "HTML",
      "CSS",
      "Bootstrap",
      "Google Sheets API",
      "GCP",
    ],
    desc: "Two-module web system for a local food business — customers view menu and place orders; owners track and manage orders in real time.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    whatIDid: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    ],
    whatILearned:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique.",
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.",
  },
  {
    slug: "mywordle",
    title: "MyWordle",
    subtitle: "Wordle Clone Web App",
    image:
      "https://res.cloudinary.com/dezl3r1u5/image/upload/Screenshot_2026-01-17_024519_eovkhn.jpg",
    liveLink: "https://wordle-seven-psi.vercel.app/",
    githubLink: null,
    tags: ["TypeScript", "React", "Express", "Random Word API"],
    desc: "Web-based Wordle clone with real-time feedback on letter positions. Built to strengthen skills in React, TypeScript, and frontend–backend integration.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    whatIDid: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    ],
    whatILearned:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi.",
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.",
  },
  {
    slug: "saveit",
    title: "Save It!",
    subtitle: "Cash Budgeting App — UI/UX Prototype",
    image:
      "https://res.cloudinary.com/dezl3r1u5/image/upload/Screenshot_2026-01-17_024628_lghkh6.jpg",
    liveLink:
      "https://www.figma.com/proto/n4UyToWp3stdAYn9785fZE/Cash-Budgeting-App",
    githubLink: null,
    tags: ["Figma", "UI/UX Design", "Prototype"],
    desc: "Mobile app prototype designed in Figma to practice UI/UX design principles — layout, usability, and visual clarity.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    whatIDid: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    ],
    whatILearned: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.",
  },
  {
    slug: "sms",
    title: "Student Management System",
    subtitle: "Desktop Application",
    image:
      "https://res.cloudinary.com/dezl3r1u5/image/upload/Screenshot_2026-01-17_024041_qq6ggp.jpg",
    liveLink: null,
    githubLink: null,
    tags: ["Java", "MySQL"],
    desc: "Desktop app built with Java and MySQL for managing student records, tailored for Technological University of the Philippines.",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    whatIDid: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    ],
    whatILearned: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    challenges: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function Projects() {
  return (
    <section id="projects">
      <SectionLabel>Projects</SectionLabel>
      <div>
        {PROJECTS.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
