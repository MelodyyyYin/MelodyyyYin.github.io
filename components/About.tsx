import Section from "./Section";
import Reveal from "./Reveal";
import { about } from "@/lib/content";

export default function About() {
  return (
    <Section id="about" label="About" title="✨ Infrastructure for AI systems">
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

          {/* Interests / hobbies */}
          <div className="mt-8 rounded-2xl border border-apricot-100 bg-gradient-to-br from-apricot-50/80 to-rose-50/60 p-6">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-apricot-600">
              🌸 Beyond the keyboard
            </p>
            <p className="mt-3 leading-relaxed text-ink-soft">
              {about.interests.intro}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {about.interests.items.map((it) => (
                <span
                  key={it.label}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium ${it.className}`}
                >
                  <span aria-hidden>{it.emoji}</span>
                  {it.label}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm font-medium text-ink-soft">
              {about.interests.invite}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2">
          <div className="glass p-6">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-apricot-600">
              🎯 Focus areas
            </p>
            <ul className="mt-4 space-y-3">
              {about.focus.map((f) => (
                <li
                  key={f.label}
                  className="flex items-start gap-3 text-ink-soft"
                >
                  <span aria-hidden className="text-base leading-6">
                    {f.emoji}
                  </span>
                  <span>{f.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
