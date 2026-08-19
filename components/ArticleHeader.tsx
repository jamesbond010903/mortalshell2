import Image from "next/image";
import type { Shell } from "@/lib/data";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export function ArticleHeader({ shell }: { shell: Shell }) {
  return (
    <div className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Shells", href: "/shells" },
            { label: shell.name },
          ]}
        />
        <div className="mt-4 flex flex-wrap gap-2">
          {shell.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-primary px-2.5 py-1 text-sm text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-5xl">
          {shell.name}
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted">{shell.description}</p>
        {shell.image && (
          <div className="mt-8 w-full max-w-3xl overflow-hidden rounded border border-border">
            <Image
              src={shell.image}
              alt={`${shell.name} gameplay`}
              width={1600}
              height={900}
              className="h-auto w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
}
