import { Music, Piano, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type PianoType = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  priceRange: string;
  pros: string[];
  cons: string[];
  bestFor: string[];
  image: string;
};

export const pianoTypes: PianoType[] = [
  {
    id: "grand",
    icon: Piano,
    title: "Grand Pianos",
    description:
      "The pinnacle of piano design. Horizontal soundboard and longer strings produce rich, powerful tone with exceptional dynamic range. Available from 5' baby grands to 9' concert grands.",
    priceRange: "KES 1,000,000 - 5,000,000+",
    pros: [
      "Superior sound quality and projection",
      "Best touch and responsiveness",
      "Impressive visual presence",
      "Excellent for performance and recording",
      "Strong resale value",
    ],
    cons: [
      "Requires significant floor space",
      "High initial investment",
      "Professional moving and maintenance needed",
      "May be too loud for apartments",
    ],
    bestFor: [
      "Concert halls and performance venues",
      "Recording studios",
      "Advanced pianists and professionals",
      "Spacious homes with dedicated music rooms",
    ],
    image: "/images/guide-grand-piano.webp",
  },
  {
    id: "upright",
    icon: Music,
    title: "Upright Pianos",
    description:
      "Vertical design saves space while maintaining acoustic piano authenticity. Ranges from compact 43\" models to professional 52\" uprights. The most popular choice for homes and institutions.",
    priceRange: "KES 120,000 - 700,000",
    pros: [
      "Space-efficient (fits against wall)",
      "Authentic acoustic piano experience",
      "Wide range of quality and price options",
      "Good resale value (especially Yamaha/Kawai)",
      "Suitable for most musical styles",
    ],
    cons: [
      "Requires regular tuning (2-4 times/year)",
      "Sensitive to humidity and temperature",
      "Can be loud for apartments",
      "Moving requires professionals",
    ],
    bestFor: [
      "Home pianists and families",
      "Music schools and teachers",
      "Churches and community centers",
      "Serious students and intermediate players",
    ],
    image: "/images/guide-upright-piano.webp",
  },
  {
    id: "digital",
    icon: Smartphone,
    title: "Digital Pianos",
    description:
      "Electronic pianos using sampled sounds and weighted keys to simulate acoustic pianos. Range from portable stage pianos to furniture-style cabinet models with advanced features.",
    priceRange: "KES 35,000 - 550,000",
    pros: [
      "Never needs tuning",
      "Volume control and headphone practice",
      "Portable options available",
      "Multiple sounds and features",
      "Recording and connectivity (USB, Bluetooth)",
      "Lower maintenance costs",
    ],
    cons: [
      "Not truly acoustic (sampled sound)",
      "Requires electricity",
      "Lower resale value",
      "Touch may feel different from acoustic",
      "Technology can become outdated",
    ],
    bestFor: [
      "Apartment dwellers",
      "Beginners exploring piano",
      "Gigging musicians needing portability",
      "Night practice and silent playing",
      "Modern homes with space constraints",
    ],
    image: "/images/guide-digital-piano.webp",
  },
];

export const budgetGuide = [
  {
    tier: "Entry Level",
    range: "Under KES 200,000",
    description: "Perfect for beginners, children, or those exploring if piano is right for them.",
    recommendations: [
      "Digital: Yamaha P-45, Casio CDP-S110, Alesis Recital Pro",
      "Acoustic: Pearl River UP-110, Young Chang U-109 (used)",
    ],
    advice:
      "Start with a quality digital piano to avoid maintenance costs. If buying acoustic, have it inspected by a technician first.",
  },
  {
    tier: "Mid-Range",
    range: "KES 200,000 - 500,000",
    description: "Serious students, teachers, and committed hobbyists. Noticeable quality improvement.",
    recommendations: [
      "Digital: Yamaha P-515, Roland FP-90X, Yamaha Clavinova CLP-775",
      "Acoustic: Yamaha U1, Kawai K-300, Boston UP-118E",
    ],
    advice:
      "This range offers excellent value. Yamaha U1 is the gold standard for acoustic uprights. For digital, consider cabinet models for home use.",
  },
  {
    tier: "Premium",
    range: "Over KES 500,000",
    description: "Professional musicians, institutions, and those seeking the finest instruments.",
    recommendations: [
      "Grand: Yamaha GB1K, Kawai GL-10, Yamaha C3X",
      "Digital: Kawai CA-99, Roland LX-708",
    ],
    advice:
      "At this level, try multiple instruments before buying. Consider room acoustics and long-term goals. Professional grands require climate control.",
  },
];

