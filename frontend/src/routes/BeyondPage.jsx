import BackButton from "../components/ui/BackButton.jsx";
import SectionLabel from "../components/ui/SectionLabel.jsx";
import Tag from "../components/ui/Tag.jsx";

// "Beyond the Code" — soft skills, non-dev experience, for non-technical roles.
// Ported from reference/index.html (#overlay-beyond).
const SOFT_CARDS = [
  {
    icon: "💬",
    title: "Communication",
    text: "I can explain a database schema to a developer and explain the same concept to a client in plain language. Six years of facilitating seminars and leading youth groups built this naturally.",
  },
  {
    icon: "🎯",
    title: "Attention to Detail",
    text: "Professional coding and handling complex government regulatory documents during my internship trained me to catch errors early — and fix them before they become problems.",
  },
  {
    icon: "⚡",
    title: "Fast Learner",
    text: "At my internship I was handed an unfamiliar tech stack and an entire module to own within the first week. I delivered. I'm comfortable being thrown into new tools, systems, and workflows.",
  },
  {
    icon: "🤝",
    title: "Service Mindset",
    text: "Since 2018 I've served as a youth ministry leader and seminar facilitator. Helping people — whether a user, a customer, or a teammate — is something I genuinely enjoy doing.",
  },
];

const TOOLS = [
  "Microsoft Office",
  "Google Workspace",
  "Google Docs / Sheets",
  "Figma",
  "Adobe Photoshop",
  "Video Editing",
  "Social Media Management",
];

function BeyondPage() {
  return (
    <div className="overlay-inner">
      <BackButton label="Back to portfolio" />

      <div className="beyond-hero-block">
        <span className="beyond-role-tag">Beyond the Code</span>
        <p className="beyond-name">Vaughn Joshua B. Barit</p>
        <p className="beyond-bio">
          I'm a <strong>fresh Information Systems graduate</strong> who brings
          more than technical skills to the table. My background in community
          leadership, creative freelance work, and years of people-facing
          service has shaped me into someone who's{" "}
          <strong>
            easy to work with, fast to learn, and genuinely service-oriented
          </strong>
          . I thrive in environments that value clear communication, attention
          to detail, and a positive attitude.
        </p>
      </div>

      <SectionLabel>What I Bring</SectionLabel>
      <div className="soft-cards">
        {SOFT_CARDS.map((c) => (
          <div className="soft-card" key={c.title}>
            <div className="soft-card-icon">{c.icon}</div>
            <p className="soft-card-title">{c.title}</p>
            <p className="soft-card-text">{c.text}</p>
          </div>
        ))}
      </div>

      <SectionLabel>Experience</SectionLabel>
      <div className="exp-item">
        <div className="exp-date">
          2018 –<br />
          Present
        </div>
        <div>
          <p className="exp-title">
            Young Servant Leader & Seminar Facilitator
          </p>
          <p className="exp-company">
            Sta. Clara Catholic Charismatic Community · Youth Ministry
          </p>
          <p className="exp-desc">
            Facilitated the Life in the Spirit Seminar for 6 batches of youth.
            Responsible for leading sessions, managing group dynamics, and
            guiding participants through a structured multi-week program.
          </p>
          <ul className="exp-bullets">
            <li>
              Led and coordinated teams for youth events — sportsfests, outings,
              outreach programs.
            </li>
            <li>
              Mentored younger members, helping them grow in confidence and
              community involvement.
            </li>
            <li>
              Handled group facilitation and communication across diverse
              participants.
            </li>
          </ul>
        </div>
      </div>
      <div className="exp-item">
        <div className="exp-date">
          2023 –<br />
          2024
        </div>
        <div>
          <p className="exp-title">
            Graphic Artist / Video Editor / Social Media Manager
          </p>
          <p className="exp-company">
            Freelance — CJ Foods Group PH, Becarman Startup, Sunbee Co.
          </p>
          <p className="exp-desc">
            Managed client relationships, expectations, and deadlines
            independently across three different clients in different industries.
            Delivered creative outputs on time under shifting requirements.
          </p>
          <div className="exp-tags">
            {[
              "Adobe Photoshop",
              "Video Editing",
              "Social Media",
              "Client Management",
            ].map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </div>

      <SectionLabel>Tools I'm Comfortable With</SectionLabel>
      <div className="skill-tags" style={{ marginBottom: 32 }}>
        {TOOLS.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <SectionLabel>Contact</SectionLabel>
      <p className="contact-body">
        Open to BPO, tech support, customer service, and office roles. Let's
        talk.
      </p>
      <a className="contact-link" href="mailto:dev.vaughnjoshua@gmail.com">
        <svg viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
        dev.vaughnjoshua@gmail.com
      </a>
    </div>
  );
}

export default BeyondPage;
