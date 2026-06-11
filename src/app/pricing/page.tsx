import type { Metadata } from "next";
import Image from "next/image";
import { HelpCircle, Tag } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionBadge from "@/components/SectionBadge";
import PricingCard from "@/components/PricingCard";
import Accordion from "@/components/Accordion";
import CTASection from "@/components/CTASection";
import { pricingFaqs, pricingPlans } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, straightforward pricing for residential and commercial cleaning. Find the plan that fits your space and schedule.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Simple, Transparent Pricing"
        icon={Tag}
        title="Plans that fit your"
        highlight="space & budget"
        description="No hidden fees, no long-term contracts. Choose a plan below or request a custom quote tailored to your needs."
        crumb="Pricing"
      />

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
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.1} className="h-full">
                <PricingCard {...plan} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mx-auto mt-10 max-w-2xl text-center">
            <p className="text-sm text-slate-600">
              Prices vary based on home size, condition, and frequency.
              Recurring plans (weekly/bi-weekly) receive up to 20% off
              one-time rates. All plans include eco-friendly products,
              vetted teams, and our satisfaction guarantee.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/services-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 section-scrim" />
          <div className="absolute inset-0 bg-grid-light opacity-30" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal className="text-center">
            <SectionBadge icon={HelpCircle}>FAQ</SectionBadge>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Frequently asked{" "}
              <span className="text-gradient">questions</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <Accordion items={pricingFaqs} />
          </Reveal>
        </div>
      </section>

      <CTASection showBackground />
    </>
  );
}
