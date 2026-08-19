import Link from "next/link";
import Image from "next/image";
import { home, links } from "@/lib/data";

export function Hero() {
  const {
    eyebrow,
    title,
    description,
    stats,
    primaryCta,
    secondaryCta,
    tertiaryCta,
    videoLabel,
  } = home.hero;
  return (
    <section className="relative border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary">{eyebrow}</p>
            <h1 className="mt-4 font-heading text-4xl font-bold text-foreground sm:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">{description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/guides"
                className="rounded bg-primary px-5 py-2.5 font-semibold text-white hover:opacity-90"
              >
                {primaryCta}
              </Link>
              <Link
                href="/tarstones"
                className="rounded border border-foreground px-5 py-2.5 font-semibold text-foreground hover:bg-foreground hover:text-background"
              >
                {secondaryCta}
              </Link>
              <Link
                href="/editions"
                className="rounded border border-foreground px-5 py-2.5 font-semibold text-foreground hover:bg-foreground hover:text-background"
              >
                {tertiaryCta}
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <Image
              src="/images/hero-key-art.png"
              alt="Mortal Shell II key art"
              width={1000}
              height={563}
              priority
              className="rounded border border-border"
            />
          </div>
        </div>
        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <li
              key={stat}
              className="rounded border border-border bg-background px-4 py-3 text-base text-foreground"
            >
              {stat}
            </li>
          ))}
        </ul>
        <a
          href={links.trailer}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-sm uppercase tracking-wide text-primary hover:underline"
        >
          {videoLabel}
        </a>
      </div>
    </section>
  );
}
