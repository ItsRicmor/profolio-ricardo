import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "@/styles/globals.css";

// Critical CSS inline to prevent 450ms render blocking
// react-doctor flags dangerouslySetInnerHTML as unsafe, but this is a false positive:
// - Content is 100% static (hardcoded)
// - No user input involved
// - No XSS risk
// Trade-off: Performance (−450ms) > False positive warning
const criticalStyles = `
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
  }
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
  }
  body {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
  }
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://ricmor.dev"),
  title: {
    default: "Ricardo Morataya — Aspiring Software Architect",
    template: "%s | Ricardo Morataya",
  },
  description: "Aspiring Software Architect with 6+ years building scalable systems and clean architectures across healthcare, compliance, and gaming platforms.",
  keywords: ["Ricardo Morataya", "Software Architect", "Full Stack Developer", "React", "TypeScript", "Node.js", "Clean Architecture"],
  authors: [{ name: "Ricardo Morataya" }],
  creator: "Ricardo Morataya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ricmor.dev",
    title: "Ricardo Morataya — Aspiring Software Architect",
    description: "Building scalable systems and clean architectures. 6+ years designing web applications across healthcare, compliance, and gaming platforms.",
    siteName: "Ricardo Morataya Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ricardo Morataya - Software Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricardo Morataya — Aspiring Software Architect",
    description: "Building scalable systems and clean architectures. 6+ years across healthcare, compliance, and gaming.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: criticalStyles }} />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <Toaster />
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
