import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <Section id="projects" label="Projects" title="Systems I've designed">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.08}>
            <article className="group flex h-full flex-col glass p-6 transition-shadow hover:shadow-lift">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-rose-500">
                    {p.tag}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-semibold text-ink">
                    {p.name}
                  </h3>
                </div>
                {p.link && (
                  <a
                    href={p.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} on ${p.link.label}`}
                    className="shrink-0 rounded-full border border-lavender-200 bg-white/70 p-2 text-ink-soft transition-all hover:-translate-y-0.5 hover:text-lavender-600"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>

              <p className="mt-3 text-sm font-medium text-ink-soft">{p.blurb}</p>

              <ul className="mt-4 flex-1 space-y-2.5">
                {p.bullets.map((b) => (
                  <li
                    key={b.slice(0, 28)}
                    className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft"
                  >
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-lavender-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
