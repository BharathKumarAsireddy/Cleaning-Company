import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  LinkedInIcon,
} from "@/components/icons/SocialIcons";
import { navLinks, services, siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950 text-slate-300">
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/footer-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 section-scrim" />
      </div>
      <div className="absolute inset-0 bg-grid-light opacity-40" />
      <div className="absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-aqua-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Precision Cleaning Services"
                width={1254}
                height={1254}
                className="h-12 w-12 rounded-xl"
              />
            </Link>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Professional residential & commercial cleaning services
              delivered with precision, reliability, and care.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: FacebookIcon, href: siteConfig.social.facebook },
                { icon: InstagramIcon, href: siteConfig.social.instagram },
                { icon: XIcon, href: siteConfig.social.twitter },
                { icon: LinkedInIcon, href: siteConfig.social.linkedin },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-aqua-400/50 hover:text-aqua-300"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-aqua-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href="/services"
                    className="transition-colors hover:text-aqua-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aqua-400" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-aqua-400" />
                <a
                  href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                  className="hover:text-aqua-300"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-aqua-400" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-aqua-300"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-aqua-400" />
                <span>{siteConfig.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>Designed with care for spotless spaces.</p>
        </div>
      </div>
    </footer>
  );
}
