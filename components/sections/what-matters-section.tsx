"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/luxora/section-header";
import { AnimatedStat } from "@/components/luxora/animated-stat";
import { StaticImage } from "@/components/luxora/luxora-image";

/**
 * WhatMattersSection
 * Educational infographic using the real transparent 3D dental care kit tray photo.
 */
export function WhatMattersSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="what-matters" className="relative bg-luxora-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeader
          label="EDUCATION"
          headline="What Really Matters Is How You Clean."
          subheadline="Your toothbrush is important. But it can’t do it all."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          {/* Tooth diagram + stat */}
          <motion.div
            className="relative flex flex-col items-center justify-center rounded-3xl border border-luxora-mist bg-gradient-to-b from-white to-luxora-ice/50 p-8 shadow-luxury md:p-12"
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <StaticImage
              src="/assets/luxora/extracted/chrome-tooth-3d.png"
              alt="Luxora chrome metallic tooth emblem"
              width={720}
              height={500}
              className="w-40 md:w-52"
            />

            <div className="mt-8 grid grid-cols-2 gap-4">
              <AnimatedStat
                value={3}
                suffix="/5"
                label="Toothbrush cleans only 3 out of 5 tooth surfaces."
                decimals={0}
              />
              <div className="flex flex-col items-center justify-center text-center">
                <span className="font-serif text-5xl font-medium text-luxora-gold md:text-6xl">
                  +2
                </span>
                <span className="mt-2 max-w-[180px] text-sm leading-snug text-luxora-navy/70">
                  More surfaces reached with floss.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Copy + equation */}
          <motion.div
            className="flex flex-col gap-6"
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-base leading-relaxed text-luxora-navy/70 md:text-lg">
              A toothbrush cleans only part of the tooth surface. Luxora combines
              brushing, flossing, and targeted care to help reach the areas your
              toothbrush simply cannot.
            </p>

            <div className="my-4 h-px w-full bg-gradient-to-r from-luxora-gold/40 via-luxora-blue/30 to-transparent" />

            <div className="flex flex-col items-center gap-4 rounded-2xl border border-luxora-mist bg-white p-6 shadow-luxury">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="rounded-full bg-luxora-navy px-4 py-2 text-sm font-semibold text-white">
                  Toothbrush
                </span>
                <span className="font-serif text-2xl text-luxora-gold">+</span>
                <span className="rounded-full border border-luxora-navy/20 px-4 py-2 text-sm font-semibold text-luxora-navy">
                  Dental Floss
                </span>
              </div>
              <div className="h-px w-16 bg-luxora-gold/50" />
              <span className="text-center font-serif text-xl font-medium text-luxora-navy">
                Complete Care
              </span>
            </div>

            <p className="text-sm leading-relaxed text-luxora-navy/60">
              Daily flossing helps remove plaque between teeth and under the
              gumline — the places your brush bristles struggle to reach.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
