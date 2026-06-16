import Section from "./Section";
import Reveal from "./Reveal";
import { skills } from "@/lib/content";

export default function Skills() {
  return (
    <Section id="skills" label="Skills" title="🛠️ Tools & technologies">
      <Reveal>
        <div className="divide-y divide-apricot-100/70 rounded-2xl border border-apricot-100/70 bg-white/50 backdrop-blur-md">
          {skills.map((group) => (
            <div
              key={group.group}
              className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:gap-4 sm:px-6"
            >
              <div className="flex shrink-0 items-center gap-2 sm:w-52">
                <span aria-hidden>{group.emoji}</span>
                <span
                  className={`font-mono text-xs uppercase tracking-[0.14em] ${group.titleClass}`}
                >
                  {group.group}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((s) => (
                  <span
                    key={s}
                    className={`rounded-md border px-2.5 py-0.5 text-xs ${group.chipClass}`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
