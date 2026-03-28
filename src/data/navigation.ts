import type { NavItem } from "@/types";

// Home excluded — Logo links back to /
// Testimonials excluded — surfaced via home snippet and About page
export const navigationItems: NavItem[] = [
  { title: "Services", href: "/services" },
  { title: "Buying Guide", href: "/buying-guide" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];
