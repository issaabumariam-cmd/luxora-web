"use client";

import { Sparkles, Shield, Wind, Grip, Smile } from "lucide-react";
import { SectionHeader } from "@/components/luxora/section-header";
import { ProductTray } from "@/components/luxora/product-tray";
import { StaticImage } from "@/components/luxora/luxora-image";

/**
 * CompleteCareKitSection
 * Deep navy tray section using real transparent 3D photos of each kit product.
 */
export function CompleteCareKitSection() {
  const products = [
    {
      name: "Superior Clean Toothbrush",
      description: "Soft high-density bristles for gentle plaque removal.",
      icon: Smile,
      visual: (
        <StaticImage
          src="/assets/luxora/extracted/toothbrushes-3d.png"
          alt="Luxora Superior Clean Toothbrushes"
          width={180}
          height={500}
          className="h-24 w-auto"
        />
      ),
    },
    {
      name: "Fresh Mint Dental Floss",
      description: "Smooth, shred-resistant floss for daily freshness.",
      icon: Wind,
      visual: (
        <StaticImage
          src="/assets/luxora/extracted/floss-mint-3d.png"
          alt="Luxora Fresh Mint Dental Floss"
          width={240}
          height={320}
          className="h-24 w-auto"
        />
      ),
    },
    {
      name: "Floss Picks with Handle",
      description: "Designed for deep and effective cleaning between teeth.",
      icon: Grip,
      visual: (
        <StaticImage
          src="/assets/luxora/extracted/floss-picks-3d.png"
          alt="Luxora Floss Picks with Handle"
          width={620}
          height={520}
          className="h-24 w-auto"
        />
      ),
    },
    {
      name: "Whitening Strips",
      description: "Designed for a visibly brighter smile.",
      icon: Sparkles,
      visual: (
        <StaticImage
          src="/assets/luxora/extracted/combo-sachets-3d.png"
          alt="Luxora Whitening Strips sachet"
          width={560}
          height={260}
          className="h-24 w-auto"
        />
      ),
    },
    {
      name: "Strengthening Strips",
      description: "Supports enamel care and sensitivity-conscious whitening.",
      icon: Shield,
      visual: (
        <StaticImage
          src="/assets/luxora/extracted/combo-sachets-3d.png"
          alt="Luxora Strengthening Strips sachet"
          width={560}
          height={260}
          className="h-24 w-auto"
        />
      ),
    },
  ];

  return (
    <section id="complete-care" className="bg-luxora-ice py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeader
          label="COMPLETE CARE KIT"
          headline="Everything for a Healthier, Brighter Smile"
          subheadline="A curated collection of daily essentials, presented in a premium navy tray with gold accents."
          className="mb-14 md:mb-20"
        />

        <div className="mb-10 flex justify-center">
          <StaticImage
            src="/assets/luxora/extracted/care-kit-tray-3d.png"
            alt="Luxora Complete Care Kit tray with toothbrushes, dental floss, and floss picks"
            width={900}
            height={570}
            className="max-w-4xl rounded-2xl shadow-luxury"
          />
        </div>

        <ProductTray products={products} />
      </div>
    </section>
  );
}
