import Link from "next/link";
import { i18n } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <img src="/favicon-32x32.png" alt="" className="h-8 w-8" />
          <span className="font-heading text-xl font-bold tracking-wide text-foreground">
            {i18n.nav.brand}
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-6">
              {i18n.nav.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base text-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <LanguageSwitcher />
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded border border-border px-3 py-1.5 text-base text-foreground">
              Menu
            </summary>
            <ul className="absolute right-0 top-full z-10 mt-2 w-44 rounded border border-border bg-card p-2">
              {i18n.nav.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded px-3 py-2 text-base text-foreground hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </header>
  );
}
