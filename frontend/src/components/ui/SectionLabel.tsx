import type { ReactNode } from "react";

// Small uppercase heading above each section.
function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="section-label">{children}</p>;
}

export default SectionLabel;
