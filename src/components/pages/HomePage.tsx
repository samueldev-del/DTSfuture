import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";
import { AdnSection } from "@/src/components/ui/AdnSection";
import { CtaSection } from "@/src/components/ui/CtaSection";
import { HeroSection } from "@/src/components/ui/HeroSection";
import { PortfolioSection } from "@/src/components/ui/PortfolioSection";
import { StorySection } from "@/src/components/ui/StorySection";

export function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <PortfolioSection />
        <AdnSection />
        <StorySection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}