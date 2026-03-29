import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/shared/Logo";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "Buying Guide", href: "/buying-guide" },
];

const companyLinks = [
  { title: "About", href: "/about" },
  { title: "Testimonials", href: "/#testimonials" },
  { title: "Contact", href: "/contact" },
];

const contactInfo = [
  { 
    icon: Phone, 
    label: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER 
      ? `+${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER.slice(0, 3)} ${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER.slice(3, 6)} ${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER.slice(6, 9)} ${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER.slice(9)}` 
      : "+254 700 000 000",
    href: `tel:+${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "254700000000"}` 
  },
  { icon: Mail, label: "info@pianospecialists.co.ke", href: "mailto:info@pianospecialists.co.ke" },
  { icon: MapPin, label: "Nairobi, Kenya", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="page-shell py-12 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Nairobi&apos;s trusted piano tuning, servicing, and buying guidance experts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-accent">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-accent">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-2.5">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent">
                    <item.icon className="h-4 w-4 shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gold separator + copyright */}
        <div className="mt-12 border-t border-accent/30 pt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} The Piano Specialists Nairobi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
