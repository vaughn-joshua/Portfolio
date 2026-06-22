import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Full-screen takeover wrapper for the detail/about/beyond pages.
// Mirrors the reference overlay: fixed full-viewport surface, fade-in on mount,
// scroll reset to top, and Escape-to-close (navigates back).
function Overlay({ children }) {
  const navigate = useNavigate();
  const ref = useRef(null);

  useEffect(() => {
    // Fade in: add .open on the next frame so the transition runs.
    const el = ref.current;
    el.scrollTop = 0;
    const id = requestAnimationFrame(() => el.classList.add("open"));

    // Lock background scroll while the overlay is up.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Escape returns wherever the user came from.
    const onKey = (e) => {
      if (e.key === "Escape") navigate(-1);
    };
    document.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(id);
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [navigate]);

  return (
    <div className="overlay" ref={ref}>
      <div className="overlay-inner">{children}</div>
    </div>
  );
}

export default Overlay;
