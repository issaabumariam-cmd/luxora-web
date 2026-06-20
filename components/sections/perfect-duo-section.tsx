"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Shield, Heart, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/luxora/section-header";
import { BenefitIcon } from "@/components/luxora/benefit-icon";
import { StaticImage } from "@/components/luxora/luxora-image";

/**
 * PerfectDuoSection
 * Split layout using the real transparent 3D combo packaging photo.
 */
export function PerfectDuoSection() {
  const shouldReduceMotion = useReducedMotion();

  const benefits = [
    {
      icon: Sparkles,
      label: "Whitens",
      description: "Visibly brighter smile",
    },
    {
      icon: Shield,
      label: "Strengthens",
      description: "Supports enamel care",
    },
    {
      icon: Heart,
      label: "Reduces Sensitivity",
      description: "Comfort after whitening",
    },
    {
      icon: ShieldCheck,
      label: "Protects",
      description: "Daily confidence",
    },
  ];

  return (
    <section id="duo" className="relative overflow-hidden bg-luxora-ice py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left copy */}
          <div className="flex flex-col gap-6">
            <SectionHeader
              label="THE PERFECT DUO"
              headline="Beauty + Strength"
              subheadline="Luxora Whitening and Strengthening Strips work together to brighten your smile while supporting enamel strength and comfort."
              align="left"
            />

            <div className="grid grid-cols-2 gap-4 pt-4">
              {benefits.map((b) => (
                <BenefitIcon
                  key={b.label}
                  icon={b.icon}
                  label={b.label}
                  description={b.description}
                  variant="light"
                  size="md"
                  className="items-start text-left"
                />
              ))}
            </div>
          </div>

          {/* Right packaging visual */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative w-full max-w-xl rounded-3xl border border-white/60 bg-white/60 p-4 shadow-luxury backdrop-blur-xl md:p-6">
              <StaticImage
                src="/assets/luxora/extracted/combo-box-open-3d.png"
                alt="Luxora Complete Care Combo open packaging with whitening and strengthening strips"
                width={620}
                height={700}
                className="rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
