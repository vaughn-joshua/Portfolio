import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

export interface BurgerItem {
  id: string;
  label: string;
}

// Mobile-only burger menu. Hidden on desktop via CSS (.burger-nav is
// display:none above the mobile breakpoint). On mobile it is the ONLY nav —
// the sticky sidebar/aside content (identity, action buttons, section links,
// socials) all live inside this panel.
//
// Rendered through a portal to <body>. This is essential: position:fixed is
// resolved against the nearest transformed ancestor, and both the Beyond
// takeover (.beyond-screen has a transform) and other wrappers would otherwise
// trap the "fixed" button so it scrolls with content / sits off-screen. The
// portal lifts it out so it's always pinned to the viewport.
function BurgerNav({
  items,
  active,
  onNavigate,
  header,
  footer,
}: {
  items: BurgerItem[];
  active: string;
  onNavigate: (id: string) => void;
  // Rendered above the section links (identity, action buttons, etc.).
  header?: ReactNode;
  // Rendered below the section links (socials, etc.).
  footer?: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  // Lock background scroll while the panel is open so the page behind can't
  // move. Lock both <body> and <html> to cover all browsers.
  useEffect(() => {
    if (!open) return;
    const body = document.body;
    const html = document.documentElement;
    const prevBody = body.style.overflow;
    const prevHtml = html.style.overflow;
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      body.style.overflow = prevBody;
      html.style.overflow = prevHtml;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handlePick = (id: string) => {
    setOpen(false);
    onNavigate(id);
  };

  return createPortal(
    <div className="burger-nav">
      <button
        type="button"
        className={`burger-btn${open ? " open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <div className="burger-backdrop" onClick={() => setOpen(false)} />
      )}

      <nav className={`burger-panel${open ? " open" : ""}`} aria-label="Menu">
        {header && (
          <div className="burger-panel-header" onClick={() => setOpen(false)}>
            {header}
          </div>
        )}

        <ul className="burger-panel-links">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={active === item.id ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handlePick(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {footer && <div className="burger-panel-footer">{footer}</div>}
      </nav>
    </div>,
    document.body,
  );
}

export default BurgerNav;
