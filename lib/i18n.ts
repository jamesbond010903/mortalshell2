export const i18n = {
  nav: {
    brand: "Mortal Shell II Wiki",
    items: [
      { label: "Shells", href: "/shells" },
      { label: "Guides", href: "/guides" },
      { label: "Editions", href: "/editions" },
    ],
  },
} as const;

// Localization — prioritize 4 languages; localized theme names keep the "Mortal Shell II" brand.
export const locales = [
  {
    code: "en",
    label: "English",
    localizedName: "Mortal Shell II",
    reason: "Global primary search term; default site language.",
  },
  {
    code: "ja",
    label: "日本語",
    localizedName: "Mortal Shell II",
    reason: "PlayStation JP page localized; PS5 search intent.",
  },
  {
    code: "de",
    label: "Deutsch",
    localizedName: "Mortal Shell II",
    reason: "Official DE page exists; EU souls-like audience.",
  },
  {
    code: "pt-BR",
    label: "Português (Brasil)",
    localizedName: "Mortal Shell II",
    reason: "PlayStation BR page localized; large search volume.",
  },
] as const;
