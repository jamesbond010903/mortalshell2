import type { Metadata } from "next";
import { Cinzel, Outfit } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "900"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: "Mortal Shell II Wiki — Guide, Release Date",
  description:
    "Mortal Shell II Wiki helps players track release dates, editions, platforms, Shells, bosses, Tarstones, achievements, and early access updates in one fan hub.",
  keywords: "Mortal Shell II, Steam, PS5, Xbox, wiki, guide, release date",
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <GoogleAnalytics />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
