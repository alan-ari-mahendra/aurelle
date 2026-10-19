export type Treatment = {
  number: string;
  name: string;
  description: string;
  priceFrom: string;
};

export const treatments: Treatment[] = [
  {
    number: "01",
    name: "Hydrafacial",
    description:
      "Deep cleanse, exfoliate and hydrate in one 45-minute session. No downtime, instant glow.",
    priceFrom: "$149",
  },
  {
    number: "02",
    name: "Laser Resurfacing",
    description:
      "Smooth texture, fade sun damage and fine lines with fractional CO2 technology.",
    priceFrom: "$390",
  },
  {
    number: "03",
    name: "Dermal Fillers",
    description:
      "Restore volume and definition with subtle, natural-looking hyaluronic acid fillers.",
    priceFrom: "$520",
  },
  {
    number: "04",
    name: "Chemical Peel",
    description:
      "Medical-grade peels to brighten tone, reduce pigmentation and refine pores.",
    priceFrom: "$180",
  },
  {
    number: "05",
    name: "Microneedling",
    description:
      "Stimulate collagen for firmer skin and visibly reduced acne scars and stretch marks.",
    priceFrom: "$260",
  },
  {
    number: "06",
    name: "Anti-Wrinkle",
    description:
      "Soften expression lines on the forehead, frown and eye area with precise injectables.",
    priceFrom: "$240",
  },
];

export type Testimonial = {
  name: string;
  context: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah K.",
    context: "Dermal fillers, 2 visits",
    quote:
      "I came in nervous about fillers and left with exactly what I wanted: nobody noticed, but everyone said I looked rested. Dr. Marchetti is incredibly honest.",
    rating: 5,
  },
  {
    name: "Daniel R.",
    context: "Laser resurfacing",
    quote:
      "Three laser sessions and my acne scars are barely visible. The consultation alone was worth it, they explained everything without upselling.",
    rating: 5,
  },
  {
    name: "Amira L.",
    context: "Chemical peel program",
    quote:
      "Finally a clinic that told me no. They refused a treatment I asked for and recommended something gentler. My skin has never looked better.",
    rating: 5,
  },
];

export type OpeningHour = {
  day: string;
  time: string;
  closed?: boolean;
};

export const hours: OpeningHour[] = [
  { day: "Monday to Friday", time: "9:00 AM to 7:00 PM" },
  { day: "Saturday", time: "10:00 AM to 4:00 PM" },
  { day: "Sunday", time: "Closed", closed: true },
  { day: "Location", time: "240 Fillmore St, San Francisco" },
];

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Treatments", href: "#treatments" },
  { label: "Our Doctor", href: "#doctor" },
  { label: "Results", href: "#results" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#book" },
];

export const clinicInfo = {
  name: "Aurelle",
  phone: "+1 (415) 555 0182",
  email: "hello@aurelleclinic.com",
  address: "240 Fillmore St, SF",
  foundedYear: 2011,
};

// Temporary stock placeholders from the HTML prototype, swap for real
// clinic photography in `public/images` before the WordPress rebuild.
export const heroImage =
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80";

export const treatmentPills: string[] = [
  "Laser Resurfacing",
  "Hydrafacial",
  "Dermal Fillers",
  "Chemical Peel",
  "Microneedling",
  "Acne & Scars",
  "Anti-Wrinkle",
  "Skin Brightening",
  "Collagen Boost",
  "Laser Hair Removal",
];

export const aboutImages = {
  main: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80",
  sub: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80",
};

export const aboutCopy =
  "We believe great skin is the result of science, patience and care. Every treatment plan starts with a thorough skin analysis, so you only receive what your skin actually needs.";

export type Stat = {
  value: string;
  label: string;
};

export const aboutStats: Stat[] = [
  { value: "15+", label: "Years of practice" },
  { value: "10k", label: "Happy clients" },
  { value: "32", label: "Treatments offered" },
];

export const doctor = {
  name: "Dr. Elena Marchetti",
  title: "Board-certified dermatologist",
  image:
    "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80",
  bio: [
    "Dr. Marchetti has spent over fifteen years in medical and aesthetic dermatology, with a focus on conservative, long-term skin health rather than quick fixes.",
    "Every first visit includes a 30-minute consultation and digital skin analysis, so your plan is built on evidence, not assumptions.",
  ],
  credentials: [
    "MD, Dermatology",
    "American Board of Dermatology",
    "ASDS Member",
    "Laser Safety Certified",
  ],
  quote:
    "The best treatment is the one you barely notice, except in how confident you feel.",
};

export type Reason = {
  number: string;
  title: string;
  description: string;
};

export const reasons: Reason[] = [
  {
    number: "01",
    title: "Medical oversight on every visit",
    description:
      "All treatments are supervised by a licensed dermatologist, not sales staff. You always know who is treating you.",
  },
  {
    number: "02",
    title: "Honest, no-pressure plans",
    description:
      "We will tell you when a treatment is not right for you. Our consultations are about your skin, not our quotas.",
  },
  {
    number: "03",
    title: "Technology that is actually proven",
    description:
      "Only FDA-cleared devices and clinically studied protocols. New does not mean better, and we test before we adopt.",
  },
];

export type BeforeAfter = {
  image: string;
  treatment: string;
  duration: string;
};

export const beforeAfterResults: BeforeAfter[] = [
  {
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80",
    treatment: "Laser Resurfacing",
    duration: "3 sessions",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    treatment: "Acne & Scar Program",
    duration: "12 weeks",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=800&q=80",
    treatment: "Skin Brightening Peel",
    duration: "4 sessions",
  },
];

export const footerClinicLinks: string[] = [
  "About",
  "Our Doctor",
  "Results",
  "Reviews",
  "Careers",
];

export const socialLinks: string[] = ["IG", "FB", "TT"];

export const treatmentOptions: string[] = [
  "Consultation",
  "Hydrafacial",
  "Laser Resurfacing",
  "Dermal Fillers",
];
