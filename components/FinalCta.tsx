import Link from "next/link";
import { home, links } from "@/lib/data";

export function FinalCta() {
  const { title, description, primary, secondary } = home.finalCta;
  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="font-heading text-3xl font-bold text-foreground">{title}</h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{description}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/guides"
            className="rounded bg-primary px-5 py-2.5 font-semibold text-white hover:opacity-90"
          >
            {primary}
          </Link>
          <Link
            href={links.steam}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-foreground px-5 py-2.5 font-semibold text-foreground hover:bg-foreground hover:text-background"
          >
            {secondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
