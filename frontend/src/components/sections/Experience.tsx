import { Link } from "react-router-dom";
import SectionLabel from "../ui/SectionLabel";
import Tag from "../ui/Tag";

// Professional experience. The internship detail reuses the /projects/:slug route.
function Experience() {
  return (
    <section id="experience">
      <SectionLabel>Experience</SectionLabel>
      <Link to="/projects/internship" className="exp-item clickable">
        <div className="exp-date">
          Feb – Jun
          <br />
          2026
        </div>
        <div>
          <p className="exp-title">
            Full Stack Mobile Developer Intern
            <svg viewBox="0 0 24 24">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </p>
          <p className="exp-company">EasyCom Japan Philippines Inc. · 486 hrs</p>
          <p className="exp-desc">
            Owned the Government Benefits module (SSS, PhilHealth, Pag-IBIG, BIR
            Tax) end-to-end — Prisma schema, TSOA backend, and Expo React Native
            screens.
          </p>
          <div className="exp-tags">
            {[
              "TypeScript",
              "Node.js",
              "React Native",
              "Expo",
              "Prisma",
              "TiDB Cloud",
              "TSOA",
              "pdfkit",
            ].map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </Link>
    </section>
  );
}

export default Experience;
