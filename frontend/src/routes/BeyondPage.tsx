import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import SectionLabel from "../components/ui/SectionLabel";
import Tag from "../components/ui/Tag";
import Socials from "../components/Socials";

// "Beyond the Code" — soft skills, non-dev experience, for non-technical roles.
// Mirrors the Home/"My Work" sticky layout, but with the sticky panel on the
// RIGHT and the scrolling content on the LEFT (see #beyond-layout in index.css).
interface SoftCard {
  icon: string;
  title: string;
  text: ReactNode;
}

const SOFT_CARDS: SoftCard[] = [
  {
    icon: "💬",
    title: "Communication",
    text: "I can explain a database schema to a developer and explain the same concept to a client in plain language. Six years of facilitating seminars and leading youth groups built this naturally. In my community I regularly interact with all kinds of people — professionals, youth, and elders — each with different personalities, and I've learned to adjust how I communicate to connect with each of them.",
  },
  {
    icon: "🎯",
    title: "Attention to Detail",
    text: "Professional coding and handling complex government regulatory documents during my internship trained me to catch errors early — and fix them before they become problems.",
  },
  {
    icon: "⚡",
    title: "Fast Learner",
    text: "At my internship I was handed an unfamiliar tech stack and an entire module to own within the first week. I delivered. As a fresh grad I've also taught myself plenty on my own — different programming languages plus creative and office tools like video editing, Photoshop, and Excel. I'm comfortable being thrown into new tools, systems, and workflows.",
  },
  {
    icon: "🤝",
    title: "Service Mindset",
    text: "Since 2018 I've served as a youth ministry leader and seminar facilitator. Helping people — whether a user, a customer, or a teammate — is something I genuinely enjoy doing.",
  },
];

const TOOLS = [
  "Microsoft Office",
  "Google Workspace",
  "Google Docs / Sheets",
  "Figma",
  "Adobe Photoshop",
  "Video Editing",
  "Social Media Management",
];

const NAV_ITEMS = [
  { id: "beyond-about", label: "About" },
  { id: "beyond-bring", label: "What I Bring" },
  { id: "beyond-experience", label: "Notable Experience" },
];

function BeyondPage() {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string>(NAV_ITEMS[0].id);

  useEffect(() => {
    // Slide + fade in: add .open on the next frame so the transition runs.
    const el = ref.current;
    if (!el) return;
    el.scrollTop = 0;
    const id = requestAnimationFrame(() => el.classList.add("open"));

    // Lock background scroll while the takeover is up.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Scroll-spy scoped to this screen (the fixed container is the scroll root,
    // not the viewport) so the right-nav highlights the in-view section.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { root: el, rootMargin: "-30% 0px -60% 0px" },
    );
    NAV_ITEMS.map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node !== null)
      .forEach((node) => observer.observe(node));

    // Escape returns wherever the user came from.
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") navigate(-1);
    };
    document.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(id);
      observer.disconnect();
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [navigate]);

  const scrollTo = (sectionId: string) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Slide the screen back out to the right, then navigate to the work area.
  const goToCode = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = ref.current;
    if (!el) return;
    el.classList.remove("open");
    let navigated = false;
    const done = () => {
      if (navigated) return;
      navigated = true;
      navigate("/", { state: { scrollTo: "about" } });
    };
    el.addEventListener("transitionend", done, { once: true });
    // Fallback in case transitionend doesn't fire (e.g. reduced motion).
    setTimeout(done, 500);
  };

  return (
    <div className="beyond-screen" ref={ref}>
      <div id="beyond-layout">
        {/* Scrolling content — LEFT */}
        <main className="beyond-main">
          <section id="beyond-about">
            <SectionLabel>About</SectionLabel>
            <div className="beyond-hero-block">
              <p className="beyond-bio">
                I'm a <strong>fresh Information Systems graduate</strong> who
                brings more than technical skills to the table. My background in
                community leadership, creative freelance work, and years of
                people-facing service has shaped me into someone who's{" "}
                <strong>
                  easy to work with, fast to learn, and genuinely
                  service-oriented
                </strong>
                . I thrive in environments that value clear communication,
                attention to detail, and a positive attitude.
              </p>

              <p className="beyond-tools-label">Tools I'm Comfortable With</p>
              <div className="skill-tags beyond-tools">
                {TOOLS.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </section>

          <section id="beyond-bring">
            <SectionLabel>What I Bring</SectionLabel>
            <div className="soft-cards">
              {SOFT_CARDS.map((c) => (
                <div className="soft-card" key={c.title}>
                  <div className="soft-card-icon">{c.icon}</div>
                  <p className="soft-card-title">{c.title}</p>
                  <p className="soft-card-text">{c.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="beyond-experience">
            <SectionLabel>Notable Experience</SectionLabel>
            <div className="exp-item">
              <div className="exp-date">
                2023 –<br />
                2024
              </div>
              <div>
                <p className="exp-title">
                  Graphic Artist / Video Editor / Social Media Manager
                </p>
                <p className="exp-company">
                  Freelance — CJ Foods Group PH, Becarman Startup, Sunbee Co.
                </p>
                <p className="exp-desc">
                  Managed client relationships, expectations, and deadlines
                  independently across three different clients in different
                  industries. Delivered creative outputs on time under shifting
                  requirements.
                </p>
                <ul className="exp-bullets">
                  <li>
                    At Becarman, did <strong>cold outreach</strong> — calling
                    local businesses to pitch and encourage them to join the app
                    we were building.
                  </li>
                </ul>
                <div className="exp-tags">
                  {[
                    "Adobe Photoshop",
                    "Video Editing",
                    "Social Media",
                    "Client Management",
                    "Cold Outreach",
                  ].map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </div>
            <div className="exp-item">
              <div className="exp-date">
                2018 –<br />
                Present
              </div>
              <div>
                <p className="exp-title">
                  Young Servant Leader & Seminar Facilitator
                </p>
                <p className="exp-company">
                  Sta. Clara Catholic Charismatic Community · Youth Ministry
                </p>
                <p className="exp-desc">
                  Facilitated the Life in the Spirit Seminar for 6 batches of
                  youth. Responsible for leading sessions, managing group
                  dynamics, and guiding participants through a structured
                  multi-week program.
                </p>
                <ul className="exp-bullets">
                  <li>
                    Led and coordinated teams for youth events — sportsfests,
                    outings, outreach programs.
                  </li>
                  <li>
                    Mentored younger members, helping them grow in confidence
                    and community involvement.
                  </li>
                  <li>
                    Handled group facilitation and communication across diverse
                    participants.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        {/* Sticky identity / nav / tools / contact panel — RIGHT */}
        <aside className="beyond-aside">
          <div className="beyond-aside-top">
            <span className="beyond-role-tag">Beyond the Code</span>
            <p className="beyond-name">
              Vaughn Joshua
              <br />
              B. Barit
            </p>
            <p className="beyond-aside-tagline">
              More than technical skills — easy to work with, fast to learn,
              service-oriented.
            </p>

            <Link
              className="left-action-btn beyond-left-btn"
              to="/"
              state={{ scrollTo: "about" }}
              onClick={goToCode}
            >
              <svg viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" />
              </svg>
              The Code
            </Link>

            <nav aria-label="Beyond sections">
              <ul className="sidenav">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={active === item.id ? "active" : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(item.id);
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="beyond-aside-contact">
            <Socials />
          </div>
        </aside>
      </div>
    </div>
  );
}

export default BeyondPage;
