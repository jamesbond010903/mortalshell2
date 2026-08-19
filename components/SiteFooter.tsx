import Link from "next/link";
import { footer, links } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <span className="font-heading text-lg font-bold text-foreground">
              {footer.aboutTitle}
            </span>
            <p className="mt-3 max-w-xl text-base text-muted">{footer.about}</p>
            <p className="mt-3 max-w-xl text-base text-muted">{footer.description}</p>
          </div>
          <div>
            <p className="text-base font-semibold text-foreground">Official</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href={links.steam}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-muted hover:text-primary"
                >
                  {footer.playGame}
                </Link>
              </li>
              <li>
                <Link
                  href={links.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-muted hover:text-primary"
                >
                  {footer.officialDiscord}
                </Link>
              </li>
              <li>
                <Link
                  href={links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-muted hover:text-primary"
                >
                  {footer.officialYoutube}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-base font-semibold text-foreground">Legal</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/privacy" className="text-base text-muted hover:text-primary">
                  {footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-base text-muted hover:text-primary">
                  {footer.termsOfService}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-sm text-muted">
          <p>© 2026 Mortal Shell II Wiki. All Rights Reserved.</p>
          <p className="mt-1">
            Unofficial fan wiki. Not affiliated with Cold Symmetry or Playstack.
          </p>
        </div>
      </div>
    </footer>
  );
}
