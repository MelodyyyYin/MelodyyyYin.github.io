import Section from "./Section";
import Reveal from "./Reveal";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <Section id="experience" label="Experience" title="Where I've built">
      <div className="relative">
        {/* timeline rail */}
        <div
          aria-hidden
          className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-lavender-300 via-lavender-200 to-transparent sm:left-[9px]"
        />

        <div className="space-y-8">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.05}>
              <div className="relative pl-8 sm:pl-10">
                <span className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent-gradient shadow-glow">
                  {job.current && (
                    <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-lavender-400/60" />
                  )}
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>

                <article className="glass p-6 transition-shadow hover:shadow-lift sm:p-7">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {job.role}{" "}
                      <span className="text-lavender-600">· {job.company}</span>
                    </h3>
                    <p className="shrink-0 font-mono text-xs text-ink-muted">
                      {job.dates}
                    </p>
                  </div>
                  {job.location && (
                    <p className="mt-1 text-sm text-ink-muted">{job.location}</p>
                  )}
                  <p className="mt-3 text-sm font-medium text-ink-soft">
                    {job.summary}
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {job.bullets.map((b) => (
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
                    {job.stack.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
