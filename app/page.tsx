import { Navigation } from "@/components/luxora/navigation";
import {
  HeroSection,
  ProductShowcaseSection,
  PerfectDuoSection,
  WhatMattersSection,
  CompleteCareKitSection,
  ManualCareKitSection,
  WhyLuxoraSection,
  DailyRitualSection,
} from "@/components/sections";
import { LuxuryCTA } from "@/components/luxora/luxury-cta";
import { Footer } from "@/components/luxora/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <ProductShowcaseSection />
      <PerfectDuoSection />
      <WhatMattersSection />
      <CompleteCareKitSection />
      <ManualCareKitSection />
      <WhyLuxoraSection />
      <DailyRitualSection />
      <div id="cta">
        <LuxuryCTA
          headline="A Brighter Smile Starts With Better Care."
          body="Discover a complete oral-care ritual designed to whiten, strengthen, and protect — beautifully."
          primaryCta={{ label: "Shop Luxora", href: "#products" }}
          secondaryCta={{ label: "Explore the Complete Kit", href: "#complete-care" }}
        />
      </div>
      <Footer />
    </>
  );
}
