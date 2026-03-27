# 🎹 The Piano Specialists Nairobi — Master Planning README

## Planning Documents Index

| File                  | Description                                    | Status     |
|-----------------------|------------------------------------------------|------------|
| `PROJECT_OVERVIEW.md` | Brand identity, services, features summary     | ✅ Locked   |
| `DESIGN_SYSTEM.md`    | Colors, typography, spacing, dark/light mode   | ✅ Locked   |
| `PAGES_AND_ROUTES.md` | All pages, routes, sections per page           | ✅ Locked   |
| `TECH_STACK.md`       | Full stack, setup commands, folder structure   | ✅ Locked   |
| `COMPONENTS.md`       | All components, props, build order             | ✅ Locked   |
| `IMAGES_AND_ASSETS.md`| Image plan per section, icons, logo spec       | ✅ Locked   |

---

## Quick Summary

> **The Piano Specialists Nairobi** is a premium multi-page website for a Nairobi-based piano services business. The site showcases tuning, servicing, regulation, and expert buying guidance. Built with Next.js 14 + TypeScript + ShadCN UI + Tailwind CSS. Supports dark/light theming, is fully responsive, and integrates WhatsApp, EmailJS, and Google Maps.

---

## Environment Setup Checklist

### Step 1 — Create Project
```bash
npx create-next-app@latest piano-specialists-nairobi \
  --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

### Step 2 — Install Dependencies
```bash
cd piano-specialists-nairobi
npx shadcn@latest init
npm install framer-motion react-hook-form @hookform/resolvers zod @emailjs/browser next-themes lucide-react
```

### Step 3 — Install ShadCN Components
```bash
npx shadcn@latest add button card input textarea label badge separator toast sheet navigation-menu dropdown-menu
```

### Step 4 — Setup Fonts in `layout.tsx`
```tsx
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
```

### Step 5 — Create Folder Structure
Follow the structure defined in `TECH_STACK.md`

### Step 6 — Set CSS Variables
Follow color tokens in `DESIGN_SYSTEM.md` → `globals.css`

### Step 7 — Create `.env.local`
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_BUSINESS_EMAIL=
```

---

## Pending Information From Client

| Item                    | Status    | Notes                            |
|-------------------------|-----------|----------------------------------|
| WhatsApp number         | ⏳ Pending | Format: +254XXXXXXXXX            |
| Business email          | ⏳ Pending | For EmailJS + footer display     |
| Physical address        | ⏳ Pending | For Google Maps embed            |
| Instagram handle        | ⏳ Pending |                                  |
| LinkedIn handle         | ⏳ Pending |                                  |
| TikTok handle           | ⏳ Pending |                                  |
| Facebook handle         | ⏳ Pending |                                  |
| YouTube channel         | ⏳ Pending |                                  |
| Real testimonials       | ⏳ Pending | Placeholder used meanwhile       |
| Logo preference/example | ⏳ Pending | Will design in-house             |

---

## Build Order (Recommended)

```
Phase 1 — Foundation
  ✅ Plan all .md docs
  [ ] Set up Next.js project
  [ ] Configure Tailwind + ShadCN
  [ ] Set up ThemeProvider (dark/light)
  [ ] Configure fonts (Inter + Playfair Display)
  [ ] Build Navbar + Footer + Logo

Phase 2 — Home Page
  [ ] HeroSection
  [ ] ServicesOverview
  [ ] AboutSnippet
  [ ] WhyChooseUs
  [ ] BuyingGuidanceHighlight
  [ ] TestimonialsSnippet
  [ ] ContactCTABanner

Phase 3 — Services Page
Phase 4 — Buying Guide Page
Phase 5 — Contact Page (EmailJS + Maps + WhatsApp)
Phase 6 — About Page
Phase 7 — Testimonials Page

Phase 8 — Polish
  [ ] Framer Motion animations
  [ ] WhatsAppFAB button
  [ ] Mobile responsiveness audit
  [ ] Dark/light mode final review
  [ ] SEO meta tags
  [ ] Performance optimization
  [ ] Deploy to Vercel
```

---

## Design Decisions Locked

| Decision                    | Choice                                  |
|-----------------------------|-----------------------------------------|
| Color palette               | Black + Ivory + Gold accent             |
| Primary font                | Inter                                   |
| Display font (headings)     | Playfair Display                        |
| Dark/light mode             | Yes — next-themes with class strategy   |
| Responsive                  | Yes — mobile-first Tailwind             |
| Logo                        | Creative in-house SVG (piano keys)      |
| Pages                       | Multi-page (not single scroll)          |
| Piano sales                 | ❌ Not included                          |
| Buying guidance             | ✅ Dedicated page `/buying-guide`        |
| WhatsApp integration        | ✅ Floating button on all pages          |
| EmailJS                     | ✅ Contact form                          |
| Google Maps                 | ✅ Contact page                          |
| Social media links          | ✅ Footer + Contact page                 |
| Stock images                | Unsplash / Pexels (WebP format)         |
| Animations                  | Framer Motion                           |
| Form validation             | React Hook Form + Zod                   |
| Deployment                  | Vercel                                  |

---

_Planning Phase Complete. Ready to build. 🚀_
_Last updated: Planning Phase_