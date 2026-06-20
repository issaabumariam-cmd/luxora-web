"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useIsTouch } from "@/hooks/use-is-touch";
import { cn } from "@/lib/utils";

/**
 * SparkleField
 * Soft sparkle particles floating in the background of a section.
 * Disabled entirely on touch devices for performance.
 */
interface SparkleFieldProps {
  className?: string;
  count?: number;
  color?: "white" | "gold" | "blue";
  density?: "low" | "medium" | "high";
}

export function SparkleField({
  className,
  count = 20,
  color = "white",
  density = "medium",
}: SparkleFieldProps) {
  const shouldReduceMotion = useReducedMotion();
  const isTouch = useIsTouch();

  const colors = {
    white: "rgba(255, 255, 255, 0.9)",
    gold: "rgba(230, 201, 120, 0.9)",
    blue: "rgba(125, 187, 255, 0.9)",
  };

  const multipliers = {
    low: 0.6,
    medium: 1,
    high: 1.6,
  };

  const multiplier = multipliers[density];

  const sparkles = useMemo(() => {
    const total = Math.floor(count * multiplier);
    return Array.from({ length: total }).map((_, i) => ({
      id: i,
      x: `${(i * 137.5) % 100}%`, // pseudo-random golden-ratio spread
      y: `${(i * 47.3) % 100}%`,
      size: 2 + (i % 4),
      delay: (i * 0.18) % 3,
      duration: 2.5 + (i % 3) * 0.8,
    }));
  }, [count, multiplier]);

  if (shouldReduceMotion || isTouch) {
    return null;
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            background: colors[color],
            boxShadow: `0 0 ${s.size * 2}px ${colors[color]}`,
          }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.4, 1, 0.6],
            y: [0, -12, 0],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
