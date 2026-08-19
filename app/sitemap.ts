import type { MetadataRoute } from "next";
import { shells } from "@/lib/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

const guidePages = [
  "/guides",
  "/editions",
  "/characters",
  "/achievement-guide",
  "/beta",
  "/cheat",
  "/devout-edition",
  "/early-access",
  "/fast-travel",
  "/game-pass",
  "/marksman-stone",
  "/metacritic",
  "/ps5",
  "/release-date",
  "/revered-edition",
  "/review",
  "/sanctuary-of-trials",
  "/tar-golem",
  "/tarstones",
  "/trailer-song",
  "/xbox",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: siteUrl, lastModified, priority: 1 },
    { url: `${siteUrl}/shells`, lastModified, priority: 0.9 },
    ...guidePages.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified,
      priority: 0.7,
    })),
    ...shells.map((shell) => ({
      url: `${siteUrl}/shells/${shell.slug}`,
      lastModified,
      priority: 0.7,
    })),
  ];
}
