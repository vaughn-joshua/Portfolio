import { Link } from "react-router-dom";

// Full-viewport intro. "View Work" scrolls to the sections; "Beyond" routes away.
function Hero() {
  const scrollToWork = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero">
      <p className="hero-eyebrow">Based in the Philippines</p>
      <h1 className="hero-name">
        Vaughn
        <br />
        Joshua
      </h1>
      <p className="hero-role">Full Stack Developer</p>
      <p className="hero-tagline">
        I build clean, end-to-end web and mobile experiences — from database
        schema to the screen in your hand.
      </p>

      <div className="hero-btns">
        <button className="btn-primary" onClick={scrollToWork}>
          <svg viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" />
          </svg>
          View Work
        </button>
        <Link className="btn-secondary" to="/beyond">
          <svg viewBox="0 0 24 24">
            <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
            <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
          </svg>
          Beyond the Code
        </Link>
      </div>

      <div className="hero-scroll" onClick={scrollToWork}>
        <svg viewBox="0 0 24 24">
          <polyline points="6 9 12 15 18 9" />
        </svg>
        scroll
      </div>
    </section>
  );
}

export default Hero;
