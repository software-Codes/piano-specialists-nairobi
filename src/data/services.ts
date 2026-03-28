import { icons } from "@/data/icons";
import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    id: "tuning",
    title: "Piano Tuning",
    description:
      "A piano goes out of tune naturally over time due to humidity, temperature changes, and regular playing. We use calibrated electronic tuning devices alongside trained ears to bring every string back to concert pitch — restoring the rich, resonant tone your piano was built to produce. Recommended every 6–12 months.",
    icon: icons.tuning,
  },
  {
    id: "servicing",
    title: "Piano Servicing",
    description:
      "Beyond tuning, a full service covers deep cleaning of keys and internal components, lubrication of moving parts, tightening of loose screws and pins, and inspection of the soundboard, bridges, and strings. Regular servicing extends your piano's lifespan and prevents costly repairs down the line.",
    icon: icons.servicing,
  },
  {
    id: "regulation",
    title: "Piano Regulation",
    description:
      "Regulation is the precise adjustment of the piano's mechanical action — the hammers, dampers, keys, and pedals. Over time these components shift and wear, causing uneven key response and inconsistent touch. Our regulation service restores the feel and playability that serious pianists and music teachers depend on.",
    icon: icons.regulation,
  },
  {
    id: "buying-guidance",
    title: "Buying Guidance",
    description:
      "Buying a piano is a significant investment. We provide honest, expert advice on choosing between grand, upright, and digital pianos — factoring in your budget, available space, skill level, and long-term goals. We also inspect second-hand pianos before purchase so you never buy blind.",
    icon: icons.buyingGuidance,
  },
];
