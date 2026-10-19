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

export const heroImage = {
  src: "/images/hero-treatment.jpg",
  alt: "Esthetician applying a brightening facial mask to a client at Aurelle Skin Clinic",
};

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
  main: {
    src: "/images/about-clinic-main.jpg",
    alt: "Client receiving a relaxing facial treatment with a warm towel wrap at Aurelle Skin Clinic",
  },
  sub: {
    src: "/images/about-consultation-detail.jpg",
    alt: "Close-up of an esthetician's hands during a precise skincare consultation",
  },
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
  image: {
    src: "/images/doctor-portrait.jpg",
    alt: "Portrait of Dr. Elena Marchetti, board-certified dermatologist at Aurelle Skin Clinic",
  },
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
  alt: string;
  treatment: string;
  duration: string;
};

export const beforeAfterResults: BeforeAfter[] = [
  {
    image: "/images/result-laser-resurfacing.jpg",
    alt: "Skin texture result after a laser resurfacing treatment course",
    treatment: "Laser Resurfacing",
    duration: "3 sessions",
  },
  {
    image: "/images/result-acne-scar-program.jpg",
    alt: "Skin clarity result after an acne and scar treatment program",
    treatment: "Acne & Scar Program",
    duration: "12 weeks",
  },
  {
    image: "/images/result-skin-brightening.jpg",
    alt: "Skin tone result after a skin brightening peel course",
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
