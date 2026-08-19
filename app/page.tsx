import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { StartSection } from "@/components/StartSection";
import { AboutGame } from "@/components/AboutGame";
import { SidebarCodes } from "@/components/SidebarCodes";
import { FinalCta } from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Mortal Shell II Wiki — Guide, Release Date & Shells",
  description:
    "Mortal Shell II fan wiki: release date, editions, all 8 Shells, Tarstone locations, achievements, and boss guides for PC, PS5, and Xbox.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StartSection />
      <AboutGame />
      <SidebarCodes />
      <FinalCta />
    </>
  );
}
