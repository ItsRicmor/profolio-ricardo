import type { StaticImageData } from "next/image";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  image?: string | StaticImageData;
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readMoreUrl: string;
  content: string;
  language: "EN" | "ES";
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
}
