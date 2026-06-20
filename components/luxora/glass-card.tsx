"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * GlassCard
 * Frosted glass card with subtle shimmer and hover lift.
 */
interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "light" | "dark" | "navy";
  hover?: boolean;
  shimmer?: boolean;
}

export function GlassCard({
  children,
  className,
  variant = "light",
  hover = true,
  shimmer = false,
}: GlassCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    light: "glass",
    dark: "glass-dark",
    navy: "glass-navy",
  };

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl p-6 md:p-8",
        variants[variant],
        hover && "transition-all duration-500 ease-out",
        className
      )}
      whileHover={
        hover && !shouldReduceMotion
          ? { y: -8, boxShadow: "0 32px 72px rgba(6,26,53,0.12)" }
          : {}
      }
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {shimmer && (
        <div className="pointer-events-none absolute inset-0 -translate-x-full animate-sweep shimmer opacity-40" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
