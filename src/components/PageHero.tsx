import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionBadge from "./SectionBadge";
import type { LucideIcon } from "lucide-react";

export default function PageHero({
  eyebrow,
  icon,
  title,
  highlight,
  description,
  crumb,
}: {
  eyebrow: string;
  icon?: LucideIcon;
  title: string;
  highlight?: string;
  description: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-ink-50 via-white to-white pb-20 pt-36 sm:pb-28 sm:pt-44">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-aqua-300/30 blur-3xl animate-float" />
      <div className="absolute -bottom-16 left-0 h-72 w-72 rounded-full bg-ink-300/30 blur-3xl animate-float-slow" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <div className="mb-5 flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
            <Link href="/" className="hover:text-aqua-600">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-slate-700">{crumb}</span>
          </div>
          <SectionBadge icon={icon}>{eyebrow}</SectionBadge>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
            {title} {highlight && <span className="text-gradient">{highlight}</span>}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
