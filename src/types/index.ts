import type { LucideIcon } from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  frequency?: string;
  icon: LucideIcon;
  image: { src: string; alt: string };
};

export type TestimonialItem = {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export type BuyingGuideTip = {
  title: string;
  description: string;
};

export type Stat = {
  value: string;
  label: string;
};
