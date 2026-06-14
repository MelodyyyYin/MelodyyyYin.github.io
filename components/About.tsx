import Section from "./Section";
import Reveal from "./Reveal";
import { about } from "@/lib/content";

export default function About() {
  return (
    <Section id="about" label="About" title="Infrastructure for AI systems">
      <div className="grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <p className="font-display text-2xl leading-snug text-ink">
            {about.lead}
          </p>
          <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2">
          <div className="glass p-6">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-apricot-600">
              Focus areas
            </p>
            <ul className="mt-4 space-y-3">
              {about.focus.map((f) => (
                <li key={f} className="flex items-start gap-3 text-ink-soft">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-gradient" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
