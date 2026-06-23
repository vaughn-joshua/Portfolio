import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useParams, Link } from "react-router-dom";
import Overlay from "../components/ui/Overlay";
import BackButton from "../components/ui/BackButton";
import Lightbox from "../components/ui/Lightbox";
import Tag from "../components/ui/Tag";
import { PROJECTS } from "../data/projects";
import type { Project } from "../types";
import intern1 from "../assets/intern1.jpg";
import intern2 from "../assets/intern2.jpg";
import intern3 from "../assets/intern3.jpg";

// The internship is a special case reusing this same route (/projects/internship).
// Ported from reference/index.html (INTERNSHIP). whatIDid is real; the
// overview/whatILearned/challenges fields mirror the reference's placeholders.
const INTERNSHIP: Project = {
  slug: "internship",
  title: "Full Stack Mobile Developer Intern",
  subtitle: "EasyCom Japan Philippines Inc. · Feb 2026 – Jun 2026 · 486 hrs",
  image: null,
  // intern2 is the main shot; the others follow as thumbnails.
  images: [intern2, intern1, intern3],
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
  overview: (
    <>
      During my internship at <strong>EasyCom Japan Philippines Inc.</strong>, a{" "}
      <strong>Japanese company based in the Philippines</strong>, I worked on{" "}
      <strong>
        migrating a legacy, web-based HR system into a fully native mobile app
      </strong>
      , built with Expo/React Native and backed by a Prisma data layer. The
      system handled core HR functions for company staff — I personally owned
      two major pieces of it: <strong>payroll processing</strong> and{" "}
      <strong>government benefits management</strong>, each rebuilt from the
      ground up for mobile so employees could handle HR tasks from their phones
      instead of being tied to a desktop.
    </>
  ),
  whatIDid: [
    <>
      <strong>Owned the Government Benefits module</strong> (SSS, PhilHealth,
      Pag-IBIG, BIR Tax) <strong>end-to-end</strong> — Prisma schema, TSOA
      backend services, and Expo React Native screens.
    </>,
    <>
      Engineered a <strong>740-line PDF parsing service</strong> extracting
      structured contribution and tax-bracket data from{" "}
      <strong>non-columnar government rate-table PDFs</strong>, eliminating
      manual data entry.
    </>,
    <>
      Built a <strong>schema-driven dynamic form system</strong> in React Native
      with auto-prefill for edit flows and{" "}
      <strong>payslip PDF generation</strong>.
    </>,
    <>
      Implemented a <strong>Multer + Google Cloud Storage</strong> file upload
      pipeline for document handling.
    </>,
    <>
      Wrote <strong>technical documentation</strong> for team knowledge-sharing
      and handover.
    </>,
    <>
      Collaborated in a structured corporate dev environment, communicating
      progress and blockers to supervisors.
    </>,
  ],
  whatILearned: (
    <>
      Before the internship, I’d been planning to learn React Native on my own —
      by the end of it, <strong>I’d shipped my own app built with it</strong>.
      Working on a live system also taught me{" "}
      <strong>how much a client’s time is worth</strong>, which pushed me to
      write <strong>code that’s maintainable for future developers</strong>{" "}
      (including future me), and to communicate clearly with the team so we were
      aligned on the approach before diving into development.
    </>
  ),
  challenges: [
    <>
      <strong>Understanding the legacy system</strong> — the first hurdle was
      getting up to speed on a system I didn’t build, and understanding how my
      lead developer wanted the migration approached before I could contribute
      meaningfully.
    </>,
    <>
      <strong>Reconciling new features with legacy logic</strong> — new feature
      requirements didn’t always map cleanly onto the legacy system’s existing
      logic, so I couldn’t just port the old code over. Parts of it had to be
      rethought to support what the new version actually needed to do.
    </>,
    <>
      <strong>Redundant forms across screens</strong> — each screen originally
      needed its own hardcoded form, leading to a lot of repeated logic. I
      solved this by <strong>building a dynamic form renderer</strong> that
      generated the right fields and validation rules from a single
      configuration, instead of duplicating form logic screen by screen.
    </>,
  ],
};

