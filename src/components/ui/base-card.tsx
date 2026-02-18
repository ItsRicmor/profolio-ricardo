import { ReactNode } from "react";

interface BaseCardProps {
  children: ReactNode;
  label: string;
  className?: string;
}

export function BaseCard({ children, label, className = "" }: BaseCardProps) {
  return (
    <div className={`group relative flex flex-col rounded-lg border border-dashed border-primary/20 bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md h-full ${className}`}>
      {/* Component label */}
      <div className="absolute -top-4 left-4 bg-background px-2">
        <span className="font-mono text-[9px] text-primary/50 tracking-wider uppercase">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}
