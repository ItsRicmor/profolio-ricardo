import { SocialLinkIcon } from "@/components/atoms/SocialLinkIcon";
import { socialLinks } from "@/data/social-links";

export function Footer() {
  return (
    <footer className="border-t border-dashed border-primary/20">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold">Ricmor</span>
            <span className="text-muted-foreground/30">|</span>
            <a
              href="mailto:ricardojms1999@gmail.com"
              className="font-mono text-xs text-primary hover:underline"
            >
              ricardojms1999@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-1">
            {socialLinks.map((link) => (
              <SocialLinkIcon key={link.id} link={link} />
            ))}
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="font-mono text-[10px] text-muted-foreground">
            © {new Date().getFullYear()} Ricardo Morataya // Engineered with intention
          </p>
        </div>
      </div>
    </footer>
  );
}
