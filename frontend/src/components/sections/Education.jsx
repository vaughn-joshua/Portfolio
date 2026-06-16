import SectionLabel from "../ui/SectionLabel.jsx";

// Education & awards. Inline content — add remaining awards from the reference.
function Education() {
  return (
    <section id="education">
      <SectionLabel>Education & Awards</SectionLabel>
      <div className="edu-item">
        <p className="edu-school">
          Technological University of the Philippines–Manila · 2022 – 2026
        </p>
        <p className="edu-degree">Bachelor of Science in Information Systems</p>
        <div className="edu-award">
          <span className="edu-award-icon">◆</span>
          <span>
            <strong>DOST JLSS RA 7687 Scholar</strong> (2024–2026) — government
            scholarship for outstanding academic potential.
          </span>
        </div>
        <div className="edu-award">
          <span className="edu-award-icon">◆</span>
          <span>
            <strong>Consistent Dean's Lister</strong> — 1st through 4th Year, GPA
            1.75 and above every semester.
          </span>
        </div>
        <div className="edu-award">
          <span className="edu-award-icon">◆</span>
          <span>
            <strong>Technolympics 2024 Champion</strong> — Tech Guild,
            TUP–Manila. 2nd-year competing against senior teams.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Education;
