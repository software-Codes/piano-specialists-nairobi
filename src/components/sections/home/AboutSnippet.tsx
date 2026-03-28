"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { homeImages } from "@/data/images";
import type { Stat } from "@/types";

const stats: Stat[] = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Pianos Tuned" },
  { value: "100%", label: "Client Satisfaction" },
];

export function AboutSnippet() {
  return (
    <section className="section-space bg-muted/30">
      <div className="page-shell">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              About Us
            </p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Passionate About Pianos Since Day One
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              The Piano Specialists Nairobi was founded with a simple mission — to
              provide world-class piano care right here in Nairobi. Whether you own
              a grand piano, an upright, or are looking to buy your first
              instrument, our team of experienced technicians is here to help.
            </p>

            <div className="flex flex-wrap gap-8 pt-2">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button asChild variant="outline" className="mt-2">
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[3/2] overflow-hidden rounded-2xl"
          >
            <Image
              src={homeImages.aboutSnippet.src}
              alt={homeImages.aboutSnippet.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
