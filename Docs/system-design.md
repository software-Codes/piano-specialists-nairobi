# 🎨 Design System — The Piano Specialists Nairobi

## Typography

| Role         | Font              | Weight(s)       | Notes                            |
|--------------|-------------------|-----------------|----------------------------------|
| Primary Font | Inter             | 400, 500, 600, 700 | All body text, UI elements    |
| Display Font | Playfair Display  | 600, 700        | Hero headings, section titles    |
| Mono (optional) | JetBrains Mono | 400           | Code or technical details if any |

### Font Scale (Tailwind)
```
text-xs    → 12px
text-sm    → 14px
text-base  → 16px
text-lg    → 18px
text-xl    → 20px
text-2xl   → 24px
text-3xl   → 30px
text-4xl   → 36px
text-5xl   → 48px
text-6xl   → 60px
```

---

## Color Palette

### Light Mode
| Token              | Hex        | Usage                          |
|--------------------|------------|--------------------------------|
| `--background`     | `#FAF9F6`  | Page background (warm ivory)   |
| `--foreground`     | `#0A0A0A`  | Primary text                   |
| `--card`           | `#FFFFFF`  | Card backgrounds               |
| `--card-foreground`| `#0A0A0A`  | Card text                      |
| `--primary`        | `#0A0A0A`  | Primary buttons, key elements  |
| `--primary-foreground` | `#FAF9F6` | Text on primary             |
| `--accent`         | `#B8860B`  | Gold accent (CTA, highlights)  |
| `--accent-light`   | `#D4A017`  | Hover states for gold          |
| `--muted`          | `#F0EDE8`  | Subtle backgrounds             |
| `--muted-foreground` | `#6B6B6B` | Secondary text, placeholders  |
| `--border`         | `#E5E0D8`  | Borders, dividers              |

### Dark Mode
| Token              | Hex        | Usage                          |
|--------------------|------------|--------------------------------|
| `--background`     | `#0A0A0A`  | Page background (deep black)   |
| `--foreground`     | `#FAF9F6`  | Primary text (ivory)           |
| `--card`           | `#141414`  | Card backgrounds               |
| `--card-foreground`| `#FAF9F6`  | Card text                      |
| `--primary`        | `#FAF9F6`  | Primary buttons                |
| `--primary-foreground` | `#0A0A0A` | Text on primary            |
| `--accent`         | `#D4A017`  | Gold accent (brighter in dark) |
| `--accent-light`   | `#E8B824`  | Hover states for gold          |
| `--muted`          | `#1A1A1A`  | Subtle backgrounds             |
| `--muted-foreground` | `#A0A0A0` | Secondary text                |
| `--border`         | `#2A2A2A`  | Borders, dividers              |

---

## Theming Setup

Using **next-themes** with ShadCN for dark/light switching.

```tsx
// tailwind.config.ts
darkMode: ["class"]

// globals.css
:root { /* light mode tokens */ }
.dark { /* dark mode tokens */ }
```

Theme toggle: Sun/Moon icon in the Navbar.

---

## Spacing System (Tailwind)

Consistent spacing using multiples of 4:
```
p-2  → 8px
p-4  → 16px
p-6  → 24px
p-8  → 32px
p-12 → 48px
p-16 → 64px
p-24 → 96px
```

Section vertical padding: `py-16 md:py-24`

---

## Border Radius

| Token       | Value   | Usage                   |
|-------------|---------|-------------------------|
| `rounded`   | 4px     | Small elements, badges  |
| `rounded-md`| 6px     | Inputs, small cards     |
| `rounded-lg`| 8px     | Cards, buttons          |
| `rounded-xl`| 12px    | Large cards             |
| `rounded-2xl`| 16px   | Hero cards, images      |
| `rounded-full` | 9999px | Pills, avatars, FAB  |

---

## Shadows

```css
/* Light Mode */
--shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
--shadow-md: 0 4px 16px rgba(0,0,0,0.10);
--shadow-lg: 0 8px 32px rgba(0,0,0,0.12);
--shadow-gold: 0 4px 24px rgba(184,134,11,0.20);

/* Dark Mode */
--shadow-sm: 0 1px 3px rgba(0,0,0,0.40);
--shadow-md: 0 4px 16px rgba(0,0,0,0.50);
--shadow-lg: 0 8px 32px rgba(0,0,0,0.60);
--shadow-gold: 0 4px 24px rgba(212,160,23,0.25);
```

---

## Breakpoints (Tailwind Default)

| Prefix | Min Width | Device         |
|--------|-----------|----------------|
| `sm`   | 640px     | Large phones   |
| `md`   | 768px     | Tablets        |
| `lg`   | 1024px    | Laptops        |
| `xl`   | 1280px    | Desktops       |
| `2xl`  | 1536px    | Large screens  |

---

## Animation Guidelines (Framer Motion)

```tsx
// Standard fade-in-up
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

// Staggered children
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
}

// Card hover
const cardHover = {
  whileHover: { y: -4, transition: { duration: 0.2 } }
}
```

---

## Logo Spec (Creative — Built In-House)

```
[Piano Keys SVG Icon] + "The Piano Specialists" (Playfair Display)
                         "Nairobi" (Inter, tracked, smaller)
```

- Light mode: Black icon + black text
- Dark mode: Ivory/white icon + ivory text
- Accent line: Thin gold underline or separator under "Nairobi"
- Format: SVG component (scalable, theme-aware)

---

_Last updated: Planning Phase_