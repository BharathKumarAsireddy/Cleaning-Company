import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/data";

export default function CTASection({
  showBackground = false,
}: {
  showBackground?: boolean;
}) {
  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-br from-ink-50 via-white to-aqua-50 py-20 sm:py-28">
      {showBackground && (
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/cta-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.07]"
          />
          <div className="absolute inset-0 section-scrim-light" />
        </div>
      )}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute left-1/2 top-1/2 h-72 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aqua-300/20 blur-3xl animate-gradient" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl lg:text-5xl">
            Ready for a space that{" "}
            <span className="text-gradient">sparkles</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Book a free, no-obligation service in minutes. Join thousands of
            happy homes and businesses that trust Precision Cleaning Services.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-aqua-400 to-aqua-500 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-aqua-500/30 transition-transform hover:scale-105"
            >
              Book a Service
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-sm transition-colors hover:border-aqua-300 hover:text-aqua-600"
            >
              <PhoneCall className="h-4 w-4" />
              {siteConfig.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
