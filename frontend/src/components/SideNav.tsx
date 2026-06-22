import type { MouseEvent } from "react";

// In-page section nav. Anchor links jump to sections on Home.
// `active` (the currently-visible section id) is passed in from useScrollSpy on Home.
const ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

function SideNav({ active }: { active: string }) {
  // Smooth-scroll explicitly (global CSS smooth scroll was removed so that
  // back-navigation restoration doesn't animate from the top).
  const scrollTo = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav aria-label="Page sections">
      <ul className="sidenav">
        {ITEMS.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={active === item.id ? "active" : ""}
              onClick={(e) => scrollTo(e, item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideNav;
