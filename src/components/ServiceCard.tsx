import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import TiltCard from "./TiltCard";

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}) {
  const card = (
    <TiltCard className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-aqua-300 hover:shadow-lg">
      <div className="flex h-full flex-col">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-aqua-50 to-ink-50 text-aqua-600 ring-1 ring-aqua-100">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-4 font-display text-lg font-semibold text-ink-950">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
        {href && (
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-aqua-600 transition-transform duration-300 group-hover:translate-x-1">
            Learn more <ArrowRight className="h-4 w-4" />
          </span>
        )}
      </div>
    </TiltCard>
  );

  return href ? (
    <Link href={href} className="block h-full">
      {card}
    </Link>
  ) : (
    card
  );
}
