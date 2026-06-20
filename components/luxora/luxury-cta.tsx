"use client";

import { SparkleField } from "@/components/luxora/sparkle-field";
import { PremiumButton } from "@/components/luxora/premium-button";
import { BlueRibbon } from "@/components/luxora/blue-ribbon";
import { StaticImage } from "@/components/luxora/luxora-image";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

/**
 * LuxuryCTA
 * Final conversion section using the real transparent 3D chrome tooth logo.
 */
interface LuxuryCTAProps {
  headline: string;
  body: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
}

export function LuxuryCTA({
  headline,
  body,
  primaryCta,
  secondaryCta,
  className,
}: LuxuryCTAProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-luxora-navy to-luxora-midnight py-24 md:py-32",
        className
      )}
    >
      <SparkleField count={24} color="gold" density="medium" />

      {/* Blue ribbon background */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-40">
        <BlueRibbon variant="dark" animate={!shouldReduceMotion} />
      </div>

      {/* Floating chrome tooth */}
      <motion.div
        className="pointer-events-none absolute right-[-8%] top-1/2 w-[40vw] max-w-[420px] -translate-y-1/2 opacity-20 md:right-[5%] md:opacity-25"
        animate={
          !shouldReduceMotion
            ? { y: [0, -20, 0], rotate: [0, 3, 0] }
            : {}
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <StaticImage
          src="/assets/luxora/extracted/chrome-tooth-3d.png"
          alt="Luxora chrome metallic tooth emblem"
          width={720}
          height={500}
        />
      </motion.div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center md:px-12">
        <span className="label-luxury mb-4 text-luxora-soft-gold">
          YOUR SMILE DESERVES THE BEST
        </span>
        <h2 className="font-serif text-4xl font-medium leading-[1.1] text-white md:text-5xl lg:text-6xl">
          {headline}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-luxora-silver md:text-lg">
          {body}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <PremiumButton variant="secondary" size="lg" href={primaryCta.href}>
            {primaryCta.label}
          </PremiumButton>
          {secondaryCta && (
            <PremiumButton variant="ghost" size="lg" href={secondaryCta.href}>
              {secondaryCta.label}
            </PremiumButton>
          )}
        </div>
      </div>
    </section>
  );
}
