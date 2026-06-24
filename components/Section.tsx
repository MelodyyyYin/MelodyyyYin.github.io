import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  label: string;
  title: ReactNode;
  icon?: LucideIcon;
  intro?: ReactNode;
  children: ReactNode;
};

export default function Section({
  id,
  label,
  title,
  icon: Icon,
  intro,
  children,
}: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <p className="section-label">
            {Icon ? (
              <Icon className="h-3.5 w-3.5" aria-hidden />
            ) : (
              <span className="h-1.5 w-1.5 rounded-full bg-iris-500" />
            )}
            {label}
          </p>
          <h2 className="heading">{title}</h2>
          {intro && (
            <p className="mt-3 max-w-2xl text-sm text-ink-muted">{intro}</p>
          )}
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
