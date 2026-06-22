import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Education from "../components/sections/Education";

// State carried in via router navigation (e.g. the Beyond page's "The Code" button).
interface HomeLocationState {
  scrollTo?: string;
}

// The landing page: hero + the stacked sections.
// (Hero is full-viewport; the sections render inside App's .right column via <Outlet/>.)
function Home() {
  const location = useLocation();

  // When arriving with { scrollTo } state (e.g. the "The Code" button on the
  // Beyond page), land directly on that work section instead of the hero —
  // jump instantly with no scroll animation so the hero is never shown.
  useEffect(() => {
    const target = (location.state as HomeLocationState | null)?.scrollTo;
    if (!target) return;
    // Wait a frame so the sections are mounted before positioning.
    const id = requestAnimationFrame(() => {
      // "instant" forces no animation even though html has scroll-behavior:smooth.
      document
        .getElementById(target)
        ?.scrollIntoView({ behavior: "instant", block: "start" });
    });
    return () => cancelAnimationFrame(id);
  }, [location.state]);

  return (
    <>
      <About />
      <Experience />
      <Projects />
      <Education />
    </>
  );
}

export default Home;
