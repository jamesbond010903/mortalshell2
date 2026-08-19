import Link from "next/link";
import { home } from "@/lib/data";

export function AboutGame() {
  const { title, paragraphs, stats, cta } = home.aboutGame;
  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="font-heading text-3xl font-bold text-foreground">{title}</h2>
        <div className="mt-6 max-w-3xl space-y-4">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>
        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded border border-border bg-background p-4">
              <dt className="text-sm uppercase tracking-wide text-muted">{stat.label}</dt>
              <dd className="mt-1 text-base font-semibold text-foreground">{stat.value}</dd>
            </div>
          ))}
        </dl>
        <Link
          href="/guides"
          className="mt-8 inline-block rounded bg-primary px-5 py-2.5 font-semibold text-white hover:opacity-90"
        >
          {cta}
        </Link>
      </div>
    </section>
  );
}
