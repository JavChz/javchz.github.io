import type { Project } from "../types/project";

/** Mapping from tag name → tailwind colour classes */
const tagStyles: Record<string, string> = {
  React: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  TypeScript: "bg-blue-500/[0.08] text-blue-300 border-blue-500/15",
  Vite: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Tailwind: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
  Zustand: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  JavaScript: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
  CSS: "bg-pink-400/10 text-pink-400 border-pink-400/20",
};

const fallbackTag = "bg-white/5 text-gray-400 border-white/10";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="group flex flex-col bg-bg-card backdrop-blur-[20px] border border-border-subtle rounded-2xl overflow-hidden transition-all duration-400 hover:bg-bg-card-hover hover:border-border-hover hover:shadow-[0_0_40px_rgba(167,139,250,0.08)] hover:-translate-y-1">
      {/* Image */}
      <div className="relative overflow-hidden h-48 md:h-48 lg:h-48">
        <img
          src={project.image}
          alt={`${project.name} app`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-base/80 to-transparent" />
        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-green-500/15 text-accent-green text-[0.6875rem] font-semibold px-2 px-3 py-1.5 rounded-full border border-green-500/25">
          <span className="w-1.5 h-1.5 bg-accent-green rounded-full animate-pulse-dot" />
          Live
        </div>
      </div>

      {/* Body */}
      <div className="px-8 py-8 flex-1 flex flex-col">
        {/* Heading */}
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-accent-purple text-3xl">
            {project.icon}
          </span>
          <h3 className="font-display text-xl font-bold">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-300 group-hover:text-accent-purple hover:underline decoration-accent-purple decoration-2 underline-offset-4"
            >
              {project.name}
            </a>
          </h3>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View Source Code"
            className="ml-auto w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-text-muted hover:text-white transition-all duration-300"
          >
            <span className="material-symbols-outlined text-[1.125rem]">code</span>
          </a>
        </div>

        {/* Description */}
        <p className="text-[0.875rem] text-text-muted leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-medium px-4 py-1.5 rounded-full border ${tagStyles[tag] ?? fallbackTag}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action links */}
        <div className="mt-auto pt-6 border-t border-white/5">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex w-full items-center justify-center gap-2 px-6 py-2.5 bg-white text-bg-base rounded-xl text-[0.875rem] font-bold hover:bg-gray-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Visit App
            <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover/btn:translate-x-1">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
