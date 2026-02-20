import { Project } from "@/types";
import convoyhubPreview from "@/assets/convoyhub-preview.jpg";
import kardioPreview from "@/assets/kardio-preview.jpg";

export const projects: Project[] = [
  {
    id: "1",
    title: "ConvoyHub",
    description: "Community platform for motorcyclists to organize group rides with clear routes, shareable pages, and a real-time convoy map so no one gets left behind.",
    tags: ["React", "Real-time Maps", "Social Integration", "Mobile-first"],
    demoUrl: "https://convoy-hub.ricmor.dev/",
    image: convoyhubPreview,
  },
  {
    id: "2",
    title: "Kardio",
    description: "Personal finance app that reads bank notification emails and auto-categorizes expenses. No manual input, designed for the LATAM market.",
    tags: ["TypeScript", "Email Parsing", "Fintech", "Auto-categorization"],
    demoUrl: "https://kardio.parallaxsolutions.dev/",
    image: kardioPreview,
  },
];
