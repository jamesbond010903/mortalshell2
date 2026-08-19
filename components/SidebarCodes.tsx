import { home } from "@/lib/data";

export function SidebarCodes() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="rounded border border-border bg-card p-8">
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          Redeem Codes
        </h2>
        <p className="mt-2 text-base text-muted">
          {home.sidebarCodes.length > 0
            ? "Confirmed redemption codes are listed below."
            : "No official redemption codes have been confirmed for Mortal Shell II yet."}
        </p>
        {home.sidebarCodes.length > 0 && (
          <ul className="mt-4 space-y-2">
            {home.sidebarCodes.map((code, index) => (
              <li
                key={index}
                className="rounded border border-border bg-background px-4 py-3 font-mono text-base text-foreground"
              >
                {code}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
