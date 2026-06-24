import Reveal from "./Reveal";
import { affiliations } from "@/lib/content";

export default function Affiliations() {
  return (
    <section className="border-t border-iris-100/70 py-16">
      <div className="container-page">
        <Reveal>
          <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
            Education &amp; Experience
          </p>

          <ul className="mt-9 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-4">
            {affiliations.map((a) => (
              <li key={a.name} className="flex items-center justify-center">
                <a
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={a.name}
                  title={a.name}
                  className="flex h-10 w-full items-center justify-center opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.src}
                    alt={`${a.name} logo`}
                    className="max-h-9 w-auto max-w-[150px] object-contain"
                    loading="lazy"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
