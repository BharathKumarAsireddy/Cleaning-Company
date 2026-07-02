"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { GripVertical } from "lucide-react";

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  alt,
}: {
  beforeImage: string;
  afterImage: string;
  alt: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [position, setPosition] = useState(50);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div
      ref={containerRef}
      role="slider"
      tabIndex={0}
      aria-label={`Before and after comparison for ${alt}`}
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="relative h-full w-full touch-none select-none overflow-hidden [cursor:ew-resize]"
      onPointerDown={(e) => {
        draggingRef.current = true;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
        updatePosition(e.clientX);
      }}
      onPointerMove={(e) => {
        if (draggingRef.current) updatePosition(e.clientX);
      }}
      onPointerUp={() => {
        draggingRef.current = false;
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
        if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
      }}
    >
      <Image
        src={afterImage}
        alt={`${alt} — after`}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
        draggable={false}
      />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={`${alt} — before`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          draggable={false}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white"
        style={{ left: `${position}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink-950 shadow-lg">
          <GripVertical className="h-4 w-4" />
        </div>
      </div>

      <span className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/15 bg-ink-950/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full border border-white/15 bg-ink-950/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-aqua-200 backdrop-blur">
        After
      </span>
    </div>
  );
}
