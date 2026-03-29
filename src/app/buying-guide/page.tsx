import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BuyingGuidePageSection } from "@/components/sections/buying-guide/BuyingGuidePageSection";
import { Button } from "@/components/ui/button";
import { guideImages } from "@/data/images";

export const metadata = {
  title: "Piano Buying Guide | The Piano Specialists Nairobi",
  description:
    "Expert piano buying advice for Nairobi. Compare grand, upright, and digital pianos. Budget guidance, checklists, and personalized recommendations.",
};

export default function BuyingGuidePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative flex min-h-[52vh] items-center overflow-hidden md:min-h-[58vh]">
        <Image
          src={guideImages.hero.src}
          alt={guideImages.hero.alt}
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
              Buying Guide
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Find Your
              <span className="block text-accent">Perfect Piano</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Expert guidance on choosing between grand, upright, and digital pianos. Compare models, budgets, and get personalized recommendations.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent-light"
              >
                <Link href="/contact?type=consultation">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Page content ─────────────────────────────────────────── */}
      <BuyingGuidePageSection />
    </>
  );
}
