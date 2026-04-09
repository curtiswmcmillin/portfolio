# Portfolio — cloud-first-consulting.com

@../CLAUDE.md

Curtis McMillin's portfolio site showcasing four full-stack applications.

## Tech Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4 + shadcn/ui (base-nova style)
- next-themes for dark/light mode
- Static site — no backend, no auth, no database

## Structure

Single-page site with smooth scroll navigation:
- Hero → About/Skills → Projects → Footer
- Project data lives in `src/lib/projects.ts`
- Components in `src/components/`
- shadcn/ui components in `src/components/ui/`

## Commands

```bash
npm run dev    # Development server
npm run build  # Production build
npm run lint   # ESLint
```

## Deployment

Deploy to Vercel — purely static, no environment variables needed.
