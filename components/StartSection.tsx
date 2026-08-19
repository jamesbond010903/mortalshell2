import { home } from "@/lib/data";

export function StartSection() {
  const { eyebrow, title, cards } = home.start;
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <p className="text-sm uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="mt-3 font-heading text-3xl font-bold text-foreground">{title}</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {cards.map((card) => (
          <div key={card.number} className="rounded border border-border bg-card p-6">
            <span className="font-heading text-3xl font-bold text-primary">
              {card.number}
            </span>
            <h3 className="mt-2 font-heading text-xl font-semibold text-foreground">
              {card.title}
            </h3>
            <p className="mt-2 text-base text-muted">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
