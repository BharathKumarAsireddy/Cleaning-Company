"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Boxes,
  Building2,
  Home,
  PaintBucket,
  ShieldCheck,
  Sofa,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import TiltCard from "./TiltCard";
import type { GalleryItem } from "@/lib/data";

const categoryIcons: Record<string, LucideIcon> = {
  Residential: Home,
  Commercial: Building2,
  "Move In/Out": Boxes,
  "Carpet & Upholstery": Sofa,
  "Post-Construction": PaintBucket,
  Sanitization: ShieldCheck,
};

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(items.map((i) => i.category)))],
    [items]
  );
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === category
                ? "border-aqua-400 bg-aqua-50 text-aqua-700"
                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-ink-950"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => {
            const Icon = categoryIcons[item.category] ?? Sparkles;
            return (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <TiltCard className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-aqua-300 hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink-950/50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-aqua-200 backdrop-blur">
                      {item.category}
                    </span>
                    <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20 backdrop-blur transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base font-semibold text-ink-950">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Before & after transformation
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
