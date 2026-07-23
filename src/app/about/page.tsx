import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, HeartHandshake, Sparkles, Target } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionBadge from "@/components/SectionBadge";
import TiltCard from "@/components/TiltCard";
import { values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Precision Cleaning Services — our story, our values, and the dedicated team behind every spotless space since 2013.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Precision Cleaning"
        icon={HeartHandshake}
        title="The people behind your"
        highlight="spotless space"
        description="For over a decade, we've built a reputation on trust, consistency, and an obsessive attention to detail — one home and office at a time."
        crumb="About"
      />

      {/* Story */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/cta-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.06]"
          />
          <div className="absolute inset-0 section-scrim-light" />
        </div>
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <Reveal>
            <SectionBadge icon={Sparkles}>Our Story</SectionBadge>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
              Building trust through{" "}
              <span className="text-gradient">quality service</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Precision Cleaning was founded with one goal: to provide
              dependable, detail-oriented, commercial and residential cleaning
              services with professionalism, integrity, and consistency.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We specialize in offices, condos, apartments, vacation rentals,
              seasonal properties, move-in/move-out cleaning, post-construction
              cleaning, residential homes, and absentee homeowner services for
              seasonal residents and snowbirds. Every property receives
              personalized attention and a customized cleaning plan.
            </p>
          </Reveal>

          {/* Why Choose Us */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-8">
              <h3 className="font-display text-xl font-bold text-ink-950">
                Why Choose Precision Cleaning
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Our mission is to make your space spotless without adding to
                your to-do list — here&apos;s what that looks like in practice.
              </p>
              <div className="mt-6 space-y-5 border-l border-slate-200 pl-8">
                {values.map((value) => (
                  <div key={value.title} className="relative">
                    <span className="absolute -left-[2.45rem] flex h-5 w-5 items-center justify-center rounded-full border border-aqua-400 bg-white ring-4 ring-white">
                      <CheckCircle2 className="h-3.5 w-3.5 text-aqua-500" />
                    </span>
                    <p className="font-display text-sm font-bold text-aqua-600">
                      {value.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Values */}
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
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionBadge icon={Target}>Our Mission & Values</SectionBadge>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What drives{" "}
              <span className="text-gradient">everything we do</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Our mission is simple: deliver consistently spotless results
              while making life easier for our clients and creating great
              jobs for our team.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <TiltCard className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center shadow-lg shadow-ink-950/20 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-aqua-400/40">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-aqua-400/10 text-aqua-300 ring-1 ring-aqua-400/30">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {value.description}
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
