# 🛠️ Tech Stack — The Piano Specialists Nairobi

## Core Stack

| Layer        | Technology                  | Version       | Purpose                            |
|--------------|-----------------------------|---------------|------------------------------------|
| Framework    | Next.js                     | 14+ (App Router) | Multi-page routing, SSR, performance |
| Language     | TypeScript                  | 5+            | Type safety throughout             |
| Styling      | Tailwind CSS                | 3+            | Utility-first styling              |
| UI Library   | ShadCN UI                   | Latest        | Accessible, themeable components   |
| Theming      | next-themes                 | Latest        | Dark/light mode switching          |
| Animation    | Framer Motion               | Latest        | Page transitions, scroll effects   |
| Forms        | React Hook Form + Zod       | Latest        | Form handling + schema validation  |
| Email        | EmailJS                     | Latest        | Contact form email delivery        |
| Maps         | Google Maps Embed API       | —             | Location display on contact page   |
| Deployment   | Vercel                      | —             | Hosting + CI/CD                    |

---

## Project Setup Commands

```bash
# 1. Create Next.js project
npx create-next-app@latest piano-specialists-nairobi \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

cd piano-specialists-nairobi

# 2. Install ShadCN UI
npx shadcn@latest init

# 3. Install dependencies
npm install framer-motion
npm install react-hook-form @hookform/resolvers zod
npm install @emailjs/browser
npm install next-themes
npm install lucide-react

# 4. Install Google Fonts (Inter + Playfair Display)
# Already handled via next/font in layout.tsx
```

---

## ShadCN Components to Install

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add label
npx shadcn@latest add badge
npx shadcn@latest add separator
npx shadcn@latest add toast
npx shadcn@latest add sheet         # Mobile nav drawer
npx shadcn@latest add dropdown-menu
npx shadcn@latest add navigation-menu
```

---

## Folder Structure

```
piano-specialists-nairobi/
├── public/
│   ├── images/           # Stock images (downloaded from Unsplash/Pexels)
│   ├── icons/            # Custom SVG icons
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout (Navbar, Footer, ThemeProvider)
│   │   ├── page.tsx             # Home page
│   │   ├── globals.css          # Global styles + CSS variables
│   │   ├── services/
│   │   │   └── page.tsx         # Services page
│   │   ├── buying-guide/
│   │   │   └── page.tsx         # Buying Guide page
│   │   ├── about/
│   │   │   └── page.tsx         # About page
│   │   ├── testimonials/
│   │   │   └── page.tsx         # Testimonials page
│   │   └── contact/
│   │       └── page.tsx         # Contact page
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ThemeProvider.tsx
│   │   ├── ui/                  # ShadCN auto-generated
│   │   ├── sections/            # Page-specific sections
│   │   │   ├── home/
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── ServicesOverview.tsx
│   │   │   │   ├── AboutSnippet.tsx
│   │   │   │   ├── WhyChooseUs.tsx
│   │   │   │   ├── BuyingGuidanceHighlight.tsx
│   │   │   │   ├── TestimonialsSnippet.tsx
│   │   │   │   └── ContactCTABanner.tsx
│   │   │   ├── services/
│   │   │   ├── buying-guide/
│   │   │   ├── about/
│   │   │   ├── testimonials/
│   │   │   └── contact/
│   │   └── shared/
│   │       ├── WhatsAppFAB.tsx       # Floating WhatsApp button
│   │       ├── PageHero.tsx          # Reusable page hero
│   │       ├── SectionHeader.tsx     # Reusable section title
│   │       └── Logo.tsx              # Brand logo SVG component
│   │
│   ├── data/
│   │   ├── services.ts          # Services content
│   │   ├── testimonials.ts      # Testimonials content
│   │   ├── buying-guide.ts      # Buying guide content
│   │   └── navigation.ts        # Nav links config
│   │
│   ├── lib/
│   │   ├── utils.ts             # ShadCN utils (cn function)
│   │   └── emailjs.ts           # EmailJS config/helper
│   │
│   ├── hooks/
│   │   └── useScrollAnimation.ts # Custom scroll animation hook
│   │
│   └── types/
│       ├── index.ts             # Shared TypeScript types
│       └── forms.ts             # Form schema types
│
├── .env.local                   # Environment variables (EmailJS keys)
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── package.json
```

---

## Environment Variables

```env
# .env.local

# EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Google Maps (if using API key)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_api_key

# Business Info
NEXT_PUBLIC_WHATSAPP_NUMBER=254700000000
NEXT_PUBLIC_BUSINESS_EMAIL=info@pianospecialistsnairobi.com
```

---

## EmailJS Setup Flow

1. Create account at [emailjs.com](https://www.emailjs.com)
2. Connect Gmail or preferred email provider
3. Create email template with variables: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{subject}}`, `{{message}}`
4. Copy Service ID, Template ID, Public Key → paste into `.env.local`
5. Initialize in `src/lib/emailjs.ts`

```typescript
// src/lib/emailjs.ts
import emailjs from '@emailjs/browser';

export const sendEmail = async (formData: ContactFormData) => {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  );
};
```

---

## Google Maps Embed

Using the **Embed API** (no key required for basic embed):

```tsx
// In Contact page
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!...YOUR_NAIROBI_LOCATION..."
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

---

## Performance Targets

| Metric     | Target  |
|------------|---------|
| LCP        | < 2.5s  |
| FID        | < 100ms |
| CLS        | < 0.1   |
| Lighthouse | 90+     |

---

_Last updated: Planning Phase_