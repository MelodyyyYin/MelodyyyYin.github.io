import { GitPullRequest, GitMerge, ArrowUpRight } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { openSource } from "@/lib/content";

const stateStyles: Record<string, string> = {
  merged: "border-lavender-300 bg-lavender-50 text-lavender-600",
  open: "border-haze-400/40 bg-haze-400/10 text-haze-500",
  closed: "border-rose-300 bg-rose-200/40 text-rose-500",
};

export default function OpenSource() {
  return (
    <Section
      id="open-source"
      label="Open Source"
      title={
        <>
          Contributions to <span className="gradient-text">sglang-omni</span>
        </>
      }
    >
      <Reveal>
        <p className="max-w-2xl leading-relaxed text-ink-soft">
          {openSource.intro}{" "}
          <a
            href={openSource.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-medium text-lavender-600"
          >
            sgl-project/sglang-omni
          </a>
          .
        </p>
      </Reveal>

      <div className="mt-8 space-y-3">
        {openSource.items.map((item, i) => (
          <Reveal key={item.href} delay={i * 0.04}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 glass p-5 transition-shadow hover:shadow-lift"
            >
              <span className="mt-0.5 text-lavender-500">
                {item.state === "merged" ? (
                  <GitMerge className="h-5 w-5" />
                ) : (
                  <GitPullRequest className="h-5 w-5" />
                )}
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-medium text-ink">{item.title}</h3>
                  <span
                    className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide ${stateStyles[item.state]}`}
                  >
                    {item.state}
                  </span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
                <p className="mt-2 font-mono text-xs text-ink-muted">
                  {item.meta}
                </p>
              </div>

              <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lavender-600" />
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
