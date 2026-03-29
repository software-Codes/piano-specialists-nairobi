"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { homeImages } from "@/data/images";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.13, duration: 0.55, ease: "easeOut" as const },
  }),
};

const stats = [
  { value: "500+", label: "Pianos Tuned" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Satisfaction" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] overflow-hidden md:min-h-[92vh]">

      {/* ── MOBILE: full-bleed background ── */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src={homeImages.heroDark.src}
          alt={homeImages.heroDark.alt}
          fill
          priority
          className="object-cover object-[60%_center]"
          sizes="100vw"
        />
        {/* dark mode overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/60 to-black/30 dark:from-black/92 dark:via-black/60 dark:to-black/30" />
        {/* light mode warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2]/96 via-[#FAF7F2]/55 to-[#FAF7F2]/15 dark:hidden" />
      </div>

      {/* ── LEFT PANEL ── */}
      <div className="
        relative z-10 flex w-full flex-col justify-center
        px-6 py-24 sm:px-10
        md:w-[52%] md:px-14 lg:px-20
        md:bg-background
      ">
        {/* Gold left border accent — desktop */}
        <span className="absolute left-0 top-1/2 hidden h-32 w-[3px] -translate-y-1/2 rounded-r-full bg-accent md:block" />

        <div className="w-full max-w-xl space-y-5">

          {/* Eyebrow */}
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-accent"
          >
            Nairobi&apos;s Trusted Piano Experts
          </motion.p>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-heading text-[2.6rem] font-bold leading-[1.1] text-foreground
              sm:text-5xl lg:text-[3.5rem]
              [text-shadow:0_2px_16px_rgba(0,0,0,0.35)] md:[text-shadow:none]"
          >
            Expert Piano
            <br />
            Tuning &amp;
            <span className="block text-accent">Servicing</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-md text-base leading-relaxed text-foreground/65 md:text-[1.05rem]"
          >
            Professional tuning, servicing, regulation, and expert buying
            guidance — bringing out the best in every instrument across Nairobi.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-3 pt-1"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent-light"
            >
              <Link href="/services">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-foreground/25 text-foreground hover:bg-foreground/8 hover:border-foreground/40"
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
            className="pt-2"
          >
            <Separator className="mb-5 bg-foreground/10" />
            <div className="flex items-center gap-8 sm:gap-12">
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-8 sm:gap-12">
                  <div>
                    <p className="font-heading text-2xl font-bold text-accent sm:text-3xl">
                      {s.value}
                    </p>
                    <p className="mt-0.5 text-xs text-foreground/45 sm:text-sm">
                      {s.label}
                    </p>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="h-8 w-px bg-foreground/10" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── RIGHT PANEL — desktop only ── */}
      <div className="relative hidden md:block md:w-[48%]">
        <Image
          src={homeImages.heroDark.src}
          alt={homeImages.heroDark.alt}
          fill
          priority
          className="object-cover object-[55%_center]"
          sizes="48vw"
        />
        {/* Blend into left panel */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/10 to-transparent" />
        {/* Subtle bottom fade — lighter than before */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <ChevronDown className="h-5 w-5 animate-bounce text-foreground/30" />
      </motion.div>
    </section>
  );
}
