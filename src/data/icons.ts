import {
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Settings2,
  SlidersHorizontal,
  Star,
  Sun,
  Wrench,
  X,
} from "lucide-react";

export const icons = {
  // Services
  tuning: Settings2,
  servicing: Wrench,
  regulation: SlidersHorizontal,
  buyingGuidance: Lightbulb,

  // Contact
  phone: Phone,
  email: Mail,
  location: MapPin,

  // Theme toggle
  dark: Moon,
  light: Sun,

  // Navigation
  menu: Menu,
  close: X,

  // UI
  arrow: ArrowRight,
  star: Star,
  check: CheckCircle2,
} as const;
