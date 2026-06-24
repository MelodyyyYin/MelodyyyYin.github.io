"use client";

import { motion } from "framer-motion";
import { Mail, Flower2 } from "lucide-react";
import Reveal from "./Reveal";
import { about, profile } from "@/lib/content";

export default function Interests() {
  return (
    <section id="interests" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <p className="section-label">
            <Flower2 className="h-3.5 w-3.5" aria-hidden />
            Beyond the keyboard
          </p>
          <h2 className="heading">Off the keyboard</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
            {about.interests.intro}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-9 flex flex-wrap gap-4">
            {about.interests.items.map((it, i) => (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className={`group flex flex-1 basis-32 cursor-default flex-col items-center gap-3 rounded-2xl border p-6 shadow-soft transition-shadow hover:shadow-lift ${it.className}`}
              >
                <span className="text-4xl transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-125">
                  {it.emoji}
                </span>
                <span className="text-sm font-semibold">{it.label}</span>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <p className="text-sm font-medium text-ink-soft">
              {about.interests.invite}
            </p>
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ y: -2, scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-lift"
            >
              <Mail className="h-4 w-4" />
              Let&apos;s play 🏓
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
