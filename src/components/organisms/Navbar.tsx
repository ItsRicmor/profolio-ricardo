"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useActiveSection } from "@/hooks/use-active-section";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (!isHome) return;
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4">
        <Link
          href="/"
          className="font-mono text-lg font-bold tracking-tight flex items-center gap-1.5"
        >
          <span className="font-mono text-sm font-bold tracking-tight">Ricmor</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {isHome &&
            NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm transition-colors",
                  activeSection === item.href.replace("#", "")
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          {!isHome && (
            <Link
              href="/"
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              Home
            </Link>
          )}
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <Button variant="ghost" size="icon" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile drawer */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="right" className="w-64">
            <SheetHeader>
              <SheetTitle className="font-heading text-lg">Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-2">
              {isHome &&
                NAV_ITEMS.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "rounded-md px-3 py-2.5 text-left text-sm transition-colors",
                      activeSection === item.href.replace("#", "")
                        ? "bg-accent text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              {!isHome && (
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-accent"
                >
                  Home
                </Link>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
