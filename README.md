# Mortal Shell II Wiki

An independent, fan-made guide hub for **Mortal Shell II** — the standalone dark fantasy action RPG sequel from Cold Symmetry and Playstack (launching August 20, 2026 on PC, PS5, and Xbox Series X|S).

The site covers release info, editions, platforms, the eight playable Shells, Tarstone locations, boss guides, achievements, and early access updates in one scannable place. It is **not** affiliated with Cold Symmetry or Playstack.

## Tech Stack

- [Next.js](https://nextjs.org) 15 (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- MDX (`@next/mdx`) for article pages, with frontmatter metadata
- Fonts: Cinzel (headings) + Outfit (body)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build a production bundle:

```bash
npm run build
```

## Project Structure

- `app/` — routes. Most guide pages are MDX (`page.mdx`); list pages (`/shells`, `/guides`, `/editions`) are `page.tsx`.
- `components/` — shared UI (`Hero`, `PageHeader`, `Article`, `EntityCard`, `FaqAccordion`, etc.).
- `lib/data.ts` — Shell roster, home-page copy, footer/links, and site metadata.
- `public/images/` — key art and Steam screenshots.
- `mdx-components.tsx` — element styling for MDX-rendered pages.

## Content Notes

Content is in English and is aimed at search intent around the August 2026 launch. Release dates, platform, edition, and Shell-name data are sourced from official listings and the public trophy list. Ability details, Tarstone locations, boss walkthroughs, and aggregate review scores are community-reported from early launch coverage and are marked as "re-verified post-launch" where appropriate — treat them as guidance rather than final data.

## License

Unofficial fan wiki. Game imagery and trademarks belong to their respective owners.
