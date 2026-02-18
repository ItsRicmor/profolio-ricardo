import { skills } from "@/data/skills";

const categoryLabels: Record<string, string> = {
  frontend: "client",
  backend: "server",
  tools: "infra",
  other: "practices",
};

export function TechStackList() {
  const grouped = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <div className="space-y-3">
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="flex items-start gap-3">
          <span className="font-mono text-[10px] text-primary/60 uppercase tracking-wider mt-1 min-w-[60px]">
            {categoryLabels[category] || category}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {items.map((name) => (
              <span
                key={name}
                className="inline-flex items-center rounded border border-border bg-muted/50 px-2 py-0.5 font-mono text-[10px] text-foreground/70"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
