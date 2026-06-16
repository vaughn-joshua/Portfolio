// In-page section nav. Anchor links jump to sections on Home.
// `active` (the currently-visible section id) is passed in from useScrollSpy on Home.
const ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function SideNav({ active }) {
  return (
    <nav aria-label="Page sections">
      <ul className="sidenav">
        {ITEMS.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={active === item.id ? "active" : ""}
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
