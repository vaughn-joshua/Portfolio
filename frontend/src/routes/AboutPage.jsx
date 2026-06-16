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
  ],
};

function AboutPage() {
  return (
    <div className="overlay-inner">
      <BackButton label="Back" />
      <h2 className="detail-title">About Me</h2>

      <div className="about-overlay-bio">
        <p style={{ marginBottom: 12 }}>
          I'm an <strong>Information Systems graduate</strong> from
          Technological University of the Philippines–Manila with hands-on
          professional experience building full stack mobile and web
          applications.
        </p>
        <p style={{ marginBottom: 12 }}>
          During my internship at{" "}
          <strong>EasyCom Japan Philippines Inc.</strong>, I was handed full
          ownership of the Government Benefits module — from designing the Prisma
          schema to shipping the Expo React Native screens — within a real
          corporate dev team. I engineered a 740-line PDF parsing service, built
          dynamic form systems, and wrote documentation for handover, all with
          minimal supervision.
        </p>
        <p>
          I write code that's <strong>maintainable</strong>, not just
          functional. I'm comfortable going solo from idea to production, and
          equally comfortable in a team — communicating progress, flagging
          blockers, and handing off clean deliverables.
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
    </div>
  );
}

export default AboutPage;
