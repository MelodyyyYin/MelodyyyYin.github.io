import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { marked } from "marked";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllNotes, getNote, formatDate } from "@/lib/notes";

export function generateStaticParams() {
  return getAllNotes().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return { title: "Note" };
  return { title: note.title, description: note.summary };
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  const html = marked.parse(note.content, { async: false }) as string;

  return (
    <>
      <Navbar />
      <main className="container-page min-h-screen max-w-3xl pb-24 pt-28">
        <Link
          href="/notes"
          className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          All notes
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs text-ink-muted">
            {formatDate(note.date)}
          </span>
          {note.status === "wip" && (
            <span className="rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-amber-700">
              Work in progress
            </span>
          )}
        </div>

        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {note.title}
        </h1>

        <div className="mt-4 flex flex-wrap gap-2">
          {note.tags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <article
          className="prose prose-neutral mt-8 max-w-none prose-headings:font-display prose-headings:text-ink prose-a:text-apricot-600 prose-strong:text-ink prose-blockquote:border-l-apricot-300 prose-blockquote:text-ink-soft prose-code:text-apricot-600"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
      <Footer />
    </>
  );
}
