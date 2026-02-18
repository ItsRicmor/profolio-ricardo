import { AnimatedSection } from "@/components/atoms/AnimatedSection";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { TechStackList } from "@/components/molecules/TechStackList";

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="relative mx-auto max-w-4xl px-4 py-16 md:py-24">
      <SectionHeading title="About Me" label="// system.overview()" />
      <div className="space-y-6">
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base max-w-2xl">
          Full-Stack Developer with 6+ years of experience designing, developing, and maintaining
          scalable web applications across healthcare, compliance-driven platforms, and gamification
          for online casinos. Proficient in modern JavaScript frameworks (React, TypeScript, NestJS)
          and backend technologies (Node.js, Django), with a strong focus on{" "}
          <span className="text-foreground font-medium border-b border-dashed border-primary/30">clean architecture</span>,
          maintainable code, and performance optimization. Based in Heredia, Costa Rica.
        </p>

        {/* Architecture principle boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
          {[
            { label: "Scalability", icon: "↗" },
            { label: "Clean Code", icon: "◇" },
            { label: "Performance", icon: "⚡" },
            { label: "Testing", icon: "✓" },
          ].map((p) => (
            <div key={p.label} className="flex items-center gap-2 rounded-md border border-dashed border-primary/20 px-3 py-2">
              <span className="text-primary text-sm">{p.icon}</span>
              <span className="font-mono text-[10px] text-muted-foreground">{p.label}</span>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/60 mb-4">
            {"// dependencies"}
          </p>
          <TechStackList />
        </div>
      </div>
    </AnimatedSection>
  );
}
