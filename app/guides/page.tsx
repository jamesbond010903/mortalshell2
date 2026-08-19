import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Mortal Shell II Guides — Walkthroughs, Tarstones & Bosses",
  description:
    "Browse every Mortal Shell II guide: achievement walkthroughs, Tarstone locations, Shell characters, fast travel, and boss strategies.",
};

const guides = [
  {
    href: "/achievement-guide",
    title: "Achievement Guide",
    description: "All 53 trophies and how to unlock each one across PC, PS5, and Xbox.",
  },
  {
    href: "/characters",
    title: "Characters & Shells",
    description: "All 8 playable Shells, their abilities, and which to pick first.",
  },
  {
    href: "/tarstones",
    title: "Tarstone Locations",
    description: "All 73 Tarstones, missable picks, and merchant buys.",
  },
  {
    href: "/marksman-stone",
    title: "Marksman's Stone",
    description: "Where to find the ranged critical chance Tarstone.",
  },
  {
    href: "/fast-travel",
    title: "Fast Travel",
    description: "Unlock Mether's Breath and teleport between Beacons.",
  },
  {
    href: "/tar-golem",
    title: "Tar Golem Boss",
    description: "Prologue boss guide, strategy, and the missable trophy.",
  },
  {
    href: "/sanctuary-of-trials",
    title: "Sanctuary of Trials",
    description: "Chapel Key, Gaze King puzzle, and the Axe and Dagger.",
  },
];

export default function GuidesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Guides"
        title="Mortal Shell II Guides"
        description="Concise, scannable guides for the parts of Mortal Shell II players search for most: achievements, Shells, Tarstones, travel, and early bosses."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="rounded border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <h2 className="font-heading text-xl font-semibold text-foreground">
                {guide.title}
              </h2>
              <p className="mt-2 text-base text-muted">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
