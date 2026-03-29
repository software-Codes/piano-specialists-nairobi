import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { WhatsAppFAB } from "@/components/shared/WhatsAppFAB";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://piano-specialists-nairobi.vercel.app'),
  title: {
    default: 'The Piano Specialists Nairobi | Expert Piano Tuning & Services',
    template: '%s | The Piano Specialists Nairobi',
  },
  description:
    'Professional piano tuning, servicing, regulation, and expert buying guidance in Nairobi, Kenya. Over 15 years of experience. Trusted by schools, churches, and musicians.',
  keywords: [
    'piano tuning Nairobi',
    'piano servicing Kenya',
    'piano repair Nairobi',
    'piano technician Kenya',
    'piano regulation Nairobi',
    'piano voicing Kenya',
    'buy piano Nairobi',
    'piano buying guide Kenya',
    'piano maintenance Nairobi',
    'grand piano tuning',
    'upright piano servicing',
    'digital piano advice',
    'piano expert Nairobi',
    'piano tuner Kenya',
    'Lavington piano services',
  ],
  authors: [{ name: 'The Piano Specialists Nairobi' }],
  creator: 'The Piano Specialists Nairobi',
  publisher: 'The Piano Specialists Nairobi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://piano-specialists-nairobi.vercel.app',
    siteName: 'The Piano Specialists Nairobi',
    title: 'The Piano Specialists Nairobi | Expert Piano Tuning & Services',
    description:
      'Professional piano tuning, servicing, regulation, and expert buying guidance in Nairobi, Kenya. Over 15 years of experience.',
    images: [
      {
        url: '/images/hero-piano-dark.webp',
        width: 1200,
        height: 630,
        alt: 'The Piano Specialists Nairobi - Professional Piano Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Piano Specialists Nairobi | Expert Piano Tuning & Services',
    description:
      'Professional piano tuning, servicing, regulation, and expert buying guidance in Nairobi, Kenya.',
    images: ['/images/hero-piano-dark.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://piano-specialists-nairobi.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <WhatsAppFAB />
        </ThemeProvider>
      </body>
    </html>
  );
}
