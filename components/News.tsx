import { Sparkles } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { news } from "@/lib/content";

// Color-code each tag type for visual variety.
const tagStyles: Record<string, string> = {
  Incoming: "border-amber-300 bg-amber-50 text-amber-700",
  "Open source": "border-violet-200 bg-violet-50 text-violet-700",
  "New role": "border-teal-200 bg-teal-50 text-teal-700",
  Education: "border-sky-200 bg-sky-50 text-sky-700",
  Milestone: "border-rose-200 bg-rose-50 text-rose-700",
};

export default function News() {
  return (
    <Section id="news" label="News" title="📰 Recent updates">
      <ol className="space-y-3">
        {news.map((n, i) => (
          <Reveal key={n.text} delay={i * 0.05}>
            <li
              className={`flex flex-col gap-3 rounded-2xl border p-5 backdrop-blur-md sm:flex-row sm:items-center sm:gap-5 ${
                n.highlight
                  ? "border-apricot-200 bg-apricot-50/70 shadow-glow"
                  : "border-white/60 bg-white/70 shadow-soft"
              }`}
            >
              <div className="flex shrink-0 items-center gap-2 sm:w-28">
                <span className="font-mono text-xs font-medium text-apricot-600">
                  {n.date}
                </span>
              </div>

              <p className="flex-1 text-sm leading-relaxed text-ink-soft">
                {n.highlight && (
                  <Sparkles className="mr-1.5 inline h-4 w-4 -translate-y-0.5 text-apricot-500" />
                )}
                {n.text}
              </p>

              <span
                className={`shrink-0 self-start rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide sm:self-center ${
                  tagStyles[n.tag] ??
                  "border-canvas-soft bg-canvas-soft/70 text-ink-muted"
                }`}
              >
                {n.tag}
              </span>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
