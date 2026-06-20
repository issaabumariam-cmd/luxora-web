"use client";

import { motion } from "framer-motion";
import { Sparkles, Wind, Smile } from "lucide-react";
import { SectionHeader } from "@/components/luxora/section-header";
import { RitualTimeline } from "@/components/luxora/ritual-timeline";
import { PremiumButton } from "@/components/luxora/premium-button";

/**
 * DailyRitualSection
 * Elegant 3-step routine with timeline ribbon animation.
 */
export function DailyRitualSection() {
  const steps = [
    {
      number: "01",
      title: "Clean",
      body: "Brush gently with Luxora soft-care toothbrush.",
      icon: Smile,
    },
    {
      number: "02",
      title: "Reach",
      body: "Use floss or floss picks to clean where brushing cannot.",
      icon: Wind,
    },
    {
      number: "03",
      title: "Brighten & Protect",
      body: "Apply Luxora strips as part of your whitening and strengthening ritual.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="ritual" className="relative overflow-hidden bg-luxora-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <SectionHeader
          label="DAILY RITUAL"
          headline="Your Daily Luxora Ritual"
          subheadline="Three elegant steps to a healthier, more confident smile — every morning and night."
          className="mb-14 md:mb-20"
        />

        <RitualTimeline steps={steps} />

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <PremiumButton variant="primary" size="lg" href="#products">
            Start Your Ritual
          </PremiumButton>
        </motion.div>
      </div>
    </section>
  );
}
