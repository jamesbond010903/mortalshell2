"use client";

import { useEffect, useRef, useState } from "react";
import { locales } from "@/lib/i18n";

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="cursor-pointer rounded border border-border px-3 py-1.5 text-base text-foreground hover:border-primary"
      >
        English
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-10 mt-2 w-56 rounded border border-border bg-card p-2"
        >
          {locales.map((locale) => (
            <li
              key={locale.code}
              role="option"
              aria-selected={locale.code === "en"}
              className="block rounded px-3 py-2 text-base"
            >
              <span
                className={locale.code === "en" ? "font-semibold text-primary" : "text-foreground"}
              >
                {locale.label}
              </span>
              {locale.code !== "en" && (
                <span className="ml-2 text-sm text-muted">Coming soon</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
