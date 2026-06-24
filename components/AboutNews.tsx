import { Fragment } from "react";
import {
  Sparkles,
  Newspaper,
  Target,
  Cpu,
  Network,
  Cloud,
  Activity,
  type LucideIcon,
} from "lucide-react";
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

const focusIcons: Record<string, LucideIcon> = {
  cpu: Cpu,
  network: Network,
  cloud: Cloud,
  activity: Activity,
};

// Color-code each News tag type.
const tagStyles: Record<string, string> = {
  Incoming: "border-amber-300 bg-amber-50 text-amber-700",
  "Open source": "border-iris-200 bg-iris-50 text-iris-700",
  "New role": "border-ice-200 bg-ice-50 text-ice-700",
  Education: "border-indigo-200 bg-indigo-50 text-indigo-700",
  Milestone: "border-aqua-300 bg-aqua-200/40 text-aqua-500",
};

export default function AboutNews() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <p className="section-label">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            About
          </p>
          <h2 className="heading">A bit about me</h2>
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

            {/* Focus areas */}
            <div className="mt-7">
              <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-iris-600">
                <Target className="h-3.5 w-3.5" aria-hidden />
                Focus areas
              </p>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {about.focus.map((f) => {
                  const Icon = focusIcons[f.icon] ?? Cpu;
                  return (
                    <li
                      key={f.label}
                      className="flex items-center gap-2.5 text-sm text-ink-soft"
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${f.tint}`}
                      >
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span>{f.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          {/* RIGHT — News */}
          <Reveal delay={0.1}>
            <div id="news" className="scroll-mt-24">
              <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-iris-600">
                <Newspaper className="h-3.5 w-3.5" aria-hidden />
                Recent updates
              </p>
              <ol className="mt-4 space-y-3">
                {news.map((n) => (
                  <li
                    key={n.text}
                    className={`rounded-2xl border p-4 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 ${
                      n.highlight
                        ? "border-iris-200 bg-iris-50/70 shadow-glow"
                        : "border-white/70 bg-white/70 shadow-soft hover:shadow-lift"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-medium text-iris-600">
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
                        <Sparkles className="mr-1.5 inline h-4 w-4 -translate-y-0.5 text-iris-500" />
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
