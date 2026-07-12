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
  // A single screenshot, or several — pass an array to get a prev/next
  // gallery in the lightbox. The card thumbnail always shows just the first.
  image?: string | StaticImageData | (string | StaticImageData)[];
  // Shown as the card thumbnail instead of `image` when set — clicking it
  // still opens the real screenshot(s) in the lightbox.
  logo?: string | StaticImageData;
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
