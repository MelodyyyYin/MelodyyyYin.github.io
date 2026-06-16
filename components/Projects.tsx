"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { projects, type Project } from "@/lib/content";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={(index % 2) * 0.08}>
      <article className="glass h-full overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={`${open ? "Collapse" : "Expand"} ${project.name}`}
          className="group flex w-full cursor-pointer items-start gap-4 p-6 text-left"
        >
          <div className="min-w-0 flex-1">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-peach-500">
              {project.tag}
            </span>
            <h3 className="mt-1 font-display text-xl font-semibold text-ink">
              {project.name}
            </h3>
            <p className="mt-2 text-sm font-medium text-ink-soft">
              {project.blurb}
            </p>
          </div>

          <span
            aria-hidden
            className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-apricot-50 text-apricot-600 ring-1 ring-apricot-100 transition-all duration-300 group-hover:bg-apricot-100 group-hover:ring-apricot-200"
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
              <div className="border-t border-apricot-100 px-6 pb-6 pt-5">
                <ul className="space-y-2.5">
                  {project.bullets.map((b) => (
                    <li
                      key={b.slice(0, 28)}
                      className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-apricot-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-apricot-600 link-underline"
                  >
                    View on {project.link.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <p className="section-label">
            <span className="h-1.5 w-1.5 rounded-full bg-apricot-500" />
            Projects
          </p>
          <h2 className="heading">🧱 Systems I&apos;ve designed</h2>
          <p className="mt-3 max-w-2xl text-sm text-ink-muted">
            Selected systems work in distributed infrastructure, backend, and
            performance. Click or tap any card for the details.
          </p>
        </Reveal>

        <div className="mt-10 grid items-start gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
