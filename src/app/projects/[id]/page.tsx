"use client";

import { Suspense, lazy, use } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/organisms/Navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const Footer = lazy(() => import("@/components/organisms/Footer").then(m => ({ default: m.Footer })));

export default function ProjectPlayPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { theme } = useTheme();
  const project = projects.find(p => p.id === id);

  if (!project || !project.iframeUrl) {
    notFound();
  }

  const iframeUrl = `${project.iframeUrl}?theme=${theme || 'light'}`;

  return (
    <div className="relative min-h-screen bg-background text-foreground">
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
        <main className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          <div className="space-y-6">
            <div>
              <h1 className="font-heading text-3xl md:text-4xl font-bold">{project.title}</h1>
              <p className="text-muted-foreground mt-2">{project.description}</p>
            </div>

            <div className="relative w-full rounded-lg border border-dashed border-primary/20 overflow-hidden bg-card shadow-lg" style={{ aspectRatio: '16/9', minHeight: '600px' }}>
              <iframe
                src={iframeUrl}
                className="w-full h-full border-0"
                title={project.title}
                allow="fullscreen"
              />
            </div>
          </div>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}
