import About from "../components/sections/About.jsx";
import Experience from "../components/sections/Experience.jsx";
import Projects from "../components/sections/Projects.jsx";
import Education from "../components/sections/Education.jsx";

// The landing page: hero + the stacked sections.
// (Hero is full-viewport; the sections render inside App's .right column via <Outlet/>.)
function Home() {
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
