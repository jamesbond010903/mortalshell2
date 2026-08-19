import type { Metadata } from "next";
import Image from "next/image";
import { shells } from "@/lib/data";
import { PageHeader } from "@/components/PageHeader";
import { EntityCard } from "@/components/EntityCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ConclusionSection } from "@/components/ConclusionSection";

export const metadata: Metadata = {
  title: "Mortal Shell II Shells — All 8 Playable Shells",
  description:
    "Every Mortal Shell II Shell with unlock locations and playstyles: Tiel, Eredrim, Sariel, Lazlo, Proxima, Smert, Gragu, and Sester Genessa.",
  alternates: { canonical: "/shells" },
};

export default function ShellsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Shells"
        title="Mortal Shell II Shells"
        description="Choose Shells by playstyle. Confirmed launch Shells get decision guidance now; community labels stay marked until exact in-game data is stronger."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="rounded border border-border bg-card p-8">
          <h2 className="font-heading text-2xl font-semibold text-foreground">
            Obsidian Skin Set — Devout Edition
          </h2>
          <p className="mt-2 max-w-3xl text-base text-muted">
            The Devout Edition adds the exclusive Obsidian Skin Set (called “Shades” in-game) for
            all eight playable Shells: Tiel, Eredrim, Sariel, Lazlo, Proxima, Smert, Gragu, and
            Sester Genessa. Tiel is shown below in his standard and Obsidian variants.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <figure>
              <Image
                src="/images/tiel-front-poster.jpg"
                alt="Tiel standard shade"
                width={2000}
                height={1124}
                className="rounded border border-border"
              />
              <figcaption className="mt-2 text-sm text-muted">Tiel — Standard</figcaption>
            </figure>
            <figure>
              <Image
                src="/images/tiel-obsidian-poster.jpg"
                alt="Tiel Obsidian shade from the Devout Edition"
                width={2000}
                height={1124}
                className="rounded border border-border"
              />
              <figcaption className="mt-2 text-sm text-muted">
                Tiel — Obsidian (Devout Edition)
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shells.map((shell) => (
            <EntityCard key={shell.slug} shell={shell} />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="rounded border border-border bg-card p-8">
          <h2 className="font-heading text-2xl font-semibold text-foreground">
            Shell locations map
          </h2>
          <p className="mt-2 max-w-3xl text-base text-muted">
            All eight Shells marked across Fainweald and Mammon. Map via Rock
            Paper Shotgun.
          </p>
          <div className="mt-6 overflow-hidden rounded border border-border">
            <Image
              src="/images/map-full.jpg"
              alt="Mortal Shell II all Shell locations map"
              width={4096}
              height={4096}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>
      <ConclusionSection
        title="Choosing your first Shell"
        body="Start with a Shell that matches your preferred fight tempo. Confirm your pick against the in-game data before committing upgrade resources."
        links={[
          { label: "Guides", href: "/guides" },
          { label: "Characters", href: "/characters" },
          { label: "Tarstones", href: "/tarstones" },
        ]}
      />
      <FaqAccordion
        items={[
          {
            question: "Which Shell is best for beginners?",
            answer:
              "Early coverage points to Tiel and Sester Genessa for their forgiving, flashy combat, but no settled tier list exists yet. Pick a Shell that matches your preferred fight tempo.",
          },
          {
            question: "How many Shells are in Mortal Shell II?",
            answer:
              "Eight: Tiel, Eredrim, Sariel, Lazlo, Proxima, Smert, Gragu, and Sester Genessa. The Devout Edition also adds the Obsidian skin set for all eight.",
          },
          {
            question: "Can I switch Shells freely?",
            answer:
              "Yes. Shell upgrade points are refundable, so you can switch Shells and reallocate points without penalty — a key change from the first game.",
          },
        ]}
      />
    </>
  );
}
