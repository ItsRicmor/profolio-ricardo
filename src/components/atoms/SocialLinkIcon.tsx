import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import type { SocialLink } from "@/types";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

interface SocialLinkIconProps {
  link: SocialLink;
  className?: string;
}

export function SocialLinkIcon({ link, className }: SocialLinkIconProps) {
  const Icon = iconMap[link.icon] || Mail;
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      className={`inline-flex items-center justify-center rounded-full p-2.5 text-muted-foreground transition-colors hover:text-foreground hover:bg-accent ${className || ""}`}
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}
