import {
  Sparkles,
  Building2,
  Home,
  Sofa,
  WashingMachine,
  PaintBucket,
  Wind,
  ShieldCheck,
  Clock,
  Leaf,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Precision Cleaning Services",
  shortName: "Precision Cleaning",
  tagline: "Spotless Spaces, Precision Results",
  phone: "(555) 010-2847",
  email: "hello@precisioncleaning.com",
  address: "482 Harbor View Drive, Suite 200, Austin, TX 78701",
  hours: "Mon - Sat: 7:00 AM - 7:00 PM",
  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  shortDescription: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "residential-cleaning",
    title: "Residential Cleaning",
    icon: Home,
    shortDescription:
      "Recurring or one-time house cleaning tailored to your routine.",
    description:
      "From weekly tidy-ups to deep seasonal resets, our residential teams treat every home like their own — covering kitchens, bathrooms, living spaces, and bedrooms with eco-friendly products.",
    features: [
      "Flexible weekly, bi-weekly & monthly plans",
      "Eco-friendly, pet & family safe products",
      "Trained, background-checked cleaners",
      "Satisfaction guarantee on every visit",
    ],
  },
  {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning",
    icon: Building2,
    shortDescription:
      "Reliable office & facility cleaning that keeps business moving.",
    description:
      "Keep your workplace welcoming and hygienic with after-hours or scheduled commercial cleaning for offices, retail spaces, gyms, and medical facilities.",
    features: [
      "Custom cleaning schedules around your hours",
      "Restrooms, break rooms & common areas",
      "Floor care: vacuuming, mopping & polishing",
      "Supply restocking & trash management",
    ],
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    icon: Sparkles,
    shortDescription:
      "An intensive top-to-bottom clean for homes that need extra care.",
    description:
      "Our deep clean tackles built-up grime in every corner — baseboards, vents, behind appliances, grout lines, and more — perfect for spring cleaning or a seasonal refresh.",
    features: [
      "Inside oven, fridge & cabinet cleaning",
      "Baseboards, vents & light fixtures",
      "Grout, tile & bathroom descaling",
      "Detailed dusting of every surface",
    ],
  },
  {
    slug: "move-in-move-out",
    title: "Move In / Move Out",
    icon: WashingMachine,
    shortDescription:
      "Spotless turnovers for renters, owners, landlords & agents.",
    description:
      "Hand over or take possession of a property with confidence. We clean every empty room top to bottom so it's ready for inspection, photos, or new tenants.",
    features: [
      "Full interior cabinet & closet cleaning",
      "Wall spot cleaning & switch plates",
      "Appliance interior & exterior detailing",
      "Same-day & next-day availability",
    ],
  },
  {
    slug: "carpet-upholstery",
    title: "Carpet & Upholstery",
    icon: Sofa,
    shortDescription:
      "Steam cleaning & stain removal for carpets, rugs & furniture.",
    description:
      "Restore the look and feel of carpets, area rugs, sofas, and chairs with hot water extraction and targeted stain treatments that lift dirt without damaging fibers.",
    features: [
      "Hot water extraction deep cleaning",
      "Pet stain & odor treatment",
      "Upholstery-safe fabric cleaning",
      "Fast-dry techniques",
    ],
  },
  {
    slug: "post-construction",
    title: "Post-Construction",
    icon: PaintBucket,
    shortDescription:
      "Dust and debris removal after renovations or new builds.",
    description:
      "Renovation dust gets everywhere. We clear fine particles from every surface, fixture, and corner so your newly built or remodeled space is move-in ready.",
    features: [
      "Fine dust removal from all surfaces",
      "Window track & frame cleaning",
      "Floor protection film removal & cleanup",
      "Final detail polish before handover",
    ],
  },
  {
    slug: "window-cleaning",
    title: "Window Cleaning",
    icon: Wind,
    shortDescription: "Streak-free interior & exterior window care.",
    description:
      "Let the light in with crystal-clear windows, tracks, and sills cleaned using professional-grade, streak-free techniques for homes and offices alike.",
    features: [
      "Interior & exterior glass cleaning",
      "Sills, tracks & frame detailing",
      "Screen cleaning on request",
      "High-rise & multi-story options",
    ],
  },
  {
    slug: "sanitization",
    title: "Sanitization & Disinfection",
    icon: ShieldCheck,
    shortDescription: "Hospital-grade disinfection for peace of mind.",
    description:
      "Targeted sanitization of high-touch surfaces using hospital-grade, EPA-approved disinfectants — ideal for offices, clinics, schools, and homes.",
    features: [
      "EPA-approved disinfectants",
      "High-touch point focus (handles, switches)",
      "Electrostatic spraying available",
      "Logged service reports on request",
    ],
  },
];

