# 🎹 The Piano Specialists Nairobi

**Professional piano services website built with Next.js 14, TypeScript, and Tailwind CSS.**

[![Deploy to Vercel](https://github.com/YOUR_USERNAME/piano-specialists-nairobi/actions/workflows/deploy.yml/badge.svg)](https://github.com/YOUR_USERNAME/piano-specialists-nairobi/actions/workflows/deploy.yml)

---

## 🌐 Live Site

**Production:** [https://piano-specialists-nairobi.vercel.app](https://piano-specialists-nairobi.vercel.app)

---

## 📋 Overview

A premium multi-page website for a Nairobi-based piano services business offering:
- Piano Tuning
- Piano Servicing & Maintenance
- Piano Regulation & Voicing
- Expert Piano Buying Guidance

**Features:**
- 🎨 Dark/Light theme support
- 📱 Fully responsive (mobile-first)
- 📧 EmailJS contact forms (2 forms)
- 💬 WhatsApp integration
- 🗺️ Google Maps embed
- 🎹 Interactive piano catalog (21 models)
- ⚡ Smooth animations (Framer Motion)
- 🔍 SEO optimized
- ♿ Accessibility compliant

---

## 🚀 Quick Start

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/piano-specialists-nairobi.git
cd piano-specialists-nairobi

# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local
# Edit .env.local with your credentials

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_CONSULTATION_TEMPLATE_ID=your_consultation_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Business Contact Information
NEXT_PUBLIC_WHATSAPP_NUMBER=254XXXXXXXXX
NEXT_PUBLIC_BUSINESS_EMAIL=info@pianospecialists.co.ke
```

**Note:** For production deployment, add these variables to your Vercel project settings.

---

## 📦 Tech Stack

### Core
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** ShadCN UI

### Libraries
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Email:** EmailJS
- **Icons:** Lucide React
- **Theme:** next-themes

### Deployment
- **Platform:** Vercel
- **CI/CD:** GitHub Actions

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── about/             # About page
│   ├── buying-guide/      # Buying guide page
│   ├── contact/           # Contact page
│   └── layout.tsx         # Root layout
├── components/
│   ├── forms/             # Form components
│   ├── layout/            # Header, Footer, Navbar
│   ├── sections/          # Page sections
│   ├── shared/            # Shared components
│   └── ui/                # ShadCN UI components
├── data/                  # Static data (services, pianos, etc.)
├── lib/                   # Utilities and helpers
└── types/                 # TypeScript type definitions
```

---

## 🎨 Design System

### Colors
- **Primary:** Black (#1a1a1a)
- **Background:** Ivory (#f5f5f0)
- **Accent:** Gold (#d4af37)

### Typography
- **Body:** Inter (Google Fonts)
- **Headings:** Playfair Display (Google Fonts)

### Theme
- Light mode (default)
- Dark mode (automatic switching)

---

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)

The project automatically deploys to Vercel when you push to GitHub:

```bash
# Push to main branch → Production deployment
git push origin main

# Push to other branches → Preview deployment
git push origin feature/new-feature
```

**Setup Required:**
1. Add 3 GitHub Secrets (Vercel credentials)
2. Add 6 Environment Variables in Vercel Dashboard

**📖 Full instructions:** See [GITHUB_ACTIONS_SETUP.md](./GITHUB_ACTIONS_SETUP.md)

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

---

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

---

## 📄 Pages

1. **Home** (`/`) - Hero, services overview, testimonials, CTA
2. **Services** (`/services`) - Detailed service descriptions
3. **About** (`/about`) - Company story, values, expertise
4. **Buying Guide** (`/buying-guide`) - 21 piano models, filtering, comparison
5. **Contact** (`/contact`) - Contact forms, map, contact info

---

## 📧 EmailJS Setup

The project uses EmailJS for contact forms. You need to:

1. Create an account at [EmailJS](https://www.emailjs.com)
2. Create 2 email templates:
   - **Contact Form Template** (general inquiries)
   - **Consultation Form Template** (piano buying consultation)
3. Add credentials to `.env.local` and Vercel

**📖 Full instructions:** See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)

---

## 📚 Documentation

### Setup & Deployment
- [GITHUB_ACTIONS_SETUP.md](./GITHUB_ACTIONS_SETUP.md) - Auto-deployment setup
- [VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md) - Manual deployment
- [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) - EmailJS configuration

### Project Details
- [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) - Quick reference guide
- [PRE_DEPLOYMENT_VERIFICATION.md](./PRE_DEPLOYMENT_VERIFICATION.md) - Pre-deployment checklist

### Planning Documents (in `/Docs`)
- Design system, components, tech stack, pages & routes

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Forms Not Sending
- Verify EmailJS credentials in `.env.local`
- Check EmailJS dashboard for quota limits
- Verify email templates exist

### Images Not Loading
- Ensure images are in `/public/images/`
- Check image paths in `src/data/images.ts`

---

## 📊 Performance

- **Lighthouse Score:** 90+ on all metrics
- **Build Time:** ~20-30 seconds
- **Page Load:** < 3 seconds
- **Bundle Size:** ~200-300 KB (gzipped)

---

## 🤝 Contributing

This is a client project. For internal development:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Push and create a pull request
5. Preview deployment will be created automatically

---

## 📞 Support

- **Documentation:** Check the docs folder
- **Issues:** Create a GitHub issue
- **Email:** Contact the development team

---

## 📄 License

Private project. All rights reserved.

---

## 🎉 Project Status

**Status:** ✅ Production Ready  
**Version:** 1.0.0  
**Last Updated:** January 2025

**Features Complete:**
- ✅ 5 pages fully functional
- ✅ 50+ custom components
- ✅ 21 piano models with filtering
- ✅ 2 EmailJS-integrated forms
- ✅ WhatsApp integration
- ✅ Google Maps integration
- ✅ Dark/light theme
- ✅ Mobile responsive
- ✅ SEO optimized
- ✅ Auto-deployment configured

---

**Built with ❤️ for The Piano Specialists Nairobi** 🎹