import Image from "next/image";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import TiltCard from "./TiltCard";

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  image,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  image?: string;
}) {
  const card = (
    <TiltCard className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-aqua-300 hover:shadow-lg">
      {image && (
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-aqua-400/90 text-ink-950 shadow-lg backdrop-blur-sm">
            <Icon className="h-5 w-5" />
          </div>
        </div>
      )}
      <div className="flex h-full flex-col p-6">
        {!image && (
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-aqua-50 to-ink-50 text-aqua-600 ring-1 ring-aqua-100">
            <Icon className="h-6 w-6" />
          </div>
        )}
        <h3 className={`font-display text-lg font-semibold text-ink-950 ${image ? "" : "mt-4"}`}>
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
