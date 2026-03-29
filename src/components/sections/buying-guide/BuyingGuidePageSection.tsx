"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Filter,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  pianoCatalog,
  featuredPianos,
  type PianoCategory,
  type BudgetTier,
} from "@/data/piano-catalog";
import {
  pianoTypes,
  budgetGuide,
  buyingChecklist,
  commonMistakes,
  newVsUsed,
} from "@/data/piano-types";

/* ── Animation variants ─────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function BuyingGuidePageSection() {
  const [selectedCategory, setSelectedCategory] = useState<PianoCategory | "all">("all");
  const [selectedBudget, setSelectedBudget] = useState<BudgetTier | "all">("all");

  // Filter pianos
  const filteredPianos = pianoCatalog.filter((piano) => {
    const categoryMatch = selectedCategory === "all" || piano.category === selectedCategory;
    const budgetMatch = selectedBudget === "all" || piano.budgetTier === selectedBudget;
    return categoryMatch && budgetMatch;
  });

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedBudget("all");
  };

  const hasActiveFilters = selectedCategory !== "all" || selectedBudget !== "all";

  return (
    <>
      {/* ── Piano Types Comparison ────────────────────────────────── */}
      <section className="section-space">
        <div className="page-shell space-y-12">
          <SectionHeader
            eyebrow="Piano Types"
            title="Grand, Upright, or Digital?"
            description="Understanding the three main piano categories and which one suits your needs."
            centered
          />

          <div className="grid gap-8 lg:grid-cols-3">
            {pianoTypes.map((type, i) => (
              <motion.div
                key={type.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="group h-full overflow-hidden transition-shadow hover:shadow-gold">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={type.image}
                      alt={type.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/90">
                        <type.icon className="h-6 w-6 text-accent-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 p-6">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-card-foreground">
                        {type.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-accent">
                        {type.priceRange}
                      </p>
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {type.description}
                    </p>

                    <Separator />

                    {/* Pros */}
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground">
                        Advantages
                      </p>
                      <ul className="space-y-1.5">
                        {type.pros.slice(0, 3).map((pro) => (
                          <li key={pro} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                            <span className="text-xs text-muted-foreground">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Best For */}
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground">
                        Best For
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {type.bestFor.slice(0, 2).map((use) => (
                          <Badge
                            key={use}
                            variant="secondary"
                            className="text-xs"
                          >
                            {use}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Budget Guide ───────────────────────────────────────────── */}
      <section className="section-space bg-muted/30">
        <div className="page-shell space-y-12">
          <SectionHeader
            eyebrow="Budget Planning"
            title="What Can You Get at Each Price Point?"
            description="Realistic expectations for different budget ranges in the Nairobi market."
            centered
          />

          <div className="grid gap-6 md:grid-cols-3">
            {budgetGuide.map((guide, i) => (
              <motion.div
                key={guide.tier}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="h-full p-6">
                  <Badge className="mb-3 bg-accent text-accent-foreground">
                    {guide.tier}
                  </Badge>
                  <h3 className="font-heading text-2xl font-bold text-card-foreground">
                    {guide.range}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {guide.description}
                  </p>

                  <Separator className="my-4" />

                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Recommendations
                    </p>
                    {guide.recommendations.map((rec) => (
                      <p key={rec} className="text-sm leading-relaxed text-muted-foreground">
                        {rec}
                      </p>
                    ))}
                  </div>

                  <div className="mt-4 rounded-lg bg-accent/10 p-3">
                    <p className="text-xs font-medium text-accent">
                      💡 {guide.advice}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Pianos Catalog ────────────────────────────────── */}
      <section className="section-space">
        <div className="page-shell space-y-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <SectionHeader
              eyebrow="Piano Catalog"
              title="Explore Piano Options"
              description="Curated selection of pianos available in the Nairobi market with expert commentary."
            />

            {/* Filter Controls */}
            <div className="flex flex-wrap items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Button
                size="sm"
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
                className={selectedCategory === "all" ? "bg-accent text-accent-foreground" : ""}
              >
                All
              </Button>
              <Button
                size="sm"
                variant={selectedCategory === "grand" ? "default" : "outline"}
                onClick={() => setSelectedCategory("grand")}
                className={selectedCategory === "grand" ? "bg-accent text-accent-foreground" : ""}
              >
                Grand
              </Button>
              <Button
                size="sm"
                variant={selectedCategory === "upright" ? "default" : "outline"}
                onClick={() => setSelectedCategory("upright")}
                className={selectedCategory === "upright" ? "bg-accent text-accent-foreground" : ""}
              >
                Upright
              </Button>
              <Button
                size="sm"
                variant={selectedCategory === "digital" ? "default" : "outline"}
                onClick={() => setSelectedCategory("digital")}
                className={selectedCategory === "digital" ? "bg-accent text-accent-foreground" : ""}
              >
                Digital
              </Button>

              <Separator orientation="vertical" className="h-6" />

              <Button
                size="sm"
                variant={selectedBudget === "entry" ? "default" : "outline"}
                onClick={() => setSelectedBudget("entry")}
                className={selectedBudget === "entry" ? "bg-accent text-accent-foreground" : ""}
              >
                Entry
              </Button>
              <Button
                size="sm"
                variant={selectedBudget === "mid" ? "default" : "outline"}
                onClick={() => setSelectedBudget("mid")}
                className={selectedBudget === "mid" ? "bg-accent text-accent-foreground" : ""}
              >
                Mid
              </Button>
              <Button
                size="sm"
                variant={selectedBudget === "premium" ? "default" : "outline"}
                onClick={() => setSelectedBudget("premium")}
                className={selectedBudget === "premium" ? "bg-accent text-accent-foreground" : ""}
              >
                Premium
              </Button>

              {hasActiveFilters && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={clearFilters}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="mr-1 h-3 w-3" />
                  Clear
                </Button>
              )}
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-muted-foreground">
            Showing {filteredPianos.length} of {pianoCatalog.length} pianos
          </p>

          {/* Piano Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPianos.map((piano, i) => (
              <motion.div
                key={piano.id}
                custom={i % 6}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="group h-full overflow-hidden transition-shadow hover:shadow-gold">
                  <div className="space-y-4 p-5">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-heading text-lg font-bold text-card-foreground">
                          {piano.brand} {piano.model}
                        </h3>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {piano.size}
                        </p>
                      </div>
                      {piano.featured && (
                        <Badge className="bg-accent text-accent-foreground">
                          Featured
                        </Badge>
                      )}
                    </div>

                    {/* Price */}
                    <p className="font-heading text-xl font-bold text-accent">
                      {piano.priceRange}
                    </p>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {piano.description}
                    </p>

                    <Separator />

                    {/* Pros (top 3) */}
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground">
                        Key Features
                      </p>
                      <ul className="space-y-1.5">
                        {piano.pros.slice(0, 3).map((pro) => (
                          <li key={pro} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                            <span className="text-xs text-muted-foreground">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Best For */}
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground">
                        Best For
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {piano.bestFor.slice(0, 2).map((use) => (
                          <Badge
                            key={use}
                            variant="secondary"
                            className="text-xs"
                          >
                            {use}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Availability */}
                    <p className="text-xs text-muted-foreground">
                      📍 {piano.availability}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPianos.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">
                No pianos match your filters. Try adjusting your selection.
              </p>
              <Button
                onClick={clearFilters}
                variant="outline"
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* ── New vs Used ────────────────────────────────────────────── */}
      <section className="section-space bg-muted/30">
        <div className="page-shell space-y-8">
          <SectionHeader
            eyebrow="Buying Decision"
            title="New vs Used Pianos"
            description="Understanding the trade-offs to make the right choice for your situation."
            centered
          />

          <div className="grid gap-6 md:grid-cols-2">
            {/* New Pianos */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full p-6">
                <h3 className="font-heading text-xl font-bold text-card-foreground">
                  New Pianos
                </h3>
                <Separator className="my-4" />
                <div className="space-y-4">
                  <div>
                    <p className="mb-2 text-sm font-semibold text-foreground">
                      ✅ Advantages
                    </p>
                    <ul className="space-y-2">
                      {newVsUsed.new.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span className="text-sm text-muted-foreground">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-semibold text-foreground">
                      ⚠️ Considerations
                    </p>
                    <ul className="space-y-2">
                      {newVsUsed.new.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2">
                          <span className="mt-0.5 text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Used Pianos */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full p-6">
                <h3 className="font-heading text-xl font-bold text-card-foreground">
                  Used Pianos
                </h3>
                <Separator className="my-4" />
                <div className="space-y-4">
                  <div>
                    <p className="mb-2 text-sm font-semibold text-foreground">
                      ✅ Advantages
                    </p>
                    <ul className="space-y-2">
                      {newVsUsed.used.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span className="text-sm text-muted-foreground">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-semibold text-foreground">
                      ⚠️ Considerations
                    </p>
                    <ul className="space-y-2">
                      {newVsUsed.used.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2">
                          <span className="mt-0.5 text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Recommendation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-accent/20 bg-accent/5 p-6"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Our Recommendation
            </p>
            <p className="mt-2 leading-relaxed text-foreground">
              {newVsUsed.recommendation}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Buying Checklist ───────────────────────────────────────── */}
      <section className="section-space">
        <div className="page-shell space-y-8">
          <SectionHeader
            eyebrow="Before You Buy"
            title="Essential Buying Checklist"
            description="What to inspect and verify before making your purchase decision."
            centered
          />

          <div className="grid gap-6 md:grid-cols-2">
            {/* New Pianos Checklist */}
            <Card className="p-6">
              <h3 className="font-heading text-lg font-bold text-card-foreground">
                Buying New Pianos
              </h3>
              <Separator className="my-4" />
              <ul className="space-y-3">
                {buyingChecklist.newPianos.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Used Pianos Checklist */}
            <Card className="p-6">
              <h3 className="font-heading text-lg font-bold text-card-foreground">
                Buying Used Pianos
              </h3>
              <Separator className="my-4" />
              <ul className="space-y-3">
                {buyingChecklist.usedPianos.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Common Mistakes ─────────────────────────────────────────── */}
      <section className="section-space bg-muted/30">
        <div className="page-shell space-y-8">
          <SectionHeader
            eyebrow="Avoid These"
            title="Common Piano Buying Mistakes"
            description="Learn from others' experiences and avoid costly errors."
            centered
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {commonMistakes.map((mistake, i) => (
              <motion.div
                key={mistake.mistake}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="h-full p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-card-foreground">
                    {mistake.mistake}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {mistake.explanation}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ─────────────────────────────────────────────── */}
      <section className="section-space">
        <div className="page-shell">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl rounded-2xl border border-accent/20 bg-accent/5 px-8 py-12 text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Need Expert Guidance?
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Let Us Help You Find the Perfect Piano
            </h2>
            <p className="mt-4 text-muted-foreground">
              Not sure which piano is right for you? Fill out our consultation form and we'll provide personalized recommendations based on your budget, space, and musical goals.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
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
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
