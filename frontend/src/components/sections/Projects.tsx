import SectionLabel from "../ui/SectionLabel";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../../data/projects";

function Projects() {
  return (
    <section id="projects">
      <SectionLabel>Projects</SectionLabel>
      <div>
        {PROJECTS.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
