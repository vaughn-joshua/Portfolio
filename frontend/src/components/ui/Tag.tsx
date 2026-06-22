import type { ReactNode } from "react";

// Pill used for tech tags and skills.
function Tag({ children }: { children: ReactNode }) {
  return <span className="tag">{children}</span>;
}

export default Tag;
