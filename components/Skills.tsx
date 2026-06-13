import Section from "./Section";
import Reveal from "./Reveal";
import { skills } from "@/lib/content";

export default function Skills() {
  return (
    <Section id="skills" label="Skills" title="Tools & technologies">
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={(i % 2) * 0.06}>
            <div className="glass h-full p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-lavender-600">
                {group.group}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-canvas-soft bg-canvas-soft/70 px-3 py-1.5 text-sm text-ink-soft transition-colors hover:border-lavender-200 hover:text-ink"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
