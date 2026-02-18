import { AnimatedSection } from "@/components/atoms/AnimatedSection";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <SectionHeading title="Projects" label="// modules.render()" />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </AnimatedSection>
  );
}
