import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, PhoneCall, Tag } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services, siteConfig } from "@/lib/data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const titleWords = service.title.split(" ");
  const highlight = titleWords.pop();
  const titleLead = titleWords.join(" ");

  const otherServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        icon={service.icon}
        title={titleLead}
        highlight={highlight}
        description={service.shortDescription}
        crumb={service.title}
      />

      <section className="relative bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-start lg:px-8">
          <Reveal>
            <div className="relative h-72 overflow-hidden rounded-3xl shadow-lg sm:h-96">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20 backdrop-blur">
                <service.icon className="h-7 w-7" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-base leading-7 text-slate-600">
              {service.description}
            </p>

            <h2 className="mt-8 font-display text-xl font-bold text-ink-950">
              What&apos;s included
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-slate-700"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-aqua-500" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-aqua-200 bg-aqua-50 p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-aqua-400/20 text-aqua-600">
                <Tag className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-aqua-700">
                  Pricing
                </h3>
                <p className="mt-1 text-sm leading-6 text-ink-950">
                  {service.pricing ??
                    "Pricing varies by property size and scope — book a service and we'll tailor an estimate for your space."}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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

      {service.subServices && service.subServices.length > 0 && (
        <section className="relative bg-white pb-20 sm:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink-950 sm:text-3xl">
                Types of {service.title} We Offer
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {service.subServices.map((sub, i) => (
                <Reveal key={sub.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="font-display text-base font-semibold text-ink-950">
                      {sub.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {sub.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {otherServices.length > 0 && (
        <section className="relative overflow-hidden border-t border-slate-200 bg-ink-50/40 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink-950 sm:text-3xl">
                Explore our other services
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherServices.map((other, i) => (
                <Reveal key={other.slug} delay={i * 0.08}>
                  <ServiceCard
                    icon={other.icon}
                    title={other.title}
                    description={other.shortDescription}
                    href={`/services/${other.slug}`}
                    image={other.image}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
