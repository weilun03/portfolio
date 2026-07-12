import type { SkillCategory } from "@/types";

// Short, curated headline stack for the Home page teaser strip.
// The full categorized breakdown below is what About renders.
export const coreSkills: string[] = [
  "React",
  "TypeScript",
  "React Native",
  "Flutter",
  "GraphQL",
  "Java",
  "PHP",
  "MySQL",
  "Firebase",
  "Git",
];

export const skills: SkillCategory[] = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "Dart", "PHP", "C#", "SQL"],
  },
  {
    title: "Frontend & UI Frameworks",
    items: ["React", "React Native", "Flutter", "Material-UI", "Java Swing", "Windows Forms", "HTML", "CSS"],
  },
  {
    title: "Backend & APIs",
    items: ["GraphQL", "Apollo Client", "Laravel", ".NET", "AJAX"],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "Oracle", "Firebase / Firestore", "SQLite", "MS Access"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "Figma", "Postman", "Power BI", "Android Studio", "Arduino IDE / ESP32"],
  },
];
