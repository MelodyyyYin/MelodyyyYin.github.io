import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllNotes, formatDate } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Short, technical notes from Yue (Melody) Yin — reading source, debugging distributed systems, and profiling GPU kernels.",
};

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <>
      <Navbar />
      <main className="container-page min-h-screen pb-24 pt-28">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>

        <p className="section-label mt-8">
          <span className="h-1.5 w-1.5 rounded-full bg-apricot-500" />
          Notes
        </p>
        <h1 className="heading">🧪 Notes &amp; hardcore logs</h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
          Short, technical notes from reading source, debugging distributed
          systems, and profiling GPU kernels. A few are still in progress — more
          on the way.
        </p>

        <div className="mt-10 space-y-4">
          {notes.map((n) => (
            <Link
              key={n.slug}
              href={`/notes/${n.slug}`}
              className="block glass p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs text-ink-muted">
                  {formatDate(n.date)}
                </span>
                {n.status === "wip" && (
                  <span className="rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-amber-700">
                    Work in progress
                  </span>
                )}
              </div>
              <h2 className="mt-2 font-display text-xl font-semibold text-ink">
                {n.title}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                {n.summary}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {n.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
