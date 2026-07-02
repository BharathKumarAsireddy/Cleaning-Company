import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  BadgeCheck,
  MapPin,
  ShieldCheck,
  Star,
  CheckCircle2,
  Gauge,
  HeartHandshake,
} from "lucide-react";
import HeroVideo from "@/components/HeroVideo";
import Reveal from "@/components/Reveal";
import SectionBadge from "@/components/SectionBadge";
import ServiceCard from "@/components/ServiceCard";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import CTASection from "@/components/CTASection";
import {
  processSteps,
  serviceAreas,
  services,
  siteConfig,
  testimonials,
  values,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ink-950">
        <HeroVideo className="absolute inset-0 h-full w-full object-cover brightness-125 contrast-105 saturate-110" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/65 via-ink-950/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-32 lg:px-8">
          <Reveal className="max-w-2xl">
            <SectionBadge icon={Sparkles}>
              Trusted Cleaning Professionals
            </SectionBadge>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Commercial Cleaning{" "}
              <span className="text-gradient">Specialists</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg font-semibold text-white sm:text-xl">
              Serving offices, professional buildings, and commercial
              properties throughout Palm Beach County.
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
              We also provide residential cleaning, condo and apartment
              cleaning, Airbnb and vacation rental turnovers, seasonal
              property cleaning, move-in/move-out cleaning, post-construction
              cleaning, and deep cleaning.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-aqua-400 to-aqua-500 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-aqua-500/30 transition-transform hover:scale-105"
              >
                Request a Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-200">
              {[
                "Eco-friendly products",
                "Vetted & insured teams",
                "100% satisfaction guarantee",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-aqua-400" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/services-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.06]"
          />
          <div className="absolute inset-0 section-scrim-light" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionBadge icon={Sparkles}>Our Services</SectionBadge>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
              Comprehensive cleaning{" "}
              <span className="text-gradient">solutions</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              From everyday tidying to deep, top-to-bottom resets — our teams
              handle homes, offices, and everything in between.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.shortDescription}
                  href={`/services/${service.slug}`}
                  image={service.image}
                />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-sm transition-colors hover:border-aqua-300 hover:text-aqua-600"
            >
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/whychoose-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 section-scrim" />
          <div className="absolute inset-0 bg-grid-light opacity-30" />
        </div>
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <Reveal>
            <SectionBadge icon={BadgeCheck}>Why Choose Us</SectionBadge>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Cleaning, done with{" "}
              <span className="text-gradient">precision</span> & care
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              We combine trained professionals, premium equipment, and
              eco-conscious products to deliver consistent, reliable results
              you can count on.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-aqua-400/10 text-aqua-300 ring-1 ring-aqua-400/30">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white">
                      {value.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div className="relative mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-aqua-300/40 blur-2xl animate-float" />
              <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-ink-300/40 blur-2xl animate-float-slow" />

              <div className="relative space-y-5">
                <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <Gauge className="h-5 w-5 text-aqua-600" />
                    <span className="text-sm font-medium text-slate-700">
                      On-Time Arrival
                    </span>
                  </div>
                  <span className="font-display text-lg font-bold text-ink-950">
                    99.2%
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-aqua-600" />
                    <span className="text-sm font-medium text-slate-700">
                      Average Rating
                    </span>
                  </div>
                  <span className="font-display text-lg font-bold text-ink-950">
                    4.9 / 5
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-aqua-600" />
                    <span className="text-sm font-medium text-slate-700">
                      Insured & Background-Checked
                    </span>
                  </div>
                  <span className="font-display text-lg font-bold text-ink-950">
                    100%
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <HeartHandshake className="h-5 w-5 text-aqua-600" />
                    <span className="text-sm font-medium text-slate-700">
                      Repeat Clients
                    </span>
                  </div>
                  <span className="font-display text-lg font-bold text-ink-950">
                    87%
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/process-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.05]"
          />
          <div className="absolute inset-0 section-scrim-light" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionBadge icon={Sparkles}>How It Works</SectionBadge>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
              Get started in{" "}
              <span className="text-gradient">four simple steps</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="font-display text-5xl font-extrabold text-ink-100">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-ink-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/testimonials-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 section-scrim" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionBadge icon={Star}>Testimonials</SectionBadge>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Loved by homes & businesses{" "}
              <span className="text-gradient">across town</span>
            </h2>
          </Reveal>
        </div>

        <Reveal>
          <TestimonialsMarquee testimonials={testimonials} />
        </Reveal>
      </section>

      {/* Service Areas */}
      <section className="relative overflow-hidden border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionBadge icon={MapPin}>Service Areas</SectionBadge>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
              Proudly serving{" "}
              <span className="text-gradient">Palm Beach County</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              From Boynton Beach to Boca Raton, our teams bring the same
              spotless standard to homes and businesses across the county.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {serviceAreas.map((area, i) => (
              <Reveal key={area} delay={(i % 5) * 0.06}>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all hover:-translate-y-1 hover:border-aqua-300 hover:shadow-lg">
                  <MapPin className="h-5 w-5 shrink-0 text-aqua-500" />
                  <span className="font-display text-sm font-semibold text-ink-950">
                    {area}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection showBackground />

      {/* Schema-friendly hidden contact info for SEO */}
      <span className="sr-only">{siteConfig.address}</span>
    </>
  );
}
