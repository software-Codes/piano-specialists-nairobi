export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// ── Home Page ────────────────────────────────────────────────────────

export const homeImages = {
  hero: {
    src: "/images/hero-piano-keys.webp",
    alt: "Dramatic close-up of piano keys in moody lighting",
    width: 1920,
    height: 1080,
  },
  heroDark: {
    src: "/images/hero-piano-dark.webp",
    alt: "Piano keys with dark dramatic lighting",
    width: 1920,
    height: 1080,
  },
  aboutSnippet: {
    src: "/images/about-technician.webp",
    alt: "Piano technician tuning a piano",
    width: 1200,
    height: 800,
  },
  buyingHighlight: {
    src: "/images/guide-showroom.webp",
    alt: "Person browsing pianos in a showroom",
    width: 1200,
    height: 800,
  },
} as const satisfies Record<string, ImageAsset>;

// ── Services Page ────────────────────────────────────────────────────

export const servicesImages = {
  hero: {
    src: "/images/services-hero.webp",
    alt: "Piano strings and hammers interior view",
    width: 1920,
    height: 1080,
  },
  tuning: {
    src: "/images/service-tuning.webp",
    alt: "Piano tuning with professional tools",
    width: 1200,
    height: 800,
  },
  servicing: {
    src: "/images/service-servicing.webp",
    alt: "Piano keys being cleaned and maintained",
    width: 1200,
    height: 800,
  },
  regulation: {
    src: "/images/service-regulation.webp",
    alt: "Piano action mechanism close-up",
    width: 1200,
    height: 800,
  },
} as const satisfies Record<string, ImageAsset>;

// ── Buying Guide Page ────────────────────────────────────────────────

export const guideImages = {
  hero: {
    src: "/images/guide-hero.webp",
    alt: "Beautiful grand piano in an elegant room",
    width: 1920,
    height: 1080,
  },
  grandPiano: {
    src: "/images/guide-grand-piano.webp",
    alt: "Grand piano with open lid on stage",
    width: 1200,
    height: 800,
  },
  uprightPiano: {
    src: "/images/guide-upright-piano.webp",
    alt: "Classic upright piano in a home setting",
    width: 1200,
    height: 800,
  },
  digitalPiano: {
    src: "/images/guide-digital-piano.webp",
    alt: "Modern digital piano setup",
    width: 1200,
    height: 800,
  },
  showroom: {
    src: "/images/guide-showroom.webp",
    alt: "Customer browsing pianos in a showroom",
    width: 1200,
    height: 800,
  },
} as const satisfies Record<string, ImageAsset>;

// ── About Page ───────────────────────────────────────────────────────

export const aboutImages = {
  hero: {
    src: "/images/about-hero.webp",
    alt: "Close-up of hands playing piano keys",
    width: 1920,
    height: 1080,
  },
  story: {
    src: "/images/about-story.webp",
    alt: "Vintage piano in warm light",
    width: 1200,
    height: 800,
  },
  technician: {
    src: "/images/about-technician.webp",
    alt: "Piano technician with tools working on a piano",
    width: 1200,
    height: 800,
  },
} as const satisfies Record<string, ImageAsset>;

// ── Testimonials Page ────────────────────────────────────────────────

export const testimonialsImages = {
  hero: {
    src: "/images/testimonials-hero.webp",
    alt: "Piano keys with soft bokeh lighting",
    width: 1920,
    height: 1080,
  },
  cardsBg: {
    src: "/images/testimonials-bg.webp",
    alt: "Elegant wood grain texture",
    width: 1200,
    height: 800,
  },
} as const satisfies Record<string, ImageAsset>;

// ── Contact Page ─────────────────────────────────────────────────────

export const contactImages = {
  hero: {
    src: "/images/contact-nairobi.webp",
    alt: "Nairobi cityscape skyline",
    width: 1920,
    height: 1080,
  },
  studio: {
    src: "/images/contact-studio.webp",
    alt: "Piano in a professional studio space",
    width: 1200,
    height: 800,
  },
} as const satisfies Record<string, ImageAsset>;
