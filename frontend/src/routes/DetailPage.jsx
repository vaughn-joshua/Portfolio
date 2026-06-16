import { useParams, Link } from "react-router-dom";
import BackButton from "../components/ui/BackButton.jsx";
import Tag from "../components/ui/Tag.jsx";
import { PROJECTS } from "../components/sections/Projects.jsx";

// The internship is a special case reusing this same route (/projects/internship).
// Ported from reference/index.html (INTERNSHIP). whatIDid is real; the
// overview/whatILearned/challenges fields mirror the reference's placeholders.
const INTERNSHIP = {
  slug: "internship",
  title: "Full Stack Mobile Developer Intern",
  subtitle: "EasyCom Japan Philippines Inc. · Feb 2026 – Jun 2026 · 486 hrs",
  image: null,
  liveLink: null,
  githubLink: null,
  tags: [
    "TypeScript",
    "Node.js",
    "Express",
    "TSOA",
    "Prisma",
    "TiDB Cloud",
    "React Native",
    "Expo",
    "Zod",
    "JWT",
    "Socket.io",
    "pdfkit",
    "GCS",
    "ESLint",
  ],
  overview:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.",
  whatIDid: [
    "Owned the Government Benefits module (SSS, PhilHealth, Pag-IBIG, BIR Tax) end-to-end — Prisma schema, TSOA backend services, and Expo React Native screens.",
    "Engineered a 740-line PDF parsing service extracting structured contribution and tax-bracket data from non-columnar government rate-table PDFs, eliminating manual data entry.",
    "Built a schema-driven dynamic form system in React Native with auto-prefill for edit flows and payslip PDF generation.",
    "Implemented a Multer + Google Cloud Storage file upload pipeline for document handling.",
    "Wrote technical documentation for team knowledge-sharing and handover.",
    "Collaborated in a structured corporate dev environment, communicating progress and blockers to supervisors.",
  ],
  whatILearned:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
  challenges:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.",
};

function DetailPage() {
  const { slug } = useParams();

  const isInternship = slug === "internship";
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const data = isInternship ? INTERNSHIP : PROJECTS[idx];

  if (!data) {
    return (
      <div className="overlay-inner">
        <BackButton label="Back" />
        <p>Not found.</p>
      </div>
    );
  }

  // Prev/Next only apply to real projects, not the internship.
  const prev = !isInternship ? PROJECTS[idx - 1] : null;
  const next = !isInternship ? PROJECTS[idx + 1] : null;

  return (
    <div className="overlay-inner">
      <BackButton label={isInternship ? "Back to experience" : "All projects"} />

      {data.image ? (
        <img className="detail-hero" src={data.image} alt={data.title} />
      ) : (
        <div className="detail-hero-placeholder">No screenshot yet</div>
      )}

      <div className="exp-tags" style={{ marginBottom: 10 }}>
        {data.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <h2 className="detail-title">{data.title}</h2>
      <p className="detail-subtitle">{data.subtitle}</p>

      {(data.liveLink || data.githubLink) && (
        <div className="detail-links">
          {data.liveLink && (
            <a
              className="detail-link"
              href={data.liveLink}
              target="_blank"
              rel="noopener"
            >
              Live
              <svg viewBox="0 0 24 24">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          )}
          {data.githubLink && (
            <a
              className="detail-link"
              href={data.githubLink}
              target="_blank"
              rel="noopener"
            >
              GitHub
              <svg viewBox="0 0 24 24">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          )}
        </div>
      )}

      <p className="detail-section-title">Overview</p>
      <p className="detail-text">{data.overview}</p>

      <p className="detail-section-title">What I Did</p>
      <ul className="detail-bullets">
        {data.whatIDid.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      <p className="detail-section-title">What I Learned</p>
      <p className="detail-text">{data.whatILearned}</p>

      <p className="detail-section-title">Challenges</p>
      <p className="detail-text">{data.challenges}</p>

      {(prev || next) && (
        <div className="proj-nav">
          <div>
            {prev && (
              <Link className="proj-nav-btn" to={`/projects/${prev.slug}`}>
                <span className="proj-nav-label">← Previous</span>
                <span className="proj-nav-title">{prev.title}</span>
              </Link>
            )}
          </div>
          <div>
            {next && (
              <Link className="proj-nav-btn next" to={`/projects/${next.slug}`}>
                <span className="proj-nav-label">Next →</span>
                <span className="proj-nav-title">{next.title}</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailPage;
