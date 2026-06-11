import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Precision Cleaning Services' full range of residential, commercial, deep cleaning, move-in/out, carpet, post-construction, and sanitization services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        icon={Sparkles}
        title="Cleaning services for"
        highlight="every space"
        description="Whether it's a weekly home refresh or a full commercial contract, our trained teams bring the same precision and care to every job."
        crumb="Services"
      />

      <section className="relative bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 2) * 0.1}>
                <TiltCard
                  id={service.slug}
                  className="group h-full scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-aqua-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-aqua-50 to-ink-50 text-aqua-600 ring-1 ring-aqua-100">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold text-ink-950">
                        {service.title}
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-aqua-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 text-center">
            <p className="text-base text-slate-600">
              Don&apos;t see exactly what you need?
            </p>
            <Link
              href="/contact"
              className="group mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-aqua-400 to-aqua-500 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-aqua-500/30 transition-transform hover:scale-105"
            >
              Request a Custom Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
