"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SparkleField } from "@/components/luxora/sparkle-field";
import { PremiumButton } from "@/components/luxora/premium-button";
import { StaticImage } from "@/components/luxora/luxora-image";
import { useIsTouch } from "@/hooks/use-is-touch";
import { cn } from "@/lib/utils";

/**
 * HeroSection
 * Cinematic luxury hero using the real 3D chrome tooth logo and floating strip
 * with the full reference photo as background.
 */
export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const isTouch = useIsTouch();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Clean premium gradient background — no poster image to avoid headline collision */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxora-white via-luxora-ice to-luxora-mist" />

      {/* Soft navy radial glow behind the chrome tooth */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-[90vh] w-[90vh] -translate-y-1/2 translate-x-1/3 rounded-full opacity-[0.12] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(6,26,53,0.9) 0%, transparent 70%)",
        }}
      />

      {/* Soft gold radial accent top-left */}
      <div
        className="pointer-events-none absolute -left-20 -top-20 h-[50vh] w-[50vh] rounded-full opacity-[0.10] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.8) 0%, transparent 70%)",
        }}
      />

      {/* Slow moving light */}
      <div
        className={cn(
          "pointer-events-none absolute left-0 top-0 h-[120%] w-[60%] -translate-x-1/2 rounded-full opacity-30 blur-[100px]",
          !shouldReduceMotion && !isTouch && "animate-light-move"
        )}
        style={{
          background:
            "linear-gradient(120deg, rgba(125,187,255,0.4) 0%, transparent 70%)",
        }}
      />

      <SparkleField count={30} color="white" density="medium" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-12 lg:py-24">
        {/* Left copy */}
        <div className="flex flex-col items-start gap-6">
          <motion.span
            className="label-luxury text-luxora-gold"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            PREMIUM ORAL CARE
          </motion.span>

          <motion.h1
            className="font-serif text-6xl font-medium leading-[0.95] tracking-tight text-luxora-navy md:text-7xl lg:text-8xl"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            LUXORA
          </motion.h1>

          <motion.p
            className="font-serif text-2xl font-light italic text-luxora-navy/80 md:text-3xl"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Dental Care Reimagined
          </motion.p>

          <motion.div
            className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-luxora-navy/70"
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <span>Whiten</span>
            <span className="inline-block h-1 w-1 rounded-full bg-luxora-blue"></span>
            <span>Strengthen</span>
            <span className="inline-block h-1 w-1 rounded-full bg-luxora-blue"></span>
            <span>Protect</span>
          </motion.div>

          <motion.p
            className="max-w-md text-base leading-relaxed text-luxora-navy/70 md:text-lg"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            A premium oral-care ritual designed to brighten your smile, support
            enamel strength, and protect your confidence every day.
          </motion.p>

          <motion.div
            className="mt-2 flex flex-col gap-3 sm:flex-row"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <PremiumButton variant="primary" size="lg" href="#products">
              Explore Products
            </PremiumButton>
            <PremiumButton variant="outline" size="lg" href="#complete-care">
              See Complete Kit
            </PremiumButton>
          </motion.div>
        </div>

        {/* Right visual */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[520px]">
            <StaticImage
              src="/assets/luxora/extracted/chrome-tooth-3d.png"
              alt="Luxora chrome metallic tooth emblem with flowing blue ribbon"
              width={720}
              height={500}
              className="drop-shadow-2xl"
              priority
            />

            {/* Floating strip visual */}
            <motion.div
              className="absolute -bottom-6 left-1/2 w-[70%] -translate-x-1/2"
              animate={
                !shouldReduceMotion && !isTouch
                  ? { y: [0, -18, 0], rotate: [-2, 3, -2] }
                  : {}
              }
              transition={{
                duration: isTouch ? 10 : 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
            >
              <StaticImage
                src="/assets/luxora/extracted/strip-floating-3d.png"
                alt="Luxora dental strips floating with blue ribbon glow"
                width={1020}
                height={441}
                className="drop-shadow-xl ribbon-glow"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
