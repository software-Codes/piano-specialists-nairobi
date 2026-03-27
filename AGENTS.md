<!-- BEGIN:nextjs-agent-rules -->
# Project: The Piano Specialists Nairobi

## Stack
- Next.js 14 (App Router) — use `app/` directory, NOT `pages/`
- TypeScript — strict mode, no `any`
- Tailwind CSS + ShadCN UI
- next-themes for dark/light mode
- Framer Motion for animations
- React Hook Form + Zod for forms
- EmailJS for contact form
- Lucide React for icons

## Folder Structure
- Pages → `src/app/[route]/page.tsx`
- Layout components → `src/components/layout/`
- Page sections → `src/components/sections/[page]/`
- Shared components → `src/components/shared/`
- ShadCN UI → `src/components/ui/` (do NOT edit these)
- Data/content → `src/data/`
- Types → `src/types/`
- Helpers → `src/lib/`

## Conventions
- All components use `"use client"` only when needed (hooks, events, browser APIs)
- Server Components by default
- Use `cn()` from `@/lib/utils` for className merging
- CSS variables for theming — never hardcode colors
- Font variables: `--font-inter` (body), `--font-playfair` (headings)
- Accent color: gold — use `hsl(var(--accent))`
- Images via `next/image` only, format WebP, lazy load except hero

## Design Tokens
- Background: `hsl(var(--background))`
- Foreground: `hsl(var(--foreground))`
- Accent (gold): `hsl(var(--accent))`
- Muted: `hsl(var(--muted))`
- Border: `hsl(var(--border))`

## Rules
- No `<img>` tags — always `next/image`
- No inline styles — use Tailwind classes
- No hardcoded colors — use CSS variables
- Mobile-first responsive design always
- Dark AND light mode must work for every component
- Section padding: `py-16 md:py-24`
- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
<!-- END:nextjs-agent-rules -->