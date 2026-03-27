# 🧩 Components Plan — The Piano Specialists Nairobi

## Component Architecture Overview

```
Layout Components      → Wrap every page
Section Components     → Page-specific content blocks  
Shared Components      → Reusable across multiple pages
UI Components          → ShadCN primitives + custom atoms
```

---

## 1. Layout Components

### `Navbar.tsx`
**Location:** `src/components/layout/Navbar.tsx`

**Features:**
- Logo (left)
- Desktop nav links (center/right)
- Theme toggle button (Sun/Moon icon)
- Mobile hamburger menu (Sheet drawer from ShadCN)
- Scroll behavior: transparent on top → solid background on scroll
- Active link highlight (current page)

**Props:** None (reads route from `usePathname`)

---

### `Footer.tsx`
**Location:** `src/components/layout/Footer.tsx`

**Content:**
- Logo + short tagline
- Quick nav links (split into columns)
- Social media icons (Instagram, LinkedIn, TikTok, Facebook, YouTube)
- Contact info (phone, email, address)
- Copyright line: `© 2024 The Piano Specialists Nairobi. All rights reserved.`
- Thin gold separator line above copyright

---

### `ThemeProvider.tsx`
**Location:** `src/components/layout/ThemeProvider.tsx`

Wraps the app with `next-themes` provider:
```tsx
<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
  {children}
</ThemeProvider>
```

---

## 2. Shared Components

### `WhatsAppFAB.tsx`
**Location:** `src/components/shared/WhatsAppFAB.tsx`

- Fixed position: `bottom-6 right-6`
- Circular green button with WhatsApp icon
- Opens `https://wa.me/254XXXXXXXXX` in new tab
- Pulse animation to draw attention
- Tooltip on hover: "Chat with us on WhatsApp"
- Hidden on contact page (optional)

---

### `PageHero.tsx`
**Location:** `src/components/shared/PageHero.tsx`

Reusable hero for inner pages (Services, About, etc.)

**Props:**
```typescript
interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  breadcrumb?: { label: string; href: string }[]
}
```

---

### `SectionHeader.tsx`
**Location:** `src/components/shared/SectionHeader.tsx`

Reusable section title block:
```
[Gold accent line or badge]
Big Section Title
Optional subtitle paragraph
```

**Props:**
```typescript
interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  centered?: boolean
}
```

---

### `Logo.tsx`
**Location:** `src/components/shared/Logo.tsx`

Custom SVG logo component:
- Piano keys SVG icon
- Brand name text
- Theme-aware colors

**Props:**
```typescript
interface LogoProps {
  variant?: 'dark' | 'light' | 'auto'
  size?: 'sm' | 'md' | 'lg'
}
```

---

## 3. Home Page Sections

### `HeroSection.tsx`
- Full viewport height or large section
- Dark image background with gradient overlay
- Animated headline (Framer Motion stagger)
- Two CTA buttons: "Our Services" + "Get in Touch"
- Scroll indicator arrow

### `ServicesOverview.tsx`
- 4 service cards in a grid (2x2 on mobile, 4x1 or 2x2 on desktop)
- Each card: icon + title + short description + "Learn More" link
- Hover: subtle lift + gold border glow

### `AboutSnippet.tsx`
- Two-column layout (text left, image right)
- Short brand story paragraph
- Key stats (e.g., "10+ Years Experience", "500+ Pianos Tuned")
- CTA: "Learn More About Us"

### `WhyChooseUs.tsx`
- 3 or 4 pillar cards
- Icon + heading + description
- Light/dark card design

### `BuyingGuidanceHighlight.tsx`
- Feature highlight section (image + text side by side)
- Emphasizes expertise in piano selection advice
- CTA to `/buying-guide`

### `TestimonialsSnippet.tsx`
- 2–3 featured testimonial cards
- Star rating, quote, client name
- CTA: "Read All Reviews"

### `ContactCTABanner.tsx`
- Full-width bold CTA section
- Gold or dark background
- Two buttons: WhatsApp + Email

---

## 4. Services Page Sections

### `ServiceCard.tsx`
- Large detailed card per service
- Icon, title, full description, bullet points of what's included

### `ServicesCTA.tsx`
- Bottom CTA: "Ready to book? Contact us today"

---

## 5. Buying Guide Sections

### `PianoTypeCard.tsx`
```typescript
interface PianoTypeCardProps {
  type: string
  description: string
  pros: string[]
  cons: string[]
  bestFor: string
  image: string
}
```

### `BuyingConsiderationsSection.tsx`
- Accordion or cards for: Budget, Space, New vs Used, Acoustic vs Digital

### `CommonMistakesSection.tsx`
- Warning-style cards with mistakes to avoid

---

## 6. Testimonials Page Sections

### `TestimonialCard.tsx`
```typescript
interface TestimonialCardProps {
  name: string
  role: string          // e.g., "Homeowner", "School Music Teacher"
  quote: string
  rating: number        // 1-5
  avatar?: string
}
```

### `TestimonialsGrid.tsx`
- Masonry or uniform grid of TestimonialCard components
- Filterable by type (optional enhancement)

---

## 7. Contact Page Sections

### `ContactForm.tsx`
- React Hook Form + Zod validation
- Fields: Name, Email, Phone, Subject, Message
- EmailJS submission
- Loading state on button
- Success/error toast

### `ContactInfo.tsx`
- WhatsApp, Email, Address blocks with icons
- Click-to-action links

### `GoogleMapEmbed.tsx`
- Responsive iframe wrapper
- Dark/light map style toggle (optional)

### `SocialLinks.tsx`
- Icon links to all social platforms
- Reused in Footer and Contact page

---

## 8. Data Files

### `src/data/services.ts`
```typescript
export const services = [
  {
    id: 'tuning',
    title: 'Piano Tuning',
    description: '...',
    icon: 'Settings2',
    details: [...],
  },
  // ...
]
```

### `src/data/testimonials.ts`
```typescript
export const testimonials = [
  {
    id: 1,
    name: 'Jane Doe',
    role: 'Homeowner',
    quote: '...',
    rating: 5,
  },
  // ...
]
```

### `src/data/navigation.ts`
```typescript
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Buying Guide', href: '/buying-guide' },
  { label: 'About', href: '/about' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
]
```

---

## Component Priority (Build Order)

| Priority | Component              | Reason                          |
|----------|------------------------|---------------------------------|
| 1        | ThemeProvider          | Required for everything          |
| 2        | Navbar + Footer        | Layout shell                    |
| 3        | Logo + WhatsAppFAB     | Brand identity + UX feature     |
| 4        | Home page sections     | First impression                |
| 5        | Services page          | Core offering                   |
| 6        | Buying Guide page      | Key differentiator              |
| 7        | Contact page           | Lead conversion                 |
| 8        | About page             | Trust building                  |
| 9        | Testimonials page      | Social proof                    |

---

_Last updated: Planning Phase_