import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { FooterSection } from "@/components/landing/FooterSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { MountainMomentsSection } from "@/components/landing/MountainMomentsSection";
import { RoadmapSection } from "@/components/landing/RoadmapSection";
import { SupportSection } from "@/components/landing/SupportSection";
import { WaitlistSection } from "@/components/landing/WaitlistSection";

const supportBackgroundImage =
  "https://gratsielablog.me/wp-content/uploads/2025/01/IMG_E9487_%D0%9F%D0%BE%D0%BB%D0%B5%D0%B6%D0%B0%D0%BD-1024x576.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-white text-slate-900">
      <main className="w-full">
        <HeroSection />
        <WaitlistSection />
        <FeaturesSection />
        <MountainMomentsSection />
        <RoadmapSection />
        <FaqSection />

        <section
          className="relative isolate overflow-hidden"
          style={{
            backgroundImage: `url('${supportBackgroundImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-slate-900/80" />
          <div className="relative">
            <SupportSection />
            <FooterSection />
          </div>
        </section>
      </main>
    </div>
  );
}