function DetailPage() {
  const { slug } = useParams<{ slug: string }>();
  // Index of the image open in the lightbox, or null when closed.
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  // Demo video stays a click-to-play placeholder until activated (also avoids
  // loading the heavy YouTube embed until the user asks for it).
  const [videoPlaying, setVideoPlaying] = useState(false);

  // Escape closes the video overlay (capture + stopImmediatePropagation so the
  // parent Overlay's Escape handler doesn't also navigate the route away).
  useEffect(() => {
    if (!videoPlaying) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopImmediatePropagation();
        setVideoPlaying(false);
      }
    };
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [videoPlaying]);

  const isInternship = slug === "internship";
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const data: Project | undefined = isInternship ? INTERNSHIP : PROJECTS[idx];

  if (!data) {
    return (
      <Overlay>
        <BackButton label="Back" />
        <p>Not found.</p>
      </Overlay>
    );
  }

  // Prev/Next only apply to real projects, not the internship.
  const prev = !isInternship ? PROJECTS[idx - 1] : null;
  const next = !isInternship ? PROJECTS[idx + 1] : null;

  // Normalize to a single image set so every detail page gets the same
  // click-to-zoom gallery: a multi-image `images` array wins, otherwise the
  // single `image` becomes a one-element set.
  const gallery = data.images?.length
    ? data.images
    : data.image
      ? [data.image]
      : [];

  return (
    <Overlay>
      <BackButton
        label={isInternship ? "Back to experience" : "All projects"}
      />

      {data.videoEmbed && (
        <button
          type="button"
          className="detail-video-poster"
          onClick={() => setVideoPlaying(true)}
          aria-label="Play demo video"
        >
          <span className="detail-video-play">
            <svg viewBox="0 0 24 24">
              <polygon points="6 4 20 12 6 20 6 4" />
            </svg>
          </span>
          <span className="detail-video-label">Click to see demo</span>
        </button>
      )}

      {data.videoEmbed &&
        videoPlaying &&
        createPortal(
          <div
            className="video-overlay"
            role="dialog"
            aria-modal="true"
            onClick={() => setVideoPlaying(false)}
          >
            <button
              type="button"
              className="video-overlay-close"
              aria-label="Close"
              onClick={() => setVideoPlaying(false)}
            >
              <svg viewBox="0 0 24 24">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
            <div
              className="video-overlay-frame"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`${data.videoEmbed}${
                  data.videoEmbed.includes("?") ? "&" : "?"
                }autoplay=1`}
                title={`${data.title} demo`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
          </div>,
          document.body,
        )}

      {gallery.length > 0 ? (
        <button
          type="button"
          className="detail-gallery-main"
          onClick={() => setLightboxIdx(0)}
          aria-label="View image"
        >
          <img src={gallery[0]} alt={`${data.title} — 1`} />
        </button>
      ) : (
        !data.videoEmbed && (
          <div className="detail-hero-placeholder">No screenshot yet</div>
        )
      )}

      {gallery.length > 0 && (
        <Lightbox
          images={gallery}
          index={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
          onIndexChange={setLightboxIdx}
          alt={data.title}
        />
      )}

      <div className="exp-tags" style={{ marginBottom: 10 }}>
        {data.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <h2 className="detail-title">{data.title}</h2>
      <p className="detail-subtitle">{data.subtitle}</p>

      {(data.liveLink || data.liveComingSoon || data.githubLink) && (
        <div className="detail-links">
          {data.liveLink ? (
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
          ) : (
            data.liveComingSoon && (
              <span className="detail-link detail-link-soon" aria-disabled="true">
                Live — Coming Soon
              </span>
            )
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
      {Array.isArray(data.challenges) ? (
        <ul className="detail-bullets">
          {data.challenges.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      ) : (
        <p className="detail-text">{data.challenges}</p>
      )}

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
    </Overlay>
  );
}

export default DetailPage;
