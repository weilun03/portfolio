import type { ExperienceEntry } from "@/types";

export const experience: ExperienceEntry[] = [
  {
    title: "JavaScript Developer Intern",
    organization: "Webby Group",
    internshipType: "Degree Internship",
    period: "Aug 2025 – Nov 2025 (3 months)",
    workMode: "On-site",
    highlights: [
      "Built and enhanced two production client systems — a booking/coaching mobile app with two admin-facing web portals, and a business marketplace web platform — shipping new listing, form, and admin messaging modules across both",
      "Architected a modular Apollo Client GraphQL pipeline (auth, error-handling, and multipart file-upload links) paired with auto-generated, type-safe React hooks via GraphQL codegen",
      "Built a 5-language internationalisation system (i18next, Expo Localization) with a Google Sheets-to-JSON automation pipeline and type-safe translation key generation",
    ],
    technologies: ["React", "TypeScript", "React Native", "Material-UI", "GraphQL", "Apollo Client"],
  },
  {
    title: "Data Management & System Administration Intern",
    organization: "Information Technology Centre (PTM), Universiti Malaya",
    internshipType: "Diploma Internship",
    period: "Aug 2023 – Nov 2023 (3 months)",
    workMode: "On-site",
    highlights: [
      "Independently built a 5-page admin data-management interface with AJAX-driven CRUD, inline table editing, and Excel bulk import/export, connected to a live PostgreSQL database and deployed to the production server",
      "Built a Laravel-based data validation tool that connects to an Oracle database via Eloquent models to flag invalid or missing university records for administrator review",
      "Created an interactive Power BI dashboard using DAX-based measures to detect and quantify null values across staff records, streamlining a manual data-cleaning process",
    ],
    technologies: ["PHP", "JavaScript", "Laravel", "PostgreSQL", "Oracle", "Power BI", "Postman"],
  },
];
