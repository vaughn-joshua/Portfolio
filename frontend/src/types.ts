import type { ReactNode } from "react";

// A single portfolio project. The internship reuses the same shape (minus the
// fields that only apply to real projects) so DetailPage can render both.
export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  // Screenshot URL, or null when there's no image yet.
  image: string | null;
  // Optional multi-image gallery (e.g. the internship). When present, the
  // detail page renders these instead of the single `image`.
  images?: string[];
  // Optional demo video as an embeddable iframe URL (YouTube /embed/, Loom
  // /embed/, Google Drive /preview, Vimeo /video/, etc.). When present, the
  // detail page shows a responsive inline player above the screenshot.
  videoEmbed?: string;
  liveLink?: string | null;
  // When true (and there's no liveLink yet), show a non-clickable
  // "Live — Coming Soon" indicator instead of a live button.
  liveComingSoon?: boolean;
  githubLink?: string | null;
  tags: string[];
  // Card blurb on the Projects list (real projects only).
  desc?: string;
  // Rich detail-page copy — JSX so it can carry <strong>, <br/>, etc.
  overview: ReactNode;
  whatIDid: ReactNode[];
  whatILearned: ReactNode;
  // Either a bulleted list or a single rich paragraph.
  challenges: ReactNode[] | ReactNode;
}