export const buyingChecklist = {
  newPianos: [
    "Play the piano yourself — test touch, tone, and responsiveness",
    "Check warranty coverage (typically 5-10 years for acoustic, 1-3 for digital)",
    "Confirm delivery, setup, and first tuning are included",
    "Ask about return/exchange policy",
    "Verify authorized dealer status (for Yamaha, Kawai, Roland, etc.)",
    "Compare prices across multiple dealers",
  ],
  usedPianos: [
    "Hire a piano technician for pre-purchase inspection (KES 5,000-10,000)",
    "Check for cracks in soundboard, bridges, or pinblock",
    "Test all 88 keys for sticking, buzzing, or dead notes",
    "Inspect hammers for wear, grooves, or moth damage",
    "Ask about tuning history (should be tuned 1-2x/year minimum)",
    "Verify serial number and age (avoid pianos over 40 years without restoration)",
    "Factor in moving costs (KES 15,000-30,000 in Nairobi)",
    "Budget for immediate tuning and possible repairs",
  ],
};

export const commonMistakes = [
  {
    mistake: "Buying Based on Looks Alone",
    explanation:
      "A beautiful cabinet doesn't guarantee good sound or playability. Always play the piano and assess its mechanical condition before deciding.",
  },
  {
    mistake: "Skipping Professional Inspection",
    explanation:
      "Used pianos can have hidden issues (cracked soundboard, worn hammers, loose pins). A KES 5,000 inspection can save you KES 100,000+ in repairs.",
  },
  {
    mistake: "Ignoring Room Acoustics",
    explanation:
      "A grand piano in a small, carpeted room will sound muffled. An upright in a large, empty room may sound harsh. Consider your space's acoustics.",
  },
  {
    mistake: "Underestimating Maintenance Costs",
    explanation:
      "Acoustic pianos need tuning 2-4 times/year (KES 5,000-8,000 each). Budget KES 20,000-30,000/year for maintenance. Digital pianos have minimal upkeep.",
  },
  {
    mistake: "Buying Too Cheap (or Too Expensive)",
    explanation:
      "A KES 50,000 'acoustic' piano is likely junk. But a beginner doesn't need a KES 2M grand. Match the piano to your current skill level and commitment.",
  },
  {
    mistake: "Not Considering Resale Value",
    explanation:
      "Yamaha and Kawai hold value well. Unknown Chinese brands depreciate quickly. If you might upgrade later, buy a brand with strong resale.",
  },
];

export const newVsUsed = {
  new: {
    pros: [
      "Full warranty coverage",
      "Latest technology (for digital)",
      "No hidden issues or wear",
      "Predictable condition",
    ],
    cons: [
      "Higher upfront cost",
      "Immediate depreciation",
      "Limited selection in Kenya",
    ],
  },
  used: {
    pros: [
      "Significant cost savings (30-60% off new)",
      "Vintage instruments can be excellent quality",
      "More options available",
      "Already depreciated",
    ],
    cons: [
      "Risk of hidden problems",
      "May need immediate repairs",
      "No warranty",
      "Requires expert inspection",
    ],
  },
  recommendation:
    "For beginners: Buy new digital or inspected used acoustic. For serious players: Quality used Yamaha/Kawai often better value than new budget brands. Always get used pianos inspected by a qualified technician.",
};
