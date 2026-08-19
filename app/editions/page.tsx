import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Mortal Shell II Editions & Platforms — Prices and Bonuses",
  description:
    "Compare Mortal Shell II editions and platform details: Devout and Revered editions, release date, early access, PS5, Xbox, and Game Pass.",
  alternates: { canonical: "/editions" },
};

const editions = [
  {
    href: "/devout-edition",
    title: "Devout Edition",
    description: "Digital deluxe with 72 hours early access and Obsidian skins.",
  },
  {
    href: "/revered-edition",
    title: "Revered Edition",
    description: "PS5 physical collector's edition with SteelBook and art book.",
  },
  {
    href: "/release-date",
    title: "Release Date",
    description: "August 20, 2026 on PC, PS5, and Xbox Series X|S.",
  },
  {
    href: "/early-access",
    title: "Early Access",
    description: "Starts August 17, 2026 with the Devout Edition.",
  },
  {
    href: "/beta",
    title: "Beta & Demo",
    description: "Steam and console open beta dates and what carried over.",
  },
  {
    href: "/ps5",
    title: "PS5",
    description: "PlayStation 5 editions, performance, and reviews.",
  },
  {
    href: "/xbox",
    title: "Xbox Series X|S",
    description: "Xbox editions, pricing, and Game Pass status.",
  },
  {
    href: "/game-pass",
    title: "Game Pass",
    description: "Whether Mortal Shell II is on Game Pass at launch.",
  },
];

export default function EditionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Editions"
        title="Mortal Shell II Editions & Platforms"
        description="Compare every way to buy Mortal Shell II: digital and physical editions, early access timing, and what each platform gets at launch."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {editions.map((edition) => (
            <Link
              key={edition.href}
              href={edition.href}
              className="rounded border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <h2 className="font-heading text-xl font-semibold text-foreground">
                {edition.title}
              </h2>
              <p className="mt-2 text-base text-muted">{edition.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
