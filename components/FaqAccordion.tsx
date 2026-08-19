export function FaqAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h2 className="font-heading text-2xl font-semibold text-foreground">FAQ</h2>
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded border border-border bg-card px-5 py-4"
          >
            <summary className="cursor-pointer list-none font-semibold text-foreground group-open:text-primary">
              {item.question}
            </summary>
            <p className="mt-3 text-base text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
