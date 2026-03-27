# 🖼️ Images & Assets Plan — The Piano Specialists Nairobi

## Stock Image Sources

- **Unsplash:** https://unsplash.com
- **Pexels:** https://pexels.com
- **All images must be:** High resolution, commercially usable, royalty-free

---

## Image Requirements Per Section

### 🏠 Home Page

| Section                  | Image Description                                        | Format  | Suggested Search Keywords          |
|--------------------------|----------------------------------------------------------|---------|------------------------------------|
| Hero Background          | Dramatic close-up of piano keys in low/moody lighting   | JPG/WebP | "piano keys dark dramatic"         |
| About Snippet            | Piano technician tuning or working inside a piano        | JPG/WebP | "piano technician tuning"          |
| Buying Guidance Highlight | Person in a piano showroom or browsing pianos           | JPG/WebP | "piano showroom browsing"          |
| Why Choose Us (optional) | Abstract piano detail or texture shot                   | JPG/WebP | "piano detail texture bokeh"       |

---

### 🔧 Services Page

| Section     | Image Description                                        | Format  | Keywords                          |
|-------------|----------------------------------------------------------|---------|------------------------------------|
| Page Hero   | Piano strings and hammers interior view                  | JPG/WebP | "piano interior strings hammers"  |
| Tuning      | Tuning fork near piano or technician with tools          | JPG/WebP | "piano tuning fork technician"    |
| Servicing   | Piano keys being cleaned or maintained                   | JPG/WebP | "piano maintenance cleaning"      |
| Regulation  | Piano action mechanism close-up                          | JPG/WebP | "piano action mechanism keys"     |

---

### 💡 Buying Guide Page

| Section             | Image Description                                | Format  | Keywords                          |
|---------------------|--------------------------------------------------|---------|------------------------------------|
| Page Hero           | Beautiful grand piano in elegant room            | JPG/WebP | "grand piano elegant room"        |
| Grand Piano         | Grand piano open lid on stage                    | JPG/WebP | "grand piano concert stage"       |
| Upright Piano       | Classic upright piano in home setting            | JPG/WebP | "upright piano home living room"  |
| Digital Piano       | Modern digital piano with headphones             | JPG/WebP | "digital piano modern"            |
| Showroom/Advice     | Customer and advisor at piano store              | JPG/WebP | "piano store customer advisor"    |

---

### 👤 About Page

| Section       | Image Description                                  | Format  | Keywords                          |
|---------------|----------------------------------------------------|---------|-----------------------------------|
| Page Hero     | Close-up of hands playing piano keys               | JPG/WebP | "hands playing piano keys"       |
| Our Story     | Vintage or classic piano in warm light             | JPG/WebP | "vintage piano warm light"       |
| Team/Expertise| Piano technician with tools or working on piano    | JPG/WebP | "piano technician repair expert" |

---

### ⭐ Testimonials Page

| Section    | Image Description                              | Format  | Keywords                       |
|------------|------------------------------------------------|---------|--------------------------------|
| Page Hero  | Piano keys bokeh light soft background         | JPG/WebP | "piano keys bokeh soft light" |
| Cards BG   | Soft texture — wood grain or music sheet       | JPG/WebP | "wood grain texture elegant"  |

---

### 📞 Contact Page

| Section    | Image Description                              | Format  | Keywords                        |
|------------|------------------------------------------------|---------|---------------------------------|
| Page Hero  | Nairobi cityscape or skyline (optional)        | JPG/WebP | "Nairobi skyline aerial"       |
| Side Image | Piano in a studio or professional space        | JPG/WebP | "piano studio professional"    |

---

## Image Naming Convention

```
/public/images/
├── hero-piano-keys.webp
├── hero-piano-dark.webp
├── about-technician.webp
├── service-tuning.webp
├── service-servicing.webp
├── service-regulation.webp
├── guide-grand-piano.webp
├── guide-upright-piano.webp
├── guide-digital-piano.webp
├── guide-showroom.webp
├── testimonials-bg.webp
└── contact-nairobi.webp
```

---

## Image Optimization

All images must be:
- Converted to **WebP** format for best compression
- Served via Next.js `<Image />` component for automatic optimization
- Lazy-loaded except the Hero (priority load)

```tsx
// Hero image — priority load
<Image
  src="/images/hero-piano-dark.webp"
  alt="Piano keys"
  fill
  priority
  className="object-cover"
/>

// Other images — lazy load (default)
<Image
  src="/images/service-tuning.webp"
  alt="Piano tuning"
  width={600}
  height={400}
  className="object-cover rounded-xl"
/>
```

---

## Icon Library

**Lucide React** — for all UI icons (already included with ShadCN)

### Icons Plan

| Usage                  | Lucide Icon          |
|------------------------|----------------------|
| Tuning service         | `Settings2`          |
| Servicing              | `Wrench`             |
| Regulation             | `SlidersHorizontal`  |
| Buying Guidance        | `Lightbulb`          |
| WhatsApp FAB           | Custom WhatsApp SVG  |
| Phone                  | `Phone`              |
| Email                  | `Mail`               |
| Location               | `MapPin`             |
| Instagram              | Custom SVG / `Instagram` |
| LinkedIn               | Custom SVG           |
| TikTok                 | Custom SVG           |
| Facebook               | Custom SVG           |
| YouTube                | Custom SVG           |
| Theme toggle (dark)    | `Moon`               |
| Theme toggle (light)   | `Sun`                |
| Menu (mobile)          | `Menu`               |
| Close menu             | `X`                  |
| Arrow / CTA            | `ArrowRight`         |
| Star (testimonials)    | `Star`               |
| Check (features)       | `CheckCircle2`       |

---

## Logo — SVG Spec

Custom SVG built as a React component:

```
Visual:
  [Piano Keys Icon]  THE PIANO SPECIALISTS
                     N A I R O B I

Piano Keys Icon: Simplified 5-key piano SVG (3 white, 2 black keys)
Font: Playfair Display for brand name, Inter tracked for location
Gold accent: thin underline or dot separator
```

Variants:
- `<Logo variant="dark" />` → for light backgrounds
- `<Logo variant="light" />` → for dark backgrounds  
- `<Logo variant="auto" />` → switches with theme (default)

---

## Favicon

- Use a simplified piano keys SVG as favicon
- Sizes: 16x16, 32x32, 180x180 (apple-touch-icon)
- Format: `.ico` + `.png`

---

_Last updated: Planning Phase_