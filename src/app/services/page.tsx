import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ServicesPageSection } from "@/components/sections/services/ServicesPageSection";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { servicesImages } from "@/data/images";

export const metadata = {
  title: "Services | The Piano Specialists Nairobi",
  description:
    "Professional piano tuning, servicing, regulation, and buying guidance in Nairobi. Expert care for every instrument.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative flex min-h-[52vh] items-center overflow-hidden md:min-h-[58vh]">
        <Image
          src={servicesImages.hero.src}
          alt={servicesImages.hero.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        <div className="relative z-10 w-full py-20">
          <div className="page-shell space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
              What We Offer
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Expert Piano Services
              <span className="block text-accent">In Nairobi</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              From precision tuning to full mechanical regulation — professional care for every piano, every time.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent-light"
              >
                <Link href="/contact">
                  Book a Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky service anchor nav ─────────────────────────── */}
      <div className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="page-shell">
          <nav
            aria-label="Services"
            className="flex gap-1 overflow-x-auto py-3 scrollbar-none"
          >
            {services.map((service) => (
              <Link
                key={service.id}
                href={`#${service.id}`}
                className="inline-flex shrink-0 items-center gap-2 rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent"
              >
                <service.icon className="h-3.5 w-3.5" />
                {service.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Page content ─────────────────────────────────────── */}
      <ServicesPageSection />
    </>
  );
}
