import { Github, ArrowUpRight } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { openSource } from "@/lib/content";

export default function OpenSource() {
  return (
    <Section
      id="open-source"
      label="Open Source"
      title={
        <>
          Contributing to <span className="gradient-text">sglang-omni</span>
        </>
      }
    >
      <Reveal>
        <div className="glass overflow-hidden p-7 sm:p-9">
          <p className="max-w-2xl leading-relaxed text-ink-soft">
            {openSource.intro}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {openSource.areas.map((a) => (
              <span key={a} className="chip">
                {a}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={openSource.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-canvas shadow-lift transition-transform hover:-translate-y-0.5"
            >
              <Github className="h-4 w-4" />
              View my repo
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={openSource.upstream}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm font-medium text-lavender-600"
            >
              sgl-project/sglang-omni →
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
