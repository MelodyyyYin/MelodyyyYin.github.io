"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight, Layers, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { projects, type Project } from "@/lib/content";

function MetricPills({ metrics }: { metrics: NonNullable<Project["metrics"]> }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {metrics.map((m) => (
        <span
          key={m.label}
          className="inline-flex items-baseline gap-1.5 rounded-lg border border-iris-100 bg-iris-50/70 px-2.5 py-1"
        >
          <span className="font-mono text-sm font-semibold text-iris-600">
            {m.value}
          </span>
          <span className="text-[11px] text-ink-muted">{m.label}</span>
        </span>
      ))}
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <Reveal>
      <article className="group relative overflow-hidden rounded-[1.75rem] bg-accent-gradient p-[1.5px] shadow-lift transition-all duration-200 hover:-translate-y-1">
        <div className="relative rounded-[1.65rem] bg-white/95 p-7 backdrop-blur-md sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-iris-600">
              {project.tag}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-ink px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-canvas">
              <Sparkles className="h-3 w-3" />
              Featured
            </span>
          </div>

          <h3 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
            {project.blurb}
          </p>

          {project.metrics && (
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-iris-100 bg-canvas/60 p-3 text-center"
                >
                  <p className="font-mono text-lg font-semibold text-iris-600">
                    {m.value}
                  </p>
                  <p className="mt-0.5 text-[11px] text-ink-muted">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          <ul className="mt-6 space-y-2.5">
            {project.bullets.map((b) => (
              <li
                key={b.slice(0, 28)}
                className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft"
              >
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-iris-400" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-2">
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
              className="link-underline mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-iris-600"
            >
              View {project.link.label}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </article>
    </Reveal>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={(index % 2) * 0.08}>
      <article className="group relative h-full overflow-hidden glass transition-all duration-200 hover:-translate-y-1 hover:border-iris-200 hover:shadow-lift">
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent-gradient transition-transform duration-300 group-hover:scale-x-100"
        />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={`${open ? "Collapse" : "Expand"} ${project.name}`}
          className="flex w-full cursor-pointer items-start gap-4 p-6 text-left"
        >
          <div className="min-w-0 flex-1">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ice-600">
              {project.tag}
            </span>
            <h3 className="mt-1 font-display text-xl font-semibold text-ink">
              {project.name}
            </h3>
            <p className="mt-2 text-sm font-medium text-ink-soft">
              {project.blurb}
            </p>
            {project.metrics && <MetricPills metrics={project.metrics} />}
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
              <div className="border-t border-iris-100 px-6 pb-6 pt-5">
                <ul className="space-y-2.5">
                  {project.bullets.map((b) => (
                    <li
                      key={b.slice(0, 28)}
                      className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-iris-400" />
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
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-iris-600 link-underline"
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
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <p className="section-label">
            <Layers className="h-3.5 w-3.5" aria-hidden />
            Projects
          </p>
          <h2 className="heading">Systems I&apos;ve designed</h2>
          <p className="mt-3 max-w-2xl text-sm text-ink-muted">
            Selected systems work in AI infrastructure, distributed systems,
            backend, and performance. Click or tap any card for the details.
          </p>
        </Reveal>

        {featured && (
          <div className="mt-10">
            <FeaturedProject project={featured} />
          </div>
        )}

        <div className="mt-6 grid items-start gap-6 md:grid-cols-2">
          {rest.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
