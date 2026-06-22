import type { ReactNode } from "react";

// A single portfolio project. The internship reuses the same shape (minus the
// fields that only apply to real projects) so DetailPage can render both.
export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  // Screenshot URL, or null when there's no image yet.
  image: string | null;
  liveLink?: string | null;
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
