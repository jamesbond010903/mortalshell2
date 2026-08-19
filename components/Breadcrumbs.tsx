import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden="true" className="text-muted">
                  /
                </span>
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-muted transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={isLast ? "text-foreground" : "text-muted"}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