export type PricingPlan = {
  name: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Essential",
    price: "$99",
    unit: "per visit",
    description: "A reliable standard clean for everyday upkeep.",
    features: [
      "Up to 2 bedrooms / 2 bathrooms",
      "Kitchen & living area cleaning",
      "Dusting, vacuuming & mopping",
      "Trash removal",
      "Standard eco-friendly products",
    ],
  },
  {
    name: "Signature",
    price: "$179",
    unit: "per visit",
    description: "Our most popular plan for homes that need a deeper touch.",
    features: [
      "Up to 4 bedrooms / 3 bathrooms",
      "Everything in Essential",
      "Inside microwave & appliance fronts",
      "Baseboards & door frame detailing",
      "Bed making & linen tidy-up",
      "Priority scheduling",
    ],
    highlighted: true,
  },
  {
    name: "Commercial",
    price: "Custom",
    unit: "tailored quote",
    description: "Scalable cleaning programs for offices & facilities.",
    features: [
      "Flexible after-hours scheduling",
      "Dedicated account manager",
      "Restroom & breakroom sanitation",
      "Floor care & trash management",
      "Monthly service reporting",
      "Volume-based pricing",
    ],
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner, Westlake Hills",
    quote:
      "Precision Cleaning has been a game changer for our family. The team is punctual, thorough, and always leaves our home smelling fresh. Couldn't ask for better service.",
    rating: 5,
    avatar: "/images/testimonials/sarah-mitchell.jpg",
  },
  {
    name: "David Chen",
    role: "Office Manager, Brightline Co.",
    quote:
      "We switched our office cleaning to Precision six months ago and the difference is night and day. Reliable, professional, and our staff have noticed immediately.",
    rating: 5,
    avatar: "/images/testimonials/david-chen.jpg",
  },
  {
    name: "Maria Lopez",
    role: "Property Manager",
    quote:
      "Their move-out cleaning service helps us turn over units faster than ever. Every unit comes back spotless and inspection-ready. Highly recommend for landlords.",
    rating: 5,
    avatar: "/images/testimonials/maria-lopez.jpg",
  },
  {
    name: "James Patterson",
    role: "Homeowner, Downtown Loft",
    quote:
      "Booking was effortless and the deep clean exceeded expectations — places I didn't even think to clean were spotless. Worth every penny.",
    rating: 5,
    avatar: "/images/testimonials/james-patterson.jpg",
  },
];

export type Stat = {
  label: string;
  value: string;
};

export const stats: Stat[] = [
  { label: "Happy Clients", value: "4,800+" },
  { label: "Years of Experience", value: "12+" },
  { label: "Trained Cleaners", value: "85+" },
  { label: "Cities Served", value: "9" },
];

export type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const values: Value[] = [
  {
    icon: BadgeCheck,
    title: "Reliability",
    description:
      "We show up on time, every time, with the same dedication to quality on every visit.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious",
    description:
      "Green-certified products that are tough on dirt but gentle on your family, pets, and the planet.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Safety",
    description:
      "Every team member is background-checked, insured, and trained to the highest standards.",
  },
  {
    icon: Clock,
    title: "Time-Saving",
    description:
      "Flexible scheduling that fits your life, so you can focus on what matters most.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    name: "Olivia Bennett",
    role: "Founder & CEO",
    bio: "Started Precision Cleaning in 2013 with a single van and a passion for spotless spaces.",
  },
  {
    name: "Marcus Reed",
    role: "Operations Director",
    bio: "Oversees scheduling, training, and quality assurance across every team.",
  },
  {
    name: "Priya Nair",
    role: "Client Success Lead",
    bio: "Makes sure every client's needs are heard, tracked, and exceeded.",
  },
  {
    name: "Tom Alvarez",
    role: "Lead Field Supervisor",
    bio: "12 years of hands-on experience leading our residential & commercial crews.",
  },
];

