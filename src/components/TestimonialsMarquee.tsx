import TestimonialCard from "./TestimonialCard";
import type { Testimonial } from "@/lib/data";

export default function TestimonialsMarquee({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const track = [...testimonials, ...testimonials];

  return (
    <div className="relative mt-14 overflow-hidden">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-ink-950 to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-ink-950 to-transparent sm:w-24" />

      <div className="marquee-row flex w-max gap-6 animate-marquee">
        {track.map((testimonial, i) => (
          <TestimonialCard
            key={`${testimonial.name}-${i}`}
            {...testimonial}
            className="w-[320px] shrink-0 sm:w-[380px]"
          />
        ))}
      </div>
    </div>
  );
}
