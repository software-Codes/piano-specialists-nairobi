import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { ContactPageSection } from "@/components/sections/contact/ContactPageSection";
import { Button } from "@/components/ui/button";
import { contactImages } from "@/data/images";

export const metadata = {
  title: "Contact Us | Piano Services Nairobi | Call +254 115 671 073",
  description:
    "Get in touch with Nairobi's piano experts. Book services, request consultations, or ask questions. Located in Lavington, Nairobi. Call +254 115 671 073 or WhatsApp us today.",
  keywords: [
    'contact piano tuner Nairobi',
    'piano services Lavington',
    'book piano tuning Nairobi',
    'piano consultation Kenya',
    'piano technician contact',
  ],
  alternates: {
    canonical: 'https://piano-specialists-nairobi.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact Us | Piano Services Nairobi',
    description:
      'Get in touch with Nairobi\'s piano experts. Book services or request consultations. Located in Lavington.',
    url: 'https://piano-specialists-nairobi.vercel.app/contact',
  },
};

export default function ContactPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "254115671073";

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative flex min-h-[52vh] items-center overflow-hidden md:min-h-[58vh]">
        <Image
          src={contactImages.hero.src}
          alt={contactImages.hero.alt}
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
              Contact Us
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s Talk
              <span className="block text-accent">About Your Piano</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Whether you need tuning, servicing, or expert buying advice — we're here to help. Reach out today.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] text-white hover:bg-[#20BD5A]"
              >
                <Link
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Link href="#form">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Page content ─────────────────────────────────────────── */}
      <div id="form">
        <ContactPageSection />
      </div>
    </>
  );
}
