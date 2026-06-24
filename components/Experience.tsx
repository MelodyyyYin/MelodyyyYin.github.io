"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight, Rocket } from "lucide-react";
import Reveal from "./Reveal";
import { experience, type Experience as Job } from "@/lib/content";

function CompanyAvatar({ job }: { job: Job }) {
  if (job.logo) {
    return (
      <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-soft ring-1 ring-black/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={job.logo}
          alt={`${job.company} logo`}
          className="h-7 w-7 object-contain"
          loading="lazy"
        />
      </span>
    );
  }
  return (
    <span
      aria-hidden
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-gradient font-display text-lg font-semibold text-white shadow-soft"
    >
      {job.company.charAt(0)}
    </span>
  );
}

function ExperienceItem({ job, index }: { job: Job; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={index * 0.05}>
      <div className="relative pl-8 sm:pl-10">
        <span className="absolute left-0 top-6 flex h-4 w-4 items-center justify-center rounded-full bg-accent-gradient shadow-glow">
          {job.current && (
            <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-iris-400/60" />
          )}
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
        </span>

        <div className="glass overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={`${open ? "Collapse" : "Expand"} ${job.role} at ${job.company}`}
            className="group flex w-full cursor-pointer items-start gap-4 p-6 text-left sm:p-7"
          >
            <CompanyAvatar job={job} />

            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {job.role}{" "}
                  <span className="text-iris-600">· {job.company}</span>
                </h3>
                <p className="shrink-0 font-mono text-xs text-ink-muted">
                  {job.dates}
                </p>
              </div>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                {job.location && (
                  <p className="text-sm text-ink-muted">{job.location}</p>
                )}
                {job.current && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Current
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm font-medium text-ink-soft">
                {job.summary}
              </p>
            </div>

            <span
              aria-hidden
              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-iris-50 text-iris-600 ring-1 ring-iris-100 transition-all duration-300 group-hover:bg-iris-100 group-hover:ring-iris-200"
            >
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </span>
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="border-t border-iris-100 px-6 pb-6 pt-5 sm:px-7">
                  <ul className="space-y-2.5">
                    {job.bullets.map((b) => (
                      <li
                        key={b.slice(0, 28)}
                        className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft"
                      >
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-iris-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>

                  {job.link && (
                    <a
                      href={job.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-iris-600"
                    >
                      View on {job.link.label}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <p className="section-label">
            <Rocket className="h-3.5 w-3.5" aria-hidden />
            Experience
          </p>
          <h2 className="heading">Where I&apos;ve built</h2>
          <p className="mt-3 max-w-2xl text-sm text-ink-muted">
            Roles across AI infrastructure, distributed backends, and data
            systems. Click or tap any card to expand the details.
          </p>
        </Reveal>

        <div className="relative mt-10">
          <div
            aria-hidden
            className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-iris-300 via-ice-200 to-transparent sm:left-[9px]"
          />
          <div className="space-y-5">
            {experience.map((job, i) => (
              <ExperienceItem key={job.company} job={job} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
