import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Hero from "./routes/HeroPage";
import { useScrollSpy } from "./hooks/useScrollSpy";

const SECTION_IDS = ["about", "experience", "projects", "education"];

// Layout shell: the full-viewport Hero sits on top; below it the sticky Sidebar
// (.left) stays put while routed pages swap into the scrolling .right column.
function App() {
  // Highlights the in-view section in the side nav (only resolves on Home,
  // where the sections exist; harmless elsewhere).
  const active = useScrollSpy(SECTION_IDS);

  return (
    <div className="app-container">
      <Hero />

      <div id="main-layout">
        <Sidebar active={active} />
        <main className="right">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
