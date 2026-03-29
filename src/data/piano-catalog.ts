import type { LucideIcon } from "lucide-react";

export type PianoCategory = "grand" | "upright" | "digital";
export type BudgetTier = "entry" | "mid" | "premium";

export type PianoModel = {
  id: number;
  brand: string;
  model: string;
  category: PianoCategory;
  budgetTier: BudgetTier;
  priceRange: string;
  priceMin: number; // For filtering
  priceMax: number;
  size: string;
  description: string;
  pros: string[];
  cons: string[];
  bestFor: string[];
  availability: string;
  featured: boolean;
};

export const pianoCatalog: PianoModel[] = [
  // ── GRAND PIANOS ────────────────────────────────────────────────
  {
    id: 1,
    brand: "Yamaha",
    model: "C3X",
    category: "grand",
    budgetTier: "premium",
    priceRange: "KES 2,500,000 - 3,000,000",
    priceMin: 2500000,
    priceMax: 3000000,
    size: "6'1\" (186cm)",
    description:
      "Professional concert grand piano used in conservatories and concert halls worldwide. Exceptional tonal clarity and dynamic range.",
    pros: [
      "Concert-quality sound",
      "Responsive action",
      "Excellent for recording",
      "Strong resale value",
    ],
    cons: ["High investment", "Requires large space", "Professional maintenance needed"],
    bestFor: ["Concert halls", "Recording studios", "Advanced pianists", "Institutions"],
    availability: "Available through authorized Yamaha dealers in Nairobi",
    featured: false,
  },
  {
    id: 2,
    brand: "Kawai",
    model: "GL-30",
    category: "grand",
    budgetTier: "premium",
    priceRange: "KES 2,200,000 - 2,800,000",
    priceMin: 2200000,
    priceMax: 2800000,
    size: "6'1\" (186cm)",
    description:
      "Premium grand piano with warm, singing tone. Competitive alternative to Yamaha with excellent craftsmanship.",
    pros: [
      "Rich, warm tone",
      "Solid construction",
      "Competitive pricing vs Yamaha",
      "Excellent touch",
    ],
    cons: ["Fewer service technicians", "Lower brand recognition in Kenya"],
    bestFor: ["Professional musicians", "Music schools", "Churches", "Serious students"],
    availability: "Available through Kawai dealers, may require ordering",
    featured: false,
  },
  {
    id: 3,
    brand: "Yamaha",
    model: "GB1K",
    category: "grand",
    budgetTier: "mid",
    priceRange: "KES 1,200,000 - 1,500,000",
    priceMin: 1200000,
    priceMax: 1500000,
    size: "5'0\" (151cm) Baby Grand",
    description:
      "Compact baby grand that fits in homes while delivering authentic grand piano experience. Perfect balance of size and sound.",
    pros: [
      "True grand piano sound",
      "Fits in most living rooms",
      "Yamaha reliability",
      "Good resale value",
    ],
    cons: ["Smaller soundboard than larger grands", "Still requires significant space"],
    bestFor: ["Home pianists", "Small studios", "Teachers", "Serious hobbyists"],
    availability: "Available in Nairobi, popular model",
    featured: true,
  },
  {
    id: 4,
    brand: "Kawai",
    model: "GL-10",
    category: "grand",
    budgetTier: "mid",
    priceRange: "KES 1,000,000 - 1,300,000",
    priceMin: 1000000,
    priceMax: 1300000,
    size: "5'0\" (153cm) Baby Grand",
    description:
      "Affordable entry into grand piano ownership. Excellent value with warm Kawai tone and solid construction.",
    pros: [
      "Most affordable new grand",
      "Warm, pleasant tone",
      "Solid build quality",
      "Compact footprint",
    ],
    cons: ["Limited bass depth", "Smaller than professional grands"],
    bestFor: ["First-time grand buyers", "Home use", "Small venues", "Budget-conscious buyers"],
    availability: "Available through Kawai dealers",
    featured: true,
  },

  // ── UPRIGHT PIANOS ──────────────────────────────────────────────
  {
    id: 5,
    brand: "Yamaha",
    model: "U1",
    category: "upright",
    budgetTier: "premium",
    priceRange: "KES 450,000 - 650,000",
    priceMin: 450000,
    priceMax: 650000,
    size: "48\" (121cm)",
    description:
      "The industry standard professional upright. Found in music schools, studios, and homes worldwide. Legendary reliability and consistent tone.",
    pros: [
      "Industry standard quality",
      "Bulletproof reliability",
      "Excellent resale value",
      "Consistent tone across all registers",
      "Widely serviced in Kenya",
    ],
    cons: ["Premium price point", "Can sound bright (not warm)"],
    bestFor: ["Music schools", "Serious students", "Teachers", "Professional practice"],
    availability: "Readily available new and used in Nairobi",
    featured: true,
  },
  {
    id: 6,
    brand: "Kawai",
    model: "K-300",
    category: "upright",
    budgetTier: "premium",
    priceRange: "KES 500,000 - 700,000",
    priceMin: 500000,
    priceMax: 700000,
    size: "48\" (122cm)",
    description:
      "Premium upright with warmer tone than Yamaha U1. Excellent action and touch, preferred by many pianists for its singing quality.",
    pros: [
      "Warm, singing tone",
      "Excellent touch and action",
      "Solid construction",
      "Great for classical music",
    ],
    cons: ["Slightly higher price than U1", "Fewer technicians familiar with Kawai"],
    bestFor: ["Classical pianists", "Home use", "Teachers", "Recording"],
    availability: "Available through authorized dealers",
    featured: true,
  },
  {
    id: 7,
    brand: "Yamaha",
    model: "U3",
    category: "upright",
    budgetTier: "mid",
    priceRange: "KES 300,000 - 450,000",
    priceMin: 300000,
    priceMax: 450000,
    size: "52\" (131cm)",
    description:
      "Taller than U1 with richer bass and greater volume. Often available used from the 1980s-90s in excellent condition.",
    pros: [
      "Richer bass than U1",
      "Greater volume",
      "Excellent used market availability",
      "Professional quality",
    ],
    cons: ["Requires more ceiling height", "Used models need inspection"],
    bestFor: ["Churches", "Schools", "Large homes", "Professional practice"],
    availability: "Common in used market, occasionally new",
    featured: false,
  },
  {
    id: 8,
    brand: "Kawai",
    model: "K-15E",
    category: "upright",
    budgetTier: "mid",
    priceRange: "KES 250,000 - 350,000",
    priceMin: 250000,
    priceMax: 350000,
    size: "44\" (110cm)",
    description:
      "Compact upright perfect for apartments and smaller spaces. Maintains Kawai quality in a space-saving design.",
    pros: [
      "Compact size",
      "Good tone for size",
      "Affordable",
      "Fits in apartments",
    ],
    cons: ["Less bass depth", "Smaller soundboard"],
    bestFor: ["Apartments", "Small rooms", "Beginners", "Budget buyers"],
    availability: "Available through Kawai dealers",
    featured: false,
  },
  {
    id: 9,
    brand: "Boston",
    model: "UP-118E",
    category: "upright",
    budgetTier: "mid",
    priceRange: "KES 350,000 - 500,000",
    priceMin: 350000,
    priceMax: 500000,
    size: "46\" (118cm)",
    description:
      "Designed by Steinway & Sons, manufactured by Kawai. Excellent value combining Steinway design philosophy with Kawai craftsmanship.",
    pros: [
      "Steinway-designed",
      "Excellent value",
      "Warm tone",
      "Quality construction",
    ],
    cons: ["Less common in Kenya", "Limited service network"],
    bestFor: ["Home pianists", "Teachers", "Value seekers", "Classical music"],
    availability: "Limited availability, may require special order",
    featured: false,
  },
  {
    id: 10,
    brand: "Young Chang",
    model: "U-109",
    category: "upright",
    budgetTier: "entry",
    priceRange: "KES 150,000 - 200,000",
    priceMin: 150000,
    priceMax: 200000,
    size: "43\" (109cm)",
    description:
      "Korean-made upright offering decent quality at an affordable price. Good option for beginners not ready for premium brands.",
    pros: [
      "Affordable",
      "Decent build quality",
      "Good for beginners",
      "Compact size",
    ],
    cons: ["Lower resale value", "Tone not as refined", "Limited service network"],
    bestFor: ["Beginners", "Budget-conscious families", "Practice rooms"],
    availability: "Available through select dealers",
    featured: false,
  },
  {
    id: 11,
    brand: "Pearl River",
    model: "UP-110",
    category: "upright",
    budgetTier: "entry",
    priceRange: "KES 120,000 - 180,000",
    priceMin: 120000,
    priceMax: 180000,
    size: "43\" (110cm)",
    description:
      "Chinese-made upright, world's largest piano manufacturer. Best budget option for families wanting an acoustic piano.",
    pros: [
      "Most affordable new acoustic",
      "Decent tone for price",
      "Good for beginners",
      "Widely available",
    ],
    cons: ["Lower build quality", "Poor resale value", "May need frequent tuning"],
    bestFor: ["Absolute beginners", "Children learning", "Tight budgets"],
    availability: "Readily available in Nairobi",
    featured: true,
  },

  // ── DIGITAL PIANOS ──────────────────────────────────────────────
  {
    id: 12,
    brand: "Yamaha",
    model: "Clavinova CLP-775",
    category: "digital",
    budgetTier: "premium",
    priceRange: "KES 350,000 - 450,000",
    priceMin: 350000,
    priceMax: 450000,
    size: "Cabinet style with bench",
    description:
      "Top-tier digital piano with wooden keys and exceptional feel. Closest digital experience to an acoustic grand piano.",
    pros: [
      "Wooden keys (GrandTouch-S)",
      "Exceptional sound sampling",
      "Never needs tuning",
      "Headphone practice",
      "Built-in recording",
    ],
    cons: ["High price for digital", "Not portable", "Requires electricity"],
    bestFor: ["Serious students", "Home use", "Apartments", "Night practice"],
    availability: "Available at Yamaha dealers",
    featured: true,
  },
  {
    id: 13,
    brand: "Roland",
    model: "LX-708",
    category: "digital",
    budgetTier: "premium",
    priceRange: "KES 400,000 - 500,000",
    priceMin: 400000,
    priceMax: 500000,
    size: "Cabinet style with bench",
    description:
      "Roland's flagship home digital piano with hybrid wood/molded action. Stunning cabinet design and powerful sound system.",
    pros: [
      "Hybrid keyboard action",
      "Powerful speakers",
      "Beautiful cabinet",
      "Bluetooth connectivity",
    ],
    cons: ["Premium price", "Heavy (not portable)", "Complex features"],
    bestFor: ["Home pianists", "Audiophiles", "Modern homes", "Recording"],
    availability: "Available through Roland dealers",
    featured: false,
  },
  {
    id: 14,
    brand: "Kawai",
    model: "CA-99",
    category: "digital",
    budgetTier: "premium",
    priceRange: "KES 450,000 - 550,000",
    priceMin: 450000,
    priceMax: 550000,
    size: "Cabinet style with bench",
    description:
      "Kawai's top digital piano with Grand Feel III action. Wooden keys with exceptional touch and response.",
    pros: [
      "Best digital action available",
      "Wooden keys",
      "Superb sound quality",
      "OLED display",
    ],
    cons: ["Highest price tier", "Heavy", "May be overkill for beginners"],
    bestFor: ["Professional pianists", "Recording artists", "Serious practice"],
    availability: "Available through Kawai dealers",
    featured: false,
  },
  {
    id: 15,
    brand: "Yamaha",
    model: "P-515",
    category: "digital",
    budgetTier: "mid",
    priceRange: "KES 180,000 - 220,000",
    priceMin: 180000,
    priceMax: 220000,
    size: "Portable (88 keys)",
    description:
      "Professional portable digital piano. Perfect balance of portability, sound quality, and features. Industry standard for gigging.",
    pros: [
      "Portable yet professional",
      "Excellent key action",
      "Great sound engine",
      "USB audio interface",
      "Bluetooth connectivity",
    ],
    cons: ["Requires separate stand", "No built-in speakers (external recommended)"],
    bestFor: ["Gigging musicians", "Studios", "Teachers", "Multi-location use"],
    availability: "Readily available in Nairobi",
    featured: true,
  },
  {
    id: 16,
    brand: "Roland",
    model: "FP-90X",
    category: "digital",
    budgetTier: "mid",
    priceRange: "KES 200,000 - 250,000",
    priceMin: 200000,
    priceMax: 250000,
    size: "Portable (88 keys)",
    description:
      "Roland's flagship portable digital piano. Exceptional sound, feel, and features in a portable package.",
    pros: [
      "PHA-50 hybrid action",
      "Powerful built-in speakers",
      "Bluetooth audio/MIDI",
      "Portable",
    ],
    cons: ["Higher price than P-515", "Heavier than competitors"],
    bestFor: ["Professional gigging", "Home/studio use", "Churches", "Schools"],
    availability: "Available through Roland dealers",
    featured: true,
  },
  {
    id: 17,
    brand: "Casio",
    model: "Privia PX-S3100",
    category: "digital",
    budgetTier: "mid",
    priceRange: "KES 120,000 - 150,000",
    priceMin: 120000,
    priceMax: 150000,
    size: "Ultra-slim portable (88 keys)",
    description:
      "Modern, slim digital piano with Bluetooth and excellent portability. Perfect for contemporary homes and mobile musicians.",
    pros: [
      "Ultra-slim design",
      "Bluetooth audio",
      "Good key action",
      "Affordable",
      "Battery powered option",
    ],
    cons: ["Smaller speakers", "Lighter action than premium models"],
    bestFor: ["Modern homes", "Portability", "Casual players", "Small spaces"],
    availability: "Available at electronics stores",
    featured: true,
  },
  {
    id: 18,
    brand: "Yamaha",
    model: "P-45",
    category: "digital",
    budgetTier: "entry",
    priceRange: "KES 60,000 - 80,000",
    priceMin: 60000,
    priceMax: 80000,
    size: "Portable (88 keys)",
    description:
      "Best-selling beginner digital piano worldwide. Simple, reliable, and affordable. Perfect first piano for students.",
    pros: [
      "Most affordable Yamaha",
      "Reliable",
      "Weighted keys",
      "Portable",
      "Simple to use",
    ],
    cons: ["Basic features", "Small speakers", "No Bluetooth"],
    bestFor: ["Beginners", "Children", "Budget buyers", "First piano"],
    availability: "Widely available everywhere in Nairobi",
    featured: true,
  },
  {
    id: 19,
    brand: "Casio",
    model: "CDP-S110",
    category: "digital",
    budgetTier: "entry",
    priceRange: "KES 45,000 - 60,000",
    priceMin: 45000,
    priceMax: 60000,
    size: "Compact portable (88 keys)",
    description:
      "Ultra-affordable digital piano with 88 weighted keys. Great for absolute beginners on a tight budget.",
    pros: [
      "Very affordable",
      "Compact and light",
      "88 weighted keys",
      "USB connectivity",
    ],
    cons: ["Basic sound", "Light action", "Small speakers"],
    bestFor: ["Absolute beginners", "Children", "Tight budgets", "Casual use"],
    availability: "Available at electronics stores",
    featured: false,
  },
  {
    id: 20,
    brand: "Alesis",
    model: "Recital Pro",
    category: "digital",
    budgetTier: "entry",
    priceRange: "KES 35,000 - 50,000",
    priceMin: 35000,
    priceMax: 50000,
    size: "Portable (88 keys)",
    description:
      "Entry-level digital piano with hammer action keys. Best value for absolute beginners exploring if piano is right for them.",
    pros: [
      "Lowest price point",
      "88 hammer action keys",
      "Built-in speakers",
      "Lesson mode",
    ],
    cons: ["Basic build quality", "Limited sound quality", "Not for serious players"],
    bestFor: ["Trying out piano", "Young children", "Extreme budget constraints"],
    availability: "Available online and select stores",
    featured: false,
  },
  {
    id: 21,
    brand: "Korg",
    model: "B2",
    category: "digital",
    budgetTier: "entry",
    priceRange: "KES 50,000 - 70,000",
    priceMin: 50000,
    priceMax: 70000,
    size: "Portable (88 keys)",
    description:
      "Korg's entry-level digital piano with natural weighted action. Good alternative to Yamaha P-45 at similar price.",
    pros: [
      "Affordable",
      "Natural weighted action",
      "Multiple sounds",
      "Partner mode for teaching",
    ],
    cons: ["Basic features", "Average speakers"],
    bestFor: ["Beginners", "Students", "Budget buyers", "Practice"],
    availability: "Available at music stores",
    featured: false,
  },
];

// Featured pianos (10 best recommendations)
export const featuredPianos = pianoCatalog.filter((piano) => piano.featured);

// Filter helpers
export const getPianosByCategory = (category: PianoCategory) =>
  pianoCatalog.filter((piano) => piano.category === category);

export const getPianosByBudget = (tier: BudgetTier) =>
  pianoCatalog.filter((piano) => piano.budgetTier === tier);

export const getPianosByPriceRange = (min: number, max: number) =>
  pianoCatalog.filter((piano) => piano.priceMin >= min && piano.priceMax <= max);
