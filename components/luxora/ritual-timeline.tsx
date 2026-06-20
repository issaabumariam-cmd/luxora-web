"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface RitualStep {
  number: string;
  title: string;
  body: string;
  icon: LucideIcon;
}

/**
 * RitualTimeline
 * Elegant 3-step routine with a blue ribbon progress line.
 */
interface RitualTimelineProps {
  steps: RitualStep[];
  className?: string;
}

export function RitualTimeline({ steps, className }: RitualTimelineProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn("relative", className)}>
      {/* Vertical ribbon connecting steps (hidden on mobile) */}
      <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 overflow-hidden rounded-full bg-luxora-mist lg:block">
        <motion.div
          className="h-full w-full origin-top bg-gradient-to-b from-luxora-blue via-luxora-ribbon to-luxora-blue"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      </div>

      <div className="relative flex flex-col gap-12 lg:gap-16">
        {steps.map((step, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={step.number}
              className={cn(
                "relative grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]",
                isEven ? "" : "lg:grid-cols-[1fr_auto_1fr]"
              )}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* Left card slot */}
              <div className={cn("flex", isEven ? "lg:justify-end" : "lg:justify-start lg:order-3")}>
                {isEven ? (
                  <div className="rounded-2xl bg-white p-6 shadow-luxury lg:max-w-md lg:text-right">
                    <span className="label-luxury text-luxora-gold">
                      STEP {step.number}
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-luxora-navy">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-luxora-navy/70">
                      {step.body}
                    </p>
                  </div>
                ) : (
                  <div className="hidden lg:block lg:w-full" />
                )}
              </div>

              {/* Step node */}
              <div className="relative z-10 flex h-16 w-16 items-center justify-center self-center rounded-full border border-luxora-blue/30 bg-white shadow-luxury lg:order-2">
                <step.icon size={24} className="text-luxora-blue" strokeWidth={1.5} />
              </div>

              {/* Right card slot */}
              <div className={cn("flex", isEven ? "lg:justify-start lg:order-3" : "lg:justify-start")}>
                {!isEven ? (
                  <div className="rounded-2xl bg-white p-6 shadow-luxury lg:max-w-md lg:text-left">
                    <span className="label-luxury text-luxora-gold">
                      STEP {step.number}
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-luxora-navy">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-luxora-navy/70">
                      {step.body}
                    </p>
                  </div>
                ) : (
                  <div className="hidden lg:block lg:w-full" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
