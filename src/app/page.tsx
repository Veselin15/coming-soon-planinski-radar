import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { FooterSection } from "@/components/landing/FooterSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { RoadmapSection } from "@/components/landing/RoadmapSection";
import { SupportSection } from "@/components/landing/SupportSection";
import { WaitlistSection } from "@/components/landing/WaitlistSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-sky-50 to-white text-slate-900">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 sm:px-6 sm:py-12 lg:gap-12 lg:px-8">
        <HeroSection />
        <WaitlistSection />
        <FeaturesSection />
        <RoadmapSection />
        <SupportSection />
      </main>
      <FooterSection />
    </div>
  );
}
