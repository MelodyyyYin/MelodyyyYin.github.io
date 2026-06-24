"use client";

import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Mail, ArrowDown, Cpu } from "lucide-react";
import { profile } from "@/lib/content";

const ctas = [
  { href: profile.resume, label: "Résumé", icon: FileText, primary: true, external: true },
  { href: profile.github, label: "GitHub", icon: Github, external: true },
  { href: profile.linkedin, label: "LinkedIn", icon: Linkedin, external: true },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail, external: false },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] as const } },
};

const stats = profile.heroStats;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[94vh] items-center overflow-hidden pb-24 pt-20"
    >
      {/* Animated gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-72 w-72 animate-blob-drift rounded-full bg-iris-300/40 blur-3xl" />
        <div className="absolute right-0 top-32 h-80 w-80 animate-blob-drift rounded-full bg-ice-300/35 blur-3xl [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 animate-blob-drift rounded-full bg-aqua-300/30 blur-3xl [animation-delay:-12s]" />
      </div>

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <motion.div variants={container} initial="hidden" animate="show" className="order-2 max-w-2xl lg:order-1">
          <motion.div variants={item} className="section-label">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-iris-400/70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-iris-500" />
            </span>
            {profile.role} · Open to AI infra roles
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl"
          >
            Yue <span className="text-ink-soft">(Melody)</span>{" "}
            <span className="gradient-text">Yin</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl"
          >
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="mt-7 flex flex-wrap gap-2.5">
            {profile.highlights.map((h) => (
              <motion.span
                key={h.label}
                whileHover={{ y: -3, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
                className="inline-flex items-center gap-2 rounded-full border border-iris-100 bg-white/70 py-1.5 pl-1.5 pr-3.5 text-sm font-medium text-ink-soft shadow-soft backdrop-blur"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={h.img}
                  alt=""
                  aria-hidden
                  className="h-5 w-5 rounded-[6px] object-contain ring-1 ring-black/5"
                />
                {h.label}
              </motion.span>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            {ctas.map(({ href, label, icon: Icon, primary, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={
                  primary
                    ? "group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-canvas shadow-lift transition-transform hover:-translate-y-0.5"
                    : "group inline-flex items-center gap-2 rounded-full border border-iris-100 bg-white/70 px-5 py-2.5 text-sm font-medium text-ink-soft shadow-soft backdrop-blur transition-all hover:-translate-y-0.5 hover:text-ink"
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="order-1 mx-auto w-full max-w-[300px] sm:max-w-sm lg:order-2 lg:mx-0 lg:ml-auto"
        >
          <div className="relative">
            {/* soft gradient halo behind the portrait */}
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-accent-gradient opacity-30 blur-2xl"
            />
            <div className="rounded-[2rem] bg-gradient-to-br from-iris-300 via-ice-300 to-aqua-300 p-[3px] shadow-lift">
              <div className="overflow-hidden rounded-[1.85rem] bg-canvas">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  width={900}
                  height={1200}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>

            {/* Floating glass badge (decorative, large screens only) */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -left-6 top-10 hidden lg:block"
            >
              <div className="animate-float">
                <span className="inline-flex items-center gap-2 rounded-2xl border border-white/70 bg-white/80 px-3.5 py-2 text-sm font-medium text-ink shadow-glow backdrop-blur-md">
                  <Cpu className="h-4 w-4 text-iris-500" />
                  LLM Serving
                </span>
              </div>
            </motion.div>

            {/* Terminal-style metrics card. Stacks below on mobile, overlaps on lg. */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-5 w-full lg:absolute lg:-bottom-12 lg:left-1/2 lg:mt-0 lg:w-[92%] lg:-translate-x-1/2"
            >
              <div className="glass p-4 shadow-glow">
                <div className="flex items-center gap-2 border-b border-iris-100/70 pb-2.5">
                  <span className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  </span>
                  <span className="ml-1 font-mono text-[11px] text-ink-muted">
                    {stats.user}
                  </span>
                </div>
                <div className="mt-3 font-mono text-xs">
                  <p className="text-ink-soft">
                    <span className="text-iris-500">$</span> {stats.command}
                  </p>
                  <ul className="mt-2.5 space-y-1.5">
                    {stats.rows.map((r) => (
                      <li key={r.label} className="flex items-center justify-between gap-4">
                        <span className="text-ink-muted">{r.label}</span>
                        <span className="font-semibold text-iris-600">{r.value}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                    {stats.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-ink-muted sm:block"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
