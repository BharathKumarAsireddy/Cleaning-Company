import Image from "next/image";
import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/lib/data";

export default function TestimonialCard({
  name,
  role,
  quote,
  rating,
  avatar,
  className = "",
}: Testimonial & { className?: string }) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-ink-950/20 backdrop-blur-sm ${className}`}
    >
      <Quote className="h-6 w-6 text-aqua-400" />
      <div className="mt-3 flex gap-0.5">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-6 text-slate-200">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
        <Image
          src={avatar}
          alt={name}
          width={44}
          height={44}
          className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-aqua-400/30"
        />
        <div>
          <p className="font-display text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-slate-400">{role}</p>
        </div>
      </div>
    </div>
  );
}
