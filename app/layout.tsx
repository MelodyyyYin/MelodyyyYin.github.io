import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const siteUrl = "https://melodyyyin.github.io";
const description =
  "Yue (Melody) Yin — Software Engineer focused on AI infrastructure, LLM systems, and distributed systems. Building scalable backend and AI systems across cloud infrastructure, distributed serving, LLM inference, and observability.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yue (Melody) Yin — AI Infrastructure & Distributed Systems",
    template: "%s · Melody Yin",
  },
  description,
  keywords: [
    "Yue Yin",
    "Melody Yin",
    "AI Infrastructure",
    "LLM Systems",
    "Distributed Systems",
    "Cloud Infrastructure",
    "Backend Engineer",
    "Observability",
    "LLM Serving",
    "sglang",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Yue (Melody) Yin — AI Infrastructure & Distributed Systems",
    description,
    siteName: "Yue (Melody) Yin",
  },
  twitter: {
    card: "summary",
    title: "Yue (Melody) Yin — AI Infrastructure & Distributed Systems",
    description,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
