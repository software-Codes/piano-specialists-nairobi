"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb } from "lucide-react";

import { Button } from "@/components/ui/button";
import { homeImages } from "@/data/images";

export function BuyingGuidanceHighlight() {
  return (
    <section className="section-space bg-muted/30">
      <div className="page-shell">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[3/2] overflow-hidden rounded-2xl lg:order-1"
          >
            <Image
              src={homeImages.buyingHighlight.src}
              alt={homeImages.buyingHighlight.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 lg:order-2"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <Lightbulb className="h-6 w-6 text-accent" />
            </div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Thinking of Buying a Piano?
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Choosing the right piano is a big decision. Our expert buying guide
              covers everything — from grand vs upright, acoustic vs digital, to
              budget considerations and common mistakes to avoid. Let us help you
              find the perfect instrument.
            </p>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent-light">
              <Link href="/buying-guide">
                Get Piano Buying Advice
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
