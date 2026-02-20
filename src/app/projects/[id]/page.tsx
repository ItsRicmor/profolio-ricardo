"use client";

import { Suspense, lazy, use } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/organisms/Navbar";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";

const Footer = lazy(() => import("@/components/organisms/Footer").then(m => ({ default: m.Footer })));

export default function ProjectPlayPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { theme, toggleTheme } = useTheme();
  const project = projects.find(p => p.id === id);

  if (!project || !project.iframeUrl) {
    notFound();
  }

  const invertedTheme = theme === 'dark' ? 'light' : 'dark';
  const iframeUrl = `${project.iframeUrl}?theme=${invertedTheme}&hideFooter=true`;

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
        <div className="hidden md:block">
          <Navbar />
        </div>
        <main className="md:mx-auto md:max-w-6xl md:px-4 md:py-24">
          <div className="md:hidden h-dvh flex flex-col">
            <div className="flex-none px-4 py-3 bg-background/95 backdrop-blur-sm border-b border-border flex items-center justify-between">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Link>
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </div>
            <div className="flex-1 relative">
              <iframe
                src={iframeUrl}
                className="w-full h-full border-0"
                title={project.title}
                allow="fullscreen"
              />
            </div>
          </div>

          <div className="hidden md:block">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>

            <div className="space-y-6">
              <div>
                <h1 className="font-heading text-3xl lg:text-4xl font-bold">{project.title}</h1>
                <p className="text-muted-foreground mt-2">{project.description}</p>
                
                {(project.githubUrl || project.demoUrl) && (
                  <div className="flex items-center gap-4 mt-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        View Source
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="relative w-full rounded-lg border border-dashed border-primary/20 overflow-hidden bg-card shadow-lg aspect-video min-h-[600px]">
                <iframe
                  src={iframeUrl}
                  className="w-full h-full border-0"
                  title={project.title}
                  allow="fullscreen"
                />
              </div>
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
