import { Link } from "react-router-dom";
import Tag from "../ui/Tag.jsx";

// One project row. Clicking routes to its detail page.
function ProjectCard({ project }) {
  const { slug, title, image, desc, tags } = project;

  return (
    <Link to={`/projects/${slug}`} className="project-item">
      {image ? (
        <img className="project-thumb" src={image} alt={title} loading="lazy" />
      ) : (
        <div className="project-thumb-placeholder">{title.slice(0, 6)}</div>
      )}
      <div>
        <span className="proj-title">
          {title}
          <svg viewBox="0 0 24 24">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </span>
        <p className="project-desc">{desc}</p>
        <div className="exp-tags">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
