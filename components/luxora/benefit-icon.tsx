"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * BenefitIcon
 * Circular icon with glass background, used for product benefits.
 */
interface BenefitIconProps {
  icon: LucideIcon;
  label: string;
  description?: string;
  className?: string;
  variant?: "light" | "dark" | "outline";
  size?: "sm" | "md" | "lg";
}

export function BenefitIcon({
  icon: Icon,
  label,
  description,
  className,
  variant = "light",
  size = "md",
}: BenefitIconProps) {
  const shouldReduceMotion = useReducedMotion();

  const sizes = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };

  const iconSizes = {
    sm: 18,
    md: 24,
    lg: 28,
  };

  const variants = {
    light: "bg-white/80 border-luxora-mist text-luxora-navy shadow-luxury",
    dark: "bg-luxora-navy/80 border-luxora-navy text-white shadow-luxury",
    outline:
      "bg-transparent border-luxora-navy/15 text-luxora-navy hover:border-luxora-blue/40",
  };

  return (
    <motion.div
      className={cn("flex flex-col items-center gap-3 text-center", className)}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        className={cn(
          "flex items-center justify-center rounded-full border backdrop-blur-md",
          sizes[size],
          variants[variant]
        )}
        whileHover={
          !shouldReduceMotion
            ? { scale: 1.08, boxShadow: "0 0 24px rgba(58,141,255,0.18)" }
            : {}
        }
        transition={{ duration: 0.3 }}
      >
        <Icon size={iconSizes[size]} strokeWidth={1.5} />
      </motion.div>
      <div className="flex flex-col gap-1">
        <span className="text-xs font-semibold uppercase tracking-widest text-luxora-navy">
          {label}
        </span>
        {description && (
          <span className="max-w-[200px] text-sm leading-snug text-luxora-navy/60">
            {description}
          </span>
        )}
      </div>
    </motion.div>
  );
}
