import Link from "next/link";
import Image from "next/image";
import type { Shell } from "@/lib/data";

const confidenceLabel: Record<Shell["confidence"], string> = {
  confirmed: "Confirmed",
  community: "Community reported",
  roadmap: "Roadmap",
};

export function EntityCard({ shell }: { shell: Shell }) {
  return (
    <article className="overflow-hidden rounded border border-border bg-card">
      {shell.image && (
        <Link href={`/shells/${shell.slug}`} className="block">
          <Image
            src={shell.image}
            alt={`${shell.name} gameplay`}
            width={1600}
            height={900}
            className="aspect-video w-full object-cover transition-transform hover:scale-105"
          />
        </Link>
      )}
      <div className="p-6">
        <p className="inline-block rounded bg-primary px-2.5 py-1 text-sm uppercase tracking-wide text-white">
          {confidenceLabel[shell.confidence]}
        </p>
        <h2 className="mt-2 font-heading text-2xl font-semibold text-foreground">
          <Link href={`/shells/${shell.slug}`} className="hover:text-primary">
            {shell.name}
          </Link>
        </h2>
        <p className="mt-2 text-base text-muted">{shell.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {shell.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-border px-2.5 py-1 text-sm text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 space-y-2 text-base">
          {shell.howToUnlock && (
            <p>
              <span className="font-semibold text-foreground">Unlock: </span>
              <span className="text-muted">{shell.howToUnlock}</span>
            </p>
          )}
          <p>
            <span className="font-semibold text-foreground">Start: </span>
            <span className="text-muted">{shell.start}</span>
          </p>
          <p>
            <span className="font-semibold text-foreground">Watch: </span>
            <span className="text-muted">{shell.watch}</span>
          </p>
          <p>
            <span className="font-semibold text-foreground">Source: </span>
            <span className="text-muted">{shell.source}</span>
          </p>
        </div>
      </div>
    </article>
  );
}
