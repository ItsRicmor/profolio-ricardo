import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Play, Github } from "lucide-react";
import { BaseCard } from "@/components/ui/base-card";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <BaseCard label="<Component />">

      {project.image && (
        <div className="overflow-hidden rounded border border-border mb-3 relative h-36">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="space-y-3 pt-1 flex-1">
        <h3 className="font-heading text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded border border-border bg-muted/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {(project.playUrl || project.demoUrl || project.githubUrl) && (
        <div className="mt-4 pt-4 border-t border-dashed border-border flex items-center gap-3">
          {project.playUrl && (
            <Link
              href={project.playUrl}
              className="inline-flex items-center gap-1.5 font-mono text-[11px] text-primary hover:text-primary/80 transition-colors"
            >
              <Play className="h-3 w-3" /> play_now
            </Link>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="h-3 w-3" /> landing_page
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] text-primary hover:text-primary/80 transition-colors"
            >
              <Github className="h-3 w-3" /> source_code
            </a>
          )}
        </div>
      )}
    </BaseCard>
  );
}
