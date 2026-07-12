# Tan Wei Lun — Portfolio

Personal portfolio site showcasing my work, experience, and projects as a software engineer.

**Live:** [portfolio-tanweilun.vercel.app](https://portfolio-tanweilun.vercel.app)

## Tech Stack

- [Next.js](https://nextjs.org) (App Router) + [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- Deployed on [Vercel](https://vercel.com)

## Pages

| Route         | Description                                  |
| ------------- | --------------------------------------------- |
| `/`           | Home — intro, featured projects               |
| `/about`      | About me, interests, education                |
| `/experience` | Work experience timeline                      |
| `/projects`   | Full project list (university + work)         |
| `/contact`    | Contact links and message form                |

## Getting Started

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it. The page hot-reloads as you edit.

See [COMMANDS.md](./COMMANDS.md) for the full yarn/git command reference and feature-branch workflow.

## Editing Content

Site content is data-driven — update these files rather than the page components directly:

- `src/data/profile.ts` — name, title, summary, interests
- `src/data/experience.ts` — work experience entries
- `src/data/projects.ts` — project cards (set `featured: true` to surface on the home page)
- `src/data/education.ts` — education history
- `src/data/contact.ts` — contact links (email, GitHub, LinkedIn)

Project images live in `src/assets/` and are imported directly into `projects.ts`.

## Project Structure

```
src/
├── app/            # Routes (App Router)
├── components/
│   ├── layout/     # Navbar, Footer, Container
│   └── ui/         # Reusable UI pieces (Card, Button, TagChip, etc.)
├── data/           # Site content (see above)
├── lib/            # Shared helpers (e.g. navigation config)
└── types/          # Shared TypeScript types
```

## Deployment

Pushes to `main` auto-deploy to production via Vercel. Pull requests get their own preview URL. See [COMMANDS.md](./COMMANDS.md) for the full branch → PR → merge workflow.

## Contact

- Email: [twl8799@gmail.com](mailto:twl8799@gmail.com)
- GitHub: [@weilun03](https://github.com/weilun03)
- LinkedIn: [wei-lun-tan](https://www.linkedin.com/in/wei-lun-tan-08644a332/)
