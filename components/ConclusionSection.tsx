import Link from "next/link";

export function ConclusionSection({
  title,
  body,
  links,
}: {
  title: string;
  body: string;
  links: { label: string; href: string }[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="rounded border border-border bg-card p-8">
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          {title}
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{body}</p>
        <div className="mt-6 flex flex-wrap gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded border border-foreground px-5 py-2.5 font-semibold text-foreground hover:bg-foreground hover:text-background"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
