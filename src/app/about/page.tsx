import type { Metadata } from "next";
import Image from "next/image";
import { Award, HeartHandshake, Sparkles, Target } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionBadge from "@/components/SectionBadge";
import TiltCard from "@/components/TiltCard";
import CTASection from "@/components/CTASection";
import { milestones, stats, team, values } from "@/lib/data";

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
              Built on trust, grown through{" "}
              <span className="text-gradient">word of mouth</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Precision Cleaning Services started in 2013 with a single van,
              three dedicated cleaners, and a simple promise: treat every
              space like it&apos;s our own. Word spread quickly, and what
              began as a small residential operation has grown into a trusted
              partner for homes, offices, and property managers across the
              region.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Today, our team of 85+ trained professionals brings the same
              founding values to every job: reliability, transparency, and an
              eye for detail that our clients notice immediately.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-extrabold text-ink-950 sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Timeline */}
          <Reveal delay={0.1}>
            <div className="relative space-y-6 border-l border-slate-200 pl-8">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="relative">
                  <span className="absolute -left-[2.45rem] flex h-5 w-5 items-center justify-center rounded-full border border-aqua-400 bg-white ring-4 ring-white">
                    <span className="h-2 w-2 rounded-full bg-aqua-400" />
                  </span>
                  <p className="font-display text-sm font-bold text-aqua-600">
                    {milestone.year}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {milestone.text}
                  </p>
                </div>
              ))}
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

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Team */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/testimonials-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.05]"
          />
          <div className="absolute inset-0 section-scrim-light" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionBadge icon={Award}>Meet The Team</SectionBadge>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
              The faces behind{" "}
              <span className="text-gradient">your clean space</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              A leadership team committed to training, supporting, and
              empowering every cleaner on staff.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-aqua-300 hover:shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-aqua-400 to-ink-500 font-display text-xl font-bold text-white shadow-lg shadow-aqua-500/20 transition-transform duration-300 group-hover:scale-110">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-ink-950">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-aqua-600">
                    {member.role}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {member.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection showBackground />
    </>
  );
}
