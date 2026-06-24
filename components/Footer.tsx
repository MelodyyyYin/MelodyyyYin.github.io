import { Github, Linkedin, Mail, FileText, Send } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "@/lib/content";

const socials = [
  { href: profile.github, label: "GitHub", icon: Github, external: true },
  { href: profile.linkedin, label: "LinkedIn", icon: Linkedin, external: true },
  { href: profile.resume, label: "Résumé", icon: FileText, external: true },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail, external: false },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-iris-100/70 py-20"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-iris-200/40 blur-3xl" />
      </div>

      <div className="container-page text-center">
        <Reveal>
          <p className="section-label justify-center">
            <Send className="h-3.5 w-3.5" aria-hidden />
            Get in touch
          </p>
          <h2 className="heading">
            Let&apos;s build reliable <span className="gradient-text">AI systems</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-ink-soft">
            I&apos;m open to roles and collaborations in AI infrastructure, LLM
            systems, distributed systems, cloud, and backend engineering.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-canvas shadow-lift transition-transform hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>

          <div className="mt-8 flex items-center justify-center gap-3">
            {socials.map(({ href, label, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-iris-100 bg-white/70 text-ink-soft shadow-soft backdrop-blur transition-all hover:-translate-y-0.5 hover:text-iris-600"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </Reveal>

        <p className="mt-14 font-mono text-xs text-ink-muted">
          © {new Date().getFullYear()} {profile.name} · Built with Next.js,
          Tailwind & Framer Motion
        </p>
      </div>
    </footer>
  );
}
