import {
  Sparkles,
  Building2,
  Home,
  WashingMachine,
  PaintBucket,
  RefreshCcw,
  ShieldCheck,
  Clock,
  Leaf,
  MessageCircle,
  Award,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Precision Cleaning Services",
  shortName: "Precision Cleaning",
  tagline: "Spotless Spaces, Precision Results",
  phone: "(609) 214-9590",
  email: "hello@precisioncleaning.com",
  address: "217 Pin Hov Circle, Greenacres, FL 33463",
  hours: "Mon - Sat: 7:00 AM - 7:00 PM",
  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
  },
};

export const serviceAreas = [
  "Boynton Beach",
  "Delray Beach",
  "Lake Worth",
  "Greenacres",
  "Wellington",
  "West Palm Beach",
  "Lantana",
  "Palm Springs",
  "Royal Palm Beach",
  "Boca Raton",
];

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
  image: string;
  shortDescription: string;
  description: string;
  features: string[];
  pricing?: string;
  subServices?: { title: string; description: string }[];
};

export const services: Service[] = [
  {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning",
    icon: Building2,
    image: "/images/services/commercial-cleaning.jpg",
    shortDescription:
      "Reliable office & facility cleaning that keeps business moving.",
    description:
      "Keep your business clean, professional, and ready for employees and customers. We provide reliable cleaning for offices, medical offices, retail spaces, professional buildings, and other commercial properties.",
    features: [
      "Offices & common areas",
      "Restrooms & breakrooms",
      "Vacuuming & mopping",
      "Trash removal",
      "Dusting & surface cleaning",
      "Flexible cleaning schedules",
    ],
  },
  {
    slug: "residential-cleaning",
    title: "Residential Cleaning",
    icon: Home,
    image: "/images/services/residential-cleaning.jpg",
    shortDescription:
      "Recurring or one-time house cleaning tailored to your routine.",
    description:
      "Keep your home clean, fresh, and comfortable with reliable cleaning tailored to your schedule.",
    features: [
      "Kitchens & bathrooms",
      "Dusting",
      "Vacuuming in living areas & bedrooms",
      "Trash removal",
      "Light surface wiping",
    ],
    pricing: "Starting at $0.10 per sq. ft. Call for a free quote.",
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    icon: Sparkles,
    image: "/images/services/deep-cleaning.jpg",
    shortDescription:
      "An intensive top-to-bottom clean for homes that need extra care.",
    description:
      "A thorough, detailed cleaning designed for first-time visits, neglected spaces, or homes and businesses that need extra attention.",
    features: [
      "Detailed kitchen and bathroom cleaning",
      "Baseboards, doors & trim",
      "Dusting throughout",
      "Vacuuming & mopping",
      "Light switches & high-touch surfaces",
      "Interior window sills & tracks",
    ],
    pricing: "Starts at $0.15–$0.18 per sq. ft.",
  },
  {
    slug: "turnover-cleaning",
    title: "Turnover Cleaning",
    icon: RefreshCcw,
    image: "/images/services/turnover-cleaning.jpg",
    shortDescription:
      "Fast, thorough turnovers for Airbnb, vacation rentals & hotels.",
    description:
      "Thorough cleaning and preparation of a property between guests or tenants, leaving it clean, refreshed, and ready for the next occupancy. We handle Airbnb & vacation rental turnovers and seasonal rental cleaning — covering short-term rentals and snowbird/seasonal properties, which are very common in our area.",
    features: [
      "Same-day turnover availability",
      "Linen change & laundry coordination",
      "Restocking of guest essentials",
      "Photo-ready finish every time",
    ],
    subServices: [
      {
        title: "Airbnb Turnovers",
        description:
          "Cleaning between Airbnb guests, usually the same day someone checks out and the next guest checks in.",
      },
      {
        title: "Vacation Rental Turnovers",
        description:
          "The same type of service, but for vacation rentals (Airbnb, VRBO, private rentals, etc.).",
      },
      {
        title: "Seasonal Rental Cleaning",
        description:
          "Cleaning before or after a seasonal tenant's stay, or while they're renting for an extended season (weeks or months).",
      },
      {
        title: "Seasonal Property Cleaning",
        description:
          "Cleaning a homeowner's seasonal residence before they arrive, after they leave, or while the home is vacant.",
      },
    ],
  },
  {
    slug: "move-in-move-out",
    title: "Move In / Move Out",
    icon: WashingMachine,
    image: "/images/services/move-in-out.jpg",
    shortDescription:
      "Spotless turnovers for renters, owners, landlords & agents.",
    description:
      "Perfect for homeowners, renters, landlords, property managers, and real estate professionals. We prepare properties for their next chapter with detailed, top-to-bottom cleaning.",
    features: [
      "Kitchens, bathrooms & living areas",
      "Closets & appliance cleaning",
      "Baseboards, doors & light switches",
      "Dusting, vacuuming & mopping",
      "Interior window sills & tracks",
      "Final touch-up for inspections or new occupants",
    ],
  },
  {
    slug: "post-construction",
    title: "Post-Construction Cleaning",
    icon: PaintBucket,
    image: "/images/services/post-construction.jpg",
    shortDescription:
      "Dust and debris removal after renovations or new builds.",
    description:
      "Final cleaning for empty, newly built or renovated homes, offices, condos, & commercial spaces. The property must be construction-complete and free of contractor materials before our arrival.",
    features: [
      "Fine dust removal",
      "Vacuuming & mopping",
      "Cabinets, countertops & fixtures",
      "Baseboards, doors & trim",
      "Interior windows & sills",
      "Final detail cleaning before occupancy",
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

export type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const values: Value[] = [
  {
    icon: ShieldCheck,
    title: "Professional & Reliable",
    description:
      "We show up on time, every time, with the same dedication to quality on every visit.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & EPA-Approved",
    description:
      "Green, EPA-approved cleaning products that are tough on dirt but gentle on your family, pets, and the planet.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Scheduling that fits your life, so you can focus on what matters most.",
  },
  {
    icon: MessageCircle,
    title: "Honest Communication",
    description:
      "Transparent pricing and clear, honest communication from your first quote to every visit after.",
  },
  {
    icon: Award,
    title: "Quality Workmanship",
    description:
      "Trained, detail-oriented cleaners who take pride in getting every corner right.",
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
  beforeImage: string;
  afterImage: string;
};

export const galleryItems: GalleryItem[] = [
  {
    title: "Corporate Office Refresh",
    category: "Commercial Cleaning",
    beforeImage: "/images/gallery/commercial-cleaning-before.jpg",
    afterImage: "/images/gallery/commercial-cleaning-after.jpg",
  },
  {
    title: "Everyday Home Reset",
    category: "Residential Cleaning",
    beforeImage: "/images/gallery/residential-cleaning-before.jpg",
    afterImage: "/images/gallery/residential-cleaning-after.jpg",
  },
  {
    title: "Bathroom Descale & Shine",
    category: "Deep Cleaning",
    beforeImage: "/images/gallery/deep-cleaning-before.jpg",
    afterImage: "/images/gallery/deep-cleaning-after.jpg",
  },
  {
    title: "Guest-Ready Rental Turnover",
    category: "Turnover Cleaning",
    beforeImage: "/images/gallery/turnover-cleaning-before.jpg",
    afterImage: "/images/gallery/turnover-cleaning-after.jpg",
  },
  {
    title: "Move-Out Apartment Reset",
    category: "Move In / Move Out",
    beforeImage: "/images/gallery/move-in-move-out-before.jpg",
    afterImage: "/images/gallery/move-in-move-out-after.jpg",
  },
  {
    title: "Post-Renovation Dust Removal",
    category: "Post-Construction Cleaning",
    beforeImage: "/images/gallery/post-construction-before.jpg",
    afterImage: "/images/gallery/post-construction-after.jpg",
  },
];

