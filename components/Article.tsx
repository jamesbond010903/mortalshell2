export function Article({ children }: { children: React.ReactNode }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      {children}
    </article>
  );
}
