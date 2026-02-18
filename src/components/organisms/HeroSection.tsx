import Image from "next/image";
import heroImage from "@/assets/hero-banner.jpg";
import { SocialLinkIcon } from "@/components/atoms/SocialLinkIcon";
import { socialLinks } from "@/data/social-links";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-end md:items-center overflow-hidden">
      {/* Banner background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Ricardo Morataya"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background from-10% via-background/60 via-40% to-transparent md:from-background md:from-5% md:via-background/80 md:via-45% md:to-background/40" />
      </div>

      {/* Blueprint grid overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Decorative architecture nodes */}
      <div className="absolute top-24 right-8 md:right-16 z-[2] hidden md:block">
        <svg width="200" height="160" viewBox="0 0 200 160" className="text-primary/15">
          {/* Nodes */}
          <rect x="0" y="0" width="56" height="32" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
          <text x="28" y="20" textAnchor="middle" fill="currentColor" className="text-[8px] font-mono">Frontend</text>
          
          <rect x="140" y="0" width="56" height="32" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
          <text x="168" y="20" textAnchor="middle" fill="currentColor" className="text-[8px] font-mono">Backend</text>
          
          <rect x="70" y="64" width="56" height="32" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <text x="98" y="84" textAnchor="middle" fill="currentColor" className="text-[8px] font-mono">API Layer</text>
          
          <rect x="0" y="128" width="56" height="32" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
          <text x="28" y="148" textAnchor="middle" fill="currentColor" className="text-[8px] font-mono">Database</text>
          
          <rect x="140" y="128" width="56" height="32" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
          <text x="168" y="148" textAnchor="middle" fill="currentColor" className="text-[8px] font-mono">Services</text>
          
          {/* Connection lines */}
          <line x1="28" y1="32" x2="84" y2="64" stroke="currentColor" strokeWidth="1" />
          <line x1="168" y1="32" x2="112" y2="64" stroke="currentColor" strokeWidth="1" />
          <line x1="84" y1="96" x2="28" y2="128" stroke="currentColor" strokeWidth="1" />
          <line x1="112" y1="96" x2="168" y2="128" stroke="currentColor" strokeWidth="1" />
          
          {/* Node dots at connection points */}
          <circle cx="28" cy="32" r="2.5" fill="currentColor" />
          <circle cx="168" cy="32" r="2.5" fill="currentColor" />
          <circle cx="84" cy="64" r="2.5" fill="currentColor" />
          <circle cx="112" cy="64" r="2.5" fill="currentColor" />
          <circle cx="84" cy="96" r="2.5" fill="currentColor" />
          <circle cx="112" cy="96" r="2.5" fill="currentColor" />
          <circle cx="28" cy="128" r="2.5" fill="currentColor" />
          <circle cx="168" cy="128" r="2.5" fill="currentColor" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pb-12 pt-24 md:py-32">
        <div className="animate-fade-in space-y-4 md:bg-background/50 md:backdrop-blur-sm md:rounded-lg md:p-8 md:w-fit">
          <div className="flex items-center gap-2">
            <div className="h-px w-6 bg-primary" />
            <p className="font-mono text-xs font-medium tracking-widest uppercase text-primary">
              Aspiring Software Architect
            </p>
          </div>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Ricardo Morataya
          </h1>
          <p className="max-w-lg text-base text-foreground/70 md:text-lg leading-relaxed">
            Building <span className="text-foreground font-medium">scalable systems</span> and{" "}
            <span className="text-foreground font-medium">clean architectures</span>.
          </p>
          <p className="max-w-md text-sm text-foreground/50">
            6+ years designing web applications across healthcare, compliance, and gaming platforms.
          </p>
          <div className="flex items-center gap-1 pt-3">
            {socialLinks.map((link) => (
              <SocialLinkIcon key={link.id} link={link} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom architecture line */}
      <div className="absolute bottom-0 left-0 right-0 z-[2]">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>
    </section>
  );
}
