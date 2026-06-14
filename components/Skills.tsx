import Section from "./Section";
import Reveal from "./Reveal";
import { skills } from "@/lib/content";

export default function Skills() {
  return (
    <Section id="skills" label="Skills" title="🛠️ Tools & technologies">
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={(i % 2) * 0.06}>
            <div className="glass h-full p-6">
              <h3
                className={`flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] ${group.titleClass}`}
              >
                <span aria-hidden className="text-base">
                  {group.emoji}
                </span>
                {group.group}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span
                    key={s}
                    className={`rounded-lg border px-3 py-1.5 text-sm transition-transform hover:-translate-y-0.5 ${group.chipClass}`}
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
