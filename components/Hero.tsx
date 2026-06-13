"use client";

import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Mail, ArrowDown } from "lucide-react";
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

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-16"
    >
      {/* Animated gradient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-72 w-72 animate-blob-drift rounded-full bg-lavender-300/40 blur-3xl" />
        <div className="absolute right-0 top-32 h-80 w-80 animate-blob-drift rounded-full bg-haze-400/30 blur-3xl [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 animate-blob-drift rounded-full bg-rose-300/30 blur-3xl [animation-delay:-12s]" />
      </div>

      <div className="container-page">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.div variants={item} className="section-label">
            <span className="h-1.5 w-1.5 rounded-full bg-lavender-500" />
            {profile.role}
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl"
          >
            Yue <span className="text-ink-soft">(Melody)</span>{" "}
            <span className="gradient-text">Yin</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl"
          >
            Software Engineer focused on{" "}
            <span className="font-medium text-ink">AI Infrastructure</span>,{" "}
            <span className="font-medium text-ink">LLM Systems</span>, and{" "}
            <span className="font-medium text-ink">Distributed Systems</span>.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-3 max-w-2xl leading-relaxed text-ink-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            {ctas.map(({ href, label, icon: Icon, primary, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={
                  primary
                    ? "group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-canvas shadow-lift transition-transform hover:-translate-y-0.5"
                    : "group inline-flex items-center gap-2 rounded-full border border-lavender-200 bg-white/70 px-5 py-2.5 text-sm font-medium text-ink-soft shadow-soft backdrop-blur transition-all hover:-translate-y-0.5 hover:text-ink"
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </motion.div>
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
