import SectionLabel from "../ui/SectionLabel.jsx";

function Contact() {
  return (
    <section id="contact">
      <SectionLabel>Contact</SectionLabel>
      <p className="contact-body">
        Whether you're looking for a developer to join your team or someone who
        can hit the ground running — I'd love to hear from you.
      </p>
      <a className="contact-link" href="mailto:dev.vaughnjoshua@gmail.com">
        <svg viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
        dev.vaughnjoshua@gmail.com
      </a>
    </section>
  );
}

export default Contact;
