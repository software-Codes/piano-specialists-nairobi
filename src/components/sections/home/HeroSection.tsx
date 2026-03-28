"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { homeImages } from "@/data/images";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const stats = [
  { value: "500+", label: "Pianos Tuned" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Satisfaction" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] overflow-hidden md:min-h-[90vh]">

      {/* ── MOBILE: full-bleed background image ── */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src={homeImages.heroDark.src}
          alt={homeImages.heroDark.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* dark mode: heavy dark overlay / light mode: warm ivory overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/40 dark:from-black/95 dark:via-black/65 dark:to-black/40" />
        <div className="
          absolute inset-0
          bg-gradient-to-t from-[#FAF7F2]/95 via-[#FAF7F2]/60 to-[#FAF7F2]/20
          dark:hidden
        " />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent dark:from-black/40 dark:to-transparent" />
      </div>

      {/* ── LEFT PANEL ── */}
      <div className="
        relative z-10 flex w-full flex-col justify-center
        px-6 py-28
        md:w-1/2 md:px-16 lg:px-20
        md:bg-background
      ">
        {/* Gold vertical accent — desktop only */}
        <span className="absolute left-0 top-1/2 hidden h-40 w-[3px] -translate-y-1/2 bg-[#D4A017] md:block" />

        <div className="mx-auto w-full max-w-lg space-y-6 md:mx-0">

          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4A017]"
          >
            Nairobi&apos;s Trusted Piano Experts
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl
              [text-shadow:0_2px_12px_rgba(0,0,0,0.4)] md:[text-shadow:none]"
          >
            Expert Piano
            <br />
            Tuning
            <span className="block text-[#D4A017]">&amp; Servicing</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-base leading-relaxed text-foreground/70 md:text-lg"
          >
            Professional tuning, servicing, regulation, and expert buying
            guidance — bringing out the best in every instrument across Nairobi.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-3 pt-1"
          >
            <Button asChild size="lg" className="bg-[#D4A017] text-black hover:bg-[#E8B824]">
              <Link href="/services">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-foreground/30 text-foreground hover:bg-foreground/10"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex gap-6 border-t border-foreground/10 pt-6 sm:gap-10"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-2xl font-bold text-[#D4A017]">{s.value}</p>
                <p className="mt-0.5 text-xs text-foreground/50">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── RIGHT PANEL (desktop only) ── */}
      <div className="relative hidden md:block md:w-1/2">
        <Image
          src={homeImages.heroDark.src}
          alt={homeImages.heroDark.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="(min-width: 768px) 50vw, 0vw"
        />
        {/* Blend left edge into the panel */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent" />
        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 animate-bounce text-foreground/40" />
      </motion.div>
    </section>
  );
}
