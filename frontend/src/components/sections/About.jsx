import { Link } from "react-router-dom";
import SectionLabel from "../ui/SectionLabel.jsx";

// Collapsed about card on Home; clicking routes to the full /about page.
function About() {
  return (
    <section id="about">
      <SectionLabel>About</SectionLabel>
      <Link to="/about" className="about-card">
        <div className="about-card-top">
          <p className="about-card-bio">
            <strong>Information Systems graduate</strong> from TUP–Manila. I
            build full stack mobile and web apps — most recently owning an entire
            payroll module end-to-end at EasyCom Japan Philippines Inc. I write
            code that's maintainable, communicate clearly, and ship on time.
          </p>
          <div className="about-expand-hint">
            Read more
            <svg viewBox="0 0 24 24">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default About;
