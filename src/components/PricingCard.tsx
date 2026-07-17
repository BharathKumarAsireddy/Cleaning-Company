import Link from "next/link";
import { Check } from "lucide-react";
import type { PricingPlan } from "@/lib/data";

export default function PricingCard({
  name,
  price,
  unit,
  description,
  features,
  highlighted,
}: PricingPlan) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-8 transition-transform hover:-translate-y-1 ${
        highlighted
          ? "border-aqua-300 bg-gradient-to-b from-aqua-50 to-white shadow-xl shadow-aqua-500/10 lg:scale-105"
          : "border-slate-200 bg-white shadow-sm"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-aqua-400 to-aqua-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink-950 shadow-lg">
          Most Popular
        </span>
      )}
      <h3 className="font-display text-xl font-bold text-ink-950">{name}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-display text-4xl font-extrabold text-ink-950">
          {price}
        </span>
        <span className="text-sm text-slate-500">{unit}</span>
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-aqua-500" />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-105 ${
          highlighted
            ? "bg-gradient-to-r from-aqua-400 to-aqua-500 text-ink-950 shadow-lg shadow-aqua-500/30"
            : "border border-slate-200 bg-white text-ink-950 hover:border-aqua-300 hover:bg-aqua-50"
        }`}
      >
        Book a Service
      </Link>
    </div>
  );
}
