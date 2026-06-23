import { Link } from "react-router-dom";
import SectionLabel from "../ui/SectionLabel";
import Tag from "../ui/Tag";

// Full About overlay-page: expanded bio + technical skills grid.
const SKILLS: Record<string, string[]> = {
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

// Collapsed about card on Home; clicking routes to the full /about page.
function About() {
  return (
    <section id="about">
      <SectionLabel>About</SectionLabel>
      <Link to="/about" className="about-card">
        <div className="about-card-top">
          <div>
            <p className="about-card-bio">
              <strong>Information Systems student</strong> from TUP–Manila,
              awaiting graduation this August. I build full stack mobile and web
              apps — owning a module end-to-end at EasyCom Japan Philippines Inc.
              and shipping projects of my own, from a solo-built job-tracker
              mobile app to a full-stack store with its own analytics engine.
              Watching something I coded turn into an app on my own phone —
              that's the moment that hooked me.
            </p>
            <br />
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
          <div className="about-expand-hint">
            Read more
            <svg viewBox="0 0 24 24">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default About;
