"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        scrolled || open
          ? "bg-white/90 border-slate-200 shadow-sm"
          : "bg-white/70 border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 scale-90 rounded-full bg-gradient-to-br from-aqua-400/40 to-ink-500/30 blur-xl transition-all duration-300 group-hover:scale-110 group-hover:blur-2xl" />
            <Image
              src="/images/logo-icon.png"
              alt="Precision Cleaning Services"
              width={821}
              height={409}
              priority
              className="relative h-10 w-auto drop-shadow-[0_2px_6px_rgba(10,22,34,0.25)] transition-transform duration-300 group-hover:scale-105 sm:h-12"
            />
          </div>
          <div className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-lg font-extrabold tracking-tight text-ink-950 sm:text-xl">
              Precision<span className="text-gradient"> Cleaning</span>
            </span>
            <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 sm:text-[11px]">
              Services
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-ink-950"
                    : "text-slate-600 hover:text-ink-900"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-ink-50"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-aqua-600 transition-colors"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-aqua-400 to-aqua-500 px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-lg shadow-aqua-500/30 transition-transform hover:scale-105"
          >
            Book a Service
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-950 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden lg:hidden"
          >
            <div className="flex flex-col gap-1 border-t border-slate-200 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-ink-50 text-ink-950"
                      : "text-slate-600 hover:bg-slate-50 hover:text-ink-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gradient-to-r from-aqua-400 to-aqua-500 px-5 py-3 text-center text-sm font-semibold text-ink-950 shadow-lg shadow-aqua-500/30"
              >
                Book a Service
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
