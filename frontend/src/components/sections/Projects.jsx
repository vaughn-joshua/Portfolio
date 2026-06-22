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
    overview: (
      <>
        TravelEase is a <strong>full-stack PERN travel-planning platform</strong>{" "}
        where users can create day-by-day travel plans, discover and register
        local businesses, get <strong>traffic-aware activity suggestions</strong>,
        and plan routes on interactive maps. It supports{" "}
        <strong>role-based access</strong> for different user types — travelers,
        business owners, LGU admins, and super admins — making it a complete
        ecosystem for travel planning and local business discovery.
      </>
    ),
    whatIDid: [
      <>
        Built a <strong>5-role RBAC system</strong> (Super Admin, LGU Admin,
        Business Owner, Travel Agency, User) with{" "}
        <strong>Supabase/JWT dual-mode auth</strong> and an admin-approval
        business-claiming workflow.
      </>,
      <>
        Engineered a <strong>traffic-aware activity suggestion system</strong>{" "}
        using geo-zones, traffic snapshots, and ETA-based alternatives, backed by
        unit tests.
      </>,
      <>
        Owned the <strong>multi-step business registration flow</strong> with
        Leaflet map location picking and Cloudinary multi-image upload.
      </>,
      <>
        Delivered <strong>end-to-end travel plan management</strong> with a
        plan-lifecycle state machine (Draft → Active → Completed/Cancelled) and
        day-segregated activities.
      </>,
      <>
        Built <strong>Leaflet-based route planning</strong> with ETA, place
        autocomplete, and embedded business maps.
      </>,
    ],
    whatILearned: (
      <>
        TravelEase was my{" "}
        <strong>first project built with a true full-stack approach from the
        ground up</strong> — and it changed how I think about building software. I
        learned how to <strong>design a proper relational database schema using
        Prisma</strong>, thinking through table relationships, migrations, and how
        the data model shapes everything built on top of it. I also got hands-on
        experience integrating <strong>Google Maps API</strong> in a
        production-like environment, including{" "}
        <strong>handling API keys securely</strong> — a lesson made more real by
        what happened during Untravel. Overall it deepened my understanding of how
        the frontend, backend, and database connect and depend on each other as
        one complete system, not just separate pieces.
      </>
    ),
    challenges: [
      <>
        The biggest coordination challenge was <strong>merge conflicts</strong>.
        With 5 people in one monorepo, overlapping work on shared files —
        especially the Prisma schema and shared components — caused frequent
        collisions. It pushed us to be more deliberate: clearer task ownership,
        better branching discipline, and communicating before touching shared
        parts of the codebase.
      </>,
      <>
        <strong>Deployment was its own challenge too.</strong> Wiring Vercel,
        Railway, Docker, and Supabase together meant running into
        environment-specific issues that only surfaced in production — debugging
        those taught me a lot about how real deployments actually behave.
      </>,
    ],
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
    overview: (
      <>
        Hireva is a <strong>mobile-first job-search tracker built solo from end
        to end</strong>. Instead of managing applications in a spreadsheet, users
        capture roles, organize them by company and goal, move each one through a
        structured interview pipeline, schedule interviews with phone calendar
        reminders, and track offers — all from their phone. The standout feature:{" "}
        <strong>paste a job posting URL and Hireva auto-fills the application
        details by scraping the page</strong>. It's a complete two-part system — a
        React Native (Expo) mobile app and a TypeScript/Express REST API backed by
        PostgreSQL, deployed on Render via Docker.
      </>
    ),
    whatIDid: [
      <>
        Built the <strong>entire stack solo</strong> — backend API, database
        schema, mobile app, and deployment.
      </>,
      <>
        Designed a <strong>transactional interview pipeline state machine</strong>{" "}
        — applications carry a current stage pointer through 10 stage types (Saved
        → Applied → Screening → ... → Offer/Rejected), with{" "}
        <strong>swipe-to-advance</strong> on mobile preserving full stage history.
      </>,
      <>
        Implemented <strong>JWT auth with silent refresh</strong> — short-lived
        access tokens, httpOnly refresh cookies, and an Axios interceptor that
        queues concurrent 401s during a single in-flight refresh then retries them
        all.
      </>,
      <>
        Integrated <strong>native phone features</strong> — push notifications
        with Android channels for interview reminders, and direct{" "}
        <strong>device calendar integration</strong> so scheduled interviews
        appear on the phone's actual calendar.
      </>,
      <>
        <strong>Dockerized the backend</strong> and set up EAS Build + OTA update
        channels (dev/preview/production) for the mobile app.
      </>,
    ],
    whatILearned: (
      <>
        Building Hireva solo was the first time I{" "}
        <strong>owned every layer of a deployed product</strong> — from database
        schema to mobile gestures — with no one else to fall back on.
        <br />
        <br />
        <strong>Deploying independently was a big milestone.</strong> Wiring Docker
        on Render for the backend and debugging environment-specific issues that
        only appeared in production taught me how real deployments actually behave
        versus local development.
        <br />
        <br />
        <strong>Web scraping was the steepest learning curve.</strong> Many job
        posting sites actively block scrapers, which pushed me to think beyond a
        single approach and build something more resilient. Extracting clean,
        structured data from inconsistent real-world HTML was genuinely hard — and
        humbling.
        <br />
        <br />
        I also learned what it means to{" "}
        <strong>make an app feel native, not just functional</strong>.
        Implementing gesture-based interactions like swipe-to-advance taught me how
        small UX decisions — replacing a sheet action with a single swipe — can
        make a product feel significantly more polished and intentional.
        <br />
        <br />
        Finally, integrating with the phone's native calendar and notifications
        showed me how a mobile app can reach beyond its own screen and into the
        user's actual daily life — which is something web apps just can't do in the
        same way.
      </>
    ),
    challenges: [
      <>
        The hardest technical challenge was the{" "}
        <strong>scraping engine</strong>. Many job posting sites actively block
        scrapers, and getting consistent, structured data out of varied real-world
        HTML required building a <strong>resilient fallback system</strong> — all
        while keeping memory low enough to run on a free-tier server.
      </>,
      <>
        <strong>Navigating mobile development for the first time</strong> as a solo
        developer was also a challenge — learning how gestures, native modules,
        and mobile UX patterns work took real adjustment coming from a web
        background.
      </>,
    ],
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
    overview: (
      <>
        Andy's Restaurant is a{" "}
        <strong>client-built menu and ordering website</strong> for a small food
        business. Customers can browse the full menu and place{" "}
        <strong>bundle orders</strong> — tailored specifically to the client's
        preference for bulk orders over single-item purchases. Orders redirect to
        the business's Facebook page for direct communication, keeping it
        practical for a small operation without needing a payment gateway.
      </>
    ),
    whatIDid: [
      <>
        Led most of the development <strong>solo as my first client project</strong>.
      </>,
      <>
        Used <strong>Google Sheets as the database</strong> via the Google Sheets
        API — using separate tabs as relational-style tables to store menu items,
        bundles, and order data.
      </>,
      <>
        Built the ordering system around a <strong>bundle-only flow</strong>{" "}
        matching the client's business model.
      </>,
      <>
        Structured the site with separate HTML pages per section for organized,
        maintainable code.
      </>,
      <>
        Used Bootstrap for the UI and vanilla JavaScript for all interactivity.
      </>,
    ],
    whatILearned: (
      <>
        This was my <strong>first project built for a real client</strong>, which
        taught me how to translate what a client actually wants into technical
        decisions. I learned to <strong>work creatively within constraints</strong>{" "}
        — using Google Sheets as a makeshift database was unconventional, but it
        worked and it taught me how relational data structures work before I ever
        touched a real database. I also learned the basics of organizing a
        multi-page site cleanly.
      </>
    ),
    challenges: (
      <>
        The biggest challenge was{" "}
        <strong>figuring out how to structure data without knowing how databases
        worked</strong>. Using Google Sheets API as a substitute and making the
        tabs behave like related tables required creative problem-solving.{" "}
        <strong>Communicating with a real client</strong> and translating their
        requirements into actual features was also new territory at the time.
      </>
    ),
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
    overview: (
      <>
        MyWordle is a <strong>personal TypeScript project</strong> — a faithful
        recreation of the Wordle game. Players guess a random five-letter word
        with <strong>color-coded feedback</strong> on correct letters and
        positions. It's purely frontend, using a random word API to generate the
        target word each session.
      </>
    ),
    whatIDid: [
      <>
        Built the entire game <strong>solo as a TypeScript practice project</strong>.
      </>,
      <>
        Integrated a <strong>random word API</strong> to generate a new
        five-letter word each session.
      </>,
      <>
        Built the <strong>letter-checking logic</strong> to evaluate each guess —
        tracking correct letters in the correct position, correct letters in the
        wrong position, and incorrect letters.
      </>,
      <>
        Rendered a full interactive keyboard and letter grid on screen.
      </>,
    ],
    whatILearned: (
      <>
        This project was my <strong>hands-on introduction to TypeScript</strong>.
        Building game logic from scratch — especially the word-checking system —
        helped me think more carefully about{" "}
        <strong>data types, state, and how UI reflects logic underneath</strong>.
      </>
    ),
    challenges: (
      <>
        Styling the board and keyboard to match Wordle's feel was trickier than
        expected. Rendering and{" "}
        <strong>managing the keyboard state across guesses</strong> took work. The{" "}
        <strong>letter-checking logic</strong> itself was also tricky — correctly
        handling cases where a letter appears multiple times in a word required
        careful thinking.
      </>
    ),
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
    overview: (
      <>
        Save It is a <strong>budgeting app prototype designed in Figma</strong>.
        It maps out the <strong>complete user flow</strong> — from login to
        dashboard, adding daily expenses, tracking spending, and allocating
        savings goals. It was one of my first serious attempts at designing a full
        app flow before writing any code.
      </>
    ),
    whatIDid: [
      <>
        Designed the <strong>entire app flow and UI in Figma solo</strong>.
      </>,
      <>
        Mapped out all key screens: login, dashboard, add expense, expense
        tracking, and savings allocation.
      </>,
      <>
        Focused on making the flow feel intuitive from screen to screen.
      </>,
    ],
    whatILearned: (
      <>
        This was my <strong>first time thinking about an app as a complete
        experience</strong> rather than just individual screens. Designing the
        full flow taught me how important it is to plan the user journey before
        building anything. I also learned how to properly use{" "}
        <strong>Figma's auto layout</strong> — it helped me organize layers,
        maintain consistent spacing, and make the design feel more professional
        and structured. Learning to <strong>create and reuse components</strong>{" "}
        was another big unlock, making the design process significantly faster and
        more consistent across screens.
      </>
    ),
    challenges: (
      <>
        <strong>Navigating Figma itself was the biggest hurdle at first</strong>.
        With so many layers it was easy to get lost, and managing them without
        auto layout felt chaotic. Once I understood how auto layout groups and
        spaces elements, everything became much more manageable. Getting
        comfortable with the tool took time before I could focus on the actual
        design.
      </>
    ),
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
    overview: (
      <>
        A <strong>desktop application built with Java and MySQL</strong> for
        managing student records, tailored for a university's enrollment and
        records system. It was a school project focused on building a functional{" "}
        <strong>admin-facing UI</strong> for handling student data.
      </>
    ),
    whatIDid: [
      <>
        Built the application and UI in Java as part of a{" "}
        <strong>team school project</strong>.
      </>,
      <>
        Connected the app to a <strong>MySQL database</strong> for storing and
        retrieving student records.
      </>,
    ],
    whatILearned: (
      <>
        This was my <strong>first time using Java</strong>, which was a steep
        learning curve coming from web technologies. It taught me the fundamentals
        of <strong>object-oriented programming</strong> in a stricter typed
        language, and how desktop applications handle data differently from web
        apps.
      </>
    ),
    challenges: (
      <>
        <strong>Java itself was the biggest challenge</strong> — the syntax,
        structure, and paradigms were very different from what I was used to.
        Getting the UI to work correctly and connect reliably to the MySQL
        database took significant effort as a first-time Java developer.
      </>
    ),
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
