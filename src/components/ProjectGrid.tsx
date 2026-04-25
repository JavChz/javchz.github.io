import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <section className="my-20 animate-fade-up-d1 opacity-0" id="projects">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-accent-purple font-semibold uppercase tracking-widest text-xs mb-2">
          Open Source
        </p>
        <h2 className="font-display text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-white">
          Experiment Projects
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
