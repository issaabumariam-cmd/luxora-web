"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useIsTouch } from "@/hooks/use-is-touch";
import { cn } from "@/lib/utils";

/**
 * BlueRibbon
 * A standalone flowing ribbon swoosh for section accents and transitions.
 * Drops the SVG blur filter on touch devices to prevent jank.
 */
interface BlueRibbonProps {
  className?: string;
  animate?: boolean;
  variant?: "light" | "dark";
}

export function BlueRibbon({
  className,
  animate = true,
  variant = "light",
}: BlueRibbonProps) {
  const shouldReduceMotion = useReducedMotion();
  const isTouch = useIsTouch();

  return (
    <svg
      viewBox="0 0 400 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-auto", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ribbonGradientStandalone" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={variant === "dark" ? "rgba(58,141,255,0.25)" : "rgba(125,187,255,0.35)"} />
          <stop offset="35%" stopColor="#7DBBFF" />
          <stop offset="65%" stopColor="#3A8DFF" />
          <stop offset="100%" stopColor={variant === "dark" ? "rgba(58,141,255,0.25)" : "rgba(125,187,255,0.35)"} />
        </linearGradient>
        {!isTouch && (
          <filter id="ribbonGlowStandalone" x="-40%" y="-60%" width="180%" height="220%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        )}
      </defs>
        <motion.path
          d="M-20 58
             C40 18, 100 28, 160 44
             C220 60, 280 26, 340 42
             C380 52, 400 36, 420 48"
          stroke="url(#ribbonGradientStandalone)"
          strokeWidth={isTouch ? 6 : 10}
          strokeLinecap="round"
          fill="none"
          filter={isTouch ? undefined : "url(#ribbonGlowStandalone)"}
          initial={shouldReduceMotion || !animate || isTouch ? {} : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: isTouch ? 0.8 : 1.8, ease: "easeInOut" }}
        />
      <motion.path
        d="M-20 66
           C50 30, 110 40, 170 54
           C230 68, 290 36, 350 50
           C390 58, 410 46, 430 56"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
          initial={shouldReduceMotion || !animate || isTouch ? {} : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: isTouch ? 0.8 : 2, ease: "easeInOut", delay: isTouch ? 0 : 0.2 }}
      />
    </svg>
  );
}
