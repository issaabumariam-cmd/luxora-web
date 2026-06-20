"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * LuxoraLogo
 * Elegant serif wordmark with optional dental-care label.
 */
interface LuxoraLogoProps {
  className?: string;
  showTagline?: boolean;
  light?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export function LuxoraLogo({
  className,
  showTagline = true,
  light = false,
  size = "md",
}: LuxoraLogoProps) {
  const shouldReduceMotion = useReducedMotion();

  const sizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl md:text-5xl",
  };

  return (
    <motion.div
      className={cn("flex flex-col items-start", className)}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <span
        className={cn(
          "font-serif font-semibold tracking-[0.12em] leading-none",
          sizes[size],
          light ? "text-white" : "text-luxora-navy"
        )}
      >
        LUXORA
      </span>
      {showTagline && (
        <span
          className={cn(
            "label-luxury mt-1.5",
            light ? "text-luxora-silver" : "text-luxora-navy/60"
          )}
        >
          DENTAL CARE
        </span>
      )}
    </motion.div>
  );
}
