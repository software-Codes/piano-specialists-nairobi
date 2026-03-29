import { icons } from "@/data/icons";
import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    id: "tuning",
    title: "Piano Tuning",
    tagline: "Restore concert-perfect pitch to every string.",
    description:
      "A piano goes out of tune naturally over time due to humidity, temperature changes, and regular playing. We use calibrated electronic tuning devices alongside trained ears to bring every string back to concert pitch — restoring the rich, resonant tone your piano was built to produce.",
    bullets: [
      "Calibrated electronic + ear tuning to A440 concert pitch",
      "Pitch raise for severely flat or sharp instruments",
      "Full 88-key string assessment included",
      "Humidity and environment advice provided",
      "Recommended every 6–12 months",
    ],
    frequency: "Every 6–12 months",
    icon: icons.tuning,
    image: {
      src: "/images/service-tuning.webp",
      alt: "Piano tuning with professional tools",
    },
  },
  {
    id: "servicing",
    title: "Piano Servicing",
    tagline: "Deep care that extends your piano's life.",
    description:
      "Beyond tuning, a full service covers deep cleaning of keys and internal components, lubrication of moving parts, tightening of loose screws and pins, and thorough inspection of the soundboard, bridges, and strings. Regular servicing prevents costly repairs and keeps your instrument performing at its best.",
    bullets: [
      "Deep cleaning of keys, hammers, and internal components",
      "Lubrication of all moving mechanical parts",
      "Tightening of loose tuning pins, screws, and hinges",
      "Soundboard, bridge, and string inspection",
      "Written condition report provided after service",
    ],
    frequency: "Every 1–2 years",
    icon: icons.servicing,
    image: {
      src: "/images/service-servicing.webp",
      alt: "Piano keys being cleaned and maintained",
    },
  },
  {
    id: "regulation",
    title: "Piano Regulation",
    tagline: "Precision action adjustment for serious players.",
    description:
      "Regulation is the precise adjustment of the piano's mechanical action — the hammers, dampers, keys, and pedals. Over time these components shift and wear, causing uneven key response and inconsistent touch. Our regulation service restores the feel and playability that serious pianists and music teachers depend on.",
    bullets: [
      "Full action regulation — hammers, dampers, and repetition levers",
      "Key levelling and weighting for even touch",
      "Pedal mechanism adjustment and alignment",
      "Voicing of hammers for tonal balance",
      "Ideal for schools, churches, and professional pianists",
    ],
    frequency: "Every 3–5 years",
    icon: icons.regulation,
    image: {
      src: "/images/service-regulation.webp",
      alt: "Piano action mechanism close-up",
    },
  },
  {
    id: "buying-guidance",
    title: "Buying Guidance",
    tagline: "Expert advice so you never buy blind.",
    description:
      "Buying a piano is a significant investment. We provide honest, expert advice on choosing between grand, upright, and digital pianos — factoring in your budget, available space, skill level, and long-term goals. We also inspect second-hand pianos before purchase so you make a confident, informed decision.",
    bullets: [
      "Personalised consultation — in person or via WhatsApp",
      "Pre-purchase inspection of second-hand instruments",
      "Grand vs upright vs digital — unbiased comparison",
      "Budget, space, and skill-level guidance",
      "Brand and dealer recommendations for Nairobi market",
    ],
    icon: icons.buyingGuidance,
    image: {
      src: "/images/guide-showroom.webp",
      alt: "Customer browsing pianos in a showroom",
    },
  },
];
