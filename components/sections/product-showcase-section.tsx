"use client";

import { Sparkles, Shield, Heart, Zap, Gem } from "lucide-react";
import { SectionHeader } from "@/components/luxora/section-header";
import { ProductCard } from "@/components/luxora/product-card";
import { StaticImage } from "@/components/luxora/luxora-image";

/**
 * ProductShowcaseSection
 * Three premium product cards using real transparent 3D packaging photos.
 */
export function ProductShowcaseSection() {
  const products = [
    {
      title: "Whitening Strips",
      subtitle: "Visible Brightness",
      description:
        "Visible brightness with a gentle, enamel-conscious formula designed for daily confidence.",
      benefits: [
        { icon: Sparkles, label: "Brightens" },
        { icon: Heart, label: "Gentle" },
      ],
      visual: (
        <StaticImage
          src="/assets/luxora/extracted/combo-box-closed-3d.png"
          alt="Luxora Whitening Strips box"
          width={560}
          height={680}
          className="h-44 w-auto"
        />
      ),
    },
    {
      title: "Strengthening Strips",
      subtitle: "Enamel Support",
      description:
        "Supports enamel protection and helps reduce sensitivity after whitening.",
      benefits: [
        { icon: Shield, label: "Strengthens" },
        { icon: Heart, label: "Soothes" },
      ],
      visual: (
        <StaticImage
          src="/assets/luxora/extracted/combo-box-open-3d.png"
          alt="Luxora Strengthening Strips open box with sachets"
          width={620}
          height={680}
          className="h-44 w-auto"
        />
      ),
    },
    {
      title: "Complete Care Combo",
      subtitle: "The Ritual",
      description:
        "A complete whitening and strengthening ritual for daily confidence.",
      benefits: [
        { icon: Zap, label: "Whitens" },
        { icon: Gem, label: "Protects" },
      ],
      visual: (
        <StaticImage
          src="/assets/luxora/extracted/combo-box-closed-3d.png"
          alt="Luxora Complete Care Combo packaging"
          width={560}
          height={680}
          className="h-56 w-auto"
        />
      ),
      featured: true,
    },
  ];

  return (
    <section id="products" className="relative bg-luxora-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeader
          label="THE COLLECTION"
          headline="Crafted for a Brighter, Stronger Smile"
          subheadline="Every Luxora product is designed to work in harmony — whitening, strengthening, and protecting with elegance."
          className="mb-14 md:mb-20"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
