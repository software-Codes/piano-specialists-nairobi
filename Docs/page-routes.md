# 📄 Pages & Routes — The Piano Specialists Nairobi

## Route Map

| Page            | Route           | Description                                  |
|-----------------|-----------------|----------------------------------------------|
| Home            | `/`             | Landing page — hero, overview, highlights    |
| Services        | `/services`     | All 4 services in detail                     |
| Buying Guide    | `/buying-guide` | Expert piano buying advice                   |
| About           | `/about`        | Our story, mission, expertise                |
| Testimonials    | `/testimonials` | Client reviews and feedback                  |
| Contact         | `/contact`      | EmailJS form, Google Maps, WhatsApp          |

---

## Page Breakdown

---

### 1. 🏠 Home — `/`

**Purpose:** First impression. Establish brand, showcase services, drive action.

#### Sections:
1. **Hero**
   - Full-screen or large hero
   - Headline: e.g., *"Nairobi's Trusted Piano Specialists"*
   - Sub-headline: Short tagline about expertise
   - CTA Buttons: "Our Services" → `/services` | "Get in Touch" → `/contact`
   - Background: Dark dramatic piano image with overlay

2. **Services Overview (Snippet)**
   - 4 cards: Tuning, Servicing, Regulation, Buying Guidance
   - Each card: icon + title + short description
   - CTA: "View All Services" → `/services`

3. **About Snippet**
   - Short paragraph about the brand
   - CTA: "Learn More About Us" → `/about`
   - Side image: Piano technician at work

4. **Why Choose Us**
   - 3–4 trust pillars (e.g., Expert Technicians, Nairobi-Based, Years of Experience, Trusted by Schools & Churches)
   - Icon + heading + short text format

5. **Buying Guidance Highlight**
   - Feature section promoting the buying guide
   - CTA: "Get Piano Buying Advice" → `/buying-guide`

6. **Testimonials Snippet**
   - 2–3 featured client testimonials
   - CTA: "Read More Reviews" → `/testimonials`

7. **Contact CTA Banner**
   - Bold section: "Ready to get started?"
   - Buttons: WhatsApp | Email Us

---

### 2. 🔧 Services — `/services`

**Purpose:** Detailed breakdown of all services offered.

#### Sections:
1. **Page Hero** — Title + tagline + breadcrumb
2. **Tuning** — Full description, what it involves, why it matters
3. **Servicing** — Full description, what's included
4. **Regulation** — Full description, how it improves playability
5. **Buying Guidance** — Short teaser + CTA to `/buying-guide`
6. **CTA Section** — "Book a Service" → `/contact`

---

### 3. 💡 Buying Guide — `/buying-guide`

**Purpose:** Position the brand as expert piano advisors. Most content-rich page.

#### Sections:
1. **Page Hero** — "Find Your Perfect Piano"
2. **Types of Pianos**
   - Grand Piano
   - Upright Piano
   - Digital Piano
   - Hybrid Piano
   - Each with: description, pros, cons, who it's for
3. **What to Consider When Buying**
   - Budget range guidance
   - Space/size considerations
   - New vs used
   - Brand recommendations (general)
   - Acoustic vs digital
4. **Common Mistakes to Avoid**
   - Buying without playing first
   - Ignoring maintenance costs
   - Choosing only by looks
5. **Ask the Experts CTA**
   - "Still unsure? Let us guide you personally"
   - Button → `/contact`

---

### 4. 👤 About — `/about`

**Purpose:** Build trust. Tell the story. Show the human side.

#### Sections:
1. **Page Hero** — "About The Piano Specialists Nairobi"
2. **Our Story** — How the business started, passion for pianos
3. **Our Mission** — Making quality piano services accessible in Nairobi
4. **Our Expertise** — Years of experience, certifications, skills
5. **Who We Serve** — Schools, churches, homeowners, professionals
6. **CTA** — "Work With Us" → `/contact`

---

### 5. ⭐ Testimonials — `/testimonials`

**Purpose:** Social proof. Build credibility.

#### Sections:
1. **Page Hero** — "What Our Clients Say"
2. **Testimonials Grid** — Cards with: client name, quote, role/type (school, homeowner, etc.)
3. **Star Ratings** — Visual stars on each card
4. **CTA Banner** — "Join Our Happy Clients" → `/contact`

> 🔧 Testimonials data can be stored in a `/data/testimonials.ts` file for easy editing.

---

### 6. 📞 Contact — `/contact`

**Purpose:** Convert visitors to leads.

#### Sections:
1. **Page Hero** — "Get In Touch"
2. **Contact Form (EmailJS)**
   - Fields: Name, Email, Phone, Subject, Message
   - Validation: React Hook Form + Zod
   - Success/error toast notification
3. **Other Ways to Reach Us**
   - WhatsApp button (opens wa.me link)
   - Email address (mailto link)
   - Physical address
4. **Google Maps Embed** — Nairobi location
5. **Social Links** — Instagram, LinkedIn, TikTok, Facebook, YouTube

---

## Shared Components (Every Page)

| Component         | Description                                          |
|-------------------|------------------------------------------------------|
| `<Navbar />`      | Logo + Nav links + Theme toggle + Mobile menu        |
| `<Footer />`      | Logo + Nav links + Social icons + Copyright          |
| `<WhatsAppFAB />` | Floating WhatsApp button (bottom-right, all pages)   |

---

## Navigation Structure

### Desktop Navbar
```
[Logo]    Home   Services   Buying Guide   About   Testimonials   Contact   [🌙/☀️]
```

### Mobile Navbar
```
[Logo]  [☰ Hamburger]
→ Slide-out or dropdown menu with all links + theme toggle
```

---

_Last updated: Planning Phase_