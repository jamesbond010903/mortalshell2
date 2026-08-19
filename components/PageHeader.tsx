export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <p className="text-sm uppercase tracking-widest text-primary">{eyebrow}</p>
        <h1 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted">{description}</p>
      </div>
    </section>
  );
}
