import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Precision Cleaning Services to book a service. Call, email, or fill out our form and we'll respond within one business day.",
};

const contactCards = [
  {
    icon: Phone,
    label: "Call or Text",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: siteConfig.address,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: siteConfig.hours,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        icon={MessageCircle}
        title="Let's get your space"
        highlight="spotless"
        description="Fill out the form below or reach us directly — we typically respond within one business day to confirm your service."
        crumb="Contact"
      />

      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/cta-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.05]"
          />
          <div className="absolute inset-0 section-scrim-light" />
        </div>
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-5 lg:px-8">
          <Reveal className="lg:col-span-3">
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="space-y-4">
              {contactCards.map((card) => {
                const content = (
                  <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-aqua-300 hover:shadow-lg">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-aqua-50 to-ink-50 text-aqua-600 ring-1 ring-aqua-100">
                      <card.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {card.label}
                      </p>
                      <p className="mt-1 text-sm font-medium leading-6 text-ink-950">
                        {card.value}
                      </p>
                    </div>
                  </div>
                );
                return card.href ? (
                  <a key={card.label} href={card.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={card.label}>{content}</div>
                );
              })}

              {/* Map placeholder */}
              <div className="relative h-56 overflow-hidden rounded-2xl border border-slate-200 bg-ink-950">
                <div className="absolute inset-0 bg-grid-light opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-br from-aqua-500/10 via-transparent to-ink-500/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-aqua-400 to-aqua-500 shadow-lg shadow-aqua-500/30">
                    <MapPin className="h-6 w-6 text-ink-950" />
                  </div>
                  <p className="font-display text-sm font-semibold text-white">
                    Austin, TX & Surrounding Areas
                  </p>
                  <p className="max-w-xs px-6 text-xs text-slate-400">
                    {siteConfig.address}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