export const milestones = [
  { year: "2013", text: "Founded with one van and three team members." },
  { year: "2016", text: "Expanded to commercial & office cleaning contracts." },
  { year: "2019", text: "Reached 1,000+ recurring residential clients." },
  { year: "2022", text: "Launched eco-certified green cleaning line." },
  { year: "2025", text: "Now serving 9 cities with 85+ trained professionals." },
];

export const processSteps = [
  {
    title: "Get a Free Quote",
    description:
      "Tell us about your space and needs. We'll provide a transparent, no-obligation quote within hours.",
  },
  {
    title: "Schedule Your Clean",
    description:
      "Pick a date and time that works for you — including recurring plans that fit your routine.",
  },
  {
    title: "We Clean, You Relax",
    description:
      "Our trained, vetted team arrives on time and gets to work using eco-friendly equipment.",
  },
  {
    title: "Enjoy a Spotless Space",
    description:
      "Walk into a fresh, sparkling space — backed by our 100% satisfaction guarantee.",
  },
];

export const pricingFaqs = [
  {
    question: "How is my quote calculated?",
    answer:
      "Pricing is based on the size of your space, the type of cleaning needed, and how often you'd like service. Recurring plans (weekly or bi-weekly) receive discounted rates compared to one-time visits.",
  },
  {
    question: "Do I need to provide cleaning supplies or equipment?",
    answer:
      "No — our teams arrive fully equipped with professional-grade, eco-friendly products and tools. If you prefer we use specific products you provide, just let us know.",
  },
  {
    question: "What if I'm not satisfied with the cleaning?",
    answer:
      "All of our plans are backed by a 100% satisfaction guarantee. If something isn't right, contact us within 24 hours and we'll return to make it right at no extra cost.",
  },
  {
    question: "Can I change or cancel my recurring plan?",
    answer:
      "Yes, recurring plans are flexible with no long-term contracts. You can adjust frequency, reschedule, or cancel any time with 48 hours notice.",
  },
  {
    question: "Are your cleaners insured and background-checked?",
    answer:
      "Absolutely. Every team member is fully insured, bonded, and passes a thorough background check before joining our team.",
  },
];

export type GalleryItem = {
  title: string;
  category: string;
  image: string;
};

export const galleryItems: GalleryItem[] = [
  {
    title: "Modern Kitchen Deep Clean",
    category: "Residential",
    image: "/images/gallery/kitchen-deep-clean.jpg",
  },
  {
    title: "Corporate Office Refresh",
    category: "Commercial",
    image: "/images/gallery/office-refresh.jpg",
  },
  {
    title: "Bathroom Descale & Shine",
    category: "Residential",
    image: "/images/gallery/bathroom-shine.jpg",
  },
  {
    title: "Move-Out Apartment Turnover",
    category: "Move In/Out",
    image: "/images/gallery/moveout-apartment.jpg",
  },
  {
    title: "Carpet Stain Restoration",
    category: "Carpet & Upholstery",
    image: "/images/gallery/carpet-restoration.jpg",
  },
  {
    title: "Post-Renovation Dust Removal",
    category: "Post-Construction",
    image: "/images/gallery/post-construction.jpg",
  },
  {
    title: "Retail Storefront Cleaning",
    category: "Commercial",
    image: "/images/gallery/retail-storefront.jpg",
  },
  {
    title: "Window & Glass Detailing",
    category: "Residential",
    image: "/images/gallery/window-detailing.jpg",
  },
  {
    title: "Living Room Sanitization",
    category: "Sanitization",
    image: "/images/gallery/livingroom-sanitization.jpg",
  },
];

