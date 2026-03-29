import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AboutPageSection } from "@/components/sections/about/AboutPageSection";
import { Button } from "@/components/ui/button";
import { aboutImages } from "@/data/images";

export const metadata = {
  title: "About Us | Piano Experts in Nairobi with 15+ Years Experience",
  description:
    "Learn about Nairobi's trusted piano service experts. Over 15 years of experience in tuning, servicing, and caring for pianos across Kenya. Serving schools, churches, and musicians.",
  keywords: [
    'piano technician Nairobi',
    'piano expert Kenya',
    'piano tuner Nairobi',
    'experienced piano technician',
    'Nairobi piano services',
  ],
  alternates: {
    canonical: 'https://piano-specialists-nairobi.vercel.app/about',
  },
  openGraph: {
    title: 'About Us | Piano Experts in Nairobi with 15+ Years Experience',
    description:
      'Over 15 years of experience in piano tuning, servicing, and care across Nairobi and Kenya.',
    url: 'https://piano-specialists-nairobi.vercel.app/about',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative flex min-h-[52vh] items-center overflow-hidden md:min-h-[58vh]">
        <Image
          src={aboutImages.hero.src}
          alt={aboutImages.hero.alt}
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
              About Us
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Nairobi&apos;s Trusted
              <span className="block text-accent">Piano Experts</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Over 15 years of passion, precision, and dedication to keeping pianos performing at their best.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent-light"
              >
                <Link href="/contact">
                  Work With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Page content ─────────────────────────────────────── */}
      <AboutPageSection />
    </>
  );
}
