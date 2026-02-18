import { Mail, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/atoms/AnimatedSection";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <AnimatedSection className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <div className="relative rounded-lg border border-dashed border-primary/30 bg-card px-8 py-10 md:px-14 md:py-12 text-center space-y-5 overflow-hidden">
        {/* Blueprint grid background */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
          }}
        />

        {/* Corner brackets */}
        <div className="absolute left-3 w-4 h-4 border-t border-l border-primary/20" style={{ top: '-4px' }} />
        <div className="absolute right-3 w-4 h-4 border-t border-r border-primary/20" style={{ top: '-4px' }} />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-primary/20" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-primary/20" />

        <p className="relative font-mono text-[10px] uppercase tracking-[0.2em] text-primary/60">
          {"// init_connection()"}
        </p>
        <h2 className="relative font-heading text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
          Got an idea? Let&apos;s architect it.
        </h2>
        <p className="relative text-sm text-muted-foreground max-w-md">
          I&apos;m always open to discussing software architecture, clean code practices, or potential collaborations.
          Whether you&apos;re looking to build something great or just want to connect, I&apos;d love to hear from you.
        </p>
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button asChild size="lg" className="gap-2 font-mono text-xs">
            <a href="mailto:ricardojms1999@gmail.com">
              <Mail className="h-4 w-4" /> send_email()
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2 font-mono text-xs">
            <a href="https://www.linkedin.com/in/ricardo-morataya-sandoval" target="_blank" rel="noopener noreferrer">
              connect() <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
