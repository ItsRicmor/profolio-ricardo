"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import type { Experience } from "@/types";

interface ExperienceItemProps {
  experience: Experience;
  index: number;
}

export function ExperienceItem({ experience, index }: ExperienceItemProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        "relative pl-12 pb-10 last:pb-0 border-l-0 transition-all duration-600 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
    >
      {/* Node with index */}
      <div className="absolute left-0 top-0 flex items-center justify-center h-6 w-6 rounded-md border border-primary/30 bg-background">
        <span className="font-mono text-[9px] text-primary font-bold">{String(index).padStart(2, '0')}</span>
      </div>

      {/* Vertical line */}
      <div className="absolute left-3 top-6 bottom-0 w-px border-l border-dashed border-primary/20" />
      
      {/* Horizontal connector line */}
      <div className="absolute left-6 top-[11px] w-6 h-px bg-primary/20" />

      <div className="space-y-1.5">
        <div className="flex items-baseline gap-2 flex-wrap">
          <h3 className="font-heading font-semibold text-base">{experience.position}</h3>
          <span className="font-mono text-[10px] text-primary/60">@</span>
          <p className="text-sm text-primary font-medium">{experience.company}</p>
        </div>
        <p className="font-mono text-[10px] text-muted-foreground tracking-wider">
          {experience.startDate} → {experience.endDate}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed pt-0.5">
          {experience.description}
        </p>
      </div>
    </div>
  );
}
