"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Hand, Heart, Battery, Feather, VolumeX, Luggage, Leaf, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/luxora/section-header";
import { GlassCard } from "@/components/luxora/glass-card";
import { ComparisonTable } from "@/components/luxora/comparison-table";
import { StaticImage } from "@/components/luxora/luxora-image";

/**
 * ManualCareKitSection
 * Premium manual care kit using real transparent 3D product photos.
 */
export function ManualCareKitSection() {
  const shouldReduceMotion = useReducedMotion();

  const features = [
    { icon: Hand, label: "Manual Control", body: "You control the pressure." },
    { icon: Heart, label: "Gentle & Effective", body: "Kind to gums, thorough on plaque." },
    { icon: Luggage, label: "Perfect on the Go", body: "Lightweight, travel-ready design." },
    { icon: Battery, label: "No Battery", body: "No charging, no hassle." },
    { icon: Feather, label: "No Charging", body: "Always ready when you are." },
    { icon: VolumeX, label: "Quiet & Smooth", body: "A peaceful brushing experience." },
    { icon: Leaf, label: "Travel Friendly", body: "Compact and easy to pack." },
    { icon: ShieldCheck, label: "Eco-Conscious", body: "Built for long-term use." },
  ];

  const comparisonRows = [
    { feature: "You control the pressure", manual: true, electronic: false },
    { feature: "Gentler on gums", manual: true, electronic: false },
    { feature: "No battery or charging", manual: true, electronic: false },
    { feature: "Lightweight and compact", manual: true, electronic: false },
    { feature: "Quiet and discreet", manual: true, electronic: false },
    { feature: "Cost effective", manual: true, electronic: false },
  ];

  return (
    <section id="manual-kit" className="relative overflow-hidden bg-gradient-to-b from-luxora-white to-luxora-ice py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left visual — use the reference poster background to fill space richly */}
          <motion.div
            className="relative flex flex-col items-center justify-center gap-6"
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/60 bg-white/60 shadow-luxury backdrop-blur-xl">
              <StaticImage
                src="/assets/luxora/extracted/bg-manual-kit.jpg"
                alt="Luxora Manual Care Kit reference poster with toothbrush, dental floss, and water flosser"
                width={1240}
                height={960}
                className="w-full rounded-3xl"
              />
            </div>

            <div className="flex flex-wrap items-end justify-center gap-5">
              <StaticImage
                src="/assets/luxora/extracted/manual-toothbrush-3d.png"
                alt="Luxora manual toothbrush"
                width={160}
                height={500}
                className="h-40 w-auto"
              />
              <StaticImage
                src="/assets/luxora/extracted/manual-floss-3d.png"
                alt="Luxora manual dental floss"
                width={220}
                height={320}
                className="h-40 w-auto"
              />
              <StaticImage
                src="/assets/luxora/extracted/manual-water-flosser-3d.png"
                alt="Luxora manual water flosser"
                width={250}
                height={520}
                className="h-40 w-auto"
              />
            </div>
          </motion.div>

          {/* Right copy + table */}
          <div className="flex flex-col gap-8">
            <SectionHeader
              label="MANUAL CARE KIT"
              headline="Manual Care Kit"
              subheadline="Complete. Compact. In Control."
              align="left"
            />

            <p className="-mt-4 text-base leading-relaxed text-luxora-navy/70">
              Everything you need for a healthier mouth — naturally. Manual tools
              give you precision, portability, and peace of mind without batteries
              or charging.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {features.map((f, i) => (
                <GlassCard
                  key={f.label}
                  className="flex flex-col items-center gap-2 p-4 text-center"
                  hover
                  shimmer={i === 0}
                >
                  <f.icon size={22} className="text-luxora-blue" strokeWidth={1.5} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-luxora-navy">
                    {f.label}
                  </span>
                  <span className="text-[10px] leading-snug text-luxora-navy/60">
                    {f.body}
                  </span>
                </GlassCard>
              ))}
            </div>

            <div className="mt-4">
              <span className="label-luxury mb-4 block text-luxora-gold">
                MANUAL VS ELECTRONIC
              </span>
              <ComparisonTable rows={comparisonRows} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
