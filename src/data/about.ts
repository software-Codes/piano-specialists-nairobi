import { Award, Heart, Shield, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ValueItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
};

export type ClientType = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const ourStory = {
  headline: "Passion for Pianos, Commitment to Excellence",
  paragraphs: [
    "The Piano Specialists Nairobi was founded on a simple belief: every piano deserves expert care, and every pianist deserves an instrument that performs at its best. What started as a one-person operation has grown into Nairobi's most trusted piano service provider.",
    "With over 15 years of hands-on experience, we've tuned, serviced, and restored hundreds of pianos across homes, schools, churches, and concert halls. Our work is driven by a deep respect for the craftsmanship of these beautiful instruments and the musicians who play them.",
    "We don't just fix pianos — we help preserve musical heritage, support music education, and enable countless performances across Kenya.",
  ],
};

export const ourValues: ValueItem[] = [
  {
    icon: Award,
    title: "Expert Craftsmanship",
    description:
      "Every service is performed with precision, using professional-grade tools and techniques refined over years of practice.",
  },
  {
    icon: Heart,
    title: "Genuine Care",
    description:
      "We treat every piano as if it were our own, understanding the sentimental and musical value it holds for you.",
  },
  {
    icon: Shield,
    title: "Honest Advice",
    description:
      "We provide transparent assessments and recommendations — no upselling, no hidden costs, just honest expertise.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description:
      "We're proud to serve Nairobi's music community, from individual learners to schools and worship centers.",
  },
];

export const expertise = {
  headline: "Trained, Experienced, Trusted",
  description:
    "Our technicians combine formal training with real-world experience across all piano types — from vintage uprights to modern concert grands.",
  skills: [
    "Concert pitch tuning (A440 standard)",
    "Full mechanical regulation and voicing",
    "Soundboard and bridge inspection",
    "Action rebuilding and repair",
    "Pre-purchase piano evaluation",
    "Humidity and climate guidance for Nairobi conditions",
  ],
};

export const clientTypes: ClientType[] = [
  {
    icon: Users,
    title: "Homeowners",
    description:
      "Families who want their home piano to sound beautiful and inspire practice.",
  },
  {
    icon: Award,
    title: "Music Schools",
    description:
      "Institutions that need reliable, consistent maintenance for student instruments.",
  },
  {
    icon: Heart,
    title: "Churches & Worship Centers",
    description:
      "Faith communities who depend on their piano for weekly services and events.",
  },
  {
    icon: Shield,
    title: "Professional Musicians",
    description:
      "Pianists and teachers who demand concert-level tuning and regulation.",
  },
];

export const stats = [
  { value: "500+", label: "Pianos Serviced" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "50+", label: "Institutions Served" },
];
