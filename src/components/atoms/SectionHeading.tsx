interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
}

export function SectionHeading({ title, subtitle, label }: SectionHeadingProps) {
  return (
    <div className="mb-8 md:mb-12">
      {label && (
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary/50 mb-2">
          {label}
        </p>
      )}
      <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-muted-foreground text-sm md:text-base">
          {subtitle}
        </p>
      )}
      <div className="mt-3 flex items-center gap-1.5">
        <div className="h-px w-8 bg-primary/40" />
        <div className="h-1 w-1 rounded-full bg-primary/60" />
        <div className="h-px w-3 bg-primary/20" />
      </div>
    </div>
  );
}
