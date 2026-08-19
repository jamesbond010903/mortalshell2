import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";

const categoryHref: Partial<Record<string, string>> = {
  Shells: "/shells",
  Guides: "/guides",
  Guide: "/guides",
  Editions: "/editions",
};

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  const middleHref = categoryHref[eyebrow];
  const crumbs: Crumb[] = [
    { label: "Home", href: "/" },
    { label: eyebrow, ...(middleHref ? { href: middleHref } : {}) },
    { label: title },
  ];

  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Breadcrumbs items={crumbs} />
        <p className="mt-4 text-sm uppercase tracking-widest text-primary">{eyebrow}</p>
        <h1 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted">{description}</p>
      </div>
    </section>
  );
}
