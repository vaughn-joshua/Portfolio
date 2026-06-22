import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import Socials from "./Socials";
import resumeUrl from "../assets/Barit_Resume_Developer.pdf";

// The sticky .left column: identity, action buttons, in-page nav, and socials.
function Sidebar({ active }: { active: string }) {
  return (
    <aside className="left">
      <div>
        <div className="left-top">
          <p className="left-name">
            Vaughn
            <br />
            Joshua
          </p>
          <p className="left-role">Full Stack Developer</p>
          <p className="left-tagline">
            Building end-to-end web and mobile experiences.
          </p>

          <div className="left-actions">
            <a
              className="left-action-btn"
              href={resumeUrl}
              target="_blank"
              rel="noopener"
            >
              <svg viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              View Resume
            </a>
            <Link className="left-action-btn beyond-left-btn" to="/beyond">
              <svg viewBox="0 0 24 24">
                <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
              </svg>
              Beyond the Code
            </Link>
          </div>
        </div>

        <SideNav active={active} />
      </div>

      <Socials />
    </aside>
  );
}

export default Sidebar;
