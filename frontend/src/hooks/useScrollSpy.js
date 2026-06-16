import { useEffect, useState } from "react";

// Watches the given section ids and returns the one currently in view.
// Used by Home to highlight the active SideNav link.
// Usage: const active = useScrollSpy(["about", "experience", "projects"]);
export function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
