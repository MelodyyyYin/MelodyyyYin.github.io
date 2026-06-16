import { GraduationCap } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { education } from "@/lib/content";

export default function Education() {
  return (
    <Section id="education" label="Education" title="🎓 Academic background">
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 0.06}>
            <div className="glass h-full p-6">
              <div className="flex items-center gap-3">
                {e.logo ? (
                  <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white shadow-soft ring-1 ring-black/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={e.logo}
                      alt={`${e.school} logo`}
                      className="h-7 w-7 object-contain"
                      loading="lazy"
                    />
                  </span>
                ) : (
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-gradient text-white">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                )}
                <p className="font-mono text-xs text-ink-muted">{e.dates}</p>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {e.school}
              </h3>
              <p className="mt-1 text-sm text-ink-soft">{e.degree}</p>
              {e.detail && (
                <p className="mt-3 text-sm text-ink-muted">{e.detail}</p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
