import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  label: string;
  title: ReactNode;
  children: ReactNode;
};

export default function Section({ id, label, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <p className="section-label">
            <span className="h-1.5 w-1.5 rounded-full bg-apricot-500" />
            {label}
          </p>
          <h2 className="heading">{title}</h2>
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
