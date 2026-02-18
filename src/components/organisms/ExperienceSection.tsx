import { AnimatedSection } from "@/components/atoms/AnimatedSection";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { ExperienceItem } from "@/components/molecules/ExperienceItem";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <AnimatedSection id="experience" className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <SectionHeading title="Experience" label="// career.timeline()" />
      <div className="max-w-xl">
        {experiences.map((exp, i) => (
          <ExperienceItem key={exp.id} experience={exp} index={i + 1} />
        ))}
      </div>
    </AnimatedSection>
  );
}
