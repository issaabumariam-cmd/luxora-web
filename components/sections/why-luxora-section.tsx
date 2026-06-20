"use client";

import { Shield, Stethoscope, Heart, FlaskConical, Activity, Lock } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/luxora/section-header";
import { SparkleField } from "@/components/luxora/sparkle-field";

/**
 * WhyLuxoraSection
 * Trust point cards: glass surfaces, soft blue glow, premium icons.
 */
export function WhyLuxoraSection() {
  const shouldReduceMotion = useReducedMotion();

  const trustPoints = [
    {
      icon: Shield,
      title: "Enamel Safe",
      body: "Formulated with enamel-conscious ingredients for everyday use.",
    },
    {
      icon: Stethoscope,
      title: "Dentist Formulated",
      body: "Developed with dental expertise and professional insight.",
    },
    {
      icon: Heart,
      title: "Gentle & Effective",
      body: "A balance of visible results and comfortable daily care.",
    },
    {
      icon: FlaskConical,
      title: "Clinically Inspired",
      body: "Inspired by clinical oral-care research and best practices.",
    },
    {
      icon: Activity,
      title: "Sensitivity Conscious",
      body: "Designed to help reduce sensitivity after whitening.",
    },
    {
      icon: Lock,
      title: "Daily Protection",
      body: "A complete ritual that protects your smile every day.",
    },
  ];

  return (
    <section
      id="why-luxora"
      className="relative overflow-hidden bg-gradient-to-b from-luxora-navy to-luxora-midnight py-20 md:py-28"
    >
      <SparkleField count={24} color="blue" density="low" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeader
          label="WHY LUXORA"
          headline="Designed With Care. Guided by Dentists. Made for Your Smile."
          subheadline="Beauty meets science in every Luxora product — crafted to earn your trust with every use."
          light
          className="mb-14 md:mb-20"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors hover:bg-white/10"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* Soft blue glow on hover */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-luxora-blue/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-luxora-soft-gold">
                  <point.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-medium text-white">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-luxora-silver/80">
                  {point.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
