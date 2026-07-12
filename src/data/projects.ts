import type { Project } from "@/types";
import knzHotelImage from "@/assets/knzHotel.jpg";
import yamirakuMusicStudioImage from "@/assets/yamirakuMusicStudio.jpg"
import onlineVotingSystemImage from "@/assets/onlineVotingSystem.jpg"
import lvcElectionSystemImage from "@/assets/lvcElectionSystem.jpg"
import studentManagementSystemImage from "@/assets/studentManagementSystem.png"
import spendsmartBudgeTrackerImage from "@/assets/spendsmartBudgetTracker.png"
import volleyLearnImage from "@/assets/volleyLearn.jpg"
import nfcLibraryRoomBookingSystem from "@/assets/nfcLibraryRoomBookingSystem.jpg"

// TODO: replace with real data. Categories are "university" or "work" —
// used by the projects page to split entries into two sections (Work shown first).
// `image` is optional: either a string path into /public (e.g. "/projects/my-project.png"),
// or a static import from src/assets (see knzHotelImage below) — leave "" until you have one.
// `featured: true` controls which projects show on the home page (pick your 2-3 strongest).
export const projects: Project[] = [
  {
    slug: "client-booking-platform-admin-portal",
    title: "Booking & Coaching Platform — Admin Portal",
    description:
      "An admin web portal for a client's booking and coaching platform, developed as part of a team-based internship engagement, working within an existing codebase alongside the in-house development team.",
    highlights: [
      "Built and maintained several CRUD-driven admin modules — listings, forms, and role-based permissions — integrated with a GraphQL API",
      "Developed reusable UI components, including a merged date/time picker and standardised navigation buttons, adopted across the portal to reduce duplicated markup",
      "Diagnosed and fixed re-render and stale-data issues in filtered, tabbed data views using React hooks (useCallback, useMemo, useRef), validated across multiple internal regression passes",
    ],
    technologies: ["React", "TypeScript", "Material-UI", "GraphQL", "Apollo Client"],
    category: "work",
    confidential: true,
    featured: true,
  },
  {
    slug: "nfc-library-room-booking-system",
    title: "NFC-Based Library Room Booking System",
    description:
      "A full-stack library room booking system for SEGi University — a Flutter mobile app, web admin portal, and NFC-based IoT door access, synced in real time via Firebase.",
    highlights: [
      "Built a rule-based booking engine enforcing advance-booking windows, duration limits, and per-student daily caps, with real-time conflict detection across overlapping room and time slots",
      "Implemented NFC-based door access with an ESP32 microcontroller and PN532 reader that validates a student's card against live Firestore bookings before unlocking the door",
      "Developed a Flutter Web admin portal with sortable, filterable data tables, CSV export, and batch approval workflows, backed by a real-time analytics dashboard for room usage and booking trends",
    ],
    technologies: ["Flutter", "Dart", "Firebase Firestore", "Firebase Authentication", "Arduino IDE", "ESP32", "PN532 NFC Module"],
    category: "university",
    image: nfcLibraryRoomBookingSystem,
    featured: true,
    level: "degree",
    scope: "fyp",
    team: "individual",
  },
  {
    slug: "volleylearn",
    title: "VolleyLearn",
    description:
      "A cross-platform Flutter app for volleyball education, combining tiered training modules, a knowledge quiz, and fitness routines behind Firebase-backed authentication.",
    highlights: [
      "Built a tiered training system (beginner/intermediate/advanced) pairing embedded video tutorials with per-module quizzes and instant feedback",
      "Implemented a 30-question knowledge quiz with shuffled questions and answers, persisting per-user progress locally keyed by email",
      "Integrated Firebase Authentication and Firestore for secure login and profile storage, with full account lifecycle support including editing, password change, and self-service deletion",
    ],
    technologies: ["Flutter", "Dart", "Cloud Firestore", "SharedPreferences", "Firebase Authentication"],
    category: "university",
    image: volleyLearnImage,
    featured: false,
    level: "degree",
    scope: "assignment",
    team: "individual",
  },
  {
    slug: "spendsmart-budget-tracker",
    title: "SpendSmart Budget Tracker",
    description:
      "An Android budgeting app for tracking personal expenses against custom budget periods, with category-based expense logging and a real-time balance dashboard.",
    highlights: [
      "Built a SQLite-backed user authentication system (registration, login) with per-user data isolation across budgets and expenses",
      "Implemented budget period creation with Material date-range pickers, regex-validated amounts, and overlap prevention between periods",
      "Designed category-based expense tracking (Groceries, Food, Transportation, Education, and more) feeding a dashboard that computes remaining balance per active budget period in real time",
    ],
    technologies: ["Java", "Android SDK", "SQLite", "Material Components", "Android Studio"],
    category: "university",
    image: spendsmartBudgeTrackerImage,
    featured: false,
    level: "degree",
    scope: "assignment",
    team: "individual",
  },
  {
    slug: "student-management-system",
    title: "Student Management System",
    description:
      "A desktop Java Swing application for managing student records, courses, and academic marks, with a dashboard summarizing enrollment and grade statistics.",
    highlights: [
      "Built a multi-window Swing UI (Dashboard, Student, Course, and Mark modules) inside a single MDI-style main window, with live regex-filtered search across all record tables",
      "Implemented per-student, per-semester GPA calculation, mapping letter grades to grade points and aggregating credit-hour-weighted totals across enrolled courses",
      "Persisted Student, Course, and Mark records via Java object serialization to local data files, with regex and try/catch input validation on numeric fields across all CRUD forms",
    ],
    technologies: ["Java", "Java Swing", "OOP", "Object Serialization"],
    category: "university",
    image: studentManagementSystemImage,
    featured: false,
    level: "degree",
    scope: "assignment",
    team: "individual",
  },
  {
    slug: "lvc-election-system",
    title: "LVC Election System",
    description:
      "A full-stack election platform for a college club, covering candidate registration, time-windowed voting, and real-time results with an admin analytics dashboard.",
    highlights: [
      "Engineered server-side time windows for candidate registration and voting, independently enforced per election session year",
      "Modeled a relational MySQL schema (admins, users, candidates, positions, votes, schedules) behind an admin dashboard with live vote-tally charts and full CRUD management",
      "Authored and executed a documented test plan covering duplicate-vote prevention, per-position candidate caps, and file-type validation",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "AJAX"],
    category: "university",
    image: lvcElectionSystemImage,
    featured: true,
    level: "diploma",
    scope: "fyp",
    team: "individual",
  },
  {
    slug: "online-voting-system",
    title: "Online Voting System",
    description:
      "A desktop student council voting system with separate user and admin applications, covering registration, authentication, voting, and results reporting.",
    highlights: [
      "Architected separate User and Admin data-access layers using parameterized OleDb queries throughout, avoiding SQL injection across all CRUD operations",
      "Built the full voting flow — registration, login, password reset, and duplicate-vote-prevented candidate voting",
      "Added an admin dashboard with live vote-tally charts, searchable data grids, and full CRUD management for users and voters",
    ],
    technologies: ["C#", ".NET", "Windows Forms", "OleDb", "MS Access"],
    category: "university",
    image: onlineVotingSystemImage,
    featured: false,
    level: "diploma",
    scope: "assignment",
    team: "individual",
  },
  {
    slug: "yamiraku-music-studio",
    title: "Yamiraku Music Studio",
    description:
      "A music lesson registration website for a studio offering piano, guitar, and drum classes. My role was the backend — database connectivity, admin authentication, and CRUD record handling.",
    highlights: [
      "Built the MySQL database connection layer and admin login authentication, validating credentials against the user table",
      "Implemented CRUD operations for the admin panel — inserting, editing, and searching customer registration records via PHP",
      "Handled server-side form validation and processed registration submissions into the customer table",
    ],
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    category: "university",
    image: yamirakuMusicStudioImage,
    featured: false,
    level: "diploma",
    scope: "assignment",
    team: "group",
    teamSize: 3,
  },
  {
    slug: "knz-hotel-booking-system",
    title: "KNZ Hotel Booking System",
    description:
      "A desktop hotel reservation system for room bookings and add-on services. My role was the object-oriented design — class structure, encapsulation, and event-driven UI logic.",
    highlights: [
      "Designed the class architecture and relationships (JFrame subclasses, encapsulated fields, ActionListener-based event handling) to keep the system modular and maintainable",
      "Implemented automatic checkout-date calculation and input validation using regex and try-catch for date and numeric fields",
      "Built the multi-window UI flow (login, booking, confirmation, receipt) across several layout managers, including BorderLayout, GridBagLayout, and FlowLayout",
    ],
    technologies: ["Java", "Java Swing", "OOP"],
    category: "university",
    image: knzHotelImage,
    featured: false,
    level: "diploma",
    scope: "assignment",
    team: "group",
    teamSize: 4,
  },
];
