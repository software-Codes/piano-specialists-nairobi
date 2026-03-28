import type { LucideIcon } from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
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
