import Link from "next/link";

const related = [
  { label: "Shells", href: "/shells" },
  { label: "Guides", href: "/guides" },
  { label: "Characters", href: "/characters" },
];

export function RelatedSidebar() {
  return (
    <aside className="px-4 py-8 sm:px-6">
      <h2 className="font-heading text-lg font-semibold text-foreground">Related pages</h2>
      <ul className="mt-4 space-y-3">
        {related.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-base text-foreground hover:text-primary">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
