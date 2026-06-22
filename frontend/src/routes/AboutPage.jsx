import Overlay from "../components/ui/Overlay.jsx";
import BackButton from "../components/ui/BackButton.jsx";
import SectionLabel from "../components/ui/SectionLabel.jsx";
import Tag from "../components/ui/Tag.jsx";

// Full About overlay-page: expanded bio + technical skills grid.
const SKILLS = {
  Languages: ["TypeScript", "JavaScript", "Java", "C", "C++"],
  Backend: ["Node.js", "Express.js", "TSOA", "Prisma", "REST API", "JWT Auth"],
  "Frontend & Mobile": [
    "React",
    "React Native",
    "Expo",
    "Tailwind",
    "Bootstrap",
    "HTML/CSS",
  ],
  "Databases & Tools": [
    "PostgreSQL",
    "MySQL",
    "TiDB Cloud",
    "Docker",
    "Git",
    "GCP",
    "Figma",
    "Lint",
  ],
};

function AboutPage() {
  return (
    <Overlay>
      <BackButton label="Back" />
      <h2 className="detail-title">About Me</h2>

      <div className="about-overlay-bio">
        <p style={{ marginBottom: 12 }}>
          I'm an <strong>Information Systems student</strong> from Technological
          University of the Philippines–Manila awaiting my graduation this
          August, with hands-on professional experience{" "}
          <strong>building full stack mobile and web applications</strong>.
        </p>
        <p style={{ marginBottom: 12 }}>
          At <strong>EasyCom Japan Philippines Inc.</strong>, I owned the{" "}
          <strong>Government Benefits module end-to-end</strong> — from
          designing the Prisma schema to shipping the Expo React Native screens
          — inside a real corporate dev team. I built a{" "}
          <strong>PDF parsing service</strong> to automate extracting data from
          government benefit documents, designed{" "}
          <strong>dynamic form systems</strong>, and wrote handover
          documentation, largely on my own initiative.
        </p>
        <p style={{ marginBottom: 12 }}>
          This experience taught me that{" "}
          <strong>speed without understanding is a liability</strong>. I use AI
          tools to move faster, but I make sure I can still explain and maintain
          everything I ship — <strong>code only matters if the next developer
          can read it</strong>. I also learned to study a system's architecture
          and existing conventions before writing anything, and to ask questions
          early instead of guessing.
        </p>
        <p>
          Watching something I coded turn into an app on my own phone — that's
          the moment that hooked me.
        </p>
      </div>

      <SectionLabel>Technical Skills</SectionLabel>
      <div className="skills-grid">
        {Object.entries(SKILLS).map(([group, tags]) => (
          <div key={group}>
            <p className="skill-group-label">{group}</p>
            <div className="skill-tags">
              {tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Overlay>
  );
}

export default AboutPage;
