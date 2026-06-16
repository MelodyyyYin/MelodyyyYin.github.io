import { Fragment } from "react";
import { Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { about, news } from "@/lib/content";

// Render **bold** segments as <strong>.
function renderBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-ink">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

// Color-code each News tag type.
const tagStyles: Record<string, string> = {
  Incoming: "border-amber-300 bg-amber-50 text-amber-700",
  "Open source": "border-violet-200 bg-violet-50 text-violet-700",
  "New role": "border-teal-200 bg-teal-50 text-teal-700",
  Education: "border-sky-200 bg-sky-50 text-sky-700",
  Milestone: "border-rose-200 bg-rose-50 text-rose-700",
};

export default function AboutNews() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <p className="section-label">
            <span className="h-1.5 w-1.5 rounded-full bg-apricot-500" />
            About
          </p>
          <h2 className="heading">✨ A bit about me</h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* LEFT — About */}
          <Reveal>
            <p className="font-display text-2xl leading-snug text-ink">
              {about.lead}
            </p>
            <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{renderBold(p)}</p>
              ))}
            </div>

            {/* Focus areas — compact */}
            <div className="mt-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-apricot-600">
                🎯 Focus areas
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {about.focus.map((f) => (
                  <li
                    key={f.label}
                    className="flex items-start gap-2 text-sm text-ink-soft"
                  >
                    <span aria-hidden>{f.emoji}</span>
                    <span>{f.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interests / hobbies */}
            <div className="mt-6 rounded-2xl border border-apricot-100 bg-gradient-to-br from-apricot-50/80 to-rose-50/60 p-6">
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

          {/* RIGHT — News */}
          <Reveal delay={0.1}>
            <div id="news" className="scroll-mt-24">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-apricot-600">
                📰 Recent updates
              </p>
              <ol className="mt-4 space-y-3">
                {news.map((n) => (
                  <li
                    key={n.text}
                    className={`rounded-2xl border p-4 backdrop-blur-md ${
                      n.highlight
                        ? "border-apricot-200 bg-apricot-50/70 shadow-glow"
                        : "border-white/60 bg-white/70 shadow-soft"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-medium text-apricot-600">
                        {n.date}
                      </span>
                      <span
                        className={`shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide ${
                          tagStyles[n.tag] ??
                          "border-canvas-soft bg-canvas-soft/70 text-ink-muted"
                        }`}
                      >
                        {n.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {n.highlight && (
                        <Sparkles className="mr-1.5 inline h-4 w-4 -translate-y-0.5 text-apricot-500" />
                      )}
                      {n.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
