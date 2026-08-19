import { Hero } from "@/components/Hero";
import { StartSection } from "@/components/StartSection";
import { AboutGame } from "@/components/AboutGame";
import { SidebarCodes } from "@/components/SidebarCodes";
import { FinalCta } from "@/components/FinalCta";

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
