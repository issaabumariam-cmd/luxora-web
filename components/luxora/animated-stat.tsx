"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * AnimatedStat
 * Counts up a numeric value when scrolled into view.
 */
interface AnimatedStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  className?: string;
  light?: boolean;
  decimals?: number;
  duration?: number;
}

export function AnimatedStat({
  value,
  suffix = "",
  prefix = "",
  label,
  className,
  light = false,
  decimals = 0,
  duration = 2,
}: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const display = useTransform(motionValue, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      motionValue.set(value);
      return;
    }
    const controls = animate(motionValue, value, {
      duration,
      ease: [0.25, 0.46, 0.45, 0.94],
    });
    return controls.stop;
  }, [isInView, value, duration, shouldReduceMotion, motionValue]);

  return (
    <motion.div
      ref={ref}
      className={cn("flex flex-col items-center text-center", className)}
      initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <span
        className={cn(
          "font-serif text-6xl font-medium leading-none md:text-7xl",
          light ? "text-white" : "text-luxora-navy"
        )}
      >
        {prefix}
        <motion.span>{display}</motion.span>
        {suffix}
      </span>
      <span
        className={cn(
          "mt-2 max-w-[220px] text-sm leading-snug",
          light ? "text-luxora-silver" : "text-luxora-navy/70"
        )}
      >
        {label}
      </span>
    </motion.div>
  );
}
