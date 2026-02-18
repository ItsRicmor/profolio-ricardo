import { lazy, Suspense } from "react";
import { Navbar } from "@/components/organisms/Navbar";
import { HeroSection } from "@/components/organisms/HeroSection";

const AboutSection = lazy(() => import("@/components/organisms/AboutSection").then(m => ({ default: m.AboutSection })));
const ExperienceSection = lazy(() => import("@/components/organisms/ExperienceSection").then(m => ({ default: m.ExperienceSection })));
const ProjectsSection = lazy(() => import("@/components/organisms/ProjectsSection").then(m => ({ default: m.ProjectsSection })));
const BlogPreviewSection = lazy(() => import("@/components/organisms/BlogPreviewSection").then(m => ({ default: m.BlogPreviewSection })));
const ContactCTA = lazy(() => import("@/components/organisms/ContactCTA").then(m => ({ default: m.ContactCTA })));
const Footer = lazy(() => import("@/components/organisms/Footer").then(m => ({ default: m.Footer })));

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Global subtle grid */}
      <div
        className="fixed inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <Suspense fallback={<div className="min-h-screen" />}>
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <BlogPreviewSection />
            <ContactCTA />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}
