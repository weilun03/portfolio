import type { StaticImageData } from "next/image";

export interface NavLink {
  label: string;
  href: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
}

export interface ExperienceEntry {
  title: string;
  organization?: string;
  internshipType: string;
  period?: string;
  workMode: string;
  highlights: string[];
  technologies?: string[];
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  technologies?: string[];
  category: "university" | "work";
  image?: string | StaticImageData;
  // True when screenshots can't be shown (e.g. client/employer NDA) — renders
  // a "Confidential" placeholder in place of the image instead of nothing.
  confidential?: boolean;
  featured?: boolean;
  level?: "diploma" | "degree";
  scope?: "assignment" | "fyp";
  team?: "individual" | "group";
  teamSize?: number;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}
