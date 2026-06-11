"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { services } from "@/lib/data";

type Status = "idle" | "submitting" | "success";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1100);
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex h-full flex-col items-center justify-center rounded-3xl border border-aqua-200 bg-aqua-50 p-10 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-aqua-500" />
        <h3 className="mt-4 font-display text-xl font-bold text-ink-950">
          Thanks! Your request is in.
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">
          One of our team members will reach out within one business day with
          your free quote. Talk soon!
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:border-aqua-300 hover:text-aqua-600"
        >
          Send another request
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Doe"
            className="form-input"
          />
        </Field>
        <Field label="Email Address" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@example.com"
            className="form-input"
          />
        </Field>
        <Field label="Phone Number" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 010-2847"
            className="form-input"
          />
        </Field>
        <Field label="Service Needed" htmlFor="service">
          <select id="service" name="service" className="form-input" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
            <option value="other">Other / Not sure</option>
          </select>
        </Field>
        <Field label="Message" htmlFor="message" className="sm:col-span-2">
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us about your space and what you need..."
            className="form-input resize-none"
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-aqua-400 to-aqua-500 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-aqua-500/30 transition-transform hover:scale-[1.02] disabled:opacity-70 sm:w-auto"
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "submitting" ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <Send className="h-4 w-4" />
              Get My Free Quote
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
