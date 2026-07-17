import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Precision Cleaning Services' full range of residential, commercial, deep cleaning, turnover, move-in/out, and post-construction cleaning services.",
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

          <Reveal className="mt-14 text-center">
            <p className="text-base text-slate-600">
              Don&apos;t see exactly what you need?
            </p>
            <Link
              href="/contact"
              className="group mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-aqua-400 to-aqua-500 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-aqua-500/30 transition-transform hover:scale-105"
            >
              Request a Custom Service
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
