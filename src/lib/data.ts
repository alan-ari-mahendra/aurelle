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
